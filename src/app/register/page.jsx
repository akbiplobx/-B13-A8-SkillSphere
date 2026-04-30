"use client";
import { Check } from "@gravity-ui/icons";
import { toast } from "react-toastify"; 
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";

export default function RegisterPage() { 
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    
    console.log("Registering User Data:", data);

    
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Registration successful!"); 
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <Card className="border mx-auto w-[450px] py-10 shadow-xl">
        
        <h1 className="text-center text-3xl font-bold mb-2 text-gray-800">Register</h1>
        <p className="text-center text-gray-500 mb-8 text-sm">Join SkillSphere Community</p>

        <Form className="flex w-80 sm:w-96 mx-auto flex-col gap-5" onSubmit={onSubmit}>
          <TextField isRequired name="name" type="text">
            <Label className="font-medium text-gray-700">Name</Label>
            <Input 
              placeholder="Enter your full name" 
              variant="bordered"
              className="mt-1"
            />
            <FieldError />
          </TextField>
          
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
            <Label className="font-medium text-gray-700">Email</Label>
            <Input 
              placeholder="biplob@example.com" 
              variant="bordered"
              className="mt-1"
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) return "Min 8 characters required";
              if (!/[A-Z]/.test(value)) return "Need one uppercase letter";
              if (!/[0-9]/.test(value)) return "Need one number";
              return null;
            }}
          >
            <Label className="font-medium text-gray-700">Password</Label>
            <Input 
              placeholder="••••••••" 
              variant="bordered"
              className="mt-1"
            />
            <Description className="text-[10px] text-gray-400">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex flex-col gap-3 mt-4">
            
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-6 text-lg" 
              type="submit"
              isLoading={isLoading}
            >
              {!isLoading && <Check className="mr-2" />}
              Register
            </Button>
            
            <Button 
              type="reset" 
              variant="flat" 
              className="text-gray-500"
              disabled={isLoading}
            >
              Reset Form
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}