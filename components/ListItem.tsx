import React from "react"
import axios from "axios";
import { useState } from "react"
import { useRouter } from "next/router";

export function ListItem({order=0, title='', completion_time=""}:{order?:number, title?:string, completion_time?:string}) {
  const [value, setValue] = useState(false)
  const toggleChecked = () => {
    setValue(!value)
    // console.log(value)
  }
  const router = useRouter()
  const { pathname } = router

  const [courses, setCourses] = useState([])

  const getCourses = async () => {
    try {
      const {data} = await axios.get('/api/classroom/courses')
      setCourses(data)
    } catch (error) {
      
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex w-full space-x-4 py-4">
        { pathname.endsWith("topics") && <input type="checkbox" name="checkbox" id="checkbox" onChange={toggleChecked} checked={value} /> }
        <div className="flex flex-col">
          <div className="flex">
            <span className="text-md font-bold text-darkBlue">{order>0?order:''}</span>
            <span className="text-md font-bold text-darkBlue">{order>0?'.':''}</span>
            <h1 className="text-md font-bold text-darkBlue">{title&&title}</h1>
          </div>
          <div className="">
            <span className="text-red text-lg">{completion_time&&completion_time}</span>
          </div>
        </div>
      </div>
      <div className="w-full h-[0.5px] bg-red opacity-10"></div>
    </div>
  )
}
