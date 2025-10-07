import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import SectionWrapper from '../SectionWrapper';
import PlayableBoard from '../game/PlayableBoard';
import GameCard from '../game/GameCard';
import { cardDeck, TILE_DATA } from '../game/data';
import type { CardData, CardType } from '../../types';

type GameState = 'IDLE' | 'ANSWERING' | 'FEEDBACK';

const SectionPlaytest: React.FC = () => {
    const [gameState, setGameState] = useState<GameState>('IDLE');
    const [playerPosition, setPlayerPosition] = useState(0);
    const [insightScore, setInsightScore] = useState(0);
    const [diceValue, setDiceValue] = useState<number | null>(null);
    const [currentCards, setCurrentCards] = useState<CardData[]>([]);
    const [heldPhenomenonCard, setHeldPhenomenonCard] = useState<CardData | null>(null);
    const [userAnswer, setUserAnswer] = useState('');
    const [aiFeedback, setAiFeedback] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [gameMessage, setGameMessage] = useState('Chào mừng! Hãy lắc xúc xắc để bắt đầu hành trình triết học.');
    
    const aiRef = useRef<GoogleGenAI | null>(null);

    const getAi = () => {
        if (!aiRef.current) {
             try {
                aiRef.current = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
             } catch (e) {
                 console.error("Failed to initialize AI", e);
                 setGameMessage("Lỗi: Không thể khởi tạo AI. Vui lòng kiểm tra API Key.");
             }
        }
        return aiRef.current;
    }

    const drawCard = (type: CardType): CardData => {
        const deckOfType = cardDeck.filter(card => card.type === type);
        return deckOfType[Math.floor(Math.random() * deckOfType.length)];
    }

    const handleRollDice = () => {
        const roll = Math.floor(Math.random() * 6) + 1;
        setDiceValue(roll);
        
        const newPosition = Math.min(playerPosition + roll, TILE_DATA.length - 1);
        setPlayerPosition(newPosition);

        const tile = TILE_DATA[newPosition];
        setGameMessage(`Bạn đã lắc được ${roll} nút và di chuyển đến ô ${newPosition + 1}.`);

        if (tile.type === 'draw_motion_phenomenon') {
            const motionCard = drawCard('motion');
            const phenomenonCard = drawCard('phenomenon');
            setCurrentCards([motionCard, phenomenonCard]);
            setGameState('ANSWERING');
            setGameMessage(`Bạn phải kết hợp 2 thẻ này. Hãy đưa ra một ví dụ thực tế.`);
        } else if (tile.type.startsWith('draw_')) {
            const cardType = tile.type.split('_')[1] as CardType;
            setCurrentCards([drawCard(cardType)]);
            setGameState('ANSWERING');
            setGameMessage(`Bạn đã rút được một thẻ. Hãy trả lời câu hỏi/tình huống bên dưới.`);
        } else {
            let tileMessage = '';
            if (tile.type === 'normal') tileMessage = 'Đây là ô thường, không có gì xảy ra. Bạn có thể qua lượt tiếp theo.';
            if (tile.type === 'pause') tileMessage = 'Bạn đã đến ô Đứng im tương đối, mất một lượt!';
            if (tile.type === 'center') tileMessage = 'Chúc mừng! Bạn đã đến Biện chứng Trung tâm! Trò chơi kết thúc.';
            
            setAiFeedback(tileMessage);
            setGameState('FEEDBACK');
        }
    };
    
    const handleRetryCombination = () => {
        if (!heldPhenomenonCard) return;
        const newMotionCard = drawCard('motion');
        setCurrentCards([newMotionCard, heldPhenomenonCard]);
        setGameState('ANSWERING');
        setGameMessage('Bạn đã rút thẻ Vận động mới. Hãy thử kết hợp lại.');
    };

    const handleSubmitAnswer = async () => {
        if (!userAnswer.trim() || currentCards.length === 0) return;

        setIsLoading(true);
        setAiFeedback('');
        setGameState('FEEDBACK');
        const ai = getAi();
        if(!ai){
            setAiFeedback("Lỗi: Không thể khởi tạo AI.");
            setIsLoading(false);
            return;
        }

        const isCombinationChallenge = currentCards.length === 2 && currentCards.some(c => c.type === 'motion');
        let prompt: string;

        if (isCombinationChallenge) {
            const motionCard = currentCards.find(c => c.type === 'motion')!;
            const phenomenonCard = currentCards.find(c => c.type === 'phenomenon')!;
            prompt = `Bạn là một giáo sư triết học. Người chơi cần kết hợp 2 thẻ:
- Thẻ Vận Động: "${motionCard.title}" (${motionCard.content})
- Thẻ Sự Vật: "${phenomenonCard.title}"
Họ đã đưa ra câu trả lời: "${userAnswer}"

Hãy đánh giá câu trả lời.
- Nếu câu trả lời đúng và hợp lý, hãy bắt đầu phản hồi của bạn bằng từ khóa "ĐÚNG:".
- Nếu câu trả lời sai hoặc không liên quan, hãy bắt đầu bằng từ khóa "SAI:".
Sau từ khóa, hãy giải thích ngắn gọn tại sao nó đúng hoặc sai và đưa ra một ví dụ mẫu.`;
        } else {
            const card = currentCards[0];
            prompt = `Bạn là một giáo sư triết học thân thiện. Một người chơi đã rút được thẻ bài sau:
- Tiêu đề thẻ: "${card.title}"
- Nội dung/Câu hỏi: "${card.content}"
Người chơi đã đưa ra câu trả lời: "${userAnswer}"
Nhiệm vụ của bạn là đưa ra nhận xét ngắn gọn và cung cấp câu trả lời mẫu hoặc giải thích sâu hơn.`;
        }

        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });
            const feedbackText = response.text;
            setAiFeedback(feedbackText);

            if (isCombinationChallenge) {
                if (feedbackText.startsWith('ĐÚNG:')) {
                    setHeldPhenomenonCard(null); // Player is freed
                    setGameMessage('Chính xác! Bạn đã hiểu rõ mối liên hệ. Lượt sau bạn được đi tiếp.');
                } else { // Assume SAI:
                    const phenomenonCard = currentCards.find(c => c.type === 'phenomenon');
                    setHeldPhenomenonCard(phenomenonCard || null);
                    setGameMessage('Chưa đúng. Bạn bị giam ở ô này! Lượt sau hãy thử lại với thẻ Vận động khác.');
                }
            }
        } catch (error) {
            console.error(error);
            setAiFeedback("Rất tiếc, đã có lỗi xảy ra khi kết nối với AI. Vui lòng thử lại.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleNextTurn = () => {
        setGameState('IDLE');
        setCurrentCards([]);
        setUserAnswer('');
        setAiFeedback('');
        setDiceValue(null);
        
        if (playerPosition === TILE_DATA.length - 1) {
            setPlayerPosition(0);
            setInsightScore(0);
            setHeldPhenomenonCard(null);
            setGameMessage('Trò chơi kết thúc! Bấm lắc xúc xắc để bắt đầu lại từ đầu.');
        } else if (heldPhenomenonCard) {
            setGameMessage('Bạn vẫn đang bị giam. Hãy rút một thẻ Vận động mới và thử lại.');
        } else {
            setGameMessage('Đến lượt của bạn. Hãy lắc xúc xắc.');
        }
    };

    return (
      <SectionWrapper title="5. Chơi thử Board Game">
        <div className="bg-slate-50 p-4 sm:p-6 rounded-lg border border-slate-200">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 pb-4 border-b border-slate-200 gap-2">
                <h3 className="text-xl font-bold text-slate-800">
                    Điểm Hiểu Biết (Insight): <span className="text-rose-600 font-black text-2xl">{insightScore}</span>
                </h3>
                <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-500">Tự cộng điểm nếu bạn thấy hợp lý:</p>
                    <button onClick={() => setInsightScore(s => Math.max(0, s - 1))} className="bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded-full font-bold">-</button>
                    <button onClick={() => setInsightScore(s => s + 1)} className="bg-gray-200 hover:bg-gray-300 w-8 h-8 rounded-full font-bold">+</button>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                <PlayableBoard playerPosition={playerPosition} />
                <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-inner min-h-[500px]">
                    
                    {gameState === 'IDLE' && (
                        <div className="text-center animate-fade-in">
                            <p className="text-lg text-gray-600 mb-6">{gameMessage}</p>
                            {heldPhenomenonCard ? (
                                <div>
                                    <p className="mb-2 font-semibold">Thẻ bạn đang giữ:</p>
                                    <div className="max-w-xs mx-auto mb-4">
                                         <GameCard card={heldPhenomenonCard} />
                                    </div>
                                    <button onClick={handleRetryCombination} className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg text-xl">
                                        Rút thẻ Vận động mới
                                    </button>
                                </div>
                            ) : (
                                <button onClick={handleRollDice} className="bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-900 transition-colors shadow-lg text-xl">
                                    🎲 Lắc xúc xắc
                                </button>
                            )}
                        </div>
                    )}

                    {gameState === 'ANSWERING' && currentCards.length > 0 && (
                         <div className="w-full animate-fade-in flex flex-col h-full">
                            <p className="text-md text-gray-600 mb-4 text-center">{gameMessage}</p>
                            <div className="flex gap-4 justify-center">
                                {currentCards.map((card, index) => (
                                    <div key={index} className="w-1/2">
                                        <GameCard card={card} />
                                    </div>
                                ))}
                            </div>
                            <textarea 
                                value={userAnswer}
                                onChange={(e) => setUserAnswer(e.target.value)}
                                placeholder="Nhập câu trả lời của bạn ở đây..."
                                className="w-full mt-4 p-2 border border-gray-300 rounded-lg h-28 flex-grow focus:outline-none focus:ring-2 focus:ring-slate-500"
                            />
                            <button onClick={handleSubmitAnswer} disabled={!userAnswer.trim()} className="mt-4 w-full bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-400">
                                Gửi câu trả lời
                            </button>
                        </div>
                    )}
                    
                    {gameState === 'FEEDBACK' && (
                        <div className="w-full text-center animate-fade-in flex flex-col h-full">
                             <p className="text-md text-gray-600 mb-4">{gameMessage}</p>
                             <div className="flex gap-4 justify-center mb-4">
                                {currentCards.map((card, index) => (
                                    <div key={index} className="w-1/2">
                                        <GameCard card={card} />
                                    </div>
                                ))}
                             </div>
                             <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-left flex-grow max-h-72 overflow-y-auto">
                                <h4 className="font-bold text-blue-800">Phản hồi từ Quản Trò AI:</h4>
                                {isLoading 
                                    ? <p className="text-sm text-gray-600">AI đang suy nghĩ...</p> 
                                    : <p className="text-sm text-gray-700 whitespace-pre-wrap">{aiFeedback}</p>
                                }
                             </div>
                             <button onClick={handleNextTurn} className="mt-4 w-full bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-900 transition-colors shadow-lg">
                                Lượt tiếp theo
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
      </SectionWrapper>
    );
};

export default SectionPlaytest;
