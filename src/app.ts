import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./routes/routes";
import { globalErrorhandler } from "./middlewares/globalErrorhandler";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "server is running",
  });
});

app.use("/api/v1", router);

app.use(globalErrorhandler);

export default app;
