import { getArticles } from "./database.js"

export const Articles = () => {
    const articles = getArticles()
    let articleHTML = "<ul>"
    for (const article of articles) {
        articleHTML += `<li
            data-id="${article.id}" 
            data-variety="article"
            data-date="${article.date_created}" 
            data-category-id="${article.categoryId}"
            data-author-id="${article.authorId}"
            data-headline="${article.headline}"
            data-body="${article.body}">
                ${article.headline}
            </li>    
        `
    }
    articleHTML += "</ul>"
    return articleHTML
}