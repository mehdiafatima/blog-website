

import fs from "fs"
import matter from "gray-matter"
import { notFound } from "next/navigation"
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'


import OnThisPage from "../../../components/Onthispage"
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

// Define the type for the params
interface Params {
  slug: string;
}

export default async function Page({ params }: { params: Params }) {
  // Define the file path for the blog markdown file
  const filepath = `content/${params.slug}.md`
  
  // Check if the file exists, otherwise return a 404 page
  if (!fs.existsSync(filepath)) { 
    notFound() 
    return 
  }

  // Read the markdown file content
  const fileContent = fs.readFileSync(filepath, "utf-8")

  // Parse the front matter and content from the markdown file
  const { content, data } = matter(fileContent)

  // Process the markdown content to HTML
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: '👋🌍' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
   

  // Generate the HTML content from markdown
  const htmlContent = (await processor.process(content)).toString()

  return (
    <div className="max-w-6xl mx-auto p-4 ">
      {/* Post Title */}
      <h1 className="text-4xl font-bold mb-4 mt-9">{data.title}</h1>

      {/* Post Description */}
      <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">&quot;{data.description}&quot;</p>

      {/* Post Metadata */}
      <div className="flex gap-2">
        <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
        <p className="text-sm text-gray-500 mb-4">{data.date}</p>
      </div>

      {/* Render the Post Content */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose dark:prose-invert"></div>

      {/* On This Page Component */}
      <OnThisPage htmlContent={htmlContent} />
    </div>
  )
}
