import { Prompt } from "@/types/prompt";

export const prompts: Prompt[] = [
  {
    title: "SEO Blog Post Generator",
    slug: "seo-blog-post-generator",
    prompt:
      "Act as an SEO expert. Write a 1500-word blog post about {topic}. Include headings, keyword optimization, and a meta description.",
    description:
      "Generate SEO-friendly blog posts for any topic with structure and optimization in mind.",
    category: "marketing",
    subcategory: "seo",
    aiTool: "chatgpt",
    tags: ["seo", "blog", "content marketing"],
    variables: ["topic"],
    difficulty: "beginner",
    useCases: ["blog writing", "seo content", "content marketing"],
    language: "en",
    createdAt: "2026-03-16",
    relatedPrompts: ["meta-description-generator", "blog-outline-generator"],
  },
  {
    title: "Cold Email Generator",
    slug: "cold-email-generator",
    prompt:
      "Write a persuasive cold email for {product} targeting {audience}. Keep it concise, personalized, and action-oriented.",
    description:
      "Create effective cold outreach emails for products, services, or B2B offers.",
    category: "marketing",
    subcategory: "email-marketing",
    aiTool: "chatgpt",
    tags: ["email", "sales", "outreach"],
    variables: ["product", "audience"],
    difficulty: "beginner",
    useCases: ["sales outreach", "lead generation", "email marketing"],
    language: "en",
    createdAt: "2026-03-16",
    relatedPrompts: ["sales-follow-up-email", "linkedin-outreach-message"],
  },
];