function uploadImage() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('photo', file);

        const token = '6616568795:AAG2al2-BupmCZ7YzOykMTZK8wotoHBRUGQ';
        const chatId = '843865753';

        sendImageToTelegramBot(formData, token, chatId);
    } else {
        console.log('Choose a file for upload.');
    }
}

function sendImageToTelegramBot(formData, token, chatId) {
    const xhr = new XMLHttpRequest();

    const apiUrl = `https://api.telegram.org/bot${token}/sendPhoto?chat_id=${chatId}`;

    xhr.open('POST', apiUrl, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log('Photo successfully sent:', xhr.responseText);
        } else {
            console.error('Error sending photo:', xhr.statusText);
        }
    };

    xhr.send(formData);
}
