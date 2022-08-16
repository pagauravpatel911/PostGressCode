import {Request, Response, NextFunction} from "express";
import {Employee} from "../module/employeeModel"
import {Employer} from "../module/employerModel"
import {QueryBuilder, getRepository} from "typeorm";

interface Emp{
    firstName: string,
    lastName: string, 
    email: string, 
    employeeCardNumber: number, 
    salary: number
}

const createEmployee = async function (req: Request, res: Response, next: NextFunction){
    try{
        const {employerId} = req.params;
        const {firstName, lastName, email, employeeCardNumber, salary}: Emp = req.body;
        const employer = await Employer.findOneBy({id: parseInt(employerId)})
        if(!employer){
            return res.status(400).send({status: false, message: "employer not found"});
        }

        const employee = Employee.create({
            first_name: firstName,
            last_name: lastName,
            email: email,
            employer: employer,
            emp_card_number: employeeCardNumber,
            salary: salary
        })

        await employee.save()
        return res.status(201).json({status: true, data: employee});
    }catch(err: any){
        return res.status(500).json({status: 500, message: err.message});
    }
}

export {
    createEmployee,
}