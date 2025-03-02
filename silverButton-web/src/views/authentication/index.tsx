import React, { useState } from "react";
import SignUp from "./signUp";
import { Box, Typography } from "@mui/material";
import SignIn from "./signIn";

export default function Authentication() {
  const [view, setView] = useState<"sign-in" | "sign-up">("sign-in");

  const toggleView = () => {
    if (view === "sign-in") {
      setView("sign-up");
    } else {
      setView("sign-in");
    }
  };

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Typography variant="h4" textAlign="center">
        {view === "sign-in" ? "로그인" : "회원가입"}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
        {view === "sign-in" ? <SignIn /> : <SignUp />}
      </Box>

      <Box
        sx={{
          textAlign: "center",
          mt: 2,
          color: "blue",
          ":hover": { textDecoration: "underline" },
        }}
      >
        <Typography sx={{ cursor: "pointer" }} onClick={toggleView}>
          {view === "sign-in"
            ? "계정이 없으신가요? 회원가입"
            : "이미 계정이 있으신가요? 로그인"}
        </Typography>
      </Box>
    </Box>
  );
}
