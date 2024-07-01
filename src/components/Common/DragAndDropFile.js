import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export default function DragAndDropFile({ handleFile, onlyPng }) {
  // drag state
  const [dragActive, setDragActive] = useState(false);
  // ref
  const inputRef = useRef(null);
  const { t } = useTranslation();

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const fileExtension = file.name.split(".").pop().toLowerCase();

      if (
        file.type.startsWith("image/") ||
        fileExtension === "jpg" ||
        fileExtension === "jpeg" ||
        fileExtension === "png"
      ) {
        handleFile({ target: { files: [file] } });
      } else {
        toast.error(t("dnd.only_img"));
      }
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();

    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const fileExtension = file.name.split(".").pop().toLowerCase();

      if (
        file.type.startsWith("image/") ||
        fileExtension === "jpg" ||
        fileExtension === "jpeg" ||
        fileExtension === "png"
      ) {
        handleFile(e);
      }
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div id="form-file-upload" className="!w-full" onDragEnter={handleDrag}>
      <input
        ref={inputRef}
        type="file"
        accept=".jpeg, .jpg, .png, .webp, .avif"
        id="input-file-upload"
        onChange={handleChange}
      />
      <label
        id="label-file-upload"
        htmlFor="input-file-upload"
        className={dragActive ? "drag-active" : ""}>
        <div>
          <p>{t("dnd.drag_file")}</p>
          <button
            type="button"
            className="upload-button pulse-button"
            onClick={onButtonClick}>
            {t("dnd.upload_file")}
          </button>
        </div>
      </label>
      {dragActive && (
        <div
          id="drag-file-element"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}></div>
      )}
    </div>
  );
}
