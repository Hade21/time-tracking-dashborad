var myInit = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
};

let myRequest = new Request("./data.json", myInit);

function showData(cards, data, time) {
    for (const i in data) {
        const timeFrame = time.textContent.toLowerCase();
        const current = cards[i].lastElementChild.lastElementChild.firstElementChild.firstElementChild;
        const previous = cards[i].lastElementChild.lastElementChild.lastElementChild.lastElementChild;
        const previousTime = cards[i].lastElementChild.lastElementChild.lastElementChild.firstElementChild;
        const frameTime = [...timeFrame];
        frameTime.splice(-2, 2);
        if (frameTime[frameTime.length - 1] == 'i') {
            frameTime[frameTime.length - 1] = 'y';
        }

        addFade([current, previous])
        current.innerHTML = data[i].timeframes[timeFrame].current;
        previousTime.innerHTML = frameTime.join('');
        previous.innerHTML = data[i].timeframes[timeFrame].previous;
    }
}

function addFade(param) {
    param.forEach(function(el) {
        el.parentElement.classList.add('change');
        setTimeout(function() {
            el.parentElement.classList.remove('change')
        }, 500)
    })
}

const times = document.querySelectorAll('.time');
times.forEach(function(time) {
    time.addEventListener('click', function() {
        fetch(myRequest)
            .then(response => response.json())
            .then(data => {
                const cards = document.querySelectorAll('.card');
                showData(cards, data, time);
            });
    })
})