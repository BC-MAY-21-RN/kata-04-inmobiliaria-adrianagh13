import React from "react";
import {Text} from 'react-native'
import { propertiesList } from '../library/constants/properties.json'
import { Card } from '../components'

export const Home = () => {
    
    
    return(
        <>
            <Card list={propertiesList}/>
        </>
    );
};