import React, { useRef } from 'react';

const Input = ({inputer}) => {

    const inputref = useRef();

    const savedone =()=>{
        // console.log(inputref.current.value)
        inputer(inputref.current.value)
        inputref.current.value =  "";
    }
    
    return (
        <>
            <div className='d-flex my-2'>
                <input ref={inputref} type="search" className='form-control border border-dark fs-5 fw-bold' />
                <button onClick={savedone} className='btn btn-primary ms-2'>Add</button>
            </div>
        </>
    )
}

export default Input;
