import React from "react";
import styled from "styled-components";
import Timer from "./Timer";

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(219, 241, 244, 1) 0%,
    rgba(142, 194, 208, 1) 100%
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
