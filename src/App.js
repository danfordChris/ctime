import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Signin from "./components/Signin";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import SavedArticle from "./components/SavedArticle";

const initialState = {
  user: {
    id: "",
    name: "",
    email: "",
    joined: "",
  },
};

const App = () => {
  const [state, setState] = useState(initialState);
  const [progress, setProgress] = useState(0);
  const [signedin, setSignedin] = useState(false);

  const loadUser = (data) => {
    setState({
      user: {
        id: data._id,
        name: data.name,
        email: data.email,
        joined: data.joined,
      },
    });
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar setSignedin={setSignedin} initialState={initialState} />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              state.user.id ? (
                <News
                  state={state}
                  setProgress={setProgress}
                  setSignedin={setSignedin}
                  signedin={signedin}
                  key=""
                  pagesize={12}
                  country={"in"}
                  category={"general"}
                />
              ) : (
                <Signin loadUser={loadUser} setSignedin={setSignedin} />
              )
            }
          />
          <Route
            path="/news"
            element={
              <News
                state={state}
                setProgress={setProgress}
                setSignedin={setSignedin}
                signedin={signedin}
                key="news"
                pagesize={12}
                country={"in"}
                category={"news"}
              />
            }
          />
          <Route
            path="/tools"
            element={
              <News
                state={state}
                setProgress={setProgress}
                setSignedin={setSignedin}
                signedin={signedin}
                key="tools"
                pagesize={12}
                country={"in"}
                category={"tools"}
              />
            }
          />
          <Route
            path="/measures"
            element={
              <News
                state={state}
                setProgress={setProgress}
                setSignedin={setSignedin}
                signedin={signedin}
                key="measures"
                pagesize={12}
                country={"in"}
                category={"measures"}
              />
            }
          />
          <Route path="/signin" element={<Signin loadUser={loadUser} setSignedin={setSignedin} />} />
          <Route path="/signup" element={<SignUp loadUser={loadUser} setSignedin={setSignedin} />} />
          <Route path="/savedarticle" element={<SavedArticle state={state} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
