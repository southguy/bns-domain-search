document.getElementById('search').addEventListener('click',getData);


async function getData() {
  const ye = document.getElementById("mySelect").value;
  const name = document.getElementById("bruh").value +'.'+ye ;
  
    
const url = `https://stacks-node-api.mainnet.stacks.co/v1/names/${name}`;
 const response = await fetch(url);
 if (!response.ok) {
    const message = alert(`Its available get it now `);
    throw new Error(message);
  }
  const data = await response.json();
  console.log(data);
  
  document.getElementById('status').innerHTML=data.status;
  document.getElementById('address').innerHTML=data.address;
  document.getElementById('expire_block').innerHTML=data.expire_block;
  
 
 }





 

