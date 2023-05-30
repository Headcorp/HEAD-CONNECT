import google from "googleapis"
import moment from "moment"
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

import { NoData } from "./NoData"

export function GridView ({views, type}: {views: google.classroom_v1.Schema$Course[], type: string}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
        {
            views.length ? 
            views.map((view) => (
                <Link href={`/${type}/${view.id}`}>
                    <OneView key={view.id} name={`${view.name}`} creationTime={view.creationTime} id={view.id} />
                </Link>
            )) :
            <NoData/>
        }
    </div>
  )
}

export function OneView ({name, updateTime, creationTime, id}: google.classroom_v1.Schema$Course) {
    const [studentsCount, setStudentsCount] = useState(0)
    const getStudents = async (courseId: string) => {
        try {
          const {data} = await axios.get(`/api/classroom/courses/${courseId}/students`)
          setStudentsCount(data.length)
        } catch (error) {
          
        }
      }

      useEffect(() => {
        getStudents(`${id}`);
      }, []);

    const timeDifference = (updateTime: string) => {
        console.log(updateTime)
        const units: moment.unitOfTime.Diff[] = ['year', 'month', 'day', 'hour', 'minute', 'second']
        let timeDiff = ''
        for (let index = 0; index < units.length; index++) {
            const unit = units[index];
            const diff = moment().diff(updateTime, unit)
            if(diff){
                const unitString = diff > 1 ? unit + 's' : unit
                timeDiff = moment().diff(updateTime, unit) + ' ' + unitString
                break
            }
        }
        return timeDiff
    }

    return (
        <div className="w-[90%] mx-auto sm:space-y-1">
            <div className="">
                <img src="../images/test.jpg" className="rounded-xl sm:rounded-2xl" />
            </div>
            <h1 className="text-2xl text-darkBlue font-bold">{name}</h1>
            <div className="flex space-x-2">
                <span className="text-xl opacity-90 text-darkBlue">{studentsCount} Participants</span>
                <span className="text-xl opacity-90 text-darkBlue">.</span>
                <span className="text-xl opacity-90 text-darkBlue">{`Il y'a ${timeDifference(`${creationTime}`)}`}</span>
            </div>
        </div>
    )
}