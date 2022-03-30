import * as React from 'react';
import { NoteContextType, INote } from './@types/notes';

export const NoteContext = React.createContext<NoteContextType | null>(null);

const NoteProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [notes, setNotes] = React.useState<INote[]>([
    {
      key: 'post 1',
      description: 'this is a description',
    },
    {
      key: 'post 2',
      description: 'this is another description',
    },
  ]);
  const saveNote = (note: INote) => {
    const newNode: INote = {
      key: note.key,
      description: note.description,
    };
    setNotes([...notes, newNode]);
  };

  return <NoteContext.Provider value={{ notes, saveNote }}> {children} </NoteContext.Provider>;
};

export default NoteProvider;