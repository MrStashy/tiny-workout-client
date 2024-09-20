import ToggleButton from "./ToggleButtons";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";

export default function Header({ setMode }) {
  const [avatarClicked, setAvatarClicked] = useState(false);
  const location = useLocation().pathname;
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const username = useContext(UserContext).currentUser.username;

  function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setAvatarClicked(false);
    }
  }

  useEffect(() => {
    if (avatarClicked) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [avatarClicked]);

  function handleLogOutClick() {
    setAvatarClicked(false);
    localStorage.removeItem("Token");
    navigate("/sign-in");
  }

  return (
<header className="min-h-40 flex flex-row place-items-center justify-between px-10">
    <img className="h-logo w-logo ml-10" src="/svg/logo.svg"></img>
    {location === "/dashboard/" && 
    <div className="flex flex-row place-items-center gap-2">
      <ToggleButton button1={"Workout"} button2={"Stats"} inHeader={true} setMode={setMode} />
      <div ref={dropdownRef} className="relative"> 
        <img 
          className="h-12 bg-gray-300/20 rounded-full p-2 cursor-pointer" 
          src="/svg/profile-avatar.svg" 
          onClick={() => setAvatarClicked(!avatarClicked)} 
        />
        {avatarClicked && 
        <div 
          className="absolute bg-white/70 rounded p-2 text-xs text-tiny-orange border flex flex-col place-items-center" 
          style={{ top: '110%', left: '50%', transform: 'translateX(-50%)' }}
        >
          <p className="font-bold">{username}</p>
          <hr></hr>
          <button onClick={handleLogOutClick}>Log Out</button>
        </div>
        }
      </div>
    </div>
    }
  </header>
  );
}
