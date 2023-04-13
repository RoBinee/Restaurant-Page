export function createElement(type, className, text) {
  const newElement = document.createElement(type);

  if (className || text) {
    //if there is a need to set class or text
    if (className) newElement.classList.add(className);
    if (text) newElement.textContent = text;
  }

  return newElement;
}
