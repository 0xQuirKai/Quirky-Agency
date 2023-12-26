var text_holder = document.getElementById("text-holder")
var Loader = document.getElementById('Loader')

gsap.to(Loader, { z: -500, opacity: 0, delay: 3, duration: 2 })
gsap.to(Loader, { display: "none", delay: 5 })

gsap.to(".container", { z: 500, opacity: 1, delay: 5, duration: 2 })
gsap.to("body", { overflow: 'auto', delay: 5 })
gsap.to(".back-top-btn", { display: "flex", delay: 5 })

function blur() {
    const letters = text_holder.children;
    let ii = 0;

    function clearNL() {
        if (ii < letters.length) {
            gsap.to(letters[ii], { filter: 'blur(0px)', duration: 2 })
            ii++;
            if (ii < letters.length) {
                setTimeout(clearNL, 100)
            }
        }
    }
    setTimeout(clearNL, 0)
}

function wrap(text) {
    text_holder.innerHTML = "";
    [...text].forEach(letter => {
        const span = document.createElement("span")
        span.style.filter = 'blur(4px)';
        span.textContent = letter;
        text_holder.appendChild(span)
    })
}



function shuffleLetters(finalText) {
    wrap('');
    wrap(finalText.replace(/./g, ' '));
    let textArray = finalText.split('');
    let shufflingCounter = 0;
    let intervalHandles = [];

    function shuffle(index) {
        if (shufflingCounter < 30) {
            textArray[index] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' [Math.floor(Math.random() * 26)];
            text_holder.children[index].textContent = textArray[index];

        } else {
            text_holder.children[index].textContent = finalText.charAt(index);
            clearInterval(intervalHandles[index]);
        }
    }
    for (let i = 0; i < finalText.length; i++) {
        console.log(i)
        intervalHandles[i] = setInterval(shuffle, 80, i);

    }





    setTimeout(() => {
        shufflingCounter = 30;

        for (let i = 0; i < finalText.length; i++) {
            text_holder.children[i].textContent = finalText.charAt(i);
            clearInterval(intervalHandles[i]);
        }

        blur()

    }, 1500);


}

function PlaceholderText() {
    const newText = "QUIRKY";
    shuffleLetters(newText);
}

PlaceholderText()