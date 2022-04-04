import React from 'react'
//@ts-ignore
import {TextWithNote, AsteriskNotes, NoteProvider } from 'react-asterisk-notation'
import 'react-asterisk-notation/dist/index.css'


const textProps = {
  id: "one",
  text: "Create React Library Example 😄",
  description: "This is a long description about one",
  bold: false,
  italic: false,
  underline: false
};
const textProps2 = {
  id: "two",
  text: "Create React Library Example 2 😄",
  description: "This is a long description about two",
  bold: false,
  italic: false,
  underline: false
};
const textProps3 = {
  id: "three",
  text: "Create React Library Example 3😄",
  description: "This is a long description about three",
  bold: false,
  italic: false,
  underline: false
};


const App = () => {
  return (
    <>
      <NoteProvider>
      <TextWithNote {...textProps} />
        <TextWithNote {...textProps} />
        <TextWithNote {...textProps2} />
        <TextWithNote {...textProps} />
        <TextWithNote {...textProps3} />
        <hr />
        <span>look at all the labels above</span>
        <br />
        <span>look at all the descriptions of the labels below</span>
        <hr />
        <AsteriskNotes />
      </NoteProvider>

    </>

  )

}

export default App
