import React, { useState, useContext } from 'react';
import { GameStateContext } from "../helpers/GameStateContext";
import useTimer from "../hooks/useTimer";
import { END } from "../helpers/constants";

const Form = ({id, numberOfTests}) => {
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    const { answer, setAnswer, step, setStep, setGameState } = useContext(GameStateContext);
    const { countdown } = useTimer(() => {
        handleSubmit(id, 'No answer',true)
    });

    const handleSubmit = (id, userAnswer, force) => {
        if(input || force) {
            setAnswer([...answer, {id: id, answer: userAnswer}])
            setInput('');

            if(step !== numberOfTests) {
                setStep(prev => prev + 1);
            } else {
                setGameState(END);
            }

        } else {
            setError(true);
        }
    };

    const handleChange = (value) => {
        setInput(value);
        if(value) {
            setError(false);
        } else {
            setError(true);
        }
    };

    return (
        <div>
            <div className={countdown ? "helperText visible" : "helperText hidden"}>
                This question has a time limit: {countdown} sec
            </div>
            <input
                value={input}
                type="text"
                placeholder="Your answer"
                onChange={(event) => {handleChange(event.target.value);}}
            />
            <div className={error ? "helperText visible" : "helperText hidden"}>The field cannot be empty!</div>
            <button
                onClick={() => handleSubmit(id, input)}
                disabled={error}
            >
                Submit
            </button>
        </div>
    );
};

export default Form;