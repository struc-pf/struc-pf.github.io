import { getCollection } from 'astro:content';

// Published case studies, sorted by `order`. Drafts never leave this function.
export async function getPublishedWork() {
  const entries = await getCollection('work', ({ data }) => !data.draft);
  return entries.sort((a, b) => a.data.order - b.data.order);
}
