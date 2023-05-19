import "@fontsource/ubuntu-mono";

import { Tab } from "@headlessui/react";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { UserNavbar } from "../components/UserNavbar";
import { UserNavbarMobile } from "../components/UserNavbarMobile";
import { UserProfilCard } from "../components/UserProfilCard";
import { BlogPubCard } from "../components/BlogPubCard";
import { PastEvents } from "../components/PastEvents";
import { UngoingEvents } from "../components/UngoingEvents";
import { UpcomingEvents } from "../components/UpcomingEvents";

export function TimeTab() {
  const [isMobile, setIsMobile] = useState(false);
  const tempIsMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    setIsMobile(tempIsMobile);
  }, [tempIsMobile]);

  return (
    <div className="body flex flex-col space-y-2">
      <Tab.Group>
        <div className="flex bg-blancsale w-full space-x-6 items-center justify-center">
          <Tab.List className="flex bg-blancsale w-3/4 sm:w-1/2 items-center justify-between">
            <Tab>
              <button className="btn border-2 sm:border-4 border-pink px-4 py-2 sm:px-6 sm:py-4 text-white font-bold text-lg sm:text-2xl rounded-xl">
                Past
              </button>
            </Tab>

            <Tab>
              <button className="px-4 py-2 sm:px-6 sm:py-4 text-pink font-bold text-lg sm:text-2xl rounded-xl border-2 sm:border-4 border-pink">
                Ungoing
              </button>
            </Tab>

            <Tab>
              <button className="px-4 py-2 sm:px-6 sm:py-4 text-pink font-bold text-lg sm:text-2xl rounded-xl border-2 sm:border-4 border-pink">
                Upcomings
              </button>
            </Tab>
          </Tab.List>
        </div>
        <hr className="border-1 border-pink w-full" />
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
