async function getData() {
    let response = await fetch('https://crispy-bassoon-g4rjq67jv94xfv4p6-3000.app.github.dev/students');
    let data = await response.json();
    console.log(data);
}

getData();