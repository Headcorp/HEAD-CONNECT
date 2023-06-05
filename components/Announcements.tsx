import React from 'react'

import { RatingCard } from './RatingCard'

export function Announcements() {
  return (
    <div className="w-1/2 mx-auto my-4 space-y-2">
        <RatingCard />
        <div className="w-full h-[0.5px] bg-red opacity-10"></div>
        <RatingCard />
    </div>
  )
}
