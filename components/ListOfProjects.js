import React from 'react'
import { Image, ScrollView, View, Text } from 'react-native';
import logo from '../assets/icon.png';
import Project from './Project';
import getListOfProjects from '../services/netlify';

const ListOfProjects = () => {

    getListOfProjects().then(data => {
        console.log(data)
    });

    return (
        <View>
            {/* <StatusBar style="auto" /> */}

            <ScrollView style={scrollViewStyle}>
                <Text style={{ fontSize: 20 }}>Scroll me plz</Text>
                <Text style={{ fontSize: 20 }}>Scroll me plz</Text>
            </ScrollView>

            {/* <Text>ListOfProjects</Text>
            <Project /> */}
        </View>
    )
}

const logoSize = {
    width: 100,
    height: 100,
    margin: 10,

}
const scrollViewStyle = {
    marginTop: 50,
    width: "100%",
    marginHorizontal: "20%",
    // marginVertical: 20,
}

export default ListOfProjects