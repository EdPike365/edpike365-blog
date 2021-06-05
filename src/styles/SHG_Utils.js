import * as React from "react"
import { minifyCSSString, minifyJSString, makeRandomNumberKey } from "../utils/HelperFunctions"

export const getSHGConfigFromFile = fs => {

  let rawData = null
  try {
    rawData = fs.readFileSync("./src/styles/SHG_Config.json")
    fs.close
  } catch (err) {
    console.error("SHG_Utils getSHGConfigFromFile: " + err)
    fs.close
    throw (err)
  }

  const SHGConfig = JSON.parse(rawData) //one op per line
  return SHGConfig

}

export const getSHGStyleElements = (SHGConfig, fs) => {

  const styleElements = []
  // read the config content, then create a <style> element for each style config
  // one big loop to minimize RAM usage on SSR
  SHGConfig.styleElements.styles.forEach(styleConfig => {
    const styleDef = getDefFromConfig(styleConfig, SHGConfig.stylesFolder, fs)
    const styleElement = getElementFromDef(styleDef, SHGConfig.minifyCSS) //one op per line
    styleElements.push(styleElement)
  })
  return { styleElements : styleElements }
}

const getDefFromConfig = (styleConfig, stylesFolder, fs) => {

  const filePath = stylesFolder + styleConfig["data-filename"]
  console.log("SHG_Utils.getDefFromConfig(): Loading css file: " + filePath)

  let cssString = ""
  try {
    cssString = fs.readFileSync(filePath, "utf-8")
    fs.close
  } catch (err) {
    console.error(
      "SHG_Utils.getDefFromConfig(): Could not find css file " + filePath + ". Check json config file."
    )
    console.error(err)
    fs.close
    throw(err)
  }

  styleConfig.content = cssString
  return styleConfig
}

const getElementFromDef = (styleDef, minifyCSS) => {
  // Having to use styleDef["data-xyz"] because field names have dashes.
  // They have dashes because they are non-standard attributes and React wont render theme
  // unless they are prefixed with "data-"
  // The key attr keeps React happy, React makes it disappear at render time.
  // The data-key is to be able to pass it in to the on page element so we can look it up for debug
  // The dangerouslySetInnerHTML is there, instead of {content}, because React escapes the " in your CSS (HTML) into &quote, for security reasons(?)
  const myKey = makeRandomNumberKey()
  
  let content = styleDef.content
  //TODO! implement minfication, the method below does not work, need a library
  //if(true) content = minifyCSSString(content)

  return (
    <style
      data-filename={styleDef["data-filename"]}
      data-displayname={styleDef["data-displayname"]}
      data-use={styleDef["data-use"]}
      data-key={myKey}
      key={myKey}
      id={styleDef.id}
      title={styleDef.title}
      type={styleDef.type}
      dangerouslySetInnerHTML={{__html: content}}
    />

  )
}

export const getSHGPageFunction = (clientJSFilePath, fs, minifyJS) => {

  let jsString = null
  try {
    jsString = fs.readFileSync(clientJSFilePath, "utf-8")
    fs.close
  } catch (err) {
    console.error("gatsby-ssr.js getSHGPageFunction(): " + err)
    fs.close
    throw(err)
  }

  if(minifyJS){
    jsString = minifyJSString(jsString)
  } 

  function createDangerMarkup(jsString) {
    return { __html: jsString }
  }

  // key attr to suppress React warning
  return <script key={makeRandomNumberKey} dangerouslySetInnerHTML={createDangerMarkup(jsString)} />
}
