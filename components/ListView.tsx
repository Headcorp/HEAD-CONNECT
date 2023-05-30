import React from "react";

import { ListItem } from "./ListItem";

export function ListView () {
  return (
    <div className="flex flex-col w-full lg:w-1/3 space-y-4">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
    </div>
  )
}
