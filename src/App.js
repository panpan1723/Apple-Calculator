import Calculator from "./component/Calculator";
import "./styles.css";
import styled from "styled-components";
// Implement apple calculate demo. You have Four day to implement it. From Thursday to Sunday.
// If you have iphone, you cann check the functionnality in your iphone.
// If not, you can check the vedio in wechat group.

const AppContainer = styled.div`
  text-align: cenetr;
`;

const CalculatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`;

export default function App() {
  return (
    <AppContainer>
      <h1>Apple Calculator</h1>
      <h3>By Yuting Long</h3>
      <CalculatorContainer className="App">
        <Calculator />
      </CalculatorContainer>
    </AppContainer>
  );
}
