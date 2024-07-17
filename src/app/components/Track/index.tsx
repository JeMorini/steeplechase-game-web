"use client";
import React from "react";
import { Container, Line } from "./styles";

const Track = () => {
  return (
    <Container>
      {[...Array(5)].map((_, index) => (
        <Line key={index} />
      ))}
    </Container>
  );
};

export default Track;
