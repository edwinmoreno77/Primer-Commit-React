import React, { useState } from 'react'
import PropTypes from 'prop-types'



const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(0);
    // const calcular = document.querySelector('#calcular');



    // calcular.addEventListener('Click', () => {

    //     let capital = document.querySelector('#capital').value;
    //     let meses = document.querySelector('#meses').value;
    //     let interes = document.querySelector('#interes').value;
    //     let deposito = document.querySelector('#deposito').value;

    //     capital = capital * 1;
    //     meses = meses * 1;
    //     interes = interes * 1;
    //     deposito = deposito * 1;

    //     for (let i = 1; i <= meses; i++) {

    //         capital += ((interes / 100) * capital) + deposito;

    //         capital = capital * 100;
    //         capital = Math.round(capital);
    //         capital = capital / 100;

    //         // resultado.innerText = 'mes ' + i + ' = ' + capital;

    //         console.log('Mes ' + i + ' = ' + capital);
    //     }
    // })






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
            <div className='div'>
                <label>Capital:</label>
                <input id='capital' placeholder='Ingrese su Capital'></input>
                <label>Interes:</label>
                <input id='interes' placeholder='Ingrese el Interes'></input>
                <label>Meses:</label>
                <input id='meses' placeholder='Ingrese los meses'></input>
                <label>Deposito:</label>
                <input id='deposito' placeholder='Ingrese el Monto'></input>
            </div>
            <div className='div'>
                <button id='calcular'>Calcular</button>
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