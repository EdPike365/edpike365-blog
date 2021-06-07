import React, { useContext } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { SHGStyleContext } from "../contexts/SHG_Context"
import MoonIconSolid from "../icons/MoonIconSolid"
import SunIconSolid from "../icons/SunIconSolid"
import {isSSR} from "../utils/HelperFunctions"

export const StyleSummary = () => {
  const { SHGModel } = useContext(SHGStyleContext)
  const model = SHGModel.model
  const styles = isSSR() ? [] : model.styles
  return (
    <div>
      <h5
        css={css`
          margin-bottom: 0.25rem;
        `}
      >
        SHG Style Model State
      </h5>
      idPrefix: "{model.idPrefix}".
      <br />
      Styles: {styles.length}
      <table>
        <thead>
          <tr>
            <th>Display Name</th>
            <th>Uses</th>
            <th>Enabled</th>
            <th>FileName</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(styles).map(style => (
            <tr key={style.dataset.filename}>
              <td>{style.dataset.displayname}</td>
              <td>{style.dataset.use}</td>
              <td>{style.disabled ? "no" : "yes"}</td>
              <td>{style.dataset.filename}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const StyleSelector = () => {
  const { SHGModel } = useContext(SHGStyleContext)
  const model = SHGModel.model

  function handleChange(e) {
    if (!isSSR()) {
      model.setSHGStyleByID(e.target.value)
    }
  }

  function getSelectedStyleID() {
    let lastEnabledStyle = null
    if (!isSSR()) {
      lastEnabledStyle = model.getLastEnabledOptionalStyle()
    }

    let selectedStyleID = ""
    if (lastEnabledStyle) selectedStyleID = lastEnabledStyle.id

    return selectedStyleID
  }

  const selectedStyleID = getSelectedStyleID()

  const styleOptions = []
  let styleArray = []
  // this node array is not iterable, has to be converted to normal array
  if (!isSSR()) {
    styleArray = Array.from(model.getOptionalStyles())
  }
  for (var i = 0; i < styleArray.length; i++) {
    const styleEl = styleArray[i]
    const thisOption = {
      key: styleEl.dataset.key,
      label: styleEl.dataset.displayname,
      value: styleEl.id,
    }
    if (styleEl.id === selectedStyleID) {
      thisOption.selected = "selected"
    }

    styleOptions.push(thisOption)
  }
  //Using "selected" above makes React poop a big red warning, but only in dev
  const options = styleOptions.map(option => {
//       selected={option.selected}
    return (
      <option
        key={option.value}
        value={option.value}
      >
        {option.label}
      </option>
    )
  })

  //    <select onChange={handleChange} value={selectedStyleID} >
  return <select onChange={handleChange} value={selectedStyleID} >{options}</select>
}

export const DarkModeButton = styled.button`
  display: ${props => (props.hide ? "none" : "inline-flex")};
  align-items: center;
  justify-content: center;

  padding: 5px;
  margin: 5px 5px;
  width: 30px;
  height: 30px;

  border: none;
  cursor: pointer;
  background-color: var(--color-background-paper);

  color: var(--color-text-secondary);
  white-space: pre-wrap;
`

export const DarkModeToggle = ({ hide }) => {
  const { SHGModel } = useContext(SHGStyleContext)
  const model = SHGModel.model

  const isDark = () => {
    if (isSSR()) {
      return false
    } else {
      return model.isUsingADarkStyle()
    }
  }

  const shouldNotDisplayYet = () => {
    const res = isSSR() || model === null
    return res
  }

  const handleClick = () => {
    if (!isSSR()) model.toggleDarkStyle()
  }

  //  { isDark() ? "☼ " : "☽ "}
  let iconToRender
  if (shouldNotDisplayYet()) {
    iconToRender = null
  } else {
    if (isDark()) {
      iconToRender = <SunIconSolid />
    } else {
      iconToRender = <MoonIconSolid />
    }
  }

  return (
    <DarkModeButton onClick={handleClick} hide={hide}>
      {iconToRender}
    </DarkModeButton>
  )
}

export const PrefersDarkMode = () => {
  const { SHGModel } = useContext(SHGStyleContext)
  const model = SHGModel.model

  return (
    <span>
      Prefers Dark Mode ={" "}
      {!isSSR() && model.darkQuery.matches ? "true" : "false"}.
    </span>
  )
}
