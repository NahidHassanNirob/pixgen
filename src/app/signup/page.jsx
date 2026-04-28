"use client";
import { authClient } from "@/lib/authClient";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const SigiUpPage = () => {
   const route=useRouter()
  const handelSignUp= async(e)=>{
    e.preventDefault();
    const name =e.target.name.value;
    const email =e.target.email.value;
    const password =e.target.password.value;
    const photo =e.target.photo.value;
    console.log({name,email,password,photo});
    const {data,error}=await authClient.signUp.email({
      name,
      image:photo,
      email,
      password
    },{
      onSuccess:()=>{
        route.push('/')
      }
    })

  }
  return (
    <div className="container mx-auto px-3 flex justify-center items-center">
      <Form onSubmit={handelSignUp} className="flex bg-white mx-auto w-96  rounded-md shadow mt-5 p-4 flex-col gap-4">
        <h2 className="font-bold text-xl text-center">Sign up</h2>
        {/* name */}
        <TextField
          isRequired
          name="name"
          type="text"
          validate={(value) => {
            if (!value) {
              return "Please enter your name";
            }
            return null;
          }}
        >
          <Label>Name</Label>
          <Input placeholder="john doe" />
          <FieldError />
        </TextField>

        {/* photo */}
         <TextField
          isRequired
          name="photo"
          type="url"
          validate={(value) => {
            if (!value) {
              return "Please enter your photo url";
            }
            return null;
          }}
        >
          <Label>Photo URL</Label>
          <Input placeholder="www.example.com" />
          <FieldError />
        </TextField>

        {/* email */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        {/* password */}
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button  className="bg-blue-600 w-full" type="submit">
            Sign up
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SigiUpPage;
