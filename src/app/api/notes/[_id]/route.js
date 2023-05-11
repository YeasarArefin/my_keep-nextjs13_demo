import Notes from '@/models/note.model';
import dbConnect from '@/utils/dbConnect';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
   try {
      await dbConnect();
      const { _id } = params;
      const notes = await Notes.find({ _id });
      return NextResponse.json(notes, { status: 200 });
   } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
   }
}

export async function DELETE(req, { params }) {
   try {
      await dbConnect();
      const { _id } = params;
      await Notes.deleteOne({ _id });
      return NextResponse.status(200).json({ status: 200 });
   } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
   }
}
