import { retornaArreglo } from '../../base-pruebas/07-deses-arr';

describe('Pruebas en destructuracion', () => {

    test('Debe retornar un string y un numero', () => {

        // const [arr] = retornaArreglo();//['ABC', 123]
        const [letras, numeros] = retornaArreglo();

        // console.log(typeof numeros);

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        // expect(arr).toEqual(['ABC', 123]);
        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    })

})