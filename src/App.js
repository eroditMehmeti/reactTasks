import "./App.css";
import Item from "./components/Item";
import "./list.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import ThumbNail from "./components/thumbnails";
import Services from "./components/services";
import Modal from "./components/Modal";
import { useState } from "react";
import helper from "./helper/helper";
import "react-tabs/style/react-tabs.css";
import { tab } from "@testing-library/user-event/dist/tab";
import { Tabs } from "react-tabs";

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
      id: "nav-domain",
      ariaLabelledby: "nav-domain-tab",
      class: "tab-pane fade show active",
      title: "Domains",
      items: [
        {
          title: ".Com",
          price: "$5.99/yr",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".AL",
          price: "$55.99/yr",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".NET",
          price: "$7.99/yr",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".HEALTH",
          price: "$8.99/yr",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".Com",
          price: "$5.99/yr",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".AL",
          price: "$55.99/yr",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".Com",
          price: "$5.99/yr",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".AL",
          price: "$55.99/yr",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
      ],
    },
    {
      id: "nav-webHosting",
      ariaLabelledby: "nav-webHosting-tab",
      title: "Web Hosting",
      class: "tab-pane fade",
      items: [
        {
          title: ".com",
          price: "5$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "5$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "5$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "5$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "5$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "5$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "5$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "5$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
      ],
    },
    {
      id: "nav-dedicatedServers",
      ariaLabelledby: "nav-dedicatedServers-tab",
      class: "tab-pane fade",
      title: "Dedicated Servers",
      items: [
        {
          title: "Dedicated Servers",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: "Dedicated Servers",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: "Dedicated Servers",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: "Dedicated Servers",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: "Dedicated Servers",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: "Dedicated Servers",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: "Dedicated Servers",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: "Dedicated Servers",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
      ],
    },
    {
      id: "nav-virtualCloudServer",
      ariaLabelledby: "nav-virtualCloudServer-tab",
      title: "Virtual Cloud Servers",
      class: "tab-pane fade",
      items: [
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
      ],
    },
    {
      id: "nav-wordPressHosting",
      ariaLabelledby: "nav-wordPressHosting-tab",
      title: "WordPress Hosting",
      class: "tab-pane fade",
      items: [
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
      ],
    },
    {
      id: "nav-emailHosting",
      ariaLabelledby: "nav-emailHosting-tab",
      title: "Email Hosting",
      class: "tab-pane fade",
      items: [
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
      ],
    },
    {
      id: "nav-vpsHostingServer",
      ariaLabelledby: "nav-vpsHostingServer-tab",
      title: "VPS Hosting Servers",
      class: "tab-pane fade",
      items: [
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".com",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
      ],
    },
    {
      id: "nav-freeHostings",
      ariaLabelledby: "nav-freeHostings-tab",
      title: "Free Hosting",
      class: "tab-pane fade",
      items: [
        {
          title: ".HEALTH",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".HEALTH",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".HEALTH",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".HEALTH",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".HEALTH",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".HEALTH",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".HEALTH",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
        {
          title: ".HEALTH",
          price: "7$",
          description: "instead of$10.99/yr",
          button: "Buy Now",
        },
      ],
    },
  ];

  const [show, setShow] = useState(false);
  const [OpenModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <button
        className="openModalBtn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        show popup
      </button>
      {OpenModal && <Modal closeModal={setOpenModal} />}
      <div
        className="container"
        style={{ backgroundColor: "rgb(245, 247, 248)" }}
      >
        {/* <div className="row">
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

        <br />
        <h2>Task-2.0</h2>
        <br />

        <div className="row" style={{ backgroundColor: "rgb(245, 247, 248)" }}>
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                {helper.tabs.map((element, key) => {
                  return (
                    <li class="nav-item" role="presentation">
                      <button
                        class={element.class}
                        id={element.id}
                        data-bs-toggle="tab"
                        data-bs-target={element.dataBsTarget}
                        type="button"
                        role="tab"
                        aria-controls={element.ariaControls}
                        aria-selected="true"
                      >
                        {element.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            {serviceCards.map((element, key) => {
              return (
                <div
                  class={element.class}
                  id={element.id}
                  role="tabpanel"
                  aria-labelledby={element.ariaLabelledby}
                >
                  <div className="row mt-4">
                    {element.items.map((item) => {
                      return (
                        <div className="col-lg-3 mb-4">
                          <Services
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            button={item.button}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <br />
        <h2>Task-2.1</h2>
        <br />

        <div className="Toggle">
          {
            <div>
              <button
                aria-expanded="false"
                class="btn btn-outline-secondary"
                type="button"
                onClick={() => setShow(!show)}
              >
                Why park a domain name in Parkname ?
              </button>
            </div>
          }
          {show ? (
            <div class="card card-body">
              Parkname is the leading industry standard for domain name parking
              and monetization services.We offer a wide variety of services to
              help you achive success.
            </div>
          ) : null} </div> */}
      </div>
    </div>
  );
}
export default App;
