function uploadImages() {
    const fileInput = document.getElementById('file-input');
    const imageContainer = document.getElementById('image-container');

    const files = fileInput.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.classList.add('gallery-image');
            imageContainer.appendChild(img);
        };

        reader.readAsDataURL(file);
    }
}
