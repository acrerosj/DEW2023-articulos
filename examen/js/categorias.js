const divCategorias = document.getElementById('categorias');

async function loadCategories() {
  let response = await fetch('http://localhost:3000/api/categoria');
  let categories = await response.json();
  console.log(categories);
  categories.forEach((category) => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = category.id;
    checkbox.id = "category_" + category.id;
    checkbox.checked = true;
    divCategorias.append(checkbox);
    const label = document.createElement('label');
    label.textContent = category.nombre;
    //label.setAttribute("for","category_" + category.id);
    label.htmlFor = "category_" + category.id;
    divCategorias.append(label);
  });
}

function saveData() {
  let categoriesChecked = document.querySelectorAll('input[type="checkbox"]:checked');
  let ids = [...categoriesChecked].map(category => category.value);
  localStorage.categories = JSON.stringify(ids);
}

document.getElementById('actualizar').addEventListener('click', saveData);

loadCategories();