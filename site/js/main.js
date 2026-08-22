function appendErrorMessage(message) {
  let errorMessagesElement = document.getElementById("error-messages");

  if (errorMessagesElement !== undefined) {
    let messageParagraph = document.createElement("div");
    messageParagraph.innerHTML = message;
    errorMessagesElement.appendChild(messageParagraph);
  }
}

async function addCommonBodyContent() {
  let rs = await fetch('/includes/nav-header.html').catch(err => {
    console.error(`Error while fetching nav header: ${err}`)
  })

  if (rs.ok) {
    let element = document.body;
    let content = await rs.text();
    element.insertAdjacentHTML("afterbegin", content);
  } else {
    appendErrorMessage("Unable to fetch nav header");
    console.error(`Unable to fetch nav header: ${rs.statusText} ${rs.body}`);
  }
}

async function addCommonHeaderContent() {
  let rs = await fetch('/includes/common-head.html').catch(err => {
    console.error(`Error while fetching common \<head\> content: ${err}`)
  })

  if (rs.ok) {
    let element = document.head;
    let content = await rs.text();
    element.insertAdjacentHTML("beforeend", content);
  } else {
    appendErrorMessage("Unable to fetch common \<head\> content");
    console.error(`Unable to fetch common \<head\> content: ${rs.statusText} ${rs.body}`);
  }
}

async function onPageLoad() {
  addCommonBodyContent();
}

// Load header content first for styling!
addCommonHeaderContent().then(r => {});
document.addEventListener("DOMContentLoaded", onPageLoad);

