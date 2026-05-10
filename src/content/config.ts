import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
          title: z.string(),
          excerpt: z.string(),
          date: z.coerce.date(),
          category: z.string(),
          readTime: z.string(),
          cover: z.string().optional(),
          coverEmoji: z.string().default('✍️'),
          author: z.string().default('Malatya Reklam'),
          draft: z.boolean().default(false),
          seoTitle: z.string().optional(),
          seoDescription: z.string().optional(),
            keywords: z.string().optional(),
    }),
});

export const collections = { blog };
