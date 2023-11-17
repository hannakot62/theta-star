import './App.css';
import PrimaryPage from "./pages/PrimaryPage/PrimaryPage";
import Modal from "./components/Modal/Modal";
import {useState} from "react";

function App() {
    const [activeModal, setActiveModal] = useState(false);
    return (
        <div className="App">
            <PrimaryPage/>
            <Modal active={activeModal} setActive={setActiveModal}/>
        </div>
    );
}

export default App;
