
function timeBasedChanges() {
  let currentDate = new Date();
  let timeMessage = document.getElementById("local-time");
  timeMessage.innerHTML = `It is currently: ${currentDate}`

  let geoLocationMessage = document.getElementById("geo-location");
  if (isGeoLocationSupported()) {
    navigator.geolocation.getCurrentPosition((position) => {
      let lattitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      geoLocationMessage.innerHTML = `Your approximate location is: ${lattitude}, ${longitude}`
    });
  } else {
    geoLocationMessage.innerHTML = `Geolocation is currently unavailable, sorry.`
  }
}

function isGeoLocationSupported() {
  return "geolocation" in navigator;
}

function appendErrorMessage(message) {
  let errorMessagesElement = document.getElementById("error-messages");

  if (errorMessagesElement !== undefined) {
    let messageParagraph = document.createElement("div");
    messageParagraph.innerHTML = message;
    errorMessagesElement.appendChild(messageParagraph);
  }
}


async function addCommonHeaderContent() {
  let rs = await fetch('includes/common-head.html').catch(err => {
    console.error(`Error while fetching common \<head\> content: ${err}`)
  })

  if (rs.ok) {
    let headElement = document.head;

    headElement.innerHTML += await rs.text();
    console.info("Common header content loaded.");
  } else {
    appendErrorMessage("Unable to fetch common \<head\> content");
    console.error(`Unable to fetch common \<head\> content: ${rs.statusText} ${rs.body}`);
  }
}

async function onPageLoad() {
  addCommonHeaderContent();
  //timeBasedChanges();
}

document.addEventListener("DOMContentLoaded", onPageLoad);

