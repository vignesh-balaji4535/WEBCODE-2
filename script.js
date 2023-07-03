function renderBookCard(_d=[]){
  let newArray=[];
const con=
document.getElementById("tbody");
if(_d.length>0){
  _d.forEach((data,ind)=>{
const tabel=`<tr>
    <th scope="row">${ind+1}</th>
    <td>${data.name}</td>
    <td>${data.isbn}</td>
    <td>${data.numberOfPages}</td>
    <td>${data.authors}</td>
    <td>${data.publisher}</td>
    <td>${data.released}</td>
    <td>
    <ul>
    <li>${data.characters[0]}</li>
    <li>${data.characters[1]}</li>
    <li>${data.characters[2]}</li>
    <li>${data.characters[3]}</li>
    <li>${data.characters[4]}</li>
    </ul>
    </td>
  </tr>`;

newArray.push(tabel)
con.innerHTML=newArray

});
}
}




function printdata(response){
console.log(response)

  renderBookCard(response)

  
}

const url="https://www.anapioficeandfire.com/api/books";

async function getFireAndIceData(url,callback){
   
  try{   let respo=await fetch(url);
         let result=await respo.json();
         callback(result);
 }

  catch{(err)=>console.log(err);}
}



getFireAndIceData(url,printdata)