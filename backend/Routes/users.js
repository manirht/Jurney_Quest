import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();
//create user
router.post("/", createUser);
//update a tour
router.put("/:id", verifyUser, updateUser);

//delete tour
router.delete("/:id", verifyUser, deleteUser);

//get single tour
router.get("/:id", verifyUser, getSingleUser);

//get all the tour
router.get("/", verifyAdmin, getAllUser);

export default router;
