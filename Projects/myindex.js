

fetch('data.json')
.then(response => response.json())
.then(function(data) {  
displayportfolio(data.team)
    })
    
fetch('data.json')
.then(response => response.json())
.then(function(data) {  
    displaypersonalportfolio(data.team)
})

function displayportfolio(data){
    console.log(data.length)


    for(let ele of data){
        document.getElementById("allinfo").innerHTML +=`<div class="col-lg-3 col-md-4 wow fadeInUp" data-wow-delay="0.1s">
            <div class="team-item position-relative rounded overflow-hidden">
                <div class="overflow-hidden">
                    <img  onclick="showportfolio(${ele.id})" class="img-fluid w-100" src="${ele.image}" alt="">
                </div>
                <div class="team-text bg-light text-center p-4">
                    <h5>${ele.name}</h5>
                    <p class="text-primary">${ele.role}</p>
                </div>
            </div>
        </div>` 
    }
}
    fetch("data.json")
    .then(response => response.json())
    .then(data => clientreviews(data.team))
    var mypersonneindex = localStorage.getItem("myValue");
let counter = 0 ; 

function clientreviews(mydata){
    let myname ;
    for(let ele of mydata){
        
        if(ele.id == mypersonneindex){
            ele.reviews.forEach(element => {
                
                let review = `<div class="d-flex align-items-start mb-4">
              <img alt="" class="img-fluid rounded-circle me-3" height="96" src="https://freefrontend.dev/assets/square-small.png" width="96">
              <div class="bg-light p-3 p-md-4 w-100">
                <div class="text-primary mb-1 " >
                  <svg class="bi bi-quote" fill="currentColor" height="32" viewbox="0 0 16 16" width="32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path></svg>
                </div>
                <p class="lead">${element.feedback}</p>
                <div class="text-end pt-2">
                  <h5 class="fw-bold">${element.client}</h5>
                  <div class="text-muted">
                  RATING : ${element.rating}
                  </div>
                </div>
              </div>
            </div>`
            counter++
          document.getElementById("review").innerHTML += review
            });
            console.log(counter)
            document.getElementById("counterrevious").innerText = counter
            
           

}
}
    
}
var mypersonneindex = localStorage.getItem("myValue");
function displaypersonalportfolio(portfliodata){
    let carteportfolio = document.getElementById("mtyportfolio")
    console.log("kamasas");
    for(let ele of portfliodata){
        if(ele.id == mypersonneindex){
            let contentport = `<div class="part2">
            <h1>${ele.name}</h1> 
            <h2>I'M ${ele.role}</h2>
            
            <p>${ele.bio}</p>
            </div>
           <div class="part1">
            <img src="${ele.image}" alt="">
            </div> `
            carteportfolio.innerHTML += contentport

        }

        }
    }
function showportfolio(index){
    localStorage.setItem("myValue",index)
    window.location.href = "portfolio.html"
}
console.log(document.getElementById("rating-client").value)
let myidid  = 1
counter = 0 
function addreview(){
    if(parseFloat(document.getElementById("rating-client").value) <= 5 && document.getElementById("rating-client").value > 0   ){
        if(document.getElementById("message-client").value != ""){
          if(document.getElementById("client-name").value!== ""){


        let reviewmessage = document.getElementById("review")
        let reviewcontent = `<div class="d-flex align-items-start mb-4">
                  <img alt=""  class="img-fluid rounded-circle me-3" height="96" src="https://freefrontend.dev/assets/square-small.png" width="96">
                  <div class="bg-light p-3 p-md-4 w-100">
                    <div class="text-primary mb-1 " >
                      <svg class="bi bi-quote" fill="currentColor" height="32" viewbox="0 0 16 16" width="32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path></svg>
                    </div>
                    <p id="parareview${myidid}" class="lead">${document.getElementById("message-client").value}</p>
                    <div class="text-end pt-2">
                      <h5 id="clientname${myidid}" class="fw-bold">${document.getElementById("client-name").value}</h5>
                      <div  class="text-muted">
                      RATING :  <span id="rating${myidid}" >${document.getElementById("rating-client").value} </span>
                      </div>
                       </div>
                       <div class="icons" >
                       <img onclick="modificationreviews(${myidid})"  src="/img/icons/icons8-modify-50.png">
                       <img onclick="removereview(this)" src="/img/icons/icons8-remove-48.png" alt="">

                    </div>
                 
                  </div>
                  
                  </div>`
                document.getElementById("review").insertAdjacentHTML("beforeend",reviewcontent)
                myidid++
                counter++
            document.getElementById("counterrevious").innerText = counter
            document.getElementById("rating-client").value = ""
            document.getElementById("client-name").value = ""
            document.getElementById("message-client").value = ""
    }
}

}

}
// modification de reviews \
var keyreview = 0 ;
let modal = document.getElementById("modal1")
function modificationreviews(id){
    keyreview = id 
   

        document.getElementById("modal1").style.display = "block"
}
function modify(){
    console.log(keyreview)


    document.getElementById("modal1").style.display = "none"
  
    if (document.getElementById("message-client1").value !==  ""){
        document.getElementById("parareview"+keyreview).innerHTML = document.getElementById("message-client1").value 
    }
    if (document.getElementById("client-name1").value !==  ""){
    document.getElementById("clientname"+keyreview).innerHTML = document.getElementById("client-name1").value 
    }
    if (document.getElementById("rating-client1").value !==  ""){
        document.getElementById("rating"+keyreview).innerHTML = document.getElementById("rating-client1").value
    }
    document.getElementById("message-client1").value  = ""
    document.getElementById("rating-client1").value = ""
    document.getElementById("client-name1").value = ""
}


// remove review 
function removereview(ele){
    let parent1 = ele.parentNode.parentNode.parentNode.parentNode
    parent1.removeChild(ele.parentNode.parentNode.parentNode);
    console.log("kamal")
    counter--;
    document.getElementById("counterrevious").innerText = counter
}

function closemodal(){
    modal.style.display = "none"
}








