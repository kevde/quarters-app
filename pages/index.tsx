import { Avatar, Grid, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import MainLayout from "../components/layouts/Main";

const Dashboard = dynamic(() => import("../components/dashboard/Dashboard"));

export default function RoulettePage() {
  return (
    <MainLayout>
      <Dashboard />
    </MainLayout>
  );
}
