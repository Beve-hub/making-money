function openProfilePictureUploader() {
    const profilePictureInput = document.getElementById('profilePictureInput');
    profilePictureInput.click();
}

document.getElementById('profilePictureInput').addEventListener('change', handleProfilePictureSelect);

function handleProfilePictureSelect(event) {
    const profilePicture = document.getElementById('profilePicture');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            profilePicture.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}