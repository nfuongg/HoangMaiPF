export const assignments = [
  {
    id: 1,
    baiTap: "Bài 1",
    title: "Quản lý tệp tin và thư mục trên Windows",
    icon: "📁",
    tags: ["Windows", "Quản lý File", "Thao tác cơ bản"],
    pdfLink:
      "https://drive.google.com/file/d/1_SxjG2kLdzy0XZjudiHsQzlPQkZltMwh/view?usp=drive_link",
    goal: "Nhận diện và tối ưu hóa hệ thống phần cứng máy tính cùng các thiết bị ngoại vi chuyên dụng (màn hình phụ, tai nghe chống ồn cabin) phục vụ hiệu quả cho công việc dịch thuật đa nhiệm.",
    summary:
      "Tiến hành kiểm tra và ghi chép thông số cấu hình CPU, RAM, ổ cứng của máy tính cá nhân. Thiết lập sơ đồ kết nối các thiết bị ngoại vi tối ưu không gian làm việc và bảo mật dữ liệu đầu vào.",
    sanPhamDinhKem:
      "File báo cáo thông số cấu hình máy và sơ đồ tối ưu hóa thiết bị ngoại vi phục vụ biên dịch.",
    sections: [
      {
        title: "Các bước thực hiện",
        steps: [
          {
            step: "01",
            title: "Mở File Explorer",
            desc: "Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ. ",
          },
          {
            step: "02",
            title: "Truy cập ổ đĩa/thư mục",
            desc: "Ở cột bên trái, nhấp vào This PC, sau đó nhấp đúp vào một ổ đĩa không phải hệ thống (ví dụ: ổ D: hoặc E:). ",
          },
          {
            step: "03",
            title: "Tạo thư mục mới",
            desc: "Nhấp chuột phải vào một khoảng trống -> chọn New -> Folder. Đặt tên thư mục là ThucHanh_hotensinhvien (ví dụ: ThucHanh_NguyenVanA) và nhấn Enter.",
          },
          {
            step: "04",
            title: "Vào thư mục vừa tạo",
            desc: "Nhấp đúp vào thư mục ThucHanh_NguyenVanA. ",
          },
          {
            step: "05",
            title: "Tạo tệp tin văn bản",
            desc: "Nhấp chuột phải vào khoảng trống -> New -> Text Document. Đặt tên là GhiChu.txt và nhấn Enter.",
          },
          {
            step: "06",
            title: "Đổi tên tệp tin",
            desc: "Nhấp chuột phải vào tệp GhiChu.txt -> chọn Rename. Đổi tên thành GhiChuQuanTrong.txt và nhấn Enter.",
          },
          {
            step: "07",
            title: "Tạo thư mục con",
            desc: "Trong thư mục ThucHanh_NguyenVanA, nhấp chuột phải -> New -> Folder. Đặt tên là TaiLieu.",
          },
          {
            step: "08",
            title: "Sao chép tệp tin (Copy & Paste)",
            desc: "Nhấp chuột phải vào tệp GhiChuQuanTrong.txt -> chọn Copy (hoặc chọn tệp rồi nhấn Ctrl+C). Nhấp đúp vào thư mục TaiLieu, nhấp chuột phải vào khoảng trống bên trong -> chọn Paste (hoặc nhấn Ctrl+V).",
          },
          {
            step: "09",
            title: "Di chuyển tệp tin (Cut & Paste)",
            desc: "Tạo một tệp mới tên là DiChuyen.txt. Nhấp chuột phải vào tệp DiChuyen.txt -> chọn Cut (hoặc chọn tệp rồi nhấn Ctrl+X). Nhấp đúp vào thư mục TaiLieu, nhấp chuột phải vào khoảng trống -> chọn Paste (hoặc nhấn Ctrl+V).",
          },
          {
            step: "10",
            title: "Xóa tệp tin",
            desc: "Trong thư mục TaiLieu, nhấp chuột phải vào tệp GhiChuQuanTrong.txt -> chọn Delete. Tệp sẽ được chuyển vào Thùng rác (Recycle Bin).",
          },
          {
            step: "11",
            title: "Xóa vĩnh viễn",
            desc: "Chọn tệp DiChuyen.txt, nhấn giữ phím Shift và nhấn phím Delete. Cảnh báo hiện ra, nếu đồng ý tệp sẽ bị xóa vĩnh viễn mà không qua Thùng rác.",
          },
          {
            step: "12",
            title: "Khôi phục từ Thùng rác",
            desc: "Tìm biểu tượng Recycle Bin trên màn hình nền, nhấp đúp để mở. Tìm tệp GhiChuQuanTrong.txt đã xóa, nhấp chuột phải vào nó và chọn Restore để tệp quay trở lại vị trí ban đầu.",
          },
        ],
      },
      {
        title: "Thông tin chi tiết tệp tin trong Thùng rác",
        content:
          "| Tên tệp | Vị trí gốc | Kích thước | Loại tệp | Ngày sửa đổi |\n|---|---|---|---|---|\n| GhiChu Quan Trong.txt.txt | D:\\ThucHanh_PhamHoangMai | 0 KB | Text Document | 07/03/2026 2:36 CH |",
      },
    ],
  },
  {
    id: 2,
    baiTap: "Bài 2",
    title: "Tìm kiếm và đánh giá thông tin học thuật",
    icon: "📚",
    tags: ["Nghiên cứu", "Đánh giá tài liệu", "Ngoại ngữ", "AI"],
    pdfLink:
      "https://drive.google.com/file/d/1ylXigEQ4VeS1kp6cGlNlDtK56_LPXMCH/view?usp=drive_link",
    goal: "Ứng dụng công cụ bảng tính số hóa để thu thập, phân loại và quản trị hệ thống cơ sở dữ liệu thuật ngữ song ngữ (Glossary) chuyên ngành Ngôn ngữ",
    summary:
      "Thiết lập bảng khảo sát thu thập từ vựng, ứng dụng các hàm lọc trùng lặp, hàm tìm kiếm (VLOOKUP, INDEX/MATCH) để chuẩn hóa danh mục 100 thuật ngữ cốt lõi kèm định nghĩa ngữ cảnh.",
    sanPhamDinhKem:
      "Bảng tính Excel quản lý thuật ngữ song ngữ thông minh và biểu đồ thống kê tần suất từ vựng.",
    sections: [
      {
        title: "Chủ đề nghiên cứu",
        content:
          "Ứng dụng Trí tuệ nhân tạo trong việc học và giảng dạy ngoại ngữ.",
      },
      {
        title: "Đánh giá độ tin cậy của tài liệu tham khảo",
        table: {
          headers: ["Xếp hạng", "Tên tài liệu tham khảo", "Độ tin cậy"],
          rows: [
            [
              "1",
              "Bahroun, Z., Anane, C., Ahmed, V., & Zacca, A. (2023). Transforming education: A comprehensive review of generative artificial intelligence ineducational settings. Sustainability, 15(17), 12983.",
              "Rất cao",
            ],
            [
              "2",
              "Han, Y. (2026) The effectiveness of artificial intelligence-assisted language learning in higher education: A systematic review. Journal of China Computer-Assisted Language Learning.",
              "Rất cao",
            ],
            [
              "3",
              "Peña-Acuña, B. & Durão, R.C.F. (2024) Learning English as a second language with artificial intelligence for prospective teachers: A systematic review. Frontiers in Education, 9.",
              "Khá cao",
            ],
            [
              "4",
              "Kasneci, E., et al. (2023). ChatGPT for good? On opportunities and challenges of large language models for education. Learning and Individual Differences, 103, 102274.",
              "Khá cao",
            ],
            [
              "5",
              'Cruz-Benito, Juan (editor), “AI in Education,” Open Educational Resources Universitas Airlangga, accessed March 14, 2026, https://oer.unair.ac.id/items/show/2570',
              "Khá cao",
            ],
            [
              "6",
              "Holmes, W., Bialik, M., & Fadel, C. (2019). Artificial intelligence in education: Promises and implications for teaching and learning. Boston: Center for Curriculum Redesign.",
              "Cao",
            ],
            [
              "7",
              "Bibauw, S., François, T., & Desmet, P. (2019). Integrating natural language processing in computer-assisted language learning: A review. Computer Assisted Language Learning, 32(6), 519–545.",
              "Cao",
            ],
            [
              "8",
              "Kessler, Greg. (2010). Computer Assisted Language Learning: Critical Concepts in Linguistics. Language, Learning and Technology. 14. 14-18.",
              "Trung bình",
            ],
            [
              "9",
              "Minh Anh (2025) Chuyên gia bàn về lợi ích và thách thức ứng dụng AI trong giáo dục. Báo Giáo dục và Thời đại.",
              "Trung bình",
            ],
            [
              "10",
              "Báo cáo về ứng dụng AI trong giáo dục tại Việt Nam (2025).",
              "Thấp",
            ],
          ],
        },
      },
      {
        title: "Tiêu chí phân tích & Bài học",
        highlights: [
          {
            emoji: "🌟",
            text: "Tài liệu độ tin cậy Rất cao/Cao: Thường là các bài báo khoa học, sách chuyên khảo xuất bản trên tạp chí uy tín (Sustainability, Frontiers...), có tác giả chuyên gia và quy trình nghiên cứu minh bạch (Systematic review).",
          },
          {
            emoji: "⚠️",
            text: "Tài liệu độ tin cậy Trung bình/Thấp: Các báo cáo truyền thông, blog hoặc báo mạng chủ yếu mang tính tổng hợp thông tin, thiếu dữ liệu thực nghiệm và không có phương pháp nghiên cứu khoa học cụ thể.",
          },
          {
            emoji: "✅",
            text: "Kỹ năng đạt được: Nắm vững cách phân tích, sàng lọc và đánh giá thông tin học thuật dựa trên loại nguồn, cơ quan xuất bản, phương pháp nghiên cứu và tính cập nhật.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    baiTap: "Bài 3",
    title: "Viết Prompt hiệu quả cho các tác vụ học tập",
    icon: "💬",
    tags: ["Prompt Engineering", "AI", "Kỹ năng số"],
    pdfLink:
      "https://drive.google.com/file/d/1qlPL4irjY8UpYhrmfEphNtBYw2EjtyPx/view?usp=drive_link",
    goal: "Đánh giá năng lực dịch thuật của các mô hình ngôn ngữ lớn (Generative AI) thế hệ mới, so sánh sự khác biệt về văn phong dịch thuật giữa máy và dịch giả người.",
    summary:
      "Sử dụng ChatGPT và Gemini để dịch thử nghiệm các văn bản văn học cổ và bài báo kinh tế. Thực hành tinh chỉnh Prompt theo cấu trúc nhập vai (Persona) để điều hướng giọng điệu bản dịch phù hợp.",
    sanPhamDinhKem:
      "Tiểu luận so sánh văn phong dịch thuật AI và con người kèm bộ Prompt mẫu tối ưu ngữ cảnh.",
    sections: [
      {
        title: "Các tác vụ thực nghiệm viết Prompt",
        highlights: [
          {
            emoji: "📝",
            text: "Tóm tắt tài liệu học thuật: Thử nghiệm tóm tắt văn bản về khó khăn của làng nghề truyền thống. Áp dụng kỹ thuật đóng vai (sinh viên năm nhất), yêu cầu cấu trúc rõ ràng (chủ đề, luận điểm, ví dụ) và đánh giá độ hữu ích của tài liệu.",
          },
          {
            emoji: "🧠",
            text: 'Giải thích khái niệm phức tạp: Yêu cầu AI đóng vai giảng viên môn Ngôn ngữ & Truyền thông để giải thích khái niệm "ẩn dụ" theo 3 cấp độ: học thuật (dùng từ chuyên ngành), đơn giản (dễ hiểu) và ứng dụng thực tiễn.',
          },
          {
            emoji: "❓",
            text: "Tạo bộ câu hỏi ôn tập: Thiết kế prompt nhập vai gia sư tạo bộ câu hỏi về 12 thì Tiếng Anh. Nội dung phân loại theo 3 mức độ (dễ, trung bình, khó) bao gồm các dạng trắc nghiệm, tự luận có gợi ý và tìm lỗi sai.",
          },
        ],
      },
      {
        title: "Phân tích nguyên tắc giúp Prompt nâng cao đạt hiệu quả tối ưu",
        highlights: [
          {
            emoji: "🎯",
            text: 'Giảm mơ hồ và kiểm soát hướng suy luận: Việc xác định rõ mục tiêu, phạm vi và tiêu chí cụ thể giúp AI không phải "đoán ý" người dùng.',
          },
          {
            emoji: "🎭",
            text: 'Kích hoạt mẫu phản hồi qua đóng vai (Role prompting): Gán vai trò như "giảng viên" hay "gia sư" hoạt động như một bộ lọc, giúp AI chọn đúng văn phong và độ sâu kiến thức phù hợp.',
          },
          {
            emoji: "📊",
            text: "Quy định định dạng và cấu trúc: Yêu cầu chia nội dung thành các phần cụ thể, định lượng số bài tập rõ ràng giúp kết quả có tính hệ thống, dễ đọc và ghi nhớ.",
          },
          {
            emoji: "💡",
            text: "Tăng chiều sâu tư duy: Đưa ra các yêu cầu như nhận xét, đánh giá hoặc giải thích chuyên sâu buộc AI phải tổ chức lại thông tin thay vì chỉ liệt kê kiến thức đơn thuần.",
          },
        ],
      },
      {
        title: "Kết luận",
        content:
          "Thực nghiệm cho thấy Prompt càng cụ thể và có cấu trúc tốt, kết quả trả về càng chất lượng. Tuy nhiên, Trí tuệ nhân tạo sẽ phát huy hiệu quả cao nhất khi được sử dụng như một công cụ hỗ trợ tư duy học tập, chứ không nên thay thế hoàn toàn vai trò tiếp thu của người học.",
      },
    ],
  },
  {
    id: 4,
    baiTap: "Bài 4",
    title: "Ứng dụng công cụ cộng tác trực tuyến trong dự án nhóm",
    icon: "🤝",
    tags: [
      "Cộng tác trực tuyến",
      "Làm việc nhóm",
      "Quản trị dự án",
      "Công cụ số",
    ],
    pdfLink:
      "https://drive.google.com/file/d/1sKfJxd7Li1OgmfpBjMg4NJdwqbuIOFvg/view?usp=drive_link",
    goal: "Thiết lập quy trình làm việc nhóm trực tuyến đồng bộ và an toàn cho một dự án biên dịch sách chuyên ngành có quy mô lớn.",
    summary:
      "Phân cấp cây thư mục lưu trữ trên Google Drive nhóm, quy chuẩn hóa cách đặt tên tệp tin để kiểm soát phiên bản (Version Control), kết hợp thảo luận tiến độ qua Slack và phân quyền chỉnh sửa bản dịch chặt chẽ.",
    sanPhamDinhKem:
      "Sơ đồ tổ chức thư mục đám mây và bảng quy chế phối hợp làm việc nhóm trực tuyến.",
    sections: [
      {
        title: "Thiết lập không gian làm việc và công cụ",
        steps: [
          {
            step: "01",
            title: "Quản lý dự án (Trello)",
            desc: "Xây dựng danh sách công việc cá nhân, phân chia và cập nhật trạng thái tác vụ (To Do, Doing, Done) tối thiểu 3 lần/tuần để kiểm soát tiến độ tổng thể.",
          },
          {
            step: "02",
            title: "Soạn thảo cộng tác (Google Docs)",
            desc: "Trực tiếp phác thảo nội dung, tổng hợp dữ liệu. Minh bạch hóa quá trình làm việc qua lịch sử phiên bản và tương tác bình luận/góp ý chéo.",
          },
          {
            step: "03",
            title: "Lưu trữ tài nguyên (Google Drive)",
            desc: "Xây dựng không gian lưu trữ theo cấu trúc cây thư mục logic. Thực hiện chia sẻ liên kết có chủ đích và phân quyền truy cập chính xác (Viewer/Editor).",
          },
        ],
      },
      {
        title: "Thách thức & Giải pháp thực tiễn",
        highlights: [
          {
            emoji: "🔄",
            text: "Xung đột dữ liệu trên Docs (Real-time Overlap): Khắc phục bằng cách tạo bảng phân công vị trí viết rõ ràng ở đầu trang và sử dụng 'Chế độ đề xuất' thay vì sửa trực tiếp.",
          },
          {
            emoji: "⏳",
            text: "Sai lệch tiến độ trên Trello: Thiết lập check-in nhanh 5 phút mỗi sáng trên nền tảng Slack để nhắc nhở đồng đội cập nhật trạng thái thẻ công việc.",
          },
          {
            emoji: "💬",
            text: "Bất đối xứng thông tin và trôi tin nhắn: Phân loại luồng hội thoại bằng Reply in Thread, sử dụng Pin message cho các thông báo chốt deadline và Mention đúng người chịu trách nhiệm.",
          },
        ],
      },
      {
        title: "Kết luận & Bài học kinh nghiệm",
        content:
          "Việc phối hợp làm việc từ xa không còn là rào cản nếu mỗi cá nhân có ý thức kỷ luật số và kỹ năng khai thác công nghệ tốt. Bài học cốt lõi là quản trị tài nguyên và giao tiếp số đòi hỏi sự đồng thuận cao về quy chuẩn làm việc (quy tắc đặt tên, cấu trúc thư mục, quy trình cập nhật) ngay từ giai đoạn khởi đầu dự án.",
      },
    ],
  },
  {
    id: 5,
    baiTap: "Bài 5",
    title: "Sáng tạo nội dung số với sự hỗ trợ của AI tạo sinh",
    icon: "✨",
    tags: ["Nội dung số", "Thiết kế Infographic", "AI tạo sinh", "EdTech"],
    pdfLink:
      "https://drive.google.com/file/d/105hQgikNhIDR6oymdhl_M2zfAf5HvfdX/view?usp=drive_link",
    goal: "Thiết kế ấn phẩm đồ họa học thuật chất lượng cao truyền tải các mẹo học ngôn ngữ sinh động tới cộng đồng người học trên Internet.",
    summary:
      'Lên kịch bản nội dung "Kỷ nguyên mới: Ứng dụng AI trong Học tập Ngôn ngữ", sử dụng Canva phối hợp màu sắc tương phản tốt để tạo Infographic thu hút người xem và xuất bản định dạng ảnh/PDF sắc nét.',
    sanPhamDinhKem:
      "File thiết kế Infographic bài học từ vựng trực quan và kịch bản truyền thông ngắn.",
    sections: [
      {
        title: "Quy trình ứng dụng công cụ AI (Multi-AI Workflow)",
        steps: [
          {
            step: "01",
            title: "Nghiên cứu & Cấu trúc nội dung (Gemini)",
            desc: "Tối ưu hóa câu lệnh (Prompt Engineering) để chuyển đổi báo cáo học thuật thành khung nội dung tối giản, sử dụng cấu trúc Slogan giật gân kết hợp giải thích lõi cho Infographic.",
          },
          {
            step: "02",
            title: "Sáng tạo Tài sản Thị giác (Midjourney v6)",
            desc: "Sử dụng các tham số chuyên sâu để tạo hình ảnh chủ đạo (Hero Image) mang tính biểu tượng công nghệ, sau đó dùng phần mềm đồ họa xóa ký tự rác và cân bằng sáng.",
          },
          {
            step: "03",
            title: "Định hình bố cục & Hoàn thiện (Canva Magic Studio)",
            desc: "Phá vỡ các layout rập khuôn của AI, tự tay sắp xếp các khối văn bản theo tỷ lệ vàng, thay thế phông chữ mặc định bằng bộ Urbanist/Poppins việt hóa và sử dụng icon vector tối giản.",
          },
        ],
      },
      {
        title: "Bảng so sánh hiệu quả các công cụ AI",
        table: {
          headers: [
            "Nhóm chức năng",
            "Công cụ trải nghiệm",
            "Điểm mạnh vượt trội",
            "Hạn chế cốt lõi",
          ],
          rows: [
            [
              "AI Tạo văn bản",
              "Gemini vs ChatGPT",
              "Gemini có tư duy sư phạm tốt, viết prompt mượt; ChatGPT xử lý thông tin thô cực nhanh.",
              "Đôi khi từ chối phản hồi nếu câu lệnh chứa từ khóa nhạy cảm.",
            ],
            [
              "AI Tạo hình ảnh",
              "Midjourney vs DALL-E",
              "Midjourney chi tiết ảnh điện ảnh cực đẹp; DALL-E hiểu chính xác yêu cầu hình học phức tạp.",
              "Không thể chèn chữ chính xác vào ảnh; khó kiểm soát chi tiết nhỏ.",
            ],
            [
              "AI Hỗ trợ thiết kế",
              "Canva AI vs Piktochart",
              "Canva có hệ sinh thái tính năng đa dạng, kho tài nguyên khổng lồ; Piktochart mạnh về biểu đồ số.",
              "Các tùy chỉnh tự động đôi khi làm vỡ bố cục mong muốn.",
            ],
          ],
        },
      },
      {
        title: "Phân tích vai trò & Ranh giới đạo đức",
        highlights: [
          {
            emoji: "🔄",
            text: "Chuyển dịch vai trò: AI giúp giải phóng khỏi 'nỗi sợ trang giấy trắng', người dùng dịch chuyển từ thợ thực thi (Executor) thành Giám đốc nghệ thuật và Biên tập viên (Orchestrator).",
          },
          {
            emoji: "⚖️",
            text: "Bản quyền dữ liệu: Tránh lỗi chiếm đoạt bằng cách không dùng prompt 'in the style of [Tên họa sĩ]' và thực hiện hậu kỳ chỉnh sửa sâu để tạo ra bản phái sinh cá nhân.",
          },
          {
            emoji: "⚠️",
            text: "Ảo giác thông tin (Hallucination): AI thường tự bịa số liệu logic (tin giả), do đó quy trình kiểm tra chéo (Fact-check) thủ công các báo cáo khoa học là bắt buộc.",
          },
          {
            emoji: "✅",
            text: "Tính minh bạch: Tuân thủ chính trực học thuật bằng cách đính kèm dòng thông báo ở footer xác nhận 'sản phẩm có sự hỗ trợ của Generative AI'.",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    baiTap: "Bài 6",
    title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    icon: "⚖️",
    tags: ["Liêm chính học thuật", "Đạo đức số", "AI trong học tập"],
    pdfLink:
      "https://drive.google.com/file/d/1e9rEn0Pf_tk7Bl04UqmPWRZd935Prl1p/view?usp=drive_link",
    goal: "Xây dựng ý thức sâu sắc về bản quyền số, quy chuẩn chống đạo văn dịch thuật (Translating Plagiarism), và thực hành trích dẫn tài liệu tham khảo chuẩn khoa học quốc tế.",
    summary:
      "Nghiên cứu các hành vi vi phạm liêm chính học thuật khi sử dụng AI không trích nguồn. Thực hành viết đoạn văn nghị luận ngắn và trích dẫn tài liệu tham khảo song ngữ theo định dạng chuẩn APA phiên bản thứ 7.",
    sanPhamDinhKem:
      "Báo cáo nghiên cứu về Liêm chính học thuật trong thời đại số và danh mục tài liệu trích dẫn mẫu APA 7.",
    sections: [
      {
        title: "Khảo sát chính sách Liêm chính học thuật",
        table: {
          headers: [
            "Tiêu chí",
            "ĐH Ngoại ngữ (ULIS)",
            "ĐH Khoa học Xã hội & Nhân văn (USSH)",
            "ĐH Công nghệ (UET)",
          ],
          rows: [
            [
              "Đặc thù tiếp cận",
              "Trọng tâm vào Ngôn ngữ & Biên dịch. AI là đối tác hội thoại, hiệu đính.",
              "Trọng tâm vào Nghiên cứu & Lý luận. AI là trợ lý tổng hợp, gợi ý cấu trúc.",
              "Trọng tâm vào Kỹ thuật & Công nghệ. AI là công cụ sinh mã (Code Generation).",
            ],
            [
              "Ranh giới gian lận",
              "Dùng AI dịch thay thế hoàn toàn tư duy, học thuộc lòng bài tạo sẵn.",
              "Viết toàn bộ văn bản bằng AI (AI-generated) mà không kiểm chứng.",
              "Copy mã nguồn từ AI mà không hiểu nguyên lý hoạt động, vi phạm bản quyền.",
            ],
          ],
        },
      },
      {
        title: "Thực hành 4 bước sử dụng AI liêm chính (AI Integrity Guide)",
        steps: [
          {
            step: "01",
            title: "Khởi động (Think)",
            desc: "Tự lên ý tưởng cốt lõi và xác định rõ mục đích cần AI hỗ trợ. Nghiên cứu kỹ quy định của môn học trước khi bắt đầu.",
          },
          {
            step: "02",
            title: "Tương tác (Prompt)",
            desc: "Thực hành yêu cầu AI đóng vai 'chuyên gia kinh tế vĩ mô' để lập dàn ý bài luận về thanh toán trực tuyến và tương lai của tiền mặt tại Việt Nam. Tránh đưa dữ liệu mật.",
          },
          {
            step: "03",
            title: "Đánh giá (Select)",
            desc: "Giữ lại bộ khung logic phản biện tốt của AI, nhưng loại bỏ các thông tin ngụy tạo và tự tra cứu, cập nhật dữ liệu thực tế từ Ngân hàng Nhà nước.",
          },
          {
            step: "04",
            title: "Minh bạch (Disclose)",
            desc: "Ghi nhận công cụ hỗ trợ, trích dẫn đúng định dạng (APA/Harvard), và đính kèm phần khai báo câu lệnh (Prompt) cùng kết quả thô vào Phụ lục bài tập.",
          },
        ],
      },
      {
        title: "Bộ 6 nguyên tắc cá nhân về sử dụng AI",
        highlights: [
          {
            emoji: "🧠",
            text: "Tư duy độc lập đi trước (Human-First Mindset): Luôn tự suy nghĩ và phác thảo hướng đi riêng trước khi mở công cụ AI.",
          },
          {
            emoji: "🔍",
            text: "Kiểm chứng không thỏa hiệp (Verification Imperative): Coi mọi dữ liệu do AI cung cấp là 'giả định', luôn đối chiếu chéo với tài liệu chính thống.",
          },
          {
            emoji: "⚖️",
            text: "Minh bạch tuyệt đối (Absolute Transparency): Công khai trung thực mức độ can thiệp của AI trong sản phẩm học thuật.",
          },
          {
            emoji: "🔒",
            text: "Bảo mật dữ liệu nghiêm ngặt (Data Privacy): Không tải dữ liệu cá nhân hay tài liệu nội bộ chưa công bố lên hệ thống AI.",
          },
          {
            emoji: "🚀",
            text: "Phát triển kỹ năng bậc cao (High-Level Skill Focus): Dành 80% năng lượng cho tư duy phản biện và sáng tạo giá trị thay vì các tác vụ lặp lại.",
          },
          {
            emoji: "📚",
            text: "Cập nhật liên tục (Continuous Ethical Learning): Luôn theo dõi các điều chỉnh quy chế về đạo đức công nghệ của Nhà trường.",
          },
        ],
      },
    ],
  },
];
