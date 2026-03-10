import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const bioCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/data/bio" }),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			theme: z.enum(["dark", "light"]),
			blur: z.enum(["no blur", "blur"]),
			avatar: image(),
			background: image(),
		}),
});
const linksCollection = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{yml,yaml}", base: "./src/data/links" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		url: z.string(),
		order: z.number(),
	}),
});

export const collections = {
	bio: bioCollection,
	links: linksCollection,
};
