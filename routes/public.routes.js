import { Router } from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const router = Router();

router.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(join(__dirname, "..", "views/index.html"));
});

export default router;
