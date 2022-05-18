import "../App.css";
import { tests } from "../helpers/tests";
import { useContext } from "react";
import { GameStateContext } from "../helpers/GameStateContext";
import Form from "./Form";
import Options from "./Options";

const MainTestsComponent = () => {
    const numberOfTests = tests.length - 1;
    const {step} = useContext(GameStateContext);
    const currentTest = tests[step];

    return (
        <div className="popup">
            <div className="step">Question: {step+1}/{numberOfTests+1}</div>
            <div>
                {currentTest.image &&
                    <div className="imgWrapper">
                        <img src={currentTest.image} alt="img" className="img"/>
                    </div>
                }
                <h2>{currentTest.question}</h2>
                {currentTest.options
                    ? <Options currentTest={currentTest} numberOfTests={numberOfTests}/>
                    : <Form id={currentTest.id} numberOfTests={numberOfTests}/>
                }
            </div>
        </div>
    );
}

export default MainTestsComponent;