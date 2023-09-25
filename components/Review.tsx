import React from 'react'

import { RatingCard } from './RatingCard'

export function Review () {
  return (
    <div className="w-full sm:w-2/3 lg:w-1/2 mx-auto my-4 space-y-4">
        <span className="text-darkBlue text-2xl font-bold text-start">Reviews</span>
        <div className="flex space-x-2">
            <input
              type="search"
              placeholder="Search reviews"
              className="w-3/4 p-4 text-xl font-semibold text-pink placeholder:text-pink border-2 border-pink bg-blancsale/50"
            />
            <select
              name=""
              id=""
              className="w-1/4 p-4 text-xl font-semibold text-pink placeholder:text-pink border-2 border-pink bg-blancsale/50"
            >
              <option value="">All ratings</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
        </div>
        {/* <div className="space-y-2">
          <RatingCard />
            <div className="w-full h-[0.5px] bg-red opacity-10"></div>
          <RatingCard />
            <div className="w-full h-[0.5px] bg-red opacity-10"></div>
          <RatingCard />
        </div> */}
    </div>
  )
}
