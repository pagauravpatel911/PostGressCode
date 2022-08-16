import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";
// import { Employee } from "./employeeModel";
import { Worker } from "./workerModel";
import { Employee } from "./employeeModel";

import { Department } from "./departmentModel";

@Entity("employer")
export class Employer extends Worker{

    @OneToOne(
        () => Department
    )
    @JoinColumn()
    department: Department

    // one employer entity belong to many employee enitities
    @OneToMany(
        () => Employee, 
        (employee: Employee) => employee.employer,
        {
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        }
    )
    employee: Employee[]
}