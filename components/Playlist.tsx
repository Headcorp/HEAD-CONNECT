import { useGlobalContext } from '@/states'
import React from 'react'

import { CurentView } from './CurentView'
import { ListView } from './ListView'

export function Playlist () {

  const {topics} = useGlobalContext()

  return (
    <div className="flex w-full sm:space-x-4 flex-col lg:flex-row space-y-4 items-center lg:items-start">
        <CurentView/>
        <ListView/>
    </div>
  )
}
