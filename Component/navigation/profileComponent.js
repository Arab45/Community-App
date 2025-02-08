import React from "react"
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native"

export default function Profile(){
    <SafeAreaView style={styles.container}>
        <View>
            <Text>Profile</Text>
        </View>
    </SafeAreaView>
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: Platform.OS = "android" ? StatusBar.currentHeight : null
    },
    subContainer:{
        
    }
})