import React from 'react';

const CurrencyInput = ({
    prefix,
    suffix,
    placeholder,
    value,
    onChange,
    className = "w-full p-3 pl-12 rounded-lg border",
    style = {
       color: '#12174F',
       borderColor: 'rgba(165, 18, 70, 0.2)',
       outline: 'none'
    }
}) => {
    // Format number with thousand separators
    const formatNumber = (num) => {
        // Remove any non-digit characters except decimal point
        const cleanNum = num.toString().replace(/[^\d.]/g, '');

        // Split into integer and decimal parts
        const [integerPart, decimalPart] = cleanNum.split('.');

        // Add thousand separators to integer part
        const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        // Return formatted number with decimal part if it exists
        return decimalPart !== undefined
            ? `${formattedInteger}.${decimalPart}`
            : formattedInteger;
    };

    return (
        <div className="relative mt-4">
            {prefix && (
                <div
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    style={{color: '#A51246'}}
                >
                    {prefix}
                </div>
            )}
            <input
                type="text"
                className={className}
                placeholder={placeholder}
                value={value ? formatNumber(value) : ''}
                onChange={onChange}
                style={style}
                onKeyPress={(e) => {
                    if (!/\d/.test(e.key)) {
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

export default CurrencyInput;