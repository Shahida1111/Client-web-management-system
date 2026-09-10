import { clients } from "../data/clients.js";

import {
    getData
} from "../utils/storage.js";


// ========================================
// Get Clients
// ========================================

const clientList =
    getData("webflow_clients", clients);


// ========================================
// Get Client ID From URL
// ========================================

const urlParams =
    new URLSearchParams(window.location.search);

const clientId =
    Number(urlParams.get("id"));


// ========================================
// Find Client
// ========================================

const client =
    clientList.find(client =>
        client.id === clientId
    );


// ========================================
// Display Client
// ========================================

if (client) {

    document.getElementById("clientName")
        .textContent = client.name;

    document.getElementById("detailClientName")
        .textContent = client.name;

    document.getElementById("detailClientIndustry")
        .textContent = client.industry;

    document.getElementById("detailClientWebsites")
        .textContent = client.websites;

    document.getElementById("detailClientId")
        .textContent = client.id;

    const statusElement =
        document.getElementById("detailClientStatus");

    statusElement.textContent =
        client.status;

    statusElement.classList.add(
        `badge--${client.status.toLowerCase()}`
    );

} else {

    document.getElementById("clientName")
        .textContent = "Client Not Found";

    document.getElementById("detailClientName")
        .textContent = "Client Not Found";

}