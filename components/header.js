import styled, { keyframes } from "styled-components";

const Header = () => (
  <Wrapper>
    <img src="/static/logo.svg" alt="Dorm Dev logo" width="100" />
    <LogoText>
      <img src="/static/logo-text.png" alt="Dorm Dev text logo" height="50" />
      <BlinkingCursor />
    </LogoText>
  </Wrapper>
);

export default Header;

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
`;

const LogoText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
`;

const blink = keyframes`
  from, to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

const BlinkingCursor = styled.div`
  height: 60px;
  width: 30px;
  background: #606060;
  margin-left: 8px;
  margin-bottom: 8px;
  animation: 1s ${blink} step-end infinite;
`;
