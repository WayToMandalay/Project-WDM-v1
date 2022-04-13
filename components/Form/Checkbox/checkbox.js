import React, {useEffect, useState} from "react";
import clsx from "clsx";

const Checkbox = ({value = false}) => {
  const [checked, setChecked] = useState(value)

  const toggleBox = () => {
    setChecked(!checked)
  }

  return (
    <div className={clsx('checkboxWrapper')} onClick={toggleBox}>
        <div className={clsx('checkboxValue', checked ? 'checkboxValueChecked' : '')}/>
        <div className={clsx('checkboxLabel')}>I agree to the processing of my personal data</div>
    </div>
  )
}

export default Checkbox
