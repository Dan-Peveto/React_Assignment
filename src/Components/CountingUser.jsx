import React, { useState, useEffect } from 'react';

function CountUserDisplay() {
    const [inputText, setInputText] = useState('');
    const [inputLtr, setInputLtr] = useState('')
    const [count, setCount] = useState(0);


    const handleTextChange = (event) => {
        const text = event.target.value;
        setInputText(text);
    };
    const handleLetterChange = (event) => {   
        const ltr = event.target.value;
        setInputLtr(ltr);
    }

    useEffect(() => {
        const newCount = countUser(inputText, inputLtr);
        setCount(newCount);
    }, [inputText, inputLtr]);

    const countUser = (str, ltr) => {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === ltr) {
                count++
            }
        }
    return count;
    };

    // return result of function bs with user input
    return(
        <div className='container'>
            <input 
                type='text'
                placeholder='Enter text here'
                value={inputText}
                onChange={handleTextChange}
                />
            <input
                type='text'
                placeholder='Enter letter here'
                value={inputLtr}
                onChange={handleLetterChange}
                maxLength={1}
                />
                
                {inputLtr.length < 1 ? (
            <p>
                Input Your Text and Letter </p>
                ) : 
                (<p>{inputText} contains {count} {inputLtr}s</p>
                )}
        </div>
    );
}

export default CountUserDisplay