import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native"
import Splash from "./Splash";


export default function Onboarding(){
    return (
        <SafeAreaView>
            <Splash />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    }
})