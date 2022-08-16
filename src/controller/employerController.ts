import express,{Request, Response, NextFunction} from "express";
import {Employer} from "../module/employerModel"
import {Department} from "../module/departmentModel"
import {QueryBuilder} from "typeorm";





interface Emp{
    firstName: string,
    lastName: string, 
    email: string, 
    employeeCardNumber: number, 
    salary: number
}

export class EmployeeController{
    public router = express.Router();


   constructor(){
  
    this.IntializeRoutes();
   }

   private IntializeRoutes(){
    this.router.post('/department/:departmentId/employer', this.createEmployer);

    this.router.get('/employer', this.getAllEmployers);
    this.router.patch("/employer/:employerId", this.updateUserById)
   }

private createEmployer = async function (req: Request, res: Response, next: NextFunction){
    try{
        const {departmentId} = req.params;
        const {firstName, lastName, email, employeeCardNumber, salary}: Emp = req.body;
        const departments = await Department.findOneBy({id: parseInt(departmentId)})
        if(!departments){
            return res.status(400).json({status: false, message: "Invalid department"});
        }
        const employer = Employer.create({
            first_name: firstName,
            last_name: lastName,
            email: email,
            department: departments,
            emp_card_number: employeeCardNumber,
            salary: salary
        })

        await employer.save()
        return res.status(201).json({status: true, data: employer});
    }catch(err: any){
        return res.status(500).json({status: 500, message: err.message});
    }
}

private getAllEmployers = async function (req: Request, res: Response, next: NextFunction){
    try{
        const allEmp = await Employer.find()
        return res.status(201).json({status: true, data: allEmp});
    }catch(err: any){
        return res.status(500).json({status: 500, message: err.message});
    }
}

 private updateUserById = async (req:Request, res: Response, next: NextFunction) => {
    try{
   const {employerId}  = req.params;
//    const{firstName,lastName,email,employeeCardNumber,salary} = req.body


//    const employee = await Employer.findOneBy({id: parseInt(employerId)})
//    if(!employee){
//       return res.status(404).send({message:false,msg:"employee id not found"})
//    }
   
   
// if(firstName){
//     employee.first_name = firstName;
// }
// if(lastName){
//     employee.last_name = lastName;
// }
// if(email){
//    employee.email = email;

// }


  const data = await Employer
    .createQueryBuilder()
    .update()
    .set(req.body)
    .where("id = :id", { id: parseInt(employerId) })
    .execute()

    // await employee.save()
    //     return res.status(200).json({status: true, data: employee});


   return res.status(200).send({status:"true", data:"data updated successfully" + data});
}catch(err:any) {
    return res.status(500).send({status: 'false',data:"something wrong happened" + err});
 }


}




}


