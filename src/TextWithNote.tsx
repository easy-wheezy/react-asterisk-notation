import * as React from 'react'
import { NoteContext } from './NoteContext'
import { useContext, useEffect, useState } from 'react'
import { NoteContextType } from './@types/notes'

interface Props {
  id: string;
  text: string;
  description: string;
  bold: boolean;
  italic: boolean;
  underline: boolean;
}
const star = "*";

export const TextWithNote = ({ id, text, description }: Props) => {
  const { notes, saveNote } = useContext(NoteContext) as NoteContextType;
  const [stars, setStarts] = useState("");
  useEffect(() => {
    saveNote({ key: id, description: description });
    const index = notes.findIndex((object) => {
      return object.key === id;
    });
    setStarts(star.repeat(index + 1));
  }, [id, text]);
  return (
      <div>
        <span>Example Component: {text}</span>
        <span>{stars}</span>
      </div>
  );
};
