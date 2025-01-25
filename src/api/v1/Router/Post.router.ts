import { Router } from "express";
import {
  create,
  update,
  getAll,
  getOne,
  remove,
  filter,
} from "../Controllers/post.controller.js";

const router = Router();

router.post("/create", create);
router.put("/update/:id", update);
router.get("/getOne/:id", getOne);
router.get("/getAll", getAll);
router.delete("/delete/:id", remove);
router.get("/filter", filter);

export default router;
