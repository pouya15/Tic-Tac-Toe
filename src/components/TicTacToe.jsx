import React, { useContext, useState } from "react";
import { Grid2, Typography } from "@mui/material";
import { Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import PlayerTurnContext from "../contexts/playerTurnContext";
import "./TicTacToe.css";

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a] &&
      squares[b] &&
      squares[c] &&
      squares[a].type === squares[b].type &&
      squares[a].type === squares[c].type
    ) {
      return squares[a].type === CloseIcon ? "X" : "O";
    }
  }
  return null;
};

const TicTacToe = () => {
  const { playerTurn, setPlayerTurn } = useContext(PlayerTurnContext);
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const winner = calculateWinner(tiles);

  const changePlayerTurn = () => {
    setPlayerTurn(playerTurn === "X" ? "O" : "X");
  };

  const handleTileClick = (i) => {
    if (!tiles[i] && !winner) {
      const newTiles = tiles.slice();
      newTiles[i] =
        playerTurn === "X" ? (
          <CloseIcon sx={{ color: "red", fontSize: 60 }} />
        ) : (
          <RadioButtonUncheckedIcon
            fontSize="large"
            sx={{ color: "blue", fontSize: 60 }}
          />
        );
      setTiles(newTiles);
      changePlayerTurn();
    }
  };

  const handleReset = () => {
    setTiles(Array(9).fill(null));
    setPlayerTurn("X");
  };

  return (
    <>
      <Grid2
        container
        sx={{ justifyContent: "center", my: 5, flexDirection: "column" }}
      >
        <Typography variant="h4" color="#00796b">
          Tic -Tac -Toe
        </Typography>
        <Typography
          variant="h6"
          className={winner ? "winner-text" : "next-player"}
        >
          {winner ? `Winner: ${winner}` : `Next player: ${playerTurn}`}
        </Typography>
      </Grid2>
      <Box
        container
        bgcolor={"#b2ebf2"}
        className="gradient-border"
        sx={{
          border: 1,
          borderRadius: 2,
          justifyContent: "center",
          padding: "20px",
          mx: 5,
        }}
      >
        <Grid2 container spacing={3}>
          {tiles.map((item, index) => (
            <Grid2
              container
              key={index}
              size={4}
              sx={{ justifyContent: "center" }}
            >
              <Button
                onClick={() => {
                  handleTileClick(index);
                }}
                className="button"
                sx={{
                  border: 1,
                  minWidth: 100,
                  minHeight: 100,
                  backgroundColor: "whitesmoke",
                }}
              >
                {item}
              </Button>
            </Grid2>
          ))}
        </Grid2>
      </Box>
      <Grid2>
        <Button
          variant="contained"
          onClick={handleReset}
          style={{
            marginTop: "20px",
            backgroundColor: "#ff4081",
            color: "#ffffff",
            width: 200,
            marginTop: 50,
          }}
        >
          Play Again!
        </Button>
      </Grid2>
    </>
  );
};

export default TicTacToe;
