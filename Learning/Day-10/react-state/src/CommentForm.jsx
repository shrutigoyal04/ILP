import { useState } from "react";
import {useFormik} from "formik";

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Required';
   } 
   return errors;
 };

function CommentForm({addNewComment}) {
    // let [formData, setFormData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: 5,
    // })

    const formik = useFormik({
      initialValues: {
        username: "",
        remarks: "",
        rating: 5,
      },
      validate,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });

    // let handleInputChange = (event)=>{
    // setFormData((currData)=>{
    //     let fieldName = event.target.name;
    //     let newValue = event.target.value;
    //     return {...currData, [fieldName]: newValue}
    //   })
    // }

    // let handleSubmit = (event) => {
    //   event.preventDefault();
    //   console.log(formData);
    //   addNewComment(formData);
    //   setFormData({
    //     username: "",
    //     remarks: "",
    //     rating: 5,
    //   });
    // }
  return (
    <div>
      <h4>Give me a comment</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="username" value={formik.values.username} name="username" id="username" onChange={formik.handleChange} />
        {formik.errors.username ? <div style={{color:"red"}}>{formik.errors.username}</div> : null}
        <br /><br />
        <label htmlFor="remarks">Remarks</label>
        <textarea value={formik.values.remarks} placeholder="Add Reamrks" name="remarks" id="remarks" onChange={formik.handleChange}>Remarks</textarea>
        <br /><br />
        <label htmlFor="rating">Rating</label>
        <input type="number" placeholder="rating" min={1} max={5} value={formik.values.rating} name="rating" id="rating" onChange={formik.handleChange}/>
        <br /><br />
         <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

export default CommentForm;
