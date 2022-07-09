import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useCallback } from "react";
import BookLayout from "../components/BookLayout";
import { setGlobalState, useGlobalState } from "../state/index";
import { getBackgroundImages } from "../services";
import Image from "next/image";
import { useRouter } from "next/router";
import en from "../locales/en";
import vie from "../locales/vie";
const About = ({ images, checkImages }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vie;
  

   

  return (
    <BookLayout>
      
    </BookLayout>
  );
};

export default About;
