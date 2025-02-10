import App from '../App';
import SkeletonHome from '../pages/Home/components/SkeletonHome/SkeletonHome';
import SkeletonShop from '../pages/Shop/components/SkeletonShop/SkeletonShop';
import HomeContent from '../pages/Home/components/HomeContent/HomeContent';
import ShopContent from '../pages/Shop/components/ShopContent/ShopContent';
import { productsLoader } from './loaders';
import ErrorPage from '../pages/Error/components/ErrorPage/ErrorPage';
import FaqsContent from '../pages/FAQS/components/FaqsContent/FaqsContent';
import CartContent from '../pages/Cart/components/CartContent/CartContent';

const faqGroups = [
  {
    'Shipping & Delivery': [
      {
        question: 'How long does it take to receive my order?',
        answer:
          'All orders are processed within 1-2 business days. Standard shipping usually takes 3-7 business days, depending on your location.',
      },
      {
        question: 'Do you offer expedited shipping?',
        answer:
          'Yes! We offer expedited shipping options at checkout. Delivery typically takes 1-3 business days.',
      },
    ],
  },
  {
    'Returns & Refunds': [
      {
        question: 'What is your return policy?',
        answer:
          'We accept returns within 30 days of purchase. Items must be unused, in their original packaging, and accompanied by proof of purchase.',
      },
      {
        question: 'How do I request a refund?',
        answer:
          "Simply contact us at returns@accessoryavenue.com with your order details. We'll guide you through the process.",
      },
    ],
  },
  {
    'Products & Compatibility': [
      {
        question: 'How do I know if a case is compatible with my phone?',
        answer:
          'Each product description includes a list of compatible models. If you’re unsure, feel free to reach out to our support team!',
      },
      {
        question: 'Are your accessories durable?',
        answer:
          'Yes! We pride ourselves on offering high-quality, reliable products designed to stand the test of time.',
      },
    ],
  },
  {
    'Payments & Promotions': [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, PayPal, and Google Pay.',
      },
      {
        question: 'Do you offer discounts or promo codes?',
        answer:
          'Yes! Sign up for our newsletter to receive exclusive deals and updates.',
      },
    ],
  },
  {
    'Warranty & Support': [
      {
        question: 'Do your products come with a warranty?',
        answer:
          'Yes, we offer a 6-month warranty against manufacturing defects. For more details, check the product page.',
      },
      {
        question: 'How do I contact customer support?',
        answer:
          "You can reach us at support@accessoryavenue.com or (555) 555-5555. We're available Monday to Friday, 9 AM - 5 PM.",
      },
    ],
  },
  {
    Miscellaneous: [
      {
        question: 'Are your products eco-friendly?',
        answer: 'Yes! We use 100% recyclable packaging to reduce waste.',
      },
      {
        question: 'Do you sell gift cards?',
        answer: 'Not yet, but we’re working on it! Stay tuned for updates.',
      },
    ],
  },
];

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <SkeletonHome />,
    children: [
      {
        index: true,
        element: <HomeContent />,
      },
      {
        path: '/shop',
        loader: productsLoader,
        element: <ShopContent />,
        hydrateFallbackElement: <SkeletonShop />,
      },
      {
        path: '/faqs',
        element: <FaqsContent faqGroups={faqGroups} />,
      },
      {
        path: '/cart',
        element: <CartContent />,
      },
    ],
  },
];

export default routes;
