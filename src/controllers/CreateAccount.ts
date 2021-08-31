import {Request, Response} from "express";

class CreateAccounts{
    static CreateAccount(req: Request, res: Response){
        res.send("Account Created.");        
    }
}

export { CreateAccounts }