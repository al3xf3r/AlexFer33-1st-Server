import { useMoralis } from "react-moralis"
import Image from "next/image"
import Avatar from "./Avatar"
import ChangeUsername from "./ChangeUsername"

function Header() {
    const { user } = useMoralis()

    return (
        <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-white border-b-2 border-orange-600 ">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end 
            lg:items-center">
                <div className="relative h-24 w-24 mx-auto hidden 
                lg:inline-grid">
                    <Image 
                      layout="fill" 
                      objectFit="cover"
                      className="rounded-full" 
                      src="https://bitcoin4me.it/wp-content/uploads/2021/12/2143902-design-del-logo-della-testa-di-volpe-gratuito-vettoriale-e1639823429155.jpg"
                    />
                </div>

                <div className="col-span-4 text-left lg:text-center">
                  <div className="relative h-48 w-48 lg:mx-auto border-orange-600 border-8 rounded-full">
                      <Avatar logoutOnPress />
                  </div>

                  <h1 className="text-3xl">W3lC0M3 70 7H3 4L3XF3R M374V3R53</h1>
                  
                  <h2 className="text-5xl font-bold truncate">{user.getUsername ()}</h2>
                  
                  

                  <ChangeUsername/>
                </div>
            </div>
        </div>
    );
}

export default Header
