const loadcountries=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displaycountries(data))
}
const displaycountries = countries=>{
    console.log(countries[0]);
    const allcountriesHTML=countries.map(country=>getcountryHTML(country));
    //console.log(allcountriesHTML[0]);
    const container=document.getElementById('countries');
    container.innerHTML=allcountriesHTML.join(' ');
}
const getcountryHTML=country=>{
    return `
<div class="country">
<h2> ${ country.name.common}</h2>
<img src="${country.flags.png}">
</div>

    `
}
loadcountries();