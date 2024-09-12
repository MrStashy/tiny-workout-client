import ToggleButton from "./ToggleButtons";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Header({ setMode }) {
  const [avatarClicked, setAvatarClicked] = useState(false)
  const location = useLocation().pathname
  const dropdownRef = useRef(null);
  const navigate = useNavigate()
 
   function handleClickOutside (event) {
     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setAvatarClicked(false);
     }
   };

   useEffect(() => {
      if (avatarClicked) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [avatarClicked]);

    function handleLogOutClick() {
       setAvatarClicked(false)
       localStorage.removeItem('Token')
       navigate("/sign-in")
    }

  return (
    <header className="min-h-40 flex flex-row place-items-center justify-between px-10">
      <img className="h-logo w-logo ml-10" src="src/assets/SVG/logo.svg"></img>
        {location === "/dashboard" && 
        <div className="flex flex-row place-items-center gap-2">
        <ToggleButton button1={"Workout"} button2={"Stats"} inHeader={true} setMode={setMode} />
        <div ref={dropdownRef}>
        <img className="h-16 bg-gray-300/20 rounded-full p-2 cursor-pointer relative" src="src/assets/SVG/profile-avatar.svg" onClick={() => setAvatarClicked(!avatarClicked)}/>
        {avatarClicked && 
        <button onClick={handleLogOutClick} className="absolute bg-white/70 rounded p-2 text-xs text-tiny-orange border">Log Out</button>
        }
        </div>
        </div>
        }
    </header>
  );
}
