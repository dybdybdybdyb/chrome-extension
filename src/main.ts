document.addEventListener("DOMContentLoaded", async () => {
  const title = document.createElement("h1");
  title.innerText = "Online Chatroom";
  document.querySelector("body")?.appendChild(title);
  // make AJAX call here....

  // Part 1a

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

  // const ul = document.createElement("ul");

  // const li = document.createElement("li");
  // document.querySelector("ul")?.appendChild(li);
  // li.innerText = "Please see your messages below";

  //body style
  body!.style.display = "flex";
  body!.style.flexDirection = "column";
  body!.style.alignItems = "center";
  body!.style.textAlign = "center";

  //section
  section.style.display = "flex";
  section.style.alignItems = "center";
  section.style.textAlign = "center";
  section.style.justifyContent = "center";
  section.style.flexDirection = "column";
  section.style.color = "white";
  section.style.borderWidth = "1px";
  section.style.borderStyle = "solid";
  section.style.width = "800px";

  //div style
  div.style.borderStyle = "solid";
  div.style.display = "flex";
  div.style.justifyContent = "spaceBetween";
  div.style.backgroundColor = "white";

  //button style
  // button.style.

  //input style
  // input.style.id;

  //Event Listener to add Click event to button
  button.addEventListener("click", () => {
    console.log("click");
  });

  // Part 1b
  async function getMessages() {
    const response = await fetch(
      "https://ohwuvawrw4.execute-api.us-west-2.amazonaws.com/messages"
    );
    const data = await response.json();
    // console.log("inside", data);

    return data;
  }
  // async function sendMessage(){
  //   const send = await fetch(),{
  //     method: 'POST',
  //     headers: {'Accept': }
  //   }
  // }

  const data = await getMessages();
  // console.log(data, Array.isArray(data), "data");
  // console.log("outside");

  const container = document.createElement("ul");
  for (let i = 0; i < data.length; i++) {
    // console.log("inside loop");
    const li = document.createElement("li");
    li.innerText = data[i].message;
    container.append(li);
  }

  container.style.listStyleType = "none";

  section.appendChild(container);
});
