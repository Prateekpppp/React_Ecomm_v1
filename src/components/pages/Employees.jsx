import React, { Component, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate } from 'react-router-dom'
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
        console.log('res--',res);
        
        setEmployees(res.data);
        
      })
      .catch((err)=>{
        console.log('err---',err);
      });

    }

    const submitFeedback = ()=>{
        let data = {
            fullName:fullName,
            email:email,
            department:department
        };
        console.log(data);

        axios.post('http://localhost:8000/api/v1/employees',data)
        .then((res)=>{
            if(res.status == 201){
                // setEmployees('');
                setResponse('Employee Added Successfully');
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
        
        axios.delete('http://localhost:8000/api/v1/employee',{id:id})
        .then((res)=>{
            if(res.status == 201){
                setResponse('Employee Deleted Succesfully');
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
        console.log('run');
        
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
                            <button type="button" className="btn btn-primary mt-2" onClick={()=>submitFeedback()}>Submit</button>
                        </div>
                    </form>
                    
                    <div className="inputGroup">
                    <div className='response' style={{display:(response)?'block':'none'}}>{response}</div>
                    </div>

                </div>

                <div className="col-lg-6 px-3">
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