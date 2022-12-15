import Component from "./Component";

export default class Label extends Component {
    readonly element: HTMLElement;

    constructor(text: string, labelFor: string) {
        super();
        this.element = document.createElement("label");
        this.element.setAttribute("for", labelFor);
        this.element.innerText = text;
    }
}
