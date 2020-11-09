export const mySlug = (str) => {
    return str.trim().split(' ').join('-').toLowerCase();
}

export const cleanTitle = (str) => {
    return str.replace(/ /g, '-').toLowerCase();
}