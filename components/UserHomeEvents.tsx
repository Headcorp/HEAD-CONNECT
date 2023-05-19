import "@fontsource/ubuntu-mono";

import { TimeTab } from "../components/TimeTab";

export function UserHomeEvents() {
  return (
    <div className="body">
      <div className="flex bg-blancsale w-screen h-auto px-8 py-4">
        <div className="flex flex-col space-y-6">
          <TimeTab />
        </div>
      </div>
    </div>
  );
}
