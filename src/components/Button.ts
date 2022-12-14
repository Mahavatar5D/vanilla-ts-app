import Component from "./Component";

export default class Button extends Component {
    readonly element: HTMLElement;

    constructor(text: string) {
        super();
        this.element = document.createElement("button");
        this.element.textContent = text;
        this.element.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.onClick();
        });
    }

    public onClick: () => void = () => {
        throw new Error(
            "The click handler has not been defined in a Button component."
        );
    };
}
