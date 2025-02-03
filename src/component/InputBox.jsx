import React from 'react'

function InputBox({displayValue}) {
  return (
    <>
    <div className='w-full h-14 my-3'>
        <input className='bg-white w-full text-2xl p-3 rounded-md font-semibold border-none' 
        type="text" 
        value={displayValue} 
        readOnly/>
    </div>
    </>
  )
}

export default InputBox