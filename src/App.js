import logo from './logo.svg';
import './App.css';
import Modal from './Component/ModalBox/ModalWindow';
import ModalWindow from './Component/ModalBox/ModalWindow';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Component/ModalBox/Modal.css'
import bgImage from './images/giphy.gif';
function App() {
  return (
    <div className="App">
    <h1 style={{color:'white'}}>How to use Modal-Box</h1>
    <ModalWindow />
    <img src={bgImage} alt=""/>
    </div>
  );
}

export default App;
