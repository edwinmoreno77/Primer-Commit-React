import '@testing-library/jest-dom';
import { getSaludo } from '../../base-pruebas/02-template-string';

describe('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe retornar Hola fernando', () => {

        const nombre = 'Fernando';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);
    })

    //getSaludo debe de retornar Hala Edwin si no hay valores en el argumento

    test('getSaludo debe retornar Hola Edwin', () => {

        // const nombre = 'Edwin'

        const saludo = getSaludo();
        // console.log(saludo);

        expect(saludo).toBe('Hola Edwin');
    })

})