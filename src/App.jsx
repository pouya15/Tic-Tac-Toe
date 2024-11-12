import React, { useState } from "react";
import TicTacToe from "./components/TicTacToe";
import { Grid2 } from "@mui/material";
import CustomCursor from "./components/mouseCursor";
import PlayerTurnContext from "./contexts/playerTurnContext";

const App = () => {
  const [playerTurn, setPlayerTurn] = useState("X");

  return (
    <>
    <PlayerTurnContext.Provider value={{playerTurn, setPlayerTurn}}>
    <CustomCursor />
      <Grid2
        container
        justifyContent="center"
        sx={{ flexDirection: "column", alignItems: "center", maxWidth: 500 }}
      >
        <TicTacToe />
      </Grid2>
      </PlayerTurnContext.Provider>
    </>
  );
};

export default App;
