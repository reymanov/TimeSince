import React from "react";
import styled from "styled-components";
import Timer from "./Timer";

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(228, 247, 251);
  background: linear-gradient(
    167deg,
    rgba(228, 247, 251, 1) 0%,
    rgba(70, 165, 186, 0.6) 99%
  );
  display: grid;
  place-content: center;
`;

function App() {
  return (
    <PageWrapper>
      <Timer />
    </PageWrapper>
  );
}

export default App;
