import * as React from 'react'
import styles from './styles.module.css'
// import { NoteContext } from './NoteContext'
// import { useContext } from 'react'
// import { NoteContextType } from './@types/notes'

interface Props {
  text: string
  bold: boolean
  italic: boolean
  underline: boolean
}

export const TextWithNote = ({ text }: Props) => {
  //const { saveNote } = useContext(NoteContext) as NoteContextType;
  //saveNote( { key:'id', description:text });
  return <div className={styles.test}>Example Component: {text}</div>
}
