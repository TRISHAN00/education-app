import Category from "@/model/category-mode";
async function getCategories() {
    const categories = Category.find().lean();
    console.log(categories)
    return categories
}

export { getCategories };

