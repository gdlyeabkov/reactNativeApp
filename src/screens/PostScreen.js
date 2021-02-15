import React,{useEffect} from 'react'
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native'
export const PostScreen=({navigation})=>{
    const dispatch=useDispatch()
    const postId=navigation.getParam('postId')
    
    // const post=DATA.find(p=>p.id===postId)
    const post=useSelector(state=>tate.allPosts.find(p=>p.id===postId))
    const booked=useSelector(state=>state.post.bookedPosts.some(post=>post.id===postId))
    useEffect(()=>{
        navigation.setParams({booked})
    },[booked])
    const toggleHandler=useCallback(()=>{
        dispatch(toggleBooked(post))
    },[dispatch,postId])
    useEffect(()=>{
        navigation.setParams({toggleHandler})
    },[toggleHandler,post])
    const removeHandler=()=>{
        Alert.alert(
            'удаление поста',
            'Вы уверены?',
            [
              
              {
                text: 'отменить',
                style: 'cancel'
              },
              { text: 'удалить', style='destructive',onPress: () => {
                    navigation.navigate('Main')
                    dispatch(removePost(postId))
              } }
            ],
            { cancelable: false }
          );
    }
    if(!post){
        return null
    }
    return (
        <ScrollView>
            {/* <Text>{postId}</Text> */}
            <Image source={{uri:post.img}} style={styles.image}></Image>
            <View style={styles.textWrap}>
                <Text style={styles.title}>
                    {post.text.repeat(1000)}
                </Text>
            </View>
            <Button title='удалить' color={THEME.DANGER_COLOR} onPress={removeHandler}></Button>
        </ScrollView>
    )
}
PostScreen.navigationOptions=({navigation})=>{
    // headerTitle:'пост номер 42',
    // headerStyle:{
    //     backgroundColor:"red"
    // },
    // headerTintColor:"#fff"
    const date=navigation.getParam('date')
    const booked=navigation.getParam('booked')
    const toggleHandler=navigation.getParam('toggleHandler')
    const iconName=booked ? 'ios-star' : 'ios-star-outline' 
    return {
        headerTitle:'пост от ' + new Date(date).toLocaleDateString(),
        headerRight:(
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title={"takePhoto"} iconName={iconName} onPress={toggleHandler}></Item>
        </HeaderButtons>
        ),
        headerStyle:{
            backgroundColor:"red"
        },
        headerTintColor:"#fff"
    }
}
const styles=StyleSheet.create({
        center:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        },
        image:{
            width:'100%',
            height:'200'
        },
        title:{
            fontFamily:'open-regular'
        },
        textWrap:{
            padding:10
        }
})
