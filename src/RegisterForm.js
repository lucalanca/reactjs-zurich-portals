import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Field = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: hsl(235, 20%, 43%);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  color: hsl(235, 16%, 16%);
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  margin-bottom: 0.75rem;
  border-style: solid;
  border-width: 1px;
  border-radius: 0.25rem;
  border-color: hsl(235, 33%, 92%);
  background-color: hsl(235, 45%, 96%);
  appearance: none;
`;

const Hint = styled.p`
  font-style: italic;
  font-size: 0.75rem;
  color: hsl(235, 12%, 58%);
  margin: 0;
  line-height: 1.5;
  font-weight: 400;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default () => (
  <form>
    <Field>
      <Label for="firstname">First Name</Label>
      <Input id="firstname" type="text" placeholder="Jane" />
    </Field>
    <Field>
      <Label for="lastname">Last Name</Label>
      <Input id="lastname" type="text" placeholder="Doe" />
    </Field>
    <Field>
      <Label for="password">Password</Label>
      <Input id="password" type="password" placeholder="******************" />
      <Hint>Make it as long and as crazy as you'd like</Hint>
    </Field>
    <Footer>
      <Button type="submit">Register Now</Button>
    </Footer>
  </form>
);
