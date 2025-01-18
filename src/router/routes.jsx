import App from '../App';
import HomeContent from '../pages/Home/components/HomeContent/HomeContent';
import ShopContent from '../pages/Shop/components/ShopContent/ShopContent';
import { productsLoader } from './loaders';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomeContent />,
      },
      {
        path: '/shop',
        loader: productsLoader,
        element: <ShopContent />,
      },
    ],
  },
];

export default routes;
