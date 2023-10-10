import React, { useState } from 'react';

function CountBsDisplay() {
    const [inputText, setInputText] = useState('');
    const [count, setCount] = useState(0);

    const handleInputChange = (event) => {
        
        const text = event.target.value;
        setInputText(text);
        // Call the countBs function with the user's input and 
        // update the count
        const newCount = countBs(text);
        setCount(newCount);
    }


    const countBs = (str) => {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === 'B') {
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
                onChange={handleInputChange}
                />
                
                {inputText.length < 1 ? (
            <p>
                Input Your Text </p>
                ) : 
                (<p>{inputText} contains {count} "B's"</p>
                )}
        </div>
    );
}

export default CountBsDisplay