import * as React from 'react'
import { NoteContextType, INote } from './@types/notes';
import { NoteContext } from './NoteContext'

const star = "*";

export const AsteriskNotes = () => {
  const { notes } = React.useContext(NoteContext) as NoteContextType;
  return (
    <div>
      {notes.map((note: INote) => (
        <div key={note.key}>
          {star.repeat(
            notes.findIndex((object) => {
              return object.key === note.key;
            }) + 1
          )}
          {note.description}
        </div>
      ))}
    </div>
  );
};
