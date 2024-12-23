import Home from '../page/Home/Home';
import Shoppingpage from '../page/Shoppingpage';
import Blog from '../page/Blog/Blog';
import About from '../page/About/About';
import Content from '../page/Content/Content';
import TotalComponents from '../components/layouts/TotalComponents/TotalComponents';
import ProductDetail from '../page/ProductDetail';

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
    path: '/content',
    component: Content,
    title: 'Content',
  },
];

export default publicRoutes;
