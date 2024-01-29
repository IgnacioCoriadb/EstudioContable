import 'bootstrap/dist/css/bootstrap.css';
import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapClient from '../components/BootstrapClient';
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Services from "../components/services/Services";
import About from "../components/about/About";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Estudio Contable",
  description: "Estudio contable",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <Header></Header>
        <Services></Services>
        <About></About>
        {children}
        <BootstrapClient></BootstrapClient>
        </body>
    </html>
  );
}
