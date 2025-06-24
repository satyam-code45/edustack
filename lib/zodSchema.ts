import { z } from "zod";

export const courseLevels = ["Beginner", "Intermediate", "Advanced"] as const;

export const courseStatus = ["Draft", "Published", "Archived"] as const;

export const courseCategories = [
  "Web Development",
  "Data Science",
  "Finance",
  "Marketing",
  "Artificial Intelligence",
  "Business",
  "UI/UX Design",
  "Business Management",
  "Personal Development",
  "Health & Wellness",
] as const;

export const courseSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title must be a string",
    })
    .min(3, { message: "Title must be at least 3 characters long" })
    .max(100, { message: "Title must not exceed 100 characters" }),

  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    })
    .min(3, { message: "Description must be at least 3 characters long" })
    .max(600, { message: "Description must not exceed 600 characters" }),

  fileKey: z
    .string({
      required_error: "File key is required",
      invalid_type_error: "File key must be a string",
    })
    .min(3, { message: "File key must be at least 3 characters long" })
    .max(1000, { message: "File key must not exceed 1000 characters" }),

  price: z.coerce.number({
    required_error: "Price is required",
    invalid_type_error: "Price must be a number",
  }),

  duration: z.coerce
    .number({
      required_error: "Duration is required",
      invalid_type_error: "Duration must be a number",
    })
    .min(1, { message: "Duration must be at least 1 hour" }),

  level: z.enum(courseLevels, {
    required_error: "Level is required",
    invalid_type_error:
      "Level must be one of Beginner, Intermediate, or Advanced",
  }),

  category: z.enum(courseCategories, {
    required_error: "Category is required",
    invalid_type_error: "Category must be one of the predefined values",
  }),

  smallDescription: z
    .string({
      required_error: "Short description is required",
      invalid_type_error: "Short description must be a string",
    })
    .min(3, { message: "Short description must be at least 3 characters long" })
    .max(200, { message: "Short description must not exceed 200 characters" }),

  slug: z
    .string({
      required_error: "Slug is required",
      invalid_type_error: "Slug must be a string",
    })
    .min(3, { message: "Slug must be at least 3 characters long" })
    .max(40, { message: "Slug must not exceed 40 characters" }),

  status: z.enum(courseStatus, {
    required_error: "Status is required",
    invalid_type_error: "Status must be one of Draft, Published, or Archived",
  }),
});
