import React,{useState,useRef} from 'react'
import React,{useDispatch} from 'react-redux'
import {View,Image,Keyboard,TouchableWithoutFeedback,Button,ScrollView,Text,StyleSheet,TextInput} from 'react-native'
export const CreateScreen=({navigation})=>{
    const [text,setText]=useState('')

    const dispatch=useDispatch()
    const imgRef=useRef()
    const saveHandler=()=>{
        const post={
            date:new Date().toJSON(),
            text,img:imgRef.current,
            booked:false
        }
        dispatch(addPost(post))
        navigation.navigate('Main')
    
    }
    const photoPickHandler=(uri)=>{
        imgRef.current=uri
    }
    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <View style={styles.wrapper}>
            <Text>создай новый пост</Text>
            <TextInput value={text} onChangeText={setText} multiline placeholder="введите текст заметки" style={styles.textarea}/>
            {/* <Image style={{width:'100%',height:200,marginBottom:}} source={{uri:}}/>
             */}
             <PhotoPicker onPick={photoPickHandler} />
            <Button disabled={!text} title='создать пост' color={THEME.MAIN_COLOR} onPress={saveHandler}/>
        </View>
        </TouchableWithoutFeedback>
        </ScrollView>
    )
}
CreateScreen.navigationOptions=({navigation})=>({
    headerTitle:'создать пост',
    
    headerLeft:(
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title={"toggle drawer"} iconName={"ios-menu"} onPress={()=>}></Item>
    </HeaderButtons>
    )
})
const styles=StyleSheet.create({
    wrapper:{
            padding:10,
        },
        title:{
            fontSize:20,
            fontFamily:'open-regular',
            textAlign:'center',
            marginVertical:10
        },
        textarea:{
            padding:10,
            marginBottom:10
        }
})
