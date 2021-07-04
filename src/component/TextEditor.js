import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import htmlToDraft from "html-to-draftjs";
import draftToHtml from "draftjs-to-html";

export default function TextEditor (props) {
  const [ editor, setEditor ] = useState(EditorState.createEmpty())

  useEffect(() => {
    if(props.contenu){
      const blocksFromHtml = htmlToDraft(props.contenu);
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
      setEditor(EditorState.createWithContent(contentState));
    }
  }, [])

  const onEditorStateChange = (editorState) => {
    setEditor(editorState);
    props.setContenu(draftToHtml(convertToRaw(editor.getCurrentContent())));
  };

  return (
    <div>
      <Editor
        editorState={editor}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />  
    </div>
    );
}