import React, {useState} from "react";
import { ScrollView } from 'react-native';
import { Container,DetailContainer,ImageContainer,ItemContainer, PropertyImage, IconContainer, StarIcon, TitleText, RowContainer, BedIcon, AddresText, BedText, ShowerIcon, ShowerText, SuperIcon, SuperText, PriceText, FavIcon, PunctuationText } from './styled';
import { star, mark, shower, fav, bed, sup } from "../../library/images"

export const Card = (props) => {

    const propertiesDisplay = props.list?.map((item, i) => {
        return(
            <>
                <ImageContainer>
                    <PropertyImage source={{uri: item.imagen}}/>
                    <IconContainer>
                        <StarIcon source = {star}/>
                        <PunctuationText>{item.evaluacion}</PunctuationText>
                    </IconContainer>
                </ImageContainer>


                <DetailContainer>
                    <TitleText>{item.nombre}</TitleText>

                    <RowContainer>
                        <BedIcon source = {mark}/>
                        <AddresText>{item.direccion}</AddresText>
                    </RowContainer>

                    <RowContainer>
                        <BedIcon source = {bed}/>
                        <BedText>{item.habitaciones}</BedText>

                        <ShowerIcon source = {shower} />
                        <ShowerText>{item.baños}</ShowerText>

                        <SuperIcon source = {sup}/>
                        <SuperText>{item.superficie}</SuperText>
                    </RowContainer>

                    <RowContainer>
                        <PriceText>{item.renta}</PriceText>
                        <FavIcon source = {fav}/>
                    </RowContainer>

                </DetailContainer>
            </>
        )
    })


    return (
        <Container>
            <ScrollView>
                {propertiesDisplay}
            </ScrollView>

        </Container>
    );
};
