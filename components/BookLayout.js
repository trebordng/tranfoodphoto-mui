import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Image from "next/image";
import { setGlobalState, useGlobalState } from "../state/index";
import CircularProgress from "@mui/material/CircularProgress";

const BookLayout = ({ children }) => {
  const [isLoading] = useGlobalState("loading");
  useEffect(()=>{
    console.log(isLoading);
  })
  return (
    <>
      {isLoading === true && (
        <div className="loading-bg">
          <CircularProgress className="loading" />
        </div>
      )}
      <article className={isLoading ? "hidden" : "fade-in"}>
        <Box className="book glass">{children}</Box>
      </article>
    </>
  );
};

export default BookLayout;
