import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp"
import heroes from "../../data/heroes";


describe('Pruebas en funciones de Heroes', () => {

    test('Debe retornar un Heroe por id', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);

    });

    test('Debe retornar un arreglo de owner DC', () => {

        const owner = 'DC';

        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner);


        expect(heroes).toEqual(heroesData);
    });

    test('Debe retornar un arreglo de owners de Marvel con 2 heroes', () => {

        const owner = 'Marvel';

        const owners = getHeroesByOwner(owner);

        expect(owners.length).toBe(2);
    });

});