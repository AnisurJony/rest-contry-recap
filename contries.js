const loadContries = () => {
fetch("https://restcountries.com/v3.1/all")
.then(res=>res.json())
.then(data =>displaysContries(data))
}

const displaysContries = contries=>{
console.log(contries[0]);
const allContriesHTML= contries.map(contry=>getContrieHTML(contry))
// console.log(allContriesHTML[0]);
const container= document.getElementById('contries');
container.innerHTML = allContriesHTML.join(' ');
}

const getContrieHTML = contry => {
    return`
    <div class="contry">
    <h2>${contry.name.common}</h2>
    <img src="${contry.flags.png}">
    </div>
    `
}

loadContries();