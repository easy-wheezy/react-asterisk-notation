import React from "react";

export const notes = [
    {
      key: 'first',
      description: 'this is the first label',
      order: 1
    },
    {
      key: 'second',
      description: 'this is the second label',
      order: 2
    },
];
interface noteProps {
  key: string
  description: string
  order: number
}

  
  export const NoteContext = React.createContext({
    notes, // default value
    setNotes: (note: noteProps) => {note},
  });