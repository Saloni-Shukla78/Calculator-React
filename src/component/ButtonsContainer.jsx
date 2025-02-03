import React from 'react'

function ButtonsContainer({onClickBtn}) {
    const buttonsName=["C","%","/","*","-","+","1","2","3","4","5","6","7","8","9","0","=","."];
    
  return (
    <>
    <div className="buttons-container flex flex-wrap justify-center gap-4 p-1 md:p-3">
        {buttonsName.map((button) => (
          <button className='w-10 h-10 md:w-16 md:h-16 md:text-2xl text-xl font-bold bg-slate-500 rounded-md shadow-slate-700 shadow-lg'
          onClick={() => onClickBtn(button)}>
            {button}
            </button>
        ))}
    
       
    </div>

    </>
  )
}

export default ButtonsContainer