import React from 'react'
import {View,StyleSheet,TouchableOpacity,Text,ImageBackground} from 'react-native'
export const Post=(post,onOpen)=>{
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={()=>onOpen(post)}>
        <View style={styles.post}>
            <ImageBackground style={styles.image} source={{uri:post.img}}>
                <View style={styles.textWrap}>
                    <Text>{ new Date(post.date).toLocaleDateString()}</Text>    
                </View>
            </ImageBackground>
        </View>
        </TouchableOpacity>
        
    )
}
const styles=StyleSheet.create({
    post:{
        marginBottom:15,
        overflow:'hidden'
    },
    image:{
        height:100,
        width:'100%'
    },
    textWrap:{
        backgroundColor:"rgba(0,0,0, 0.5)",
        paddingVertical:5,
        alignItems:'center',
        width:'100%',

    },
    title:{
        color:'#fff',
        fontFamily:'open-regular'
    }
})