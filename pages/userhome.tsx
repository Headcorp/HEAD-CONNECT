import "@fontsource/ubuntu-mono";
import { Tab } from '@headlessui/react'
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { UserNavbar } from "../components/UserNavbar";
import { UserNavbarMobile } from "../components/UserNavbarMobile";
import { UserProfilCard } from "../components/UserProfilCard";
import { BlogPubCard } from "../components/BlogPubCard";
import { Dropdown  } from "../components/Dropdown";

export default function UserHome() {
  const [isMobile, setIsMobile] = useState(false);
  const tempIsMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    setIsMobile(tempIsMobile);
  }, [tempIsMobile]);

  return (
    <div className="body">
      {isMobile ? <UserNavbarMobile /> : <UserNavbar />}
      <div className="flex bg-blancsale w-screen h-auto px-8 py-4">
        {!isMobile ? <UserProfilCard /> : null}
        <div className="flex flex-col space-y-6">
          <BlogPubCard />
          <BlogPubCard />
          <BlogPubCard />
        </div>
      </div>
    </div>
  );
}
