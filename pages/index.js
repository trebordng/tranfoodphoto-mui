import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import lady from "../public/page-image/landing-image.jpg";
import { useRouter } from "next/router";
import en from "../locales/en";
import vie from "../locales/vie";
import BookLayout from "../components/BookLayout";
const Index = ({ images, checkImages }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vie;

  return (
    <BookLayout>
      <Box className="book-title ">
        <Typography variant="h5">{t.pageTitle}</Typography>
        <Typography variant="h6">{t.pageAuthor}</Typography>
        <div className="portrait-home">
          <Image
            src={lady.src}
            width={200}
            height={200}
            objectFit="cover"
            className="pretty-lady"
          />
        </div>
        <Link href="/about" passHref>
          <Button variant="outlined" className="home-button">
            {t.open}
          </Button>
        </Link>
      </Box>
    </BookLayout>
  );
};

export default Index;
