import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* 로고 또는 회사 이름 */}
        <h1 className="text-xl font-bold text-blue-600 cursor-default">회사 이름</h1>

        {/* 네비게이션 메뉴 */}
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li><a href="#home" className="hover:text-blue-600">홈</a></li>
            <li><a href="#about" className="hover:text-blue-600">회사소개</a></li>
            <li><a href="#services" className="hover:text-blue-600">서비스</a></li>
            <li><a href="#recruit" className="hover:text-blue-600">채용</a></li>
            <li><a href="#contact" className="hover:text-blue-600">연락처</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
