import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInput, editValue } from "../redux/input/inputAction";
import { deleteValue } from "../redux/input/inputAction";
import { Modal, Box, Typography } from "@mui/material";
import styled from "styled-components";

const Form = styled.form`
  width: 50%;
  margin: 0 auto;
  margin-top: 20%;
  background-color: whitesmoke;
  display: grid;
  border-radius: 12px;
`;

const UpdateForm = styled(Modal)`
  border-radius: 12px;
`;

const ModalStyle = styled(Box)`
  width: 50%;
  margin: 0 auto;
  margin-top: 5%;
  display: grid;
  border-radius: 6px;
  text-align: center;
`;

const InputFiled = styled.input`
  width: 60%;
  height: 37px;
  outline-color: lightgreen;
  border: none;
  border-radius: 8px;
  margin: 0 auto;
  margin-top: 2%;
  margin-bottom: 4%;
`;

const EditInputFiled = styled.input`
  width: 60%;
  height: 28px;
  outline-color: lightskyblue;
  border: 0.2px solid black;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 2%;
  margin-bottom: 4%;
`;

const SubmitButton = styled.button`
  width: 40%;
  height: 40px;
  background-color: lightgreen;
  margin: 0 auto;
  margin-top: 2%;
  margin-bottom: 2%;
  border: none;
  border-radius: 8px;
  color: white;
`;

const Title = styled.h2`
  color: black;
  margin-top: 1%;
  margin-bottom: 2%;
  border: none;
`;

const Table = styled.table`
  margin: 0 auto;
  margin-top: 3%;
  width: 60%;
  background-color: black;
  color: white;
  border: none;
`;
const TableHead = styled.thead`
  background-color: white;
  color: black;
`;

const DeleteButton = styled.button`
  height: 20px;
  background-color: rgb(255, 0, 0);
  border: none;
  border-radius: 8px;
  color: white;
`;

const UpdateButton = styled.button`
  height: 20px;
  background-color: lightyellow;
  border: none;
  border-radius: 8px;
  color: black;
`;

const CancelButton = styled.button`
  height: 20px;
  background-color: lightyellow;
  border: none;
  border-radius: 8px;
  color: black;
`;
function InputContainer() {
  const [formdata, setformdata] = useState({ Name: "", Mail: "", PhNo: "" });
  const [Editdata, setEditdata] = useState({
    Name: "",
    Mail: "",
    PhNo: "",
  });
  const [index, setIndex] = useState(null);
  const InputValue = useSelector((state) => state?.input?.formValue);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const dispatch = useDispatch();

  const setInput = (element) => {
    const { name, value } = element?.target;
    setformdata({ ...formdata, [name]: value });
  };

  const EditInput = (element) => {
    const { name, value } = element?.target;
    setEditdata({ ...Editdata, [name]: value });
  };

  const deleteElement = (index) => {
    console.log("delete", index);
    const filterData = InputValue?.filter((element, i) => i !== index);
    console.log(filterData);
    dispatch(deleteValue(filterData));
  };

  const updateElement = (index) => {
    setDialogOpen(true);
    setIndex(index);
    console.log(index);
  };

  const EditValues = (e) => {
    e.preventDefault();
    let newData = [...InputValue];
    console.log(newData[index]);
    newData[index] = Editdata;
    console.log(newData[index]);
    dispatch(editValue(newData));
    let clearData = { Name: "", Mail: "", PhNo: "" };
    setEditdata(clearData);
    closeDialog();
  };

  const addData = (e) => {
    e.preventDefault();
    dispatch(addInput(formdata));
    let clearData = { Name: "", Mail: "", PhNo: "" };
    setformdata(clearData);
  };

  const closeDialog = (e) => {
    setDialogOpen(false);
  };
  return (
    <div>
      <Form onSubmit={(e) => addData(e)}>
        <h2>Register form</h2>
        <InputFiled
          type="text"
          name="Name"
          value={formdata?.Name}
          onChange={(e) => setInput(e)}
        ></InputFiled>
        <InputFiled
          type="email"
          name="Mail"
          value={formdata?.Mail}
          onChange={(e) => setInput(e)}
        ></InputFiled>
        <InputFiled
          type="number"
          name="PhNo"
          value={formdata?.PhNo}
          onChange={(e) => setInput(e)}
        ></InputFiled>
        <SubmitButton type="submit">PrintText</SubmitButton>
      </Form>
      <Table>
        <TableHead>
          <tr>
            <th>Name</th>
            <th>Mail</th>
            <th>Number</th>
            <th colSpan={2}>Edit/Delete</th>
          </tr>
        </TableHead>
        <tbody>
          {InputValue?.map((element, index) => (
            <tr key={index}>
              <td>{element?.Name}</td>
              <td>{element?.Mail}</td>
              <td>{element?.PhNo}</td>
              <td>
                <UpdateButton onClick={() => updateElement(index)}>
                  Edit
                </UpdateButton>
              </td>
              <td>
                <DeleteButton onClick={() => deleteElement(index)}>
                  Delete
                </DeleteButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <UpdateForm open={isDialogOpen}>
        <ModalStyle
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <form onSubmit={(e) => EditValues(e)}>
            <Title>Register form</Title>
            <EditInputFiled
              type="text"
              name="Name"
              value={Editdata?.Name}
              onChange={(e) => EditInput(e)}
            ></EditInputFiled>
            <EditInputFiled
              type="email"
              name="Mail"
              value={Editdata?.Mail}
              onChange={(e) => EditInput(e)}
            ></EditInputFiled>
            <EditInputFiled
              type="number"
              name="PhNo"
              value={Editdata?.PhNo}
              onChange={(e) => EditInput(e)}
            ></EditInputFiled>
            <div>
              <SubmitButton type="submit">EditValue</SubmitButton>
              <button>Cancel</button>
            </div>
          </form>
        </ModalStyle>
      </UpdateForm>
    </div>
  );
}

export default InputContainer;
