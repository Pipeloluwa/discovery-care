"use client"
import { login } from "@/app/actions/login/LoginAction"
import LogoComponent from "@/app/components/shared-components/LogoComponent"
import { useActionState } from "react";
import { ButtonComponent } from "../shared-components/ButtonComponent";


export const LoginComponent = () => {
    const [loginActionState, loginAction] = useActionState(login, undefined);

    return (
        <div className="h-screen w-full flex items-center justify-center bg-gray-200">
            <div className='xl:w-[50%] lg:w-[75%] h-[500px] mx-auto flex  shadow-xl shadow-gray-300'>

                <div className="w-full h-full flex flex-col flex-1/3 items-center justify-center p-4 text-white bg-gradient-to-b from-blue-300 to-blue-600 rounded-l-lg">
                    <div className='flex justify-center items-center rounded-full overflow-hidden size-[65px] bg-white px-[2px] pb-[4px]'>
                        <LogoComponent />
                    </div>

                    <h4 className="text-lg font-bold mt-4 text-center">
                        {"Discovery Care Admin Login"}
                    </h4>

                    <p className="text-sm text-center mt-2">
                        {"Please enter your credentials to access the admin dashboard."}
                    </p>
                </div>


                <form action={(e) => {return loginAction(e)}} className="w-full h-full flex flex-2/3 items-center justify-center px-6 bg-white rounded-r-lg">
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 gap-y-2">
                        <h2 className="text-2xl font-bold text-blue-500 mb-2">Admin Login</h2>

                        <div className="w-full flex flex-col items-center gap-y-2">
                            <input required id="username" name="username" type="text" placeholder="Username" className="w-full p-3 rounded-md border border-gray-300" />

                            <small className="w-full text-start ml-3 text-red-500">
                                {loginActionState?.errors?.properties?.username?.errors ?? ""}
                            </small>
                        </div>



                        <div className="w-full flex flex-col items-center gap-y-2">
                            <input required id="password" name="password" type="password" placeholder="Password" className="w-full p-3 rounded-md border border-gray-300" />
                            <small className="w-full text-start ml-3 text-red-500">
                                {loginActionState?.errors?.properties?.password?.errors ?? ""}
                            </small>

                        </div>

                        <ButtonComponent />

                    </div>
                </form>

            </div>
        </div>
    )
}
