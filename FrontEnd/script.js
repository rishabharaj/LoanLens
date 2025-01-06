// Example: Simple file upload status update

document.addEventListener("DOMContentLoaded", function() {
    const fileUpload = document.getElementById("fileUpload");
    const uploadStatus = document.querySelector(".upload-status p");
    const uploadButton = document.querySelector(".upload-form button");
  
    if (uploadButton) {
      uploadButton.addEventListener("click", () => {
        if (fileUpload.files.length > 0) {
          uploadStatus.textContent = `Uploaded: ${fileUpload.files[0].name}`;
        } else {
          uploadStatus.textContent = "No file selected.";
        }
      });
    }
  });
  