console.log('File is loaded');

fetch('https:\/\/cdn.tasteatlas.com')
    .then(data => data.json())
    .then(jsonData => doSomethingS(jsonData))

function Myfunction(data){
    console.log(data);
}