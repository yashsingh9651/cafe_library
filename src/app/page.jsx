"use client";
import { Button } from "@material-tailwind/react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import axios from "axios"
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
    <HeroSection/>
    </>
  );
}
