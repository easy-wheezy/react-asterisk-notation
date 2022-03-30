import * as React from 'react'
import { NoteContext } from './NoteContext'
import { useContext } from 'react'

export const AsteriskNotes = () => {
    const { notes } = useContext(NoteContext);
  return (
      <>
        {notes && notes.map(note => {
            <div>{note.description}</div>
        })}
      </>
  )
}
