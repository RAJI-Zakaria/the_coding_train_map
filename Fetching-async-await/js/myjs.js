console.log("about to fetch a rainbow!!!!");
var url = "https://images.unsplash.com/photo-1639066648921-82d4500abf1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8";

fetchingImg();

async function fetchingImg(){
   try{
    var fetched_img = await fetch(url);
    var blob  = await fetched_img.blob();
    document.getElementById('img').src=URL.createObjectURL(blob);
   }catch(e){
       alert("oo ooh");
        console.log(e.message);
   }
}


// fetch(url).then(
// response=>{
//     console.log(response);
//     return response.blob();        
//     })
//     .then(blob=>{
//         console.log(blob);document.getElementById('img').src=URL.createObjectURL(blob);
//     });
    