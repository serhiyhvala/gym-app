import React from "react";
import { useState } from "react";
import { Box } from "@mui/system";
import HeroBanner from "../component/HeroBanner";
import Exercises from "../component/Exercises";
import SearchExercises from "../component/SearchExercises";

const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises/>
      <Exercises/>
    </Box>
  );
};

export default Home;
