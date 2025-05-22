"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  Heart,
  Linkedin,
  Twitter,
  Facebook,
  Copy,
  Github,
  Youtube,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"

// Custom icon components for HackerOne and Bugcrowd
const HackerOneIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M7.5 12.5L10 15l6.5-6.5" />
  </svg>
)

const BugcrowdIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M12 16a4 4 0 100-8 4 4 0 000 8z" />
    <path d="M12 8v2M12 14v2M8 12h2M14 12h2" />
  </svg>
)

// Blog post data - REPLACE WITH YOUR CONTENT
const pageData = {
  title: "Blog Post Template Title",
  excerpt: "This is a template for creating new blog posts. Replace this with your blog post excerpt.",
  content:
    "<p>This is a template for your blog post content. Replace this HTML with your actual content.</p>" +
    "<h2>Section Heading</h2>" +
    "<p>Your paragraph text goes here. You can write as much as you need.</p>" +
    "<ul>" +
    "<li>Bullet point 1</li>" +
    "<li>Bullet point 2</li>" +
    "<li>Bullet point 3</li>" +
    "</ul>" +
    "<h2>Code Example</h2>" +
    "<p>Here's how to include a code snippet:</p>" +
    "<pre><code>// Your code goes here\nfunction example() {\n  console.log('Hello, world!');\n}</code></pre>" +
    "<h2>Adding Images</h2>" +
    "<p>To add an image with a caption:</p>" +
    '<div class="image-container">' +
    '<img src="/placeholder.svg?height=400&width=800" alt="Description of image" />' +
    '<p class="image-caption">Figure 1: Your image caption here</p>' +
    "</div>",
  image: "/placeholder.svg?height=400&width=600",
  date: "YYYY-MM-DD",
  author: "Author Name",
  authorImage: "/placeholder.svg?height=100&width=100",
  authorTitle: "Author Title",
  authorBio: "Author bio goes here. Write a short paragraph about the author's expertise and background.",
  category: "Category",
  likes: 0,
  readTime: "X min",
  tags: ["Tag1", "Tag2", "Tag3"],
  relatedPosts: [
    // List 2-3 related posts with their slugs
    {
      title: "Related Post 1 Title",
      excerpt: "Brief excerpt of related post 1",
      slug: "related-post-1-slug",
      image: "/placeholder.svg?height=400&width=600",
      date: "YYYY-MM-DD",
      author: "Author Name",
      category: "Category",
    },
  ],
}

export default function BlogPostTemplate() {
  // Functions for interactive elements
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    toast({
      title: "Link copied",
      description: "The article link has been copied to your clipboard",
    })
  }

  const handleLike = () => {
    toast({
      title: "Article liked",
      description: "Thank you for your feedback!",
    })
  }

  return (
    <div className="min-h-screen bg-malectrica-dark text-gray-100">
      <main className="container py-12">
        <div className="flex flex-col space-y-8">
          {/* Back to blog link */}
          <div className="flex justify-between items-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-malectrica-blue hover:text-malectrica-brightBlue transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </div>

          {/* Article header */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 items-center">
              <Badge className="bg-malectrica-blue/70 hover:bg-malectrica-blue text-white">{pageData.category}</Badge>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar className="mr-1 h-4 w-4" />
                {pageData.date}
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Clock className="mr-1 h-4 w-4" />
                {pageData.readTime} read
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{pageData.title}</h1>

            <p className="text-xl text-gray-300">{pageData.excerpt}</p>

            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={pageData.authorImage || "/placeholder.svg"} alt={pageData.author} />
                <AvatarFallback className="bg-malectrica-blue/20 text-malectrica-blue">
                  {pageData.author.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{pageData.author}</div>
                <div className="text-sm text-gray-400">{pageData.authorTitle}</div>
              </div>
            </div>
          </div>

          {/* Featured image */}
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src={pageData.image || "/placeholder.svg"}
              alt={pageData.title}
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>

          {/* Article content */}
          <div className="bg-malectrica-darker rounded-lg p-6 md:p-8 border border-malectrica-blue/20">
            <div className="prose prose-invert max-w-none prose-headings:text-malectrica-blue prose-a:text-malectrica-brightBlue prose-pre:bg-black/50 prose-pre:border prose-pre:border-malectrica-blue/20 prose-pre:rounded-md prose-img:rounded-lg">
              <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-malectrica-blue/20">
              <div className="flex flex-wrap gap-2 items-center">
                <Tag className="h-4 w-4 text-gray-400" />
                {pageData.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="bg-malectrica-purple/20 text-malectrica-purple">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Article actions */}
            <div className="mt-6 flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={handleLike}>
                  <Heart className="h-4 w-4" />
                  Like ({pageData.likes})
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Share:</span>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Share on Twitter</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">Share on LinkedIn</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Share on Facebook</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={handleCopyLink}>
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy link</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Author bio */}
          <div className="bg-malectrica-darker rounded-lg p-6 border border-malectrica-blue/20">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <Avatar className="h-24 w-24">
                <AvatarImage src={pageData.authorImage || "/placeholder.svg"} alt={pageData.author} />
                <AvatarFallback className="bg-malectrica-blue/20 text-malectrica-blue text-xl">
                  {pageData.author.charAt(0)}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">About {pageData.author}</h3>
                <p className="text-gray-300 mb-4">{pageData.authorBio}</p>
                <div className="flex justify-center md:justify-start gap-2">
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Twitter className="h-4 w-4 mr-2" />
                    Follow
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Linkedin className="h-4 w-4 mr-2" />
                    Connect
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Related posts */}
          {pageData.relatedPosts && pageData.relatedPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {pageData.relatedPosts.map((post, i) => (
                  <Card
                    key={i}
                    className="bg-malectrica-darker border-malectrica-blue/20 hover:bg-malectrica-blue/10 transition-colors"
                  >
                    <div
                      className="h-48 bg-cover bg-center rounded-t-lg"
                      style={{ backgroundImage: `url(${post.image})` }}
                    ></div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <Badge className="bg-malectrica-blue/70 hover:bg-malectrica-blue text-white">
                          {post.category}
                        </Badge>
                        <span className="text-gray-400">{post.date}</span>
                      </div>
                      <CardTitle className="text-xl text-white">{post.title}</CardTitle>
                      <CardDescription className="pt-2 text-gray-400">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardFooter className="pt-4 flex items-center justify-between">
                      <div className="text-sm text-gray-300">By {post.author}</div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="gap-1 text-malectrica-blue hover:text-malectrica-brightBlue"
                        >
                          Read <ArrowLeft className="h-4 w-4 rotate-180" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Company Socials */}
          <div className="mt-12 mb-8 py-8 border-t border-b border-malectrica-blue/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Connect with Malectrica</h3>
              <p className="text-gray-400 mb-6">Stay updated with our latest research and insights</p>
              <div className="flex justify-center space-x-6">
                <Link href="https://github.com/malectrica" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://youtube.com/malectrica" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com/company/malectrica" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://hackerone.com/malectrica" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <HackerOneIcon className="h-5 w-5" />
                    <span className="sr-only">HackerOne</span>
                  </Button>
                </Link>
                <Link href="https://bugcrowd.com/malectrica" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <BugcrowdIcon className="h-5 w-5" />
                    <span className="sr-only">Bugcrowd</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
