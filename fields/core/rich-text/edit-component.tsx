"use client";

import { forwardRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export type EditComponentProps = {
  value?: string;
  onChange?: (value: string) => void;
  [key: string]: any;
};

const EditComponent = forwardRef<HTMLDivElement, EditComponentProps>(
  ({ value, onChange, ...props }, ref) => {
    return (
      <div ref={ref}>
        <Editor
          value={value ?? ""}
          onEditorChange={(content) => {
            if (onChange) {
              onChange(content);
            }
          }}
          init={{
            height: 380,
            menubar: true,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount"
            ],
            toolbar:
              "undo redo | formatselect | bold italic underline backcolor | " +
              "alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help"
          }}
          {...props}
        />
      </div>
    );
  }
);

export { EditComponent };
