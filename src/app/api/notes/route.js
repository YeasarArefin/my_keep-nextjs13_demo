import Notes from '@/models/note.model';
import dbConnect from '@/utils/dbConnect';
import { NextResponse } from 'next/server';

export async function GET(req) {
   try {
      await dbConnect();
      const notes = await Notes.find();
      return NextResponse.json(notes, {
         status: 200,
         headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
         },
      });
   } catch (error) {
      return NextResponse.json({ message: error }, { status: 500 });
   }
}

export async function POST(req) {
   try {
      const body = await req.json();
      console.log('🚀 ~ file: route.js:8 ~ POST ~ body:', body);
      await dbConnect();

      await Notes.create(body);

      return NextResponse.json(
         {
            message: 'Note created successfully!',
         },
         {
            status: 200,
         }
      );
   } catch (error) {
      return NextResponse.json({ message: error }, { status: 500 });
   }
}
