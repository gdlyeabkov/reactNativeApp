import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
export const AboutScreen=({})=>{
    return (
        <View>
            <Text>AboutScreen</Text>
            <Text>версия периложения <Text style={styles.version}>1.0.0</Text></Text>
        </View>
    )
}
AboutScreen.navigationOptions=({navigation})=>({
    headerTitle:'о приложении',
    
    headerLeft:(
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title={"toggle drawer"} iconName={"ios-menu"} onPress={()=>}></Item>
    </HeaderButtons>
    )
})
const styles=StyleSheet.create({
        center:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        },
        version:{
            fontFamily:'open-bold'
        }
})
