import React from "react";
import {  } from 'react-native';
import { Container,DetailContainer,ImageContainer,ItemContainer, PropertyImage, IconContainer, StarIcon, TitleText, RowContainer, BedIcon, AddresText, BedText, ShowerIcon, ShowerText, SuperIcon, SuperText, PriceText, FavIcon, PunctuationText } from './styled';
import { star, mark, shower, fav, bed, sup } from "../../library/images"

export const Card = (propertiesList) => {

//    const propertiesDisplay = propertiesList.map((item) => {
//        return(
//            <ItemContainer>

  //          </ItemContainer>
  //      )
    //})


    return (
        <Container>

            <ItemContainer>
                {/* <ImageContainer>
                    <PropertyImage />
                    <IconContainer>
                        <StarIcon source={{}}/>
                        <PunctuationText> </PunctuationText>
                    </ IconContainer>
                </ImageContainer>

                <DetailContainer>
                    <TitleText> </TitleText>

                    <RowContainer>
                        <IconImage />
                        <AddressText> </AddressText>
                    </RowContainer>

                    <RowContainer>
                        <IconImage />
                        <DetailText ></DetailText>

                        <IconImage />
                        <DetailText> </DetailText>

                        <IconImage />
                        <DetailText></DetailText>
                    </RowContainer>

                    <RowContainer>
                        <PriceText> </PriceText>
                        <HeartIcon />
                    </RowContainer>
                </DetailContainer> */}
                <ImageContainer>
                    <PropertyImage source={{uri: "https://www.inmuebles24.com/propiedades/nueva-y-hermosa-casa-en-chapalita-con-recamara-en-62862814.html#&gid=1&pid=1" }}/>
                    <IconContainer>
                        <StarIcon source = {star}/>
                        <PunctuationText>4.5</PunctuationText>
                    </IconContainer>
                </ImageContainer>


                <DetailContainer>
                    <TitleText>The Willows</TitleText>

                    <RowContainer>
                        <BedIcon source = {mark}/>
                        <AddresText> 3517 W. Gray</AddresText>
                    </RowContainer>

                    <RowContainer>
                        <BedIcon source = {bed}/>
                        <BedText>3</BedText>

                        <ShowerIcon source = {shower} />
                        <ShowerText>2</ShowerText>

                        <SuperIcon source = {sup}/>
                        <SuperText>230ft</SuperText>
                    </RowContainer>

                    <RowContainer>
                        <PriceText>$440/m</PriceText>
                        <FavIcon source = {fav}/>
                    </RowContainer>

                </DetailContainer>
            </ItemContainer>

        </Container>
    );
};
