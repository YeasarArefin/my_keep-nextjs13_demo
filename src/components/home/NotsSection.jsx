/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-expressions */

'use client';

import fetcher from '@/utils/fetcher';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import NoteCard from './NoteCard';

export default function NotsSection() {
   const [notes, setNotes] = useState([]);

   const { data, isLoading } = useSWR('https://mykeeep.vercel.app/api/notes', fetcher);
   useEffect(() => {
      setNotes(data);
   }, [data]);

   const deleteNoteByID = async (_id) => {
      const { data, status } = await axios.delete(`http://localhost:3000/api/notes/${_id}`);
      if (status === 200) {
         setNotes(notes.filter((note) => note._id !== _id));
      }
   };

   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
         {isLoading
            ? [...Array(8)].map(() => (
                 <div className="w-full h-96 box flex flex-col justify-between p-5">
                    <div className="w-8/12 h-2 rounded-full opacity-10 animate-pulse bg-cyan-200" />
                    <div className="w-6/12 h-2 rounded-full opacity-10 animate-pulse bg-cyan-200" />
                    <div className="w-8/12 h-2 rounded-full opacity-10 animate-pulse bg-cyan-200" />
                    <div className="w-3/12 h-2 rounded-full opacity-10 animate-pulse bg-cyan-200" />
                    <div className="w-10/12 h-2 rounded-full opacity-10 animate-pulse bg-cyan-200" />
                    <div className="w-6/12 h-2 rounded-full opacity-10 animate-pulse bg-cyan-200" />
                    <div className="w-3/12 h-2 rounded-full opacity-10 animate-pulse bg-cyan-200" />
                 </div>
              ))
            : notes?.map((note) => (
                 <div className="flex justify-center items-center">
                    <NoteCard key={note.id} note={note} deleteNoteByID={deleteNoteByID} />
                 </div>
              ))}
      </div>
   );
}
