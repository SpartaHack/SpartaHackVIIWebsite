import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../contexts/AuthContext";
import { ref, getDownloadURL, getMetadata } from "firebase/storage";
import { storage } from "../../firebase"
import { useHistory } from "react-router-dom";
import AuthBackground from "../AuthBackground";
import AppDashSelect from "./AppDashSelect";

// Intermediary component that fetches the user info (from Firestore Database) along with any resume data if we have it on file 
// Renders dashboard only upon succesful completion of fetch 

export default function AppDashLoading() {

    const { currentUser } = useAuth();

    const [userData, setUserData] = useState();

    const history = useHistory();
  
    // Resume handling 
  
    // Set the button to have original resume name 
    const [resumeOnFileOgName, setResumeOnFileOgName] = useState("None")
  
    // Link associated with the resume on file 
    const [resumeOnFileDownloadLink, setResumeOnfileDownloadLink] = useState(null)
  
    // Color of the button 
    const [resumeOnFileButtonColor, setResumeOnfileButtonColor] = useState('dark')
  
    // disable the button 
    const [resumeOnFileButtonDisable, setResumeOnfilebuttonDisable] = useState(true)
  
    // State to check if resume handling is completed, used to decide when to fully render dashboard 
    const [resumeOnFileProcessingFinished, setResumeOnFileProcessingFinished] = useState(false)
  
    useEffect(() => {

      // Fetch the user's application data from Firestore DB 
      async function fetchData() {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()){
          history.push("/application");
        }
        else{
          setUserData(docSnap.data());
        }
      }
      fetchData();

      const storageRef = ref(storage, `users/${currentUser.uid}/resume`);
  
      getDownloadURL(storageRef)
        .then((url) => {
  
          // Hits this block if download url is found, also signifies that the resume does indeed exist 
  
          // Set the "Resume on File" button's color (dark = no resume, green = resume found)
          setResumeOnfileButtonColor('success')
  
          // Set the "Resume on File" button to direct to the download url on click 
          setResumeOnfileDownloadLink(url)
  
  
          // Get the name of the resume on file so that users can use it as a reference point
          getMetadata(storageRef)
            .then((metadata) => {
  
              // Succesful retrival of the metadata associated with the resume at the requested ref 
  
              // Set the "Resume on File" button's text the name of the last resume they uploaded 
              setResumeOnFileOgName(metadata.customMetadata["ogName"])
  
              // Enable the "Resume on File" button
              setResumeOnfilebuttonDisable(false)
  
              // Resume processing is finished 
              setResumeOnFileProcessingFinished(true)
  
              
            })
            .catch((error) => {
              
              // Error getting the metadata 
  
              setResumeOnFileProcessingFinished(true)
  
            });
  
        })
        .catch((error) => {
  
          // Error getting the download url, also signifies that there is no resume on file
  
          setResumeOnFileProcessingFinished(true)
  
        })
      
    }, [history,currentUser.uid]);

  // its spazes and loads application before it gets application 
  return (
      <AuthBackground> 
          {
            (userData && resumeOnFileProcessingFinished) && (
                <AppDashSelect 
                appOrDash = {userData}
                preLoadedValues = {userData}  
                resumeOnFileOgName= {resumeOnFileOgName} 
                resumeOnFileDownloadLink = {resumeOnFileDownloadLink} 
                resumeOnFileButtonColor = {resumeOnFileButtonColor}
                resumeOnFileButtonDisable = {resumeOnFileButtonDisable}
                />
            )
        }
      </AuthBackground>
  );
}
