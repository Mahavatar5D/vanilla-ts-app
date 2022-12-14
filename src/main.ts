import Button from "./components/Button";

const appElement = document.querySelector<HTMLDivElement>("#app");

const button = new Button("My Button");
button.onClick = () => {
    alert("My Button was clicked !");
};

appElement!.textContent = "My Application";
button.render(appElement!);
