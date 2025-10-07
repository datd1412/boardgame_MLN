import React from 'react';
import SectionWrapper from '../SectionWrapper';
import Chatbot from '../ai/Chatbot';

const SectionAI: React.FC = () => {
  return (
    <SectionWrapper title="3. Ứng dụng AI">
      <div className="space-y-8">
        <div>
          <p>
            Trí tuệ nhân tạo (AI), cụ thể là mô hình ngôn ngữ lớn Gemini của Google, đã đóng vai trò là một công cụ hỗ trợ đắc lực trong quá trình lên ý tưởng và hiện thực hóa sản phẩm này. Tuy nhiên, sản phẩm cuối cùng là sự kết hợp giữa khả năng của AI và tư duy, kiến thức chuyên môn của sinh viên.
          </p>
          <div className="mt-6 flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Phần do AI thực hiện</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Lên ý tưởng trò chơi:</strong> Dựa trên các khái niệm triết học được cung cấp, AI đã đề xuất ý tưởng về một board game dạng "roll-and-move" với các chặng đường tương ứng với 5 hình thức vận động.</li>
                <li><strong>Thiết kế cơ chế cơ bản:</strong> AI phác thảo các cơ chế chính như ô "Vận Động", "Đứng Im", "Nhận Thức" và hai loại thẻ bài để gắn kết lý thuyết với gameplay.</li>
                <li><strong>Sáng tạo nội dung thẻ bài:</strong> AI đã tạo ra các ví dụ ban đầu cho nội dung của Thẻ Vận Động và Thẻ Nhận Thức, đảm bảo tính đa dạng và phù hợp với từng giai đoạn trên bàn cờ.</li>  
              </ul>
            </div>
            <div className="flex-1 bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Phần do sinh viên thực hiện</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Cung cấp kiến thức nền tảng:</strong> Sinh viên cung cấp toàn bộ nội dung lý thuyết triết học Mác-Lênin làm cơ sở và nguồn dữ liệu đầu vào cho AI.</li>
                <li><strong>Đề ra yêu cầu và định hướng:</strong> Yêu cầu về việc tạo ra một board game cụ thể, có thể in ấn, vui nhộn và bám sát triết học là do sinh viên đề ra, định hướng cho quá trình sáng tạo của AI.</li>
                <li><strong>Biên tập và Tinh chỉnh:</strong> Sinh viên đã rà soát, chỉnh sửa và tinh chỉnh lại các nội dung do AI tạo ra (luật chơi, nội dung thẻ bài) để đảm bảo tính chính xác về mặt triết học, logic và làm cho trò chơi trở nên hấp dẫn, cân bằng hơn.</li>
                <li><strong>Kiểm thử và Phản hồi:</strong> Sinh viên đóng vai trò người kiểm thử ý tưởng, đưa ra phản hồi để AI cải thiện và hoàn thiện sản phẩm.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-gray-200 pt-8">
            <h3 className="text-2xl font-semibold text-slate-700 mb-4 border-l-4 border-slate-500 pl-3">Quản Trò AI (Gemini)</h3>
            <p className="mb-4">
                Bạn có thắc mắc về luật chơi hoặc các khái niệm triết học trong game? Hãy hỏi Quản Trò AI của chúng tôi! Trợ lý ảo này được trang bị kiến thức về trò chơi và sẵn sàng giải đáp mọi câu hỏi của bạn.
            </p>
            <Chatbot />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SectionAI;
