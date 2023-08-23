import google from "googleapis"
import moment from "moment"
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

import { NoData } from "./NoData"
import Image from "next/image";

export function GridView ({views, type}: {views: google.classroom_v1.Schema$Course[], type: string}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full mx-auto my-2">
        {
            views.length ?
            views.map((view) => (
                <Link href={`/${type}/${view.id}`}>
                    <OneView
                        key={view.id}
                        image={view.website_background_image_url}
                        name={`${view.name}`}
                        creationTime={view.write_date?.split(" ")}
                        id={view.id}
                        studentsCount={view.members_count}
                    />
                </Link>
            )) :
            <NoData/>
        }
    </div>
  )
}

export function OneView ({name, image, updateTime, creationTime, id, studentsCount}: google.classroom_v1.Schema$Course) {
    // const [studentsCount, setStudentsCount] = useState(0)
    // const getStudents = async (courseId: string) => {
    //     try {
    //       const {data} = await axios.get(`/api/classroom/courses/${courseId}/students`)
    //       setStudentsCount(data.length)
    //     } catch (error) {
          
    //     }
    //   }

    //   useEffect(() => {
    //     getStudents(`${id}`);
    //   }, []);

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
            <div className="my-2">
                <Image alt={`${name}`} width={1000} height={1000} src={`${process.env.NEXT_PUBLIC_IMAGE}${image}`} className="rounded-xl sm:rounded-2xl" />
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
