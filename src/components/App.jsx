import { Product } from './Product';

export const App = () => (
  <div>
    <h1>Best selling products</h1>
    <Product
      imgUrl="<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>"
      name="Tacos With Lime"
      price={10.993}
    />
    <Product
      imgUrl="<https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640>"
      name="Fries and Burger"
      price={14.293}
    />
  </div>
);
