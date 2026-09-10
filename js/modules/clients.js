import { clients } from "../data/clients.js";
import { saveData, getData } from "../utils/storage.js";
// Add the exact path to the .esm.all.js file
import Swal from "../../../node_modules/sweetalert2/dist/sweetalert2.esm.all.js";

let clientList = getData("webflow_clients", clients);

const clientTableBody = document.getElementById("clientTableBody");
// console.log(clientTableBody)

const clientSearch = document.getElementById("clientSearch");

const addClientBtn = document.getElementById("addClientBtn");

const clientModal = document.getElementById("clientModal");

const closeClientModal = document.getElementById("closeClientModal");

const cancelClientModal = document.getElementById("cancelClientModal");

const clientForm = document.getElementById("clientForm");

// ========================================
// Render Clients
// ========================================

function renderClients(clientList) {
  clientTableBody.innerHTML = "";
//   console.log( clientTableBody.outerHTML);

  clientList.forEach((client) => {
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
        class="btn btn--small client-action"
        data-action="view"
        data-id="${client.id}">
        View
    </button>

    <button
        class="btn btn--small client-action"
        data-action="edit"
        data-id="${client.id}">
        Edit
    </button>

    <button
        class="btn btn--small client-action"
        data-action="delete"
        data-id="${client.id}">
        Delete
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
  const searchTerm = clientSearch.value.toLowerCase();

  const filteredClients = clientList.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm) ||
      client.industry.toLowerCase().includes(searchTerm),
  );

  renderClients(filteredClients);
});

// ========================================
// Client Actions
// ========================================

clientTableBody.addEventListener("click", (event) => {

    const button =
        event.target.closest(".client-action");

    if (!button) {
        return;
    }

    const action =
        button.dataset.action;

    const clientId =
        Number(button.dataset.id);

    const client =
        clientList.find(client =>
            client.id === clientId
        );


    console.log(client);


    // ========================================
    // View Client
    // ========================================

    if (action === "view") {

        window.location.href =
            `client-details.html?id=${clientId}`;

    }

 if (action === "delete") {

    Swal.fire({

        title: "Delete Client?",

        text: `Are you sure you want to delete ${client.name}?`,

        icon: "warning",

        showCancelButton: true,

        confirmButtonText: "Yes, Delete",

        cancelButtonText: "Cancel"

    }).then((result) => {

        if (result.isConfirmed) {

            const clientIndex =
    clientList.findIndex(client =>
        client.id === clientId
    );
        clientList.splice(clientIndex, 1);
saveData(
    "webflow_clients",
    clientList
);
renderClients(clientList);

Swal.fire({

    icon: "success",

    title: "Client Deleted",

    text: `${client.name} has been deleted successfully.`,

    confirmButtonText: "OK"

});
        }

    });

}

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
        document.getElementById("clientName")
            .value
            .trim();

    const industry =
        document.getElementById("clientIndustry")
            .value;

    const websites =
        Number(
            document.getElementById("clientWebsites")
                .value
        );


    const newClient = {

        id: Date.now(),

        name: name,

        industry: industry,

        websites: websites,

        status: "Active"

    };


    // Add to application data
    clientList.push(newClient);


    // Save to Local Storage
    saveData(
        "webflow_clients",
        clientList
    );


    // Refresh table
    renderClients(clientList);


    // Reset form
    clientForm.reset();


    // Close modal
    clientModal.classList.remove("modal--visible");


    // Show success message
    Swal.fire({

        icon: "success",

        title: "Client Added!",

        text: `${name} has been added successfully.`,

        confirmButtonText: "OK"

    });

});
// ========================================
// Initial Render
// ========================================

renderClients(clientList);
