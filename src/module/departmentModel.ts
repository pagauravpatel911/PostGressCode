import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, OneToMany, ManyToOne, JoinColumn, BaseEntity} from "typeorm";
// import { Employee } from "./employeeModel";

@Entity("department")
export class Department extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name_of_department: string;
}