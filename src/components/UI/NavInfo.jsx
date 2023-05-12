'use client';

import useAuth from '@/hooks/useAuth';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';

export default function NavInfo() {
   const { user, googleSignIn, leaveAccount, loading } = useAuth();

   if (loading) {
      return <h1>loading...</h1>;
   }

   return (
      <div className="flex">
         {!user.email ? (
            <button type="button" onClick={googleSignIn}>
               <FcGoogle className="text-3xl" />
            </button>
         ) : (
            <div className="flex gap-x-5">
               <div className="relative">
                  <div className="w-28 h-10 bg-sky-700 absolute opacity-1 blur-3xl" />
                  <Image
                     src={user?.photoURL}
                     width={50}
                     height={50}
                     alt="user"
                     className="rounded-full border-[3px]"
                  />
               </div>
               <button className="text-sm" type="button" onClick={leaveAccount}>
                  Sign Out
               </button>
            </div>
         )}
      </div>
   );
}
