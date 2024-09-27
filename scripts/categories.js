import { getCategories } from "./database.js"

export const Categories = () => {
    const categories = getCategories()
    let categoryHTML = "<ul>"
    for (const category of categories) {
        categoryHTML += `<li
            data-id="${category.id}" 
            data-variety="category"
            data-name="${category.name}">
                ${category.name}
            </li>    
        `
    }
    categoryHTML += "</ul>"
    return categoryHTML
}