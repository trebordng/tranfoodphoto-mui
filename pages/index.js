import { Button } from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import BookLayout from "../components/BookLayout";
import { setGlobalState, useGlobalState } from "../state/index";
import { getBackgroundImages } from "../services";
import Image from "next/image";
const Index = ({ images, checkImages }) => {
    const onLoad = () => {
        setGlobalState("loading", false);
    }
  useEffect(() => {
    onLoad();
   
  }, []);
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
    </BookLayout>
  );
};

export default Index;
export async function getStaticProps() {
  setGlobalState("loading", true);
  const images = (await getBackgroundImages()) || [];
  

  return {
    props: { images},
  };
}
