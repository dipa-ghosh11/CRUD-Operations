import express from "express"
import { createUser } from "../contollers/user.controllers.js";
import { getUser } from "../contollers/user.controllers.js";
import { updateUser } from "../contollers/user.controllers.js";
import { deleteUser } from "../contollers/user.controllers.js";

const router=express.Router();

router.post('/create', createUser)
router.get('/get',getUser)
router.put('/update/:id',updateUser)
router.delete('/delete/:id',deleteUser)

export default router;