import React from "react"
import { NavContextProvider } from "./src/contexts/NavContext"

//import dotenv from "dotenv"
//dotenv.config( {path: `.env.${process.env.NODE_ENV}`,} )
/*
export const wrapRootElement = props => {
  return (
    <NavContextWrapper {...props} />
  )
}
*/
// wrapPageElement passes in "props"(props for the current page element) and "element" (the current page element).
// wrapRootElement only passes in arg "element", and it is the gatsby Root element

export const wrapRootElement = ({ element }) => {
  return (
    <NavContextProvider >{element}</NavContextProvider>
  )
}

