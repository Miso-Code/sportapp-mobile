import Spinner from '@/components/Spinner'
import { Box } from '@mui/material'
import { usePartnerAuthStore } from '@sportapp/stores/src/partner/auth'
import { useAuthStore } from '@sportapp/stores/src/auth'
import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function Layout() {
	const { isAuth } = useAuthStore()
	const { isAuth: isAuthPartner } = usePartnerAuthStore()
	if (!isAuth || !isAuthPartner) return <Navigate to='/' replace />
	return (
		<Suspense
			fallback={
				<Box
					sx={{
						display: 'grid',
						placeContent: 'center',
						width: '100vw',
						height: '100vh'
					}}>
					<Spinner />
				</Box>
			}>
			<Outlet />
		</Suspense>
	)
}
