const track = document.getElementById('carrosselTrack'); // ul
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function moveNext() {
    track.style.transition = "transform 1s ease-in-out";
    track.style.transform = "translateX(-100%)";

    setTimeout(() => {
        track.style.transition = "none";

        track.appendChild(track.firstElementChild);

        track.style.transform = "translateX(0)";
    }, 900);
}

function movePrev() {
    track.style.transition = "none";

    track.prepend(track.lastElementChild);

    track.style.transform = "translateX(-100%)";

    setTimeout(() => {
        track.style.transition = "transform 1s ease-in-out";
        track.style.transform = "translateX(0)";
    }, 10)
}

nextBtn.addEventListener('click', moveNext);
prevBtn.addEventListener('click', movePrev);