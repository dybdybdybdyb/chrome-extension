function extractMainContent() {
    // Identify the article content
    const content = document.querySelector("article") || document.querySelector("main");
    if (!content) return;

    // Delete anything that it is not article or main
    document.body.replaceChildren(content);

    // Identify the p elements and adjust their font color
    const paragraph = document.querySelectorAll("p")

    // CSS
    paragraph.forEach ((p) => {
        p.style.color = "#fff";
    })

    content.style.maxWidth = "800px";
    content.style.background = "#111";
    content.style.fontFamily = "Roboto";
}

function deleteAds() {
    // Identify the div elements that have "ads" written in their id class and remove them
    const div = document.querySelectorAll("div");

    div.forEach((d) => {
        if (d.id.includes("ads")) {
            d.remove();
        }
        if (d.className.includes("ads")) {
            d.remove();
        }
    })
    // Creates a style tag that is appended at the HTML level and selects any elements that have attributes as displayed below & case insensitive. Hide these elements
    const style = document.createElement("style");
    style.textContent = `[id*="ads" i],
                         [class*="ads" i],
                        iframe[id*="ads" i],
                        iframe[src*="ads" i] {
                            display: none !important;
                            visibility: hidden !important;
                        }`;

    document.documentElement.appendChild(style);
}

async function dictionary() {
    document.addEventListener("dblclick", async () => {
        const selection = window.getSelection().toString().trim();
        if (!selection) return;

        const find = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selection}`);
        const data = await find.json();
        // console.log(data);
        // console.log(data[0].meanings[0].definitions[0].definition)
        
        if (Array.isArray(data)) {
            const definition = data[0].meanings[0].definitions[0].definition;
            alert (`${selection}: ${definition}`);
        } else alert ("Definition not found")
    })
}

extractMainContent();
deleteAds();
dictionary();

// const domObserver = new MutationObserver (() => {
//     deleteAdds();
// })
// Calling the object Observer to check for changes below body and beyond 
// domObserver.observe(document.body, { childList: true, subtree: true });