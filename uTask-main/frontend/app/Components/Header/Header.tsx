"use client";
import { useTasks } from "@/context/taskContext";
import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";
import React from "react";

function Header() {
  const { user } = useUserContext();
  const { activeTasks } = useTasks();

  const { logoutUser } = useUserContext();

  const router = useRouter();

  const { name } = user;

  const userId = user._id;

  return (
    <header className="px-6 my-4 w-full flex items-center justify-between bg-[#f9f9f9]">
      <div>
        <h1 className="text-lg font-medium text-purple-700">
          <span role="img" aria-label="wave">
            👋
          </span>
          {userId ? `Welcome, ${name}!` : "Welcome "}
        </h1>
        <p className="text-sm text-purple-600">
          {userId ? (
            <>
              You have{" "}
              <span className="font-bold text-purple-500">
                {activeTasks.length}
              </span>
              &nbsp;active tasks
            </>
          ) : (
            "Please login or register to view your tasks"
          )}
        </p>
      </div>
      <div className="h-[50px] flex items-center gap-[10.4rem]">
        <button
          className="px-8 py-3 bg-purple-600 text-white rounded-[50px]
          hover:bg-purple-700 hover:text-white transition-all duration-200 ease-in-out"
          onClick={() => {
            if (userId) {
              logoutUser();
            } else {
              router.push("/login");
            }
          }}
        >
          {userId ? "Logout" : "Login / Register"}
        </button>
      </div>
    </header>
  );
}

export default Header;
