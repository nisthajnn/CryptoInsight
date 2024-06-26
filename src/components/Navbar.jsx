import { useNavigate } from "react-router-dom"
import { LogoIcon } from "../icons/icon"

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-blue-950 text-white h-14 flex items-center">
      <div className="wrapper-container w-full">
        <div className="flex items-center gap-1 cursor-pointer" onClick={() => navigate('/')}>
          <LogoIcon />
          <p className="font-bold text-2xl">
            <span className="text-yellow-500">C</span>rypto<span className="text-yellow-500">I</span>nsight
          </p>
        </div>
      </div>
    </div>
  )
}

export default Navbar
