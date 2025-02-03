import { useState } from 'react'
import './App.css'
import InputBox from './component/InputBox'
import ButtonsContainer from './component/ButtonsContainer'

function App() {
   const [value, setValue] = useState(" ")
   const onClickBtn=(buttonText)=>{
    if(buttonText==="C"){
      setValue("")
    } else if(buttonText==="="){
        setValue(eval(value))
      } else{
          setValue(value+buttonText)
        }
    };
  return (
    <>
    <div className='justify-items-center'>
    <div className='w-3/4 md:w-1/3 text-center flex-wrap bg-gray-300 p-2 md:p-4 rounded-lg' >
        <div className='text-3xl font-bold my-2'>Calculator</div>
        <InputBox displayValue={value}></InputBox>
        <ButtonsContainer onClickBtn={onClickBtn}></ButtonsContainer>
      </div>
    </div>
      
    </>
  )
}

export default App
