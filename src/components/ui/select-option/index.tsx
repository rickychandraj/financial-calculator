import React from "react";

const SelectOption = ({
    questionId,
    chosenValue,
    optionValue,
    optionDisplay,
    handleInputChange,
}) => {
    return (
        <div
            className="p-4 my-4 rounded-lg cursor-pointer"
            style={{
                border: "1px solid rgba(165, 18, 70, 0.2)",
                background: chosenValue === optionValue
                ? "linear-gradient(135deg, rgba(165, 18, 70, 0.1), rgba(183, 30, 84, 0.1))"
                : "white"
            }}
            onClick={() => handleInputChange(questionId, optionValue)}
        >
            <span style={{ color: "#252E64" }}>{optionDisplay}</span>
        </div>
    );
};

export default SelectOption;
