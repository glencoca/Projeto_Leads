import React, { Children } from "react";
import Image from "next/dist/client/image";
import {
  DashbordCardBody,
  DashbordCardImageBackground,
  DashbordCardTextContainer,
  DashbordCardTextH1,
  DashbordCardTextSpan,
} from "./_dashbord_card_style";

interface CardImage {
  image: string;
  alt: string;
  textH1: string;
  textSpan: string;
  background_color: string;
}

const DashbordCardComponent = ({
  image,
  alt,
  textH1,
  textSpan,
  background_color,
}: CardImage) => {
  return (
    <DashbordCardBody>
      <DashbordCardImageBackground background_color={background_color}>
        <Image src={image} alt={alt} width="42px" height="42px" className="image_card" />
      </DashbordCardImageBackground>
      <DashbordCardTextContainer>
        <DashbordCardTextH1>{textH1}</DashbordCardTextH1>
        <DashbordCardTextSpan>{textSpan}</DashbordCardTextSpan>
      </DashbordCardTextContainer>
    </DashbordCardBody>
  );
};

export default DashbordCardComponent;
