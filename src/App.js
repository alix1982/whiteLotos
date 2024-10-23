import './App.css';
import logoHeader from './image/logoHeader.svg';
import logoVk from './image/logoVk.svg';
import logoBurger from './image/logoBurger.svg';
import lotos from './image/lotos.png';
import develop from './image/develop.svg';
import front from './image/front.gif';
import front2 from './image/front2.gif';
import designer from './image/designer.gif';
import designer2 from './image/designer2.png';
import designer3 from './image/disigner3.MP4';
import designer4 from './image/designer4.gif';
import designer5 from './image/designer4.gif';
import designer6 from './image/designer6.gif';
import designer7 from './image/designer7.gif';
import designer8 from './image/designer8.gif';

const App = () => {

  return (
    <div className="App">
      <header className='header'>
        <img className='header__logo' src={logoHeader} alt='логотип'/>
        <div className='header__content'>
          <nav className='header__menu'>
            <p className='header__menuContent'>Пространство “Белый лотос”</p>
            <p className='header__menuContent'>СПА -программы</p>
            <p className='header__menuContent'>Отзывы</p>
          </nav>
          <nav className='header__contacts'>
            <p className='header__contactsContent'>8 952 259 38 68</p>
            <p className='header__contactsContent'>Ломоносова 85/2</p>
          </nav>
        </div>
        <div className='header__contentMobile'>
        <img className='header__logoVk' src={logoVk} alt='логотип ВК'/>
        <img className='header__logoBurger' src={logoBurger} alt='логотип бургер'/>
        </div>
      </header>
      <main className='main'>
        <section className='main__develop'>
          <img className='main__developLogoLotos' src={lotos} alt='логотип лотос'/>
          <img className='main__developLogoDevelop' src={develop} alt='печать'/>
          <span className='main__developText'>Эта страница находится</span>
          <span className='main__developText1'>Пожалуйста,зайдите позднее.</span>
        </section>
        <section className='main__frontend'>
          <img className='main__frontendImg' src={front2} alt='gif-fronend' width="414" height="238"/>
          <span className='main__frontendtext'>Frontend-разработчик...</span>
        </section>
        <section className='main__designer'>
          {/* <video autoplay muted loop className='main__designerImg' poster={designer2} playsinline >
            <source src={designer3} type="video/mp4"/>
          </video> */}
          <img className='main__designerImg' src={designer8} alt='gif-designer' width="419" height="431"/>
          <span className='main__designerText'>Web-дизайнер...</span>
        </section>
      </main>
      <footer className='footer'>

      </footer>
    </div>
  );
}

export default App;
