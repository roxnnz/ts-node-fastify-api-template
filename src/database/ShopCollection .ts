import mongoose from 'mongoose';

export default class ShopCollection {
  Shop: mongoose.Model<mongoose.Document>;

  constructor() {
    this.Shop = mongoose.model('Shop', this.ShopSchema());
  }

  ShopSchema() {
    const Shop = new mongoose.Schema(
      {
        shopDetails: {
          name: { type: String },
          email: { type: String },
          category: { type: String },
        },
        createdAt: { type: Date, default: Date.now },
        status: { type: String, enum: ['active', 'in-active'], default: 'active' },
      },
      { versionKey: false }
    );
    return Shop;
  }
}
