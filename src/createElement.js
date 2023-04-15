export function createElement(type, className, text, id) {
  const newElement = document.createElement(type);

  if (className || text) {
    //if there is a need to set class or text
    if (className) newElement.classList.add(className);
    if (text) newElement.textContent = text;
    if (id) newElement.id = id;
  }

  return newElement;
}
