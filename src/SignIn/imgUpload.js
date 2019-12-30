import React from "react";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const ImgUpload = ({ uploadImg, classes, img }) => {
  const handleUpload = (e) => {
    uploadImg(e);
  };
  return (
    <div className={classes.uploadimg}>
      <img
        src={img}
        width="250px"
        height="250px"
        alt="user"
        className={classes.img}
      />
      <div>
      <p>Upload Your Picture</p>
        <input
          accept="image/*"
          id="icon-button-file"
          type="file"
          className={classes.inputFile}
          onChange={handleUpload}
          name="photo"
        />
        <label htmlFor="icon-button-file" className={classes.uploadPos}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label>
      </div>
    </div>
  );
};

export default ImgUpload;
