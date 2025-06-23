import { useState } from "react";

export default function Form() {
  // let[fullName,setFullName]= useState("");
  // let[userName,setUserName]= useState("");

  // let handleNameChange = ()=>{
  //     setFullName(event.target.value);
  // }

  //  let handleUsername = ()=>{
  //     setUserName(event.target.value);
  // }

  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormData((currData) => {
      return { ...currData, [fieldName]: newValue };
    });
  };

  let handleSubmit = (event)=>{
   event.preventDefault();
   console.log(formData)
   setFormData({
    fullName: "",
    userName: "",
    password: "",
   })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full Name</label>
      <input
        placeholder="Enter your full name"
        type="text"
        value={formData.fullName}
        onChange={handleInputChange}
        id="fullname"
        name="fullName"
      />
      <br />
      <br />
      <br />
      <label htmlFor="username">User Name</label>
      <input
        placeholder="Enter your user name"
        type="text"
        value={formData.userName}
        onChange={handleInputChange}
        id="username"
        name="userName"
      />

       <br />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      <input
        placeholder="Enter your password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
        id="password"
        name="password"
      />
      <button>Submit</button>
    </form>
  );
}
