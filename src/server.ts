import App from "./app";
//import connectToDatabase from "./utils/connectDatabase";
import {EmployeeController} from '../src/controller/employerController'

import { DepartmentController } from "./controller/departmentController";

 
 import { Connect } from "./utils/connectDatabase";
import { Router } from "express";

export interface Controller {
    router: Router
}

const app = new App(8080,[new EmployeeController(),new DepartmentController()]);

const ConnecTion = new Connect()

ConnecTion.ConnectDatabase() 

app.listen();
