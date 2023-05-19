import "@fontsource/ubuntu-mono";

import { TimeTab } from "../components/TimeTab";

export function UserHomeEvents() {
  return (
    <div className="body">
      <div className="flex bg-blancsale w-screen h-auto py-4">
        <div className="flex flex-col w-full space-y-6">
          <TimeTab />
        </div>
      </div>
    </div>
  );
}
