import {object,string} from 'yup'


const loginVal = object(
    {
        email:string().required("Bos saxlamayin").min(3),
        password:string().required("Bos saxlamayin").min(3)
    }
)


export default loginVal