# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![Desktop](./design/desktop-preview.jpg)
![Mobile](./design/mobile-design.jpg)

### Links

- Solution URL: [Github repo](https://github.com/Hade21/time-tracking-dashborad)
- Live Site URL: [Github page](https://hade21.github.io/time-tracking-dashborad)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [FontAwesome](https://fontawesome.com/) - For icons
- Fetch method javascript - For read json data file


### What I learned

I just learn how to read json file in the local repo to display in our page.


```js
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
}
```

### Continued development

I will add some custom animation to this page during the changes of data when we click on set time we want to.

### Useful resources

- [Youtube](https://www.youtube.com) - This helped me for tutorial read json file using fetch method.
- [W3Schools](https://www.w3schools.com) - This is an amazing tutorial for html, css, and also javascript.

## Author

- Frontend Mentor - [Rohman](https://www.frontendmentor.io/profile/hade21)
- LinkedIn - [Muhammad Abdurrohman](https://www.linkedin.com/in/muhammad-a-589675141/)
