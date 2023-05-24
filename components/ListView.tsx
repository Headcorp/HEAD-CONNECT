import React from "react";

import { ListItem } from "./ListItem";

export function ListView () {
  return (
    <div className="flex flex-col w-full sm:w-1/2 lg:w-1/3 space-y-4">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
    </div>
  )
}
