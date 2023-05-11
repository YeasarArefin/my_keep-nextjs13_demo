import Nav from '@/components/UI/Nav';
import AuthProvider from '@/context/AuthProvider';
import { Mulish } from 'next/font/google';
import './globals.css';

const mulish = Mulish({ subsets: ['latin'] });

export const metadata = {
   title: 'My Keep | Notes',
   description: 'Keep your daily notes',
};

export default function RootLayout({ children }) {
   return (
      <AuthProvider>
         <html lang="en">
            <body
               className={`${mulish.className} bg_image mt-[130px] relative h-[1500px] text-white`}
            >
               <Nav />
               <div className="absolute -top-[50px] lg:-top-[300px] xl:-top-[500px] w-full md:w-10/12 -z-20">
                  <img
                     className="rotate-[160deg] fixed w-full"
                     src="https://nextui.org/gradient-right-dark.svg"
                     alt="blur-effect"
                  />
               </div>
               <div className="container">{children}</div>
            </body>
         </html>
      </AuthProvider>
   );
}
