export type Post = {
    _id: string,
    body: string,
    title:string,
    status:number,
    author_id: Author,
    created_at: string,
    tags: string[],
}

export type PostPayload = {
    title: string,
    body: string,
    tags: string[],
}

export interface EditPostPayload {
    status?: number,
    title?: string,
    body?: string,
    tags?: string[],
}

export type Author = {
    username: string,
    _id: string,
}