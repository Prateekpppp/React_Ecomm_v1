import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { backend_url } from '../../env';

function Employeeattendance() {

    const [employees, setEmployees] = useState([]);
    const [employeeStatus, setEmployeeStatus] = useState([]);
    const [date, setDate] = useState('');

    const getCurrentDate = () => {
    const dateObj = new Date();
    
    const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
    const day = ("0" + dateObj.getDate()).slice(-2);
    const year = dateObj.getFullYear();
    
    return `${year}-${month}-${day}`;
    };
    const fetchEmployees = ()=>{
        
      axios.get(`${backend_url}/api/v1/employeeattendance?date=${date}`)
      .then((res)=>{
        
        setEmployees(res.data);

        const map = {};
        res.data.forEach(item => {
            map[item.employee_id] = item.status ?? "";
        });
        console.log('map',map);
        
        setEmployeeStatus(map);
      })
      .catch((err)=>{
        console.log('err---',err);
      });

    }
    
    const markAttendance = (id,value) =>{
        let data = {
            date:date,
            employee_id:id,
            status:value
        };
        axios.post(`${backend_url}/api/v1/employeeattendance`,data)
        .then((res)=>{
            console.log('res--',res);
            
            // setEmployees(res.data);
            
        })
        .catch((err)=>{
            console.log('err---',err);
        });
    }

    useEffect(() => {
        
        fetchEmployees();
        
    },[date]);

  return (
    <>
        <h1 className='mt-5 mb-3 text-center'>Add Employee</h1>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <input type="date" name="date" id="" defaultValue={getCurrentDate()} onChange={(e)=>setDate(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="col-12 px-3">
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
                                <td>
                                    <select name="status" id="" value={employeeStatus[item.employee_id]} onChange={(e)=>markAttendance(item.employee_id,e.target.value)}>
                                        <option value="">Mark</option>
                                        <option value="0">Absent</option>
                                        <option value="1">Present</option>
                                    </select>
                                </td>
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

export default Employeeattendance