import {useDispatch,useSelector} from 'react-redux'
import {Item,HeaderButtons} from 'react-navigation-header-buttons'
import React from 'react'
import {View,Text,StyleSheet,Button,FlatList} from 'react-native'
export const BookedScreen=({navigation})=>{
    // const goToPost=()=>{
    //     navigation.navigate('Post')
    // }
    const openPostHandler=()=>{
        navigation.navigate('Post',{
            postId:post.id, date:post.date, booked:post.booked
        })
    }
    const bookedPosts=useSelector(state=>state.post.booked)
    return (
        // <View style={styles.wrapper}>
        //     <Text>BookedScreen</Text>
        //     <FlatList data={DATA.filter(post=>post.booked)} keyExtractor={post=>post.id.toString()} renderItem={
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
        <PostList data={bookedPosts} onOpen={openPostHandler}/>
    )
}
BookedScreen.navigationOptions=({navigation})=>{
    headerTitle:'избранное',
    
    headerLeft:(
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title={"toggle drawer"} iconName={"ios-menu"} onPress={()=>navigation.toggleDrawer()}></Item>
    </HeaderButtons>
    )
}
// const styles=StyleSheet.create({
//         wrapper:{
//             padding:10
//         },
//         center:{
//             flex:1,
//             justifyContent:'center',
//             alignItems:'center',
//         }
// })
