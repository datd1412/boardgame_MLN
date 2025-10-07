import type { CardData, TileData } from '../../types';

export const cardDeck: CardData[] = [
  // Phương thức Vận động (5)
  { type: 'motion', title: 'Vận động Cơ giới', content: 'Sự thay đổi vị trí của các vật thể trong không gian.', icon: '⚙️' },
  { type: 'motion', title: 'Vận động Vật lý', content: 'Sự thay đổi trạng thái vật lý hoặc năng lượng (nhiệt, điện, từ trường...).', icon: '⚙️' },
  { type: 'motion', title: 'Vận động Hóa học', content: 'Sự biến đổi của các chất, sự kết hợp và phân giải của các phân tử.', icon: '⚙️' },
  { type: 'motion', title: 'Vận động Sinh học', content: 'Sự trao đổi chất, sinh trưởng, phát triển và tiến hóa của sinh vật.', icon: '⚙️' },
  { type: 'motion', title: 'Vận động Xã hội', content: 'Sự biến đổi trong các hình thái kinh tế, chính trị, xã hội.', icon: '⚙️' },
  
  // Sự vật/Hiện tượng (25)
  { type: 'phenomenon', title: 'Sắt', content: '', icon: '🌍' },
  { type: 'phenomenon', title: 'Đồng', content: '', icon: '🌍' },
  { type: 'phenomenon', title: 'Nước', content: '', icon: '🌍' },
  { type: 'phenomenon', title: 'Không khí', content: '', icon: '🌍' },
  { type: 'phenomenon', title: 'Quả bóng', content: '', icon: '🌍' },
  { type: 'phenomenon', title: 'Xe hơi', content: '', icon: '🌍' },
  { type: 'phenomenon', title: 'Máy bay', content: '', icon: '🌍' },
  { type: 'phenomenon', title: 'Nam châm', content: '', icon: '🌍' },
  { type: 'phenomenon', title: 'Ánh sáng', content: '', icon: '🌍' },
  { type: 'phenomenon', title: 'Điện', content: '', icon: '🌍' },
  { type: 'phenomenon', title: 'Gỗ', content: '', icon: '🌍' },
  { type: 'phenomenon', title: 'Giấy', content: '', icon: '🌍' },
  { type: 'phenomenon', title: 'Hạt giống', content: '', icon: '🌍' },
  { type: 'phenomenon', title: 'Cây xanh', content: '', icon: '🌍' },
  { type: 'phenomenon', title: 'Động vật nguyên sinh', content: '', icon: '🌍' },
  { type: 'phenomenon', title: 'Cá', content: '', icon: '🌍' },
  { type: 'phenomenon', title: 'Chim', content: '', icon: '🌍' },
  { type: 'phenomenon', title: 'Con người', content: '', icon: '🌍' },
  { type: 'phenomenon', title: 'Bộ lạc nguyên thủy', content: '', icon: '🌍' },
  { type: 'phenomenon', title: 'Xã hội nông nghiệp', content: '', icon: '🌍' },
  { type: 'phenomenon', title: 'Xã hội phong kiến', content: '', icon: '🌍' },
  { type: 'phenomenon', title: 'Xã hội tư bản', content: '', icon: '🌍' },
  { type: 'phenomenon', title: 'Xã hội hiện đại', content: '', icon: '🌍' },
  { type: 'phenomenon', title: 'Cách mạng công nghiệp', content: '', icon: '🌍' },
  { type: 'phenomenon', title: 'Cách mạng khoa học – kỹ thuật', content: '', icon: '🌍' },

  // Thời gian (6)
  { type: 'time', title: 'Quá khứ không thể quay lại', content: 'Người chơi không được đi ngược về ô trước đó, phải chờ lượt sau.', icon: '⏳' },
  { type: 'time', title: 'Tương lai đang đến', content: 'Tiến thêm 2 ô ngay lập tức.', icon: '⏳' },
  { type: 'time', title: 'Hiện tại là điểm xuất phát hành động', content: 'Rút thêm 1 thẻ bất kỳ (tượng trưng cho hành động thực tiễn).', icon: '⏳' },
  { type: 'time', title: 'Nhịp độ thời gian', content: 'Lượt tới, bạn sẽ di chuyển gấp đôi số nút trên xúc xắc.', icon: '⏳' },
  { type: 'time', title: 'Đồng hồ xã hội', content: 'Tất cả người chơi phải bỏ 1 lượt để đồng bộ hóa “lịch xã hội”.', icon: '⏳' },
  { type: 'time', title: 'Khoảnh khắc quyết định', content: 'Bạn được chọn tiến hoặc lùi 3 ô để quyết định vận mệnh.', icon: '⏳' },

  // Không gian (6)
  { type: 'space', title: 'Dịch chuyển tức thời', content: 'Nhảy đến ô kế tiếp có ký hiệu rút thẻ.', icon: '📍' },
  { type: 'space', title: 'Không gian ba chiều', content: 'Bạn được đổi chỗ với một người chơi bất kỳ.', icon: '📍' },
  { type: 'space', title: 'Khoảng cách tương đối', content: 'Bạn được chọn tiến 2 ô hoặc lùi 2 ô.', icon: '📍' },
  { type: 'space', title: 'Không gian vô hạn', content: 'Đi vòng lại từ ngoài vào trong thêm 1 vòng nhỏ (mất lượt kế tiếp).', icon: '📍' },
  { type: 'space', title: 'Tái cấu trúc vị trí', content: 'Đảo chỗ quân cờ của tất cả người chơi theo chiều kim đồng hồ.', icon: '📍' },
  { type: 'space', title: 'Điểm đặc biệt trong không gian', content: 'Nhảy ngay đến ô Trung tâm, nhưng chỉ đứng chờ, chưa thắng.', icon: '📍' },

  // Ý thức (5)
  { type: 'consciousness', title: 'Ý thức là phản ánh thế giới khách quan', content: 'Người chơi phải chỉ ra một ví dụ trong đời sống mà ý thức phản ánh đúng hiện thực. Nếu trả lời được → +1 Insight. Nếu không → mất lượt.', icon: '💡' },
  { type: 'consciousness', title: 'Lao động và ngôn ngữ – nguồn gốc của ý thức', content: 'Người chơi mô tả nhanh một tình huống lao động/giao tiếp làm thay đổi nhận thức của con người. Trả lời đúng → +2 Insight.', icon: '💡' },
  { type: 'consciousness', title: 'Ý thức có tính sáng tạo', content: 'Người chơi được phép “sáng tạo” → rút thêm 1 thẻ bất kỳ và áp dụng ngay.', icon: '💡' },
  { type: 'consciousness', title: 'Ý thức có tính độc lập tương đối', content: 'Người chơi chọn 1 người khác → buộc họ đi lùi 2 ô, thể hiện tác động ngược.', icon: '💡' },
  { type: 'consciousness', title: 'Ý thức định hướng hành động', content: 'Người chơi được chọn đi theo hướng có lợi: tiến thêm 1–3 ô tùy ý.', icon: '💡' },

  // Quan hệ Vật chất – Ý thức (5)
  { type: 'relation', title: 'Câu hỏi Triết học', content: 'Vật chất có trước hay ý thức có trước? (Đáp án: Vật chất). Đúng: +2 Insight. Sai: -1 Insight.', icon: '🔄' },
  { type: 'relation', title: 'Câu hỏi Triết học', content: 'Ý thức phản ánh cái gì? (Đáp án: Hiện thực khách quan). Đúng: +1 Insight. Sai: Mất lượt.', icon: '🔄' },
  { type: 'relation', title: 'Câu hỏi Triết học', content: 'Ý thức có tác động ngược lại vật chất không? (Đáp án: Có). Đúng: +1 Insight. Sai: Lùi 2 ô.', icon: '🔄' },
  { type: 'relation', title: 'Câu hỏi Triết học', content: 'Ý thức nảy sinh từ đâu? (Đáp án: Lao động và ngôn ngữ). Đúng: +2 Insight. Sai: -1 Insight.', icon: '🔄' },
  { type: 'relation', title: 'Câu hỏi Triết học', content: 'Vật chất và ý thức quan hệ thế nào? (Đáp án: Biện chứng, đối lập và thống nhất). Đúng: +2 Insight. Sai: Mất lượt.', icon: '🔄' },
];

// 42 tiles: 19 ô thường, 8 ⚙️🌍, 4 ⏳, 4 📍, 3 💡, 2 🔄, 1 ⏸️, 1 ⭐. Total 42.
export const TILE_DATA: TileData[] = [
    // 1-5
    { type: 'normal' }, { type: 'draw_motion_phenomenon', icon: '⚙️🌍' }, { type: 'normal' }, { type: 'draw_time', icon: '⏳' }, { type: 'normal' },
    // 6-10
    { type: 'draw_consciousness', icon: '💡' }, { type: 'normal' }, { type: 'draw_motion_phenomenon', icon: '⚙️🌍' }, { type: 'normal' }, { type: 'draw_space', icon: '📍' },
    // 11-15
    { type: 'normal' }, { type: 'pause', icon: '⏸️' }, { type: 'normal' }, { type: 'draw_motion_phenomenon', icon: '⚙️🌍' }, { type: 'normal' },
    // 16-20
    { type: 'draw_relation', icon: '🔄' }, { type: 'normal' }, { type: 'draw_time', icon: '⏳' }, { type: 'normal' }, { type: 'draw_motion_phenomenon', icon: '⚙️🌍' },
    // 21-25
    { type: 'normal' }, { type: 'draw_space', icon: '📍' }, { type: 'normal' }, { type: 'draw_consciousness', icon: '💡' }, { type: 'normal' },
    // 26-30
    { type: 'draw_motion_phenomenon', icon: '⚙️🌍' }, { type: 'normal' }, { type: 'draw_time', icon: '⏳' }, { type: 'normal' }, { type: 'draw_motion_phenomenon', icon: '⚙️🌍' },
    // 31-35
    { type: 'normal' }, { type: 'draw_space', icon: '📍' }, { type: 'normal' }, { type: 'draw_relation', icon: '🔄' }, { type: 'normal' },
    // 36-40
    { type: 'draw_motion_phenomenon', icon: '⚙️🌍' }, { type: 'normal' }, { type: 'draw_consciousness', icon: '💡' }, { type: 'normal' }, { type: 'draw_time', icon: '⏳' },
    // 41-42
    { type: 'draw_motion_phenomenon', icon: '⚙️🌍' }, { type: 'center', icon: '⭐' }
];