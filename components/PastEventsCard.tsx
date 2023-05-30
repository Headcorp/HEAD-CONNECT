import React from 'react'
import google from "googleapis"
import Link from "next/link"

import { NoData } from './NoData'

export function PastEventsCard ({views, type}: {views: google.classroom_v1.Schema$Course[], type: string}) {
  return (
    <div>
        {
            views.length ?
            views.map((view) => (
                <Link href={`/${type}/${view.id}`}>
                    <div className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded bg-center bg-no-repeat bg-cover mx-auto"
                        style={{ backgroundImage: `url(../images/intersect.png)`, paddingTop: `120px`, paddingLeft: `40px`}}>
                        <button className="text-xl text-yellow py-2 px-4 rounded-xl font-bold bg-red btn3 xl:text-3xl">
                            {view.name}
                        </button>
                    </div>
                </Link>
            )) :
            <NoData/>
        }
    </div>
  )
}
