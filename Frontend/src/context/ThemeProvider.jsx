"use client";

import { useState, useEffoct } from "react";
import { MyContext } from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const values = {};

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};

export default ThemeProvider;
