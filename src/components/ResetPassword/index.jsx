import React from 'react'
import 'assets/css/Profile.css'
import './Reset.css'
import {Formik,Form,Field} from 'formik'
import {Link} from 'react-router-dom'

function Profile() {
    return (
        <div className='profile'>
            <div className="p-div">
                <Formik
                initialValues={{
                    prname:"",
                    prsurname:"",
                    prmail:"",
                    prphone:""
                }}
                >
                    <Form className='p-form'>
                        
                        <div className="p-field">
                        <label className='p-label' htmlFor="p-name">Current Password</label>
                        <Field className='p-inp' id='p-name' name='prname'  defaultValue={'sss'}/>
                        </div>
                        
                        <div className="p-field">
                        <label className='p-label' htmlFor="p-name">New Password</label>
                        <Field className='p-inp' id='p-name' name='prsurname'  defaultValue={'sss'}/>
                        </div>
                        
                        <div className="p-field">
                        <label className='p-label' htmlFor="p-name">Repeat Password</label>
                        <Field className='p-inp' id='p-name' name='prmail'  defaultValue={'sss'}/>
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