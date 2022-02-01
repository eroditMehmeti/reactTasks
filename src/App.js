import "./App.css";
import Item from "./components/Item";
import "./list.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ThumbNail from "./components/thumbnails";

// import icons from "homeIcon";

function App() {
  const names = [
    {
      image: "comImg",
      title: "The TLD",
      paragraph:
        "Does the domain extension math the language of the domain name?",
    },
    {
      image: "rulerImg",
      title: "Domain Length",
      paragraph: "Is the domain short enough to remember?",
    },
    {
      image: "languageImg",
      title: "Language",
      paragraph: "How complex is the actuall domain name?",
    },
    {
      image: "recognitionImg",
      title: "International recognition",
      paragraph: "Can the domain name be used on an international?",
    },
    {
      image: "searchImg",
      title: "Search engine",
      paragraph: "Does the domain follow search engiune guidelines",
    },
    {
      image: "speakerImg",
      title: "Advertising Potential ",
      paragraph: "Could the domain be used for Advertising campaigns?",
    },
    {
      image: "salesImg",
      title: "Sales Opporutinites",
      paragraph: "Can the domain name be used on an internationa scale?",
    },
    {
      image: "tImg",
      title: "Typo Suscepitibility",
      paragraph: "How high is the risk of mistyping the domain name?",
    },
    {
      image: "lightImg",
      title: "Bussines potential",
      paragraph: "Can the domain name be used on an company address?",
    },
  ];

  const thumbnails = [
    {
      date: "14/05/2018",
      version: "3.3.0",
      img: "searchImg",
      btnName: "New",
      btnColor: "#58FB00",
      fullName: "Kevin Joe",
      description:
        "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvments Share permission re-design and optimization",
    },
    {
      date: "14/05/2018",
      version: "3.3.0",
      btnName: "New",
      btnColor: "#001BFB",
      img: "searchImg",
      fullName: "Kevin Joe",
      description: "File system changed from Dokan to CBFS Host Cloud Drive...",
    },
    {
      date: "14/05/2018",
      version: "3.3.0",
      btnName: "New",
      img: "searchImg",
      btnColor: "#BE00FB",
      fullName: "Kevin Joe",
      description: "File system changed from Dokan to CBFS Host Cloud Drive...",
    },
    {
      date: "14/05/2018",
      version: "3.3.0",
      btnName: "New",
      btnColor: "#58FB00",
      img: "searchImg",
      fullName: "Kevin Joe",
      description: "File system changed from Dokan to CBFS Host Cloud Drive...",
    },
    {
      date: "14/05/2018",
      version: "3.3.0",
      btnName: "New",
      btnColor: "#001BFB",
      img: "searchImg",
      fullName: "Kevin Joe",
      description: "File system changed from Dokan to CBFS Host Cloud Drive...",
    },
    {
      date: "14/05/2018",
      version: "3.3.0",
      img: "searchImg",
      btnName: "New",
      btnColor: "#BE00FB",
      fullName: "Kevin Joe",
      description: "File system changed from Dokan to CBFS Host Cloud Drive...",
    },
    {
      date: "14/05/2018",
      version: "3.3.0",
      img: "searchImg",
      btnColor: "#58FB00",
      btnName: "New",
      fullName: "Kevin Joe",
      description: "File system changed from Dokan to CBFS Host Cloud Drive...",
    },
    {
      date: "14/05/2018",
      version: "3.3.0",
      btnName: "New",
      btnColor: "#001BFB",
      img: "searchImg",
      fullName: "Kevin Joe",
      description: "File system changed from Dokan to CBFS Host Cloud Drive...",
    },
    {
      date: "14/05/2018",
      version: "3.3.0",
      img: "searchImg",
      btnColor: "#BE00FB",
      btnName: "New",
      fullName: "Kevin Joe",
      description: "File system changed from Dokan to CBFS Host Cloud Drive...",
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="d-flex flex-wrap align-items-center justify-content-between text-center min-vh-100  text-sm-start">
            {names.map((name) => (
              <Item
                image={name.image}
                title={name.title}
                paragraph={name.paragraph}
              />
            ))}
          </div>
        </div>
        <div className="row">
          {thumbnails.map((element) => (
            <ThumbNail obj={element} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
