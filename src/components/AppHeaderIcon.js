import React from 'react'
import {Platform} from 'react-native'
import {HeaderButton} from 'react-navigation-header-buttons'
export const AppHeaderIcon=props=>(
<HeaderButton IconComponent={Ionicons} iconSize={24} color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR }/>
)