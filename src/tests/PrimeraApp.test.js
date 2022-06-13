import React from 'react';
import '@testing-library/jest-dom';
import { render, shallow } from 'enzyme';
// import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import { getByAltText, getByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('Pruebas en PrimeraApp', () => {

    // test('Debe de mostrat el mensaje "Hola, soy Goku"', () => {

    //     const saludo = 'Hola, soy Goku';

    //     const { getByText } = render(<PrimeraApp saludo={saludo} />);

    //     expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('<PrimeraApp/> Debe hacer match con snapshot', () => {

        const saludo = 'hola, soy goku';
        // const wrapper = shallow(<PrimeraApp saludo={saludo} />);//otra forma de hacerlo

        // expect(wrapper).toMatchSnapshot();
        const { container } = render(<PrimeraApp saludo={saludo} />);

        expect(container).toMatchSnapshot();
    })

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, soy Goku';
        const subTitulo = 'Soy un subtitulo';

        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subTitulo} />);

        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subTitulo);
    });


})