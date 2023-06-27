import React from 'react';
import {LiaChevronRightSolid} from 'react-icons/lia';

const Duties = ({duties}) => {

    const getDuties = duties.map((item, index) => (

        <div key={index} className=' flex flex-1 justify-start items-center gap-4 space-y-3'>
            <div>
            <LiaChevronRightSolid size={15} className=' text-gray-400'  />
            </div>
            <p className=' leading-7'>{item}</p>
        </div>
    ))
  return (
    <div>{getDuties}</div>
  )
}

export default Duties



