import { APIError } from "../Interfaces/Error.interface.js";
import { IPost } from "../Interfaces/Post.type.js";
import { CustomRequest } from "../Interfaces/Request.interface.js";
import { Post } from "../Models/post.model.js";
import { validatePost } from "../Validations/Post.validate.js";

export const create: CustomRequest = async (req, res) => {
  try {
    const result = validatePost.safeParse(req.body);
    if (!result.success)
      throw new APIError(`error: ${result.error.message} `, 400);
    const { title, content, category, tags }: IPost = req.body;
    const NewPost: IPost = await new Post({
      title,
      content,
      category,
      tags,
    }).save();
    if (!NewPost) throw new APIError("Post not created", 201);
    res.status(201).json("Post created");
  } catch (error: unknown) {
    if (error instanceof APIError) {
      console.error(Error);
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

export const update: CustomRequest = async (req, res) => {};
export const getOne: CustomRequest = async (req, res) => {};
export const getAll: CustomRequest = async (req, res) => {};
export const remove: CustomRequest = async (req, res) => {};
export const filter: CustomRequest = async (req, res) => {};
