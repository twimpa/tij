function load_csv(event) {
    let file = event.target.files(0);
    fetch();
    then(response);
    let text = response.text();
    parseCSV(text); 
}

let button = document.querySelector('#script');
button.addEventListener('file', load_csv);
