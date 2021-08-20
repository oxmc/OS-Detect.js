/* OS-Detect.js Copyright oxmc 2021-present */

/* Variables */
var mainContainer = document.getElementById("OS-Info");
var useragent = navigator.userAgent;
var Name;
var browser;

/* Functions */
function DetectOS () {
  //setTimeout(GetOS, 0500);
  GetOS();
}

function GetOS () {
  if (navigator.appVersion.indexOf("Win") != -1) {
    Name = `Windows ${useragent.split('NT')[1].split(";")[0].trim().split(".")[0].trim()} OS`;
  } else if (navigator.appVersion.indexOf("Mac") != -1) {
    Name = "Mac OS";
  } else if (navigator.appVersion.indexOf("X11") != -1) {
    Name = "Unix OS";
  } else if (navigator.appVersion.indexOf("Linux") != -1) {
    Name = "Linux OS";
  } else if (/\bCrOS\b/.test(navigator.userAgent)) {
    Name = "Chrome OS";
  } else {
    Name = "Unkown";
  };
          
  navigator.sayswho= (function(){
    if (window.navigator.userAgent.indexOf("Chrome") > -1) {
      if (window.navigator.userAgent.indexOf("Edg") > -1) {
        browser = `Edge ${useragent.split('Edg/')[1]}`;
      } else {
        browser = `Chrome ${useragent.split('Chrome/')[1]}`;
      };
    } else if (window.navigator.userAgent.indexOf("Opera") > -1) {
      browser = `Opera ${useragent.split('Opera/')[1]}`;
    } else if (window.navigator.userAgent.indexOf("Firefox") > -1) {
      browser = `Firefox ${useragent.split('Firefox/')[1]}`;
    } else if (window.navigator.userAgent.indexOf("Safari") > -1) {
      browser = `Safari ${useragent.split('Safari/')[1]}`;
    } else if (window.navigator.userAgent.indexOf("trident") > -1) {
      browser = `Internet Explorer ${useragent.split('trident/')[1]}`;
    }
  })();
    
  /* Make elements */
  var message1 = document.createElement('p');
  var message2 = document.createElement('p');
  var message3 = document.createElement('p');
  var osname = document.createElement('p');
  var browserversion = document.createElement('p');
  var browseragent = document.createElement('p');
  var browserinfodiv = document.createElement('div');
  var OSInfo = document.createElement('div');

  /* Add classes and html */
  browserinfodiv.className += 'divround';
  message1.className += 'bold';
  message1.innerHTML = "Your OS is:";
  message2.className += 'bold';
  message2.innerHTML = "Running:";
  message3.className += 'bold';
  message3.innerHTML = "User Agent:";
  osname.className += 'boldgreen';
  osname.innerHTML = Name;
  browserversion.className += 'boldgreen';
  browserversion.innerHTML = browser;
  browseragent.className += 'boldgreen';
  browseragent.innerHTML = useragent;

  /* Add to main html */
  browserinfodiv.appendChild(message1);
  browserinfodiv.appendChild(osname);
  browserinfodiv.appendChild(message2);
  browserinfodiv.appendChild(browserversion);
  browserinfodiv.appendChild(message3);
  browserinfodiv.appendChild(browseragent);
  OSInfo.appendChild(browserinfodiv);
  mainContainer.appendChild(OSInfo);
    
  /* Log info to console */
  console.log(`OS: ${Name}\nBrowser: ${browser}\nUserAgent:${useragent}`); // Log browser version and OS info to console
};
