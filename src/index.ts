import app from "./app";
import {createServer} from "http";

import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT?Number(process.env.PORT):80;
const server = createServer(app);

server.listen(port, () => {
  console.log(`${port}포트 서버 대기 중!`);
});