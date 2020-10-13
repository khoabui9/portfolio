import styled from "styled-components";
import { RevealImage, RevealText } from "./animateReveal";

export const RevealDiv = styled(RevealImage)`
  width: 0%;
  height: 100%;
  background-color: white;
  right: 0;
  position: absolute;
  z-index: 999;
`;

export const RevealTextOp = styled(RevealText)`
  opacity: 0;
  transform: translate(-50px);
  width: 100%;
`;
