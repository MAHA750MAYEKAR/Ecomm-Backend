import { Category } from "../Schema/categorySchema.js"
export const categoryRepository = {
      createCategory: async (data) => {
            const category = await Category.create(data)
            return category
      },
      deleteCategory: async (id) => {
            const category = await Category.findByIdAndDelete(id)
            return category
      },
      updateCategory: async (id,updateobj) => {
            const category = await Category.findByIdAndUpdate(id.updateobj,{new:true})
            return category
      },
      findById: async (id) => {
            const category = await Category.findById(id)
            return category
      },
      findAllCategories: async () => {
            const categories = await Category.find()
            return categories
      },
      findCategoryByName:async (name) => {
            const category = await Category.findOne({name})
            return category
      },


}