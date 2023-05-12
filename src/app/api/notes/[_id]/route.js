import Notes from '@/models/note.model';
import dbConnect from '@/utils/dbConnect';
import { NextResponse } from 'next/server';

const headers = {
   'Access-Control-Allow-Origin': '*',
   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
   'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function GET(req, { params }) {
   try {
      await dbConnect();
      const { _id } = params;
      const notes = await Notes.find({ _id });
      return NextResponse.json(notes, {
         status: 200,
         headers,
      });
   } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
   }
}

export async function DELETE(req, { params }) {
   try {
      await dbConnect();
      const { _id } = params;
      console.log('🚀 ~ file: route.js:29 ~ DELETE ~ _id:', _id);
      await Notes.findByIdAndDelete(_id);
      return NextResponse.json({ status: 200, headers });
   } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
   }
}
