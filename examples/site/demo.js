async function ShowOS() {
  const OS = await osd.detectOS({ debug: true });

  /* Variables */
  var mainContainer = document.getElementById("content");
  var notif = {
    root: document.getElementById("notif"),
    title: document.getElementById("notif-title"),
    message: document.getElementById("notif-message")
  };

  /* If browser-icons addon is included, create a icon element */
  if (typeof osd.bi === 'function') {
    var browserIcon = document.createElement('p');
  }

  /* Make elements */
  var message1 = document.createElement('p');
  var message2 = document.createElement('p');
  var message3 = document.createElement('p');
  var message4 = document.createElement('p');
  var osName = document.createElement('p');
  var osVersion = document.createElement('p');
  var browserVersion = document.createElement('p');
  var userAgent = document.createElement('p');
  var OSInfo = document.createElement('div');

  /* Add classes and html */
  message1.className += 'bold';
  message1.innerHTML = "Your OS is:";
  message2.className += 'bold';
  message2.innerHTML = "Your OS Version is:";
  message3.className += 'bold';
  message3.innerHTML = "Your browser is:";
  message4.className += 'bold';
  message4.innerHTML = "Your UserAgent is:";
  osName.className += 'bold green';
  osName.innerHTML = OS.name;
  osVersion.className += 'bold green';
  osVersion.innerHTML = OS.version;
  browserVersion.className += 'bold green';
  if (typeof osd.bi === 'function') {
    browserVersion.innerHTML = `${OS.browser.icon} ${OS.browser.combined}`;
  } else {
    browserVersion.innerHTML = OS.browser.combined;
  };
  userAgent.className += 'bold green';
  userAgent.innerHTML = OS.userAgent;

  /* Add to main html */
  OSInfo.appendChild(message1);
  OSInfo.appendChild(osName);
  OSInfo.appendChild(message2);
  OSInfo.appendChild(osVersion);
  OSInfo.appendChild(message3);
  OSInfo.appendChild(browserVersion);
  OSInfo.appendChild(message4);
  OSInfo.appendChild(userAgent);

  notif.title.innerText = "Windows 11 detection support";
  if (OS.win11support == true) {
    notif.root.classList += " success";
    notif.message.innerText = `Your browser supports detecting for windows 11`;
  } else {
    notif.root.classList += " error";
    notif.message.innerText = `Your browser does not support detecting for windows 11`;
  };
  notif.root.style.display = "block";
  mainContainer.innerHTML = OSInfo.outerHTML;
};