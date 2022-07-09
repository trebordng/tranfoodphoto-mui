import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { LazyLoadComponent } from 'react-lazy-load-image-component';
const BookLayout = ({ children }) => {
  return <LazyLoadComponent><Box className="book glass">{children}</Box></LazyLoadComponent>
};

export default BookLayout;
