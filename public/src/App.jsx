let name = "Tanmay Deshpande";
let description = "My name is Tanmay Deshpande. I am a graduate student at San Diego State University pursuing my masters in Computer Science. I have 5 years of experience in developing web based apps on the cloud based Salesforce.com platform. I have done 5 certifications.";
let gitHubRepo = "https://www.github.com/jackTylerDurden";
let photoUrl = "photo.jpg";

const element = (
    <div id="parentDiv">
        <h1 id="name">{name}</h1>
        <div id="photoDiv">
            <img id="photo" src={photoUrl}></img>
        </div>
        <div id="descDiv">
            <p>{description}</p>
        </div>
        <div id="buttonDiv">
            <a className="button" target="_blank" href={gitHubRepo}>View My Github Repo</a>
        </div>
    </div>
);

ReactDOM.render(element,document.getElementById("content"));