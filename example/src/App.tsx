import React, { useState } from 'react'
//@ts-ignore
import { TextWithNote, AsteriskNotes, NoteContext } from 'react-asterisk-notation'
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
  const [note, setNote] = useState(null);
  return (
    <>
      <NoteContext.Provider value={[note, setNote]}>
        <TextWithNote {...textProps} />
        <TextWithNote {...textProps} />
        <TextWithNote {...textProps} />
        <AsteriskNotes />
      </NoteContext.Provider>

    </>

  )

}

export default App
