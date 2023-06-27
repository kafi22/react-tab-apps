import React from 'react'

const BtnContainer = ({jobs, setIndex, currentIndex}) => {



    const getCompany = jobs.map((item, index) => (
        <button className={currentIndex === index ? 'text-gray-400  border-s-2 py-1 px-2 shadow-gray-500 tracking-wider border-gray-400 text-sm transition-colors' : ' text-slate-700  border-gray-400 rounded-md py-1 px-2 text-sm tracking-wider transition-colors'}
        key={item.id}
       
        onClick={() => setIndex(index)}
        >{item.company}</button>
    ))

  return (
    <div className=' flex gap-4  lg:flex-col lg:justify-start lg:items-start'>{getCompany}</div>
  )
}

export default BtnContainer