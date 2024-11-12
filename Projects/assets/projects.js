const details = document.getElementById("projects_main");

const titleInput = document.getElementById("titleInput");
const descriptionInput = document.getElementById("descriptionInput");
const validationTextarea = document.getElementById("validationTextarea");
const categoryInput = document.getElementById("categoryInput");
const techInput = document.getElementById("ms1");
let arr = [];




fetch('./assets/projects.json').then( response => {
    return response.json();
 }).then( obj => {
    arr = JSON.parse(localStorage.getItem('item'))
    if(arr == null) arr = obj.projects;
    prjNbr = obj.projects.length;

    arr = obj.projects
    localStorage.clear();

    arr.forEach( (element, index) => {
        index++;
        details.innerHTML += `
    <div class="card" style="width: 20rem">
      <img src="./assets/icons/project.jpg" style="width: 100%; height: 100%; border-top-left-radius: 10px; border-top-right-radius: 10px;" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.description}</p>
        <a href="#" class="btn btn-warning" onclick="getProject(${index})" data-bs-toggle="modal" data-bs-target="#DetailsModal">View Details</a>
            <div class="modal fade" id="DetailsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Project's Details</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div id="projects_main_details">

                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
        <a href="#" class="btn btn-warning" onclick="editProject(${prjNbr})" data-id="1" data-bs-toggle="modal" data-bs-target="#exampleModal1">Edit</a>
      </div>
    </div>`
});
 })


function getProject(index){
    index--;
    const details = document.getElementById("projects_main_details");
            details.innerHTML = `                      <code>Title</code>
                      <div class="projects_main_content" id="projects_main_details_title">${arr[index].title}</div>
                      <code>Technologies</code>
                      <div class="projects_main_content" id="projects_main_details_techs"></div>
                      <code>Description</code>
                      <div class="projects_main_content" id="projects_main_details_description">${arr[index].details}</div>
                      <code>Domain</code>
                      <div class="projects_main_content" id="projects_main_details_domain">${arr[index].category}</div>
                      <code>Reviews</code>
                      <div class="projects_main_content" id="projects_main_details_reviews">

                      </div>
                      `

                      const techs  = document.getElementById("projects_main_details_techs");
                      arr[index].technologies.forEach(element => {
                          const img = document.createElement("img");
                          techs.style.display = "flex"
                          techs.style.justifyContent = "space-around"
                          img.src = element;
                          img.style.width = "32px"
                          techs.appendChild(img)
                      })

                      const reviews  = document.getElementById("projects_main_details_reviews");
                      arr[index].reviews.forEach(element => {
                          const img = document.createElement("img")
                          reviews.style.justifyContent = "space-around"
                          img.src = "./assets/icons/user_img.png";
                          img.style.width = "60px"
                          img.style.height = "60px"
                          reviews.appendChild(img)

                          reviews.innerHTML += `
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">${element.client}</h5>
                              <p class="card-text">${element.feedback}</p>
                              <p class="card-text"><small class="text-body-secondary" style="color: white !important;">${element.rating}</small></p>
                            </div>
                          </div>`
                      })
}

function addProject(){

  details.innerHTML += `
    <div class="card" style="width: 20rem">
      <img src="./assets/icons/project.jpg" style="width: 100%; border-top-left-radius: 10px; border-top-right-radius: 10px;" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${titleInput.value}</h5>
        <p class="card-text">${descriptionInput.value}</p>
        <a href="#" class="btn btn-warning" onclick="getProject(${++prjNbr})" data-bs-toggle="modal" data-bs-target="#DetailsModal">View Details</a>
            <div class="modal fade" id="DetailsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Project's Details</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div id="projects_main_details">

                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
        <a href="#" class="btn btn-warning" data-id="1" data-bs-toggle="modal" data-bs-target="#exampleModal1">Edit</a>
      </div>
    </div>`

  console.log(techInput.value)

  var selected = [];

  for(var option of techInput.options) {
    if(option.selected){
      selected.push(option.value)
    }
  }

  arr.push(
    {
      "id": prjNbr,
      "title": `${titleInput.value}`,
      "description": `${descriptionInput.value}`,
      "category": `${categoryInput.value}`,
      "teamMember": [1, 2],
      "technologies": selected,
      "details": `${validationTextarea.value}`,
      "reviews": []
    }
  )

  console.log(JSON.parse(localStorage.getItem('item')));
}


function editProject(index){


  var selected = [];

  for(var option of techInput.options) {
    if(option.selected){
      selected.push(option.value)
    }
  }
  
  arr.splice(index, 0, 
  
    {
    "id": prjNbr,
    "title": `${titleInput.value}`,
    "description": `${descriptionInput.value}`,
    "category": `${categoryInput.value}`,
    "teamMember": [1, 2],
    "technologies": selected,
    "details": `${validationTextarea.value}`,
    "reviews": []
  }
  )
}

localStorage.setItem("item", JSON.stringify(arr));