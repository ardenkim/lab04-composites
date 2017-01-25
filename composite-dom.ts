interface IDomElement {
  print();
}

class DomElement implements IDomElement {
  private element: string;
  private text: string;

  constructor(element:string, text:string) {
    this.element = element;
    this.text = text;
  }
  print() {
    console.log('<' + this.element + '>');
    if (this.text) {
      console.log(this.text);
    }
    
    console.log('</' + this.element + '>');
  }
}

class TextNode implements IDomElement {
  private text:string;

  constructor(text:string) {
    this.text = text;
  }
  print() {
    console.log(this.text);
  }

}