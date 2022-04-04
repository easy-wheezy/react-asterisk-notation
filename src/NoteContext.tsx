import * as React from "react";
import { useState } from "react";
import { NoteContextType, INote } from "./@types/notes";

export const NoteContext = React.createContext<NoteContextType | null>(null);

const NoteProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [notes, setNotes] = useState<INote[]>([]);

  const saveNote = (note: INote) => {
    const newNote: INote = {
      key: note.key,
      description: note.description
    };

    const keys = notes.map((note) => note.key);
    if (!keys.includes(newNote.key)) {
      notes.push(newNote);
    }

    setNotes([...notes]);
  };

  return (
    <NoteContext.Provider value={{ notes, saveNote }}>
      {" "}
      {children}{" "}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
