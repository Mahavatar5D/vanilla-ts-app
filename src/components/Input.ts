import Component from "./Component";

export default class Input extends Component {
    readonly element: HTMLInputElement;

    constructor(name: string, placeholder?: string) {
        super();
        this.element = document.createElement("input");
        this.element.setAttribute("type", "text");
        this.element.setAttribute("id", name);
        this.element.setAttribute("name", name);
        this.element.placeholder = placeholder == undefined ? "" : placeholder;
    }
}
