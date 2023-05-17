import "@fontsource/ubuntu-mono";

import {UserNavbar} from '../components/UserNavbar';
import {UserProfilCard} from '../components/UserProfilCard';

export default function UserHome () {
  return (
    <div className="body flex flex-col">
      <UserNavbar/>
      <div className="flex bg-blancsale w-screen h-auto px-8 py-4">
       <UserProfilCard/>
      </div>
    </div>
  );
}
