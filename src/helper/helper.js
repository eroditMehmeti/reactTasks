class Helper {
  constructor() {
    this.tabs = [
      {
        id: "nav-domain-tab",
        dataBsTarget: "#nav-domain",
        ariaControls: "nav-domain",
        name: "Domain",
        class: "nav-link active",
      },
      {
        id: "nav-webHosting-tab",
        dataBsTarget: "#nav-webHosting",
        ariaControls: "nav-webHosting",
        name: "Web Hosting",
        class: "nav-link",
      },
      {
        id: "nav-dedicatedServers-tab",
        dataBsTarget: "#nav-dedicatedServers",
        ariaControls: "nav-dedicatedServers",
        name: "Dedicated Servers",
        class: "nav-link",
      },
      {
        id: "nav-virtualCloudServer-tab",
        dataBsTarget: "#nav-virtualCloudServer",
        ariaControls: "nav-virtualCloudServer",
        name: "Virtual Cloud Server",
        class: "nav-link",
      },
      {
        id: "nav-wordPressHosting-tab",
        dataBsTarget: "#nav-wordPressHosting",
        ariaControls: "nav-wordPressHosting",
        name: "Word Press Hosting",
        class: "nav-link",
      },
      {
        id: "nav-emailHosting-tab",
        dataBsTarget: "#nav-emailHosting",
        ariaControls: "nav-emailHosting",
        name: "Email Hosting",
        class: "nav-link",
      },
      {
        id: "nav-vpsHostingServer-tab",
        dataBsTarget: "#nav-vpsHostingServer",
        ariaControls: "nav-vpsHostingServer",
        name: "Vps Hosting Server",
        class: "nav-link",
      },
      {
        id: "nav-freeHostings-tab",
        dataBsTarget: "#nav-freeHostings",
        ariaControls: "nav-freeHostings",
        name: "Free Hostings",
        class: "nav-link",
      },
    ];
  }
}

export default new Helper();
