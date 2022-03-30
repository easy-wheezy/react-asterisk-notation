import * as React from 'react'
import { NoteContext } from './NoteContext'

export const AsteriskNotes = () => {
    return (
        <NoteContext.Consumer>
            {value => value[0] && value[0].map(note => {
                <div>{note.description}</div>
            })}
        </NoteContext.Consumer>

    )
}
