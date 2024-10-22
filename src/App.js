import './App.css';
import logoHeader from './image/logoHeader.svg';
import logoVk from './image/logoVk.svg';
import logoBurger from './image/logoBurger.svg';
import lotos from './image/lotos.png';
import develop from './image/develop.svg';

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
        </section>
      </main>
      <footer className='footer'>

      </footer>
    </div>
  );
}

export default App;
