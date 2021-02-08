import Database from '../../database/Database';

class ShopDao extends Database {
  constructor() {
    super();
    super.connect();
  }
  public CreateShop(shop: any) {
    try {
      return super.ShopCollection().create(shop);
    } catch (error) {
      console.log(error.message);
    }
  }

  public GetShopDetailsByShopId(shopId: any) {
    try {
      return super.ShopCollection().find(shopId);
    } catch (error) {
      console.log(error.message);
    }
  }
}
export default new ShopDao();
