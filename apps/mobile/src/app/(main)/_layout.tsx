import React from 'react'

import { Stack } from 'expo-router/stack'

import {
	PaperProvider,
	Snackbar,
	Icon,
	Text,
	useTheme,
	MD3Theme
} from 'react-native-paper'

import { useAlertStore } from '@sportapp/stores'
import { View, StyleSheet, Dimensions } from 'react-native'

export default function AppLayout() {
	const theme = useTheme()
	const deviceHeight = Dimensions.get('window').height
	const styles = createStyles(theme, deviceHeight)
	const { alert, setAlert } = useAlertStore()

	const iconByAlertType = {
		error: 'alert-circle',
		success: 'check-circle',
		warning: 'alert-circle',
		info: 'information'
	}

	return (
		<PaperProvider>
			{/** PaperProvider allows modals to render the right way by providing it here */}
			<Stack>
				<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
			</Stack>
			{alert && (
				<Snackbar
					testID='alert'
					onIconPress={() => setAlert(undefined)}
					visible={!!alert}
					onDismiss={() => setAlert(undefined)}
					duration={alert.ttl ?? 5000}
					style={{
						...styles[alert.type],
						...styles[alert.position ?? 'bottom']
					}}>
					<View style={styles.row}>
						<Icon
							source={iconByAlertType[alert.type]}
							color={styles[alert.type].color}
							size={20}
						/>
						<Text style={styles[alert.type]}>{alert.message}</Text>
					</View>
				</Snackbar>
			)}
		</PaperProvider>
	)
}

const createStyles = (theme: MD3Theme, height: number) =>
	StyleSheet.create({
		row: {
			flexDirection: 'row',
			alignItems: 'center',
			gap: 20
		},
		error: {
			color: theme.colors.onError,
			backgroundColor: theme.colors.error
		},
		success: {
			color: theme.colors.onPrimary,
			backgroundColor: 'green'
		},
		warning: {
			color: theme.colors.onPrimary,
			backgroundColor: 'orange'
		},
		info: {
			color: theme.colors.onSecondary,
			backgroundColor: theme.colors.secondary
		},
		bottom: {
			position: 'absolute',
			bottom: 100,
			left: 0,
			right: 0
		},
		top: {
			position: 'absolute',
			bottom: height - 120,
			left: 0,
			right: 0
		},
		center: {
			position: 'absolute',
			bottom: height / 2,
			left: 0,
			right: 0
		}
	})
