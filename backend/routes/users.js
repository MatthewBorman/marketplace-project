import {Router} from "express";
import { saveItem, getItems, removeItem, getUsers } from '../controllers/user_controller.js';

const router = Router();

router.get('/', getUsers);

router.post('/:userId/save', saveItem);

router.get('/:userId/get', getItems);

router.put('/:userId/remove', removeItem);

export default router;

