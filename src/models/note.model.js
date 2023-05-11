import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema(
   {
      email: {
         type: String,
         required: true,
      },
      note: {
         type: String,
         required: true,
      },
   },
   {
      timestamp: true,
   }
);

const Notes = mongoose.models.Notes || mongoose.model('Notes', noteSchema);

export default Notes;
