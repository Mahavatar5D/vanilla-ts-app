import Component from "./Component";

export default class Input extends Component {
    readonly element: HTMLElement;

    constructor(name: string) {
        super();
        this.element = document.createElement("input");
        this.element.setAttribute("type", "text");
        this.element.setAttribute("id", name);
        this.element.setAttribute("name", name);
    }
}
