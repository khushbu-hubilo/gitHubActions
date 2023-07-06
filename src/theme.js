import { createTheme } from "@mui/material/styles";
import fdPalette from "./fdPalette";
import fdTypography from "./fdTypography";
import fdComponents from "./fdComponents";


export const theme = createTheme({
  palette: fdPalette,
  typography: fdTypography,
  components: fdComponents
});
