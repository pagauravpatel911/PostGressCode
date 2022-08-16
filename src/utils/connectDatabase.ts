import { DataSource } from "typeorm";
import { Department } from "../module/departmentModel";
import { Employer } from "../module/employerModel";
import { Employee } from "../module/employeeModel";


 export  class  Connect{
 public ConnectDatabase =  async() => {
    try{
    const connection = new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "gaurav",
        password: "1234",
        database: "dummy",
         synchronize:true,
            entities: [Department, Employer, Employee],
           
        });
        await connection.initialize();
        console.log("database connection")
    }catch(err){
        // console.log(err)
        console.error("Error connecting to database") 
    }
  
}
}

 

