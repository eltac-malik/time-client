import {object,string} from 'yup'

let contactVal = object(
    {
        name:string().required("Bos saxlamayin"),
        email:string().required("Bos saxlamayin"),
        subject:string().required("Bos saxlamayin"),
        message:string().required("Bos saxlamayin").min(20)
    }
)

export default contactVal