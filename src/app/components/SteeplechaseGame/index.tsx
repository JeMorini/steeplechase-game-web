"use client";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import io from "socket.io-client";
import Track from "../Track";
import Score from "../Score";
import GameOver from "../GameOver";
import { Container, Runner, Obstacle } from "./styles";

const socket = io(process.env.SOCKET_URL || "localhost:8091", {
  transports: ["websocket"],
});

const SteeplechaseGame = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const runnerRef = useRef<any>(null);
  const obstacleRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prevScore) => prevScore + 1);
    }, 500);

    if (gameOver) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [gameOver]);

  const jumpReceived = (evento: any, callback: any) => {
    socket.on(evento, callback);
  };

  useEffect(() => {
    jumpReceived("jumpReceived", () => {
      if (!isJumping && !gameOver) {
        setIsJumping(true);
        setTimeout(() => {
          setIsJumping(false);
        }, 500);
      }
    });
  }, [gameOver, isJumping]);

  const checkCollision = () => {
    const dino = runnerRef?.current?.getBoundingClientRect();
    const obstacle = obstacleRef?.current?.getBoundingClientRect();

    if (dino && obstacle) {
      if (
        dino.right > obstacle.left &&
        dino.left < obstacle.right &&
        dino.bottom > obstacle.top &&
        dino.top < obstacle.bottom
      ) {
        setGameOver(true);
      }
    }
  };

  useEffect(() => {
    const collisionInterval = setInterval(checkCollision, 50);

    return () => {
      clearInterval(collisionInterval);
    };
  }, [isJumping, gameOver]);

  return (
    <Container>
      {!gameOver ? (
        <>
          <Runner
            ref={runnerRef}
            style={{ bottom: isJumping ? "355px" : "230px" }}
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjEyd2h3NzY1YjNkZTYxbnI5aDg5aDVwcWdleXQxODJub2lzMTJ4YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/47KTev0QLxfBGNCe0G/giphy.webp"
          />
          <Obstacle ref={obstacleRef} src="/obstacle.png" />
          <Track />
          <Score score={score} />
        </>
      ) : (
        <GameOver score={score} />
      )}
    </Container>
  );
};

export default SteeplechaseGame;
