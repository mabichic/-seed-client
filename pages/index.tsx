
import Switch from "@mui/material/Switch";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image"; 
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {

  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div className={styles.container}>
      <div>
       <span>With default Theme:</span>
     </div>
     <Switch {...label} defaultChecked />
     <Switch {...label} />
     <Switch {...label}  defaultChecked />
    </div>

  )
};

export default Home;
