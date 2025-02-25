export const homepageQuery = `{
  homepage {
    title
  }
}`

export const allBlogPostsQuery = `{
  allBlogPosts{
   images{
   id
      url
    }
  }
}`

export const allCardsQuery = `{
  allCards{
  id
    title
    images{
      id
      url
    }
      slug
  }
}`
