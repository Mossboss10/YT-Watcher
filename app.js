const container = document.querySelector("#holder");
const form = document.querySelector("#idform");
const id = document.querySelector("#id_input");

form.addEventListener("submit", e => {
  e.preventDefault();
  let id_num = id.value;
  container.innerHTML = "";
  container.innerHTML += `<iframe id="spc" src="https://www.youtube.com/embed/${id_num}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
});
