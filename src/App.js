import './App.css';
import logoHeader from './image/logoHeader.svg';
import logoVk from './image/logoVk.svg';
import logoBurger from './image/logoBurger.svg';
import lotos from './image/lotos.png';
import develop from './image/develop.svg';
import front from './image/front2.gif';
import designer from './image/designer8.gif';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {

  const timeTarget = 1735689600;
  const conversionDay = (60*60*24);
  const conversionHour = (60*60);

  const [time, setTime] = useState([0, 0, 0, 0]);

  const calculationTime = () => {
    const remains = Math.round(timeTarget - Date.now()/1000);
    const day = Math.trunc(remains/conversionDay)
    const hour = Math.trunc((remains - day*conversionDay)/conversionHour);
    const minute = Math.trunc((remains - day*conversionDay - hour*conversionHour)/60);
    const second = Math.trunc((remains - day*conversionDay - hour*conversionHour - minute*60));
    setTime([day, hour, minute, second]);
  }

  useEffect(()=>{
    const timer = setTimeout(() => {
      calculationTime()
    }, 1000);
    return () => clearTimeout(timer);
  },[time[3]]);

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
          <span className='main__developText1'>Пожалуйста, зайдите позднее.</span>
        </section>
        <section className='main__frontend'>
          <img className='main__frontendImg' src={front} alt='gif-fronend' width="414" height="238"/>
          <span className='main__frontendtext'>Frontend-разработчик...</span>
        </section>
        <section className='main__designer'>
          <img className='main__designerImg' src={designer} alt='gif-designer' width="419" height="431"/>
          <span className='main__designerText'>Web-дизайнер...</span>
        </section>
        <section className='main__time'>
          <p className='main__timeHeading'>До запуска проекта осталось:</p>
          <ul className='main__timeContent'>
            <li className='main__timeContentPoint'>
              <span className='main__timeContentPointNumber'>{(time[0] >= 0 && time[0] < 10) ? `0${time[0]}` : time[0]}</span>
              <span className='main__timeContentPointText'>дни</span>
            </li>
            <li className='main__timeContentPoint'>
              <span className='main__timeContentPointNumber'>{((time[1] -3) >= 0 && (time[1] - 3) < 10) ? `0${time[1] - 3}` : (time[1] - 3)}</span>
              <span className='main__timeContentPointText'>часы</span>
            </li>
            <li className='main__timeContentPoint'>
              <span className='main__timeContentPointNumber'>{(time[2] >= 0 && time[2] < 10) ? `0${time[2]}` : time[2]}</span>
              <span className='main__timeContentPointText'>минуты</span>
            </li>
            <li className='main__timeContentPoint'>
              <span className='main__timeContentPointNumber'>{(time[3] >= 0 && time[3] < 10) ? `0${time[3]}` : time[3]}</span>
              <span className='main__timeContentPointText'>секунды</span>
            </li>
          </ul>
        </section>
      </main>
      <footer className='footer'>

      </footer>
    </div>
  );
}

export default App;
