import React, { useState } from 'react'
import PropTypes from 'prop-types'



const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(0);

    //handleAdd
    const handleReset = () => {
        setCounter(value);

    }
    const handleAdd = () => {
        setCounter(counter + 1);//una forma de hacerlo
        // setCounter((c) => c + 1);// otra forma de hacerlo
    }
    const handleSubtract = () => {
        setCounter(counter - 1);

    }

    return (
        <div>
            <div className='div'>
                <h1>Counter App</h1>
            </div>
            <div className='div'>
                <h2> {counter} </h2>
            </div>
            <div className='div'>
                <button onClick={handleAdd}>+1</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleSubtract}>-1</button>
            </div>

        </div>
    )


}

CounterApp.propTypes = {
    value: PropTypes.number
}


CounterApp.defaultProps = {
    value: 0
}


export default CounterApp;