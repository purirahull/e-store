import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useFetch } from "use-http";
import { useDispatch } from "react-redux";
import { userLogin } from "../../Management/Features/authSlice";

export default function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleForm = async (data) => {
    console.log(data);
    let api = await post(`/auth/login`, data);
    console.log(api);
    if (response.ok) {
      localStorage.setItem("auth", JSON.stringify(api));
      dispatch(userLogin(api));
      navigate("/products");
    } else toast.error("Invalid Credentials");
  };

  const { register, handleSubmit } = useForm();
  const { post, response } = useFetch();

  return (
    <div className=" d-flex justify-content-center mt-5 ">
      <Card
        className="mt-4 p-5 shadow-lg  "
        style={{ backgroundColor: " rgba(0,0,0, 0.4)" }}
      >
        <h1 className="text-white text-center"> E Store</h1>
        <Form className="p-3" onSubmit={handleSubmit(handleForm)}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label className="text-white">Email or Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Email"
              {...register("email")}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password")}
            />
          </Form.Group>

          <Button
            variant="success"
            type="submit"
            className="d-flex justify-content-center  w-100"
          >
            LOG IN
          </Button>
        </Form>
      </Card>
    </div>
  );
}
