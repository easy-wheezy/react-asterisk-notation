import React from 'react'
//@ts-ignore
import {TextWithNote, AsteriskNotes, NoteProvider } from 'react-asterisk-notation'
import 'react-asterisk-notation/dist/index.css'

// const notes = {notes:[
// {
//   key: 'first',
//   description: 'this is the first label',
//   order: 1
// }]};

const textProps = {
  text: "Create React Library Example 😄",
  bold: false,
  italic: false,
  underline: false,
}

const App = () => {
  return (
    <>
      <NoteProvider>
        <TextWithNote {...textProps} />
        <AsteriskNotes />
      </NoteProvider>

    </>

  )

}

export default App
