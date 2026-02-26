"use client";

import { forwardRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

// 親コンポーネントは TipTap版と同様に value/onChange を渡す想定
export type EditComponentProps = {
  value?: string;
  onChange?: (value: string) => void;
  // 他にも呼び出し側が渡す可能性のある props を許容
  [key: string]: any;
};

// forwardRef の型を明示
const EditComponent = forwardRef<HTMLDivElement, EditComponentProps>(
  ({ value, onChange, ...props }, ref) => {
    return (
      <Editor
        ref={ref}
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
            "undo redo | formatselect | bold italic underline backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help"
        }}
        {...props}
      />
    );
  }
);

export { EditComponent };
