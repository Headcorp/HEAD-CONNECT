import "@fontsource/ubuntu-mono";

import { Tab } from "@headlessui/react";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { PastEvents } from "../components/PastEvents"
import { UngoingEvents } from "../components/UngoingEvents"
import { UpcomingEvents } from "../components/UpcomingEvents"

export function TimeTab() {
  const [isMobile, setIsMobile] = useState(false)
  const tempIsMobile = useMediaQuery({ maxWidth: 768 })
  const [activeButton, setActiveButton] = useState('past')

  useEffect(() => {
    setIsMobile(tempIsMobile);
  }, [tempIsMobile]);

  return (
    <div className="body flex flex-col space-y-2">
      <Tab.Group>
        <div className="flex bg-blancsale w-full space-x-6 items-center justify-center">
          <Tab.List className="flex bg-blancsale w-3/4 sm:w-1/2 items-center justify-between">
            <Tab
              className={`border-pink border px-4 py-2 sm:px-6 sm:py-4 text-pink font-semibold text-lg sm:text-2xl rounded-xl
              ${activeButton === 'past' ? 'text-white btn' : 'text-red'}`}
              onClick={() => setActiveButton('past')}>
                Past
            </Tab>

            <Tab
              className={`border-pink border px-4 py-2 sm:px-6 sm:py-4 text-pink font-semibold text-lg sm:text-2xl rounded-xl
              ${activeButton === 'ungoing' ? 'text-white btn' : 'text-red'}`}
              onClick={() => setActiveButton('ungoing')}>
                Ungoing
            </Tab>

            <Tab
              className={`border-pink border px-4 py-2 sm:px-6 sm:py-4 text-pink font-semibold text-lg sm:text-2xl rounded-xl
              ${activeButton === 'upcomings' ? 'text-white btn' : 'text-red'}`}
              onClick={() => setActiveButton('upcomings')}>
                Upcomings
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels className="mt-2">
          <Tab.Panel className="">
            <PastEvents/>
          </Tab.Panel>
          <Tab.Panel className="">
            <UngoingEvents/>
          </Tab.Panel>
          <Tab.Panel className="">
            <UpcomingEvents/>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
