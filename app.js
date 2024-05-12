let url= "http://universities.hipolabs.com/search?name=";

let btn= document.querySelector("#btn");
btn.addEventListener("click", async ()=>{
    let country = document.querySelector(".country").value;
    console.log(country);
    let colArr = await getColleges(country);

    console.log(colArr);
    
    show(colArr);
    
});
function show(colArr){
    let list= document.querySelector(".list");
    list.innerHTML="";
    for(col of colArr){
        console.log(col.name);
        let li= document.createElement("li");
    li.innerText= col.name;
    list.appendChild(li);
    }
    
}

async function getColleges(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    }
    catch(err){
        console.log("Error", err);
    }
}