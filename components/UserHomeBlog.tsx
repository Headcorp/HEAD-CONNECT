import "@fontsource/ubuntu-mono";

import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { UserProfilCard } from "../components/UserProfilCard";
import { BlogPubCard } from "../components/BlogPubCard";

export function UserHomeBlog() {
  const [isMedium, setisMedium] = useState(false);
  const tempisMedium = useMediaQuery({ maxWidth: 1023 });

  useEffect(() => {
    setisMedium(tempisMedium);
  }, [tempisMedium]);

  return (
    <div className="body">
      <div className="flex bg-blancsale w-screen h-auto px-8 py-4">
        {!isMedium && <UserProfilCard />}
        <div className="flex flex-col space-y-6 items-center">
          <BlogPubCard />
          <BlogPubCard />
        </div>
      </div>
    </div>
  );
}
