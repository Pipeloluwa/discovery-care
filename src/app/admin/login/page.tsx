"use client";
import { setNavValue } from "@/app/state_management/reducers/client-reducers/navValue";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LoginComponent } from "../components/login/LoginComponent";


  

export default function Login(){
const dispatch = useDispatch();
    dispatch(setNavValue({ action: "Login" }));

    return (
        <div>

            <LoginComponent />

        </div>
    );
}