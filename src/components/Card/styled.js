import styled from 'styled-components';

export const Container = styled.View`
    align-items: center;
    background-color: #FFFFFF;
    display: flex;
    height: 100%;
    margin-top: 20px;
    width: 100%;
`

export const ItemContainer = styled.View`
    align-items: center;
    background-color: #DFFAFC;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    height: 180px;
    justify-content: space-around;
    margin-top: 30px;
    width: 380px;
`

export const ImageContainer = styled.View`
    align-items: center;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    background-color: #000000;
    width: 130px;
    height: 130px;
`

export const DetailContainer = styled.View`
    border-radius: 10px;
    height: 130px;
    width: 230px;
`

export const PropertyImage = styled.Image`
    height: 180px;
    width: 130px;
`

export const IconContainer = styled.View`
    align-items: center
    background-color: #F1DA98;
    border-radius: 28px;
    flex-direction: row;
    justify-content: space-evenly;
    height: 30px;
    margin-top: 90px;
    position: absolute;
    width: 70px;
`

export const StarIcon = styled.Image`
    position: absolute;
    height: 20px;
    width: 20px;
`

export const PunctuationText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #CB7943
    margin-left: 20px;
`

export const TitleText = styled.Text`
    font-size: 25px;
    font-weight: bold;
`

export const RowContainer = styled.View`
    display: flex;
    flex-direction: row;
    height: 30px;
    margin-bottom: 5px;
    width: 230px;
`

export const BedIcon = styled.Image`
    position: absolute;
    height: 25px;
    margin-top: 8px;
    width: 25px;
`

export const AddresText = styled.Text`
    font-size: 18px;
    color: #989898;
    margin-left: 30px;
    margin-top: 10px;
`

export const BedText = styled.Text` 
    font-size: 18px;
    font-weight: bold;
    margin-left: 35px;
    margin-top: 11px;
`

export const ShowerIcon = styled.Image`
    position: absolute;
    height: 25px;
    margin-left: 70px;
    margin-top: 11px;
    width: 25px;
`

export const ShowerText = styled.Text` 
    font-size: 18px;
    font-weight: bold;
    margin-left: 60px;
    margin-top: 11px;
`

export const SuperIcon = styled.Image`
    position: absolute;
    height: 25px;
    margin-left: 140px;
    margin-top: 10px;
    width: 25px;
`

export const SuperText = styled.Text `
    font-size: 18px;
    font-weight: bold;
    margin-left: 55px;
    margin-top: 12px;
`
export const PriceText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-top: 7px;
`

export const FavIcon = styled.Image`
    height: 30px;
    right: 1;
    margin-right: 20px;
    margin-top:10px;
    position: absolute;
    width: 30px;
`
