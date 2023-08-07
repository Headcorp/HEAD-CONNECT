import "@fontsource/ubuntu-mono";
import "@fontsource/yantramanav";

import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { UserNavbar } from "../components/UserNavbar";
import { UserNavbarMobile } from "../components/UserNavbarMobile";
import { Tabs } from "../components/Tab";
import { getSession } from "next-auth/react";

export default function UserHome() {
  const [isMobile, setIsMobile] = useState(false);
  const tempIsMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    setIsMobile(tempIsMobile);
  }, [tempIsMobile]);

  return (
    <div className="body">
      {isMobile ? <UserNavbarMobile /> : <UserNavbar />}
      {/* <div className="flex bg-blancsale w-screen h-auto px-8 py-4">
        {!isMobile ? <UserProfilCard /> : null}
      </div> */}
      
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { req } = context;
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: { destination: "/auth/login" },
    };
  }

  return {
    props: {},
  };
}
