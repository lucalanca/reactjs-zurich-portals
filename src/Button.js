import BemtoButton from "bemto-button";

// That's now the proper usage:
const Button = BemtoButton.extend`
  border-radius: 9em;
  background: linear-gradient(#fff, #eee);
  box-shadow: 0 1px 3px -3px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 0, 0, 0.3);

  /* Apply layout-changing styles here */
  &__Content {
    padding: 5px 10px;
  }

  /* All the simple states */
  &:hover {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.4);
  }
  &:active {
    background: linear-gradient(#ccc, #fff);
  }
  &_disabled {
    opacity: 0.5;
  }

  /* Keyboard-only, won't show on click! */
  ${BemtoButton.focusCSS(`
    margin: -1px;
    box-shadow: 0 0 5px 5px pink;
  `)};
`;

export default Button;
