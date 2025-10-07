
import React from 'react';
import SectionWrapper from '../SectionWrapper';

const SectionReason: React.FC = () => {
  return (
    <SectionWrapper title="1. Lý do chọn sản phẩm">
      <p>
        Việc lựa chọn board game làm sản phẩm sáng tạo cho chủ đề "Vật chất, phương thức, hình thức tồn tại của vật chất" xuất phát từ những ý nghĩa lý luận và thực tiễn sâu sắc.
      </p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
          <h3 className="text-xl font-semibold text-slate-700 mb-2">Ý nghĩa lý luận</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Cụ thể hóa khái niệm trừu tượng:</strong> Triết học Mác-Lênin, đặc biệt là các phạm trù về vật chất, vận động, không gian và thời gian, vốn mang tính trừu tượng cao. Board game giúp "vật chất hóa" các khái niệm này thông qua các lá bài, ô cờ, và luật chơi, biến chúng thành những đối tượng có thể tương tác, phù hợp với định nghĩa của Lênin rằng vật chất là "thực tại khách quan... được cảm giác của chúng ta chép lại, chụp lại, phản ánh".</li>
            <li><strong>Mô phỏng phương thức tồn tại:</strong> Trò chơi mô phỏng "vận động" là phương thức tồn tại của vật chất. Người chơi di chuyển trên bàn cờ, trải qua các hình thái vận động từ cơ giới đến xã hội, thể hiện một quá trình biến đổi không ngừng, phản ánh tính tuyệt đối của vận động và tính tương đối của đứng im (khi người chơi dừng ở một ô).</li>
          </ul>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
          <h3 className="text-xl font-semibold text-slate-700 mb-2">Ý nghĩa thực tiễn xã hội</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Đổi mới phương pháp học tập:</strong> Thay vì tiếp cận triết học một cách khô khan qua sách vở, board game tạo ra một phương pháp học tập chủ động, tương tác và giải trí (learning by playing). Điều này giúp người học, đặc biệt là sinh viên, tiếp thu kiến thức hiệu quả và hứng thú hơn.</li>
            <li><strong>Thúc đẩy tư duy biện chứng:</strong> Người chơi phải tính toán, ra quyết định dựa trên các tình huống (thẻ bài) và quy luật (luật chơi), qua đó rèn luyện tư duy logic, phản biện và khả năng liên kết các sự vật, hiện tượng - một biểu hiện của tư duy biện chứng.</li>
            <li><strong>Gắn kết xã hội:</strong> Board game là một hoạt động mang tính xã hội cao, khuyến khích giao tiếp, thảo luận và tương tác giữa những người chơi. Đây chính là một hình thức của "vận động xã hội", nơi các mối quan hệ được hình thành và phát triển.</li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SectionReason;
