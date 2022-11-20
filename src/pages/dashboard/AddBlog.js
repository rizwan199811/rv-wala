import React from 'react'
import { Card, CardBody, CardTitle,  Button } from "reactstrap";
import {
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { ContentState, convertToRaw ,EditorState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useState } from 'react';
const AddBlog = () => {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const updateTextDescription = async (state) => {

    await setEditorState(state);
    
    const data = convertToRaw(editorState.getCurrentContent());
    console.log(data)
    };
  return (
    <Card>
    <CardBody>  
      <CardTitle tag="h5">Add New Blogs</CardTitle>
      <Form>
              <FormGroup>
                <Label for="title">Blog Title</Label>
                <Input
                  id="title"
                  name="email"
                  placeholder="Enter Blog Title"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Blog Description</Label>
                <Editor

editorState={editorState}

toolbarClassName="toolbarClassName"

wrapperClassName="wrapperClassName"

editorClassName="editorClassName"

onEditorStateChange={updateTextDescription}

/>
              </FormGroup>

              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input id="exampleFile" name="file" type="file" />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
    </CardBody>
  </Card>
  )
}

export default AddBlog