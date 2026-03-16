import { prompts } from "@/data/prompts";
import { Prompt } from "@/types/prompt";

export function getAllPrompts(): Prompt[] {
  return prompts;
}

export function getPromptBySlug(slug: string): Prompt | undefined {
  return prompts.find((prompt) => prompt.slug === slug);
}

export function getRelatedPrompts(slugs: string[]): Prompt[] {
  return prompts.filter((prompt) => slugs.includes(prompt.slug));
}

export function getPromptsByCategory(category: string): Prompt[] {
  return prompts.filter((prompt) => prompt.category === category);
}

export function getPromptsByTool(tool: string): Prompt[] {
  return prompts.filter((prompt) => prompt.aiTool === tool);
}