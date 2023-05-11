'use client';

import { Lobster } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavInfo from './NavInfo';

const lobster = Lobster({ subsets: ['latin'], weight: '400' });

export default function Nav() {
   const pathname = usePathname();

   const navLinks = [
      {
         id: 1,
         name: 'Notes',
         href: '/',
      },
      {
         id: 2,
         name: 'Create',
         href: '/create-note',
      },
   ];

   return (
      <nav className=" p-2 fixed top-0 w-full z-40  bg-slate-50/60 backdrop-blur-[2px] transition-colors duration-500 dark:bg-[#0B1120]/80">
         <div className="flex items-center justify-between container">
            <Link href="/" className={`${lobster.className} text-4xl font-inter hidden sm:block `}>
               <div className="relative">
                  <div className="w-28 h-10 bg-sky-700 absolute opacity-90 blur-3xl" />
                  My keep
               </div>
            </Link>

            <div className="flex gap-x-5 items-center">
               {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                     <Link
                        key={link.id}
                        href={link.href}
                        className={`${
                           isActive ? 'text-cyan-300' : ''
                        } inline-flex items-center justify-center px-4 py-1 text-base font-medium leading-6 whitespace-no-wrap bg-[#1f2937] rounded-md shadow-sm focus:outline-none focus:shadow-none`}
                     >
                        {link.name}
                     </Link>
                  );
               })}
               <NavInfo />
            </div>
         </div>
      </nav>
   );
}
