import Image from "next/image";
import {useMoralis} from "react-moralis";

function Login() {
    const {authenticate} = useMoralis ();
    return (
        <div className="bg-black relative text-white ">
            <h1>Login screen</h1>
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center 
            justify-center space-y-5">
               
               <Image
               className="object-cover rounded-full"
               src="https://bitcoin4me.it/wp-content/uploads/2021/12/2143902-design-del-logo-della-testa-di-volpe-gratuito-vettoriale.jpg"
               height={200} width={200} />
               
               
               <button onClick={authenticate} className="bg-orange-600 rounded-lg p-5 font-bold animate-pulse">Login to the AlexFer33 1st Server</button>
            </div>

            <div className="w-full h-screen">
                <Image 
                src="https://bitcoin4me.it/wp-content/uploads/2019/06/IMG_20190623_055908_860.jpg" 
                layout="fill" 
                objectFit="cover" 
                />
               </div>
            </div>
    );
}

export default Login;
