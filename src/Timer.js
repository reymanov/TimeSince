import React, { useState } from "react";
import {
  Container,
  Form,
  Title,
  Subtitle,
  Input,
  Button,
} from "./styles/TimerStyles";

export default function Timer() {
  const [time, setTime] = useState(null);
  const [value, setValue] = useState("");

  function handleInputChange(event) {
    setValue(event.target.value);
  }

  function timeSince(lastSeen, event) {
    event.preventDefault();
    const isNum = /^\d+$/.test(lastSeen);
    let secondsPast = Math.floor((Date.now() - lastSeen) / 1000);
    let minutesPast = (Math.floor((Date.now() - lastSeen) / 1000) / 60).toFixed(
      0
    );

    if (lastSeen > Date.now()) {
      alert("Please enter timestamp of the past!");
      setValue("");
    } else if (!isNum) {
      alert("Timestamp can only include numbers!");
      setValue("");
    } else if (secondsPast < 60) {
      setTime(`${secondsPast} sec`);
      const intervalSec = setInterval(() => {
        secondsPast = Math.floor((Date.now() - lastSeen) / 1000);
        if (secondsPast < 60) {
          setTime(`${secondsPast} sec`);
        } else {
          clearInterval(intervalSec);
          timeSince(lastSeen, event);
        }
      }, 1000);
    } else {
      setTime(`${minutesPast} min`);
      setInterval(() => {
        setTime(
          `${(Math.floor((Date.now() - lastSeen) / 1000) / 60).toFixed(0)} min `
        );
      }, 60000);
    }
  }

  return (
    <Container>
      {time ? (
        <Title>This much time has passed</Title>
      ) : (
        <Title>Check how much time has passed since .. </Title>
      )}

      <Subtitle>{time}</Subtitle>
      <Form onSubmit={(event) => timeSince(value, event)}>
        {time ? (
          <Button type="button" onClick={() => window.location.reload()}>
            Reset
          </Button>
        ) : (
          <>
            <Input
              placeholder="Enter timestamp"
              minLength="13"
              maxLength="13"
              required
              onChange={handleInputChange}
              value={value}
            />
            <div>
              <Button type="button" onClick={() => setValue(Date.now())}>
                Current Date
              </Button>
              <Button type="submit">Check</Button>
            </div>
          </>
        )}
      </Form>
    </Container>
  );
}
