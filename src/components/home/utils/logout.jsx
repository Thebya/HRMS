import { useNavigate } from "react-router-dom";
export default function LogoutButton() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removaItem("user");
        navigate("/");
    };
    return (
        <button
        onClick={handleLogout} className="text-black-600 text-xl">Logout</button>
    )
}