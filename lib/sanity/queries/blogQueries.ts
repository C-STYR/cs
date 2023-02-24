// returns a list of all indexable articles

export const blogQuery = `
*[_type == "blogArticle" && indexable ] {
    title, 
    "slug": slug.current, 
    description, 
    body
}
`

export const getAllBlogIndexablePosts = `
*[_type == "blogArticle" && indexable ] | order(publishedDate desc){
    title, 
    "slug": slug.current,
}
`

export const articleBySlugQuery = `
  *[_type == "blogArticle" && slug.current == $slug][0] { 
    title, 
    body
}`;
