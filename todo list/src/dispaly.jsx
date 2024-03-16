import React from 'react';

const Dispaly = ({ done, removeIt }) => {
    return (
        <>
            <div className='col-12 border border-dark' style={{ minHeight: "500px" }}>

                {
                    done.map(
                        (data, index) => {
                            return (
                                <div key={index} className='p-1 ps-2 my-2 shadow fs-5 fw-bold border border-dark position-relative bg-info ' style={{ userSelect: "none" }}>
                                    {data}
                                    <span onClick={() => removeIt(index)} className='position-absolute' style={{ right: 20, cursor: "pointer" }}>X</span>
                                </div>
                            )
                        }
                    )
                }
            </div>
        </>
    )
}

export default Dispaly;

