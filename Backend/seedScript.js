import mongoose from "mongoose";
import { MONGO_URI } from "./src/config/config.js";
import Product from "./src/models/product.model.js";
import Category from "./src/models/category.model.js";
import { categoriesData, productData } from "./seedData.js";
import { promises as dns } from 'node:dns';

dns.setServers(['8.8.8.8', '1.1.1.1']);

async function seedDatabase() {
 try {
  await mongoose.connect(MONGO_URI);
  await Product.deleteMany({});
  await Category.deleteMany({});

  const categoryDocs = await Category.insertMany(categoriesData);

  const categoryMap = categoryDocs.reduce((map, category) => {
   map[category.name] = category._id;
   return map;
  })

  const productWithCategoryIds = productData.map((product) => ({
   ...product,
   category: categoryMap[product.category]
  }))

  await Product.insertMany(productWithCategoryIds);

  console.log('DATABASE SEEDED SUCCESSFULLY');
 } catch (error) {
  console.log('Error seeding database - ', error);
 } finally {
  mongoose.connection.close();
 }
}

seedDatabase();