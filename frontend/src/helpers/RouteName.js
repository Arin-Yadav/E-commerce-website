export const RouteIndex = '/'
export const RouteLogin = '/login'
export const RouteSignup = '/signup'
export const RouteAbout = '/about'
export const RouteCart = '/cart'
export const RouteCollection = '/collection'
export const RouteContact = '/contact'
export const RouteOrders = '/orders'
export const RoutePlaceOrders = '/place-orders'
export const RouteProduct = (productId) => {
    if(!productId) {
        return `/product/:productId`
    } else {
        return `/product/${productId}`
    }
}