import React, { useEffect, useState } from "react";
import { useFetch } from "use-http";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LoggedUser() {
  const { get, response } = useFetch;
  const [user, setUser] = useState({});

  const auth = useSelector((state) => state.authReducer.isLoggedIn);

  console.log(useSelector((x) => console.log(x)));
  const navigate = useNavigate();
  if (!auth && localStorage.getItem("auth")) {
    navigate("/login");
  }
  if (auth) {
    const fetchProfile = async () => {
      const api = await fetch(`https://api.escuelajs.co/api/v1/auth/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setUser(data));
    };
  }
  console.log(user);
  return null;
}
