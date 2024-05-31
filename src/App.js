import logo from './logo.svg';
import './App.css';
import Header from './components/Home/header/header';
import Introduction from './components/Home/Introduction/introduction';
import What from './components/Home/What_I_Do/What';
import Education from './components/Education/education';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/Project';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <What />
      <Education />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
