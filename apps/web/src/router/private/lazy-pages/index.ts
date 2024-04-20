import { lazy } from 'react'

export const HomeLazy = lazy(() => import('@/pages/User/Home'))
export const ConfigLazy = lazy(() => import('@/pages/User/Config'))

// partner pages
export const HomePartnerLazy = lazy(() => import('@/pages/Partner/Home'))
export const CreateProductPartnerLazy = lazy(() => import('@/pages/Partner/CreateProduct'))
export const PurchasedProductPartnerLazy = lazy(() => import('@/pages/Partner/PurchasedProduct'))
