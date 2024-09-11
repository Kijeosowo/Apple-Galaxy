import React from "react";
import Image1 from "./Google.png";

function Form() {
  return (
    <div>
      <form className="cursor-pointer bg-white p-[3rem] inline-flex flex-wrap flex-col shadow-md hover:shadow-inner blur-[0px] hover:blur-[0] rounded-[20px] float-right mt-[-25%] mr-[10%]">
        <h1 className="text-center text-5xl text-blue-700">Signup</h1>
        <div className="mt-10">
          <label className="text-[17px] text-blue-600">Username</label>
          <input
            type="text"
            className="ml-5 p-1 text-[15px] focus:text-neutral-400 border rounded-[50px]"
          />
        </div>
        <div>
          <label className="text-[17px] text-blue-600">E-mail</label>
          <input
            type="text"
            className="ml-[50px] p-1 mt-5 text-[15px] focus:text-neutral-400 border rounded-[50px]"
          />
        </div>
        <div>
          <label className="text-[17px] text-blue-600">Password</label>
          <input
            type="password"
            className="ml-[30px] p-1 mt-5 text-[15px] focus:text-neutral-400 border rounded-[50px]"
          />
        </div>
        <br />
        <div className="text-center mt-5">
          <button
            type="Submit"
            className="text-[14px] bg-blue-700 text-white pt-2 pb-2 pl-7 pr-7 rounded-[50px]">
            Submit
          </button>
        </div>
        <div className="mt-2">
          <p className="text-center text-[12px] text-blue-700 mt-3">
            Already have an Account?{" "}
            <a href="#" className="underline">
              Log In
            </a>
          </p>
        </div>
        <div className="text-center flex flex-row gap-[5px] bg-white mt-5 pt-2 pb-2 pl-7 pr-7 border rounded-[50px]">
          <img src={Image1} className="w-7 ml-10" />
          <button type="Submit" className="text-[14px] text-blue-700">
            Signup with Google
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
