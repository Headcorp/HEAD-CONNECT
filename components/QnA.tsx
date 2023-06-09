import React from 'react'

import { RatingCard } from './RatingCard'

export function QnA () {
  return (
    <div className="w-full sm:w-3/4 mx-auto space-y-4">
        <div className="flex flex-col space-y-2">
            <input type="search" placeholder="Search all course questions" className="w-full p-4 text-xl font-semibold text-pink placeholder:text-pink border-2 border-pink bg-blancsale/50" />
            <div className="flex flex-col sm:flex-row sm:items-end space-x-2 space-y-2">
                <div className="flex flex-col">
                    <span className="text-darkBlue font-bold text-xl">Filters:</span>
                    <select name="" id="" className="p-4 text-xl font-semibold text-pink placeholder:text-pink border-2 border-pink bg-blancsale/50">
                        <option value="">All lectures</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <span className="text-darkBlue font-bold text-xl">Sorted by:</span>
                    <select name="" id="" className="p-4 text-xl font-semibold text-pink placeholder:text-pink border-2 border-pink bg-blancsale/50">
                        <option value="">Sort by recommended</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                </div>
                <div>
                    <select name="" id="" className="p-4 text-xl font-semibold text-pink placeholder:text-pink border-2 border-pink bg-blancsale/50">
                        <option value="">Filter questions</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="space-y-4">
            <h1 className="text-darkBlue text-2xl font-bold">All questions in this course</h1>
            <div className="">
                <RatingCard />
                <div className="w-full h-[0.5px] bg-red opacity-10"></div>
                <RatingCard />
            </div>
        </div>
    </div>
  )
}
