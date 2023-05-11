'use client';

import moment from 'moment';
import Link from 'next/link';
import { AiOutlineDelete } from 'react-icons/ai';
import { FcCalendar, FcClock } from 'react-icons/fc';
import { FiEdit } from 'react-icons/fi';
/* eslint-disable react/no-danger */
export default function NoteCard({ note: noteData, deleteNoteByID }) {
   const { _id, email, note, createdAt, updatedAt } = noteData;

   const createTime = moment(createdAt).format('DD-YYYY-MM HH:mm:ss');
   const updateTime = moment(updatedAt).format('DD-YYYY-MM HH:mm:ss').split(' ')[1];

   return (
      <div className="w-full p-2 box">
         <div className="pb-2">
            <div className="flex gap-x-3 justify-end pr-3">
               <Link href="/notes/update">
                  <button
                     type="button"
                     className="bg-green-600 hover:bg-green-700 transition duration-300 rounded-full p-2 text-white text-lg "
                  >
                     <FiEdit />
                  </button>
               </Link>

               <button
                  type="button"
                  className="bg-red-600 hover:bg-red-700 transition duration-300 rounded-full p-2 text-white text-lg "
               >
                  <AiOutlineDelete />
               </button>
            </div>
         </div>

         <div className="overflow-scroll overflow-x-hidden h-72 w-full rounded-lg relative p-2">
            <div className="text-justify" dangerouslySetInnerHTML={{ __html: note }} />
         </div>

         <div className="flex items-center justify-between px-2 gap-x-3">
            <div className="flex gap-x-1 items-center">
               <FcCalendar className="text-sm" />
               <h1>{createTime}</h1>
            </div>

            <div className="flex gap-x-1 items-center">
               <FcClock className="text-sm" />
               <h1>{updateTime}</h1>
            </div>
         </div>
      </div>
   );
}
