import React from 'react'

export default function TextAreaRow({  name, value, handleChange, labelText}) {
  return(
    <div className="form-row text-form-area">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <textarea name={name} cols="60" rows="10" value={value}  onChange={handleChange} className="form-textarea">

      </textarea>
      <span style={{ fontStyle: "italic", color: 'grey'}}>Please add '*' in front of the individual requirement.</span>
    </div>
  )
}
