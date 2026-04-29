import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";

const Register = () => {
  const [image, setimage] = useState(null);

  //base 64
  const onFileChanged = (e) => {
    console.log(e.target.files[0]);
    let file = e.target.files[0]
    setimage(e.target.files[0]);
    let reader = new FileReader();

    reader.onloadend=()=>{
      console.log(reader.result);
      setimage(reader.result)
      
    };
    

reader.readAsDataURL(file)
  };

  let formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await axios.post(
          "http://localhost:4008/api/v1/addUserToDB",
          {...values, profileImage:image}
        );
        console.log(response.data);
        console.log(response.status);

      

        if (response.status == 201) {
          alert("User created successfully");
          console.log(response.data);
        } 
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          
          alert("Error creating user");
          return;
        } else {
          console.log(error);
          
          alert("Error creating user");
        }
      }
    },

    validationSchema: yup.object({
      firstName: yup.string().required("first name is required"),
      lastName: yup.string().required("last name is required"),
      email: yup
        .string()
        .required("email is required")
        .email("invalid email format"),
      password: yup.string().required("password is required"),
    }),
  });
  // console.log(formik.values);
  // console.log(formik.errors);
  console.log(formik.touched);

  return (
    <div className="mt-5">
      <input type="file" name="" onChange={(e) => onFileChanged(e)} />
      <br />
      <input
        type="text"
        placeholder="first name"
        name="firstName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <br />
      {formik.touched.firstName && formik.errors.firstName && (
        <small className="text-danger">{formik.errors.firstName}</small>
      )}
      <br />
      <input
        type="text"
        placeholder="last name"
        name="lastName"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <br />
      {formik.touched.lastName && formik.errors.lastName && (
        <small className="text-danger">{formik.errors.lastName}</small>
      )}
      <br />
      <input
        type="email"
        placeholder="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <br />
      {formik.touched.email && formik.errors.email && (
        <small className="text-danger">{formik.errors.email}</small>
      )}
      <br />
      <input
        type="text"
        placeholder="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <br />
      {formik.touched.password && formik.errors.password && (
        <small className="text-danger">{formik.errors.password}</small>
      )}
      <br />

      <button type="submit" onClick={formik.handleSubmit}>
        {formik.isSubmitting ? "submitting..." : "submit"}
      </button>
    </div>
  );
};

export default Register;
