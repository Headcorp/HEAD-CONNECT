import React from 'react'

export function Notes () {
  return (
    <div className="space-y-4 mx-auto my-4 w-full sm:w-3/4">
        <input type="text" placeholder="Create a new note" className="w-full p-4 text-xl font-semibold text-pink placeholder:text-pink border-2 border-pink bg-blancsale/50" />
        <div className="flex space-x-2 mb-8">
          <select name="" id="" className="w-1/4 p-4 text-xl font-semibold text-pink placeholder:text-pink border-2 border-pink bg-blancsale/50">
              <option value="">All lectures</option>
              <option value="">2</option>
              <option value="">3</option>
          </select>
          <select name="" id="" className="w-1/4 p-4 text-xl font-semibold text-pink placeholder:text-pink border-2 border-pink bg-blancsale/50">
              <option value="">Sorted by most recent</option>
              <option value="">Sorted by least recent</option>
          </select>
        </div>
        <div className="w-full m-4 sm:m-8 md:m-16">
          <span className="text-md mx-auto text-darkBlue">
            Click the "Create a new note" box, the "+" button to make your first note.
          </span>
        </div>
    </div>
  );
}
