"use client";
import React from "react";
import { Number } from "./styles";

interface ScoreProps {
  score: number;
}

const Score = ({ score }: ScoreProps) => {
  return <Number>{score}</Number>;
};

export default Score;
