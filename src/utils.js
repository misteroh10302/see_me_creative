export const mySlug = (str) => {
    return str.trim().split(' ').join('-').toLowerCase();
}