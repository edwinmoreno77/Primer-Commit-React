import React from 'react';
import { createRoot } from 'react-dom/client';
import PrimeraApp from './PrimeraApp';
// import CounterApp from './CounterApp'
import './index.css';

// import ReactDOM from 'react-dom';//v17
// const saludo = <h1>hola mundo</h1>;
// ReactDOM.render(saludo, divRoot);//v17


const divRoot = document.querySelector('#root');
const root = createRoot(divRoot); //v18

root.render(<PrimeraApp saludo='Hola, soy Goku' />);
// root.render(<CounterApp value={0} />);
// root.render(<CounterApp />); // por defecto se establecio value es 0
