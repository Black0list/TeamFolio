const details = document.getElementById("projects_main");

let titleInput = document.getElementById("titleInput");
const descriptionInput = document.getElementById("descriptionInput");
const validationTextarea = document.getElementById("validationTextarea");
const categoryInput = document.getElementById("categoryInput");
const techInput = document.getElementById("ms1");
let arr = [];

loadContent();

function loadContent() {
  fetch("./assets/projects.json")
    .then((response) => response.json())
    .then((obj) => {
      prjNbr = obj.projects.length;

      if (arr.length === 0) arr = obj.projects;

      if (arr.length === 0) {
        return (details.innerHTML = "There is no Data");
      }

      console.log(arr);

      displayProjects(arr);
    });
}

function displayProjects(projects) {
  details.innerHTML = '';
  projects.forEach((element, index) => {
    index++;
    details.innerHTML += `
      <div class="card" style="width: 20rem">
        <img src="${element.img || './assets/icons/project.jpg'}" 
             style="width: 100%; height: 100%; border-top-left-radius: 10px; border-top-right-radius: 10px;" 
             alt="..." />
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
                  <div id="projects_main_details"></div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          <a href="#" class="btn btn-warning" onclick="editProject(${index})" data-id="1" data-bs-toggle="modal" data-bs-target="#editModal">Edit</a>
          <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Edit</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div id="projects_main_edit"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  });
}


function getProject(index) {
  const details = document.getElementById("projects_main_details");
  index--;
  
  details.innerHTML = `
    <code>Title</code>
    <div class="projects_main_content" id="projects_main_details_title">${arr[index].title}</div>
    <code>Technologies</code>
    <div class="projects_main_content" id="projects_main_details_techs"></div>
    <code>Description</code>
    <div class="projects_main_content" id="projects_main_details_description">${arr[index].details}</div>
    <code>Domain</code>
    <div class="projects_main_content" id="projects_main_details_domain">${arr[index].category}</div>
    <code>Reviews</code>
    <div class="projects_main_content" id="projects_main_details_reviews"></div>`;

  const techs = document.getElementById("projects_main_details_techs");
  arr[index].technologies.forEach((element) => {
    const img = document.createElement("img");
    techs.style.display = "flex";
    techs.style.justifyContent = "space-around";
    img.src = element;
    img.style.width = "32px";
    techs.appendChild(img);
  });

  const reviews = document.getElementById("projects_main_details_reviews");
  arr[index].reviews.forEach((element) => {
    const img = document.createElement("img");
    reviews.style.justifyContent = "space-around";
    img.src = "./assets/icons/user_img.png";
    img.style.width = "60px";
    img.style.height = "60px";
    reviews.appendChild(img);

    reviews.innerHTML += `
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${element.client}</h5>
          <p class="card-text">${element.feedback}</p>
          <p class="card-text"><small class="text-body-secondary" style="color: white !important;">${element.rating}</small></p>
        </div>
      </div>`;
  });
}

function addProject() {
  details.innerHTML += `<div class="card" style="width: 20rem">
    <img src="./assets/icons/project.jpg" style="width: 100%; height: 100%; border-top-left-radius: 10px; border-top-right-radius: 10px;" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${titleInput.value}</h5>
      <p class="card-text">${descriptionInput.value}</p>
      <a href="#" class="btn btn-warning" onclick="getProject(${++prjNbr})" data-bs-toggle="modal" data-bs-target="#DetailsModal">View Details</a>
      <a href="#" class="btn btn-warning" onclick="editProject(${prjNbr})" data-id="1" data-bs-toggle="modal" data-bs-target="#editModal">Edit</a>
    </div>
  </div>`;

  var selected = [];
  for (var option of techInput.options) {
    if (option.selected) {
      selected.push(option.value);
    }
  }

  arr.push({
    id: prjNbr,
    title: `${titleInput.value}`,
    description: `${descriptionInput.value}`,
    category: `${categoryInput.value}`,
    technologies: selected,
    details: `${validationTextarea.value}`,
    reviews: [],
  });
  
}

function editProject(index) {
  --index;
  const project = arr[index];
  const edit = document.getElementById("projects_main_edit");

  edit.innerHTML = `
    <form class="was-validated">
      <div class="mb-3">
        <label for="titleInput${index}" class="form-label">Title</label>
        <input type="text" class="form-control" id="titleInput${index}" value="${project.title}" required>
      </div>
      <div class="mb-3">
        <label for="descriptionInput${index}" class="form-label">Description</label>
        <input type="text" class="form-control" id="descriptionInput${index}" value="${project.description}" required>
      </div>
      <div class="mb-3">
        <label for="validationTextarea${index}" class="form-label">Details</label>
        <textarea class="form-control" id="validationTextarea${index}" required>${project.details}</textarea>
      </div>
      <div class="mb-3">
        <label for="categoryInput${index}" class="form-label">Category</label>
        <select class="form-select" id="categoryInput${index}" required>
          <option value="E-commerce" ${project.category === "E-commerce" ? "selected" : ""}>E-commerce</option>
          <option value="Développement Web" ${project.category === "Développement Web" ? "selected" : ""}>Développement Web</option>
          <option value="Développement d'Application" ${project.category === "Développement d'Application" ? "selected" : ""}>Développement d'Application</option>
        </select>
      </div>
      <div class="mb-3">
        <button type="button" data-bs-toggle="modal" onclick="saveEdit(${index})" class="btn btn-warning">Save</button>
      </div>
    </form>`;
}

function saveEdit(index) {
  const updatedProject = {
    id: arr[index].id,
    title: document.getElementById(`titleInput${index}`).value,
    description: document.getElementById(`descriptionInput${index}`).value,
    category: document.getElementById(`categoryInput${index}`).value,
    technologies: document.getElementById(`ms1`).selectedOptions,
    details: document.getElementById(`validationTextarea${index}`).value,
    reviews: arr[index].reviews,
  };

  arr[index] = updatedProject;
  displayProjects(arr);
}

function sortProjects() {
  const sortBy = parseInt(document.getElementById("sort").value);
  details.innerHTML = "";

  array = []

  switch (sortBy) {
    case 0:
      loadContent();
      break;
    case 1:
      array = arr.filter(item => item.reviews.length >= 2);
      break;
    case 2:
      array = arr.filter(item => item.category === "Développement d'Application");
      break;
    case 3:
      array = arr.filter(item => item.category === "Développement Web");
      break;
    case 4:
      array = arr.filter(item => item.category === "E-commerce");
      break;
    default:
      loadContent();
      break;
  }
  displayProjects(array);
}
