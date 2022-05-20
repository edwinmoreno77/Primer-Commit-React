import React from 'react';
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import '@testing-library/jest-dom/extend-expect';


describe('Pruebas en PrimeraApp', () => {

    test('Debe de mostrat el mensaje "Hola, soy Goku"', () => {

        const saludo = 'Hola, soy Goku';

        const { getByText } = render(<PrimeraApp saludo={saludo} />);

        expect(getByText(saludo)).toBeInTheDocument();
    })
})