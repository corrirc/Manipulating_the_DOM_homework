document.addEventListener("DOMContentLoaded", () =>{
  console.log("JavaScript Loaded");

  const form = document.querySelector("#new-item-form");
    console.log(form);
    const formSubmit = function(event){
        event.preventDefault();

        const form = event.target;

        const star = form.star.value;

        const result = document.querySelector("#sports-stars");
        item = `${star}`;

        createSports(item, result);
        form.reset();
      };

      form.addEventListener("submit", formSubmit);

      const createSports = function(content, container){
        const stuff = document.createElement('p');
        stuff.textContent = content;
        container.appendChild(stuff);
      };

    });
