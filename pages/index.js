import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import homeImg from "../public/page-image/landing-image.jpg";
import { useRouter } from "next/router";
import en from "../locales/en";
import vie from "../locales/vie";
const Index = ({ images, checkImages }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vie;

  return (
    <Box className="book-home">
      <div className="book-title glass">
        <Typography variant="h5">{t.pageTitle}</Typography>
        <Typography variant="h6">{t.pageAuthor}</Typography>
        <Link href="/about" passHref>
          <Button variant="outlined" className="home-button">
            {t.open}
          </Button>
        </Link>
      </div>
    </Box>
  );
};

export default Index;
