const details = document.getElementById("details");
const showDetails = () => {
  fetch("services.json").then((response) => {
    response.json().then((data) => {
      details.innerHTML = ``;
    });
  });
};

showDetails();