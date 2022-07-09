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
  const [isLoading] = useGlobalState('loading')
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vie;
  function onLoad() {
    setGlobalState("loading", false);
  }
  useEffect(() => {}, []);
  return (
    <BookLayout>
      <Image
        onLoad={onLoad}
        alt={images[0].alt}
        title={images[0].title}
        src={images[0].image.url}
        layout="fill"
        objectFit="cover"
        quality={100}
        className="bg-image"
      />
      <div className="book-title">
        <Typography variant="h5">{t.pageTitle}</Typography>
        <Typography variant="h6">{t.pageAuthor}</Typography>
        <Link href="/about" passHref>
          <Button variant="outlined" className="home-button">
            {t.open}
          </Button>
        </Link> 
      </div>
    </BookLayout>
  );
};

export default About;
export async function getStaticProps() {
  setGlobalState("loading", true);
  const images = (await getBackgroundImages()) || [];

  return {
    props: { images },
  };
}
