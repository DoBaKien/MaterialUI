import React, { useEffect, useState } from "react";
import Avatar from "react-avatar-edit";

function UploadAvatar() {
  const [preview, setPreview] = useState(null);

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (view) => {
    setPreview(view);
  };

  useEffect(() => {
    console.log(preview);
  }, [preview]);

  return (
    <div>
      <p>
        <Avatar
           width={400}
           height={500}
           onClose={onClose}
           onCrop={onCrop}
           src={null}
        />
      </p>
      {preview && <img src={preview} alt="" />}
    </div>
  );
}

export default UploadAvatar;
