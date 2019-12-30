import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { DatePicker } from "@material-ui/pickers";
import ImgUpload from "./imgUpload";
import useForm from "../StoryComponents/useForm";
import Axios from "axios";
import { URL } from "../config/config";
import CloudDoneIcon from "@material-ui/icons/CloudDone";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2em",
    backgroundColor: "rgba(228, 221, 243, 0.29)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  Input: {
    margin: ".5em"
  },
  uploadimg: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "2em",
    textAlign: "center"
  },
  img: {
    borderRadius: "50%"
  },
  uploadPos: {
    position: "absolute",
    left: "48%"
  },
  Select: {
    margin: "2em"
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    width: 200
  },
  formControl: {
    minWidth: 200,
    margin: theme.spacing(1)
  },
  inputFile: {
    display: "none"
  },
  CongrateTile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    textAlign: "center"
  },
  cloud: {
    color: "green",
    fontSize: "5em"
  }
}));

const SignUp = ({ toggleAuth }) => {
  const [date, setDate] = useState(new Date());
  const [apires, setRes] = useState();
  const [loader, setLoader] = useState(false);
  const [img, setImg] = useState(
    "http://localhost:5000/uploads/assets/avatar.jpg"
  );
  const [upload, setUpload] = useState();
  const { handleSubmit, handleChange, values, uploadImg, Preview } = useForm(
    getvalues,
    {
      displayName: "",
      email: "",
      gendre: "",
      birthdate: date,
      password: "",
      photo: img,
      category: "testimg"
    }
  );

  function getvalues() {
    setLoader(true);
    Axios.post(`${URL}/api/signUp`, upload, {
      headers: { "Content-Type": "form-data" }
    })
      .then((res) => {
        setRes(res.data.message);
        setLoader(false);
      })
      .catch((e) => {
        console.log(e);
        setLoader(false);
      });
  }

  useEffect(() => {
    if (values.photo !== img) {
      setImg(Preview);
    }
  }, [values, Preview, img]);

  useEffect(() => {
    let data = new FormData();
    for (let key in values) {
      data.append(`${key}`, values[key]);
    }

    setUpload(data);
  }, [values]);

  const classes = useStyles();
  return (
    <form
      encType="multipart/form-data"
      className={classes.root}
      onSubmit={handleSubmit}
    >
      {!apires ? (
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          <Typography variant="h5" component="h2">
            Sign Up
          </Typography>
          <TextField
            label="Your Email"
            variant="outlined"
            className={classes.Input}
            name="email"
            id="email"
            onChange={handleChange}
          />
          <TextField
            label="Your Name"
            variant="outlined"
            className={classes.Input}
            name="displayName"
            onChange={handleChange}
          />
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <InputLabel htmlFor="password">Your Password</InputLabel>
            <OutlinedInput
              onChange={handleChange}
              name="password"
              id="password"
              type="password"
              labelWidth={105}
            />
          </FormControl>
          <FormControl className={clsx(classes.formControl, classes.Input)}>
            <InputLabel id="gendre-select">Gendre</InputLabel>
            <Select
              labelId="gendre-select"
              id="gendre"
              value={values.gendre}
              onChange={handleChange}
              name="gendre"
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
          <ImgUpload uploadImg={uploadImg} classes={classes} img={img} />
          <div className={classes.Select}>
            <DatePicker
              disableFuture
              variant="inline"
              inputVariant="outlined"
              color="primary"
              autoOk
              label="Birth Date"
              value={date}
              onChange={setDate}
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            {!loader ? "Sing Up" : <CircularProgress color="secondary" />}
          </Button>
          <div>
            <Typography>
              I Already Have An Account
              <Button component="span" onClick={toggleAuth}>
                Sign In
              </Button>
            </Typography>
          </div>
        </Grid>
      ) : (
        <div className={classes.CongrateTile}>
          <h1>
            Congratulation You Have Been Join To Shopy@Tn You Can Sign In to
            Your Account Now
          </h1>
          <CloudDoneIcon className={classes.cloud} />
          <Typography variant="h5" component="h2" >
          <Button component="span" onClick={toggleAuth }>
            Sign In
          </Button>
        </Typography>
        </div>
      )}
    </form>
  );
};

export default SignUp;
