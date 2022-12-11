import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import IconButton from '@mui/material/IconButton';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';


function ListUsers({ userList, setUserList }) {

    const [showInfo, setShowInfo] = useState(false);


    return (<>
        {showInfo ? <p className="text-danger text-center fw-bold">edit and delete functionality in this list is not yet functional,  instead use EDIT USER, DETELE USER menus by using mobile Number of the User</p> : null}
        <BasicTable userList={userList} showInfo={showInfo} setShowInfo={setShowInfo} />
    </>)
}


function BasicTable({ userList, showInfo, setShowInfo }) {




    const rows = userList.map((user, i) => {
        return {
            id: user.id,
            name: user.userInfo.name,
            userId: user.userInfo.userId,
            mobile: user.contactInfo.mobile,
            email: user.contactInfo.email,
            pin: user.address.pin,
            edit: <IconButton onClick={() => setShowInfo(!showInfo)} sx={{ "&:hover": { backgroundColor: "orange" } }} color="secondary" aria-label="edit-profile"><ModeEditOutlineRoundedIcon /></IconButton>,
            delete: <IconButton onClick={() => setShowInfo(!showInfo)} sx={{ "&:hover": { backgroundColor: "orange" } }} color="error" aria-label="delete-profile"><DeleteForeverRoundedIcon /></IconButton>
        }
    });
    // const rows = [
    //     { name: "Frozen yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
    //     createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    //     createData("Eclair", 262, 16.0, 24, 6.0),
    //     createData("Cupcake", 305, 3.7, 67, 4.3),
    //     createData("Gingerbread", 356, 16.0, 49, 3.9)
    // ];

    // function createData(name, calories, fat, carbs, protein) {
    //     return { name, calories, fat, carbs, protein };
    // }



    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={(theme) => ({ ...theme.typography.body1, backgroundColor: "primary.main", fontWeight: 700, color: "red" })}>
                    <TableRow >
                        <TableCell sx={{ fontSize: 22 }}>Name</TableCell>
                        <TableCell sx={{ fontSize: 22 }} align="right">Email</TableCell>
                        <TableCell sx={{ fontSize: 22 }} align="right">PIN</TableCell>
                        <TableCell sx={{ fontSize: 22 }} align="right">id</TableCell>
                        <TableCell sx={{ fontSize: 22 }} align="right">userID</TableCell>
                        <TableCell sx={{ fontSize: 22 }} align="right">Mobile</TableCell>
                        <TableCell sx={{ fontSize: 22 }} align="right">edit</TableCell>
                        <TableCell sx={{ fontSize: 22 }} align="right">delete</TableCell>


                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow className="fs-5"
                            key={row.id}
                            sx={{

                                "&:last-child td, &:last-child th": { border: 0 }, '&:nth-of-type(even)': {
                                    backgroundColor: "#007bff"
                                }
                            }}
                        >
                            <TableCell sx={{ fontSize: 22 }} component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell sx={{ fontSize: 22 }} align="right">{row.email}</TableCell>
                            <TableCell sx={{ fontSize: 22 }} align="right">{row.pin}</TableCell>
                            <TableCell sx={{ fontSize: 22 }} align="right">{row.id}</TableCell>
                            <TableCell sx={{ fontSize: 22 }} align="right">{row.userId}</TableCell>
                            <TableCell sx={{ fontSize: 22 }} align="right">{row.mobile}</TableCell>
                            <TableCell align="right">{row.edit}</TableCell>
                            <TableCell align="right">{row.delete}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}





export { ListUsers }