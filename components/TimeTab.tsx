import "@fontsource/ubuntu-mono";
import { Tab } from "@headlessui/react";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { UserNavbar } from "../components/UserNavbar";
import { UserNavbarMobile } from "../components/UserNavbarMobile";
import { UserProfilCard } from "../components/UserProfilCard";
import { BlogPubCard } from "../components/BlogPubCard";

export function TimeTab() {
  const [isMobile, setIsMobile] = useState(false);
  const tempIsMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    setIsMobile(tempIsMobile);
  }, [tempIsMobile]);

  return (
    <div className="body flex flex-col space-y-2">
      <Tab.Group>
        <div className="flex bg-blancsale w-screen space-x-6 items-center justify-center">
          <Tab.List className="flex bg-blancsale w-screen space-x-6 items-center justify-center">
            <Tab>
              <button className="btn px-8 py-4 text-white font-bold text-2xl rounded-xl">
                Past
              </button>
            </Tab>

            <Tab>
              <button className="px-8 py-4 text-pink font-bold text-2xl rounded-xl border-4 border-pink">
                Ungoing
              </button>
            </Tab>

            <Tab>
              <button className="px-8 py-4 text-pink font-bold text-2xl rounded-xl border-4 border-pink">
                Upcomings
              </button>
            </Tab>
          </Tab.List>
        </div>
        <hr className="border-2 border-pink w-full"/>
        <Tab.Panels className="mt-2">
          <Tab.Panel className="">ok</Tab.Panel>
          <Tab.Panel className="">1</Tab.Panel>
          <Tab.Panel className="">2</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
