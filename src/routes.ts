import {Router} from "express";
import { testConnection } from "./controllers/TestConnectionController";
import { CreateAccounts } from "./controllers/CreateAccount";
const router = Router();

router.get("/testConnection", testConnection.handler);
router.post("/createAccount", CreateAccounts.CreateAccount);
export { router };