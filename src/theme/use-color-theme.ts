import { createTheme, PaletteMode, useMediaQuery } from "@mui/material";
import React from "react";
import { getDesignTokens, getThemedComponents } from "./theme";
import { deepmerge } from '@mui/utils';

export const useColorTheme = () => {
  const [mode, setMode] = React.useState<PaletteMode>("light");

  const toggleColorMode = () =>
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

 
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  React.useEffect(() => {
    setMode(prefersDarkMode ? 'light' : 'dark');
  }, [prefersDarkMode]);


  const modifiedTheme = React.useMemo(
    () =>
      createTheme(deepmerge(getDesignTokens(mode), getThemedComponents(mode))),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};