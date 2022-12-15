import Button from "./components/Button";
import Input from "./components/Input";
import Label from "./components/Label";

const appElement = document.querySelector<HTMLDivElement>("#app");

const button = new Button("My Button");
button.onClick = () => {
    alert("My Button was clicked !");
};

const input = new Input("nome", "Digite seu nome");
const label = new Label("Nome: ", input.element.getAttribute("name")!);

appElement!.textContent = "My Application";
button.render(appElement!);
label.render(appElement!);
input.render(appElement!);
