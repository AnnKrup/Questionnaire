import React, { useContext } from 'react';
import { GameStateContext } from "../helpers/GameStateContext";
import useTimer from "../hooks/useTimer";
import { END } from "../helpers/constants";

const Options = ({currentTest, numberOfTests}) => {
    const { answer, setAnswer, step, setStep, setGameState } = useContext(GameStateContext);
    const { countdown } = useTimer(() => {
        handleSubmit(currentTest.id,  'No answer')
    });

    const handleSubmit = (id, userAnswer) => {
        setAnswer([...answer, {id:id, answer:userAnswer}])

        if(step !== numberOfTests) {
            setStep(prev => prev + 1);
        } else {
            setGameState(END)
        }
    };

    return (
        <>
            <div className={countdown ? "helperText visible" : "helperText hidden"}>
                This question has a time limit: {countdown} sec
            </div>
            <div className="questions">
                {currentTest.options.map((option,index) =>
                    <button
                        key={option+index}
                        onClick={() => handleSubmit(currentTest.id, option)}
                    >
                        {option}
                    </button>
                )}
            </div>
        </>
    );
};

export default Options;