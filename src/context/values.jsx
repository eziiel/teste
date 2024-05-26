import { createContext, useState } from "react";
import PropTypes from "prop-types";

const initialContextValue = {
  state: 0  
}

export const ContextValuesCalculator = createContext(initialContextValue);

export const ValuesCalculatorProvider = ({ children }) => {
  const [state, setState] = useState(initialContextValue.state);

  const handleValue = (number) => {
    console.log(number)
    setState(prev => prev+=number)
  }

  const value = {
    state,
    handleValue,
  };

  return (
    <ContextValuesCalculator.Provider value={value}>
      {children}
    </ContextValuesCalculator.Provider>
  );
};

ValuesCalculatorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

