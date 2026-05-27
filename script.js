console.log("Frontend JS Loaded");

document.addEventListener("DOMContentLoaded", () => {

    const saveBtn = document.getElementById("saveBtn");

    saveBtn.addEventListener("click", async () => {

        const projectData = {

            title: document.getElementById("title").value,

            description: document.getElementById("description").value,

            technology: document.getElementById("technology").value,

            github: document.getElementById("github").value

        };

        try {

            const response = await fetch("https://thiranex-1.onrender.com/add-project", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(projectData)

            });

            const result = await response.json();

            alert(result.message);

            console.log(result);

        } catch (error) {

            console.log(error);

            alert("Error Connecting to Backend");

        }

    });

});