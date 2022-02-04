import React from "react";
import TabList from "react-tabs/lib/components/TabList";
import TabPanel from "react-tabs/lib/components/TabPanel";
import { Tab, Tabs } from "react-tabs";

const ItemCard = ({ title, price, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{price}</h3>
      <h4>{description}</h4>
    </div>
  );
};

const Services = ({ tabs, tabsContent }) => {
  console.log(tabsContent);
  return (
    <Tabs>
      <TabList>
        {tabs.map((tab) => (
          <Tab> {tab} </Tab>
        ))}
      </TabList>

      {tabsContent.map((items) => (
        <TabPanel>
          {items.map((item) => (
            <ItemCard {...item} />
          ))}
        </TabPanel>
      ))}
    </Tabs>
  );
};
export default Services;
