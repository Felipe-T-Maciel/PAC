'use client';

import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import LoginSquare from "@/src/components/LoginComponent/LoginSquare";
import RegisterSquare from "@/src/components/LoginComponent/RegisterSquare";
import { useUser } from '@/src/contexts/UserContext';
import { useSearchParams } from 'next/navigation';

export default function Login() {
  const tabs = ["Login", "Register"];

  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') === 'Register' ? 'Register' : 'Login';
  const [selectedTab, setSelectedTab] = useState<"Login" | "Register">(initialTab);

  const underline: React.CSSProperties = {
    position: "absolute",
    bottom: -2,
    left: 0,
    right: 0,
    height: 2,
    background: "#3E7B9A",
  };

  const containerHeights = {
    Login: 340,
    Register: 410,
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
    height: 34,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    userSelect: "none",
    color: "#0f1115",
  };

  useEffect(() => {
    const tab = searchParams.get('tab');
    setSelectedTab(tab === 'Register' ? 'Register' : 'Login');
  }, [searchParams]);


  return (
    <>
      <img src="/back1.svg" alt="" className="absolute top-0 right-0 -z-10" />
      <img src="/back2.svg" alt="" className="absolute top-0 left-0 -z-10" />
      <motion.main
        className="w-[95%] md:w-[70%] lg:w-[55%] xl:w-[35%] 2xl:w-[20%] duration-200 bg-[#EDEDED] rounded-lg relative shadow-2xl "
        style={{ overflow: "hidden" }}
        animate={{ height: containerHeights[selectedTab] }}
        transition={{ duration: 0.3 }}
      >
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
                  onClick={() => setSelectedTab(item as "Login" | "Register")}
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
      </motion.main>
    </>
  );
}