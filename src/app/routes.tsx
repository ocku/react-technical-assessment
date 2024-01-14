// vendors
import { createBrowserRouter } from 'react-router-dom';
// views
import { HomeView } from './views/home/home.view';
import { ProductsView } from './views/products/products.view';
import { OrdersView } from './views/orders/orders.view';
import { CreateProductView } from './views/create-product/create-product.view';
import { EditProductView } from './views/edit-product/edit-product.view';
import { CreateOrderView } from './views/create-order/create-order.view';
import { EditOrderView } from './views/edit-order/edit-order.view';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />,
  },
  {
    path: '/products',
    element: <ProductsView />,
  },
  {
    path: '/orders',
    element: <OrdersView />,
  },
  {
    path: '/orders/new',
    element: <CreateOrderView />,
  },
  {
    path: '/products/new',
    element: <CreateProductView />,
  },
  {
    path: '/products/:id',
    element: <EditProductView />,
  },
  {
    path: '/orders/:id',
    element: <EditOrderView />,
  },
]);
