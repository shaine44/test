"use stritc";


class Options {
  constructor(height, width, backgroundColor, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.backgroundColor = backgroundColor;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }
  makeDiv() {
    let newDiv = document.createElement("div");
    document.body.appendChild(newDiv);
    newDiv.textContent = prompt("something");
    newDiv.style.cssText = `height: ${this.height};
            width: ${this.width}; 
            background-color: ${this.backgroundColor}; 
            font-size: ${this.fontSize}; 
            text-align: ${this.textAlign}`;
  }


}

let a = new Options(500, 342, "yellow", 44, "center");

console.log(a.makeDiv());
