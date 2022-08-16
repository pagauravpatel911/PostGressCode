import express,{Request, Response, NextFunction} from "express";
import {Department} from "../module/departmentModel"



export class DepartmentController{

  public router = express.Router();
     

    constructor(){
     this.IntializeRoutes();
    }


    

    private IntializeRoutes(){
        this.router.post('/department', this.createDepartment);
       }


  private  createDepartment = async function(req: Request, res: Response, next: NextFunction){
    try{
        const {departmentName} = req.body;
        const department = Department.create({
            name_of_department: departmentName
        });
        await department.save();
        return res.status(200).json({status: true, data: department});
    }catch(err: any){
        return res.status(500).json({status: false, message: err.message});
    }
}

}


