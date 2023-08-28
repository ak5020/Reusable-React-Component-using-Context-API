// import React, { createContext } from "react"
import Accordion from "./components/Accordion"

// const FirstName = createContext()
// const { Provider } = FirstName
function App () {
  return (
    <div className="App">
      Reusable React Component
      {/* <Provider value={'Abbas'}> */}
      <div className="component-style">
        <Accordion title="Product Info" content='this is my product content' />
      </div>
      {/* </Provider> */}
    </div>
  )
}
export default App