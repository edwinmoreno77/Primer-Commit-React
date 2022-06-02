import React from 'react';
import { shallow } from 'enzyme'
// import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
// import '@testing-library/jest-dom/extend-expect';


describe('Pruebas en PrimeraApp', () => {

    // test('Debe de mostrat el mensaje "Hola, soy Goku"', () => {

    //     const saludo = 'Hola, soy Goku';

    //     const { getByText } = render(<PrimeraApp saludo={saludo} />);

    //     expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('Debe de mostrar <PrimeraApp/> correctamente', () => {

        const saludo = 'hola, soy goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    })

})