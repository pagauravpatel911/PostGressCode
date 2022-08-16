import express, {Request, Response, NextFunction} from 'express';
import {Controller} from "./server"

class App {
  public app: express.Application;
  public port: any;

  constructor(port: any, controller: Controller[]) {
    this.app = express();
    this.port = port;
    this.initializeMiddleWares();
    this.initializeControllers(controller)
    this.initializeErrorHandler(this.listen);
  }

  private initializeMiddleWares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

    private initializeControllers(controllers: Controller[]) {
        controllers.forEach((controller) => {
            this.app.use("/", controller.router);
        });
    }

  private initializeErrorHandler(instance: any): void {
    process.on("unhandledRejection", (err: any) => {
      console.log(`Error: ${err.message}`);
      console.log(
        "Shutting down the server due to Unhandled Promise Rejection"
      );
      // instance.close(() => {
      //     process.exit(1)
      // })
    });
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}

export default App;