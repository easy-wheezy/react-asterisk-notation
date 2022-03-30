import * as React from 'react'
import { NoteContextType, INote } from './@types/notes';
import { NoteContext } from './NoteContext'

export const AsteriskNotes = () => {
    const { notes } = React.useContext(NoteContext) as NoteContextType;
    return (
        <div>
            {notes.map((note: INote) => (
                <div key={note.key}>{note.description}</div>
            ))}
        </div>


    )
}
