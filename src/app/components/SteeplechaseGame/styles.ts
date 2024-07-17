import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #005dcf;
  overflow: hidden;
  position: relative;
`;

export const Runner = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  transition: bottom 0.2s;
  z-index: 10;
`;

export const Obstacle = styled.img`
  width: 120px;
  height: 120px;
  position: absolute;
  right: 0;
  bottom: 200px;
  z-index: 10;
  animation: moveObstacle 2s linear infinite;

  @keyframes moveObstacle {
    from {
      right: -20px;
    }
    to {
      right: 100vw;
    }
  }
`;
