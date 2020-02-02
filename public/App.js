let name = "Tanmay Deshpande";
let description = "My name is Tanmay Deshpande. I am a graduate student at San Diego State University pursuing my masters in Computer Science. I have 5 years of experience in developing web based apps on the cloud based Salesforce.com platform. I have done 5 certifications.";
let gitHubRepo = "https://www.github.com/jackTylerDurden";
let photoUrl = "photo.jpg";
const element = React.createElement("div", {
  id: "parentDiv"
}, React.createElement("h1", {
  id: "name"
}, name), React.createElement("div", {
  id: "photoDiv"
}, React.createElement("img", {
  id: "photo",
  src: photoUrl
})), React.createElement("div", {
  id: "descDiv"
}, React.createElement("p", null, description)), React.createElement("div", {
  id: "buttonDiv"
}, React.createElement("a", {
  className: "button",
  target: "_blank",
  href: gitHubRepo
}, "View My Github Repo")));
ReactDOM.render(element, document.getElementById("content"));