import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import BookLayout from "../components/BookLayout";
import Image from "next/image";
import homeImg from "../public/page-image/landing-image.jpg";
import { useRouter } from "next/router";
import en from "../locales/en";
import vie from "../locales/vie";
const Index = ({ images, checkImages }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vie;

  return (
    <BookLayout>
      <Image
     
        src={homeImg.src}
        layout="fill"
        objectFit="cover"
        quality={100}
        className="bg-image"
      />
    
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
