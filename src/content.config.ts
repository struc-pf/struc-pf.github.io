import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// A short titled point: "Manual processes" + one sentence.
const point = z.object({ title: z.string(), text: z.string() });

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    clientType: z.string(),
    tag: z.string(),
    services: z.array(z.enum(['Review', 'Build', 'Measure', 'Support'])).min(1),
    summary: z.string(),
    stats: z
      .array(z.object({ value: z.string(), caption: z.string() }))
      .max(3)
      .optional(),
    challengeTitle: z.string().default('The challenge'),
    challenges: z.array(point).min(1),
    diagram: z
      .object({
        title: z.string(),
        layout: z.enum(['flow', 'grid']).default('flow'),
        items: z.array(z.object({ name: z.string(), note: z.string().optional() })).min(2),
        caption: z.string().optional(),
      })
      .optional(),
    stepsTitle: z.string().default('What we did'),
    steps: z.array(point).optional(),
    outcomesTitle: z.string().default('What changed'),
    outcomes: z.array(point).min(1),
    quotes: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    order: z.number(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
