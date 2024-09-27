import { getAuthors } from "./database.js"

export const Authors = () => {
    const authors = getAuthors()
    let authorHTML = "<ul>"
    for (const author of authors) {
        authorHTML += `<li
            data-id="${author.id}" 
            data-variety="author"
            data-bio="${author.bio}" 
            data-name="${author.name}">
                ${author.name}
            </li>    
        `
    }
    authorHTML += "</ul>"
    return authorHTML
}