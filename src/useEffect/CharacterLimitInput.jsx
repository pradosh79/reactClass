import React, { useState, useEffect } from 'react';

export default function CharacterLimitInput() {
    const [inputValue, setInputValue] = useState('');
    const [showAlert, setShowAlert] = useState(true);

    const handleChange = (event) => {
        const value = event.target.value;
        
        // Limit input to 10 characters
        if (value.length <= 10) {
            setInputValue(value);
        }
    };

    useEffect(() => {
        // Show alert if input is less than 10 characters, hide otherwise
        if (inputValue.length < 10) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
        }
    }, [inputValue]);

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter up to 10 characters"
            />
            {showAlert && (
                <p style={{ color: 'red' }}>
                    The input must contain 10 characters.
                </p>
            )}
        </div>
    );
}