import Category from '../models/category.model';

export const getAllCategories = async (req, res) => {
 try {
  //used to fecth all categories stored
  const categories = Category.find();
  res.status(200).json({
   success: true,
   categories
  })
 } catch (error) {
  console.log("Category fetch error - ", error);
  res.status(500).json({
   message: `category fetch error : ${error}`
  })
 }
}
