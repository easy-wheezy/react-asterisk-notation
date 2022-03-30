import * as React from 'react'
import styles from './styles.module.css'
import { NoteContext } from './NoteContext'
import { useContext } from 'react'

export const AsteriskNotes = () => {
    const { notes, setNotes } = useContext(NoteContext);
  return (
      <>
        {notes && notes.map(note => {
            <div>{note.description}</div>
        })}
      </>
  )
}
