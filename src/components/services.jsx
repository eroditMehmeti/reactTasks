import React from "react";
import TabList from "react-tabs/lib/components/TabList";
import TabPanel from "react-tabs/lib/components/TabPanel";
import { Tab, Tabs } from "react-tabs";
import "../list.css";

const ItemCard = ({ title, price, description, button }) => {
  return (
    <div class="card d-flex border-0" style={{ width: "25%", height: "200px" }}>
      <div class="card-body flex-wrap flex-direction-row ">
        <h3 class="card-title">{title}</h3>
        <h5 class="card-text">{price}</h5>
        <p class="card-text">{description}</p>
        <button class="btn btn-outline-primary col-12">{button}</button>
      </div>
    </div>
  );
};

const Services = ({ tabs, tabsContent }) => {
  return (
    <div className="NavBar">
      <Tabs
        className=""
        style={{
          height: "100%",
          padding: "20px 20px",
          backgorundColor: "rgb(245, 247, 248)",
        }}
      >
        <TabList className=" text-decoration-none">
          {tabs.map((tab) => (
            <Tab> {tab} </Tab>
          ))}
        </TabList>

        {tabsContent.map((items) => (
          <TabPanel className="d-flex" style={{ padding: "30px 30px" }}>
            {items.map((item) => (
              <ItemCard className="" {...item} />
            ))}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};
export default Services;
