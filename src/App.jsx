import { useState ,useEffect } from 'react'
import PDD from './assets/pattern-divider-desktop.svg'
import dice from './assets/icon-dice.svg'
import './App.css'

function App() {
  const [advice, setAdvice] = useState("Loading . . .");
  const [adviceId, setAdviceId] = useState(null);

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
    } catch (error) {
      setAdvice("Error fetching advice!");
    }
  };
  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
      <div className="main">
        <div className="advice-container">
              <p className="advice-id">
                Advice #{adviceId || "..." }
              </p>
              <p className="advice-text">
                {advice}
              </p>
            <img src={PDD} alt="" className='pdd'/>
            <button id="dice" onClick={fetchAdvice}>
              <img src={dice} alt="" />
            </button>
      </div>
    </div>
  )
}

export default App
