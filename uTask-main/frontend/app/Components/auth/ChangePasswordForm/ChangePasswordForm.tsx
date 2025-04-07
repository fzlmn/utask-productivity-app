"use client";
import { useUserContext } from "@/context/userContext";
import Image from "next/image";
import React, { useState } from "react";

function ChangePasswordForm() {
  const { changePassword } = useUserContext();

  // state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const currentPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword(e.target.value);
  };

  const newPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changePassword(currentPassword, newPassword);

    // clear input
    setCurrentPassword("");
    setNewPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="ml-0 mt-0 m-[2rem] px-10 py-14 rounded-lg bg-white max-w-[520px] w-full">
      <div className="relative z-10">
        <h1 className="mb-2 text-center text-[1.35rem] font-medium text-purple-700">
          Reset Your Password!
        </h1>
        <div className="relative mt-[1rem] flex flex-col">
          <label htmlFor="email" className="mb-1 text-purple-600">
            Current Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            value={currentPassword}
            onChange={currentPasswordChange}
            id="password"
            name="password"
            placeholder="*********"
            className="px-4 py-3 border-[2px] rounded-md outline-purple-500 text-gray-800"
          />
          <button
            className="absolute p-1 right-4 top-[43%] text-[22px] text-purple-600 opacity-75 hover:text-purple-800 transition-all"
            onClick={togglePassword}
            type="button"
          >
            {showPassword ? (
              <i className="fas fa-eye-slash"></i>
            ) : (
              <i className="fas fa-eye"></i>
            )}
          </button>
        </div>
        <div className="relative mt-[1rem] flex flex-col">
          <label htmlFor="email" className="mb-1 text-purple-600">
            New Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            value={newPassword}
            onChange={newPasswordChange}
            id="password"
            name="password"
            placeholder="*********"
            className="px-4 py-3 border-[2px] rounded-md outline-purple-500 text-gray-800"
          />
          <button
            className="absolute p-1 right-4 top-[43%] text-[22px] text-purple-600 opacity-75 hover:text-purple-800 transition-all"
            onClick={togglePassword}
            type="button"
          >
            {showPassword ? (
              <i className="fas fa-eye-slash"></i>
            ) : (
              <i className="fas fa-eye"></i>
            )}
          </button>
        </div>
        <div className="flex">
          <button
            type="submit"
            className="mt-[1.5rem] flex-1 px-4 py-3 font-bold bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Reset Password
          </button>
        </div>
      </div>
      <Image src="/flurry.png" alt="Flurry" width={100} height={100} />

    </form>
  );
}

export default ChangePasswordForm;
