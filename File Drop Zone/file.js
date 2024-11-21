const dropzoneBox = document.getElementsByClassName(
    "dropzone-box")[0];
const inputFiles = document.querySelectorAll(
    "dropzone-area input[type='file']"
);
const inputElement = inputFiles[0];
const dropZoneElement = inputElement.closest(
    ".dropzone-area"
);
const fileLimit = 25000000;

inputElement.addEventListener("change", (e) => {
    if(inputElement.files[0].size > fileLimit) {
        alert("File is over 25MB!");
        return
    }

    if (inputElement.files.length) {
        updateDropzoneFileList(
            dropZoneElement,
            inputElement.files[0]
        );
    }
});