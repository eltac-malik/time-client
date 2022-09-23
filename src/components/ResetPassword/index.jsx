import React from 'react'
import 'assets/css/Profile.css'
import './Reset.css'
import {Formik,Form,Field} from 'formik'
import {Link} from 'react-router-dom'
import { useJwt,isExpired,decodeToken } from "react-jwt";

function Profile() {
    return (
        <div className='profile'>
            <div className="p-div">
                <Formik
                initialValues={{
                    currpsw:"",
                    newpsw:"",
                    confirm:""
                }}
                onSubmit={(val)=>
                {
                    let x = JSON.parse(localStorage.getItem('Utoken'))
                    let y = decodeToken(x)
                    
                    let newPassword = 
                    {
                        id:y.id,
                        currentPassword:val.currpsw,
                        newPassword:val.newpsw,
                        confirmPassword:val.confirm
                    }
                    
                    let url = "http://ejtacmalik-001-site1.btempurl.com/api/Accounts/resetpassword"
                    fetch(url,{
                        method:'post',
                        headers:
                        {
                            "Content-Type": "application/json",
                        },
                        body:JSON.stringify(newPassword)
                    }).then(resp=> 
                        {
                            console.log(resp.status);
                        })

                
                }}
                >
                    <Form className='p-form'>
                        
                        <div className="p-field">
                        <label className='p-label' htmlFor="p-name">Current Password</label>
                        <Field className='p-inp' id='p-name' name='currpsw'  defaultValue={'sss'}/>
                        </div>
                        
                        <div className="p-field">
                        <label className='p-label' htmlFor="p-name">New Password</label>
                        <Field className='p-inp' id='p-name' name='newpsw'  defaultValue={'sss'}/>
                        </div>
                        
                        <div className="p-field">
                        <label className='p-label' htmlFor="p-name">Repeat Password</label>
                        <Field className='p-inp' id='p-name' name='confirm'  defaultValue={'sss'}/>
                        </div>
                        
                        <input type="submit" value='Reset Password' className='p-sub'/>
                        
                    </Form>
                </Formik>
                        <Link className='ch-psw' to='/profile'>Go Back</Link>
            </div>
        </div>
    )
}

export default Profile