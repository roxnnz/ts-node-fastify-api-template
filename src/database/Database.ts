import ProductCollection from './ProductCollection';
import ShopCollection from './ShopCollection ';
import UserCollection from './UserCollection';
import DatabaseConnection from './Connections';

class Database extends DatabaseConnection {
  user;
  product;
  shop;

  constructor() {
    super();
    this.user = new UserCollection().User;
    this.product = new ProductCollection().Product;
    this.shop = new ShopCollection().Shop;
  }

  UserCollection() {
    return this.user;
  }
  ProductCollection() {
    return this.product;
  }
  ShopCollection() {
    return this.shop;
  }
}

export default Database;
