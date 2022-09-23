import React,{useEffect,useState} from 'react'
import 'assets/css/Profile.css'
import {Formik,Form,Field} from 'formik'
import {Link,useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useJwt,isExpired,decodeToken } from "react-jwt";

function Profile() {

    const [pd,setPd] = useState(null)
    const navigate = useNavigate()
        
    useEffect(()=>
    {
        setPd(decodeToken(JSON.parse(localStorage.getItem("Utoken"))))
    },[])

    const handleLogOut = ()=>
    {
        localStorage.removeItem("Utoken")
        navigate("/")
    }
    

    return (
        <div className='profile'>
            <div className="p-div">
                <Formik
                enableReinitialize={true}
                initialValues={{
                    prname:pd?.name,
                    prsurname:pd?.surname,
                    prmail:pd?.email,
                    prphone:pd?.phone
                }}
                onSubmit={(x)=>
                {
                    let editUser=
                    {
                        id:pd.id,
                        name:x.prname,
                        surName:x.prsurname,
                        username:pd.username,
                        email:x.prmail,
                        phoneNumber:x.prphone
                    }


                    let url = "http://ejtacmalik-001-site1.btempurl.com/api/Accounts/update"
                    fetch(url,{
                        method:'post',
                        headers:
                        {
                            "Content-Type": "application/json",
                        },
                        body:JSON.stringify(editUser)
                    }).then(resp=> 
                        {
                            console.log(resp.status);
                        })
                    
                    
                }}
                >
                    <Form className='p-form'>
                        
                        <div className="p-field">
                        <label className='p-label' htmlFor="p-name">Name</label>
                        <Field className='p-inp'  id='p-name' name='prname'/>
                        </div>
                        
                        <div className="p-field">
                        <label className='p-label' htmlFor="p-name">Surname</label>
                        <Field className='p-inp' id='p-name' name='prsurname' />
                        </div>
                        
                        <div className="p-field">
                        <label className='p-label' htmlFor="p-name">E-mail</label>
                        <Field className='p-inp' id='p-name' name='prmail'/>
                        </div>
                        
                        <div className="p-field">
                        <label className='p-label' htmlFor="p-name">Phone</label>
                        <Field className='p-inp' id='p-name' name='prphone'  />
                        </div>
                        <input type="submit" value='Edit' className='p-sub'/>
                        
                    </Form>
                </Formik>
                        <Link className='ch-psw' to='/reset'>Change Password</Link>
                        <p onClick={handleLogOut}  className='ch-psw'>Log out</p>
            </div>
        </div>
    )
}

export default Profile