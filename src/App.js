import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    document.title = 'CuB Networks';
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* 상단 고정 헤더 */}
      <header className="bg-white shadow fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <img
            src="/logo1.jpg"
            alt="Cub Networks Logo"
            className="h-10 cursor-pointer"
            onClick={() => scrollToSection("home")}
          />
          <nav className="space-x-6 text-sm md:text-base">
            {[
              "about",
              "services",
              "references",
              "recruit",
              "contact",
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 hover:text-blue-600 transition duration-200"
              >
                {section === "about"
                  ? "About"
                  : section === "services"
                  ? "Services"
                  : section === "references"
                  ? "References"
                  : section === "recruit"
                  ? "Recruit"
                  : "연락처"}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <div className="h-20"></div>

      {/* 홈 섹션 */}
      <section id="home" className="relative h-screen w-full">
        <img
          src="/main.png"
          alt="메인 배경"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-20 w-full text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow">
            정보보안의 새로운 기준
          </h2>
          <p className="text-lg md:text-xl text-white drop-shadow">
            Cub Networks는 전문성과 신뢰를 기반으로 보안 컨설팅을 제공합니다.
          </p>
        </div>
      </section>

      {/* 회사소개 */}
      <section id="about" className="py-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
          alt="정보보안 이미지"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:w-1/2 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md text-gray-800 text-lg leading-relaxed font-sans">
            <p>
              (주)큐브네트웍스는 모의해킹을 중심으로 정보보안 컨설팅을 전문으로 하는 기업으로,
              다양한 산업 분야에 투입되어 보안 취약점을 진단하고 최적의 보안 솔루션을 제공합니다.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-gray-800 text-lg leading-relaxed font-sans">
            <p>
              사내 기술 교육과 지식 공유를 활발히 진행하며, 여러 보안 전문 업체와 협력하여
              고객에게 높은 수준의 인적·지적 보안 서비스를 제공하기 위해 최선을 다하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 서비스 */}
      <section id="services" className="py-20 max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">서비스</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            "정보보호 관리 체계/인증 컨설팅",
            "정보보호 아키텍처 수립",
            "웹 어플리케이션 해킹",
            "모바일 어플리케이션 해킹",
            "시나리오 기반 시스템 해킹",
            "인프라 취약점 진단",
          ].map((title) => (
            <ServiceCard key={title} title={title} />
          ))}
        </div>
      </section>

      {/* 레퍼런스 */}
      <section id="references" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">레퍼런스</h3>
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold text-blue-600 mb-2">2024년</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>신한은행 - 금융 보안 취약점 진단 사업</li>
                <li>현대자동차 - 보안 취약점 진단 사업</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-blue-600 mb-2">2025년</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>하이픈코퍼레이션 - 보안 취약점 진단 사업</li>
                <li>한국정보통신(KICC) - 보안 취약점 진단 사업</li>
                <li>금융보안원 - 금융 보안 취약점 진단 사업</li>
                <li>두나무 - 보안 취약점 진단 사업</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 채용 */}
      <section id="recruit" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-12">채용 절차</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-6">
            <RecruitStep number="1" label="서류전형" />
            <RecruitArrow />
            <RecruitStep number="2" label="1차면접" />
            <RecruitArrow />
            <RecruitStep number="3" label="2차면접" />
            <RecruitArrow />
            <RecruitStep number="4" label="임원면접" />
            <RecruitArrow />
            <RecruitStep number="5" label="최종합격" />
          </div>
        </div>
      </section>

      {/* 연락처 */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">연락처</h3>
            <p className="text-gray-700 mb-2">이메일: kjh@cub.kr</p>
            <p className="text-gray-700 mb-4">
              주소: 서울시 금천구 가산디지털1로 225 9층 큐브네트웍스
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <a
              href="https://naver.me/5pqayvTB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/map.png"
                alt="회사 위치 지도"
                className="w-full md:w-[600px] h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </section>

      {/* 하단 바 */}
      <footer className="bg-white text-black text-center py-6 mt-10 border-t border-gray-200">
        <div className="flex items-center justify-center gap-2">
          <img src="/logo1.jpg" alt="Cub Networks Logo" className="h-6" />
          <p className="text-sm">© 2025 Cub Networks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ title }) {
  return (
    <div className="bg-white p-6 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl text-center hover:-translate-y-1 transform">
      <h4 className="font-semibold text-lg text-blue-700 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        전문가 컨설팅과 맞춤형 진단을 통해 최적의 보안 솔루션을 제공합니다.
      </p>
    </div>
  );
}

function RecruitStep({ number, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-blue-600 text-white px-5 py-3 rounded-md shadow-md font-semibold text-lg">
        {label}
      </div>
      <span className="mt-2 text-gray-800 font-medium"></span>
    </div>
  );
}

function RecruitArrow() {
  return <div className="hidden md:block text-blue-600 text-2xl">→</div>;
}

export default App;
