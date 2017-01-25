var DomElement = (function () {
    function DomElement(element, text) {
        this.element = element;
        this.text = text;
    }
    DomElement.prototype.print = function () {
        console.log('<' + this.element + '>');
        if (this.text) {
            console.log(this.text);
        }
        console.log('</' + this.element + '>');
    };
    return DomElement;
}());
var TextNode = (function () {
    function TextNode(text) {
        this.text = text;
    }
    TextNode.prototype.print = function () {
        console.log(this.text);
    };
    return TextNode;
}());
