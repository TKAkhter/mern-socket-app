import axios from "axios";
import { useState, useEffect } from "react";
import { baseUrl } from "../core";
import Header from "../components/Header";
// import { GlobalContext } from "../context/Context";
// import { useContext } from "react";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import io from "socket.io-client";

// const socket = io(baseUrl);

function LiveScore() {
  const [score, setScore] = useState({});

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/score`, { withCredentials: true })
      .then((res) => {
        console.log("res +++: ", res.data);
        setScore(res.data);
      });
  }, []);

  useEffect(() => {
    const socket = io(baseUrl); // to connect with locally running Socker.io server

    socket.on("connect", function () {
      console.log("connected to server");
    });
    socket.on("disconnect", function (message) {
      console.log("disconnected from server: ", message);
    });
    socket.on("SCORE", function (data) {
      console.log(data);
      setScore(data);
    });

    return () => {
      socket.close();
    };
  }, []);

  return (
    <>
      <Header />
      <div style={{ margin: "1rem" }}>
        <h1> Score Board </h1>

        <Stack spacing={2} direction="column">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {score?.teamOne} vs. {score?.teamTwo} (bat {score.bat})
              </Typography>
              <Typography variant="h5" component="div">
                {score?.score} / {score?.wicket}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                over: {score.over}
              </Typography>
              <Typography variant="body2">
                comentry:{" "}
                <b> {score?.comentry || "Hassan Ali just droped the catch"}</b>
              </Typography>
            </CardContent>
            {/* <CardActions>
                      <Button size="small">Learn More</Button>
                  </CardActions> */}
          </Card>
        </Stack>
      </div>
    </>
  );
}

export default LiveScore;
