import express from 'express';
import { usersignup,userlogin,userdata} from '../controllers/user-controller.js';


const router = express.Router();

router.post('/signup',usersignup);
router.post('/login',userlogin);
router.post('/userdata',userdata)
// router.get('/products',getProducts)
// router.get('/product/:id',getDetailProduct)

export default router