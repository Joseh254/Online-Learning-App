import { Router } from "express";
import { Signup,signin,Update,Delete } from "../CONTROLLERS/Users.Controller.js";
const router = Router()
router.post('/signup',Signup)
router.post('/signin',signin)
router.patch('/update',Update)
router.delete('/delete',Delete)
export default router