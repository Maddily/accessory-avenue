import { ThreeDots } from 'react-loader-spinner';
import App from '../App';
import HomeContent from '../pages/Home/components/HomeContent/HomeContent';
import ShopContent from '../pages/Shop/components/ShopContent/ShopContent';
import { productsLoader } from './loaders';
import ErrorPage from '../pages/Error/ErrorPage/ErrorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <ThreeDots />,
    children: [
      {
        index: true,
        element: <HomeContent />,
      },
      {
        path: '/shop',
        loader: productsLoader,
        element: <ShopContent />,
        hydrateFallbackElement: (
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#5a9592"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass="loader"
          />
        ),
      },
    ],
  },
];

export default routes;
