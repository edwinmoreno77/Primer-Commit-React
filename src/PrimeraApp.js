
// import { Fragment } from "react";
import PropTypes from 'prop-types';
// import React, { Fragment } from "react";// v17

//FC
const PrimeraApp = ({ saludo, subtitulo }) => {

    // const saludo = 'Hola Mundo';
    // console.log(props)
    // {
    //     nombre: 'Edwin',
    //     apellido: 'Moreno'// ejm: JSON.stringify
    // }

    return (
        <>
            <h1>{saludo}</h1>
            {/*<pre>{JSON.stringify(saludo, null, 3)}</pre>*/}
            <p>{subtitulo}</p>
        </>
    );
}



//     return (
//         <Fragment>
//             <h1>hola mundo</h1>
//             <p>Mi Primera App</p>
//         </Fragment>
//     );
// } Este es un ejm de forma corta de fragment.



PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}
export default PrimeraApp;