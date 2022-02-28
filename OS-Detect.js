/*OS-Detect.js Copyright oxmc 2021-present*/

/*Variables*/
var useragent = navigator.userAgent;
var OSNAME, OS, browser, Type, ConsoleType;
var Mobile, IOS = "False";
var iosversion, macversion, windowsversion, playstationversion;

async function DetectOS(opts) {
  /* Debug Mode: */
  if (opts.debug) {
    var debug = opts.debug;
  } else {
    var debug = "false";
  };
  OSNAME = "Unkown";
  Type = "Unkown";
  /*Detect if OS is Windows*/
  if (useragent.indexOf("Win") != -1) {
    if (navigator.appVersion.indexOf("Windows Phone") != 1) {
      let windowsversionstring = useragent.split('Phone')[1].split(";")[0].trim();
      OSNAME = `Windows Phone OS`;
      Type = "WindowsPhone";
    };
    let windowsversionstring = useragent.split('NT')[1].split(";")[0].trim();
    OSNAME = `Windows OS`;
    Type = "Windows";
    switch (windowsversionstring) {
      case "10.0":
        windowsversion = "10"
        break;
      case "6.3":
        windowsversion = "8.1"
        break;
      case "6.2":
        windowsversion = "8"
        break;
      case "6.1":
        windowsversion = "7"
        break;
      case "6.0":
        windowsversion = "vista"
        break;
      case "5.2":
      case "5.1":
        windowsversion = "XP"
        break;
      case "5.0":
        windowsversion = "2000"
        break;
      case "4.0":
        windowsversion = "NT 4.0"
        break;
      case "3.51":
        windowsversion = "NT 3.51"
        break;
      case "3.5":
        windowsversion = "NT 3.5"
        break;
      case "3.1":
        windowsversion = "NT 3.1"
        break;
      default:
        windowsversion = "unkown";
        break;
	  };
  };
  /*Detect if OS is Mac or IOS*/
  if (useragent.indexOf("Mac") != -1) {
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
    };
    if (navigator.appVersion.indexOf("OS X") != -1){
      /*Detect MacOS version*/
      macversion1 = useragent.split('OS X')[1].split(")")[0].trim();
      macversion2 = macversion1.replace('OS X', '');
      macversion3 = macversion2.replace(' ', '');
      /*Replace "_" with "."*/
      macversion = macversion3.split('_').join('.');
    } else if (navigator.appVersion.indexOf("Mac_PowerPC") != -1){
      macversion = `9`;
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
  };
  /* Remove unix detection temporarily */
  /*Detect if OS is Unix*/
  /*
  if (navigator.appVersion.indexOf("X11") != -1) {
    OSNAME = "Unix OS";
    Type = "Unix";
  };
  */
  /*Detect Blackberry OS*/
  if (navigator.userAgent.match(/BlackBerry|BB|PlayBook/i)) {
    OSNAME = `BlackBerry OS`;
  };
  /*Detect if OS is Linux or Android*/
  if (navigator.appVersion.indexOf("Linux") != -1) {
    /*Detect if OS is Android*/
    if (/Android/.test(useragent)) {
      androidversion = useragent.split('Android')[1].split(".")[0].trim()
      OSNAME = "Android OS";
      Type = "Android";
    } else {
      OSNAME = "Linux OS";
      Type = "Linux";
    };
  };
  /*Detect if OS is ChromeOS*/
  if (navigator.appVersion.indexOf("CrOS") != -1) {
    OSNAME = "Chrome OS";
    Type = "ChromeOS";
  };
  /*Detect if OS is ubuntu*/
  if (navigator.appVersion.indexOf("ubuntu") != -1) {
    OSNAME = "Ubuntu OS";
    Type = "Ubuntu";
  };
  /* Detect if OS is Playstation */
  if (navigator.appVersion.indexOf("PlayStation") != -1) {
    /* Detect version */
    playstationversion = useragent.split('PlayStation')[1].split(".")[0].trim().replace('PlayStation', '').replace(' ', '');
    OSNAME = "PlayStation OS";
    Type = "PlayStation";
  };
  /*Detect if device is mobile*/
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    Mobile = "True";
  } else {
    Mobile = "False";
  };
  /* Validate IOS */
  if (IOS == "True") {
    Type = "IOS";
  };
  /* Detect Browser */
  browser = "unkown";
  if (window.navigator.userAgent.indexOf("Chrome") > -1) {
    if (window.navigator.userAgent.indexOf("Edg") > -1) {
      browser = `Edge ${useragent.split('Edg/')[1].split(".")[0].trim()}`;
    } else if (window.navigator.userAgent.indexOf("Puffin") > -1) {
      browser = `Puffin ${useragent.split('Puffin/')[1].split(".")[0].trim()}`;
    } else {
      browser = `Chrome ${useragent.split('Chrome/')[1].split(".")[0].trim()}`;
    };
  } else if (window.navigator.userAgent.indexOf("U;") > -1) {
    if (window.navigator.userAgent.indexOf("Silk") > -1) {
      browser = `SilkBrowser ${useragent.split('Silk/')[1].split(".")[0].trim()}`;
    } else {
      if (/UCBrowser/i.test(navigator.userAgent)) {
        browser = `UCBrowser ${useragent.split('UCBrowser')[1].split(".")[0].trim()}`;
      };
    };
  } else if (window.navigator.userAgent.indexOf("SamsungBrowser/") > -1) {
    browser = `SamsungBrowser ${useragent.split('SamsungBrowser/')[1].split(".")[0].trim()}`;
  } else if (window.navigator.userAgent.indexOf("Opera") > -1) {
    browser = `Opera ${useragent.split('Opera/')[1].split(".")[0].trim()}`;
  } else if (window.navigator.userAgent.indexOf("Firefox") > -1) {
    browser = `Firefox ${useragent.split('Firefox/')[1].split(".")[0].trim()}`;
  } else if (window.navigator.userAgent.indexOf("Safari") > -1) {
    browser = `Safari ${useragent.split('Safari/')[1].split(".")[0].trim()}`;
  } else if (window.navigator.userAgent.indexOf("trident") > -1) {
    browser = `Internet Explorer ${useragent.split('trident/')[1].split(".")[0].trim()}`;
  } else if (OSNAME == "PlayStation OS") {
    browser = `PlayStation ${playstationversion} Browser`;
    ConsoleType = "PlayStation";
  };
  /*Make json based on variables*/
  version = "unkown";
  /* Define variables based on OS */
  if (Type == "Windows") {
    version = windowsversion
  } else if (Type == "Mac") {
    version = macversion
  } else if (Type == "IOS") {
    version = iosversion
  } else if (Type == "Android") {
    version = androidversion
  };
  /*Convert variables to json*/
  OS = {
    "Name": `${OSNAME}`,
    "Browser": `${browser}`,
    "UserAgent": `${useragent}`,
    "Version": `${version}`,
    "ISIOS": `${IOS}`,
    "ISMobile": `${Mobile}`,
    "Type": `${Type}`
  }
  /* Clear variables*/
  OSNAME = "";
  browser = "";
  IOS = "";
  iosversion = "";
  macversion = "";
  windowsversion = "";
  windowsversionstring = "";
  /*Log info to console if debug = true*/
  if (opts.debug == true) {
    console.log(`OS: ${OS.Name}\nBrowser: ${OS.Browser}\nUserAgent: ${OS.UserAgent}`);
  };
};
