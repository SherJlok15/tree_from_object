var data = {
  "Рыбы": {
    "Форель": {},
    "Щука": {}
  },

  "Деревья": {
    "Хвойные": {
      "Лиственница": {},
      "Ель": {}
    },
    "Цветковые": {
      "Берёза": {},
      "Тополь": {}
    }
  }
};

function createText (object) {
  let innerContent = '';
  let content_Wrapper = '';
  for (let key in object) {
    innerContent += `<li>${key}${createText(object[key])}</li>`;
    content_Wrapper = `<ul>${innerContent}</ul>`;
  }
  return content_Wrapper;
};

function createTree(element, object) {
  element.innerHTML = createText(object);
};

createTree(document.querySelector(".container"), data)
