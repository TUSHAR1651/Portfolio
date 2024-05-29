import logo from './logo.svg';
import './App.css';
import Header from './components/Home/header/header'
import Introduction from './components/Home/Introduction/introduction';
import What from './components/Home/What_I_Do/What';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <What />
    </div>
  );
}

export default App;
