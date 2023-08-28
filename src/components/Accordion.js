import { createContext, useContext } from "react"
import useToggle from "./useToggle"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"
// create ContextAPI
const AccordionContext = createContext()
const { Provider } = AccordionContext
export default function Accordion ( { title, content } ) {
  const { status: expand, toggleStatus: toggleExpand } = useToggle()
  const value = {
    expand,
    toggleExpand
  }
  return (
    <Provider value={value}>
      <div className="accordion">
        <AccordionHeader title={title} />
        <AccordionContent content={content} />
      </div>
    </Provider>
  )
}

const AccordionHeader = ( props ) => {
  const { title } = props
  const { expand, toggleExpand } = useContext( AccordionContext )
  return (
    <button onClick={toggleExpand}>{title} <span>{expand ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}</span></button>
  )
}

const AccordionContent = ( props ) => {
  const { content } = props
  const { expand } = useContext( AccordionContext )
  return (
    <div>{expand ? content : ''}</div>
  )
}