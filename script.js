// const hover = document.querySelectorAll('.detail');

// hover.forEach(function(card) {
//     card.addEventListener('mouseover', function() {
//         card.classList.add('detail-hover');
//     })
//     if (card.classList.contains('detail-hover')) {
//         card.classList.remove('detail-hover');
//     }
// });
// hover.forEach(function(card) {
//     card.classList.remove('detail-hover');
// })


var myInit = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
};

let myRequest = new Request("./data.json", myInit);

// fetch(myRequest)
//     .then(response => response.json())
//     .then(data => {
//         myData = data;
//         return myData
//     });

const times = document.querySelectorAll('.time');
times.forEach(function(time) {
    time.addEventListener('click', function() {
        fetch(myRequest)
            .then(response => response.json())
            .then(data => {
                const cards = document.querySelectorAll('.card');
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


                    current.innerHTML = data[i].timeframes[timeFrame].current;
                    previousTime.innerHTML = frameTime.join('');
                    previous.innerHTML = data[i].timeframes[timeFrame].previous;
                }
            });
    })
})

// function addData (timeframe, data) {
//     timeframe.forEach(function(time) {
//         if(timeframe.lastChildElement.firstChildElement.textContent == data.)
//     })
// }