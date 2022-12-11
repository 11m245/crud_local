import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';


function Header() {

    const menuList = [{ name: "Create User", icon: <PersonAddIcon />, path: "/create-user" },
    { name: "Edit User", icon: <ManageAccountsIcon />, path: "edit-user" },
    { name: "Delete User", icon: <DeleteIcon />, path: "delete-user" },
    { name: "List Users", icon: <ListAltIcon />, path: "list-users" },
    { name: "Error Page", icon: <ReportProblemIcon />, path: "error-page" },];


    return (
        <div className='header-container'>
            <h1 className="text-center">Admin DashBoard of Users</h1>
            <div className="menu-list-container">
                {menuList.map((obj, index) => CreateMenu(obj, index))}
            </div>
        </div>
    );
}


function CreateMenu({ name, icon, path }, index) {

    const navigate = useNavigate();

    return (<div key={index} className='menu-wrapper'>
        <Button
            sx={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
            variant="contained"
            startIcon={icon}
            onClick={() => navigate(path)}
        >
            {name}
        </Button>
    </div>)
}



export { Header }