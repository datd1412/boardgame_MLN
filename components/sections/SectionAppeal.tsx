
import React from 'react';
import SectionWrapper from '../SectionWrapper';

const SectionAppeal: React.FC = () => {
  return (
    <SectionWrapper title="4. Tính ứng dụng và Sự thu hút">
      <p>
        Board game "Hành Trình Vật Chất" không chỉ là một sản phẩm học thuật mà còn có tiềm năng ứng dụng rộng rãi và sức hút lớn đối với nhiều đối tượng.
      </p>
      <div className="mt-6 space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-slate-700 mb-2">Tính tương tác và thu hút cao</h3>
          <p>
            Khác với việc đọc sách, trò chơi tạo ra sự cạnh tranh, may rủi (gieo xúc xắc) và yếu tố bất ngờ (rút thẻ bài), giúp buổi học hoặc buổi sinh hoạt trở nên sôi nổi và đáng nhớ. Việc người chơi phải thảo luận về các câu hỏi triết học để tìm ra câu trả lời đúng cũng thúc đẩy sự tương tác và học hỏi lẫn nhau.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-700 mb-2">Khả năng Viral</h3>
          <p>
            Sự độc đáo của một board game về triết học có thể tạo ra sự tò mò và thích thú trên mạng xã hội. Những hình ảnh về bàn cờ, các thẻ bài với nội dung thú vị, hay những khoảnh khắc "cân não" khi trả lời câu hỏi triết học có thể dễ dàng trở thành nội dung để chia sẻ, tạo ra hiệu ứng lan truyền tự nhiên.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-700 mb-2">Ứng dụng đa dạng</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Trong giáo dục:</strong> Có thể được sử dụng như một công cụ hỗ trợ giảng dạy trong các giờ học, seminar về Triết học Mác-Lênin, giúp sinh viên củng cố kiến thức một cách trực quan.</li>
            <li><strong>Hoạt động ngoại khóa:</strong> Các câu lạc bộ học thuật, các đoàn thể có thể tổ chức các buổi chơi game để tạo sân chơi trí tuệ, gắn kết thành viên.</li>
            <li><strong>Phổ biến kiến thức:</strong> Sản phẩm có thể được phát triển và phát hành rộng rãi, giúp những người không chuyên cũng có thể tiếp cận và hiểu hơn về các khái niệm triết học cơ bản một cách dễ dàng và vui vẻ.</li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SectionAppeal;
