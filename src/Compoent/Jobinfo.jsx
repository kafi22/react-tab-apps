// import React from 'react'
// import Duties from './Duties';

// const Jobinfo = ({jobs, currentIndex}) => {


//     const { title, dates, duties, company} = jobs[currentIndex]

//   return (
    
//     <div>
//           <article>
//             <h1>{title}</h1>
//             <span>{company}</span>
//             <p>{dates}</p>
//                 <Duties duties={duties} />
//         </article>  
//     </div>

//   )
// }

// export default Jobinfo



import React from 'react';
import Duties from './Duties';

const Jobinfo = ({ jobs, currentIndex }) => {

  const { id, title, dates, duties, company } = jobs[currentIndex];

  return (
    <div>
      <article key={id} className=' flex flex-col flex-1 justify-between items-start space-y-2'>
        <h1 className=' text-lg leading-6  lg:text-3xl lg:leading-7 text-gray-500 font-semibold mb-3 tracking-wider'>{title}</h1>
        <span className=' bg-gray-400 py-1 px-2 rounded-md text-white text-sm'>{company}</span>
        <p className=' mb-3'>{dates}</p>
        <Duties duties={duties} />
      </article>
    </div>
  );
}

export default Jobinfo;




