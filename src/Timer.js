import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  min-height: 420px;
  background: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding: 2em 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  width: 80%;
`;

const Subtitle = styled.h1``;

const Input = styled.input`
  padding: 0.6em 1.2em;
  border: 2px darkgrey solid;
  border-radius: 5px;
  font-size: 1em;
`;

const Button = styled.button`
  padding: 0.4em 1.2em;
  margin-top: 1em;
  color: #fff;
  font-size: 1em;
  font-weight: 600;
  border: none;
  border-radius: 5px;

  background: radial-gradient(
    circle,
    rgba(93, 197, 218, 1) 0%,
    rgba(27, 177, 231, 1) 100%
  );
  filter: grayscale(0.5);
  transition: filter 0.2s ease;

  &: hover {
    cursor: pointer;
    filter: grayscale(0);
  }
`;

export default function Timer() {
  const [time, setTime] = useState(null);

  function timeSince() {}

  return (
    <Container>
      <Title>Check how much time has passed since ...</Title>
      <Subtitle>5 sec </Subtitle>
      <Form onSubmit={timeSince}>
        <Input placeholder="Enter timestamp"></Input>
        <Button type="submit">Check</Button>
      </Form>
    </Container>
  );
}
