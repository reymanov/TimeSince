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
  -webkit-box-shadow: 1px 10px 16px 4px rgba(0, 0, 0, 0.36);
  box-shadow: 1px 10px 16px 4px rgba(0, 0, 0, 0.36);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  width: 70%;
`;

const Subtitle = styled.h1`
  font-size: 2em;
`;

const Input = styled.input`
  width: 95%;
  padding: 0.6em 1.2em;
  border: 2px darkgrey solid;
  border-radius: 5px;
  font-size: 1em;
`;

const Button = styled.button`
  padding: 0.4em 1.2em;
  margin: 1em 0.5em;
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
  transition: filter 0.2s ease-in-out;

  &: hover {
    cursor: pointer;
    filter: grayscale(0);
  }
`;

export { Container, Form, Title, Subtitle, Input, Button };
