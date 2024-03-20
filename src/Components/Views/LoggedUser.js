import React, { useEffect, useState } from "react";
import { useFetch } from "use-http";
export default function LoggedUser() {
  const { get, response } = useFetch;
  const [user, setUser] = useState({});

  const auth = JSON.parse(localStorage.getItem("auth")).access_token;
  console.log(auth);

  useEffect(() => fetchProfile, []);

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
  console.log(user);
  return <div>s</div>;
}
