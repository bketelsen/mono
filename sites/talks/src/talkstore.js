import allAdoc from '../../../content/talks/**/*.adoc';
import {toSlug, toCapitalize} from './services/slug';
import {getLangSimplified} from './services/lang';

const requiredFields = ['date', 'title', 'slug'];

class TalkStore {
    
    constructor() {
        this._posts = new Map();
        this._raw = new Map();
        this._categories = new Map();
        this._postsByCategory = new Map();
        allAdoc.forEach(post => this._add(post)); // adds post to this._posts
        this._index = [];
        for (const post of this._posts.values()) {
            const entry = TalkStore._toIndexEntry(post);
            this._index.push(entry);
        }
        this._index.sort((a, b) => b.date && b.date.localeCompare(a.date));
    }


    _add(post) {
        const postModel = TalkStore._toModel(post);
        const {slug, date} = postModel;
        this._categorize(postModel);
        this._posts.set(slug, postModel);
        this._raw.set(slug, post);
        return postModel;
    }

    _categorize(postModel){
        if (postModel.keywords) {
            postModel.keywords
                .map(k=> [toSlug(k), toCapitalize(k)])
                .forEach(([slug, name]) => {
                    let posts = this._postsByCategory.get(slug);
                    if (posts === undefined) {
                        posts = [postModel];
                        this._postsByCategory.set(slug, posts);
                    } else {
                        posts.push(postModel);
                    }
                    this._categories.set(slug, name);
            });    
        }
    }

    static _toModel({metadata, html, filename}) {
        const slug = metadata.slug || toSlug(filename.split('.')[0]);
        const post = {
            ...metadata,
            title: metadata.title || metadata.doctitle,
            summary: metadata.summary || metadata.description,
            html,
            slug,
            keywords: metadata.keywords ? metadata.keywords.split(',').map(k => k.trim()) : undefined,
        };
        TalkStore.validate(post);
        return post;
    }

    static validate(post) {
        requiredFields.forEach(f => TalkStore._validate(post, f));
    }

    static _validate(post, field) {
        if (!post[field]) {
            throw `[${post.slug}] Invalid post data: [${field}] field required`;
        }
    }

    static _toIndexEntry({title, image_url, summary, slug,  date, modified, updated, keywords}, langs){
        return {
            title, 
            summary, 
            slug, 
            image_url,
            date: updated || modified || date,
            keywords
        };
    }


    get index() {
        return this._index;
    }

    get posts() {
        return this._posts;
    }

    get categories() {
        return this._categories;
    }

    getByCategory(categorySlug) {
        const posts = this._postsByCategory.get(categorySlug);
        return posts ? posts : [];
    }

    get(slug) {
        return this._posts.get(slug);
    }

    getRaw(slug) {
        return this._raw.get(slug);
    }
}

export const store = new TalkStore();
