import { z } from "zod";

export const validatePost = z.object({
  title: z.string(),
  content: z.string(),
  category: z.string(),
  tags: z.string().array().optional(),
});
