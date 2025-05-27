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
              "specialist",
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
                  : section === "specialist"
                  ? "Specialist"
                  : section === "recruit"
                  ? "Recruit"
                  : "Contact"}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <div className="h-20"></div>

      {/* 홈 섹션 */}
      <section id="home" className="relative h-[66vh] w-full">
        <img
          src="/main.png"
          alt="메인 배경"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-10 w-full text-center px-4">
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
        <h3 className="text-3xl font-bold text-center mb-12">Services</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ServiceCard
            title="정보보호 관리 체계/인증 컨설팅"
            description="ISMS-P, ISO27001 등 주요 보안 인증을 위한 체계적 컨설팅을 지원합니다."
          />
          <ServiceCard
            title="정보보호 솔루션 제공"
            description="고객 환경에 최적화된 보안 솔루션을 제안합니다."
          />
          <ServiceCard
            title="웹 어플리케이션 해킹"
            description="최신 웹 공격 기법을 반영한 실전 모의해킹으로 보안 취약점을 진단합니다."
          />
          <ServiceCard
            title="모바일 어플리케이션 해킹"
            description="Android, iOS 앱에 대한 정밀 해킹 테스트로 보안 위협을 사전에 차단합니다."
          />
          <ServiceCard
            title="시나리오 기반 시스템 해킹"
            description="현실적인 공격 시나리오를 기반으로 내부 시스템의 방어력을 검증합니다."
          />
          <ServiceCard
            title="인프라 취약점 진단"
            description="전반적인 IT 인프라의 보안 취약점을 종합적으로 진단합니다."
          />
        </div>
      </section>


      {/* 전문가 섹션 */}
      <section id="specialist" className="py-20 max-w-6xl mx-auto px-4">
        {/* 제목 */}
        <h3 className="text-3xl font-bold text-center mb-12">Specialist</h3>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* 문구 영역 */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-gray-800 text-lg leading-relaxed font-sans">
              <p>
                체계적인 사내 교육 시스템과 실전 중심의 기술 트레이닝을 통해
                정보보안 분야의 전문성과 실무 능력을 고루 갖춘 인재를 육성합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-gray-800 text-lg leading-relaxed font-sans">
              <p>
                자기계발을 위한 자격 취득 지원 및 커리어 성장 프로그램을 운영하며,
                고객에게는 검증된 최고 수준의 기술 인력을 안정적으로 제공합니다.
              </p>
            </div>
          </div>

          {/* 이미지 영역 */}
          <img
            src="/specialist.png"
            alt="정보보안 전문가 교육"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
        </div>
      </section>


      {/* 채용 */}
      <section id="recruit" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-12">Recruit</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-6">
            <RecruitStep number="1" label="채용지원" />
            <RecruitArrow />
            <RecruitStep number="2" label="서류평가" />
            <RecruitArrow />
            <RecruitStep number="3" label="실무면접" />
            <RecruitArrow />
            <RecruitStep number="4" label="임원면접" />
            <RecruitArrow />
            <RecruitStep number="5" label="최종합격" />
          </div>

          {/* 채용 상세 정보 */}
          <div className="mt-16 bg-white p-8 rounded-xl shadow-md text-left text-gray-800 space-y-6">
            {/* 상단 큰 제목 */}
            <h4 className="text-2xl font-bold mb-8 text-blue-700 border-b-4 border-blue-200 pb-2 inline-block">
              포지션 및 자격요건
            </h4>

            {/* 하위 항목들 */}
            <div>
              <h5 className="text-lg font-semibold text-gray-900 border-l-4 border-blue-500 pl-3 mb-2">
                담당업무
              </h5>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                <li>웹/ 모바일 취약점 진단</li>
                <li>인프라 취약점 진단</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-gray-900 border-l-4 border-blue-500 pl-3 mb-2">
                스킬
              </h5>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>JAVA, 컴퓨터활용능력, 웹해킹, 모바일 해킹</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-gray-900 border-l-4 border-blue-500 pl-3 mb-2">
                핵심역량
              </h5>
              <ul className="list-disc list-inside text-gray-700 ml-4">
                <li>성실성, 성장지향성, 적응성</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-gray-900 border-l-4 border-blue-500 pl-3 mb-2">
                자격요건
              </h5>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                <li>학력: 4년제 대졸이상 (졸업 예정자 가능)</li>
                <li>경력: 신입/경력</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-gray-900 border-l-4 border-blue-500 pl-3 mb-2">
                우대사항
              </h5>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                <li>문서작성 우수자</li>
                <li>관련 자격증 보유자</li>
                <li>자격증: 정보보안기사, 정보처리기사</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-gray-900 border-l-4 border-blue-500 pl-3 mb-2">
                복리후생
              </h5>
              <div className="flex justify-between items-start">
                <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                  <li>창립일 휴무</li>
                  <li>성과급</li>
                  <li>연차수당</li>
                  <li>웰컴키트</li>
                  <li>장비 지원</li>
                  <li>멘토링 제도</li>
                  <li>신입 사원 교육</li>
                  <li>자격증취득지원</li>
                </ul>
                <a
                  href="https://www.jobkorea.co.kr/Recruit/GI_Read/46724631?Oem_Code=C1&logpath=1&stext=%ED%81%90%EB%B8%8C%EB%84%A4%ED%8A%B8%EC%9B%8D%EC%8A%A4&listno=1&sc=631"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-8 mt-[12rem] bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300 whitespace-nowrap self-start"
                >
                  지원하기
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>



      {/* 연락처 */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">Contact</h3>
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
          <p className="text-sm">© 2025 CuB Networks. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ title, description }) {
  return (
    <div className="bg-white p-6 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl text-center hover:-translate-y-1 transform">
      <h4 className="font-semibold text-lg text-blue-700 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}


function RecruitStep({ number, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-blue-900 text-white px-5 py-3 rounded-md shadow-md font-semibold text-lg">
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
