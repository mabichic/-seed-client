import { Container } from "@mui/material";
import React from "react";
import NavBar from "./Navbar";

type Props = {
    children: React.ReactNode;
  };
  
  export default function Layout(props: Props) {
    return (
      <Container fixed>
       <NavBar />
       {props.children}
      </Container>
    );
  }