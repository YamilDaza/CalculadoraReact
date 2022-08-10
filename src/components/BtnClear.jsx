import React from 'react';
import '../css/btnClear.css'

const BtnClear = (props) => {
    return (
        <div className='boton-clear' onClick={props.manejarClear}>
            {props.children}
        </div>
    );
}

export default BtnClear;
