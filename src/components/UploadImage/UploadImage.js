import axios from "axios";
import React, { useState } from "react";
import './UploadImage.css'
import UploadImageSVG from "../../assets/UploadImageSVG";

const UploadImage = ({ type, uesrToken }) => {
  const [image, setImage] = useState("");

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "qvczylji");
    data.append("cloud_name", "diudzga1m");
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/diudzga1m/image/upload",
      data
    );

    console.log(res);
  };

  console.log(image)

  return (
    <div>
      <div>
        <label for="file-upload" class="custom-file-upload">
          <input
            id="file-upload"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <UploadImageSVG/>
        </label>
        {/* <button onClick={uploadImage}>Upload</button> */}
      </div>
      <div>{image && <img src={image.name} alt="Uploaded" />}</div>
    </div>
  );
};

export default UploadImage;
