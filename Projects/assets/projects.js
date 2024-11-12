fetch('./assets/projects.json').then( response => {
    return response.json();
 }).then( obj => {
    obj.projects.forEach( (element, index) => {
        const details = document.getElementById("projects_main");
        index++;
        details.innerHTML += `
    <div class="card" style="width: 20rem">
      <img src="./assets/icons/profile 1.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
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
                      <code>Title</code>
                      <div class="projects_main_content" id="projects_main_details_title">${element.title}</div>
                      <code>Technologies</code>
                      <div class="projects_main_content" id="projects_main_details_techs"></div>
                      <code>Description</code>
                      <div class="projects_main_content" id="projects_main_details_description"></div>
                      <code>Domain</code>
                      <div class="projects_main_content" id="projects_main_details_domain"></div>
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
});
 })


function getProject(index){
    fetch('./assets/projects.json').then( response => {
       return response.json();
    }).then( prj => {
            const details = document.getElementById("projects_main_details");
            details.innerHTML = `                      <code>Title</code>
                      <div class="projects_main_content" id="projects_main_details_title">${prj.projects[index-1].title}</div>
                      <code>Technologies</code>
                      <div class="projects_main_content" id="projects_main_details_techs"></div>
                      <code>Description</code>
                      <div class="projects_main_content" id="projects_main_details_description">${prj.projects[index-1].details}</div>
                      <code>Domain</code>
                      <div class="projects_main_content" id="projects_main_details_domain">${prj.projects[index-1].category}</div>`

                      const techs  = document.getElementById("projects_main_details_techs");
                      prj.projects[index-1].technologies.forEach(element => {
                          const img = document.createElement("img");
                          techs.style.display = "flex"
                          techs.style.justifyContent = "space-around"
                          img.src = element;
                          img.style.width = "32px"
                          techs.appendChild(img)
                      })
                     

    }).catch( error => {
        console.log(error);
    })
}