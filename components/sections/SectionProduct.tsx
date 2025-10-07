import React from 'react';
import SectionWrapper from '../SectionWrapper';
import GameBoard from '../game/GameBoard';
import GameCard from '../game/GameCard';
import Rules from '../game/Rules';
import { cardDeck } from '../game/data';
import type { CardData, CardType } from '../../types';

const SectionProduct: React.FC = () => {
    const handlePrint = () => {
        window.print();
    };

    const cardGroups: { title: string; type: CardType; description: string }[] = [
        { title: "Thẻ Phương thức Vận động (5 lá)", type: 'motion', description: "Mô tả các dạng vận động trừu tượng của vật chất." },
        { title: "Thẻ Sự vật/Hiện tượng (25 lá)", type: 'phenomenon', description: "Các đối tượng, khái niệm vật chất cụ thể." },
        { title: "Thẻ Thời gian (6 lá)", type: 'time', description: "Tác động đến lượt chơi và tiến trình của người chơi." },
        { title: "Thẻ Không gian (6 lá)", type: 'space', description: "Tác động đến vị trí của người chơi trên bàn cờ." },
        { title: "Thẻ Ý thức (5 lá)", type: 'consciousness', description: "Phản ánh các trạng thái nhận thức, ảnh hưởng đến điểm Insight." },
        { title: "Thẻ Quan hệ Vật chất–Ý thức (5 lá)", type: 'relation', description: "Các câu hỏi triết học để kiểm tra kiến thức." },
    ];

    return (
        <SectionWrapper title="2. Board Game & Bộ Bài: 'Hành Trình Vật Chất'">
            <p>
                "Hành Trình Vật Chất" phiên bản mới là một board game chiến lược hình xoắn ốc, nơi người chơi khám phá các quy luật của thế giới vật chất thông qua một bộ 52 lá bài đa dạng. Mục tiêu là tích lũy đủ "Insight" (Điểm triết học) và tiến vào "Biện chứng Trung tâm".
            </p>

            <div className="text-center my-6">
                <button
                    onClick={handlePrint}
                    className="bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-900 transition-colors print:hidden shadow-lg"
                >
                    In Toàn Bộ Board Game
                </button>
                <p className="text-sm text-gray-500 mt-2 print:hidden">Bấm để mở cửa sổ in. Chọn 'Lưu dưới dạng PDF' để xuất file chất lượng cao.</p>
            </div>

            <div id="printable-area" className="space-y-16">
                <div>
                    <h3 className="text-2xl font-semibold text-slate-700 mb-4 border-l-4 border-slate-500 pl-3">Bàn Cờ Xoắn Ốc</h3>
                    <GameBoard />
                </div>

                <div className="page-break">
                    <h3 className="text-2xl font-semibold text-slate-700 mb-4 border-l-4 border-slate-500 pl-3">Luật Chơi Mới</h3>
                    <Rules />
                </div>

                <div className="page-break">
                     <h3 className="text-2xl font-semibold text-slate-700 mb-4 border-l-4 border-slate-500 pl-3">Toàn Bộ 52 Lá Bài</h3>
                    {cardGroups.map(group => (
                        <div key={group.type} className="mb-12">
                            <h4 className="text-xl font-bold text-slate-800 mb-1">{group.title}</h4>
                             <p className="text-md text-gray-600 mb-4">{group.description}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 print:grid-cols-3">
                                {cardDeck.filter(card => card.type === group.type).map((card, index) => (
                                    <GameCard key={`${group.type}-${index}`} card={card} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>
                {`
                  @media print {
                    body * {
                      visibility: hidden;
                    }
                    #printable-area, #printable-area * {
                      visibility: visible;
                    }
                    #printable-area {
                      position: absolute;
                      left: 0;
                      top: 0;
                      width: 100%;
                    }
                    .page-break {
                        page-break-before: always;
                    }
                  }
                `}
            </style>
        </SectionWrapper>
    );
};

export default SectionProduct;
