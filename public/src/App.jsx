let name = "Tanmay Deshpande";
let description = "My name is Tanmay Deshpande. I am a graduate student at San Diego State University pursuing my masters in Computer Science. I have 5 years of experience in developing web based apps on the cloud based Salesforce.com platform. I have done 5 certifications.";
let gitHubRepo = "https://www.github.com/jackTylerDurden";
let photoUrl = "photo.jpg";

const element = (
    <div id="parentDiv">
        <h1>{name}</h1>
        <img id="photo" src={photoUrl}></img>
        <p>{description}</p>
        <a class="button" target="_blank" href={gitHubRepo}>View My Github Repo</a>
    </div>
);

ReactDOM.render(element,document.getElementById("content"));