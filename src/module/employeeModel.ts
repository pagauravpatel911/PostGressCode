import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";

import { Worker } from "./workerModel";
import { Employer } from "./employerModel";

@Entity("employee")
export class Employee extends Worker{

    // many employee entities belong to one employer entity
    @ManyToOne(() => Employer, (employer: Employer) => employer.employee)
    @JoinColumn({ name: "employer_id"})
    employer: Employer;
}