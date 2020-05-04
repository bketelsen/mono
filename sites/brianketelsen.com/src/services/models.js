import { SNACK_BASE_PATH, PROJECTS_BASE_PATH, BLOG_BASE_PATH, BASE_URL } from '../conf';

export function path(slug, lang = '') {
    if (lang) {
        return `/${BLOG_BASE_PATH}/${slug}/${lang}`;    
    } else {
        return `/${BLOG_BASE_PATH}/${slug}`;
    }
}

export function projectPath(slug) {
        return `/${PROJECTS_BASE_PATH}/${slug}`;
}

export function projectUrl(slug){
    return `${BASE_URL}${projectPath(slug)}`;
}
export function snackPath(slug) {
        return `/${SNACK_BASE_PATH}/${slug}`;
}

export function snackUrl(slug){
    return `${BASE_URL}${snackPath(slug)}`;
}
export function url(slug, lang = ''){
    return `${BASE_URL}${path(slug, lang)}`;
}
