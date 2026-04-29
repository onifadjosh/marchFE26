import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToStudents, deleteStudent, editStudents } from "../redux/appSlice";

const AddStudent = () => {
  const students = useSelector((state) => state.students);
  let dispatch = useDispatch();
  const [name, setname] = useState("");
  const [isEditing, setisEditing] = useState(false)
  const [currentIndex, setcurrentIndex] = useState(null)


  const editName=(inp, index)=>{
    setisEditing(true)
    setname(inp)
    setcurrentIndex(index)

  }
  return (
    <div>
      <input
        type="text"
        className="form-control w-25"
        onChange={(e) => setname(e.target.value)}
        value={name}
      />{" "}
      <button
        className="btn btn-success"
        onClick={
            isEditing?() => dispatch(addToStudents(name)):() => dispatch(editStudents(name))
        }
      >
       {isEditing?"save":"submit"}
      </button>
      <br />
      <hr />
      {students.map((_, idx) => {
        return (
          <h1>
            {idx + 1}. {_} <button className="btn btn-danger" onClick={()=>dispatch(deleteStudent(idx))}>Delete</button> <button className="btn btn-primary" onClick={()=>editName(_, idx)}>Edit</button>
          </h1>
        );
      })}
    </div>
  );
};

export default AddStudent;
