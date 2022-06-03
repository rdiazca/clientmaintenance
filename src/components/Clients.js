import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import connectionAxios from "../config/axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { getClientsSuccess } from "../actions/clientsAction";
import { useDispatch } from "react-redux";
import Client from "./Client";
import { displayForm, displayWelcome } from "../actions/displayAction";

function Clients() {
  const { token } = useSelector((state) => state.user.user);
  const { userid } = useSelector((state) => state.user.user);
  const { clients } = useSelector((state) => state.clients);

  const [nombre, setNombre] = useState("");
  const [identificacion, setIdentificacion] = useState("");

  const dispatch = useDispatch();

  const getClientsAction = (clients) => dispatch(getClientsSuccess(clients));
  const displayFormAction = () => dispatch(displayForm());
  const displayWelcomeAction = () => dispatch(displayWelcome());

  const showWelcome = () => {
    displayWelcomeAction();
  };

  const showFormClient = () => {
    displayFormAction();
  };

  const getClients = async () => {
    await connectionAxios
      .post(
        "api/Cliente/Listado",
        { usuarioid: userid, identificacion, nombre },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        getClientsAction(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getClientsSearch = async (e) => {
    e.preventDefault();
    await connectionAxios
      .post(
        "api/Cliente/Listado",
        { usuarioid: userid, identificacion, nombre },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        getClientsAction(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getClients();
  }, []);
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <IconButton aria-label="clients">
          <AccountCircleIcon /> Consulta de clientes
        </IconButton>
        <Box
          sx={{
            marginLeft: "auto",
          }}
        >
          <IconButton aria-label="save" onClick={showFormClient}>
            <AddIcon />
            Agregar
          </IconButton>
          <IconButton aria-label="back" onClick={showWelcome}>
            <KeyboardBackspaceIcon />
            Regresar
          </IconButton>
        </Box>
      </Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Box>
          <TextField
            sx={{ minWidth: "46%" }}
            id="nombre"
            label="Nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <TextField
            sx={{ minWidth: "46%" }}
            id="identificacion"
            label="Identificación"
            placeholder="Identificación"
            value={identificacion}
            onChange={(e) => setIdentificacion(e.target.value)}
          />

          <IconButton
            aria-label="search"
            onClick={(event) => getClientsSearch(event)}
          >
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Identificación</TableCell>
              <TableCell align="right">Nombre completo</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients?.map((client) => (
              <Client key={client.id} client={client} getClients={getClients} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}

export default Clients;
