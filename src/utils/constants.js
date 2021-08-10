import {
  FaMugHot,
  FaGlassCheers,
  FaBomb,
  FaMortarPestle,
  FaHome,
  FaLocationArrow,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa'
import gingerTea from '../assets/product-1.jpeg'
import fruitSangria from '../assets/product-2.jpeg'
import whiteTea from '../assets/product-3.jpeg'
export const links = [
  {
    id: 1,
    name: 'home',
    url: './',
  },
  {
    id: 2,
    name: 'skills',
    url: '/skills',
  },
  {
    id: 3,
    name: 'about',
    url: '/about',
  },
  {
    id: 4,
    name: 'products',
    url: '/products',
  },
  {
    id: 5,
    name: 'services',
    url: '/services',
  },
]
export const skills = [
  {
    id: 1,
    icon: <FaMugHot />,
    title: 'made in US',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum?',
  },
  {
    id: 2,
    title: 'relaxation',
    icon: <FaGlassCheers />,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum?',
  },
  {
    id: 3,
    title: 'energy',
    icon: <FaBomb />,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum?',
  },
  {
    id: 4,
    title: 'family recipe',
    icon: <FaMortarPestle />,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum?',
  },
]
export const products = [
  {
    id: 1,
    image: gingerTea,
    title: 'ginger peach tea',
    price: '$6.99',
  },
  {
    id: 2,
    image: fruitSangria,
    title: 'fruit sangria',
    price: '$9.99',
  },
  {
    id: 3,
    image: whiteTea,
    title: 'white tea',
    price: '$19.99',
  },
]
export const services = [
  {
    id: 1,
    title: 'custom recipe',
    image: gingerTea,
    icon: <FaMortarPestle />,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore sed deserunt, blanditiis error doloremque.',
  },
  {
    id: 2,
    title: 'home delivery',
    image: fruitSangria,
    icon: <FaHome />,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore sed deserunt, blanditiis error doloremque.',
  },
  {
    id: 3,
    title: 'tea aging',
    image: whiteTea,
    icon: <FaMugHot />,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore sed deserunt, blanditiis error doloremque.',
  },
]
export const contactInfo = [
  {
    id: 1,
    name: 'address',
    icon: <FaLocationArrow />,
    text: '523 n fairfax ave',
    text2: ' los angeles, ca 90048',
  },
  {
    id: 2,
    name: 'email',
    icon: <FaEnvelope />,
    text: 'email@email.com',
  },
  {
    id: 3,
    name: 'telephone',
    icon: <FaPhone />,
    text: '+ 123 456 789',
  },
]
export const socials = [
  {
    id: 1,
    icon: <FaFacebook />,
  },
  {
    id: 2,
    icon: <FaTwitter />,
  },
  {
    id: 3,
    icon: <FaInstagram />,
  },
]