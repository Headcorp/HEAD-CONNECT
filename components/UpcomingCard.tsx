import React from 'react'
import google from "googleapis"
import Link from "next/link"

import { NoData } from './NoData'

export function UpcomingCard ({views, type}: {views: google.classroom_v1.Schema$Course[], type: string}) {
  return (
    <div>
        {
            views.length ?
            views.map((view) => (
                <Link key={view.id} href={`/${type}/${view.id}`}>
                    <div className="bg-white/40 mx-auto space-y-1 xl:space-y-4 rounded-xl p-2 text-center xl:w-[400px]">
                        <div className="bg-pink text-center p-2 rounded-xl mx-auto">
                            <h2 className="text-yellow font-bold text-xl xl:text-2xl">{`Theme: ${view.name}` }</h2>
                            <h2 className="text-yellow font-bold text-xl xl:text-2xl">Date: 15/06/2023</h2>
                        </div>
                        <h2 className="text-red font-bold text-2xl xl:text-3xl">Principal guest</h2>
                        <img src="../images/conf1.png" alt="" className="mx-auto" />
                        <div>
                            <h2 className="text-darkBlue font-bold text-2xl xl:text-3xl">Aliana Kodjo</h2>
                            <h3 className="text-darkBlue font-bold text-lg xl:text-xl">Data analyst</h3>
                        </div>
                        <button className="text-white px-4 py-3 text-xl xl:text-4xl font-bold rounded-xl btn">Read more</button>
                    </div>
                </Link>
            )) :
            <NoData/>
        }
    </div>
  )
}
