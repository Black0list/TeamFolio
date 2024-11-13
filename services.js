document.addEventListener('DOMContentLoaded', () => {
  fetch('services.json')
    .then(response => response.json())
    .then(data => {
      const servicesContainer = document.querySelector('.row.mt-60');
      data.services.forEach(service => {
        let serviceCard = `<div class="col-md-4 col-sm-12 col-12 mt-4">
            <div class="serv-section-2">
              <div class="serv-section-2-icon"><i class="fas fa-gem"></i></div>
              <div class="serv-section-desc">
                <h4>${service.name}</h4>
                <h5>${service.specialty}</h5>
                <p>${service.description}</p>
                <h3 class="text-dark">${service.price}</h3>
                <a href="#" class="card-link text-warning" data-toggle="modal" data-target="#myModal">View Details</a>
              </div>
              <div class="section-heading-line-left"></div>
            </div>
          </div>`;
        servicesContainer.innerHTML += serviceCard;
      });
    })
    .catch(error => console.error('Error loading services:', error));
});
