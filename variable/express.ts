import express from "express";

export const app: express.Application = express();
export type Server  = [express.Request, express.Response, express.NextFunction]