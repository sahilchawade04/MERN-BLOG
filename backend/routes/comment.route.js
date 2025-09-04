import express from "express"

import { isAuthenticated } from "../middleware/isAuthenticated.js"
import { createComment, deleteComment, editComment, getAllCommentsOnMyBlogs, getCommentsOfPost, likeComment, replyToComment } from "../controllers/comment.controller.js";

const router = express.Router()

router.post('/:id/create', isAuthenticated, createComment);
router.delete("/:id/delete", isAuthenticated, deleteComment);
router.put("/:id/edit", isAuthenticated, editComment);
router.route("/:id/comment/all").get(getCommentsOfPost);
router.get('/:id/like', isAuthenticated, likeComment);
router.get('/my-blogs/comments', isAuthenticated, getAllCommentsOnMyBlogs);
router.post("/:commentId/reply", isAuthenticated, replyToComment);


export default router;