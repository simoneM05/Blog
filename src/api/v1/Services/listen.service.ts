import { Application } from "express";
import { PORT } from "../../Config/Config.js";

export const start = (app: Application) => {
  app.listen(PORT, () => {
    console.log(`server started on port:${PORT}`);
  });
};
