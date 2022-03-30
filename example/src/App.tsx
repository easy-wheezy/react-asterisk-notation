import React from 'react'

import { TextWithNote } from 'react-asterisk-notation'
import 'react-asterisk-notation/dist/index.css'

const textProps ={
  text:"Create React Library Example 😄",
  bold :false,
  italic : false,
  underline : false,
}
const App = () => {
  return <TextWithNote {...textProps} />
}

export default App
