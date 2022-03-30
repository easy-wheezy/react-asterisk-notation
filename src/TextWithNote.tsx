import * as React from 'react'
import styles from './styles.module.css'
import { NoteContext } from './NoteContext'
import { useContext } from 'react'

interface Props {
  text: string
  bold: boolean
  italic: boolean
  underline: boolean
}

export const TextWithNote = ({ text }: Props) => {
  const { setNotes } = useContext(NoteContext);
  setNotes({key:'id', description:text, order: 1 })
  return <div className={styles.test}>Example Component: {text}</div>
}
