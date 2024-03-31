import TextFieldPasswordController from '@/components/Inputs/TexFieldPasswordController'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@mui/material'
import TextFieldController from 'components/Inputs/TexFieldController'
import { useForm } from 'react-hook-form'
import './_index.scss'
import { Props } from './interfaces'
import schema from './utils/schema'

export default function RegisterContainer({ onHandleSubmit }: Props) {
	const { handleSubmit, control } = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			name: '',
			lastName: '',
			email: '',
			password: ''
		},
		mode: 'onChange'
	})

	const onSubmit = (data: unknown) => {
		onHandleSubmit(data)
	}
	return (
		<form className='register-form' onSubmit={handleSubmit(onSubmit)}>
			<TextFieldController
				// @ts-ignore
				control={control}
				fullWidth
				label='Nombre'
				name='name'
			/>
			<TextFieldController
				// @ts-ignore
				control={control}
				fullWidth
				label='Apellido'
				name='lastName'
			/>
			<TextFieldController
				// @ts-ignore
				control={control}
				fullWidth
				label='Correo electronico'
				name='email'
			/>
			<TextFieldPasswordController
				// @ts-ignore
				control={control}
				fullWidth
				label='Contraseña'
				name='password'
			/>
			<Button fullWidth size='large' type='submit' variant='contained'>
				Ingresar
			</Button>
		</form>
	)
}
