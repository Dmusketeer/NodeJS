// let http= require('http');
// var server=http.createServer((req,res)=>{
//     res.writeHead('this is response for a request.');
//     res.end();
// });
// server.listen(3000);


async function fetchData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data= await res.json();
    for (let index = 0; index <10; index++) {
        var node=document.createElement("li");
        node.innerHTML=data[index].title;
        document.body.appendChild(node);        
    }
}
fetchData();
