import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import BookLayout from "../components/BookLayout";
import { useRouter } from "next/router";
import en from "../locales/en";
import vie from "../locales/vie";
const Index = ({ images, checkImages }) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vie;

  return (
    <BookLayout>
      <Typography className="bg-image"></Typography>
    
        <Box className="book-title">
          <Typography variant="h5">{t.pageTitle}</Typography>
          <Typography variant="h6">{t.pageAuthor}</Typography>
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
