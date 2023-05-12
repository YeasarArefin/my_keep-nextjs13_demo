'use client';

import useAuth from '@/hooks/useAuth';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import { useState } from 'react';
import Button from './Button';

export default function TextEditor() {
   const [editorText, setEditorText] = useState('Adnan');
   const { user } = useAuth();

   const handleSaveNote = async () => {
      const note = { email: user.email, note: editorText };
      const { data } = await axios.post('/api/notes', note);
   };

   return (
      <div className="bg-white rounded-lg flex-col items-end gap-y-2">
         <div>
            <Editor
               apiKey="de8s7rzjll0zuyyptrwbt3z80vhqd5etmegigih2qiinx6n4"
               init={{
                  height: 600,
                  plugins: [
                     'image',
                     'media',
                     'lists',
                     'link',
                     'table',
                     'codesample',
                     'code',
                     'searchreplace',
                     'fullscreen',
                     'preview',
                  ],
                  toolbar:
                     'undo redo |' +
                     'bold italic backcolor forecolor | fontsizeselect | alignleft aligncenter ' +
                     'alignright alignjustify | bullist numlist outdent indent',

                  style_formats: [
                     {
                        title: 'Image Left',
                        selector: 'img',
                        styles: {
                           float: 'left',
                           margin: '0 10px 0 10px',
                        },
                     },
                     {
                        title: 'Image Right',
                        selector: 'img',
                        styles: {
                           float: 'right',
                           margin: '0 0 10px 10px',
                        },
                     },
                  ],
               }}
               onEditorChange={(text) => setEditorText(text)}
               // initialValue={about?.bio}
               // onKeyPress={() => setSaveDisabled(false)}
            />
         </div>
         <div className="p-2 text-end">
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, react/button-has-type */}
            <Button onClick={handleSaveNote} className="w-20">
               Save
            </Button>
         </div>
      </div>
   );
}
