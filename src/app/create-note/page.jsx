import TextEditor from '@/components/UI/TextEditor';
import { Lobster } from 'next/font/google';

const lobster = Lobster({ subsets: ['latin'], weight: '400' });

export default function page() {
   return (
      <div>
         <h1 className={`${lobster.className} text-center text-4xl font-extrabold mb-10`}>
            Create Note
         </h1>
         <div>
            <TextEditor />
         </div>
      </div>
   );
}
