document.addEventListener("DOMContentLoaded", () =>{
  console.log("JavaScript Loaded");

  const form = document.querySelector("#new-item-form");
    console.log(form);
    const formSubmit = function(event){
        event.preventDefault();

        const form = event.target;

        const star = form.star.value;
        const sports = form.sports.value;

        const result = document.querySelector("#sports-stars");
        item = `${star}, ${sports}`;



        createSports(item, result);

        form.reset();

        // deleteSports();
      };

      form.addEventListener("submit", formSubmit);

      const createSports = function(content, container){
        const list = document.createElement('p');
        list.textContent = content;
        container.appendChild(list);
      };

    // form.addEventListener("submit", formSubmit)

      // const deleteSports = function(content, container){
      //   const deleteit = document.getElementById('p');
      //   deleteit.textContent = content;
      //   container.removeChild('p');
      // };




    });
