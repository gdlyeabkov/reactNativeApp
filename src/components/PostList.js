import React from 'react'
import {View,StyleSheet,Text,FlatList} from 'react-native'
import {Post} from './Post'
export const PostList=({data=[],onOpen})=>{
    if(!data.length){
        return <View style={styles.wrapper}>
            <Text style={styles.noItems}>постов пока нет</Text>
        </View>
    }
    return (
        <View style={styles.wrapper}>
            <Text>MainScreen</Text>
            <FlatList data={data} keyExtractor={post=>post.id.toString()} renderItem={
                (item)=>{
                    return (
                        <Post post={item} onOpen={onOpen}></Post>
                    )
                }
            }></FlatList>
            
        </View>
    )
}
const styles=StyleSheet.create({
    wrapper:{
        padding:10
    },
    center:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    noItems:{
        fontFamily:'open-regular',
        fontSize:18,
        textAlign:'center',
        marginVertical:
    }
})