import React from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";

export default function ViewUser() {

    const [user, setUser]=React.useState({
        name:"",
        email:"",
        address:""
    });

    const {id}=useParams()

    useEffect(()=>{
       loadUser();
    },[]);

    const loadUser=async()=>{
        const result= await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>User Details</h2>
                <div className='card'>
                    <div className='card-header'>
                        Details of user id: {user.id}
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Name: </b>
                                {user.name}
                            </li>
                            <li className='list-group-item'>
                                <b>Email: </b>
                                {user.email}
                            </li>
                            <li className='list-group-item'>
                                <b>Address: </b>
                                {user.address}
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className="btn btn-primary my-2" to={'/'}>Back</Link>
            </div>
        </div>
    </div>
  )
}
