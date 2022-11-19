import express from "express";
import cors from "cors";

import { dbConnection } from "../db.js";
import UserRouter from "../routes/user.routes.js";
import PublicRouter from "../routes/public.routes.js";

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT || "3030";
    this.HOST = process.env.HOST || "localhost";

    this.apiPaths = {
      public: "/",
      user: "/api/users",
    };

    this.db();
    this.middlewares();
    this.routes();
  }

  async db() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors());

    this.app.use(express.json());

    this.app.use(express.static("public"));

    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.use(this.apiPaths.public, PublicRouter);

    this.app.use(this.apiPaths.user, UserRouter);
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.clear();
      console.log(`Server running on http://${this.HOST}:${this.PORT} 🚀`);
    });
  }
}

export default Server;
