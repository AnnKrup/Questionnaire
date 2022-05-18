import "../App.css";
import React, { useContext, useState } from "react";
import { GameStateContext } from "../helpers/GameStateContext";
import { PLAYING } from "../helpers/constants";

function StartComponent() {
    const [error, setError] = useState(false);
    const { setGameState, userName, setUserName } = useContext(GameStateContext);

    const handleChange = (value) => {
        if(value) {
            setUserName(value);
            setError(false);
        } else {
            setError(true);
        }
    };

    const handleSubmit = () => {
        if(userName) {
            setGameState(PLAYING)
        } else {
            setError(true);
        }
    };

    return (
        <div className="popup">
            <div className="imgWrapperStart">
                <img src="https://www.svgrepo.com/show/138926/list.svg" alt="img" className="img"/>
            </div>
            <input
                type="text"
                placeholder="Enter Your Name"
                onChange={(event) => {handleChange(event.target.value);}}
            />
            <div className={error ? "helperText visible" : "helperText hidden"}>The field cannot be empty!</div>
            <button
                onClick={() => handleSubmit()}
                disabled={error}
            >
                Start Test
            </button>
        </div>
    );
}

export default StartComponent;