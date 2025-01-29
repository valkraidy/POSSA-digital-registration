import express from 'express'
import { acceptRegistration, registerSemester } from '../Controllers/RegisterationControllers.js';
const router = express()
export default router;


//Endpoint to register a user
router.post('/semRegisteration', registerSemester)


//Enpoint to accept registeration by Admin 
router.post('/approveRegisteration', acceptRegistration)
