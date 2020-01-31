let name = "Tanmay Deshpande";
let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
let gitHubRepo = "https://www.github.com/jackTylerDurden";
let photoUrl = "photo.jpg";
const element = React.createElement("div", {
  id: "parentDiv"
}, React.createElement("h1", null, name), React.createElement("img", {
  id: "photo",
  src: photoUrl
}), React.createElement("p", null, description), React.createElement("a", {
  class: "button",
  target: "_blank",
  href: gitHubRepo
}, "View My Github Repo"));
ReactDOM.render(element, document.getElementById("content"));