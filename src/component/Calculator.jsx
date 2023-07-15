import React, { useEffect } from "react";
import Button from "./Button";
import styled from "styled-components";

const ResultDisplay = styled.div`
  color: white;
  font-size: 30px;
  margin-bottom: 5px;
  text-align: end;
  font-size: 50px;
  width: 230px;
  /* background-color: yellow; */
`;

const ButtonContainer = styled.div`
  width: 230px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px; */
  padding: 10px;
`;

const CalculatorContainer = styled.div`
  height: 450px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 20px;
`;

export default function Calculator() {
  const [operator, setOperator] = React.useState(`+`);
  const [memory, setMemory] = React.useState(0);
  const [value, setValue] = React.useState(0);

  function clear() {
    setValue(0);
    setOperator(null);
    setMemory(0);
  }

  function handleClick(e) {
    const element = e.target.id;

    if (element === `C`) {
      clear();
    } else if (element === `+/-`) {
      setValue(-value);
    } else if (element === `%`) {
      setValue(value / 100);
    } else if (
      element === `÷` ||
      element === `×` ||
      element === `+` ||
      element === `-`
    ) {
      setMemory(value);
      if (operator === `+`) {
        setMemory(memory + parseFloat(value));
      } else if (operator === `-`) {
        setMemory(memory - parseFloat(value));
      } else if (operator === `×`) {
        const temp = memory * parseFloat(value);
        setMemory(temp);
      } else if (operator === `÷`) {
        const temp = memory / parseFloat(value);
        setMemory(temp);
      }
      setValue(0);
      setOperator(element);
    } else if (element === `=`) {
      if (operator === `+`) {
        setValue(memory + parseFloat(value));
      } else if (operator === `-`) {
        setValue(memory - parseFloat(value));
      } else if (operator === `×`) {
        const temp = memory * parseFloat(value);
        setValue(temp);
      } else if (operator === `÷`) {
        const temp = memory / parseFloat(value);
        setValue(temp);
      }
      setMemory(0);
      setOperator(`+`);
    } else if (element === `.`) {
      setValue((prevValue) => prevValue + element);
    } else {
      setValue((prevValue) => parseFloat(prevValue + element));
    }
  }

  // useEffect(() => {
  //   console.log("value: ", value);
  //   console.log("memory: ", memory);
  //   console.log("operator: ", operator);
  // }, [operator, value, memory]);

  return (
    <CalculatorContainer>
      <ResultDisplay>{value}</ResultDisplay>
      <ButtonContainer>
        <Button id={`C`} type={`function`} handleClick={handleClick} />
        <Button id={`+/-`} type={`function`} handleClick={handleClick} />
        <Button id={`%`} type={`function`} handleClick={handleClick} />
        <Button id={`÷`} type={`operator`} handleClick={handleClick} />
        <Button id={`7`} handleClick={handleClick} />
        <Button id={`8`} handleClick={handleClick} />
        <Button id={`9`} handleClick={handleClick} />
        <Button id={`×`} type={`operator`} handleClick={handleClick} />
        <Button id={`4`} handleClick={handleClick} />
        <Button id={`5`} handleClick={handleClick} />
        <Button id={`6`} handleClick={handleClick} />
        <Button id={`-`} type={`operator`} handleClick={handleClick} />
        <Button id={`1`} handleClick={handleClick} />
        <Button id={`2`} handleClick={handleClick} />
        <Button id={`3`} handleClick={handleClick} />
        <Button id={`+`} type={`operator`} handleClick={handleClick} />
        <Button id={`0`} wide={true} handleClick={handleClick} />
        <Button id={`.`} handleClick={handleClick} />
        <Button id={`=`} type={`operator`} handleClick={handleClick} />
      </ButtonContainer>
    </CalculatorContainer>
  );
}
