import express from "express";
import { homeRoute, toggleDish } from "../routeController/routeController.js";
const router = express.Router();
router.get("/", homeRoute);
router.get("/toggle/:dishId", toggleDish);
// router.post("/add", homeRoute);
export default router;
