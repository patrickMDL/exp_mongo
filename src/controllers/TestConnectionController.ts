import {Request, Response } from "express";

class testConnection{
    static handler( req: Request, res: Response ) {
        res.send("Connected");
        return res;
    }
}

export {testConnection};