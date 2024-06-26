import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"
import { Textfit } from 'react-textfit';

const Screen = () => {
  const { calc } = useContext(CalcContext);

  return (
    <Textfit className="screen" max={70}  mode="single" align="right">{calc.num ? calc.num : calc.res}</Textfit>
  )
}

export default Screen

// 