import React,{ useContext }  from "react";
import "../App.css";
import { GameStateContext } from "../helpers/GameStateContext";

const EndComponent = () => {
    const { userName, answer } = useContext(GameStateContext);

    return (
        <div className="popup">
            <h1>Dear {userName}!</h1>
            <div className="imgWrapper">
                <img src="https://www.svgrepo.com/show/7892/user.svg" alt="img" className="img"/>
            </div>
            <h2>Your answers:</h2>
            <ol>
                {answer.map(item =>
                    <li key={item.id}>{item.answer}</li>
                )}
            </ol>
        </div>
    );
};

export default EndComponent;