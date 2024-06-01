document.getElementById('continueButton').addEventListener('click', function() {
    alert('We use cookies');
    var audio = document.getElementById('backgroundMusic');
    audio.play();
    document.getElementById('cookiePopup').style.display = 'none';
});
