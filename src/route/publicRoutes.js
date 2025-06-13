import Home from '../page/Home/Home';
import Shoppingpage from '../page/Shoppingpage';
import Blog from '../page/Blog/Blog';
import About from '../page/About/About';
import Content from '../page/Content/Content';
import TotalComponents from '../components/layouts/TotalComponents/TotalComponents';
import ProductDetail from '../page/ProductDetail';
import Checkout from '../page/Checkout';
import CompleteOrder from '../page/CompleteOrder/CompleteOrder';
import ErrorPage from '../page/ErrorPage/ErrorPage';
import BlogPost from '../page/Blog/BlogDetail/BlogDetai';
const publicRoutes = [
  {
    path: '/',
    component: TotalComponents,
    title: 'Home',
  },
  {
    path: '/products',
    component: Shoppingpage,
    title: 'Products',
  },
  {
    path: '/products/:id',
    component: ProductDetail,
    title: 'Products Detail',
  },
  {
    path: '/blog/:id',
    component: BlogPost,
    title: 'Blog',
  },
  {
    path: '/checkout',
    component: Checkout,
    title: 'Checkout',
  },
  {
    path: '/blog',
    component: Blog,
    title: 'Blog',
  },
  {
    path: '/about',
    component: About,
    title: 'About',
  },
  {
    path: '/contact',
    component: Content,
    title: 'Content',
  },
  {
    path: '/complete',
    component: CompleteOrder,
    title: 'CompleteOrder',
  },
  {
    path: '/error',
    component: ErrorPage,
    title: 'ErrorPage',
  },
];

export default publicRoutes;
