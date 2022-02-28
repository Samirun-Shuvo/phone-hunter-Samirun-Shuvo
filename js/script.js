
const phoneSearch = async () => {
    const serchField = document.getElementById('search-field');
    serchText = serchField.value;
    serchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${serchText}`
    // console.log(url);
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data.data);
    displaySearchResult(data.data);
}
const displaySearchResult = phones => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    phones?.forEach(phone => {
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card phn-img">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <h5 class="card-title">${phone.brand}</h5>
                    <a href="#" class="btn btn-primary">Explore Phone</a>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    });
}
