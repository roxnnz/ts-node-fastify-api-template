import mongoose from 'mongoose';

export default class ProductCollection {
  Product: mongoose.Model<mongoose.Document>;

  constructor() {
    this.Product = mongoose.model('Product', this.ProductSchema());
  }

  ProductSchema() {
    const Product = new mongoose.Schema(
      {
        productDetails: {
          name: { type: String },
          price: { type: String },
        },
        createdAt: { type: Date, default: Date.now },
        status: { type: String, enum: ['In Stock', 'Out Stock'], default: 'In Stock' },
      },
      { versionKey: false }
    );
    return Product;
  }
}
