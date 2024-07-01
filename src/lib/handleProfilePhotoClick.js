export default function handleProfilePhotoClick(imageData, cardUserName) {

    const div = document.createElement('div');
    div.classList.add('profile-photo-display-wrapper');

    const html = `
        <div id="profile-photo-shadow"></div>
    `;

    let image;

    if (typeof imageData == "string") {
        image = new Image();
        image.src = imageData;
    } else {
        image = new Image(imageData.width, imageData.height);
        image.src = imageData;
    }
    image.alt = cardUserName + ' Profile Image';

    image.onload = () => {
        div.innerHTML = html;
        div.appendChild(image);

        document.body.appendChild(div);
        document.body.style.overflow = 'hidden';

        image.style.width = '230px';
        setTimeout(() => {
            image.style.transform = 'scale(1)';
        }, 10);

        const shadow = document.getElementById('profile-photo-shadow');

        shadow.addEventListener('click', closeProfilePhoto);

        function closeProfilePhoto() {
            image.style.transform = 'scale(0)';

            setTimeout(() => {
                shadow.removeEventListener('click', closeProfilePhoto);
                div.remove();
                document.body.style.overflow = '';
            }, 200);
        }
    };
}
