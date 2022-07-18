import React from "react";
import "./styles.css"

const InputBox = ({ getInput, Inputdata, handleSubmit }) => {
    return (
        <div className="w-full">
            <div className="wrapper">
                <input type="text"
                    className="input"
                    value={Inputdata}
                    onChange={getInput}
                    placeholder="Enter the task here" />
                <button onClick={handleSubmit} className="btn">Submit</button>
            </div>
        </div>
    );
};

export default InputBox;
