import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppHeader from './components/Header';
import AppHome from './components/Home';
import AppAbout from './components/About';
import AppSkills from './components/Skills';
import AppEducation from './components/Education';
import AppContact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <br></br>
      <main>
        <AppHome />
        <br></br>
        <br></br>
        <AppAbout />
        <br></br>
        <br></br>
        <AppSkills />
        <br></br>
        <br></br>
        <AppEducation />
        <br></br>
        <br></br>
        <AppContact />
      </main>
    </div>
  );
}

export default App;
