'use client';

import Image from "next/image";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import LoginSquare from "./Components/LoginSquare";
import RegisterSquare from "./Components/RegisterSquare";
import { useUser } from '../../Components/UserContext';

export default function Login() {
  const tabs = ["Login", "register"];
  const { user, setUser } = useUser(); 

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const underline: React.CSSProperties = {
    position: "absolute",
    bottom: -2,
    left: 0,
    right: 0,
    height: 2,
    background: "#3E7B9A",
  };

  const container: React.CSSProperties = {
    width: 480,
    height: "60vh",
    maxHeight: 360,
    borderRadius: 10,
    background: "white",
    overflow: "hidden",
    boxShadow:
      "0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)",
    display: "flex",
    flexDirection: "column",
  };

  const nav: React.CSSProperties = {
    background: "#fdfdfd",
    padding: "5px 5px 0",
    borderRadius: "10px",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottom: "1px solid #eeeeee",
  };

  const tabsContainer: React.CSSProperties = {
    display: "flex",
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: "100%",
  };

  const tab: React.CSSProperties = {
    flex: 1,
    padding: "10px 15px",
    position: "relative",
    background: "white",
    cursor: "pointer",
    height: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    userSelect: "none",
    color: "#0f1115",
  };

  const icon: React.CSSProperties = {
    fontSize: 128,
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (token) {
      getToken(token);
    }
  }, []);

  const getToken = async (token: string) => {
    const response = await fetch("http://127.0.0.1:8092/token", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    setUser({
      email: data.user.email,
      token: data.access_token,
      img: data.img || "",
    });
  };

  useEffect(() => {
    console.log('usercontext:', user);
  }, [user]);

  return (
    <main className="w-[30%] h-[40%] bg-[#EDEDED] rounded-lg shadow-2xl">
      <nav style={nav}>
        <LayoutGroup>
          <ul style={tabsContainer}>
            {tabs.map((item) => (
              <motion.li
                key={item}
                initial={false}
                animate={{
                  backgroundColor: item === selectedTab ? "#eee" : "#eee0",
                }}
                style={tab}
                onClick={() => setSelectedTab(item)}
              >
                {item}
                {item === selectedTab && (
                  <motion.div
                    style={underline}
                    layoutId="underline"
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </LayoutGroup>
      </nav>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedTab}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {selectedTab === "Login" ? (
            <LoginSquare />
          ) : (
            <RegisterSquare />
          )}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
