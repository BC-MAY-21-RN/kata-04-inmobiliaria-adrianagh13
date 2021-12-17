import React from "react";
import { ScrollView, Text } from 'react-native';
import { Container } from './styled';

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
                <ImageContainer>
                    <PropertyImage />
                    <IconContainer>
                        <StarIcon />
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
                </DetailContainer>

            </ItemContainer>
        </Container>
    );
};
