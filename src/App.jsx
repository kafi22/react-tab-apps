import { useEffect, useState } from "react";
import BtnContainer from "./Compoent/BtnContainer"
import Jobinfo from "./Compoent/Jobinfo"

const url = 'https://course-api.com/react-tabs-project';

const App = () => {

  const [isLoading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentIndex, setIndex] = useState(0)
  

  const fetchApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  if(isLoading) {
    return <div className=" container my-6 mx-auto p-5 text-center">
      <h1 className=" text-red-500 text-center leading-7  text-2xl tracking-wider">Loading...</h1>
    </div> 
  }




  return (
    <div className="container my-24 mx-auto max-w-[80%] p-6">
      <div className=" flex flex-col gap-6 justify-center items-start lg:flex-row lg:justify-start lg:items-start lg:gap-14">
      <BtnContainer jobs={jobs} setIndex={setIndex} currentIndex={currentIndex}  />
      <Jobinfo jobs={jobs}  currentIndex={currentIndex} />
      </div>
    </div>
  )
}

export default App


