import { Button } from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import BookLayout from "../components/BookLayout";
import { setGlobalState, useGlobalState } from "../state/index";
import { getBackgroundImages } from "../services";
import Image from "next/image";
const index = ({ images }) => {
  if (images !== undefined) {
    setGlobalState("loading", false);
  }
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

export default index;
export async function getStaticProps() {
  setGlobalState("loading", true);
  const images = (await getBackgroundImages()) || [];

  return {
    props: { images },
  };
}
