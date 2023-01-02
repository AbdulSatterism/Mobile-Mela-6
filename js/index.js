// spinner
const spinnerLoad = (spinner) => {
    document.getElementById('spinner').style.display = spinner;
}
// load data hide whene search another phone
const hidePreviousData = (card) => {
    document.getElementById('data-hide').style.display = card;
}
// search mobile
const searchMobile = () => {
    const searctText = document.getElementById('search-field').value;

    // clear input field
    document.getElementById('search-field').value = '';
    // spinner
    spinnerLoad('block');
    // hide
    hidePreviousData('none');
    // load data 
    const url = `https://openapi.programming-hero.com/api/phones?search=${searctText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMobile(data.data.slice(0, 20)))
}

// display mobile
const displayMobile = (mobiles) => {
    const mobileCards = document.getElementById('cards');
    mobileCards.textContent = '';

    mobiles.forEach(mobile => {
        // console.log(mobile.phone_name)
        // console.log(mobile.image)
        const div = document.createElement('div');
        div.classList.add('row');
        div.innerHTML = `
        <div class="col">
        <div class="card">
            <img src="${mobile.image}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${mobile.phone_name}</h5>
                <p class="card-text">${mobile.brand}</p>
                <button class="button">details</button>
            </div>
        </div>
      </div>
        `;
        mobileCards.appendChild(div);
        spinnerLoad('none');
        hidePreviousData('block');

    });
    // console.log(mobiles)
}