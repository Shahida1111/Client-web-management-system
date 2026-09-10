import { clients } from "../data/clients.js";


const clientTableBody =
    document.getElementById("clientTableBody");

const clientSearch =
    document.getElementById("clientSearch");

const addClientBtn =
    document.getElementById("addClientBtn");

const clientModal =
    document.getElementById("clientModal");

const closeClientModal =
    document.getElementById("closeClientModal");

const cancelClientModal =
    document.getElementById("cancelClientModal");

const clientForm =
    document.getElementById("clientForm");

    
// ========================================
// Render Clients
// ========================================

function renderClients(clientList) {

    clientTableBody.innerHTML = "";


    clientList.forEach(client => {

        const row = document.createElement("tr");


        row.innerHTML = `

            <td>
                <strong>${client.name}</strong>
            </td>

            <td>
                ${client.industry}
            </td>

            <td>
                ${client.websites}
            </td>

            <td>

                <span class="badge badge--${client.status.toLowerCase()}">

                    ${client.status}

                </span>

            </td>

            <td>

                <button
                    class="btn btn--small">

                    View

                </button>

            </td>

        `;


        clientTableBody.appendChild(row);

    });

}


// ========================================
// Search Clients
// ========================================

clientSearch.addEventListener("input", () => {

    const searchTerm =
        clientSearch.value.toLowerCase();


    const filteredClients =
        clients.filter(client =>

            client.name
                .toLowerCase()
                .includes(searchTerm)

            ||

            client.industry
                .toLowerCase()
                .includes(searchTerm)

        );


    renderClients(filteredClients);

});



// ========================================
// add client model open
// ========================================
addClientBtn.addEventListener("click", () => {

    clientModal.classList.add("modal--visible");

});
closeClientModal.addEventListener("click", () => {

    clientModal.classList.remove("modal--visible");

});
cancelClientModal.addEventListener("click", () => {

    clientModal.classList.remove("modal--visible");

});
clientForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("clientName").value.trim();

    const industry =
        document.getElementById("clientIndustry").value;

    const websites =
        Number(document.getElementById("clientWebsites").value);


    const newClient = {

        id: clients.length + 1,

        name: name,

        industry: industry,

        websites: websites,

        status: "Active"

    };


    clients.push(newClient);


    renderClients(clients);


    clientForm.reset();


    clientModal.classList.remove("modal--visible");

});
// ========================================
// Initial Render
// ========================================

renderClients(clients);