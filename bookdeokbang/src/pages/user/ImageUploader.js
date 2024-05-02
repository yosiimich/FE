// ImageUploader.js

import React, { useState } from 'react';

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleGalleryImage = () => {
    // 갤러리에서 이미지 가져오기
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    };
    input.click();
  };

  const handleCameraImage = () => {
    // 카메라에 접근하여 사진 찍기
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        const video = document.createElement('video');
        video.srcObject = stream;
        video.onloadedmetadata = function(e) {
          video.play();
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const context = canvas.getContext('2d');
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          setImage(canvas.toDataURL('image/jpeg'));
          stream.getTracks().forEach(track => track.stop());
        };
      })
      .catch(function(err) {
        console.log('카메라에 접근할 수 없습니다.', err);
      });
  };

  return (
    <div>
      {image && <img src={image} alt="Uploaded" style={{ width: '200px', height: 'auto' }} />}
      <button onClick={handleGalleryImage}>갤러리에서 가져오기</button>
      <button onClick={handleCameraImage}>카메라로 찍기</button>
    </div>
  );
};

export default ImageUploader;