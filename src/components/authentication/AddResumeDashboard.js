import React, { useState } from 'react'
import {
  Form,
  Col,
  Button,
  ProgressBar,
  Container,
  Row,
} from "react-bootstrap";
import { storage } from "../../firebase"
import { ref, uploadBytesResumable, getDownloadURL, updateMetadata } from "firebase/storage";
import { useAuth } from "../contexts/AuthContext";

export default function AddResumeDashboard( { resumeUploading, resumeOnFileOgName, resumeOnFileDownloadLink, resumeOnFileButtonColor, resumeOnFileButtonDisable} ) {

    // Resume handling 

    // Set the button to have original resume name 
    const [currResumeOnFileOgName, setCurrResumeOnFileOgName] = useState(resumeOnFileOgName)

    // Link associated with the resume on file 
    const [currResumeOnFileDownloadLink, setCurrResumeOnfileDownloadLink] = useState(resumeOnFileDownloadLink)

    // Color of the button 
    const [currResumeOnFileButtonColor, setCurrResumeOnfileButtonColor] = useState(resumeOnFileButtonColor)

    // Disable the button 
    const [currResumeOnFileButtonDisable, setCurrResumeOnfilebuttonDisable] = useState(resumeOnFileButtonDisable)

    // state for showing progress bar 

    const [progressBarError, setProgressbarError] = useState(null)
    const [progress, setProgress] = useState(0);

    // handle progress bar error message 

    const { currentUser } = useAuth();

    function handleUpload(e) {


        const file = e.target.files[0]

        if (file == null) {
            return
        }

      // Create file metadata including the OG name so that dashboard 
      // can access it for "Resume on File" on load of dashboard component 
      const newMetadata = {
        customMetadata: {
          "ogName": `${file.name}`
        }
      };

      const storageRef = ref(storage, `users/${currentUser.uid}/resume`);

      const uploadTask = uploadBytesResumable(storageRef, file);


      setProgressbarError(null)
      
      uploadTask.on('state_changed', 
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          setProgress((Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)));
          switch (snapshot.state) {
            case 'paused':
              break;
            case 'running':
              setCurrResumeOnfilebuttonDisable(true)
              resumeUploading(true)
              break;
            default:
              break; 
          }
        }, 
        (error) => {
          // Handle unsuccessful uploads

          // Unsuccesful because the file size is too large 


          // Unsuccesful becuase the file is not of the correct type
          resumeUploading(false)
          setProgressbarError("Error : File Parameters Not Met")
          setCurrResumeOnfilebuttonDisable(false)


        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...

          // Display the uploaded file name on the "Resume on File" Button by changing its color to sucess and 
          // text to the resume files name 

          updateMetadata(storageRef, newMetadata)
          .then((metadata) => {
            // succcess 
          }).catch((error) => {
            // Uh-oh, an error occurred!
          });

          setProgressbarError(null)

          setCurrResumeOnFileOgName(`${file.name}`);
          setCurrResumeOnfileButtonColor("success");
          setCurrResumeOnfilebuttonDisable(false)

          resumeUploading(false)
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setCurrResumeOnfileDownloadLink(downloadURL)
          });
        }
      );

    }

    return (
      <>
      <Container>
          <Col>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Resume (Optional, .txt .doc .docx .pdf, less than 5MB)</Form.Label>
                <Form.Control type="file" onChange={handleUpload}/>
                <Form.Text className="text-muted">
                    Allows sponsors to reach out for potential internship/employment opportunities. 
                </Form.Text>
              </Form.Group>
          </Col>
        </Container>
        <Container>
          <Row>
          <Col md = {6}>
              <Form.Group className="mb-3">
                <Form.Label> Resume Upload Progress </Form.Label>
                <div>        
                  <ProgressBar 
                  animated={!progressBarError} 
                  variant={progressBarError ? "danger" : "primary"} 
                  style={{height: "38px"}} 
                  className="mb-2" 
                  now={progressBarError ? 100 : progress}  
                  label={progressBarError ? progressBarError : `${progress}%`}/>
                </div>
              </Form.Group>
            </Col>
            <Col md = {6}>
              <Form.Group className="mb-3">
                <Form.Label> Resume on File </Form.Label>
                  <div className="d-grid gap-2">
                      <Button 
                        onClick={()=> window.open(`${currResumeOnFileDownloadLink}`,"_blank")}
                        className="text-truncate" 
                        variant={currResumeOnFileButtonColor} 
                        size="md" 
                        disabled={currResumeOnFileButtonDisable}
                      >
                        {currResumeOnFileOgName} 
                      </Button>
                  </div> 
              </Form.Group>
            </Col>
          </Row>

        </Container>
      </>
    )
}
