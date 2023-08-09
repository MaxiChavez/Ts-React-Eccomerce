import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: "480px",
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.breakpoints.sm]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: "44px", // Modificar el tamaño a un valor fijo en píxeles
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.breakpoints.xs]: {
      fontSize: "28px", // Modificar el tamaño a un valor fijo en píxeles
    },
  },

  control: {
    [theme.breakpoints.xs]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    maxWidth: "100%",
    height: "auto",

    [theme.breakpoints.md]: {
      display: "block",
      margin: "0 auto",
      maxWidth: "80%",
    },
  },
}));

export default useStyles;
