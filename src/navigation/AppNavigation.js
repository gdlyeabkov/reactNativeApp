import {Ionicons} from "@expo-vector-icons"
import {Platform} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {MainScreen} from '../screens/MainScreen'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {PostScreen} from '../screens/PostScreen'
import { TouchableHighlightComponent } from 'react-native'

const navigatorOptions={
    
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Platform.OS==='android' ? THEME.MAIN_COLOR : '#fff'
        },
        headerTintColor:Platform.OS==='android' ? "#fff" : THEME.MAIN_COLOR 
    }
}
const PostNavigator=createStackNavigator({
    Main:MainScreen,
    Post:{
        screen:PostScreen
    }
},navigatorOptions
)
const bookedNavigator=createStackNavigator({
    Booked:BookedScreen,
    Post:{
        screen:PostScreen
    }
},{
    initialRouteName:'Booked',
    navigatorOptions
}
)
const bottomTabsConfig={
    Post:{
        screen:PostNavigator,
        navigationOptions:{
            tabBarLabel:'все',
            tabBarIcon:info => <Ionicon name="ios-albums" size={25} color={info.tintColor}></Ionicon>
        }
    },
    Booked:BookedNavigator,
    navigationOptions:{
        tabBarLabel:'избранное',
        tabBarIcon:info => <Ionicon name="ios-star" size={25} color={info.tintColor}></Ionicon>
    }
}
const BottomNavigator=Playform.OS === 'android' ? createMaterialBottomTabNavigator(bottomTabsConfig,{
    activeTintColor:'#fff',
    shifting:true,
    barStyle:{
        backgroundColor:THEME.MAIN_COLOR
    }
}) : createBottomTabNavigator(bottomTabsConfig,{
   tabBarOptions:{
       activeTintColor:THEME.MAIN_COLOR
   } 
})
const AboutNavigator=createStackNavigator({
    About:{
        screen:AboutNavigator
    }
},navigatorOptions)
const CreateNavigator=createStackNavigator({
    Create:{
        screen:CreateNavigator
    }
},navigatorOptions)
const MainNavigator=createDrawerNavigator({
    PostTabs:{
        navigationOptions:{
            drawerLabel:"главная"
        },
        screen:BottomNavigator
    },
    About:{
        navigationOptions:{
            drawerLabel:"о приложении",
            drawerIcon:<Ionicons name="ios-star"/>
        },
        screen:AboutScreen
    },
    Create:{
        navigationOptions:{
            drawerLabel:"новый пост"
        },
        screen:CreateScreen
    },
},{
    contentOptions:{
        activeTintColor:THEME.MAIN_COLOR,
        labelStyle:{
            fontFamily:'open-bold'
        }
    }
})
// export const AppNavigation=createAppContainer(PostNavigator)
export const AppNavigation=createAppContainer(BottomNavigator)