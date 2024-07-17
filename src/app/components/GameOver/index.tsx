"use client";
import React from "react";
import { Number } from "./styles";

interface ScoreProps {
  score: number;
}

const GameOver = ({ score }: ScoreProps) => {
  return <Number>Sua pontuação: {score}</Number>;
};

export default GameOver;
