import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Button = styled(LinkS)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#22E4D6" : "#010606")};
  white-space: nowrap;
  /*padding: ${({ big }) => (big ? "#14px 48px" : "#12px 30px")};*/
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  padding: 14px 40px 16px 48px;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: translateY(-0.3rem);
    /*box-shadow: 0 1rem 2rem
      ${({ secondary }) =>
      secondary ? "rgba(34, 228, 214, 0.2)" : "rgba(0, 0, 0, 0.2)"};*/
    background: ${({ primary }) => (primary ? "#fff" : "#22E4D6")};
  }
`;
