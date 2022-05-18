import "./App.css";
import StartComponent from "./components/StartComponent";
import { useState } from "react";
import { GameStateContext } from "./helpers/GameStateContext";
import EndComponent from "./components/EndComponent";
import MainTestsComponent from "./components/MainTestsComponent";
import { START,END, PLAYING } from "./helpers/constants";

function App() {
    const [gameState, setGameState] = useState(START);
    const [userName, setUserName] = useState("");
    const [answer, setAnswer] = useState([]);
    const [step, setStep] = useState(0);

    return (
        <div className="container">
            <h1>Questionnaire</h1>
            <GameStateContext.Provider
                value={{
                    gameState,
                    setGameState,
                    userName,
                    setUserName,
                    answer,
                    setAnswer,
                    step,
                    setStep,
                }}
            >
                {gameState === START && <StartComponent />}
                {gameState === PLAYING && <MainTestsComponent />}
                {gameState === END && <EndComponent />}
            </GameStateContext.Provider>
        </div>
    );
}

export default App;