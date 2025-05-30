import { Card } from "@/components/ui/card";
import { Input } from "@headlessui/react";
import { Label } from "@radix-ui/react-dropdown-menu";
import React, { useState } from "react";
import LoginImage from "../assets/LoginImage.jpg";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#1a1a1a] px-4 py-10 md:py-16 lg:py-24">
        <Card className="p-6 w-full max-w-md bg-[#2a2a2a]">
          <h2 className="text-2xl font-bold text-center mb-6 text-[#fef1e1]">
            Create an Account
          </h2>
          <form>
            <div className="mb-4">
              <Label htmlFor="email" className="block text-[#fef1e1]">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                className="mt-2 block w-full p-2 border text-[#fef1e1] border-[#fef1e1] focus:ring-2 focus:ring-[#fef1e1]"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <Label htmlFor="password" className="block text-[#fef1e1]">
                Password
              </Label>
              <Input
                type="password"
                id="password"
                className="mt-2 block w-full p-2 border text-[#fef1e1] border-[#fef1e1] focus:ring-2 focus:ring-[#fef1e1]"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#fc350b] border-2 border-[#fc350b] text-[#fef1e1] py-2 hover:bg-[#1a1a1a] hover:text-[#fef1e1]"
            >
              Register
            </button>
          </form>

          <div className="mt-4 text-center">
            <span className="text-[#fef1e1]">
              Already have an account?{" "}
              <a href="/login" className="text-[#fc350b] hover:underline">
                Login
              </a>
            </span>
          </div>
        </Card>
      </div>

      <div
        className="hidden lg:block lg:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${LoginImage})` }}
      ></div>
    </div>
  );
};

export default Register;
