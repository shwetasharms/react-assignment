import { Button, Container } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";

import { DataGrid } from '@mui/x-data-grid';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 0,
  boxShadow: 24,
  p: 4,
};
const TextFieldStyle = {
  width: "100%",
  mb: 4,
};
function User() {
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = React.useState([
    {id:1,name:"User1",email:"username1@email.com",pass:"User1@123"},
    {id:2,name:"User2",email:"username2@email.com",pass:"User1@123"},
    {id:3,name:"User3",email:"username3@email.com",pass:"User1@123"},
    {id:4,name:"User4",email:"username4@email.com",pass:"User1@123"},
    {id:5,name:"User5",email:"username5@email.com",pass:"User1@123"},
    {id:6,name:"User6",email:"username6@email.com",pass:"User1@123"},

  ]);
  const [userName, setUserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const idRef = useRef(0);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );
  console.debug("LoginData", loginData)
  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
    navigate("/")
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  function onSaveUser() {
    let userDetail = {}
    const newId = idRef.current + 1;
    idRef.current = newId;
    userDetail.id = newId
    userDetail.name = userName
    userDetail.email = userEmail
    userDetail.pass = password
    setRows([...rows, userDetail])
    setOpen(false)
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <Container>
      <h3>You are logged In {loginData.email}</h3>
      <Button onClick={handleLogout}>Logout</Button>
      <Grid
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Button type="button" variant='contained' onClick={handleOpen} sx={{ marginBottom: 2, marginTop: 2 }}>Create User</Button>
        <TableContainer component={Paper} sx={{ border: 1 }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">User Name</TableCell>
                <TableCell align="right">User Email</TableCell>
                <TableCell align="right">Password</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.pass}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            sx={{ borderTop: "1px solid black" }}
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <TextField id="outlined-basic" type="text" sx={TextFieldStyle} onChange={(e) => setUserName(e.target.value)} label="User Name" variant="outlined" />
            <TextField id="outlined-basic" type={"email"} sx={TextFieldStyle} onChange={(e) => setUserEmail(e.target.value)} label="User Email" variant="outlined" />
            <TextField id="outlined-basic" type="password" sx={TextFieldStyle} onChange={(e) => setPassword(e.target.value)} label="Password" variant="outlined" />
            <Button type="button" variant='contained' onClick={onSaveUser}>Save</Button>
          </Box>
        </Modal>
      </Grid>
    </Container>

  )
}

export default User
