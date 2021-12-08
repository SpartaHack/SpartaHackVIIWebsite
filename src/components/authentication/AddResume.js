import React, { useState } from 'react'
import {
  Form,
  Col,
  Button,
  ProgressBar,
  Row,
  Container,
} from "react-bootstrap";
import { storage } from "../../firebase"
import { ref, uploadBytesResumable, getDownloadURL,updateMetadata} from "firebase/storage";
import { useAuth } from "../contexts/AuthContext";


export default function AddResume( { resumeUploading } ) {


    // Resume handling 

    // Set the button to have original resume name 
    const [resumeOnFileOgName, setResumeOnFileOgName] = useState("None")

    // Link associated with the resume on file 
    const [resumeOnFileDownloadLink, setResumeOnfileDownloadLink] = useState(null)

    // Color of the button 
    const [resumeOnFileButtonColor, setResumeOnfileButtonColor] = useState('dark')

    // disable the button 
    const [resumeOnFileButtonDisable, setResumeOnfilebuttonDisable] = useState(true)

    // Resume progress bar functionality 
    const [progressBarError, setProgressbarError] = useState(null)
    const [progress, setProgress] = useState(0);

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
          // console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              break;
            case 'running':
              resumeUploading(true)
              break;
            default:
              break;
          }
        }, 
        (error) => {
          // Unsuccesful resume upload handling 
          resumeUploading(false)
          setProgressbarError("Error : File Parameters Not Met")
        }, 
        () => {
          // Handle successful uploads 

          updateMetadata(storageRef, newMetadata)
          .then((metadata) => {
            // Succesful metadata retrival handling

          }).catch((error) => {
            // Unsuccesful metadata retrival handling 

          });

          setProgressbarError(null)
          
          setResumeOnFileOgName(`${file.name}`);
          setResumeOnfileButtonColor("success");
          setResumeOnfilebuttonDisable(false)

          resumeUploading(false)
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setResumeOnfileDownloadLink(downloadURL)
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
                          onClick={()=> window.open(`${resumeOnFileDownloadLink}`,"_blank")}
                          className="text-truncate" 
                          variant={ resumeOnFileButtonColor } 
                          size="md" 
                          disabled={resumeOnFileButtonDisable}
                        >
                          {resumeOnFileOgName} 
                        </Button>
                    </div> 
                </Form.Group>
              </Col>
          </Row>
        </Container>
      </>
    )
}

