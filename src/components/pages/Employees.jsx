import React, { Component, useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { backend_url } from '../../env';


function Employees() {
    
    const [employees, setEmployees] = useState([]);

    const [fullName,setfullName] = useState('');
    const [email,setEmail] = useState('');
    const [department,setdepartment] = useState('');
    const [response,setResponse] = useState(false);

    const fetchEmployees = ()=>{
        
      axios.get(`${backend_url}/api/v1/employees`)
      .then((res)=>{
        
        setEmployees(res.data);
        
      })
      .catch((err)=>{
        console.log('err---',err);
      });

    }

    const addEmployee = ()=>{
        let data = {
            fullName:fullName,
            email:email,
            department:department
        };

        axios.post(backend_url+'/api/v1/employees',data)
        .then((res)=>{
            if(res.status == 201){
                // setEmployees('');
                setResponse('Employee Added Successfully');
                fetchEmployees();
            }
            setTimeout(() => {
                setResponse(false);
            }, 1000);
        })
        .catch((err)=>{
            console.log('err---',err);
        });
        
    }

    const deleteEmployee = (id) =>{
        
        axios.delete(`${backend_url}/api/v1/employee/${id}/`)
        .then((res)=>{
            if(res.status == 204){
                setResponse('Employee Deleted Succesfully');
                fetchEmployees();
            }
            setTimeout(() => {
                setResponse(false);
            }, 1000);
        })
        .catch((err)=>{
            console.log('err---',err);
        });
    }

    useEffect(() => {
        
        fetchEmployees();
      
    },[]);
    
  return (
    <>
        <h1 className='mt-5 mb-3 text-center'>Add Employee</h1>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 px-3">
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Full Name</label>
                            <input onChange={(e)=>setfullName(e.target.value)} name="fullName" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Full Name"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input onChange={(e)=>setEmail(e.target.value)} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Department</label>
                            <input onChange={(e)=>setdepartment(e.target.value)} name="department" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Department"/>
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-primary mt-2" onClick={()=>addEmployee()}>Submit</button>
                        </div>
                    </form>
                    
                    <div className="inputGroup">
                    <div className='response' style={{display:(response)?'block':'none'}}>{response}</div>
                    </div>

                </div>

                <div className="col-lg-6 px-3 overflow-x-scroll">
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        employees.map((item,ind)=>{
                            
                            return (
                            <tr key={ind}>
                                <td>{item.employee_id}</td>
                                <td>{item.fullName}</td>
                                <td>{item.email}</td>
                                <td>{item.department}</td>
                                <td><i className='fa fa-trash cursor-pointer' onClick={()=>deleteEmployee(item.employee_id)}></i></td>
                            </tr>
                            )
                            })
                        }
                    </tbody>
                    </Table>
                </div>
            </div>
        </div>
    </>
  )
}

export default Employees