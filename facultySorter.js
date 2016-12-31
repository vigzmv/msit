["#robotics", "#quizzes"]
    .forEach(item => { document.querySelector(`${item} > div > table > tbody`)
    .innerHTML = Array.from(document.querySelectorAll(`${item} > div > table > tbody > tr`))
    .sort((a, b) => a.querySelector('strong').innerHTML.split(" ")[1] > b.querySelector('strong').innerHTML
    .split(" ")[1] ? 1 : -1).map(s => s.outerHTML).join(" ")
});
