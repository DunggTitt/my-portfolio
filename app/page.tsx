"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ProjectData {
  id: number;
  subTitle: string;
  title: string;
  shortDesc: string;
  codeSnippet: string;
  processTitle: string;
  steps: string[];
  toolsTitle: string;
  tools: string[];
  themeColor: 'blue' | 'purple' | 'yellow';
}

function GlitchTitle({ text }: { text: string }) {
  return (
    <div className="glitch-container select-none mb-4 mt-6 md:mt-8">
      <h1 className="glitch-text text-4xl md:text-6xl font-black tracking-wider text-white uppercase font-sans relative inline-block" data-text={text}>
        {text}
      </h1>
    </div>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectData | null>(null);

  const projectsList: ProjectData[] = [
    {
      id: 1,
      subTitle: "Dự án 01",
      title: "Hệ thống Đặt vé xe",
      shortDesc: "Hệ thống hỗ trợ quản lý quy trình phân phối vé xe khách, đặt chỗ trước và giám sát doanh thu tổng cục thời gian thực.",
      codeSnippet: `// Database Connection & Ticket Mapping
import java.sql.Connection;
public class TicketSystem {
    private final String query = "SELECT * FROM seats WHERE status = 'EMPTY'";
    public void reserveSeat(int seatId, int userId) {
        System.out.println("Seat " + seatId + " reserved by User " + userId);
    }
}`,
      processTitle: "Quy trình triển khai chi tiết:",
      steps: [
        "Khảo sát nghiệp vụ, phân tích luồng vận hành chuyến đi, thiết lập bản sơ đồ phân phối ghế ngồi trực quan.",
        "Thiết kế cấu trúc cơ sở dữ liệu MySQL lưu trữ thông tin chuyến xe, thông tin hành khách và quản lý doanh thu bán vé.",
        "Lập trình phát triển giao diện đồ họa (GUI) cho ứng dụng quản lý máy tính cục bộ dựa trên ngôn ngữ Java Swing.",
        "Tiến hành ráp nối dữ liệu, viết kịch bản kiểm thử (Testing) hệ thống và sửa đổi toàn bộ lỗi logic."
      ],
      toolsTitle: "Công cụ thực hiện:",
      tools: ["Java Swing", "NetBeans", "MySQL"],
      themeColor: "blue"
    },
    {
      id: 2,
      subTitle: "Dự án 02",
      title: "Web Quản lý kho hàng",
      shortDesc: "Ứng dụng nền tảng Web cho phép cập nhật, theo dõi lượng vật tư xuất nhập kho và lập báo cáo tự động cho thủ kho.",
      codeSnippet: `// Inventory Analytics Hooks
import React, { useState, useEffect } from 'react';
export const InventoryDashboard = () => {
    const [stock, setStock] = useState([]);
    const checkStockLevel = (items) => {
        return items.filter(item => item.quantity <= 5);
    };
    return <div>Render Material Metrics</div>;
};`,
      processTitle: "Quy trình triển khai chi tiết:",
      steps: [
        "Mô hình hóa quy trình nhập xuất tồn vật tư, quản lý danh sách nhà cung cấp và phân chia đặc quyền thủ kho.",
        "Triển khai viết mã nguồn Frontend xây dựng các trang Dashboard thống kê, biểu đồ dữ liệu bằng VS Code.",
        "Kết nối cấu trúc dữ liệu theo dõi số lượng tồn kho thực tế, hỗ trợ in ấn và xuất báo cáo tự động.",
        "Thực hiện tối ưu hóa tốc độ tải trang, thu gọn mã nguồn CSS giúp trang Web phản hồi mượt mà nhất."
      ],
      toolsTitle: "Công cụ thực hiện:",
      tools: ["React", "HTML/CSS/JS", "SQL Server"],
      themeColor: "purple"
    },
    {
      id: 3,
      subTitle: "Dự án 03",
      title: "Hệ Thống Chatbot AI",
      shortDesc: "Tự động hóa kênh tương tác khách hàng thông qua sơ đồ luồng dữ liệu tự động tích hợp trí tuệ nhân tạo linh hoạt.",
      codeSnippet: `// n8n Webhook Endpoint Integration
{
  "meta": { "instanceId": "ai_chatbot_node" },
  "nodes": [
    { "type": "n8n-nodes-base.webhook", "name": "FB_Receiver" },
    { "type": "n8n-nodes-base.openAi", "name": "Context_Analysis" }
  ],
  "connections": { "FB_Receiver": { "main": [ [ { "node": "Context_Analysis" } ] ] } }
}`,
      processTitle: "Quy trình triển khai chi tiết:",
      steps: [
        "Xây dựng bộ kịch bản tự động hóa chăm sóc khách hàng, tiếp nhận thông tin và phân loại nhu cầu tư vấn.",
        "Sử dụng nền tảng n8n Workflow cấu hình cổng Webhook nhằm xử lý và truyền tải tin nhắn thời gian thực.",
        "Tích hợp API trí tuệ nhân tạo thông minh giúp phân tích ngữ cảnh câu hỏi và tự động xuất câu trả lời chuẩn xác.",
        "Đấu nối trực tiếp vào trang Fanpage Facebook Messenger, tối ưu hóa công tác vận hành CSKH 24/7."
      ],
      toolsTitle: "Công cụ thực hiện:",
      tools: ["n8n.io", "AI API", "Webhook"],
      themeColor: "yellow"
    }
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        const increment = Math.floor(Math.random() * 3) + 1;
        return Math.min(prevProgress + increment, 100);
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.pageYOffset / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (activeProjectModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeProjectModal]);

  const skills = [
    { name: 'HTML/CSS/JS', imgSrc: '/logos/HTML-CSS-JS.png' },
    { name: 'React', imgSrc: '/logos/React.png' },
    { name: 'Java Swing', imgSrc: '/logos/Java.png' },
    { name: 'C/C++', imgSrc: '/logos/Cpp.png' },
    { name: 'MySQL', imgSrc: '/logos/MySQL.png' },
    { name: 'SQL Server Management Studio 20', imgSrc: '/logos/SQL_Server_Management_Studio.png' },
    { name: 'Apache NetBeans', imgSrc: '/logos/Apache_NetBeans.png' },
    { name: 'Eclipse', imgSrc: '/logos/Eclipse.png' },
    { name: 'Visual Studio Code', imgSrc: '/logos/VS Code.png' },
    { name: 'Visual Studio', imgSrc: '/logos/Visual_Studio.png' },
    { name: 'Odoo ERP', imgSrc: '/logos/Odoo.png' },
    { name: 'n8n.io - Workflow Automation', imgSrc: '/logos/n8n.png' },
    { name: 'Vercel', imgSrc: '/logos/Vercel-Logo.png' },
    { name: 'VMware Workstation Pro', imgSrc: '/logos/Vmware.png' },
    { name: 'Figma', imgSrc: '/logos/Figma.png' },
    { name: 'Canva Design', imgSrc: '/logos/Canva.png' }
  ];

  const showcaseTop = [
    '/logos/HTML-CSS-JS.png', '/logos/React.png', '/logos/Java.png', '/logos/Cpp.png', '/logos/MySQL.png', '/logos/sql_server_management_studio.png', '/logos/VS Code.png', '/logos/Odoo.png'
  ];
  const showcaseBottom = [
    '/logos/Apache_NetBeans.png', '/logos/Eclipse.png', '/logos/Visual_Studio.png', '/logos/n8n.png', '/logos/Vercel-Logo.png', '/logos/Vmware.png', '/logos/figma.png', '/logos/Canva.png'
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    /* THIẾT LẬP FONT-SANS ĐỒNG NHẤT TOÀN DIỆN CHO WEB */
    <div className="min-h-screen bg-[#02050f] text-slate-100 pb-12 relative overflow-hidden scroll-smooth text-[14px] font-sans antialiased">
      
      {/* KHỐI STYLE LIÊN KẾT GOOGLE FONT INTER HIỂN THỊ TIẾNG VIỆT SIÊU NÉT */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');
        body, html, button, span, p, h1, h2, h3, h4, a, div {
          font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
        }
        .glitch-text {
          position: relative;
          color: white;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          pointer-events: none;
        }
        .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 #ff003c;
          animation: glitch-scan-left-right 4s infinite ease-in-out;
        }
        .glitch-text::after {
          left: -2px;
          text-shadow: 2px 0 #00ffff;
          animation: glitch-scan-right-left 4s infinite ease-in-out;
        }
        @keyframes glitch-scan-left-right {
          0% { clip-path: inset(0 100% 0 0); transform: translateX(-1px); }
          45% { clip-path: inset(0 0 0 0); transform: translateX(2px); }
          50% { clip-path: inset(0 0 0 100%); transform: translateX(0px); }
          95% { clip-path: inset(0 0 0 0); transform: translateX(-2px); }
          100% { clip-path: inset(0 100% 0 0); transform: translateX(-1px); }
        }
        @keyframes glitch-scan-right-left {
          0% { clip-path: inset(0 0 0 100%); transform: translateX(1px); }
          45% { clip-path: inset(0 0 0 0); transform: translateX(-2px); }
          50% { clip-path: inset(0 100% 0 0); transform: translateX(0px); }
          95% { clip-path: inset(0 0 0 0); transform: translateX(2px); }
          100% { clip-path: inset(0 0 0 100%); transform: translateX(1px); }
        }

        .marquee-track-left {
          display: flex;
          width: max-content;
          animation: marquee-scroll-left 25s linear infinite;
        }
        .marquee-track-right {
          display: flex;
          width: max-content;
          animation: marquee-scroll-right 25s linear infinite;
        }
        @keyframes marquee-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        @keyframes subtle-pulse {
          0%, 100% { opacity: 0.2; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.15); }
        }
        .animate-fast-pulse {
          animation: subtle-pulse 1.2s infinite ease-in-out;
        }
      `}} />

      {!isLoading && (
        <div 
          className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-blue-500 via-yellow-400 to-green-500 z-50 transition-all duration-75 ease-out shadow-[0_1px_10px_rgba(250,204,21,0.4)]"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      )}

      {!isLoading && (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-[#02050f]/80 backdrop-blur-md border-b border-cyan-500/10 px-4 md:px-6 py-4 shadow-lg flex justify-between items-center">
          <div className="text-2xl md:text-3xl font-black tracking-widest text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] select-none">
            DUXT.
          </div>
          <div className="flex gap-4 sm:gap-7 text-sm md:text-[16px] font-black tracking-[0.12em] uppercase">
            <button onClick={() => scrollToSection('gioi-thieu')} className="text-slate-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all duration-200">Giới thiệu</button>
            <button onClick={() => scrollToSection('hoc-van')} className="text-slate-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all duration-200">Học Vấn</button>
            <button onClick={() => scrollToSection('du-an')} className="text-slate-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all duration-200">Dự Án</button>
            <button onClick={() => scrollToSection('kinh-nghiem')} className="text-slate-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.4)] transition-all duration-200">Kinh Nghiệm</button>
            <button onClick={() => scrollToSection('lien-he')} className="text-slate-300 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all duration-200">Liên Hệ</button>
          </div>
        </nav>
      )}

      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#01040a] px-4 select-none font-mono text-blue-400">
          <div className="transition-all transform scale-[1.05] flex flex-col items-center justify-center text-center w-full max-w-md">
            
            <div className="relative w-32 h-32 md:w-36 md:h-36 mb-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[8px] border-t-blue-500 border-r-cyan-400 border-b-blue-600 border-l-cyan-500 animate-spin shadow-[0_0_40px_rgba(34,211,238,0.9)]"></div>
            </div>

            <div className="text-3xl md:text-4xl font-extrabold tracking-[0.1em] mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.9)] uppercase">
              TIEN DUNG
            </div>

            <div className="text-xs md:text-sm font-bold tracking-[0.18em] mb-5 text-blue-400/90 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] uppercase">
              INITIALIZING SYSTEM O_O
            </div>

            <div className="text-5xl md:text-6xl font-black tracking-widest text-white mb-6 drop-shadow-[0_0_25px_rgba(59,130,246,0.8)]">
              {progress}<span className="text-blue-400 text-3xl ml-0.5">%</span>
            </div>

            <div className="w-68 md:w-76 h-3 bg-slate-950 border border-blue-500/40 rounded-full overflow-hidden p-[1px] shadow-[0_0_20px_rgba(34,211,238,0.4)]">
              <div className="h-full bg-gradient-to-r from-blue-600 via-blue-400 via-cyan-400 to-yellow-400/80 rounded-full transition-all duration-300 ease-out" style={{ width: `${progress}%` }}></div>
            </div>

          </div>
        </div>
      )}

      <div className="absolute inset-0 z-0 opacity-25 bg-[radial-gradient(#06b6d4_1.2px,transparent_1.2px)] [background-size:28px_28px] pointer-events-none"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-600 rounded-full mix-blend-screen filter blur-[120px] opacity-30 z-0 pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 z-0 pointer-events-none"></div>

      <div className="relative z-10 pt-24 md:pt-28">
        
        <header className="relative pb-8 md:pb-14 px-4 max-w-6xl mx-auto">
          
          <div className="flex justify-center mt-2 mb-24 text-center">
            <div className="flex items-center gap-2 bg-[#0b132b]/90 border border-emerald-500/30 px-5 py-2 rounded-full shadow-xl select-none">
              <span className="relative flex h-3 w-3">
                <span className="animate-fast-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-90 shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)]"></span>
              </span>
              <p className="text-xs md:text-sm font-black text-white tracking-wider uppercase">
                Sẵn sàng hợp tác / Available for Work
              </p>
            </div>
          </div>

          <div className="text-center mb-24">
            {!isLoading && <GlitchTitle text="Nguyễn Trần Tiến Dũng" />}
            <h2 className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
              <span className="text-cyan-400 font-mono">&gt;</span> Full Stack Developer <span className="animate-pulse">_</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mt-4">
            
            <div className="lg:col-span-2 flex justify-center order-2 lg:order-1">
              <div className="w-24 h-18 sm:w-32 sm:h-24 md:w-40 md:h-28 lg:w-48 lg:h-36 object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <img src="/images/Icon-fourze.png" alt="Fourze Left Element" className="w-full h-full object-contain" />
              </div>
            </div>

            <div id="gioi-thieu" className="lg:col-span-8 order-1 lg:order-2 py-36 px-2 sm:px-4 scroll-mt-12">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-[0.2em] text-white text-center mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                Về bản thân tôi
              </h3>
              
              <div className="text-slate-300 text-[15px] md:text-[15.5px] leading-relaxed font-semibold space-y-4 text-justify">
                <p>
                  Sinh viên chuyên ngành Công nghệ Thông tin tại Trường Cao Đẳng Văn Lang Sài Gòn với niềm đam mê phát triển phần mềm và xây dựng các giải pháp công nghệ hiện đại. Tôi sở hữu tư duy logic, khả năng phân tích hệ thống cùng nền tảng kiến thức vững chắc về cơ sở dữ liệu, phát triển Web và lập trình.
                </p>
                <p>
                  Luôn đặt hiệu quả và trải nghiệm người dùng làm trọng tâm, tôi hướng đến việc tối ưu hóa kiến trúc hệ thống, nâng cao hiệu năng ứng dụng và xây dựng các sản phẩm Web ổn định, bảo mật, dễ mở rộng.
                </p>
                <p>
                  Với tinh thần cầu tiến, trách nhiệm và ham học hỏi, tôi luôn sẵn sàng tiếp thu những công nghệ mới, tích lũy kinh nghiệm thực tế và không ngừng hoàn thiện bản thân để trở thành một kỹ sư phần mềm có năng lực và tạo ra giá trị bền vững cho doanh nghiệp.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 flex justify-center order-3 lg:order-3">
              <div className="w-24 h-18 sm:w-32 sm:h-24 md:w-40 md:h-28 lg:w-48 lg:h-36 object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <img src="/images/Fourze_Logo.png" alt="Fourze Right Element" className="w-full h-full object-contain" />
              </div>
            </div>

          </div>
        </header>

        <section className="max-w-4xl mx-auto py-6 px-4 grid md:grid-cols-2 gap-6 scroll-mt-24">
          <div className="bg-slate-900/80 backdrop-blur-md border border-purple-500/30 p-5 md:p-6 rounded-xl shadow-md hover:border-purple-300 transition-all duration-300">
            <h3 className="text-sm md:text-base font-bold text-white mb-2 tracking-wide text-purple-300 uppercase">&gt; Tổng quan</h3>
            <p className="text-slate-300 leading-relaxed text-justify font-medium text-xs md:text-sm">
              Tốt nghiệp ngành Công Nghệ Thông Tin tại Trường Cao Đẳng Văn Lang Sài Gòn với nền tảng vững chắc về phát triển web (HTML, CSS, JavaScript, React/Vue) và quản trị cơ sở dữ liệu (MySQL). Mong muốn tìm kiếm vị trí thực tập/Lập trình viên Full Stack Junior để áp dụng kiến thức và phát triển kỹ năng trong môi trường chuyên nghiệp.
            </p>
          </div>
          <div className="bg-slate-900/80 backdrop-blur-md border border-yellow-500/30 p-5 md:p-6 rounded-xl shadow-md hover:border-yellow-400 transition-all duration-300">
            <h3 className="text-sm md:text-base font-bold text-white mb-2 tracking-wide text-yellow-300 uppercase">&gt; Mục tiêu</h3>
            <p className="text-slate-300 leading-relaxed text-justify font-medium text-xs md:text-sm">
              Mục tiêu dài hạn (3-5 năm): Phát triển sự nghiệp bền vững với tư cách là Lập trình viên Full Stack có chuyên môn sâu rộng, tự tự đảm nhận các dự án phức tạp và cống hiến khả năng xây dựng các giải pháp phần mềm sáng tạo. Cam kết không ngừng học hỏi, làm chủ các công nghệ mới và phấn đấu đóng góp to lớn vào sự phát triển của doanh nghiệp.
            </p>
          </div>
        </section>

        {/* TRÌNH ĐỘ HỌC VẤN: 2 KHUNG ĐÃ ĐƯỢC TĂNG 5% KÍCH THƯỚC VÀ CHỮ TRONG ĐỒNG ĐỀU SIÊU ĐẸP MẮT */}
        <section id="hoc-van" className="max-w-4xl mx-auto py-30 px-4 scroll-mt-12">
          <h3 className="text-2xl md:text-3xl font-black text-center uppercase tracking-[0.2em] text-[#d97706] mb-8 drop-shadow-[0_0_12px_rgba(217,119,6,0.6)]">
            Trình Độ Học Vấn
          </h3>
          <div className="flex flex-col gap-5"> {/* Tăng khoảng cách giữa 2 khung */}
            
            {/* Khung 1: Tăng kích thước 5% bằng padding (p-5 md:p-6.5) và tăng size chữ bên trong 5% */}
            <div className="bg-slate-900/80 backdrop-blur-md border border-cyan-500/20 p-5 md:p-[26px] rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all duration-300 flex flex-col sm:flex-row sm:justify-between sm:items-center group">
              <div>
                <h4 className="text-[14.5px] md:text-[17px] font-black text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                  Trường Trung cấp Nghề Bình Thạnh
                </h4>
                <p className="text-cyan-400 font-bold text-[12.5px] md:text-[14.5px] mt-1">
                  Chuyên ngành: Quản Trị Mạng
                </p>
                <p className="text-slate-400 text-[11.5px] md:text-[12.5px] mt-1 font-semibold">
                  Trạng thái: Tốt nghiệp ngày 25/04/2024 — Chứng chỉ tiếng Anh: A2
                </p>
              </div>
              <span className="text-[11.5px] md:text-[12.5px] font-black text-cyan-300 bg-cyan-950/60 border border-cyan-400/40 px-3.5 md:px-4.5 py-2 rounded-full mt-2 sm:mt-0 w-max shadow-sm tracking-wide">
                Niên khóa: 2021 - 2024
              </span>
            </div>

            {/* Khung 2: Tăng kích thước 5% bằng padding (p-5 md:p-6.5) và tăng size chữ bên trong 5% */}
            <div className="bg-slate-900/80 backdrop-blur-md border border-cyan-500/20 p-5 md:p-[26px] rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300 flex flex-col sm:flex-row sm:justify-between sm:items-center group">
              <div>
                <h4 className="text-[14.5px] md:text-[17px] font-black text-white tracking-wide group-hover:text-emerald-300 transition-colors">
                  Trường Cao Đẳng Văn Lang Sài Gòn
                </h4>
                <p className="text-emerald-400 font-bold text-[12.5px] md:text-[14.5px] mt-1">
                  Khoa: Công Nghệ Thiết Kế — Chuyên ngành: Công Nghệ Thông Tin
                </p>
                <p className="text-slate-400 text-[11.5px] md:text-[12.5px] mt-1 font-semibold">
                  Trạng thái: Tốt nghiệp năm 2026
                </p>
              </div>
              <span className="text-[11.5px] md:text-[12.5px] font-black text-emerald-400 bg-emerald-950/60 border border-emerald-400/40 px-3.5 md:px-4.5 py-2 rounded-full mt-2 sm:mt-0 w-max shadow-sm tracking-wide">
                Niên khóa: 2024 - 2026
              </span>
            </div>

          </div>
        </section>

        <section className="py-30 px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-black text-center uppercase tracking-[0.2em] text-cyan-400 mb-8 drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]">
              Thành Thạo Các Công Nghệ
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => {
                const isTargetLogo = skill.name.includes("Odoo") || skill.name.includes("Vercel");
                return (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/90 border border-cyan-500/10 hover:border-cyan-400 hover:bg-slate-800/40 transition-all duration-300 shadow-md group w-full overflow-hidden">
                    <div className={`flex-shrink-0 flex items-center justify-center transition-transform ${isTargetLogo ? 'w-[38px] h-[38px]' : 'w-[34px] h-[34px]'}`}>
                      <img src={skill.imgSrc} alt={skill.name} className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(6,182,212,0.45)] brightness-105 contrast-105"/>
                    </div>
                    <span className="text-white font-bold text-xs tracking-wide group-hover:text-cyan-300 transition-colors line-clamp-2 break-words">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-30 bg-slate-950/40 border-y border-cyan-500/10 my-4 overflow-hidden select-none">
          <div className="max-w-4xl mx-auto px-4 mb-6 flex justify-center items-center">
            <h3 className="text-3xl md:text-5xl font-black tracking-[0.3em] uppercase text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">
              ShowCase
            </h3>
          </div>
          
          <div className="w-full overflow-hidden flex mb-4">
            <div className="marquee-track-right flex gap-4 md:gap-6 items-center">
              {[...showcaseTop, ...showcaseTop].map((src, i) => (
                <div key={i} className="w-[118px] h-[76px] md:w-[168px] md:h-[101px] bg-slate-900/95 border border-slate-800 rounded-xl flex items-center justify-center p-3 md:p-4 hover:border-cyan-500/50 transition-colors shadow-lg shadow-cyan-500/5">
                  <img src={src} alt="showcase-top" className="max-w-full max-h-full object-contain filter opacity-90 hover:opacity-100 transition-opacity drop-shadow-[0_0_7px_rgba(255,255,255,0.15)]" />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full overflow-hidden flex">
            <div className="marquee-track-left flex gap-4 md:gap-6 items-center">
              {[...showcaseBottom, ...showcaseBottom].map((src, i) => (
                <div key={i} className="w-[118px] h-[76px] md:w-[168px] md:h-[101px] bg-slate-900/95 border border-slate-800 rounded-xl flex items-center justify-center p-3 md:p-4 hover:border-purple-500/50 transition-colors shadow-lg shadow-purple-500/5">
                  <img src={src} alt="showcase-bottom" className="max-w-full max-h-full object-contain filter opacity-90 hover:opacity-100 transition-opacity drop-shadow-[0_0_7px_rgba(255,255,255,0.15)]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="du-an" className="max-w-6xl mx-auto py-30 px-4 scroll-mt-2">
          <h3 className="text-2xl md:text-4xl font-black text-white mb-6 text-center uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
            Dự Án Đã Thực Hiện
          </h3>
          
          <p className="text-cyan-50 font-extrabold mb-8 pl-4 md:pl-6 border-l-2 border-cyan-400 text-[13px] md:text-[17px] italic max-w-4xl mx-auto drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]">
            Trong quá trình học tập tại Trường Cao Đẳng Văn Lang Sài Gòn, tôi đã tham gia và thực hành các dự án như sau:
          </p>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
            {projectsList.map((project) => {
              const themeStyles = {
                blue: 'hover:border-cyan-400 border-blue-500/40 shadow-cyan-500/10 bg-[#0e1326] text-cyan-400',
                purple: 'hover:border-purple-300 border-purple-500/40 shadow-purple-500/10 bg-[#0e1326] text-purple-400',
                yellow: 'hover:border-yellow-400 border-yellow-600/40 shadow-yellow-500/10 bg-[#0e1326] text-yellow-400'
              };

              return (
                <div 
                  key={project.id} 
                  className={`group rounded-2xl overflow-hidden border shadow-xl transition-all duration-300 flex flex-col justify-between p-1 min-h-[460px] ${project.themeColor === 'blue' ? 'hover:border-cyan-400 border-blue-500/40 bg-[#0e1326] text-cyan-400' : project.themeColor === 'purple' ? 'hover:border-purple-300 border-purple-500/40 bg-[#0e1326] text-purple-400' : 'hover:border-yellow-400 border-yellow-600/40 bg-[#0e1326] text-yellow-400'}`}
                >
                  <div>
                    <div className="p-5 border-b border-slate-800/80 bg-[#070a14]">
                      <span className={`font-bold text-xs uppercase block mb-1 ${project.themeColor === 'blue' ? 'text-cyan-400' : project.themeColor === 'purple' ? 'text-purple-400' : 'text-yellow-400'}`}>{project.subTitle}</span>
                      <h4 className="text-base md:text-lg font-bold text-white tracking-wide">{project.title}</h4>
                    </div>
                    
                    <div className="p-5 space-y-4">
                      <p className="text-xs md:text-[13px] text-slate-200 leading-relaxed font-semibold min-h-[60px]">
                        {project.shortDesc}
                      </p>

                      <div className="rounded-xl bg-[#030611] p-4 border border-slate-800/80 font-mono text-[11px] text-slate-300 leading-relaxed overflow-x-auto whitespace-pre select-all max-h-[160px] custom-scrollbar">
                        {project.codeSnippet}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <button 
                      onClick={() => setActiveProjectModal(project)} 
                      className="w-full text-center text-xs font-bold py-2.5 rounded-xl border border-slate-700 bg-[#050814] text-slate-200 hover:bg-slate-800 hover:border-cyan-400 transition-all duration-200 shadow-md"
                    >
                      Xem chi tiết cấu trúc
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="kinh-nghiem" className="max-w-4xl mx-auto py-10 px-4 scroll-mt-24">
          <h3 className="text-2xl md:text-3xl font-black text-center uppercase tracking-[0.2em] text-cyan-400 mb-8 drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]">
            Kinh Nghiệm
          </h3>
          <div className="bg-slate-900/95 backdrop-blur-md border border-cyan-400/30 p-6 md:p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center text-center mb-5 border-b border-cyan-500/15 pb-4">
              <h4 className="text-[14.5px] md:text-[17px] font-bold text-slate-300 uppercase tracking-wide">
                Thực tập sinh kỹ thuật mạng & hệ thống:
              </h4>
              <p className="text-[#f59e0b] font-black text-lg md:text-2xl tracking-widest mt-2 uppercase drop-shadow-[0_0_15px_rgba(245,158,11,0.5)] animate-pulse">
                Công ty DV&GP Nguyên Khanh
              </p>
            </div>
            
            <p className="text-slate-300 font-semibold mb-3 text-[13.5px] md:text-[14.5px] pl-2 leading-relaxed">
              Trực tiếp tham gia khảo sát, triển khai và bàn giao hạ tầng kỹ thuật công nghệ cho các cơ sở giáo dục.
            </p>
            <p className="text-slate-300 font-semibold mb-3 text-[13.5px] md:text-[14.5px] pl-2 leading-relaxed">
              Trong quá trình Thực tập tôi đã được các anh chị bên Công ty chỉ dạy tận tình và học hỏi được rất nhiều thứ, sau đó tôi được thực hành công việc như:
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 ml-2 text-[13.5px] md:text-[14.5px] font-semibold leading-relaxed">
              <li>Lắp đặt hệ thống đường dây mạng truyền tải dữ liệu và Camera tại Trường THCS Bình Lợi Trung.</li>
              <li>Lắp đặt cấu trúc thiết bị phần cứng and thiết lập hệ thống loa phát thanh tại Trường Mầm Non 29.</li>
            </ul>
          </div>
        </section>

        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div 
              className={`relative w-full max-w-lg rounded-2xl bg-[#090d1a] border p-6 md:p-7 shadow-2xl transition-all duration-300 max-h-[90vh] overflow-y-auto ${
                activeProjectModal.themeColor === 'blue' ? 'border-cyan-500/40 shadow-cyan-500/10' : 
                activeProjectModal.themeColor === 'purple' ? 'border-purple-500/40 shadow-purple-500/10' : 
                'border-yellow-500/40 shadow-yellow-500/10'
              }`}
            >
              <button 
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white select-none"
              >
                <span className="text-lg font-bold">✕</span>
              </button>

              <div className="mb-4">
                <span className={`text-xs font-bold uppercase block mb-1 ${activeProjectModal.themeColor === 'blue' ? 'text-cyan-400' : activeProjectModal.themeColor === 'purple' ? 'text-purple-400' : 'text-yellow-400'}`}>{activeProjectModal.subTitle}</span>
                <h3 className="text-base md:text-lg font-black text-white uppercase pr-8">
                  {activeProjectModal.title}
                </h3>
              </div>

              <div className="text-[13px] text-slate-300 space-y-3 leading-relaxed font-semibold">
                <div className="bg-slate-950/50 p-3 rounded-lg text-slate-400 text-xs italic">
                  {activeProjectModal.shortDesc}
                </div>

                <div>
                  <p className={`font-bold text-xs mb-2 ${activeProjectModal.themeColor === 'blue' ? 'text-cyan-400' : activeProjectModal.themeColor === 'purple' ? 'text-purple-400' : 'text-yellow-400'}`}>{activeProjectModal.processTitle}</p>
                  <ul className="space-y-2">
                    {activeProjectModal.steps.map((step, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-xs text-slate-300">
                        <span>•</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-slate-900">
                  <p className={`font-bold text-xs mb-2 ${activeProjectModal.themeColor === 'blue' ? 'text-cyan-400' : activeProjectModal.themeColor === 'purple' ? 'text-purple-400' : 'text-yellow-400'}`}>{activeProjectModal.toolsTitle}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProjectModal.tools.map((tool, idx) => (
                      <span 
                        key={idx} 
                        className="bg-slate-950 text-slate-200 px-2.5 py-1 rounded-md text-[11px] font-bold border border-slate-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-2">
                <button 
                  onClick={() => setActiveProjectModal(null)}
                  className="w-full py-2 bg-slate-950 text-xs font-bold text-slate-400 rounded-lg border border-slate-800 hover:text-white"
                >
                  Đóng lại
                </button>
              </div>
            </div>
          </div>
        )}

        <section id="lien-he" className="max-w-4xl mx-auto py-40 px-4 mb-4 scroll-mt-12">
          <div className="bg-slate-900/90 backdrop-blur-md border border-cyan-400/20 p-5 md:p-6 rounded-xl shadow-xl">
            <h3 className="text-2xl md:text-3xl font-black text-cyan-300 mb-6 text-center uppercase tracking-widest">
              Thông Tin Liên Hệ
            </h3>
            
            <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch">
              <div className="w-full md:w-1/2 flex flex-col gap-3">
                <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-lg flex items-center gap-4 hover:border-cyan-500/40 transition">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 text-base">📧</div>
                  <div>
                    <h4 className="text-white font-bold text-xs">Email</h4>
                    <a href="mailto:dungnguyen090306@gmail.com" className="text-cyan-300 font-extrabold text-xs hover:text-cyan-200 transition break-all">
                      dungnguyen090306@gmail.com
                    </a>
                  </div>
                </div>

                <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-lg flex items-center gap-4 hover:border-yellow-500/40 transition">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center flex-shrink-0 text-base">📱</div>
                  <div>
                    <h4 className="text-white font-bold text-xs">Số điện thoại</h4>
                    <a href="tel:+84969267817" className="text-yellow-400 font-extrabold text-xs hover:text-yellow-300 transition">
                      +84 969 267 817
                    </a>
                  </div>
                </div>

                <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-lg flex items-center gap-4 hover:border-blue-500/40 transition">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0 text-base">📍</div>
                  <div>
                    <h4 className="text-white font-bold text-xs">Địa chỉ</h4>
                    <p className="text-slate-300 font-extrabold text-xs">Phường Hiệp Bình, Thành Phố Hồ Chí Minh</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 flex items-center justify-center">
                <div className="bg-slate-950/60 border-2 border-cyan-400/30 p-5 md:p-6 rounded-xl w-full flex flex-col items-center justify-center text-center group hover:border-cyan-400 shadow-md transition-all duration-300 relative overflow-hidden">
                  <div className="flex items-center gap-2 mb-4 bg-emerald-950/50 px-4 py-1.5 rounded-full border border-emerald-500/30 shadow-sm select-none">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-subtle-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <p className="text-xs font-black text-white uppercase tracking-widest">
                      Sẵn sàng hợp tác ^_^
                    </p>
                  </div>
                  
                  <Link 
                    href="https://www.facebook.com/share/1GjHkypBys/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 select-none"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.6)] group-hover:scale-105 transition-transform duration-300 relative">
                      <div className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-60"></div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-5 h-5 md:w-6 md:h-6 fill-white relative z-10">
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                      </svg>
                    </div>

                    <span className="text-white text-sm md:text-base font-black tracking-widest uppercase border-b border-transparent group-hover:border-cyan-400 group-hover:text-cyan-300 transition-all duration-300">
                      FACEBOOK ....
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="max-w-4xl mx-auto border-t border-slate-800/60 pt-6 px-4 mt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-400 text-center sm:text-left">
            <div>© 2026 Nguyễn Trần Tiến Dũng. Portfolio Modules.</div>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-5 text-xs sm:text-sm font-extrabold uppercase tracking-wider">
              <button onClick={() => scrollToSection('gioi-thieu')} className="text-slate-400 hover:text-cyan-400 transition-all duration-200">Giới thiệu</button>
              <button onClick={() => scrollToSection('du-an')} className="text-slate-400 hover:text-cyan-400 transition-all duration-200">Dự Án</button>
              <button onClick={() => scrollToSection('kinh-nghiem')} className="text-slate-400 hover:text-cyan-400 transition-all duration-200">Kinh Nghiệm</button>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-cyan-400 hover:text-white transition-all duration-200 flex items-center gap-1">
                <span>▲</span> Lên Đầu Trang
              </button>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}