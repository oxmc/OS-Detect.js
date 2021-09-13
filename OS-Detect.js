/*OS-Detect.js Copyright oxmc 2021-present*/

/*Variables*/
var useragent = navigator.userAgent;
var OSNAME;
var OS;
var browser;
var Mobile = "False";
var Type;
var IOS = "false";
var iosversion;
var macversion;
var windowsversion;

/*Detect if OS is Windows*/
if (useragent.indexOf("Win") != -1) {
  /*Detect windows phone*/
  if (navigator.appVersion.indexOf("Windows Phone") != -1) {
    let windowsversionstring = useragent.split('Phone')[1].split(";")[0].trim();
    OSNAME = `Windows Phone OS`;
    Type = "WindowsPhone";
  } else {
    let windowsversionstring = useragent.split('NT')[1].split(";")[0].trim();
    if (windowsversionstring == "10.0") {
      windowsversion = "10"
    } else if (windowsversionstring == "6.3") {
      windowsversion = "8.1"
    } else if (windowsversionstring == "6.2") {
      windowsversion = "8"
    } else if (windowsversionstring == "6.1") {
      windowsversion = "7"
    } else if (windowsversionstring == "6.0") {
      windowsversion = "vista"
    } else if (windowsversionstring == "5.1" || windowsversionstring == "5.2") {
      windowsversion = "XP"
    } else if (windowsversionstring == "5.0") {
      windowsversion = "2000"
    } else if (windowsversionstring == "4.0") {
      windowsversion = "NT 4.0"
    } else if (windowsversionstring == "3.51") {
      windowsversion = "NT 3.51"
    } else if (windowsversionstring == "3.5") {
      windowsversion = "NT 3.5"
    } else if (windowsversionstring == "3.1") {
      windowsversion = "NT 3.1"
    } else {
      windowsversion = "";
    };
    OSNAME = `Windows ${windowsversion} OS`;
    Type = "Windows";
  };
} else if (navigator.userAgent.match(/BlackBerry|BB|PlayBook/i)) {
  OSNAME = `BlackBerry OS`;
} else if (useragent.indexOf("Mac") != -1) {
  /*Detect if OS is Mac or IOS*/
  /*Detect IOS version*/
  if (navigator.appVersion.indexOf("iPhone;") != -1 || navigator.appVersion.indexOf("iPad;") != -1 || navigator.appVersion.indexOf("iPod;") != -1) {
    if (navigator.appVersion.match("iPhone OS") != -1 || navigator.appVersion.match("iPad OS") != -1 || navigator.appVersion.match("iPod OS") != -1) {
      iosversion1 = useragent.split('OS')[1].split("like")[0].trim();
      iosversion2 = iosversion1.replace(' ', '');
      /*Replace "_" with "."*/
      iosversion = iosversion2.split('_').join('.');
      IOS = "True";
    } else {
      iosversion1 = useragent.split('CPU OS')[1].split("like")[0].trim();
      iosversion2 = iosversion1.replace(' ', '');
      /*Replace "_" with "."*/
      iosversion = iosversion2.split('_').join('.');
      IOS = "True";
    };
    if (IOS == "True") {
      Type = "IOS";
    };
  } else if (navigator.appVersion.indexOf("OS X") != -1){
    /*Detect MacOS version*/
    macversion1 = useragent.split('OS X')[1].split(")")[0].trim();
    macversion2 = macversion1.replace('OS X', '');
    macversion3 = macversion2.replace(' ', '');
    /*Replace "_" with "."*/
    macversion = macversion3.split('_').join('.');
  };
  /*Detect if OS is iPad*/
  if (navigator.appVersion.indexOf("iPad") != -1) {
    OSNAME = `iPad OS`;
    /*Detect if OS is iPhone*/
  } else if (navigator.appVersion.indexOf("iPhone") != -1) {
    OSNAME = `iPhone OS`;
    /*Detect if OS is iPod*/
  } else if (navigator.appVersion.indexOf("iPod") != -1) {
    OSNAME = `iPod OS`;
  } else {
    OSNAME = `Mac OS`;
    Type = "Mac";
  };
  /*Detect if OS is Unix*/
} else if (navigator.appVersion.indexOf("X11") != -1) {
  OSNAME = "Unix OS";
  Type = "Unix";
  /*Detect if OS is Linux or Android*/
} else if (navigator.appVersion.indexOf("Linux") != -1) {
  /*Detect if OS is Android*/
  if (/Android/.test(useragent)) {
    OSNAME = "Android OS";
    Type = "Android";
  } else {
    OSNAME = "Linux OS";
    Type = "Linux";
  };
  /*Detect if OS is ChromeOS*/
} else if (navigator.appVersion.indexOf("CrOS") != -1) {
  OSNAME = "Chrome OS";
  Type = "ChromeOS";
} else {
  OSNAME = "Unkown";
  Type = "Unkown";
};

if (IOS == "True") {
  Type = "IOS";
};

/*Detect if device is mobile*/
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  Mobile = "True";
}else{
  Mobile = "False";
}

/*Detect browser*/
if (window.navigator.userAgent.indexOf("Chrome") > -1) {
  if (window.navigator.userAgent.indexOf("Edg") > -1) {
    browser = `Edge ${useragent.split('Edg/')[1]}`;
  } else if (window.navigator.userAgent.indexOf("Puffin") > -1) {
    browser = `Puffin ${useragent.split('Puffin/')[1]}`;
  } else {
    browser = `Chrome ${useragent.split('Chrome/')[1].split("Safari")[0].trim()}`;
  };
} else if (window.navigator.userAgent.indexOf("U;") > -1) {
  if (window.navigator.userAgent.indexOf("Silk") > -1) {
    browser = `SilkBrowser ${useragent.split('Silk/')[1].split("Safari")[0].trim()}`;
  } else {
    if (/UCBrowser/i.test(navigator.userAgent)) {
      browser = `UCBrowser ${useragent.split('UCBrowser/')[1]}`;
    }
    browser = `unkown`;
  };
} else if (window.navigator.userAgent.indexOf("SamsungBrowser/") > -1) {
  browser = `SamsungBrowser ${useragent.split('SamsungBrowser/')[1]}`;
} else if (window.navigator.userAgent.indexOf("Opera") > -1) {
  browser = `Opera ${useragent.split('Opera/')[1]}`;
} else if (window.navigator.userAgent.indexOf("Firefox") > -1) {
  browser = `Firefox ${useragent.split('Firefox/')[1]}`;
} else if (window.navigator.userAgent.indexOf("Safari") > -1) {
  browser = `Safari ${useragent.split('Safari/')[1]}`;
} else if (window.navigator.userAgent.indexOf("trident") > -1) {
  browser = `Internet Explorer ${useragent.split('trident/')[1].trim()}`;
};

/*Make json based on variables*/

/*Convert variables to json*/
OS = {
  "Name": `${OSNAME}`,
  "Browser": `${browser}`,
  "UserAgent": `${useragent}`,
  "IOS": {
    "Version": `${iosversion}`
  },
  "Win": {
    "Version": `${windowsversion}`
  },
  "ISIOS": `${IOS}`,
  "ISMobile": `${Mobile}`
}

/* Clear variables*/
OSNAME = "";
browser = "";
IOS = "";
iosversion = "";
macversion = "";
windowsversion = "";
windowsversionstring = "";

/*Log info to console*/
console.log(`OS: ${OS.Name}\nBrowser: ${OS.Browser}\nUserAgent: ${OS.UserAgent}`);
