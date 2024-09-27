import { Authors } from "./authors.js"
import { Articles } from "./articles.js"
import { Categories } from "./categories.js"

export const BeyBlog = () => {
    //const mainHTML =
    return `
        <article class="authors column">
            <h2>Authors</h2>
            ${Authors()}
        </article>
        <article class="articles column">
            <h2>Articles</h2>
            ${Articles()}
        </article>
        <article class="categories column">
            <h2>Categories</h2>
            ${Categories()}
        </article>
    `
    //return mainHTML
}
