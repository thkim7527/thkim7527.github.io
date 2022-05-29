const h2 = document.querySelector("h2");
const date = new Date(2007, 4, 27);
h2.innerText = Intl.DateTimeFormat().format(date);