import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
  bold: boolean
  italic: boolean
  underline: boolean
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
