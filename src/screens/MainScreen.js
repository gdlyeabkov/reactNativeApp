import {Item,HeaderButtons} from 'react-navigation-header-buttons'
import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {View,Text,ActivityIndicator,StyleSheet,Button,FlatList} from 'react-native'
export const MainScreen=({navigation})=>{
    // const goToPost=()=>{
    //     navigation.navigate('Post')
    // }
    const openPostHandler=()=>{
        navigation.navigate('Post',{
            postId:post.id, date:post.date, booked:post.booked
        })
    }
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(loadPosts())
    },[dispatch])
    const allPosts=useSelector((state)=>state.post.allPosts)
    const loading=useSelector(state=>state.post.loading)
    if(loading){
        return <View style={styles.center}>
                <ActivityIndicator color={THEME.MAIN_COLOR}/>
  
        </View>
    }
    return (
        <PostList data={allPosts} onOpen={openPostHandler}/>
        // <View style={styles.wrapper}>
        //     <Text>MainScreen</Text>
        //     <FlatList data={DATA} keyExtractor={post=>post.id.toString()} renderItem={
        //         (item)=>{
        //             return (
        //                 <Post post={item} onOpen={openPostHandler}></Post>
        //                 // <View>
        //                 //     <Text>{item.text}</Text>
        //                 // </View>
        //             )
        //         }
        //     }></FlatList>
        //     {/* <Button title="Go to Post" onPress={goToPost}></Button> */}
        // </View>
    )
}
MainScreen.navigationOptions=({navigation})=>({
    headerTitle:'Мой блог',
    headerRight:(
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title={"takePhoto"} iconName={"ios-camera"} onPress={()=>navigation.toggleDrawer()}></Item>
    </HeaderButtons>
    ),
    headerLeft:(
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title={"toggle drawer"} iconName={"ios-menu"} onPress={()=>navigation.push("Create")}></Item>
    </HeaderButtons>
    )
})
const styles=StyleSheet.create({
        wrapper:{
            padding:10
        },
        center:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        }
})
