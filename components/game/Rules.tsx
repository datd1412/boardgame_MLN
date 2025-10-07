import React from 'react';

const Rules: React.FC = () => {
    return (
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 space-y-6 text-base">
            <div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">I. Mục tiêu trò chơi</h4>
                <p>Người chơi đầu tiên tiến vào ô "Biện chứng Trung tâm" (⭐) với <strong>ít nhất 10 điểm Insight</strong> và trả lời đúng một câu hỏi triết học cuối cùng sẽ là người chiến thắng.</p>
            </div>
            <div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">II. Thiết lập</h4>
                <ul className="list-disc list-inside space-y-1">
                    <li>Mỗi người chơi chọn một vật đại diện, đặt ở ô "BẮT ĐẦU".</li>
                    <li>Tất cả người chơi bắt đầu với <strong>0 Insight</strong>.</li>
                    <li>Xáo kỹ 52 lá bài và đặt thành một chồng úp xuống bàn.</li>
                </ul>
            </div>
            <div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">III. Diễn biến một lượt</h4>
                <ol className="list-decimal list-inside space-y-2">
                    <li><strong>Gieo xúc xắc:</strong> Gieo một viên xúc xắc và di chuyển quân cờ của bạn theo số nút.</li>
                    <li><strong>Thực hiện hành động tại ô:</strong>
                        <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                            <li><strong>Ô Thường:</strong> Không có gì xảy ra. Lượt của bạn kết thúc.</li>
                            <li><strong>Ô Rút Thẻ (⚙️🌍, ⏳, 📍, 💡, 🔄):</strong> Rút lá bài trên cùng của chồng bài và làm theo hướng dẫn.
                                <ul className="list-disc list-inside space-y-2 mt-2 ml-4 text-sm">
                                    <li><strong>Nếu rút thẻ ⚙️ (Vận động):</strong> Bạn phải kết hợp nó với một thẻ 🌍 (Sự vật) trên tay (nếu có) để tạo ra một ví dụ hợp lệ. Đúng: +2 Insight. Sai hoặc không có thẻ: -1 Insight.</li>
                                    <li><strong>Nếu rút thẻ Thời gian/Không gian (⏳, 📍):</strong> Hiệu ứng được áp dụng ngay lập tức cho quân cờ hoặc lượt đi của bạn.</li>
                                    <li><strong>Nếu rút thẻ Ý thức/Quan hệ (💡, 🔄):</strong> Thực hiện hiệu ứng hoặc trả lời câu hỏi ngay lập tức để nhận thưởng hoặc chịu phạt.</li>
                                </ul>
                            </li>
                             <li><strong>Ô Đứng im tương đối (⏸️):</strong> Mất lượt đi tiếp theo. Tượng trưng cho trạng thái cân bằng tạm thời của vật chất.</li>
                        </ul>
                    </li>
                </ol>
            </div>
            <div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">IV. Insight - Điểm Triết Học</h4>
                 <p>Insight là thước đo "mức độ giác ngộ triết học" của bạn. Bạn kiếm được Insight bằng cách trả lời đúng các câu hỏi và kết hợp các thẻ bài một cách logic.</p>
            </div>
             <div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">V. Chiến thắng</h4>
                <p>Để thắng, bạn phải dừng lại chính xác tại ô "Biện chứng Trung tâm" (⭐). Khi đó, nếu có đủ 10 Insight, bạn sẽ trả lời một câu hỏi triết học cuối cùng từ Quản Trò. Trả lời đúng, bạn thắng cuộc!</p>
            </div>
        </div>
    );
};

export default Rules;
