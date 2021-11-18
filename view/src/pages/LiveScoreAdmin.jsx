import { useEffect } from "react";
import { baseUrl } from "../core";
import Header from "../components/Header";
import axios from "axios";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as yup from "yup";

import { GlobalContext } from "../context/Context";
import { useContext } from "react";
import io from "socket.io-client";

const socket = io(baseUrl);

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const theme = createTheme();

function LiveScoreAdmin() {
  let { dispatch } = useContext(GlobalContext);

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: function (values) {
      console.log("values: ", values);

      axios
        .post(
          `${baseUrl}/api/v1/login`,
          {
            email: values.email,
            password: values.password,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log("res: ", res.data);

          if (res.data.email) {
            dispatch({
              type: "USER_LOGIN",
              payload: {
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                email: res.data.email,
                access_token: res.data.access_token,
                _id: res.data._id,
              },
            });
            // history.push("/")
            window.location.reload(false);
          }
        })
        .catch((e) => {
          console.log("error: ", e);
        });
    },
  });

  useEffect(() => {
    socket.on("connect", function () {
      console.log("connected to server");
    });
    // to subcribe to a topic
    socket.on("Test topic", function (data) {
      // console.log(data);
    });
    socket.on("disconnect", function (message) {
      console.log("disconnected from server: ", message);
    });
    return () => {
      socket.close();
    };
  }, []);

  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <Grid
          container
          component="main"
          sx={{ height: "100vh", overflow: "hidden" }}
        >
          <CssBaseline />
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Live Score Admin
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={formik.handleSubmit}
                sx={{ mt: 1 }}
              >

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  color="primary"
                  variant="outlined"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  color="primary"
                  variant="outlined"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  color="primary"
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link onClick={() => {}} variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default LiveScoreAdmin;
