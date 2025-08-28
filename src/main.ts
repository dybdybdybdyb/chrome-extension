document.addEventListener("DOMContentLoaded", async () => {
  const title = document.createElement("h1");
  title.innerText = "Online Chatroom";
  document.querySelector("body")?.appendChild(title);

  // DOM Manipulation to create the chatbox with the button

  const body = document.querySelector("body");
  const section = document.createElement("section");
  document.querySelector("body")?.appendChild(section);
  const div = document.createElement("div");
  const input = document.createElement("input");
  input.setAttribute("id", "message");
  const button = document.createElement("Button");
  button.innerText = "SEND";
  document.querySelector("section")?.appendChild(div);
  div.appendChild(input);
  div.appendChild(button);

  // Styling
  body!.style.display = "flex";
  body!.style.flexDirection = "column";
  body!.style.alignItems = "center";
  body!.style.textAlign = "center";
  section.style.display = "flex";
  section.style.alignItems = "center";
  section.style.textAlign = "center";
  section.style.justifyContent = "center";
  section.style.flexDirection = "column";
  section.style.color = "white";
  section.style.borderWidth = "1px";
  section.style.borderStyle = "solid";
  section.style.width = "800px";
  div.style.borderStyle = "solid";
  div.style.display = "flex";
  div.style.justifyContent = "spaceBetween";
  div.style.backgroundColor = "white";

  // Efficient way to interate through the messages and append it to the list tags
  const data = await getMessages();
  const container = document.createElement("ul");
  for (let i = 0; i < data.length; i++) {
    const li = document.createElement("li");
    li.innerText = data[i].message;
    container.append(li);
  }

  container.style.listStyleType = "none";
  section.appendChild(container);

  // Download messages into chatbox
  async function getMessages(limit = 10) {
    const url = new URL(
      "https://ohwuvawrw4.execute-api.us-west-2.amazonaws.com/messages"
    );
    url.searchParams.set("limit", String(limit));

    const response = await fetch(url.toString());
    const data = await response.json();
    // console.log("Messages", data);

    return Array.isArray(data) ? data.slice(-limit) : data;
  }

  // Post message function
  async function sendMessage() {
    const text = input.value.trim();
    console.log(text, "text");
    if (!text) return;

    await fetch(
      "https://ohwuvawrw4.execute-api.us-west-2.amazonaws.com/messages",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          created_by: "David",
          message: text
        })
      }
    );
  }

  // Event listener to add a click event and run the sendMessage function
  button.addEventListener("click", async () => {
    await sendMessage();
  });
});
