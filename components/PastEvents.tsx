import "@fontsource/ubuntu-mono";

import { Tab } from "@headlessui/react";
/*
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
*/

import { CurentView } from "./CurentView";
import { ListItem } from "./ListItem";
import { ListView } from "./ListView";

export function PastEvents() {
  /* const [isMobile, setIsMobile] = useState(false);
  const tempIsMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    setIsMobile(tempIsMobile);
  }, [tempIsMobile]);
*/
  return (
    <div className="body flex flex-col space-y-4 items-center justify-center w-screen">
      <div className="w-2/3 flex space-x-0">
        <input
          type="text"
          className="w-4/5 rounded-l-full p-4 text-xl font-semibold text-pink placeholder:text-pink border-4 border-pink bg-blancsale"
          placeholder="search"
        />
        <button className="w-1/5 rounded-r-full p-4 text-xl font-semibold text-pink placeholder:text-pink border-4 border-pink bg-blancsale flex items-center justify-center hover:bg-pink">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6043 16.4167H17.4522L17.0439 16.0229C17.9553 14.9641 18.6214 13.717 18.9945 12.3707C19.3676 11.0244 19.4386 9.61233 19.2022 8.23544C18.5168 4.18127 15.1335 0.943774 11.0501 0.447941C9.61458 0.266329 8.1565 0.415525 6.78747 0.884112C5.41844 1.3527 4.17475 2.12826 3.15157 3.15145C2.12838 4.17463 1.35282 5.41832 0.884234 6.78735C0.415647 8.15638 0.266451 9.61446 0.448063 11.05C0.943896 15.1334 4.1814 18.5167 8.23556 19.2021C9.61245 19.4384 11.0246 19.3675 12.3708 18.9944C13.7171 18.6212 14.9643 17.9552 16.0231 17.0438L16.4168 17.4521V18.6042L22.6147 24.8021C23.2126 25.4 24.1897 25.4 24.7876 24.8021C25.3856 24.2042 25.3856 23.2271 24.7876 22.6292L18.6043 16.4167ZM9.85431 16.4167C6.22306 16.4167 3.29181 13.4854 3.29181 9.85419C3.29181 6.22294 6.22306 3.29169 9.85431 3.29169C13.4856 3.29169 16.4168 6.22294 16.4168 9.85419C16.4168 13.4854 13.4856 16.4167 9.85431 16.4167Z"
              fill="url(#paint0_linear_278_64)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_278_64"
                x1="12.8046"
                y1="0.372925"
                x2="12.8046"
                y2="25.2505"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E8334E" />
                <stop offset="1" stop-color="#FBDB18" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>
      <div className="flex flex-col lg:flex-row space-x-4 w-full justify-center items-center lg:items-start">
        <Tab.Group>
          <div className="flex bg-blancsale w-1/4 flex-col">
            <Tab.List className="flex bg-blancsale lg:flex-col space-y-6 w-full justify-center items-center my-4">
              <Tab>
                <button className="btn border-2 sm:border-4 border-pink px-4 py-2 sm:px-6 sm:py-4 text-white font-bold text-lg sm:text-2xl rounded-xl">
                  Conferences
                </button>
              </Tab>

              <Tab>
                <button className="px-4 py-2 sm:px-6 sm:py-4 text-pink font-bold text-lg sm:text-2xl rounded-xl border-2 sm:border-4 border-pink">
                  workshop
                </button>
              </Tab>

              <Tab>
                <button className="px-4 py-2 sm:px-6 sm:py-4 text-pink font-bold text-lg sm:text-2xl rounded-xl border-2 sm:border-4 border-pink">
                  formations
                </button>
              </Tab>
            </Tab.List>
          </div>
          <Tab.Panels className="lg:w-3/4">
            <Tab.Panel className="w-full flex space-x-4 space-y-4 flex-col lg:flex-row justify-center items-center lg:items-start">
                <CurentView/>
                <ListView />
            </Tab.Panel>
            <Tab.Panel className="w-full flex space-x-4">
                <CurentView/>
                <ListItem />
            </Tab.Panel>
            <Tab.Panel className="w-full flex space-x-4">
                <CurentView/>
                <ListItem />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
