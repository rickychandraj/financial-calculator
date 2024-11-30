import React from 'react';

const TextInput = ({
    placeholder,
    value,
    onChange,
    className = "w-full p-3 rounded-lg border",
    style = {
        color: '#12174F',
        borderColor: 'rgba(165, 18, 70, 0.2)',
        outline: 'none'
    }
}) => {
    return (
        <div className="relative">
            <input
                type="text"
                className={className}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={style}
            />
        </div>
    );
};

export default TextInput;