import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas"
import heroes from "../../data/heroes";


describe('Pruebas con promesas', () => {


    test('getHeroeByIdAsync debe retornar un Heroe Async', (done) => {


        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            })


    });

    test('Debe de obtener un error si el heroe no existe', (done) => {

        const id = 10;
        getHeroeByIdAsync(id)
            .catch(heroe => {
                expect(heroe).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
})