import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  min-height: 420px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding: 1em 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  width: 80%;
`;

const Subtitle = styled.h1`
  font-size: 2em;
`;

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
  transition: all 0.2s ease-in-out;

  &: hover {
    cursor: pointer;
    transform: scale(1.05);
    filter: grayscale(0);
  }
`;

export default function Timer() {
  const [time, setTime] = useState(null);
  const [value, setValue] = useState("");

  function handleInputChange(event) {
    setValue(event.target.value);
    // console.log(Date.now());
  }

  function timeSince(lastSeen, event) {
    event.preventDefault();
    const isNum = /^\d+$/.test(lastSeen);

    if (lastSeen > Date.now()) {
      alert("Please enter timestamp of the past!");
    } else if (isNum !== true) {
      alert("Timestamp can only include numbers!");
    } else if (Math.floor((Date.now() - lastSeen) / 1000) < 60) {
      const intervalSec = setInterval(() => {
        let secondsPast = Math.floor((Date.now() - lastSeen) / 1000);
        if (secondsPast < 60) {
          setTime(`${secondsPast} sec`);
        } else {
          clearInterval(intervalSec);
          timeSince(lastSeen, event);
        }
      }, 1000);
    } else {
      setTime(
        `${(Math.floor((Date.now() - lastSeen) / 1000) / 60).toFixed(0)} min `
      );
      setInterval(() => {
        setTime(
          `${(Math.floor((Date.now() - lastSeen) / 1000) / 60).toFixed(0)} min `
        );
      }, 60000);
    }
    setValue("");
  }

  return (
    <Container>
      {!time ? (
        <Title>Check how much time has passed since </Title>
      ) : (
        <Title>This much time has passed</Title>
      )}

      <Subtitle>{time}</Subtitle>
      <Form onSubmit={(event) => timeSince(value, event)}>
        {!time ? (
          <>
            <Input
              placeholder="Enter timestamp"
              minLength="13"
              maxLength="13"
              required
              onChange={handleInputChange}
              value={value}
            />
            <Button type="submit">Check</Button>
          </>
        ) : (
          <Button type="button" onClick={() => window.location.reload()}>
            Reset
          </Button>
        )}
      </Form>
    </Container>
  );
}
