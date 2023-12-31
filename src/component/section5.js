import { useState} from 'react';
import { Link } from 'react-router-dom';
import '../css/section5.css'
import { withTranslation,useTranslation } from 'react-i18next';


const Section5 = () => {
    const { t } = useTranslation();

    //위에 슬라이드
    const [topMove, setTopMove] = useState(true);
    const topOnStop = () => setTopMove(false);
    const topOnRun = () => setTopMove(true);
    
    // 아래 슬라이드
    const [botMove, setBotMove] = useState(true);
    const botOnStop = () => setBotMove(false);
    const botOnRun = () => setBotMove(true);

    const slides = [
        { background: 'img/gallery_img1.jpg'},
        { background: 'img/gallery_img2.jpg'},
        { background: 'img/gallery_img3.jpg'},
        { background: 'img/gallery_img4.jpg'},
        { background: 'img/gallery_img5.jpg'},
        { background: 'img/gallery_img6.jpg'},
        { background: 'img/gallery_img7.jpg'},
    ];

    return (  
        <section className='section5'>
            <article className='w1500'>
                <h1 className='section5Title'>{t('sec5.title')}</h1>
            </article>
            <article className="slideWrapper">
                    <div className="moveWrapper">
                         {/*State False면 Class가 Stop 으로 바뀌면서 멈춤 */}
                        <ul className={"slide5 topOriginal" + (topMove ? "" : " stop")}>
                            {slides.map((s, i) => (
                                <Link to="/Gallery"><li className="moveBox" style={{background: `url(${s.background})`,
                                    backgroundRepeat : 'no-repeat',
                                    backgroundSize:`cover`,
                                    backgroundPosition : `center`}} onMouseEnter={topOnStop} onMouseLeave={topOnRun} key={i}>
                                </li></Link>
                            ))}
                        </ul>
                        <ul className={"slide5 topCloneBox" + (topMove ? "" : " stop")} >
                            {slides.map((s, i) => (
                                <Link to="/Gallery"><li className="moveBox" style={{background: `url(${s.background})`,
                                backgroundRepeat : 'no-repeat',
                                backgroundSize:`cover`,
                                backgroundPosition : `center`}} onMouseEnter={topOnStop} onMouseLeave={topOnRun} key={i}>
                            </li></Link>
                            ))}
                        </ul>
                    </div>
                    <div className="moveWrapper">
                        <ul className={"slide5 botOriginal" + (botMove ? "" : " stop")}>
                            {slides.map((s, i) => (
                                <Link to="/Gallery"><li className="moveBox" style={{background: `url(${s.background})`,
                                backgroundRepeat : 'no-repeat',
                                backgroundSize:`cover`,
                                backgroundPosition : `center`}} onMouseEnter={botOnStop} onMouseLeave={botOnRun} key={i}>
                            </li></Link>
                            ))}
                        </ul>
                        <ul className={"slide5 botCloneBox" + (botMove ? "" : " stop")} >
                            {slides.map((s, i) => (
                                 <Link to="/Gallery"><li className="moveBox" style={{background: `url(${s.background})`,
                                 backgroundRepeat : 'no-repeat',
                                 backgroundSize:`cover`,
                                 backgroundPosition : `center`}} onMouseEnter={botOnStop} onMouseLeave={botOnRun} key={i}>
                             </li></Link>
                            ))}
                        </ul>
                    </div>
            </article>

        </section>
    );
}
 
export default Section5;