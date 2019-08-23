import '../scss/index.scss';

fetch(`http://localhost:3000/add`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "cro"
    })
})
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
    })
