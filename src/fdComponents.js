const fdComponents = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        letterSpacing: "0",
        textTransform: "none",
        whiteSpace: "nowrap",
        minWidth: "auto",
        fontWeight: 500,
        "&.Mui-disabled": {
          background: 'grey',
        },
      },
      contained: {
        color: "#fff",
      },
    },
  },
  MuiInputBase: {
    // defaultProps?: ComponentsProps['MuiInputBase'];
    styleOverrides:{
      root:{
        color:"#fff",
      }
    }
    // variants?: ComponentsVariants['MuiInputBase'];
  },
};

export default fdComponents;
