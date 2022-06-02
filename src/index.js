// import React from 'react';// v18 y v17
// import { createRoot } from 'react-dom/client';
// // import PrimeraApp from './PrimeraApp';
// import CounterApp from './CounterApp'
// import './index.css';


// const root = createRoot(divRoot); //v18

// root.render(<PrimeraApp saludo='Hola, soy Goku' />);
// root.render(<CounterApp value={0} />);
// root.render(<CounterApp />); // por defecto se establecio value es 0




//------------------------------------------ v17
import React from 'react';//  v17 y v18 
import ReactDOM from 'react-dom';//v17
import './index.css';

const saludo = <h1>hola mundo</h1>;// v17
const divRoot = document.querySelector('#root');//v17
ReactDOM.render(saludo, divRoot);//v17