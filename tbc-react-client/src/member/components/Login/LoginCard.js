import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import FBButton from "./FBButton";
import Nbtn from "./Nbtn";
import validate from "./validate";
import ProjectApiService from "../../../ProjectApiService";
import "./../../style/Login.css";

const useStyles = makeStyles((theme) => ({
  root3: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(5),
      width: theme.spacing(36),
      height: theme.spacing(58),
    },
  },
  button: {
    margin: theme.spacing(3),

    width: theme.spacing(27),
    height: theme.spacing(4.5),
    fontSize: "10px",
    fontWeight: "bold",
    color: "white",
    boxShadow: "none",
    textTransform: "none",
    backgroundColor: "#fa6462",
    "&:hover": {
      backgroundColor: "#e74f4d",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
  },
}));

function SimplePaper(props) {
  const classes = useStyles();
  const myStorage = window.localStorage;

  const [values, setValues] = useState({ userId: "", pwd: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event) => {
    console.log(values);
    setSubmitting(true);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    setErrors(validate(values));
  };

  useEffect(() => {
    if (submitting) {
      if (Object.keys(errors).length === 0) {
        ProjectApiService.login(values.userId)
          .then((res) => {
            if (values.pwd === res.data.pwd) {
              console.log("login 값", res.data);
              window.localStorage.setItem(myStorage, JSON.stringify(res.data));
              props.history.push("/setting");
            } else {
              console.error("비밀번호 오류!");
            }
          })
          .catch((err) => {
            console.error("로그인 에러!", err);
          });
      }
      setSubmitting(false);
    }
  }, [errors]);

  return (
    <div className={classes.root3}>
      <Paper elevation={2}>
        <form onSubmit={handleSubmit} noValidate>
          <Grid container direction="row" justify="center" alignItems="center">
            <FBButton />
            <Nbtn />
            {/* 현타오네 */}
            <div className="text1 div1">
              ――――――――&nbsp;&nbsp;&nbsp; 또는 &nbsp;&nbsp; ――――――――
            </div>
            <div>
              <label>
                <input
                  name="userId"
                  value={values.userId}
                  onChange={handleChange}
                  type="email"
                  class="form-control"
                  placeholder="이메일 주소 입력"
                  aria-describedby="basic-addon2"
                />
              </label>
            </div>
            <div>
              <label>
                <input
                  name="pwd"
                  value={values.pwd}
                  onChange={handleChange}
                  type="password"
                  class="form-control"
                  placeholder="비밀번호 입력"
                  aria-describedby="basic-addon2"
                />
              </label>
            </div>
            <Button
              variant="contained"
              className={classes.button}
              type="submit"
            >
              로그인
            </Button>
          </Grid>
        </form>
        <div>
          {errors.userId && <span>{errors.userId}</span>}{" "}
          {errors.pwd && <span>{errors.pwd}</span>}
        </div>
        <div className="text1 text2">
          아직 계정이 없으신가요? <a className="a1">텀블벅 가입하기</a>
        </div>
        <hr />
        <div className="text3">
          <a className="a1">혹시 비밀번호를 잊으셨나요?</a>
        </div>
      </Paper>
    </div>
  );
}
export default withRouter(SimplePaper);
