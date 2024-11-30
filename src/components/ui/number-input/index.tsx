import React from 'react';

const NumberInput = ({
    placeholder,
    value,
    onChange,
    prefix,
    suffix,
    className="w-full p-3 rounded-lg border",
    style= {
        color: "#12174F",
        borderColor: "rgba(165, 18, 70, 0.2)",
        outline: "none",
        appearance: "none",
        WebkitAppearance: "none",
        MozAppearance: "textfield",
        margin: 0
    }
}) => {
    return (
        <div className="relative mt-4">
            {prefix && (
                <div
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    style={{color: "#A51246"}}
                >
                    {prefix}
                </div>
            )}
            <input
                type="text"
                className={className}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={style}
                min={0}
                onKeyPress={(e) => {
                    if (!/\d/.test(e.key)) {
                        e.preventDefault();
                    }
                }}
                onKeyDown={(e) => {
                    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                        e.preventDefault();
                    }
                }}
            />
            {suffix && (
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                style={{color: "#A51246"}}
              >
                {suffix}
              </span>
            )}
        </div>
    );
};

export default NumberInput;