import "./App.css";
import Item from "./components/Item";
import "./list.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ThumbNail from "./components/thumbnails";
import Services from "./components/services";

import "react-tabs/style/react-tabs.css";
import { tab } from "@testing-library/user-event/dist/tab";
import { Tabs } from "react-tabs";

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
      img: "woman",
      btnName: "New",
      btnColor: "#58FB00",
      fullName: "Kevin Joe",
      description:
        "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvments Share permission re-design and optimization",
    },
    {
      date: "20/05/2015",
      version: "3.1.0",
      btnName: "New",
      btnColor: "#001BFB",
      img: "woman",
      fullName: "Kevin Joe",
      description:
        "Introducing Host Cloud Drive-virtual drive functionality New Share options and management New,more user friendly design Sync optimizations Various performance improvements and bug fixes",
    },
    {
      date: "20/05/2015",
      version: "3.1.0",
      btnName: "New",
      img: "woman",
      btnColor: "#BE00FB",
      fullName: "Kevin Joe",
      description:
        "Introducing Host Cloud Drive-virtual drive functionality New Share options and management New,more user friendly design Sync optimizations Various performance improvements and bug fixes",
    },
    {
      date: "14/05/2018",
      version: "3.3.0",
      btnName: "New",
      btnColor: "#58FB00",
      img: "woman",
      fullName: "Kevin Joe",
      description:
        "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvments Share permission re-design and optimization",
    },
    {
      date: "14/05/2018",
      version: "3.3.0",
      btnName: "New",
      btnColor: "#001BFB",
      img: "woman",
      fullName: "Kevin Joe",
      description:
        "Introducing Host Cloud Drive-virtual drive functionality New Share options and management New,more user friendly design Sync optimizations Various performance improvements and bug fixes",
    },
    {
      date: "14/05/2018",
      version: "3.3.0",
      img: "woman",
      btnName: "New",
      btnColor: "#BE00FB",
      fullName: "Kevin Joe",
      description:
        "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvments Share permission re-design and optimization",
    },
    {
      date: "14/05/2018",
      version: "3.3.0",
      img: "woman",
      btnColor: "#58FB00",
      btnName: "New",
      fullName: "Kevin Joe",
      description:
        "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvments Share permission re-design and optimization",
    },
    {
      date: "14/05/2018",
      version: "3.3.0",
      btnName: "New",
      btnColor: "#001BFB",
      img: "woman",
      fullName: "Kevin Joe",
      description:
        "Introducing Host Cloud Drive-virtual drive functionality New Share options and management New,more user friendly design Sync optimizations Various performance improvements and bug fixes",
    },
    {
      date: "14/05/2018",
      version: "3.3.0",
      img: "woman",
      btnColor: "#BE00FB",
      btnName: "New",
      fullName: "Kevin Joe",
      description:
        "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvments Share permission re-design and optimization",
    },
  ];

  const serviceCards = [
    {
      title: "Domains",
      text: "domains ",
      items: [
        {
          title: ".com",
          price: "6$",
          description: "whatever",
        },
      ],
    },
    {
      title: "Web Hosting",
      items: [
        {
          title: ".com",
          price: "5$",
          description: "whatever",
        },
      ],
    },
    {
      title: "Dedicated Servers",
      items: [
        {
          title: ".com",
          price: "7$",
          description: "whatever",
        },
      ],
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

        <div className="row">
          <div className="NavBar">
            <Services
              tabs={serviceCards.map((card) => card.title)}
              tabsContent={serviceCards.map((card) => card.items)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
