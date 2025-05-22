import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "Blog - My Personal Website",
  description: "A collection of my thoughts and experiences.",
}

export default async function BlogPage() {
  return <BlogClientPage />
}
