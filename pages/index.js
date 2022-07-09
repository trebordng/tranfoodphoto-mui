import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import lady from "../public/page-image/pretty-lady.jpg";
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
        <div className="portrait-home">
          <Image src={lady.src} width={120} height={120} objectFit="cover" className="pretty-lady"/>
        </div>
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
