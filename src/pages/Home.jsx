/// <reference types="vite/client" />
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { assignments as assignmentData } from "@/data/assignments";

const assignments = assignmentData;

/** @param {string} fileName */
const assetPath = (fileName) =>
  `${import.meta.env.BASE_URL}${fileName.replace(/^\//, "")}`;

const images = {
  hero: assetPath("hmai5.png"),
  aboutFeature: assetPath("hmai1.jpg"),
  aboutPortrait: assetPath("hmai2.jpg"),
  setupMain: assetPath("Group-19142@2x.png"),
  setupLaptop: assetPath("Rectangle-29441@2x.png"),
  setupCreative: assetPath("Rectangle-26603@2x.png"),
  setupWorkspace: assetPath("Rectangle-2944@2x.png"),
};

const skillIconByName = {
  "HTML 5": assetPath("./Skill-Icon-ri-html5-fill.svg"),
  "CSS 3": assetPath("./Skill-Icon-uiw-css3.svg"),
  Github: assetPath("./Skill-Icon-mdi-github.svg"),
  JQuery: assetPath("./Skill-Icon-akar-icons-jquery-fill@2x.png"),
  "VS Code": assetPath("./Skill-Icon-akar-icons-vscode-fill@2x.png"),
  Git: assetPath("./Skill-Icon-bi-git.svg"),
  MongoDB: assetPath("./Skill-Icon-bxl-mongodb.svg"),
  "RESTFull APIs": assetPath("./Skill-Icon-mdi-api.svg"),
  Boostrap: assetPath("./Skill-Icon-mdi-bootstrap.svg"),
  FIREBASE: assetPath("./Skill-Icon-mdi-firebase.svg"),
  ReactJS: assetPath("./Skill-Icon-mdi-react.svg"),
  Figma: assetPath("./Skill-Icon-solar-figma-bold.svg"),
  Javascript: assetPath("./Skill-Icon-teenyicons-nodejs-solid.svg"),
};

const blogPosts = [
  {
    title: "Tuần 1: Khám phá thế giới phần cứng máy tính",
    date: "Tháng 3, 2025",
    excerpt:
      "Lần đầu tiên tôi thực sự hiểu được bên trong một chiếc máy tính có những gì. Bài học về phần cứng mở ra cho tôi một góc nhìn hoàn toàn mới...",
    tags: ["Phần cứng", "Tuần 1"],
  },
  {
    title: "Tuần 2: Nghệ thuật tìm kiếm thông tin trên mạng",
    date: "Tháng 3, 2025",
    excerpt:
      "Tôi nhận ra mình đã tìm kiếm trên Google không hiệu quả suốt bao nhiêu năm. Các kỹ thuật Boolean và tìm kiếm nâng cao thực sự thay đổi cách tôi học...",
    tags: ["Thông tin số", "Tuần 2"],
  },
  {
    title: "Tuần 3: AI không còn xa lạ nữa",
    date: "Tháng 4, 2025",
    excerpt:
      "ChatGPT, Gemini, hay các mô hình học máy — giờ tôi đã hiểu chúng hoạt động như thế nào và tại sao AI lại đang thay đổi mọi thứ xung quanh chúng ta...",
    tags: ["AI", "Tuần 3"],
  },
];

export default function Portfolio() {
  const [expandedAssignment, setExpandedAssignment] = useState(null);

  const skills = [
    { name: "HTML 5", src: skillIconByName["HTML 5"] },
    { name: "CSS 3", src: skillIconByName["CSS 3"] },
    { name: "Github", src: skillIconByName.Github },
    { name: "JQuery", src: skillIconByName.JQuery },
    { name: "VS Code", src: skillIconByName["VS Code"] },
    { name: "Git", src: skillIconByName.Git },

    { name: "Boostrap", src: skillIconByName.Boostrap },
    { name: "FIREBASE", src: skillIconByName.FIREBASE },
    { name: "ReactJS", src: skillIconByName.ReactJS },
    { name: "Figma", src: skillIconByName.Figma },
    { name: "Javascript", src: skillIconByName.Javascript },
  ];

  return (
    <main className="max-w-[1920px] w-full mx-auto relative bg-background overflow-clip font-heading text-[#0D2B45]">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03] flex justify-between w-full h-full">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="w-1 h-full bg-[#0D2B45]" />
        ))}
      </div>

      {/* Navigation */}
      <nav className="sticky top-6 z-50 mx-4 md:mx-[clamp(16px,2vw,38px)] flex flex-row justify-between items-center p-[15px] rounded-[16px] shadow-[inset_0_0_0_1px_#0D2B45] bg-background/80 backdrop-blur-md">
        <div className="flex flex-row items-center gap-[18px]">
          <p className="text-[clamp(20px,2.4vw,46px)] font-extrabold leading-none">
            PORTFOLIO
          </p>
          <div className="bg-secondary w-5 h-5 rounded-full" />
        </div>
        <div className="hidden lg:flex flex-row items-center gap-[clamp(16px,1.7vw,33px)]">
          {[
            { label: "Giới thiệu", href: "#about" },
            { label: "Kỹ năng", href: "#services" },
            { label: "Dự án", href: "#project" },
            { label: "Nhật ký", href: "#blog" },
            { label: "Tổng kết", href: "#reflection" },
            { label: "Liên hệ", href: "#contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[clamp(14px,1.3vw,22px)] font-medium hover:text-secondary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="flex flex-row items-center gap-2 p-2.5 bg-secondary rounded-[57px] hover:scale-105 transition-transform"
        >
          <span className="text-[clamp(14px,1.25vw,22px)] font-bold text-primary px-3">
            Liên hệ
          </span>
        </a>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-[clamp(25px,5.2vw,100px)] mx-4 md:mx-10 relative rounded-[20px] overflow-clip aspect-[16/9] md:aspect-[1843/906] z-10"
      >
        <img
          className="w-full h-full object-cover shadow-[inset_0_0_0_1px_#0D2B45]"
          src={images.hero}
          alt="Không gian công nghệ"
        />
        <div className="absolute inset-0 bg-figma-subtle opacity-[0.42]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
          {/* 1. Tên môn học (Eyebrow text) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[clamp(12px,1.5vw,20px)] font-semibold text-secondary mb-4 tracking-[0.15em] uppercase"
          >
            Nhập môn Công nghệ số và Ứng dụng Trí tuệ Nhân tạo
          </motion.p>

          {/* 2. Tên sinh viên (Tiêu đề chính) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-[clamp(40px,7vw,120px)] font-extrabold text-[#FFFFFF] leading-[1.1] mb-6"
          >
            Phạm Hoàng Mai
          </motion.p>

          {/* 3. Mã số sinh viên */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-[clamp(16px,1.8vw,26px)] font-medium text-[#FFFFFF] mb-2 tracking-wide"
          >
            MSSV: 25040857
          </motion.p>

          {/* 4. Ngành học & Trường */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-[clamp(16px,1.8vw,26px)] font-light text-[#FFFFFF]/70"
          >
            Sinh viên Ngôn ngữ Anh · ULIS-VNU
          </motion.p>
        </div>
      </motion.section>

      {/* About Me Section */}
      <section
        id="about"
        className="mt-[clamp(38px,7.8vw,150px)] mx-4 md:mx-10 flex flex-col gap-10 z-10 relative"
      >
        <div className="flex justify-center items-center gap-[20px] md:gap-[clamp(16px,2.8vw,53px)]">
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
          <h2 className="text-[clamp(32px,5.0vw,96px)] font-extrabold leading-none tracking-[-0.01em] text-secondary uppercase">
            Giới Thiệu
          </h2>
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-[20px] p-8 md:p-[clamp(16px,2.1vw,40px)] flex flex-col gap-6"
            >
              <p className="text-[clamp(28px,3.5vw,60px)] font-extrabold leading-none text-primary">
                Xin chào! 👋
              </p>
              <p className="text-[clamp(16px,1.3vw,22px)] font-normal leading-[1.7] text-primary">
                Tôi là <strong>Phạm Hoàng Mai</strong>, sinh viên ngành{" "}
                <strong>Ngôn ngữ Anh</strong>, ULIS-VNU. Bên cạnh niềm đam mê
                với ngôn ngữ, tôi thường dành thời gian cho những sở thích cá
                nhân như đọc sách, nghe nhạc và nấu ăn để cân bằng cuộc sống.
                Đối với tôi, mỗi ngày trôi qua đều là một cơ hội tuyệt vời để
                học hỏi, trải nghiệm và không ngừng hoàn thiện bản thân.
              </p>
              <p className="text-[clamp(16px,1.3vw,22px)] font-normal leading-[1.7] text-primary">
                <strong>Câu châm ngôn sống yêu thích:</strong> "Trong kỷ nguyên
                số, ngôn ngữ là cầu nối, còn công nghệ là đôi cánh."
              </p>
              <p className="text-[clamp(16px,1.3vw,22px)] font-normal leading-[1.7] text-primary">
                Sở thích của tôi bao gồm:
              </p>

              <div className="flex flex-col gap-3">
                {[
                  "Xem phim và nghe nhạc để giải trí, đồng thời rèn luyện phản xạ nghe tiếng Anh tự nhiên.",
                  "Đọc sách lúc rảnh rỗi để thư giãn đầu óc.",
                  "Chụp ảnh, ghi lại những khoảnh khắc đẹp thường ngày, phong cảnh đường phố hoặc đồ ăn, rồi tự tay chỉnh sửa màu sắc bằng các ứng dụng trên điện thoại.",
                ].map((item, i) => (
                  <div key={i} className="flex flex-row items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                    <p className="text-[clamp(16px,1.3vw,22px)] font-normal leading-[1.7] text-primary">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-[20px] p-8 shadow-[inset_0_0_0_1px_#0D2B45] flex flex-col gap-4"
            >
              <p className="text-[clamp(20px,2vw,36px)] font-extrabold text-secondary">
                🎯 Mục tiêu học tập
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Làm chủ các công cụ số cơ bản phục vụ học tập như bảng tính Excel nâng cao, công cụ thiết kế Canva, và quy trình lưu trữ đồng bộ dữ liệu đám mây (Google Drive/OneDrive).",
                  "Học cách tương tác hiệu quả với các mô hình ngôn ngữ lớn (LLMs) bằng Prompt Engineering để hỗ trợ dịch thuật nhanh nhưng vẫn kiểm soát tốt chất lượng.",
                  "Hoàn thành xuất sắc học phần Kỹ năng số với một Portfolio cá nhân đạt chuẩn thẩm mỹ và học thuật cao.",
                ].map((goal, i) => (
                  <div key={i} className="flex flex-row items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                    <p className="text-[clamp(14px,1.2vw,20px)] font-light leading-[1.6]">
                      {goal}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[20px] w-full h-[350px] xl:h-[400px]"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-[20px] z-[1]"
                src={images.aboutFeature}
                alt="Không gian sáng tạo nội dung"
              />
              <div className="absolute inset-0 bg-background opacity-[0.3] rounded-[20px] z-[2]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-[20px] p-8 bg-[#0D2B45]/10 shadow-[inset_0_0_0_1px_#0D2B45] flex flex-col gap-4"
            >
              <p className="text-[clamp(20px,2vw,36px)] font-extrabold text-secondary">
                📌 Mục đích Portfolio
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Minh chứng năng lực số: Thể hiện trực quan các kỹ năng công nghệ thông tin đã được đào tạo và áp dụng thực tế qua từng bài tập của học phần.",
                  'Kho lưu trữ sản phẩm số cá nhân: Đóng vai trò là một "thư viện thu nhỏ", lưu trữ an toàn toàn bộ sản phẩm dịch thuật, slide thuyết trình, và báo cáo nghiên cứu dưới định dạng số hóa để dễ dàng truy cập mọi lúc, mọi nơi.',
                  "Công cụ định vị thương hiệu cá nhân: Sẵn sàng chia sẻ đường link portfolio trực tiếp tới các nhà tuyển dụng, đối tác hoặc giảng viên để chứng minh năng lực thực tế một cách chuyên nghiệp nhất.",
                ].map((item, i) => (
                  <div key={i} className="flex flex-row items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                    <p className="text-[clamp(14px,1.2vw,20px)] font-light leading-[1.6]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Marquee */}
      <section className="mt-[clamp(38px,7.8vw,150px)] bg-secondary py-[20px] overflow-clip flex relative z-10">
        <motion.div
          className="flex flex-row items-center gap-12 px-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1.5 w-20 shrink-0"
            >
              <div className="h-20 w-20 relative flex items-center justify-center">
                <img
                  src={skill.src}
                  className="max-w-full max-h-full object-contain"
                  alt={skill.name}
                />
              </div>
              <p className="text-[clamp(14px,1.3vw,25px)] font-bold text-accent">
                {skill.name}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="mt-[clamp(50px,10.4vw,200px)] mx-4 md:mx-[clamp(16px,3.5vw,68px)] relative z-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(60px,11.77vw,226px)] font-extrabold leading-[1.1] md:leading-[1.3] max-w-[1819px]"
        >
          Các <span className="text-secondary">kỹ năng</span> tôi đã phát triển
        </motion.p>

        <div className="mt-[clamp(25px,5.2vw,100px)] relative flex flex-col xl:flex-row items-start justify-between">
          <div className="relative w-full max-w-[1030px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-accent rounded-[40px] md:rounded-[72px] shadow-[inset_0_0_0_1px_#E6F4FA] p-6 md:p-[clamp(16px,3.4vw,66px)] flex flex-col gap-10 relative z-10"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="relative">
                    <img
                      src={images.aboutPortrait}
                      className="w-[100px] md:w-[141px] h-[100px] md:h-[141px] rounded-full object-cover shadow-[inset_0_0_0_1px_#E6F4FA] z-[3] relative"
                      alt="Ảnh chân dung"
                    />
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-secondary rounded-full shadow-[inset_0_0_0_2px_#E6F4FA] z-[4]" />
                  </div>
                  <div className="flex flex-col gap-2 md:gap-4 text-center md:text-left">
                    <p className="text-[clamp(22px,2.08vw,40px)] font-bold text-primary">
                      Phạm Hoàng Mai
                    </p>
                    <div className="flex flex-row items-center justify-center md:justify-start gap-2">
                      <p className="text-[14px] md:text-[18px] font-medium text-primary">
                        📍 Hà Nội, Việt Nam
                      </p>
                    </div>
                    <p className="text-[14px] md:text-[18px] font-bold text-primary">
                      Sinh viên Ngôn ngữ Anh · Năm 1 · ULIS-VNU
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-[clamp(20px,2.08vw,36px)] font-extrabold leading-[1.2] text-primary">
                  Nhập môn Công nghệ số & Ứng dụng Trí tuệ nhân tạo
                </p>

                <div className="flex flex-col gap-3">
                  {[
                    "Kỹ năng Ứng dụng Trí tuệ Nhân tạo (AI Literacy): Có tư duy phản biện khi sử dụng AI, biết cách tinh chỉnh Prompt để AI hỗ trợ tra cứu thuật ngữ chuyên ngành hẹp mà không bị phụ thuộc hoàn toàn.",
                    "Kỹ năng Hợp tác Trực tuyến: Sử dụng tốt các công cụ làm việc nhóm thời gian thực (Google Workspace, Trello, Slack), hiểu rõ quy chuẩn phân chia công việc trong một dự án dịch thuật lớn.",
                    "Kỹ năng Sáng tạo Nội dung Đa phương tiện: Thiết kế các ấn phẩm infographic học tập rõ ràng, phối màu chuẩn thẩm mỹ trên Canva và biên tập video bài giảng ngắn có phụ đề.",
                    "Kỹ năng Thực thi Liêm chính Học thuật: Nắm vững luật bản quyền số, thành thạo kỹ thuật trích dẫn nguồn tài liệu tham khảo theo chuẩn quốc tế (APA 7, MLA), kiên quyết chống đạo văn học thuật.",
                  ].map((item, i) => (
                    <div key={i} className="flex flex-row items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                      <p className="text-[clamp(16px,1.5vw,26px)] font-normal leading-[1.6] text-primary">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section
        id="project"
        className="mt-[clamp(38px,7.8vw,150px)] mx-4 md:mx-[clamp(16px,3vw,60px)] flex flex-col gap-[clamp(20px,5.2vw,80px)] z-10 relative"
      >
        <div className="flex justify-center items-center gap-[20px] md:gap-[clamp(16px,2.8vw,53px)]">
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
          <h2 className="text-[clamp(32px,5.0vw,96px)] font-extrabold leading-none tracking-[-0.01em] text-secondary uppercase">
            Dự Án
          </h2>
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
        </div>

        <p className="text-center text-[clamp(16px,1.5vw,26px)] font-light text-[#0D2B45]/70 -mt-4">
          6 bài tập thuộc môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ Nhân tạo
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {assignments.map((assignment, i) => (
            <motion.div
              key={assignment.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-[20px] overflow-hidden shadow-[inset_0_0_0_1px_#0D2B45] bg-[#0D2B45]/5 hover:bg-[#0D2B45]/10 transition-all duration-300 group"
            >
              {/* Card Header */}
              <div className="bg-secondary p-6 flex flex-col gap-2">
                <div className="flex flex-row items-center justify-between">
                  <span className="text-[13px] font-bold text-primary/70 uppercase tracking-widest">
                    {assignment.baiTap}
                  </span>
                  <span className="text-3xl">{assignment.icon}</span>
                </div>
                <p className="text-[clamp(16px,1.5vw,22px)] font-extrabold text-primary leading-[1.3]">
                  {assignment.title}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div>
                  <p className="text-[13px] font-bold text-secondary uppercase tracking-widest mb-2">
                    🎯 Mục tiêu
                  </p>
                  <p className="text-[clamp(14px,1.1vw,18px)] font-light leading-[1.6] text-[#0D2B45]/80">
                    {assignment.goal}
                  </p>
                </div>

                <div>
                  <p className="text-[13px] font-bold text-secondary uppercase tracking-widest mb-2">
                    📋 Tóm tắt
                  </p>
                  <p className="text-[clamp(14px,1.1vw,18px)] font-light leading-[1.6] text-[#0D2B45]/80">
                    {assignment.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {assignment.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="py-1 px-3 rounded-full shadow-[inset_0_0_0_1px_#1EC1FE] text-[12px] font-bold text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <Link
                  to={`/assignments/${assignment.id}`}
                  className="flex flex-row items-center justify-center gap-2 w-full py-3 px-6 bg-secondary rounded-[12px] hover:scale-[1.02] transition-transform text-primary font-bold text-[clamp(14px,1.2vw,18px)]"
                >
                  <span>📄</span>
                  <span>Bài học chi tiết</span>
                  <span className="ml-1">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Set-Up Section */}
      <section
        id="set-up"
        className="mt-[clamp(38px,7.8vw,150px)] mx-4 md:mx-[clamp(16px,2.8vw,53px)] grid grid-cols-1 xl:grid-cols-[832fr_910fr] gap-[clamp(20px,5.2vw,100px)] z-10 relative"
      >
        {/* Left Column */}
        <div className="flex flex-col gap-[clamp(16px,3.2vw,62px)]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-[20px] md:gap-[clamp(16px,2.8vw,53px)]">
              <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
              <h2 className="text-[clamp(32px,5.0vw,96px)] font-extrabold leading-none tracking-[-0.01em] text-secondary uppercase">
                Set - Up
              </h2>
              <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
            </div>
            <p className="text-[clamp(25px,2.34vw,45px)] font-extrabold leading-[1.26]">
              CÔNG CỤ VÀ THIẾT BỊ CỦA TÔI
            </p>
            <p className="text-[clamp(16px,1.5vw,24px)] font-normal leading-[1.6] text-[#0D2B45]/70">
              Những công cụ tôi sử dụng hàng ngày trong học tập và làm việc
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {[
              {
                i1: images.setupLaptop,
                i2: images.setupCreative,
                title: "Máy tính / Laptop",
                sub: "Thiết bị học tập chính",
              },
              {
                i1: images.setupCreative,
                i2: images.setupWorkspace,
                title: "VS Code / Figma",
                sub: "Công cụ thiết kế & lập trình",
              },
              {
                i1: images.setupWorkspace,
                i2: images.setupLaptop,
                title: "Google Workspace",
                sub: "Làm việc và cộng tác nhóm",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-5 bg-accent rounded-[20px] w-full"
              >
                <img
                  src={item.i1}
                  className="w-full sm:w-[226px] h-[150px] sm:h-full object-cover rounded-[20px]"
                  alt="Setup Item"
                />
                <div className="flex flex-col gap-3 items-start w-full">
                  <p className="text-[clamp(19px,1.82vw,30px)] font-extrabold text-primary">
                    {item.title}
                  </p>
                  <p className="text-[16px] md:text-[18px] font-normal text-primary/80">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[16/9] md:aspect-[910/591]"
          >
            <img
              src={images.setupMain}
              className="w-full h-full object-cover rounded-[20px] shadow-[inset_0_0_0_8px_#0D2B45] md:shadow-[inset_0_0_0_18px_#0D2B45]"
              alt="Không gian làm việc"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              images.setupLaptop,
              images.setupCreative,
              images.setupWorkspace,
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4 p-2.5 bg-accent rounded-[15px] w-full"
              >
                <img
                  src={src}
                  className="w-full aspect-[270/164] object-cover rounded-[20px] shadow-[inset_0_0_0_4px_#0D2B45]"
                  alt="Chi tiết thiết lập"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog / Nhật ký Section */}
      <section
        id="blog"
        className="mt-[clamp(38px,7.8vw,150px)] mx-4 md:mx-16 flex flex-col gap-[clamp(20px,5.2vw,80px)] z-10 relative"
      >
        <div className="flex justify-center items-center gap-[20px] md:gap-[clamp(16px,2.8vw,53px)]">
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
          <h2 className="text-[clamp(32px,5.0vw,96px)] font-extrabold leading-none tracking-[-0.01em] text-secondary uppercase">
            Nhật Ký Học Tập
          </h2>
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-[clamp(20px,5.2vw,100px)]">
          {/* Left sticky */}
          <div className="flex flex-col gap-6 xl:sticky top-32 h-fit">
            <p className="text-[clamp(32px,3.91vw,65px)] font-extrabold leading-[1.3] tracking-[-0.01em]">
              Hành trình <span className="text-secondary">học hỏi</span> từng
              ngày
            </p>
            <p className="text-[clamp(16px,1.5vw,24px)] font-light leading-[1.7] text-[#0D2B45]/70">
              Đây là nơi tôi ghi lại những suy nghĩ, khám phá và bài học từ mỗi
              tuần học. Nhật ký giúp tôi nhìn lại hành trình và tiếp tục tiến
              bộ.
            </p>
          </div>

          {/* Right blog posts */}
          <div className="flex flex-col gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4 pt-6 border-t-[2px] border-[#0D2B45]/20 group cursor-pointer"
              >
                <div className="flex flex-row flex-wrap gap-2">
                  {post.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="py-1 px-3 rounded-full shadow-[inset_0_0_0_1px_#1EC1FE] text-[12px] font-bold text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-[13px] text-[#0D2B45]/50 font-light self-center ml-2">
                    {post.date}
                  </span>
                </div>
                <p className="text-[clamp(18px,1.5vw,26px)] font-extrabold group-hover:text-secondary transition-colors">
                  {post.title}
                </p>
                <p className="text-[clamp(14px,1.2vw,20px)] font-light leading-[1.7] text-[#0D2B45]/70">
                  {post.excerpt}
                </p>
                <p className="text-secondary font-bold text-[14px] group-hover:underline">
                  Đọc thêm →
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection / Tổng kết Section */}
      <section
        id="reflection"
        className="mt-[clamp(38px,7.8vw,150px)] mx-4 md:mx-[clamp(16px,3.5vw,68px)] flex flex-col gap-[clamp(20px,5.2vw,80px)] z-10 relative"
      >
        <div className="flex justify-center items-center gap-[20px] md:gap-[clamp(16px,2.8vw,53px)]">
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
          <h2 className="text-[clamp(28px,4.5vw,86px)] font-extrabold leading-none tracking-[-0.01em] text-secondary uppercase">
            Tổng Kết
          </h2>
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Cảm nhận */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-3 bg-secondary rounded-[20px] p-8 md:p-12"
          >
            <p className="text-[clamp(24px,2.5vw,46px)] font-extrabold text-primary mb-6">
              💭 Trải nghiệm & cảm nhận
            </p>
            <p className="text-[clamp(16px,1.4vw,24px)] font-normal leading-[1.8] text-primary/90">
              Hành trình tự tay thiết lập và số hóa toàn bộ các bài tập thực
              hành vào Portfolio trực tuyến mang lại cho tôi niềm vui sáng tạo
              vô cùng lớn. Nó giúp tôi nhận ra việc ứng dụng CNTT không hề khô
              khan mà cực kỳ thú vị khi mình áp dụng đúng vào ngành học Ngôn ngữ
              Anh của mình.
            </p>
            <p className="text-[clamp(16px,1.4vw,24px)] font-normal leading-[1.8] text-primary/90">
              Tôi cảm thấy tự tin hơn rất nhiều khi giờ đây có thể tự hào gửi
              một đường link trang web chuyên nghiệp chứa tất cả các sản phẩm
              chất lượng nhất của bản thân tới thầy cô và các nhà tuyển dụng
              tiềm năng trong tương lai.
            </p>
          </motion.div>

          {/* Kiến thức & Kỹ năng */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-[20px] p-8 shadow-[inset_0_0_0_1px_#0D2B45] flex flex-col gap-4"
          >
            <p className="text-[clamp(20px,1.8vw,32px)] font-extrabold text-secondary">
              📚 Kiến thức & Kỹ năng cốt lõi gặt hái được
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Sự linh hoạt trong xử lý dữ liệu: Không còn sợ hãi trước những bảng số liệu thô hay thuật ngữ lộn xộn nhờ kỹ năng Excel và phân loại lưu trữ đám mây.",
                "Tư duy làm chủ công nghệ: Coi AI là một người trợ lý đắc lực hỗ trợ gợi ý ý tưởng dịch thuật chứ không lạm dụng để đánh mất tư duy ngôn ngữ cá nhân.",
                "Ý thức trách nhiệm học thuật: Hiểu rằng mỗi bài viết hay bản dịch trực tuyến đều cần tôn trọng chất xám của tác giả gốc bằng việc trích dẫn nguồn rõ ràng và văn minh.",
              ].map((item, i) => (
                <div key={i} className="flex flex-row items-start gap-3">
                  <span className="text-secondary font-bold shrink-0">✓</span>
                  <p className="text-[14px] md:text-[16px] font-light leading-[1.6]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Điểm tâm đắc */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-[20px] p-8 shadow-[inset_0_0_0_1px_#0D2B45] flex flex-col gap-4"
          >
            <p className="text-[clamp(20px,1.8vw,32px)] font-extrabold text-secondary">
              ⭐ Điểm tâm đắc nhất
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  emoji: "🤖",
                  text: "Bài học về AI mở ra cho tôi cái nhìn hoàn toàn mới về tương lai của công nghệ và cách học tập.",
                },
                {
                  emoji: "🛡️",
                  text: "Chủ đề về an toàn số và liêm chính học thuật rất thiết thực và cần thiết trong thời đại số.",
                },
                {
                  emoji: "🎨",
                  text: "Phần sáng tạo nội dung giúp tôi phát triển khả năng biểu đạt ý tưởng qua các phương tiện kỹ thuật số.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-row items-start gap-3 p-4 bg-[#0D2B45]/10 rounded-[12px]"
                >
                  <span className="text-2xl shrink-0">{item.emoji}</span>
                  <p className="text-[14px] md:text-[16px] font-light leading-[1.6]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Thách thức */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-[20px] p-8 shadow-[inset_0_0_0_1px_#0D2B45] flex flex-col gap-4"
          >
            <p className="text-[clamp(20px,1.8vw,32px)] font-extrabold text-secondary">
              💪 Thách thức lớn nhất & Cách vượt qua
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  emoji: "⏰",
                  text: (
                    <>
                      <strong>Thách thức: </strong>Cân bằng thời gian nghiên cứu
                      giữa các bài tập có tính chuyên môn sâu về lý thuyết (như
                      Trí tuệ nhân tạo và Liêm chính học thuật) với việc học kỹ
                      thuật thiết kế, căn chỉnh bố cục trang web sao cho đẹp mắt
                      trên cả thiết bị di động.
                    </>
                  ),
                },
                {
                  emoji: "🌐",
                  text: (
                    <>
                      <strong>Cách vượt qua:</strong>Áp dụng triệt để sơ đồ tư
                      duy phân chia công việc theo từng tuần, tích cực tham khảo
                      các mẫu thiết kế hiện đại trên mạng và không ngần ngại hỏi
                      ý kiến phản hồi từ bạn bè cùng giảng viên để chỉnh sửa
                      hoàn thiện sản phẩm từng ngày.
                    </>
                  ),
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-row items-start gap-3 p-4 bg-[#0D2B45]/10 rounded-[12px]"
                >
                  <span className="text-2xl shrink-0">{item.emoji}</span>
                  <p className="text-[14px] md:text-[16px] font-light leading-[1.6]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="mt-[clamp(38px,7.8vw,150px)] mx-4 md:mx-10 flex flex-col gap-[clamp(20px,5.2vw,100px)] z-10 relative"
      >
        <div className="flex justify-center items-center gap-[20px] md:gap-[clamp(16px,2.8vw,53px)]">
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
          <h2 className="text-[clamp(32px,5.0vw,96px)] font-extrabold leading-none tracking-[-0.01em] text-secondary uppercase">
            Liên Hệ
          </h2>
          <div className="bg-secondary w-[20px] md:w-[33px] min-h-[20px] md:h-[33px] rounded-full" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1220fr_582fr] gap-[clamp(16px,2.6vw,50px)] xl:gap-[clamp(20px,5.2vw,100px)]">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-[clamp(16px,2.1vw,40px)] md:gap-[clamp(16px,3.1vw,60px)]"
          >
            <p className="text-[clamp(32px,3.54vw,68px)] font-extrabold leading-[1.1]">
              Có câu hỏi hoặc muốn kết nối? Hãy liên hệ với tôi!
            </p>
            <p className="text-[clamp(18px,1.93vw,37px)] font-light leading-[1.4]">
              Tôi luôn sẵn sàng lắng nghe và trao đổi. Đừng ngần ngại gửi tin
              nhắn cho tôi nhé.
            </p>

            <form
              className="flex flex-col gap-[23px] w-full"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col md:flex-row gap-[23px] w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 p-2.5 border-b-[2px] border-secondary bg-transparent text-[#0D2B45] text-[clamp(16px,1.56vw,30px)] font-light outline-none placeholder:text-[#0D2B45]/50 focus:border-[#0D2B45] transition-colors"
                />

                <input
                  type="text"
                  placeholder="Tên của bạn"
                  className="flex-1 p-2.5 border-b-[2px] border-secondary bg-transparent text-[#0D2B45] text-[clamp(16px,1.56vw,30px)] font-light outline-none placeholder:text-[#0D2B45]/50 focus:border-[#0D2B45] transition-colors"
                />
              </div>
              <textarea
                placeholder="Lời nhắn"
                className="w-full h-[150px] md:h-[263px] p-2.5 border-b-[2px] border-secondary bg-transparent text-[#0D2B45] text-[clamp(16px,1.56vw,30px)] font-light outline-none resize-none placeholder:text-[#0D2B45]/50 focus:border-[#0D2B45] transition-colors"
              />

              <button
                type="submit"
                className="flex flex-row items-center gap-[11px] p-4 md:p-5 bg-secondary rounded-[58px] w-fit hover:scale-105 transition-transform mt-4"
              >
                <img
                  src={assetPath("./formkit-submit@2x.png")}
                  className="w-5 h-4"
                  alt="Gửi"
                />
                <span className="text-[16px] md:text-[20px] font-semibold text-accent">
                  Gửi tin nhắn
                </span>
              </button>
            </form>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-[clamp(16px,3.1vw,60px)] md:gap-[clamp(20px,5.2vw,100px)]"
          >
            <div className="flex flex-col gap-[21px]">
              <p className="text-[clamp(22px,2.08vw,40px)] font-extrabold">
                Thông tin liên hệ
              </p>
              <a
                href="mailto:linhhuyenvu3082007@gmail.com"
                className="text-[clamp(14px,1.5vw,24px)] font-normal hover:text-secondary transition-colors break-all"
              >
                hoangmaita345@gmail.com
              </a>
              <p className="text-[clamp(14px,1.5vw,24px)] font-normal text-[#0D2B45]/80">
                0911651333
              </p>
            </div>

            <div className="flex flex-col gap-[21px]">
              <p className="text-[clamp(22px,2.08vw,40px)] font-extrabold">
                Mạng xã hội
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    name: "Facebook",
                    icon: assetPath("./ant-design-facebook-filled.svg"),
                  },
                  {
                    name: "Instagram",
                    icon: assetPath("./ri-instagram-fill.svg"),
                  },
                  {
                    name: "Tiktok",
                    icon: assetPath("./ic-baseline-tiktok.svg"),
                  },
                  { name: "Youtube", icon: assetPath("./mdi-youtube.svg") },
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex flex-row items-center gap-[15px] group w-fit"
                  >
                    <div className="w-[42px] min-h-[42px] relative flex items-center justify-center">
                      <img
                        src={social.icon}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform"
                        alt={social.name}
                      />
                    </div>
                    <p className="text-[clamp(19px,1.82vw,35px)] font-normal group-hover:text-secondary transition-colors">
                      {social.name}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[21px]">
              <p className="text-[clamp(22px,2.08vw,40px)] font-extrabold">
                Địa điểm
              </p>
              <p className="text-[clamp(18px,1.8vw,32px)] font-normal leading-[1.4]">
                Hà Nội, Việt Nam
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-[clamp(38px,7.8vw,150px)] mx-4 md:mx-12 mb-12 flex flex-col lg:flex-row justify-between items-center gap-10 z-10 relative border-t border-[#0D2B45]/20 pt-10">
        <div className="flex flex-row items-center gap-[clamp(16px,2.1vw,40px)] md:gap-[clamp(19px,4.9vw,95px)]">
          <p className="text-[clamp(20px,2.34vw,45px)] font-extralight">©</p>
          <p className="text-[clamp(20px,2.34vw,45px)] font-light">2026</p>
          <p className="text-[clamp(20px,2.34vw,45px)] font-extrabold">
            Hoàng Mai
          </p>
        </div>
        <p className="text-[clamp(16px,2.34vw,45px)] font-normal text-center">
          Nhập môn Công nghệ số & TTNT{" "}
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-row items-center gap-2.5 hover:text-secondary transition-colors group"
        >
          <p className="text-[clamp(18px,2.34vw,45px)] font-extrabold">
            LÊN ĐẦU TRANG
          </p>
        </button>
      </footer>
    </main>
  );
}
