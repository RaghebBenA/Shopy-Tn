import {useState} from "react"



const useForm = (callback,initailSatate) =>{
    const [values,setValue] = useState(initailSatate)
    const[Preview,setPreview] = useState()  

   const handleChange = (e) =>{
       e.persist() 
       setValue(values=>({...values,[e.target.name]: e.target.value}))
   }

   const handleSubmit = (e) =>{
       if(e) e.preventDefault()
       callback()
   }

   const uploadImg = (e) => {
    //let image = URL.createObjectURL(e.target.files[0]) 
    const photo = e.target.files[0]
        setValue(values => ({...values,photo}));
        setPreview(URL.createObjectURL(e.target.files[0]) )
  };
   return{
       handleChange,
       handleSubmit,
       uploadImg,
       values,
       Preview
   }

}

export default useForm