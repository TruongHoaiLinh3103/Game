import YaeMiko from "../assets/Mybuild/YaeMiko.png";
import Yelan from "../assets/Mybuild/Yelan.png";
import Ei from "../assets/Mybuild/Ei.png";
import Sara from "../assets/Mybuild/Sara.png";
import Noelle from "../assets/Mybuild/Noelle.png";
import Arlecchino from "../assets/Mybuild/Arlecchino.png";
import Diluc from "../assets/Mybuild/Diluc.png";
import Bennett from "../assets/Mybuild/Bennett.png";
import Barbara from "../assets/Mybuild/Barbara.png";
import Furina from "../assets/Mybuild/Furina.png";
import Zhongli from "../assets/Mybuild/Zhongli.png";
import Nahida from "../assets/Mybuild/Nahida.png";
import Lumine from "../assets/Mybuild/Lumine.png";
import Tighnari from "../assets/Mybuild/Tighnari.png";
import Hutao from "../assets/Mybuild/Hutao.png";
import Xingqiu from "../assets/Mybuild/Xingqiu.png";
import Xiangling from "../assets/Mybuild/Xiangling.png";
import Xiao from "../assets/Mybuild/Xiao.png";
import Sucrose from "../assets/Mybuild/Sucrose.png";
import Kazuha from "../assets/Mybuild/Kazuha.png";
import Faruzan from "../assets/Mybuild/Faruzan.png";
import Ganyu from "../assets/Mybuild/Ganyu.png";
import Ningguang from "../assets/Mybuild/Ningguang.png";
import Keqing from "../assets/Mybuild/Keqing.png";

import Yae from "../assets/AvataGI/Yae.webp";
import Yel from "../assets/AvataGI/Yel.webp";
import Rai from "../assets/AvataGI/Rai.webp";
import Sar from "../assets/AvataGI/Sar.webp";
import Noe from "../assets/AvataGI/Noe.webp";
import Arl from "../assets/AvataGI/Arl.webp";
import Dil from "../assets/AvataGI/Dil.webp";
import Ben from "../assets/AvataGI/Ben.webp";
import Bar from "../assets/AvataGI/Bar.webp";
import Fur from "../assets/AvataGI/Fur.webp";
import Zhon from "../assets/AvataGI/Zho.webp";
import Nah from "../assets/AvataGI/Nah.webp";
import Lum from "../assets/AvataGI/Lum.webp";
import Tig from "../assets/AvataGI/Tig.webp";
import Hut from "../assets/AvataGI/Hut.webp";
import Xin from "../assets/AvataGI/Xin.webp";
import Xian from "../assets/AvataGI/Xian.webp";
import Xia from "../assets/AvataGI/Xia.webp";
import Suc from "../assets/AvataGI/Suc.webp";
import Kaz from "../assets/AvataGI/Kaz.webp";
import Far from "../assets/AvataGI/Far.webp";
import Gan from "../assets/AvataGI/Gan.webp";
import Nin from "../assets/AvataGI/Nin.webp";
import Kee from "../assets/AvataGI/Kee.webp";

import fo from "../assets/AvataGI/4-Star.webp";
import fi from "../assets/AvataGI/5-Star.webp";

export const GI = [
    {
        id: 1,
        name: "Yae Miko",
        img: `${YaeMiko}`,
        avatar: `${Yae}`,
        back: `${fi}`,
        story: "Đại nhân Guuji của Đền Narukami, kiêm tổng biên tập của Nhà Xuất Bản Yae. Phía sau vẻ ngoài xinh đẹp kiều diễm là sự thông minh và xảo quyệt mà khó ai ngờ đến.",
        skill1: {
            name: "Hồ Linh Thực Tội Thức",
            img: "https://rerollcdn.com/GENSHIN/Skill/UI_GachaTypeIcon_Catalyst.png",
            delta: "Đòn tấn công thông thường."
        },
        skill2: {
            name: "Thần Chú Yakan - Sesshou Sakura",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Yae%20Miko/talent_2.png",
            delta: "'Các tinh linh hồ ly bị phong ấn trong cành cây đều là những yakan chuyên làm hại con người. Yakan thấp hơn thiên hồ chúng tôi hai bậc, vì vậy, tôi có thể ra lệnh cho chúng thoải mái. Hồ ly tuy chia thành ba sáu chín bậc, nhưng con người đừng nên học theo nhé, còn về việc con người và hồ ly ai có cấp bậc cao hơn sao? Hờ hờ...'"
        },
        skill3: {
            name: "Đại Bí Pháp - Tenko Kenshin",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Yae%20Miko/talent_3.png",
            delta: "Vào lúc này, Yae cần để lộ ra chứng nhận thiên hồ để hiệu lệnh lôi đình. Nhưng những kẻ đã nhìn thấy đại nhân Guuji để lộ chiếc đuôi đều đã tan biến không còn lại gì dù chỉ là hạt bụi. Cho nên, hãy nhớ cho kỹ nhé - Yae đại nhân không hề có đuôi."
        },
        skill4: {
            name: "Bóng Râm Đền Thần",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Yae%20Miko/talent_4.png",
            delta: "Khi thi triển Đại Bí Pháp - Tenko Kenshin, mỗi lần phá hủy một Sesshou Sakura sẽ làm mới một lần CD kỹ năng Thần Chú Yakan - Sesshou Sakura."
        },
        skill5: {
            name: "Lời Cầu Phúc Giác Ngộ",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Yae%20Miko/talent_5.png",
            delta: "Mỗi 1 điểm Tinh Thông Nguyên Tố của Yae Miko có thể tăng 0.15% sát thương do Sesshou Sakura gây ra."
        },
        skill6: {
            name: "Hồ Ly Thiền Định",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Yae%20Miko/talent_6.png",
            delta: "Khi ghép nguyên liệu thiên phú nhân vật, có tỷ lệ 25% sản sinh thêm 1 nguyên liệu thiên phú ngẫu nhiên khác của cùng khu vực, cấp bậc giống với nguyên liệu khi ghép."
        },
        cm1: {
            name: "Lễ vật Yakan",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Yae%20Miko/constellation_1.png",
            delta: "Đại Bí Pháp - Tenko Kenshin mỗi khi kích hoạt 1 lần Thiên Hồ Lôi Đình, đều sẽ hồi 8 điểm năng lượng nguyên tố cho bản thân Yae Miko."
        },
        cm2: {
            name: "Tiếng Gọi Đêm Trăng",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Yae%20Miko/constellation_2.png",
            delta: "Cấp bậc ban đầu của Sesshou Sakura khi vừa được tạo ra sẽ tăng ngay đến bậc 2, tối đa có thể tăng đến bậc 4, phạm vi tấn công tăng 60%."
        },
        cm3: {
            name: "Thất Diệu Biến Hóa",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Yae%20Miko/constellation_2.png",
            delta: "Cấp kỹ năng Thần Chú Yakan - Sesshou Sakura +3. Tăng tối đa đến cấp 15."
        },
        cm4: {
            name: "Anh Đào Dẫn Lôi Chương",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Yae%20Miko/constellation_4.png",
            delta: "Sau khi sấm sét của Sesshou Sakura đánh trúng kẻ địch, tất cả nhân vật trong đội ở gần sẽ nhận được 20% Buff Sát Thương Nguyên Tố Lôi, duy trì 5s."
        },
        cm5: {
            name: "Giễu Cợt Nham Hiểm",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Yae%20Miko/constellation_5.png",
            delta: "Cấp kỹ năng Đại Bí Pháp - Tenko Kenshin +3. Tăng tối đa đến cấp 15."
        },
        cm6: {
            name: "Cấm Thuật Daisesshou",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Yae%20Miko/constellation_6.png",
            delta: "Sesshou Sakura khi tấn công sẽ bỏ qua 60% phòng ngự của kẻ địch."
        }
    },
    {
        id: 2,
        name: "Yelan",
        img: `${Yelan}`,
        avatar: `${Yel}`,
        back: `${fi}`,
        story: "Nhân sĩ thần bí tự xưng làm việc cho Tổng Vụ, nhưng lại là 'người không tồn tại' trong danh sách của Tổng Vụ.",
        skill1: {
            name: "Mũi Tên Lén Lút",
            img: "https://rerollcdn.com/GENSHIN/Skill/UI_GachaTypeIcon_Bow.png",
            delta: "Đòn tấn công thông thường."
        },
        skill2: {
            name: "Dây Sinh Mệnh Quanh Quẩn",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Yelan/talent_2.png",
            delta: "Cho đến khi giật dây thì những kẻ thủ ác mới biết được bản thân khó mà thoát được."
        },
        skill3: {
            name: "Xúc Xắc Toan Tính",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Yelan/talent_3.png",
            delta: "'Nghiện cờ bạc là không tốt đâu. Thân là nhà cái, để tôi làm một ví dụ nhỏ cho xem. Cậu dùng một hột xúc xắc, làm sao thắng được bảy hột xúc xắc của tôi chứ?'"
        },
        skill4: {
            name: "Nắm Thế Chủ Động",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Yelan/talent_4.png",
            delta: "Trong đội có 1/2/3/4 loại nguyên tố, giới hạn HP của Yelan sẽ tăng 6%/12%/18%/30%."
        },
        skill5: {
            name: "Thích Nghi Dễ Dàng",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Yelan/talent_5.png",
            delta: "Trong thời gian Xúc Xắc Tinh Tế tồn tại, có thể khiến nhân vật trong trận hiện tại của bản thân tăng 1% sát thương gây ra, đồng thời mỗi 1s tăng thêm 3.5%, tối đa khiến sát thương của nhân vật gây ra tăng 50%. Trong thời gian hiệu lực, nếu sử dụng Xúc Xắc Toan Tính lần nữa sẽ xóa hiệu quả kể trên."
        },
        skill6: {
            name: "Cân Nhắc Lâu Dài",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Yelan/talent_6.png",
            delta: "Khi làm nhiệm vụ Phái Đi Thám Hiểm có thời gian là 20 giờ ở Liyue, phần thưởng nhận được tăng 25%."
        },
        cm1: {
            name: "Kẻ Toan Tính, Lâm Trận Cẩn Thận",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Yelan/constellation_1.png",
            delta: "Tăng 1 lần sử dụng cho Dây Sinh Mệnh Quanh Quẩn."
        },
        cm2: {
            name: "Kẻ Nhập Cuộc, Càng Đông Càng Tốt",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Yelan/constellation_2.png",
            delta: "'Xúc Xắc Tinh Tế' khi hỗ trợ tấn công sẽ bắn thêm một mũi tên nước, gây lượng Sát Thương Nguyên Tố Thủy tương ứng với 14% giới hạn HP của Yelan. Hiệu quả này mỗi 1.8s tối đa kích hoạt một lần."
        },
        cm3: {
            name: "Kẻ Nâng Ly, Cẩn Thận Chiêu Trò",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Yelan/constellation_3.png",
            delta: "Cấp kỹ năng Xúc Xắc Toan Tính +3. Tăng tối đa đến cấp 15."
        },
        cm4: {
            name: "Kẻ Giảo Hoạt, Đánh Lận Con Đen",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Yelan/constellation_4.png",
            delta: "Dựa theo số lượng kẻ địch mà 'Lạc Mệnh Tơ' đánh dấu, mỗi dấu ấn khi phát nổ sẽ tăng 10% giới hạn HP cho toàn bộ nhân vật trong đội, duy trì 25s. Thông qua cách này, giới hạn HP tăng thêm tối đa tăng đến 40%."
        },
        cm5: {
            name: "Kẻ Làm Cái, Biến Hóa Ảo Diệu",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Yelan/constellation_5.png",
            delta: "Cấp kỹ năng Dây Sinh Mệnh Quanh Quẩn +3. Tăng tối đa đến cấp 15."
        },
        cm6: {
            name: "Kẻ Thắng Cuộc, Gom Sạch Tất Cả",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Yelan/constellation_6.png",
            delta: "Sau khi thi triển Xúc Xắc Toan Tính, Yelan sẽ vào trạng thái 'Bàn Luận Chiến Lược': Tấn công thường của Yelan sẽ chuyển thành 'Mũi Tên Phá Trận' đặc biệt. Mũi tên này có đặc tính tương tự với Mũi Tên Phá Trận, sát thương gây ra được tính là sát thương trọng kích, gây ra 156% sát thương so với Mũi Tên Phá Trận. Trạng thái 'Bàn Luận Chiến Lược' tồn tại tối đa 20s và sẽ biến mất khi Yelan bắn ra 5 mũi tên."
        }
    },
    {
        id: 3,
        name: "Raiden Shogun",
        img: `${Ei}`,
        avatar: `${Rai}`,
        back: `${fi}`,
        story: "Là Tôn Chủ Narukami Ogosho đại nhân, đưa người dân Inazuma hướng đến sự 'vĩnh hằng' ngàn năm không đổi.",
        skill1: {
            name: "Cội Nguồn",
            img: "https://rerollcdn.com/GENSHIN/Skill/UI_GachaTypeIcon_Polearm.png",
            delta: "Đòn tấn công thông thường."
        },
        skill2: {
            name: "Thần Biến - Ánh Chớp Tà Ác",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Raiden/talent_2.png",
            delta: "Trở thành một phần của thần. Lôi Thần có thể trao tay và mắt cho thuộc hạ để thay người phán xử."
        },
        skill3: {
            name: "Bí Kỹ - Mộng Tưởng Chân Thuyết",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Raiden/talent_3.png",
            delta: "Bí kiếm mới lĩnh ngộ gần đây của Lôi Thần, loại bỏ 'Vô Tưởng', chuyển thành 'Mộng Tưởng'. Từ 'Chân Thuyết' có nghĩa là đổi mới, câu chuyện của Inazuma cũng sẽ sang trang."
        },
        skill4: {
            name: "Ngàn Vạn Ước Nguyện",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Raiden/talent_4.png",
            delta: "Nhân vật trong đội ở gần khi nhận được Nguyên Tố Tinh Cầu hoặc Nguyên Tố Hạt Nhân sẽ tích tụ 2 tầng Ý Lực cho Ước Nguyện Chakra. Hiệu quả này mỗi 3s tối đa kích hoạt một lần."
        },
        skill5: {
            name: "Thực Thể Khai Sáng",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Raiden/talent_5.png",
            delta: "Mỗi 1% thừa ra khi Hiệu Quả Nạp Nguyên Tố vượt quá 100%, sẽ giúp Raiden Shogun nhận được hiệu quả: ·Tăng 0.6% hồi phục Năng Lượng Nguyên Tố trong trạng thái Mộng Tưởng Nhất Tâm; ·Tăng 0.4% buff Sát Thương Nguyên Tố Lôi."
        },
        skill6: {
            name: "Kẻ Trấn Giữ Thiên Hạ",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Raiden/talent_6.png",
            delta: "Khi đột phá kiếm đơn và vũ khí cán dài, lượng Mora tiêu hao giảm 50%."
        },
        cm1: {
            name: "Lời Tiên Tri Đen Tối",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Raiden/constellation_1.png",
            delta: "Ước Nguyện Chakra có thể tích tụ Ý Lực nhanh hơn. Nhân vật Nguyên Tố Lôi sau khi thi triển Kỹ Năng Nộ sẽ tăng 80% tích lũy Ý Lực; nhân vật nguyên tố khác sau khi thi triển Kỹ Năng Nộ sẽ tăng 20% tích lũy Ý Lực."
        },
        cm2: {
            name: "Càn Quét Thiên Hạ",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Raiden/constellation_2.png",
            delta: "Khi trong trạng thái Mộng Tưởng Nhất Đao và Mộng Tưởng Nhất Tâm của Bí Kỹ - Mộng Tưởng Chân Thuyết, tấn công của Raiden Shogun sẽ bỏ qua 60% phòng ngự của địch."
        },
        cm3: {
            name: "Chuyện Xưa Kể Lại",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Raiden/constellation_3.png",
            delta: "Cấp kỹ năng Bí Kỹ - Mộng Tưởng Chân Thuyết +3. Tăng tối đa đến cấp 15."
        },
        cm4: {
            name: "Thờ Phụng Lẽ Phải",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Raiden/constellation_4.png",
            delta: "Mộng Tưởng Nhất Tâm của Bí Kỹ - Mộng Tưởng Chân Thuyết sau khi kết thúc, tất cả nhân vật trong đội gần đó (Không bao gồm Raiden Shogun) sẽ tăng 30% tấn công, duy trì 10s."
        },
        cm5: {
            name: "Shogun Giáng Lâm",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Raiden/constellation_5.png",
            delta: "Cấp kỹ năng Thần Biến - Ánh Chớp Tà Ác +3. Tăng tối đa đến cấp 15."
        },
        cm6: {
            name: "Kế Thừa Ước Nguyện",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Raiden/constellation_6.png",
            delta: "Khi trong trạng thái Mộng Tưởng Nhất Tâm của Bí Kỹ - Mộng Tưởng Chân Thuyết, sát thương Kỹ Năng Nộ của Raiden Shogun trúng kẻ địch sẽ giảm 1s CD Kỹ Năng Nộ của tất cả nhân vật trong đội ở gần đó (Không bao gồm Raiden Shogun). Hiệu quả này mỗi giây tối đa kích hoạt 1 lần, trong thời gian duy trì tối đa kích hoạt 5 lần."
        }
    },
    {
        id: 4,
        name: "Noelle",
        img: `${Noelle}`,
        avatar: `${Noe}`,
        back: `${fo}`,
        story: "Hầu gái đáng tin cậy của Đội Kỵ Sĩ Tây Phong, mơ ước một ngày nào đó sẽ trở thành kỵ sĩ chính thức.",
        skill1: {
            name: "Tây Phong Kiếm Thuật - Hầu Gái",
            img: "https://rerollcdn.com/GENSHIN/Skill/UI_GachaTypeIcon_Claymore.png",
            delta: "Đòn tấn công thông thường."
        },
        skill2: {
            name: "Giáp Hộ Tâm",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Noelle/talent_2.png",
            delta: "Noelle tuy là hầu gái nhưng cũng là một kỵ sĩ kiên cường."
        },
        skill3: {
            name: "Quét Sạch",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Noelle/talent_3.png",
            delta: "Đôi lúc không chỉ có bụi bẩn mới cần quét dọn..."
        },
        skill4: {
            name: "Toàn Tâm Toàn Ý",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Noelle/talent_4.png",
            delta: "Nếu Noelle ở trạng thái chờ mà nhân vật của bản thân đang chiến đấu có HP thấp hơn 30% sẽ tự động kích hoạt: Tạo ra khiên có thể hấp thu sát thương tương đương 400% phòng ngự của Noelle cho nhân vật của bản thân trong trận hiện tại, duy trì 20s. Có hiệu quả hấp thụ 150% tất cả sát thương nguyên tố và sát thương vật lý. Hiệu quả này mỗi 60s chỉ kích hoạt 1 lần."
        },
        skill5: {
            name: "Gọn Gàng",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Noelle/talent_5.png",
            delta: "Tấn công thường hoặc trọng kích của Noelle tích lũy đánh trúng kẻ địch 4 lần sẽ giảm 1s CD của Giáp Hộ Tâm. Mỗi 0.1s tối đa tính 1 lần."
        },
        skill6: {
            name: "Thái Độ Của Hầu Gái",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Noelle/talent_6.png",
            delta: "Nấu hoàn mỹ món ăn thuộc loại phòng ngự, có tỷ lệ 12% x2 sản lượng."
        },
        cm1: {
            name: "Chi Viện Cứ Giao Cho Tôi",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Noelle/constellation_1.png",
            delta: "Khi cùng lúc ở trong trạng thái Quét Sạch và Giáp Hộ Tâm, tỷ lệ kích hoạt hiệu quả hồi HP của Giáp Hộ Tâm tăng đến 100%."
        },
        cm2: {
            name: "Hầu Gái Lốc Xoáy",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Noelle/constellation_2.png",
            delta: "Thể lực mà trọng kích của Noelle tiêu hao sẽ giảm 20%, sát thương tăng 15%."
        },
        cm3: {
            name: "Hầu Gái Không Đau",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Noelle/constellation_3.png",
            delta: "Cấp kỹ năng Giáp Hộ Tâm +3. Tăng tối đa đến cấp 15."
        },
        cm4: {
            name: "Sẽ Dọn Dẹp Sạch Sẽ",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Noelle/constellation_4.png",
            delta: "Khi hiệu quả Giáp Hộ Tâm kết thúc hoặc do sát thương đánh vỡ, sẽ gây ra sát thương nguyên tố Nham tương đương 400% tấn công cho kẻ địch xung quanh."
        },
        cm5: {
            name: "Chuyên Gia Quét Dọn Đội Kỵ Sĩ",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Noelle/constellation_5.png",
            delta: "Cấp kỹ năng Quét Sạch +3. Tăng tối đa đến cấp 15."
        },
        cm6: {
            name: "Phải Sạch Bong Kin Kít",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Noelle/constellation_6.png",
            delta: "Quét Sạch tăng thêm sức tấn công tương đương 50% phòng ngự của Noelle. Ngoài ra, trong thời gian duy trì kỹ năng, mỗi lần đánh bại 1 kẻ địch, thời gian sẽ kéo dài thêm 1s, tối đa 10s."
        }
    },
    {
        id: 5,
        name: "Kujou Sara",
        img: `${Sara}`,
        avatar: `${Sar}`,
        back: `${fo}`,
        story: "Đại tướng đương nhiệm của Hiệp Hội Tenryou. Sát phạt quyết đoán, anh dũng thiện chiến.",
        skill1: {
            name: "",
            img: "https://rerollcdn.com/GENSHIN/Skill/UI_GachaTypeIcon_Bow.png",
            delta: "Đòn tấn công thông thường."
        },
        skill2: {
            name: "",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Sara/talent_2.png",
            delta: ""
        },
        skill3: {
            name: "",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Sara/talent_3.png",
            delta: ""
        },
        skill4: {
            name: "",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Sara/talent_4.png",
            delta: ""
        },
        skill5: {
            name: "",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Sara/talent_5.png",
            delta: ""
        },
        skill6: {
            name: "",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Sara/talent_6.png",
            delta: ""
        },
        cm1: {
            name: "",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Sara/constellation_1.png",
            delta: ""
        },
        cm2: {
            name: "",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Sara/constellation_2.png",
            delta: ""
        },
        cm3: {
            name: "",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Sara/constellation_3.png",
            delta: ""
        },
        cm4: {
            name: "",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Sara/constellation_4.png",
            delta: ""
        },
        cm5: {
            name: "",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Sara/constellation_5.png",
            delta: ""
        },
        cm6: {
            name: "",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Sara/constellation_6.png",
            delta: ""
        }
    },
    {
        id: 6,
        name: "Arlecchino",
        img: `${Arlecchino}`,
        avatar: `${Arl}`,
        back: `${fi}`,
        story: "Quan Chấp Hành thứ 4 của Fatui - Arlecchino. Nhà ngoại giao trầm tĩnh lạnh lùng, là 'Cha' mà bọn trẻ vừa sợ hãi cũng vừa dựa dẫm trong Căn Nhà Hơi Ấm.",
        skill1: {
            name: "",
            img: "https://rerollcdn.com/GENSHIN/Skill/UI_GachaTypeIcon_Polearm.png",
            delta: "Đòn tấn công thông thường."
        },
        skill2: {
            name: "",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Arlecchino/talent_2.png",
            delta: ""
        },
        skill3: {
            name: "",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Arlecchino/talent_3.png",
            delta: ""
        },
        skill4: {
            name: "",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Arlecchino/talent_4.png",
            delta: ""
        },
        skill5: {
            name: "",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Arlecchino/talent_5.png",
            delta: ""
        },
        skill6: {
            name: "",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Arlecchino/talent_6.png",
            delta: ""
        },
        cm1: {
            name: "",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Arlecchino/constellation_1.png",
            delta: ""
        },
        cm2: {
            name: "",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Arlecchino/constellation_2.png",
            delta: ""
        },
        cm3: {
            name: "",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Arlecchino/constellation_3.png",
            delta: ""
        },
        cm4: {
            name: "",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Arlecchino/constellation_4.png",
            delta: ""
        },
        cm5: {
            name: "",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Arlecchino/constellation_5.png",
            delta: ""
        },
        cm6: {
            name: "",
            img: "https://rerollcdn.com/GENSHIN/Skill/1/Arlecchino/constellation_6.png",
            delta: ""
        }
    },
    {
        id: 7,
        name: "Diluc",
        img: `${Diluc}`,
        avatar: `${Dil}`,
        back: `${fi}`,
        story: "Là công tử nắm trong tay hơn một nửa ngành rượu Mondstadt, tài lực, danh vọng, năng lực đều khiến người khác không thể coi thường.",
        skill1: {
            name: "",
            img: "",
            delta: "Đòn tấn công thông thường."
        },
        skill2: {
            name: "",
            img: "",
            delta: ""
        },
        skill3: {
            name: "",
            img: "",
            delta: ""
        },
        skill4: {
            name: "",
            img: "",
            delta: ""
        },
        skill5: {
            name: "",
            img: "",
            delta: ""
        },
        skill6: {
            name: "",
            img: "",
            delta: ""
        },
        cm1: {
            name: "",
            img: "",
            delta: ""
        },
        cm2: {
            name: "",
            img: "",
            delta: ""
        },
        cm3: {
            name: "",
            img: "",
            delta: ""
        },
        cm4: {
            name: "",
            img: "",
            delta: ""
        },
        cm5: {
            name: "",
            img: "",
            delta: ""
        },
        cm6: {
            name: "",
            img: "",
            delta: ""
        }
    },
    {
        id: 8,
        name: "Barbara",
        img: `${Barbara}`,
        avatar: `${Bar}`,
        back: `${fo}`,
        story: "Mọi người trong thành Mondstadt đều yêu quý Barbara. Từ 'Thần Tượng' là do cô đọc được từ một cuốn tạp chí.",
        skill1: {
            name: "",
            img: "",
            delta: "Đòn tấn công thông thường."
        },
        skill2: {
            name: "",
            img: "",
            delta: ""
        },
        skill3: {
            name: "",
            img: "",
            delta: ""
        },
        skill4: {
            name: "",
            img: "",
            delta: ""
        },
        skill5: {
            name: "",
            img: "",
            delta: ""
        },
        skill6: {
            name: "",
            img: "",
            delta: ""
        },
        cm1: {
            name: "",
            img: "",
            delta: ""
        },
        cm2: {
            name: "",
            img: "",
            delta: ""
        },
        cm3: {
            name: "",
            img: "",
            delta: ""
        },
        cm4: {
            name: "",
            img: "",
            delta: ""
        },
        cm5: {
            name: "",
            img: "",
            delta: ""
        },
        cm6: {
            name: "",
            img: "",
            delta: ""
        }
    },
    {
        id: 9,
        name: "Bennett",
        img: `${Bennett}`,
        avatar: `${Ben}`,
        back: `${fo}`,
        story: "Nhà mạo hiểm trẻ tuổi của Mondstadt, có vận đen luôn đi cùng sự lương thiện của anh ấy.",
        skill1: {
            name: "",
            img: "",
            delta: "Đòn tấn công thông thường."
        },
        skill2: {
            name: "",
            img: "",
            delta: ""
        },
        skill3: {
            name: "",
            img: "",
            delta: ""
        },
        skill4: {
            name: "",
            img: "",
            delta: ""
        },
        skill5: {
            name: "",
            img: "",
            delta: ""
        },
        skill6: {
            name: "",
            img: "",
            delta: ""
        },
        cm1: {
            name: "",
            img: "",
            delta: ""
        },
        cm2: {
            name: "",
            img: "",
            delta: ""
        },
        cm3: {
            name: "",
            img: "",
            delta: ""
        },
        cm4: {
            name: "",
            img: "",
            delta: ""
        },
        cm5: {
            name: "",
            img: "",
            delta: ""
        },
        cm6: {
            name: "",
            img: "",
            delta: ""
        }
    },
    {
        id: 10,
        name: "Furina",
        img: `${Furina}`,
        avatar: `${Fur}`,
        back: `${fi}`,
        story: "Tâm điểm tuyệt đối trên sân khấu xét xử, cho đến khi tiếng vỗ tay hạ màn nổi lên.",
        skill1: {
            name: "",
            img: "",
            delta: "Đòn tấn công thông thường."
        },
        skill2: {
            name: "",
            img: "",
            delta: ""
        },
        skill3: {
            name: "",
            img: "",
            delta: ""
        },
        skill4: {
            name: "",
            img: "",
            delta: ""
        },
        skill5: {
            name: "",
            img: "",
            delta: ""
        },
        skill6: {
            name: "",
            img: "",
            delta: ""
        },
        cm1: {
            name: "",
            img: "",
            delta: ""
        },
        cm2: {
            name: "",
            img: "",
            delta: ""
        },
        cm3: {
            name: "",
            img: "",
            delta: ""
        },
        cm4: {
            name: "",
            img: "",
            delta: ""
        },
        cm5: {
            name: "",
            img: "",
            delta: ""
        },
        cm6: {
            name: "",
            img: "",
            delta: ""
        }
    },
    {
        id: 11,
        name: "Zhongli",
        img: `${Zhongli}`,
        avatar: `${Zhon}`,
        back: `${fi}`,
        story: "Là vị khách thần bí được 'Vãng Sinh Đường' mời đến. Kiến thức uyên bác, có hiểu biết sâu rộng đối với nhiều sự vật sự việc.",
        skill1: {
            name: "",
            img: "",
            delta: "Đòn tấn công thông thường."
        },
        skill2: {
            name: "",
            img: "",
            delta: ""
        },
        skill3: {
            name: "",
            img: "",
            delta: ""
        },
        skill4: {
            name: "",
            img: "",
            delta: ""
        },
        skill5: {
            name: "",
            img: "",
            delta: ""
        },
        skill6: {
            name: "",
            img: "",
            delta: ""
        },
        cm1: {
            name: "",
            img: "",
            delta: ""
        },
        cm2: {
            name: "",
            img: "",
            delta: ""
        },
        cm3: {
            name: "",
            img: "",
            delta: ""
        },
        cm4: {
            name: "",
            img: "",
            delta: ""
        },
        cm5: {
            name: "",
            img: "",
            delta: ""
        },
        cm6: {
            name: "",
            img: "",
            delta: ""
        }
    },
    {
        id: 12,
        name: "Nahida",
        img: `${Nahida}`,
        avatar: `${Nah}`,
        back: `${fi}`,
        story: "Chim nhỏ trong lồng ở sâu trong Thánh Địa Surasthana, chỉ có thể ngắm nhìn thế giới từ trong giấc mơ.",
        skill1: {
            name: "",
            img: "",
            delta: "Đòn tấn công thông thường."
        },
        skill2: {
            name: "",
            img: "",
            delta: ""
        },
        skill3: {
            name: "",
            img: "",
            delta: ""
        },
        skill4: {
            name: "",
            img: "",
            delta: ""
        },
        skill5: {
            name: "",
            img: "",
            delta: ""
        },
        skill6: {
            name: "",
            img: "",
            delta: ""
        },
        cm1: {
            name: "",
            img: "",
            delta: ""
        },
        cm2: {
            name: "",
            img: "",
            delta: ""
        },
        cm3: {
            name: "",
            img: "",
            delta: ""
        },
        cm4: {
            name: "",
            img: "",
            delta: ""
        },
        cm5: {
            name: "",
            img: "",
            delta: ""
        },
        cm6: {
            name: "",
            img: "",
            delta: ""
        }
    },
    {
        id: 13,
        name: "Hutao",
        img: `${Hutao}`,
        avatar: `${Hut}`,
        back: `${fi}`,
        story: "Đường chủ đời thứ 77 của Vãng Sinh Đường, tuổi còn trẻ nhưng đã phụ trách việc tang lễ của Liyue.",
        skill1: {
            name: "",
            img: "",
            delta: "Đòn tấn công thông thường."
        },
        skill2: {
            name: "",
            img: "",
            delta: ""
        },
        skill3: {
            name: "",
            img: "",
            delta: ""
        },
        skill4: {
            name: "",
            img: "",
            delta: ""
        },
        skill5: {
            name: "",
            img: "",
            delta: ""
        },
        skill6: {
            name: "",
            img: "",
            delta: ""
        },
        cm1: {
            name: "",
            img: "",
            delta: ""
        },
        cm2: {
            name: "",
            img: "",
            delta: ""
        },
        cm3: {
            name: "",
            img: "",
            delta: ""
        },
        cm4: {
            name: "",
            img: "",
            delta: ""
        },
        cm5: {
            name: "",
            img: "",
            delta: ""
        },
        cm6: {
            name: "",
            img: "",
            delta: ""
        }
    },
    {
        id: 14,
        name: "Xingqiu",
        img: `${Xingqiu}`,
        avatar: `${Xin}`,
        back: `${fo}`,
        story: "Vị thiếu niên thường được bắt gặp nơi quầy sách. Tay cầm kiếm, với một trái tim nghĩa hiệp thổn thức trong lồng ngực.",
        skill1: {
            name: "",
            img: "",
            delta: "Đòn tấn công thông thường."
        },
        skill2: {
            name: "",
            img: "",
            delta: ""
        },
        skill3: {
            name: "",
            img: "",
            delta: ""
        },
        skill4: {
            name: "",
            img: "",
            delta: ""
        },
        skill5: {
            name: "",
            img: "",
            delta: ""
        },
        skill6: {
            name: "",
            img: "",
            delta: ""
        },
        cm1: {
            name: "",
            img: "",
            delta: ""
        },
        cm2: {
            name: "",
            img: "",
            delta: ""
        },
        cm3: {
            name: "",
            img: "",
            delta: ""
        },
        cm4: {
            name: "",
            img: "",
            delta: ""
        },
        cm5: {
            name: "",
            img: "",
            delta: ""
        },
        cm6: {
            name: "",
            img: "",
            delta: ""
        }
    },
    {
        id: 15,
        name: "Lumine",
        img: `${Lumine}`,
        avatar: `${Lum}`,
        back: `${fi}`,
        story: "Nhà Lữ Hành lưu lạc đến đây từ thế giới khác, bị Thần cướp mất người thân, từ đó bước vào con đường đi tìm 7 vị Thần.",
        skill1: {
            name: "",
            img: "",
            delta: "Đòn tấn công thông thường."
        },
        skill2: {
            name: "",
            img: "",
            delta: ""
        },
        skill3: {
            name: "",
            img: "",
            delta: ""
        },
        skill4: {
            name: "",
            img: "",
            delta: ""
        },
        skill5: {
            name: "",
            img: "",
            delta: ""
        },
        skill6: {
            name: "",
            img: "",
            delta: ""
        },
        cm1: {
            name: "",
            img: "",
            delta: ""
        },
        cm2: {
            name: "",
            img: "",
            delta: ""
        },
        cm3: {
            name: "",
            img: "",
            delta: ""
        },
        cm4: {
            name: "",
            img: "",
            delta: ""
        },
        cm5: {
            name: "",
            img: "",
            delta: ""
        },
        cm6: {
            name: "",
            img: "",
            delta: ""
        }
    },
    {
        id: 16,
        name: "Xiangling",
        img: `${Xiangling}`,
        avatar: `${Xian}`,
        back: `${fo}`,
        story: "Thiếu nữ đầu bếp đến từ Liyue, rất nổi tiếng. Có sự nhiệt tình vô hạn với việc nấu nướng, đặc biệt là những món tê cay.",
        skill1: {
            name: "",
            img: "",
            delta: "Đòn tấn công thông thường."
        },
        skill2: {
            name: "",
            img: "",
            delta: ""
        },
        skill3: {
            name: "",
            img: "",
            delta: ""
        },
        skill4: {
            name: "",
            img: "",
            delta: ""
        },
        skill5: {
            name: "",
            img: "",
            delta: ""
        },
        skill6: {
            name: "",
            img: "",
            delta: ""
        },
        cm1: {
            name: "",
            img: "",
            delta: ""
        },
        cm2: {
            name: "",
            img: "",
            delta: ""
        },
        cm3: {
            name: "",
            img: "",
            delta: ""
        },
        cm4: {
            name: "",
            img: "",
            delta: ""
        },
        cm5: {
            name: "",
            img: "",
            delta: ""
        },
        cm6: {
            name: "",
            img: "",
            delta: ""
        }
    },
    {
        id: 17,
        name: "Tighnari",
        img: `${Tighnari}`,
        avatar: `${Tig}`,
        back: `${fi}`,
        story: "Học giả thiếu niên tinh thông thực vật học, hiện đang làm đội trưởng kiểm lâm của Rừng Avidya. Tính tình thẳng thắn nhiệt tình, hay dạy bảo những người hay lơ là đầu óc.",
        skill1: {
            name: "",
            img: "",
            delta: "Đòn tấn công thông thường."
        },
        skill2: {
            name: "",
            img: "",
            delta: ""
        },
        skill3: {
            name: "",
            img: "",
            delta: ""
        },
        skill4: {
            name: "",
            img: "",
            delta: ""
        },
        skill5: {
            name: "",
            img: "",
            delta: ""
        },
        skill6: {
            name: "",
            img: "",
            delta: ""
        },
        cm1: {
            name: "",
            img: "",
            delta: ""
        },
        cm2: {
            name: "",
            img: "",
            delta: ""
        },
        cm3: {
            name: "",
            img: "",
            delta: ""
        },
        cm4: {
            name: "",
            img: "",
            delta: ""
        },
        cm5: {
            name: "",
            img: "",
            delta: ""
        },
        cm6: {
            name: "",
            img: "",
            delta: ""
        }
    },
    {
        id: 18,
        name: "Ganyu",
        img: `${Ganyu}`,
        avatar: `${Gan}`,
        back: `${fi}`,
        story: "Thư ký tại Nguyệt Hải Đình, trong người chứa huyết mạch của tiên thú Kỳ Lân.",
        skill1: {
            name: "",
            img: "",
            delta: "Đòn tấn công thông thường."
        },
        skill2: {
            name: "",
            img: "",
            delta: ""
        },
        skill3: {
            name: "",
            img: "",
            delta: ""
        },
        skill4: {
            name: "",
            img: "",
            delta: ""
        },
        skill5: {
            name: "",
            img: "",
            delta: ""
        },
        skill6: {
            name: "",
            img: "",
            delta: ""
        },
        cm1: {
            name: "",
            img: "",
            delta: ""
        },
        cm2: {
            name: "",
            img: "",
            delta: ""
        },
        cm3: {
            name: "",
            img: "",
            delta: ""
        },
        cm4: {
            name: "",
            img: "",
            delta: ""
        },
        cm5: {
            name: "",
            img: "",
            delta: ""
        },
        cm6: {
            name: "",
            img: "",
            delta: ""
        }
    },
    {
        id: 19,
        name: "Xiao",
        img: `${Xiao}`,
        avatar: `${Xia}`,
        back: `${fi}`,
        story: "Tiên nhân Dạ Xoa bảo vệ Liyue. Hiệu là 'Hàng Ma Đại Thánh', biệt danh 'Hộ Pháp Dạ Xoa Đại Tướng'.",
        skill1: {
            name: "",
            img: "",
            delta: "Đòn tấn công thông thường."
        },
        skill2: {
            name: "",
            img: "",
            delta: ""
        },
        skill3: {
            name: "",
            img: "",
            delta: ""
        },
        skill4: {
            name: "",
            img: "",
            delta: ""
        },
        skill5: {
            name: "",
            img: "",
            delta: ""
        },
        skill6: {
            name: "",
            img: "",
            delta: ""
        },
        cm1: {
            name: "",
            img: "",
            delta: ""
        },
        cm2: {
            name: "",
            img: "",
            delta: ""
        },
        cm3: {
            name: "",
            img: "",
            delta: ""
        },
        cm4: {
            name: "",
            img: "",
            delta: ""
        },
        cm5: {
            name: "",
            img: "",
            delta: ""
        },
        cm6: {
            name: "",
            img: "",
            delta: ""
        }
    },
    {
        id: 20,
        name: "Ningguang",
        img: `${Ningguang}`,
        avatar: `${Nin}`,
        back: `${fo}`,
        story: "'Thiên Quyền' trong Thất Tinh Liyue, giàu có nổi tiếng, khắp đại lục khó ai sánh bằng.",
        skill1: {
            name: "",
            img: "",
            delta: "Đòn tấn công thông thường."
        },
        skill2: {
            name: "",
            img: "",
            delta: ""
        },
        skill3: {
            name: "",
            img: "",
            delta: ""
        },
        skill4: {
            name: "",
            img: "",
            delta: ""
        },
        skill5: {
            name: "",
            img: "",
            delta: ""
        },
        skill6: {
            name: "",
            img: "",
            delta: ""
        },
        cm1: {
            name: "",
            img: "",
            delta: ""
        },
        cm2: {
            name: "",
            img: "",
            delta: ""
        },
        cm3: {
            name: "",
            img: "",
            delta: ""
        },
        cm4: {
            name: "",
            img: "",
            delta: ""
        },
        cm5: {
            name: "",
            img: "",
            delta: ""
        },
        cm6: {
            name: "",
            img: "",
            delta: ""
        }
    },
    {
        id: 21,
        name: "Sucrose",
        img: `${Sucrose}`,
        avatar: `${Suc}`,
        back: `${fo}`,
        story: "Thuật sĩ giả kim với lòng hiếu kỳ mọi sự vật xung quanh. Là nhà nghiên cứu của học phái Giả Kim Sinh Vật.",
        skill1: {
            name: "",
            img: "",
            delta: "Đòn tấn công thông thường."
        },
        skill2: {
            name: "",
            img: "",
            delta: ""
        },
        skill3: {
            name: "",
            img: "",
            delta: ""
        },
        skill4: {
            name: "",
            img: "",
            delta: ""
        },
        skill5: {
            name: "",
            img: "",
            delta: ""
        },
        skill6: {
            name: "",
            img: "",
            delta: ""
        },
        cm1: {
            name: "",
            img: "",
            delta: ""
        },
        cm2: {
            name: "",
            img: "",
            delta: ""
        },
        cm3: {
            name: "",
            img: "",
            delta: ""
        },
        cm4: {
            name: "",
            img: "",
            delta: ""
        },
        cm5: {
            name: "",
            img: "",
            delta: ""
        },
        cm6: {
            name: "",
            img: "",
            delta: ""
        }
    },
    {
        id: 22,
        name: "Kaedehara Kazuha",
        img: `${Kazuha}`,
        avatar: `${Kaz}`,
        back: `${fi}`,
        story: "Ronin Samurai đến từ Inazuma, nay đã gia nhập đội thuyền 'Nam Thập Tự' Liyue. Tính tình ôn hòa, hào sảng, trong lòng chất chứa nhiều chuyện xưa.",
        skill1: {
            name: "",
            img: "",
            delta: "Đòn tấn công thông thường."
        },
        skill2: {
            name: "",
            img: "",
            delta: ""
        },
        skill3: {
            name: "",
            img: "",
            delta: ""
        },
        skill4: {
            name: "",
            img: "",
            delta: ""
        },
        skill5: {
            name: "",
            img: "",
            delta: ""
        },
        skill6: {
            name: "",
            img: "",
            delta: ""
        },
        cm1: {
            name: "",
            img: "",
            delta: ""
        },
        cm2: {
            name: "",
            img: "",
            delta: ""
        },
        cm3: {
            name: "",
            img: "",
            delta: ""
        },
        cm4: {
            name: "",
            img: "",
            delta: ""
        },
        cm5: {
            name: "",
            img: "",
            delta: ""
        },
        cm6: {
            name: "",
            img: "",
            delta: ""
        }
    },
    {
        id: 23,
        name: "Keqing",
        img: `${Keqing}`,
        avatar: `${Kee}`,
        back: `${fi}`,
        story: "Ngọc Hành Tinh, một trong Thất Tinh Liyue. Đối với việc 'Liyue hoàn toàn được quyết định bởi Đế Quân' có chút không hài lòng... nhưng trên thực tế, Thần cũng rất coi trọng những người như cô.",
        skill1: {
            name: "",
            img: "",
            delta: "Đòn tấn công thông thường."
        },
        skill2: {
            name: "",
            img: "",
            delta: ""
        },
        skill3: {
            name: "",
            img: "",
            delta: ""
        },
        skill4: {
            name: "",
            img: "",
            delta: ""
        },
        skill5: {
            name: "",
            img: "",
            delta: ""
        },
        skill6: {
            name: "",
            img: "",
            delta: ""
        },
        cm1: {
            name: "",
            img: "",
            delta: ""
        },
        cm2: {
            name: "",
            img: "",
            delta: ""
        },
        cm3: {
            name: "",
            img: "",
            delta: ""
        },
        cm4: {
            name: "",
            img: "",
            delta: ""
        },
        cm5: {
            name: "",
            img: "",
            delta: ""
        },
        cm6: {
            name: "",
            img: "",
            delta: ""
        }
    },
    {
        id: 24,
        name: "Faruzan",
        img: `${Faruzan}`,
        avatar: `${Far}`,
        back: `${fo}`,
        story: "Học giả đến từ 'trăm năm trước', thích được gọi là tiền bối, chuyên nghiên cứu về các loại văn tự cổ xưa và cơ quan cổ điển.",
        skill1: {
            name: "",
            img: "",
            delta: "Đòn tấn công thông thường."
        },
        skill2: {
            name: "",
            img: "",
            delta: ""
        },
        skill3: {
            name: "",
            img: "",
            delta: ""
        },
        skill4: {
            name: "",
            img: "",
            delta: ""
        },
        skill5: {
            name: "",
            img: "",
            delta: ""
        },
        skill6: {
            name: "",
            img: "",
            delta: ""
        },
        cm1: {
            name: "",
            img: "",
            delta: ""
        },
        cm2: {
            name: "",
            img: "",
            delta: ""
        },
        cm3: {
            name: "",
            img: "",
            delta: ""
        },
        cm4: {
            name: "",
            img: "",
            delta: ""
        },
        cm5: {
            name: "",
            img: "",
            delta: ""
        },
        cm6: {
            name: "",
            img: "",
            delta: ""
        }
    }
]