import './App.css';
import logoHeader from './image/logoHeader.svg'

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
      </header>
      <main className='main'>

      </main>
      <footer className='footer'>

      </footer>
    </div>
  );
}

export default App;
