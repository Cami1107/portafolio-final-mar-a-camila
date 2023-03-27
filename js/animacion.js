const scrollToElement = ()=>{
  const element = document.getElementById("sobre-mi");
  element.scrollIntoView();

  const enlace = document.querySelector("img[src='img/grafica-quien-soy.png']");

  enlace.classList.add('mostrar');

}

console.log("hola camila");