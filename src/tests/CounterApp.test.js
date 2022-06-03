import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en el CounterApp', () => {

    // let wrapper;
    let wrapper = shallow(<CounterApp />);// de esta forma de mantiene al informacion del intelliSense

    beforeEach(() => {

        wrapper = shallow(<CounterApp />);

    })

    test('Debe de mostrar <CounterApp/> correctamente', () => {

        // const wrapper = shallow(<CounterApp />);
        expect(wrapper).toMatchSnapshot();
    });


    test('Debe de mostrar el valor por defecto de 100', () => {

        const wrapper = shallow(<CounterApp value={100} />);

        const counterText = wrapper.find('h2').text().trim();// .trim() es para eliminar los espacios

        expect(counterText).toBe('100');
    });

    test('Debe de funcionar el boton +', () => {

        wrapper.find('button').at(0).simulate('click');
        // console.log(btn1.html());
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('1');


    });

    test('Debe de funcionar el boton -', () => {

        const btn1 = wrapper.find('button').at(2).simulate('click');
        // console.log(btn1.html());
        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('-1');


    });

    test('Debe funcionar el boton reset', () => {

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        // console.log(counterText);

        expect(counterText).toBe('0');
    })
})