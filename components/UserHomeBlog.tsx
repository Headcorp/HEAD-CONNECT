import "@fontsource/ubuntu-mono";

import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { UserProfilCard } from "../components/UserProfilCard";
import { BlogPubCard } from "../components/BlogPubCard";

export function UserHomeBlog() {
  const [isMobile, setIsMobile] = useState(false);
  const tempIsMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    setIsMobile(tempIsMobile);
  }, [tempIsMobile]);

  return (
    <div className="body">
      <div className="flex bg-blancsale w-screen h-auto px-8 py-4">
        {!isMobile ? <UserProfilCard /> : null}
        <div className="flex flex-col space-y-6 items-center">
          <BlogPubCard />
          <BlogPubCard />
        </div>
      </div>
    </div>
  );
}
