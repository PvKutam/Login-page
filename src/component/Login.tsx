import React, { useState, ChangeEvent } from "react";
import img from "../img/petals 1.png";
import img2 from "../img/Rectangle 15.png";
import Frame45 from "../img/Frame 45 2.png";
import net from "../img/internet (1) 1.svg";
import frame from "../img/Frame 61.png"
import frame2 from "../img/Frame 2.png"

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const [data, setData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handlerChanger = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
      <div className="md:flex w-full">
        <div className=" relative hidden md:block w-1/2 py-10 px-10">
          <img src={Frame45} className="fixed top-24 left-20 2xl:top-20 "alt=""  />
          <h3 className="fixed bottom-96 left-20 text-4xl text-[#FFFFFF] md:text:xl">
            100% Uptime😎
          </h3>
          <h3 className="fixed bottom-80 left-20 text-3xl text-[#BFBFBF] ">
            Zero Infrastructure{" "}
          </h3>
          <h3 className="fixed bottom-72 left-20  text-3xl text-[#BFBFBF] mt-10">
            Management
          </h3>
          <img  className="fixed bottom-64 left-20 color-[#]" src={frame2}/>
          <div className="flex items-center relative">
            <img
              src={net}
              className="text-xs fixed bottom-40 left-20"
              alt="Net"
            />
            <a
              href="https://aesthisia.com/"
              className="fixed bottom-40 left-24 text-[#BFBFBF]"
            >
              aesthisia.com
            </a>
          </div>
          <div className="flex justify-end relative gap">
            <img src={frame} className="fixed bottom-40 px-5 " alt="" />
            
          </div>

          <img src={img2} className="w-full h-full " alt="Background" />
        </div>
        <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
          <div className="text-center mb-10 flex flex-col items-center ">
            <img src={img} className="w-20 h-auto" alt="Logo" />
            <h1 className="font-bold  text-5xl font-semibold text-gray-900">
              Welcome <span className="text-[#08A593]">Back!</span>
            </h1>
            <p className="text-[#667085] text-lg">Glad to see you again!</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex -mx-3 flex-col items-center ">
              <div className="w-full px-20 mb-5">
                <div className="flex">
                  <div className="w-8 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="email"
                    className="w-80 -ml-8 pl-8 pr-3 py-3 rounded-lg border-2 border-[#464660]-100 outline-none"
                    placeholder="Enter your email"
                    onChange={handlerChanger}
                    name="email"
                  />
                </div>
              </div>
            </div>

            <div className="flex -mx-3 flex-col items-center  ">
              <div className="w-full px-20 mb-5">
                <div className="flex">
                  <div className="w-8 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="password"
                    className="w-80 -ml-8 pl-8 pr-3 py-3 rounded-lg border-2 border-[#464660]-100 outline-none"
                    placeholder="Enter Your Password"
                    onChange={handlerChanger}
                    name="password"
                  />
                </div>
                <p className="text-sm	relative ml-40 text-[#667085] font-light mt-1">
                  Forget password?
                </p>
              </div>
            </div>
          </div>
          <div className="flex -mx-3 flex-col items-center">
            <div className="w-full px-3 mb-5">
              <button className="block w-full max-w-xs mx-auto bg-[#020100] mt-5 text-white rounded-lg px-3 py-3 font-semibold">
                REGISTER NOW
              </button>
              <div>
                <p className="mt-10 ml-9 md:text-sm min-w-max  lg:ml-24 text-base xl:ml-40 text-base 2xl:ml-60 custom-left custom-left2 custom-left3 custom-left4">
                Don’t have an account yet?
                <span className="text-[#08A593] font-medium">Sign Up</span>
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
