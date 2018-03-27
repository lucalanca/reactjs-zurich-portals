import styled from "styled-components";
import MdClose from "react-icons/lib/md/close";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;

  width: 100vw;
  height: 100vh;

  display: ${({ isOpened }) => (isOpened ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

export const ModalCard = styled.div`
  background: rgb(255, 255, 255);
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
  min-width: 300px;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  flex-shrink: 0;

  padding: 1rem 2rem;
`;

export const ModalBody = styled.div`
  padding: 2rem 2rem;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

export const ModalClose = styled.button`
  width: 1.2rem;
  height: 1.2rem;

  margin-left: 3rem;
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);

  background: transparent;
  border: none;
  border-radius: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;

  color: rgba(0, 0, 0, 0.5);

  &:hover {
    color: rgba(0, 0, 0, 8);
  }
`;

export const ModalIcon = styled(MdClose)`
  color: inherit;
  fill: currentColor;
  width: 100%;
  height: auto;
`;

export const ModalTitle = styled.h1`
  font-size: 1.2rem;
  text-align: center;
  color: hsl(235, 40%, 25%);
`;
