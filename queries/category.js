import Category from "@/model/category-model";
async function getCategories() {
    const categories = Category.find().lean();
    console.log(categories)
    return categories
}

export { getCategories };

