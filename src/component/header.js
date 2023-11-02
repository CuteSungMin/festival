import { Link, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../css/header.css'



const Header  = () => {
  //public에 있는 이미지 가져 올 수 있는 함수
  const imgUrl = process.env.PUBLIC_URL
  const [hamMenuOpen, setHamMenuOpen] = useState(false)
  const clickHamMenu = ()=>{
    setHamMenuOpen(!hamMenuOpen)
  }

  // Link 눌렀을 때 다른페이지에서 Top 0 시작
  const location = useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])

    return (
      <header className="stickyHead">
        <Link to="/"><img alt='로고' className="headerLogo" src={imgUrl + 'img/Logo_white.png'}></img></Link>
        <ul>
          <Link to="/Guide"><li>별빛야행 소개</li></Link>
          <Link to="/Program"><li>메인 프로그램</li></Link>
          <Link to="/Event"><li>경복궁 행사</li></Link>
          <Link to="/Gallery"><li>갤러리</li></Link>
          <Link to="/NoticeList"><li>커뮤니티</li></Link>
        </ul>
        <div className="headRight">
          <img  alt='로그인 아이콘' className="loginIcon" src={imgUrl + `img/login.png`}></img>
          <p>ENG</p>
          <div className='hamMenu' onClick={clickHamMenu}>
            <div className={`topHamMenu ${hamMenuOpen ? "openTopHam" : ""}`}></div>
            <div className={`centerHamMenu ${hamMenuOpen ? "openCenterHam" : ""}`}></div>
            <div className={`botHamMenu ${hamMenuOpen ? "openbotHam" : ""}`}></div>
          </div>
        </div>
        {/* 오른쪽에서 나오는 햄버거 메뉴임 */}
        <div className={`openHam ${hamMenuOpen ? "clickOpen" : ""}`}>
          <div>
            <p>별빛야행 소개</p>
          </div>
          <div>
            <p>메인 프로그램 소개</p>
          </div>
          <div>
            <p>관련 행사 소개</p>
          </div>
          <div>
            <p>갤러리</p>
          </div>
          <div>
            <p>커뮤니티</p>
          </div>
        </div>
      </header>
     );
}
export default Header;