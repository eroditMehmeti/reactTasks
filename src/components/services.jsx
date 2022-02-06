import React from "react";
import TabList from "react-tabs/lib/components/TabList";
import TabPanel from "react-tabs/lib/components/TabPanel";
import { Tab, Tabs } from "react-tabs";
import "../list.css";

const ItemCard = ({ title, price, description, button }) => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <div class="card-body justify-content-space-between">
        <h2 class="card-title">{title}</h2>
        <h3 class="card-text">{price}</h3>
        <h4 class="card-text">{description}</h4>
        <button class="btn btn-outline-primary">{button}</button>
      </div>
    </div>
  );
};

const Services = ({ tabs, tabsContent }) => {
  return (
    <div className="NavBar ">
      <div className=" row align-items-start d-flex flex-basics-auto  ">
        <Tabs className="bg-light">
          <TabList>
            {tabs.map((tab) => (
              <Tab> {tab} </Tab>
            ))}
          </TabList>

          {tabsContent.map((items) => (
            <TabPanel className="justify-content-spacebetween">
              {items.map((item) => (
                <ItemCard class="card-text" {...item} />
              ))}
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};
export default Services;
