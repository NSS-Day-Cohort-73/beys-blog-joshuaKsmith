import { Authors } from "./authors.js"
import { Articles } from "./articles.js"
import { Categories } from "./categories.js"

export const BeyBlog = () => {

    return `
        <div class="top_row">
            <article class="authors_column">
                <h2>Authors</h2>
                ${Authors()}
            </article>
            <article class="articles_column">
                <h2>Articles</h2>
                ${Articles()}
            </article>
        </div>
        <article class="categories_column">
            <h2>Categories</h2>
            ${Categories()}
        </article>
    `

}
