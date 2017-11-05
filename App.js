import React from 'react';
import {View, Text} from 'react-native';

import { TabNavigator } from 'react-navigation';

import Search from './src/pages/Search';
import Bookmark from './src/pages/Bookmark';

const App = TabNavigator({
	Search: {screen: Search},
	Bookmark: {screen: Bookmark},
},{
	tabBarPosition: 'bottom',
	tabBarOptions:{
		activeBackgroundColor: '#179CAB',
		activeTintColor: '#888',
		inactiveTintColor: "#bbb",
		labelStyle:{
			fontSize: 13,
			fontWeight: 'bold',
			paddingBottom: 13
		},
		style:{
			backgroundColor: "#e6e9ed"
		}
	}
});

export default App;