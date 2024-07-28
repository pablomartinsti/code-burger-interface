import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import ShoppingCarIcon from '@mui/icons-material/ShoppingCart'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import paths from '../../constants/paths'

const listLinks = [
    {
        id: 1,
        label: 'Pedidos',
        link: paths.Order,
        icon: ShoppingBagIcon
    },
    {
        id: 2,
        label: 'listar produtos',
        link: paths.Products,
        icon: ShoppingCarIcon
    },
    {
        id: 3,
        label: 'novo produto',
        link: paths.NewProduct,
        icon: AddShoppingCartIcon
    }
]

export default listLinks