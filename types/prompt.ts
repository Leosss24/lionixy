export type Prompt = {
  title: string;
  slug: string;
  prompt: string;
  description: string;
  category: string;
  subcategory: string;
  aiTool: string;
  tags: string[];
  variables: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  useCases: string[];
  language: string;
  createdAt: string;
  relatedPrompts: string[];
};