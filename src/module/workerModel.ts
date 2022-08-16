import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn, OneToOne, OneToMany, ManyToOne} from "typeorm";

@Entity("worker")
export class Worker extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({
        unique: true,
    })
    email: string;

    @Column({
        unique: true
    })
    emp_card_number: number;

    @Column({
        type: "boolean",
        default: true
    })
    isActive: boolean

    @Column({
        type: 'numeric'
    })
    salary: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}