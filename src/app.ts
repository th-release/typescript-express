import { app, Server } from '../variable/express'
import { db } from '../variable/database'
import { SECRETHASH, TokenData } from '../variable/token';
import jwt from 'jsonwebtoken'
import { sha3_256 } from 'js-sha3'
import cors from 'cors'
app.use(cors())

app.get("/",(req: Server[0], res: Server[1], next: Server[2]) => {
    res.send("online");
  }
);

app.post("/login", async(req: Server[0], res: Server[1], next: Server[2]) => {
    const { username, password } = req.query
    const [user] = await db.select('*').from('Accounts').where('username', String(username))
    if (user && sha3_256(user.salt + password) === user.password) return res.send({ success: true, token: jwt.sign({ username }, SECRETHASH, { expiresIn: '2h' }), status: 200, msg: "로그인 되었습니다."}).status(200)
    else res.send({ success: false, msg: "비밀번호가 틀렸거나 유저가 없습니다."}); return res.status(404)
  }
);

export default app;