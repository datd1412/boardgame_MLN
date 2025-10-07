import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";

const Chatbot: React.FC = () => {
    const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const chatRef = useRef<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            chatRef.current = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: "Bạn là một Quản Trò (Game Master) cho một board game triết học tên là 'Hành Trình Vật Chất'. Nhiệm vụ của bạn là giải thích luật chơi, làm rõ các hiệu ứng của thẻ bài, và trả lời các câu hỏi liên quan đến khái niệm triết học trong game một cách thân thiện, súc tích và dễ hiểu. Hãy luôn giữ vai trò là một người hướng dẫn vui vẻ.",
                },
            });
        } catch (e: any) {
            setError("Không thể khởi tạo AI. Vui lòng kiểm tra API Key.");
            console.error(e);
        }
    }, []);

     useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = async () => {
        if (!input.trim() || isLoading || !chatRef.current) return;

        const userMessage = { role: 'user' as const, text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
        setError(null);

        try {
            const response = await chatRef.current.sendMessage({ message: input });
            const modelMessage = { role: 'model' as const, text: response.text };
            setMessages(prev => [...prev, modelMessage]);
        } catch (e: any) {
            setError("Đã có lỗi xảy ra. Vui lòng thử lại.");
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-lg border border-slate-200 max-w-2xl mx-auto">
            <div className="p-4 h-96 overflow-y-auto bg-slate-50 flex flex-col gap-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs md:max-w-md p-3 rounded-2xl ${msg.role === 'user' ? 'bg-slate-800 text-white rounded-br-lg' : 'bg-gray-200 text-gray-800 rounded-bl-lg'}`}>
                             <p className="text-sm" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }}></p>
                        </div>
                    </div>
                ))}
                 {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-gray-200 text-gray-800 p-3 rounded-2xl rounded-bl-lg">
                           <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></div>
                           </div>
                        </div>
                    </div>
                )}
                {error && <p className="text-red-500 text-sm">{error}</p>}
                 <div ref={messagesEndRef} />
            </div>
            <div className="p-4 border-t border-slate-200 flex items-center gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Nhập câu hỏi của bạn..."
                    className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                    disabled={isLoading}
                />
                <button
                    onClick={handleSendMessage}
                    className="bg-slate-800 text-white p-2 rounded-lg disabled:bg-slate-400 hover:bg-slate-900 transition-colors"
                    disabled={isLoading || !input.trim()}
                    aria-label="Gửi"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </button>
            </div>
        </div>
    );
};

export default Chatbot;
