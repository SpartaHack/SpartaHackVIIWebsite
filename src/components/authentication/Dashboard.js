import React, { useState, useEffect } from "react";
import { Card} from "react-bootstrap";
// import { useAuth } from "../contexts/AuthContext";
// import { useHistory } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
// import { useForm } from "react-hook-form";
// import CenteredContainer from "./CenteredContainer";
// import MSUBackground from "../MSUBackground";
import UserForm from "./UserForm";
import { useAuth } from "../contexts/AuthContext";
import MSUBackground from "../MSUBackground";
// import MSUBackground from "../MSUBackground";
import CenteredContainer from "./CenteredContainer";

export default function Dashboard() {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState();

  useEffect(() => {
    async function fetchData() {
      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(docRef);
      setUserData(docSnap.data());
    }
    fetchData();
  }, [currentUser.uid]);

  return userData ? (
    <UserForm preLoadedValues={userData} />
  ) : (
    <MSUBackground/>
  );
}
