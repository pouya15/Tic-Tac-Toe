import React, { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import PlayerTurnContext from "../contexts/playerTurnContext";

const CustomCursor = () => {
  const { playerTurn } = useContext(PlayerTurnContext);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          zIndex: 2,
          position: "absolute",
          top: cursorPosition.y - 30,
          left: cursorPosition.x - 30,
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${
            playerTurn !== "X" ? "rgba(0, 0, 255, 0.7)" : "rgba(255, 0, 0, 0.7)"
          } 40%, rgba(255, 0, 0, 0) 100%)`,
          boxShadow: `0 0 20px ${
            playerTurn !== "X" ? "rgba(0, 0, 255, 0.7)" : "rgba(255, 0, 0, 0.7)"
          }`,
          pointerEvents: "none",
          transition: "background-color 0.3s, box-shadow 0.3s",
        }}
      />
    </>
  );
};

export default CustomCursor;
