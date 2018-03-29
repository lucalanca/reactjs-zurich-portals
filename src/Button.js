import styled from "styled-components";

// That's now the proper usage:
const Button = styled.button`
  color: #fff;
  background: #6772e5;
  
  white-space: nowrap;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .025em;
  text-decoration: none;
  transition: all .15s ease;
  border: 0;

  cursor: pointer;



  /* All the simple states */
  &:hover {
    color: #fff;
    background-color: #7795f8;
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
  }
  
  &:active {
    color: #e6ebf1;
    background-color: #555abf;
  }
  &:focus {
    color: #fff;
    background-color: #7795f8;
    
    box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
}






  }
`;

export default Button;
