import BusinessPartnerApi from '..'
import { RegisterBusinessPartnerRequest } from '../interfaces/api/register'
import { sportappApi } from '../../index'
import { LoginBusinessPartnerRequest } from '../interfaces/api/login'

jest.mock('../../index', () => ({
	sportappApi: {
		post: jest.fn(),
		get: jest.fn(),
		patch: jest.fn(),
		delete: jest.fn()
	}
}))

jest.mock('../../utils/global-variables', () => ({
	globalVariables: jest.fn(() => ({
		EXPO_PUBLIC_SPORTAPP_API_URL: 'http://localhost:3000/api'
	}))
}))

describe('BusinessPartnerApi', () => {
	const businessPartnerApi = new BusinessPartnerApi()

	describe('register', () => {
		it('should register a business partner', async () => {
			const data: RegisterBusinessPartnerRequest = {
				email: 'test@correo.com',
				password: 'password',
				business_partner_name: 'test'
			}

			const response = {
				status: '200',
				data: {
					business_partner_id: '1',
					email: 'test@correo.com',
					business_partner_name: 'test'
				}
			}

			;(
				sportappApi as jest.Mocked<typeof sportappApi>
			).post.mockResolvedValue(response)
			const result = await businessPartnerApi.register(data)
			expect(result).toEqual(response.data)
		})

		it('should not register a business partner', async () => {
			const data: RegisterBusinessPartnerRequest = {
				email: 'test@correo.com',
				password: 'password',
				business_partner_name: 'test'
			}

			const response = {
				status: '400',
				data: {
					message: 'error'
				}
			}

			;(
				sportappApi as jest.Mocked<typeof sportappApi>
			).post.mockRejectedValue(response)
			const result = await businessPartnerApi.register(data)
			expect(result).toEqual(false)
		})

		it('should not register a business partner', async () => {
			const data: RegisterBusinessPartnerRequest = {
				email: 'test@correo.com',
				password: 'password',
				business_partner_name: 'test'
			}

			const response = {
				status: '400',
				data: {
					message: 'error'
				}
			}

			;(
				sportappApi as jest.Mocked<typeof sportappApi>
			).post.mockRejectedValue(response)
			const result = await businessPartnerApi.register(data)
			expect(result).toEqual(false)
		})

		it('should not register a business partner, becouse responde with 401', async () => {
			const data: RegisterBusinessPartnerRequest = {
				email: 'test@corre.com',
				password: 'password',
				business_partner_name: 'test'
			}

			const response = {
				status: '401',
				data: {
					message: 'error'
				}
			}

			;(
				sportappApi as jest.Mocked<typeof sportappApi>
			).post.mockResolvedValue(response)
			const result = await businessPartnerApi.register(data)
			expect(result).toEqual(false)
		})
	})

	describe('login', () => {
		it('should login a business partner', async () => {
			const data: LoginBusinessPartnerRequest = {
				email: 'test@gmail.com',
				password: 'password'
			}

			const response = {
				status: '200',
				data: {
					business_partner_id: '1',
					email: 'test@correo.com',
					business_partner_name: 'test'
				}
			}

			;(
				sportappApi as jest.Mocked<typeof sportappApi>
			).post.mockResolvedValue(response)
			const result = await businessPartnerApi.login(data)
			expect(result).toEqual(response.data)
		})

		it('should not login a business partner', async () => {
			const data: LoginBusinessPartnerRequest = {
				email: 'test@correo.com',
				password: 'password'
			}

			const response = {
				status: '400',
				data: {
					message: 'error'
				}
			}

			;(
				sportappApi as jest.Mocked<typeof sportappApi>
			).post.mockRejectedValue(response)
			const result = await businessPartnerApi.login(data)
			expect(result).toEqual(false)
		})

		it('should not login a business partner', async () => {
			const data: LoginBusinessPartnerRequest = {
				email: 'test@correo.com',
				password: 'password'
			}

			const response = {
				status: '400',
				data: {
					message: 'error'
				}
			}

			;(
				sportappApi as jest.Mocked<typeof sportappApi>
			).post.mockRejectedValue(response)
			const result = await businessPartnerApi.login(data)
			expect(result).toEqual(false)
		})

		it('should not login a business partner, becouse responde with 401', async () => {
			const data: LoginBusinessPartnerRequest = {
				email: 'test@correo.com',
				password: 'password'
			}

			const response = {
				status: '401',
				data: {
					message: 'error'
				}
			}

			;(
				sportappApi as jest.Mocked<typeof sportappApi>
			).post.mockResolvedValue(response)
			const result = await businessPartnerApi.login(data)
			expect(result).toEqual(false)
		})
	})

	describe('createProduct', () => {
		it('should create a product', async () => {
			const data = {
				options: {
					headers: {
						Authorization: 'Bearer token'
					}
				},
				product: {
					product_id: '1',
					business_partner_id: '1',
					category: 'test',
					name: 'test',
					summary: 'test',
					url: 'test',
					price: 100,
					payment_type: 'test',
					payment_frequency: 'test',
					image_url: 'test',
					description: 'test',
					active: true
				}
			}

			const response = {
				status: '200'
			}

			;(
				sportappApi as jest.Mocked<typeof sportappApi>
			).post.mockResolvedValue(response)
			const result = await businessPartnerApi.createProduct(data)
			expect(result).toEqual(true)
		})

		it('should not create a product', async () => {
			const data = {
				options: {
					headers: {
						Authorization: 'Bearer token'
					}
				},
				product: {
					product_id: '1',
					business_partner_id: '1',
					category: 'test',
					name: 'test',
					summary: 'test',
					url: 'test',
					price: 100,
					payment_type: 'test',
					payment_frequency: 'test',
					image_url: 'test',
					description: 'test',
					active: true
				}
			}

			const response = {
				status: '400',
				data: {
					message: 'error'
				}
			}

			;(
				sportappApi as jest.Mocked<typeof sportappApi>
			).post.mockRejectedValue(response)

			const result = await businessPartnerApi.createProduct(data)
			expect(result).toEqual(false)
		})

		it('should not create a product and return other status code', async () => {
			const data = {
				options: {
					headers: {
						Authorization: 'Bearer token'
					}
				},
				product: {
					product_id: '1',
					business_partner_id: '1',
					category: 'test',
					name: 'test',
					summary: 'test',
					url: 'test',
					price: 100,
					payment_type: 'test',
					payment_frequency: 'test',
					image_url: 'test',
					description: 'test',
					active: true
				}
			}

			const response = {
				status: '400',
				data: {
					message: 'error'
				}
			}

			;(
				sportappApi as jest.Mocked<typeof sportappApi>
			).post.mockResolvedValue(response)

			const result = await businessPartnerApi.createProduct(data)
			expect(result).toEqual(false)
		})
	})

	describe('deleteProduct', () => {
		it('should delete a product', async () => {
			const data = {
				options: {
					headers: {
						Authorization: 'Bearer token'
					}
				},
				product_id: '1'
			}

			const response = {
				status: '200',
				data: {
					message: 'success'
				}
			}

			;(
				sportappApi as jest.Mocked<typeof sportappApi>
			).delete.mockResolvedValue(response)
			const result = await businessPartnerApi.deleteProduct(data)
			expect(result).toEqual(true)
		})

		it('should not delete a product', async () => {
			const data = {
				options: {
					headers: {
						Authorization: 'Bearer token'
					}
				},
				product_id: '1'
			}

			const response = {
				status: '400',
				data: {
					message: 'error'
				}
			}

			;(
				sportappApi as jest.Mocked<typeof sportappApi>
			).delete.mockRejectedValue(response)

			const result = await businessPartnerApi.deleteProduct(data)
			expect(result).toEqual(false)
		})

		it('should not delete a product and return other status code', async () => {
			const data = {
				options: {
					headers: {
						Authorization: 'Bearer token'
					}
				},
				product_id: '1'
			}

			const response = {
				status: '400',
				data: {
					message: 'error'
				}
			}

			;(
				sportappApi as jest.Mocked<typeof sportappApi>
			).delete.mockResolvedValue(response)

			const result = await businessPartnerApi.deleteProduct(data)
			expect(result).toEqual(false)
		})
	})

	describe('getProducts', () => {
		it('should get products', async () => {
			const data = {
				options: {
					headers: {
						Authorization: 'Bearer token'
					}
				},
				params: {
					offset: 0,
					limit: 10
				}
			}

			const response = {
				status: '200',
				data: [
					{
						product_id: '1',
						business_partner_id: '1',
						category: 'test',
						name: 'test',
						summary: 'test',
						url: 'test',
						price: 100,
						payment_type: 'test',
						payment_frequency: 'test',
						image_url: 'test',
						description: 'test',
						active: true
					}
				]
			}

			;(
				sportappApi as jest.Mocked<typeof sportappApi>
			).get.mockResolvedValue(response)
			const result = await businessPartnerApi.getAllProducts(data)
			expect(result).toEqual(response.data)
		})

		it('should not get products', async () => {
			const data = {
				options: {
					headers: {
						Authorization: 'Bearer token'
					}
				},
				params: {
					offset: 0,
					limit: 10
				}
			}

			const response = {
				status: '400',
				data: {
					message: 'error'
				}
			}

			;(
				sportappApi as jest.Mocked<typeof sportappApi>
			).get.mockRejectedValue(response)

			const result = await businessPartnerApi.getAllProducts(data)
			expect(result).toEqual(false)
		})

		it('should not get products and return other status code', async () => {
			const data = {
				options: {
					headers: {
						Authorization: 'Bearer token'
					}
				},
				params: {
					offset: 0,
					limit: 10
				}
			}

			const response = {
				status: '400',
				data: {
					message: 'error'
				}
			}

			;(
				sportappApi as jest.Mocked<typeof sportappApi>
			).get.mockResolvedValue(response)

			const result = await businessPartnerApi.getAllProducts(data)
			expect(result).toEqual(false)
		})
	})

	describe('updateProduct', () => {
		it('should update a product', async () => {
			const data = {
				options: {
					headers: {
						Authorization: 'Bearer token'
					}
				},
				product_id: '1',
				product: {
					product_id: '1',
					business_partner_id: '1',
					category: 'test',
					name: 'test',
					summary: 'test',
					url: 'test',
					price: 100,
					payment_type: 'test',
					payment_frequency: 'test',
					image_url: 'test',
					description: 'test',
					active: true
				}
			}

			const response = {
				status: '200'
			}

			;(
				sportappApi as jest.Mocked<typeof sportappApi>
			).patch.mockResolvedValue(response)

			const result = await businessPartnerApi.updateProduct(data)
			expect(result).toEqual(true)
		})

		it('should not update a product', async () => {
			const data = {
				options: {
					headers: {
						Authorization: 'Bearer token'
					}
				},
				product_id: '1',
				product: {
					product_id: '1',
					business_partner_id: '1',
					category: 'test',
					name: 'test',
					summary: 'test',
					url: 'test',
					price: 100,
					payment_type: 'test',
					payment_frequency: 'test',
					image_url: 'test',
					description: 'test',
					active: true
				}
			}

			const response = {
				status: '400',
				data: {
					message: 'error'
				}
			}

			;(
				sportappApi as jest.Mocked<typeof sportappApi>
			).patch.mockRejectedValue(response)

			const result = await businessPartnerApi.updateProduct(data)
			expect(result).toEqual(false)
		})

		it('should not update a product and return other status code', async () => {
			const data = {
				options: {
					headers: {
						Authorization: 'Bearer token'
					}
				},
				product_id: '1',
				product: {
					product_id: '1',
					business_partner_id: '1',
					category: 'test',
					name: 'test',
					summary: 'test',
					url: 'test',
					price: 100,
					payment_type: 'test',
					payment_frequency: 'test',
					image_url: 'test',
					description: 'test',
					active: true
				}
			}

			const response = {
				status: '400',
				data: {
					message: 'error'
				}
			}

			;(
				sportappApi as jest.Mocked<typeof sportappApi>
			).patch.mockResolvedValue(response)

			const result = await businessPartnerApi.updateProduct(data)

			expect(result).toEqual(false)
		})
	})

	describe('getProduct', () => {
		it('should get a product', async () => {
			const data = {
				options: {
					headers: {
						Authorization: 'Bearer token'
					}
				},
				product_id: '1'
			}

			const response = {
				status: '200',
				data: {
					product_id: '1',
					business_partner_id: '1',
					category: 'test',
					name: 'test',
					summary: 'test',
					url: 'test',
					price: 100,
					payment_type: 'test',
					payment_frequency: 'test',
					image_url: 'test',
					description: 'test',
					active: true
				}
			}

			;(
				sportappApi as jest.Mocked<typeof sportappApi>
			).get.mockResolvedValue(response)
			const result = await businessPartnerApi.getProduct(data)
			expect(result).toEqual(response.data)
		})

		it('should not get a product', async () => {
			const data = {
				options: {
					headers: {
						Authorization: 'Bearer token'
					}
				},
				product_id: '1'
			}

			const response = {
				status: '400',
				data: {
					message: 'error'
				}
			}

			;(
				sportappApi as jest.Mocked<typeof sportappApi>
			).get.mockRejectedValue(response)

			const result = await businessPartnerApi.getProduct(data)
			expect(result).toEqual(false)
		})

		it('should not get a product and return other status code', async () => {
			const data = {
				options: {
					headers: {
						Authorization: 'Bearer token'
					}
				},
				product_id: '1'
			}

			const response = {
				status: '400',
				data: {
					message: 'error'
				}
			}

			;(
				sportappApi as jest.Mocked<typeof sportappApi>
			).get.mockResolvedValue(response)

			const result = await businessPartnerApi.getProduct(data)
			expect(result).toEqual(false)
		})

		it('should not get a product and return other status code', async () => {
			const data = {
				options: {
					headers: {
						Authorization: 'Bearer token'
					}
				},
				product_id: '1'
			}

			const response = {
				status: '401',
				data: {
					message: 'error'
				}
			}

			;(
				sportappApi as jest.Mocked<typeof sportappApi>
			).get.mockResolvedValue(response)

			const result = await businessPartnerApi.getProduct(data)
			expect(result).toEqual(false)
		})
	})
})
