export const mySlug = (str) => {
    if (str) {
        return str.trim().split(' ').join('-').toLowerCase();
    }
    return `project-title-${Math.random()}`
}

export const cleanTitle = (str) => {
    if (str) {
        return str.replace(/ /g, '-').toLowerCase();
    }
    return `project-title-${Math.random()}`
}