import {object,string} from 'yup'
import * as Yup from 'yup';


const regsVal = object(
    {
        name:string().required("must be at least 3 letters").min(3),
        surname:string().required("must be at least 3 letters").min(3),
        username:string().required("must be at least 8 letters").min(8),
        phone:Yup.string().required("must be number").min(1).max(7),
        email:string().required("not email format").email(),
        password:string().required("must be at least 8 letters").min(8),
        confirm:Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
    }
)


export default regsVal