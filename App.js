import 'react-native-gesture-handler'
import React, {useEffect, useState} from 'react'
import {StyleSheet, View, useWindowDimensions, StatusBar} from 'react-native'
import {Provider} from 'react-redux'
import SplashScreen from './source/Screens/SplashScreen'
import HomeScreen from './source/Screens/HomeScreen'
import store from './source/Redux/Store'
import Sidebar from './source/Components/navigation/Sidebar'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'
import Mainstack from './source/Components/navigation/Mainstack'

import DeviceInfo from 'react-native-device-info'
import Colors from './source/Components/Colors'

const Drawer = createDrawerNavigator()





const App = () => {
	const [navigateToHome, setNavigateToHome] = useState(false)
	let isTablet = DeviceInfo.isTablet()
	let {width, height} = useWindowDimensions()

	useEffect(() => {
		setTimeout(() => {
			setNavigateToHome(true)
		}, 3000)
	})

	return (
		<Provider store={store}>
			<View style={{...styles.container}}>
				<View
					style={{
						alignSelf: 'center',
						flex: 1,
						width: '100%',
						height: '100%',
					}}>
					{navigateToHome ? (
						<NavigationContainer>
							<Drawer.Navigator
								name='Drawer'
								drawerContent={(props) => <Sidebar {...props} />}>
								<Drawer.Screen name='Home' component={Mainstack} />
							</Drawer.Navigator>
						</NavigationContainer>
					) : (
						<SplashScreen />
					)}
				</View>
			</View>
		</Provider>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
		height: '100%',
		width: '100%',
	},
})

export default App
