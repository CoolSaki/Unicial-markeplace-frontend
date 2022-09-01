import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  displayNone: {
    display: "none",
  },
  loaderWrapper: {
    position: "fixed",
    zIndex: 99998,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalRoot: {
    padding: "12px 35px 35px 35px",
    position: "fixed",
    width: "825px",
    background: "#282E4E",
    boxShadow: "0px 0px 30px rgba(55, 55, 79, 0.05)",
    borderRadius: "10px",
    textAlign: "center",
    zIndex: 99999,
    maxHeight: "calc(100vh - 32px)",
    overflow: "auto",
    [theme.breakpoints.down(900)]: {
      minWidth: "calc(100% - 32px) !important",
      width: "calc(100% - 32px) !important",
      margin: "0px 50px",
    },
  },
  closeIcon: {
    position: "absolute",
    top: "20px",
    right: "30px",
  },
  btnRoot: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down(500)]: {
      flexDirection: "column",
    },
  },
  nextBtn: {
    minWidth: "160px",
    width: "100%",
    marginTop: "20px",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#FFFFFF",
  },
  title: {
    fontStyle: "normal",
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: "25px",
    lineHeight: "50px",
    color: "#FFFFFF",
  },
  description: {
    fontStyle: "normal",
    fontWeight: 400,
    fontFamily: "Lato",
    fontSize: "18px",
    lineHeight: "29px",
    color: "#96A1DB",
  },
  importContent: {
    marginTop: "30px",
    width: "100%",
    height: "350px",
    background: "#21263F",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "20px",
  },
  empty: {
    backgroundColor: "red",
  },
  marginLeft: {
    marginLeft: "20px",
    [theme.breakpoints.down(500)]: {
      marginLeft: "0px",
    },
  },
  widthFull: {
    width: "100%",
  },
  importantLink: {
    textAlign: "center",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "29px",
    color: "#fb895a",
  },
  importantFunctionLink: {
    textAlign: "center",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "29px",
    color: "#fb895a",
    position: "relative",
  },
  fileImport: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    cursor: "pointer ",
  },
  contentLetter: {
    textAlign: "center",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "29px",
    color: "#96A1DB",
  },
  arrowImg: {
    "& i": {
      color: "#96A1DB",
      fontSize: "105px",
      fontWeight: 100,
    },
    marginBottom: "55px",
  },
}));