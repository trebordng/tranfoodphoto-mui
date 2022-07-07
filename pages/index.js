import { Button } from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import BookLayout from "../components/BookLayout";
import { setGlobalState, useGlobalState } from "../state/index";
import { getBackgroundImages } from "../services";
import Image from "next/image";
const Index = ({ images, checkImages }) => {
  useEffect(() => {
    checkImages &&
      setTimeout(() => {
        setGlobalState("loading", false);
      },1000);
  }, []);
  return (
    <BookLayout>
      <Image
        alt={images[0].alt}
        title={images[0].title}
        src={images[0].image.url}
        layout="fill"
        objectFit="cover"
        quality={100}
        className="bg-image"
      />
    </BookLayout>
  );
};

export default Index;
export async function getStaticProps() {
  setGlobalState("loading", true);
  let checkImages = false;
  const images = (await getBackgroundImages()) || [];
  if (images !== undefined) {
    checkImages = true;
  }

  return {
    props: { images, checkImages },
  };
}
