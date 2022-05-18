import { useContext, useEffect, useState } from "react";
import { tests } from "../helpers/tests";
import { GameStateContext } from "../helpers/GameStateContext";

const useTimer = (nextStep) => {
    const [currentInterval, setCurrentInterval] = useState(null);
    const [countdown, setCountDown] = useState(null);
    const {step} = useContext(
        GameStateContext
    );
    const currentQuestion = tests[step];

    useEffect(() => {
        const {time} = currentQuestion;

        if(currentInterval){
            clearInterval(currentInterval);
        }

        if(!time){
            setCountDown(null);
            return;
        }

        const interval = setInterval(() => {
            setCountDown(countdown => {
                if(!countdown) {
                    setTimeout(nextStep,0);
                    return null;
                }
                return countdown - 1;
            });
        },  1000);

        setCountDown(time);
        setCurrentInterval(interval);

        return () => {
            clearInterval(interval);
        }
    }, [step])

    return { countdown };
}

export default useTimer;