import { useContext } from "react";
import { CalcContext } from '../context/CalcContext'

const getStyleName = btn => {
  const className = {
    '=': 'opt',
    'x': 'opt',
    '-': 'opt',
    '+': 'opt',
    '/': 'opt',
    '0': 'zeros',
    '1': 'num',
    '2': 'num',
    '3': 'num',
    '4': 'num',
    '5': 'num',
    '6': 'num',
    '7': 'num',
    '8': 'num',
    '9': 'num',
    '10': 'num',

  }
  return className[btn]
}

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);

  // User click comma
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
    });
  }
  // User click C
  const resetClick = () => {
    setCalc({ sign: '', num: 0, res: 0 })
  }
  // User click number
  const handleClickButton = () => {
    const numberString = value.toString()

    let numberValue;
    if(numberString === '0' && calc.num === 0) {
      numberValue = "0"
    }
    else if (calc.num.toString().includes('e')) {
      numberValue = `${calc.num}${numberString}`;
    }
     else {
      numberValue = Number(calc.num + numberString)
    }

    setCalc({
      ...calc,
      num: numberValue
    })
  }
  // User click operation
  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0
    })
  }
  // User click equals
  const equalsClick = () => {
    if(calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          '+': (a, b) => a + b,
          '-': (a, b) => a - b,
          'x': (a, b) => a * b,
          '/': (a, b) => a / b,
        }
        return result[sign](a, b);
      }
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: '',
        num: 0
      })
    }
  }
  // User click persen
  const persenClick = () => {
    setCalc({
      num: (calc.num / 100),
      res: (calc.res / 100),
      sign: ''
    })
  }
  // User click invert button
  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: ''
    })
  }


// User click Cosh
const coshClick = () => {
  setCalc({
    ...calc,
    num: Math.cosh(calc.num),
    sign: '',
    res: calc.res
  });
}


// User click Tanh
const tanhClick = () => {
  setCalc({
    ...calc,
    num: Math.tanh(calc.num),
    sign: '',
    res: calc.res
  });
}

const tanClick = () => {
  setCalc({
    ...calc,
    num: Math.tan(calc.num),
    sign: '', // Reset operation sign if necessary
    res: calc.res // Keep result unchanged
  });
}


  // User click Rand
const randClick = () => {
  setCalc({
    ...calc,
    num: Math.random(),
    sign: '',
    res: calc.res
  });
}

// User click Pi
const piClick = () => {
  setCalc({
    ...calc,
    num: Math.PI,
    sign: '',
    res: calc.res
  });
}

// User click Sinh
const sinhClick = () => {
  setCalc({
    ...calc,
    num: Math.sinh(calc.num),
    sign: '',
    res: calc.res
  });
}

// User click EE
const eeClick = () => {
  if (!calc.num.toString().includes('e')) {
    setCalc({
      ...calc,
      num: `${calc.num}e`,
      sign: '',
      res: calc.res
    });
  }
}


// User click e
const eClick = () => {
  setCalc({
    ...calc,
    num: Math.E,
    sign: '',
    res: calc.res
  });
}

// User click cosine (cos) button
const cosClick = () => {
  setCalc({
    ...calc,
    num: Math.cos(calc.num),
    sign: '', // Reset operation sign if necessary
    res: calc.res // Keep result unchanged
  });
}


// User click sine (sin) button
const sinClick = () => {
  setCalc({
    ...calc,
    num: Math.sin(calc.num),
    sign: '', // Reset operation sign if necessary
    res: calc.res // Keep result unchanged
  });
}

  // User click left parenthesis ( bracket )
  const leftParenthesisClick = () => {
    setCalc({
      ...calc,
      num: calc.num === 0 ? '(' : calc.num + '(',
      sign: '', // Reset operation sign if necessary
      res: calc.res // Keep result unchanged
    });
  }


    // User click right parenthesis ( bracket )
    const rightParenthesisClick = () => {
      setCalc({
        ...calc,
        num: calc.num === 0 ? ')' : calc.num + ')',
        sign: '', // Reset operation sign if necessary
        res: calc.res // Keep result unchanged
      });
    }


     // User click toggle secondary function button (2nd)
  const toggleSecondaryClick = () => {
    setCalc({
      ...calc,
      num: calc.num,
      sign: calc.sign,
      res: calc.res,
      isSecondary: !calc.isSecondary // Toggle isSecondary flag
    });
  }


   // User click square (x²) button
   const squareClick = () => {
    if (calc.isSecondary) {
      setCalc({
        ...calc,
        num: Math.pow(calc.num, 3), // Cube the current number
        sign: '',
        res: calc.res
      });
    } else {
      setCalc({
        ...calc,
        num: Math.pow(calc.num, 2), // Square the current number
        sign: '',
        res: calc.res
      });
    }
  }
     // User click square (x²) button
     const cubeClick = () => {

        setCalc({
          ...calc,
          num: Math.pow(calc.num, 3), // Cube the current number
          sign: '',
          res: calc.res
        });
      
    }
 
    
      // User click MC (Clears memory)
  const clearMemory = () => {
    setCalc({
      ...calc,
      memory: 0 // Reset memory to 0
    });
  }

  // User click M+ (Adds current value to memory)
  const addToMemory = () => {
    setCalc({
      ...calc,
      memory: calc.memory + calc.num // Add current value to memory
    });
  }

  // User click M- (Subtracts current value from memory)
  const subtractFromMemory = () => {
    setCalc({
      ...calc,
      memory: calc.memory - calc.num // Subtract current value from memory
    });
  }

  // User click MR (Recalls value stored in memory)
  const recallMemory = () => {
    setCalc({
      ...calc,
      num: calc.memory // Set current display value to memory value
    });
  }



   // User click xʸ (Raises the current number to the power of y)
   const powerClick = () => {
    setCalc({
      ...calc,
      num: Math.pow(calc.num, calc.res),
      sign: '', // Reset operation sign if necessary
      res: 0 // Reset the result to 0 after calculation
    });
  }

  // User click eˣ (Calculates e raised to the power of the current number)
  const ePowerClick = () => {
    setCalc({
      ...calc,
      num: Math.exp(calc.num),
      sign: '', // Reset operation sign if necessary
      res: calc.res // Keep result unchanged
    });
  }

  // User click 10ˣ (Calculates 10 raised to the power of the current number)
  const tenPowerClick = () => {
    setCalc({
      ...calc,
      num: Math.pow(10, calc.num),
      sign: '', // Reset operation sign if necessary
      res: calc.res // Keep result unchanged
    });
  }

  // User click ¹/x (Calculates the reciprocal of the current number)
  const reciprocalClick = () => {
    setCalc({
      ...calc,
      num: 1 / calc.num,
      sign: '', // Reset operation sign if necessary
      res: calc.res // Keep result unchanged
    });
  }

  // User click ²√x (Calculates the square root of the current number)
  const squareRootClick = () => {
    setCalc({
      ...calc,
      num: Math.sqrt(calc.num),
      sign: '', // Reset operation sign if necessary
      res: calc.res // Keep result unchanged
    });
  }

  // User click ³√x (Calculates the cube root of the current number)
  const cubeRootClick = () => {
    setCalc({
      ...calc,
      num: Math.cbrt(calc.num),
      sign: '', // Reset operation sign if necessary
      res: calc.res // Keep result unchanged
    });
  }

  // User click ʸ√x (Calculates the yth root of the current number)
  const ythRootClick = () => {
    setCalc({
      ...calc,
      num: Math.pow(calc.num, 1 / calc.res),
      sign: '', // Reset operation sign if necessary
      res: 0 // Reset the result to 0 after calculation
    });
  }

  // User click ln (Calculates the natural logarithm (base e) of the current number)
  const naturalLogClick = () => {
    setCalc({
      ...calc,
      num: Math.log(calc.num),
      sign: '', // Reset operation sign if necessary
      res: calc.res // Keep result unchanged
    });
  }

  // User click log₁₀ (Calculates the logarithm (base 10) of the current number)
  const logBase10Click = () => {
    setCalc({
      ...calc,
      num: Math.log10(calc.num),
      sign: '', // Reset operation sign if necessary
      res: calc.res // Keep result unchanged
    });
  }

  // User click x! (Calculates the factorial of the current number)
  const factorialClick = () => {
    const num = calc.num;
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    setCalc({
      ...calc,
      num: result,
      sign: '', // Reset operation sign if necessary
      res: 0 // Reset the result to 0 after calculation
    });
  }




  const handleBtnClick = () => {
    
    const results = {
      '.': commaClick,
      'C': resetClick,
      '/': signClick,
      'x': signClick,
      '-': signClick,
      '+': signClick,
      '=': equalsClick,
      '%': persenClick,
      '+-': invertClick,
      'Rand': randClick,
      'pi': piClick,
      'tanh': tanhClick,
      'cosh': coshClick,
      'sinh': sinhClick,
      'EE': eeClick,
      'e': eClick,
      'tan': tanClick,
      'cos': cosClick,
      'sin': sinClick,
      '(': leftParenthesisClick,
      ')': rightParenthesisClick,
      '2nd': toggleSecondaryClick,
      'x²': squareClick,
      'x³': cubeClick,
      'mc': clearMemory,
      'm+': addToMemory,
      'm-': subtractFromMemory,
      'mr': recallMemory,
      'xʸ': powerClick,
      'eˣ': ePowerClick,
      '10ˣ': tenPowerClick,
      '¹/x': reciprocalClick,
      '²√x': squareRootClick,
      '³√x': cubeRootClick,
      'ʸ√x': ythRootClick,
      'ln': naturalLogClick,
      'log₁₀': logBase10Click,
      'x!': factorialClick,
    }
    if(results[value]) {
      return results[value]()
    } else {
      return handleClickButton()
    }
  }

  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
  )
}

export default Button