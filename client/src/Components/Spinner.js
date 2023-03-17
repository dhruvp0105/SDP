import React from 'react'

const Spinner = () => {
    return (
        <>
            <div className='d-flex justify-content-center spinner'>
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Spinner