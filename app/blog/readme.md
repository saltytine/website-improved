# Malectrica Blog System

This README provides instructions for managing the Malectrica blog, manual style.

## How the Blog System Works

1. Blog posts are stored as objects in an array in the code
2. Each blog post has a unique slug that is used for routing
3. The blog listing page displays all blog posts
4. Individual blog post pages display the full content of a single post

## Adding a New Blog Post

To add a new blog post:

1. Open `app/blog/[slug]/page.tsx`
2. Find the `blogPosts` array
3. Add a new object to the array with the following properties:

```js
{
  title: "Your Blog Post Title",
  excerpt: "A brief summary of your blog post (1-2 sentences)",
  content: "The full HTML content of your blog post",
  image: "/path/to/featured/image.jpg", // or use placeholder: "/placeholder.svg?height=400&width=600"
  date: "YYYY-MM-DD",
  author: "Author Name",
  authorImage: "/path/to/author/image.jpg", // or use placeholder
  authorTitle: "Author's Title/Position",
  authorBio: "A brief bio of the author (1-2 sentences)",
  category: "Category Name", // e.g., "Trends", "Cloud Security", "Threat Intelligence"
  likes: 0, // Initial like count
  readTime: "X min", // Estimated read time
  tags: ["Tag1", "Tag2", "Tag3"], // Array of relevant tags
  slug: "your-blog-post-slug", // URL-friendly version of the title (lowercase, hyphens instead of spaces)
}
```

4. The `content` property should contain the full HTML content of your blog post. You can include:
   - Paragraphs: `<p>Your paragraph text</p>`
   - Headings: `<h2>Section Title</h2>`, `<h3>Subsection Title</h3>`, etc.
   - Lists: `<ul><li>Item 1</li><li>Item 2</li></ul>` or `<ol><li>Item 1</li><li>Item 2</li></ol>`
   - Code blocks: `<pre><code>Your code here</code></pre>`
   - Images: `<div class="image-container"><img src="/path/to/image.jpg" alt="Description" /><p class="image-caption">Figure 1: Caption</p></div>`

## Blog Post Content Guidelines

When writing the HTML content for your blog post:

1. Use proper HTML structure with paragraphs, headings, lists, etc.
2. For code blocks, use `<pre><code>` tags and escape special characters
3. For images, wrap them in a `<div class="image-container">` and include a caption

## Updating or Removing Blog Posts

To update a blog post:
1. Find the blog post object in the `blogPosts` array
2. Modify the properties as needed

To remove a blog post:
1. Find the blog post object in the `blogPosts` array
2. Delete the entire object from the array

## Managing Blog Posts

1. Keep the `slug` unique for each blog post
2. Use consistent categories and tags to help with organization (for the rest of us)
3. Include *high-quality* images that
4. Update the date when making significant changes to a blog post

## Example Blog Post Object

```js
{
  title: "Understanding Zero Trust Architecture",
  excerpt: "A comprehensive guide to implementing Zero Trust security principles in modern organizations.",
  content: "<p>Zero Trust is a security concept centered on the belief that organizations should not automatically trust anything inside or outside its perimeters.</p><h2>Core Principles of Zero Trust</h2><p>The main principles include:</p><ul><li>Verify explicitly</li><li>Use least privilege access</li><li>Assume breach</li></ul>...",
  image: "/placeholder.svg?height=400&width=600",
  date: "2024-04-15",
  author: "Alex Johnson",
  authorImage: "/placeholder.svg?height=100&width=100",
  authorTitle: "Security Architect",
  authorBio: "Alex is a security architect with 12 years of experience designing secure systems for enterprise organizations.",
  category: "Security Architecture",
  likes: 0,
  readTime: "10 min",
  tags: ["Zero Trust", "Security Architecture", "Access Control"],
  slug: "understanding-zero-trust-architecture",
}
```