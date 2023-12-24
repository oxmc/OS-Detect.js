/*OS-Detect.js Copyright oxmc 2021-2023*/

/* Polly fill for .replaceAll() */
if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (str, newStr) {
    // If a regex pattern
    if (str instanceof RegExp) {
      return this.replace(str, newStr);
    }
    // If a string
    return this.replace(new RegExp(str, 'g'), newStr);
  };
}

/* OS-Detect Function */
window.osd = {};
window.osd.detectOS = async function (opts) {
  /*Variables*/
  const useragent = navigator.userAgent;
  let OSNAME = OS = Type = ConsoleType = version = "Unknown";
  let Mobile = IOS = win11detect = debug = false;

  /* Options */
  const defopts = {
    debug: false
  };

  /* Handle options: */
  if (typeof opts !== "undefined") {
    /* Debug Mode: */
    if (typeof opts.debug !== "undefined") {
      debug = opts.debug;
    };
  } else {
    opts = defopts;
  };

  /*Detect if device is mobile*/
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(useragent)) {
    Mobile = true;
  } else {
    Mobile = false;
  };

  /* Detect Browser */
  function getBrowserInfo(useragent) {
    let browserName = "";
    let browserVersion = "";

    if (useragent.includes("Silk/")) {
      browserName = "SilkBrowser";
      browserVersion = getVersion(useragent, 'Silk/');
    } else if (useragent.includes("UCBrowser/")) {
      browserName = "UCBrowser";
      browserVersion = getVersion(useragent, 'UCBrowser/');
    } else if (useragent.includes("SamsungBrowser/")) {
      browserName = "SamsungBrowser";
      browserVersion = getVersion(useragent, 'SamsungBrowser/');
    } else if (useragent.includes("Opera") || useragent.includes("OPR")) {
      browserName = "Opera";
      browserVersion = getOperaVersion(useragent);
    } else if (useragent.includes("Firefox/")) {
      browserName = "Firefox";
      browserVersion = getVersion(useragent, 'Firefox/');
    } else if (useragent.includes("trident/")) {
      browserName = "Internet Explorer";
      browserVersion = getVersion(useragent, 'trident/');
    } else if (OSNAME == "PlayStation OS") {
      browserName = `PlayStation ${version} Browser`;
      ConsoleType = "PlayStation";
    } else if (useragent.includes("Chrom") || useragent.includes("CriOS")) {
      if (useragent.includes("Edg") || useragent.includes("Edge")) {
        browserName = "Edge (chromium)";
      } else if (useragent.includes("BracketBrowser") || useragent.includes("BracketBrowser")) {
        browserName = "BracketBrowser (electron)";
      } else if (useragent.includes("Chromium")) {
        browserName = "Chromium";
      } else {
        browserName = "Chrome";
      }
      browserVersion = getChromeVersion(useragent);
    } else if (useragent.includes("Safari")) {
      browserName = "Safari";
      browserVersion = getVersion(useragent, 'Safari/');
    }

    return { browserName, browserVersion };
  }

  function getVersion(useragent, identifier) {
    return useragent.split(identifier)[1].split(".")[0].trim() || "";
  }

  function getOperaVersion(useragent) {
    const identifiers = ["Opera/", "OPR/"];
    for (const identifier of identifiers) {
      if (useragent.includes(identifier)) {
        return `Opera ${getVersion(useragent, identifier)}`;
      }
    }
    return "";
  }

  function getChromeVersion(useragent) {
    if (useragent.includes("Edg") || useragent.includes("Edge")) {
      return useragent.includes("Edg/") ? `${getVersion(useragent, 'Edg/')}` : `${getVersion(useragent, 'Edge/')}`;
    } else if (useragent.includes("BracketBrowser/")) {
      return useragent.split("BracketBrowser/")[1].split(" ")[0].trim() || "";
    } else if (useragent.includes("Puffin/")) {
      return getVersion(useragent, 'Puffin/');
    } else if (useragent.includes("CriOS")) {
      return getVersion(useragent, 'CriOS');
    } else if (useragent.includes("CrOS")) {
      return getVersion(useragent, 'Chrome/');
    } else if (useragent.includes("Chromium")) {
      return getVersion(useragent, 'Chromium/');
    } else {
      return getVersion(useragent, 'Chrome/');
    }
  }

  /* Get browser info */
  const { browserName, browserVersion } = getBrowserInfo(useragent);

  /*Detect if OS is Windows*/
  if (useragent.includes("Win")) {
    if (useragent.includes("Windows Phone")) {
      versionstring = useragent.split('Phone')[1].split(";")[0].trim();
      OSNAME = `Windows Phone OS`;
      Type = "WindowsPhone";
    } else {
      versionstring = useragent.split('NT')[1].split(";")[0].trim();
      OSNAME = `Windows OS`;
      Type = "Windows";
    };
    /* Windows 11 fix */
    if (typeof navigator.userAgentData !== "undefined") {
      win11detect = true;
      try {
        const ua = await navigator.userAgentData.getHighEntropyValues(["platformVersion"]);
        if (navigator.userAgentData.platform === "Windows") {
          var majorPlatformVersion = parseInt(ua.platformVersion.split('.')[0]);
          if (majorPlatformVersion >= 13) {
            versionstring = "11.0";
          };
        };
      } catch (error) {
        console.warn("Unable to detect for windows 11 and later:", error.message);
      }
    } else {
      /* Check if site is using https */
      var protocol = location.protocol === "https:" ? "https" : "http";
      if (protocol === "https") {
        console.warn("Unable to detect for windows 11 and later, browser does not support navigator.userAgentData");
      } else {
        console.warn("Unable to detect for windows 11 and later, navigator.userAgentData requires the page to be hosted over HTTPS which this page is not.");
      };
    };
    switch (versionstring) {
      case "11.0":
        version = "11";
        break;
      case "10.0":
        version = "10";
        break;
      case "6.3":
        version = "8.1";
        break;
      case "6.2":
        version = "8";
        break;
      case "6.1":
        version = "7";
        break;
      case "6.0":
        version = "vista";
        break;
      case "5.2":
      case "5.1":
        version = "XP";
        break;
      case "5.0":
        version = "2000";
        break;
      case "4.0":
        version = "NT 4.0";
        break;
      case "3.51":
        version = "NT 3.51";
        break;
      case "3.5":
        version = "NT 3.5";
        break;
      case "3.1":
        version = "NT 3.1";
        break;
      default:
        version = "unknown";
        break;
    };
  };

  /*Detect if OS is Mac or IOS*/
  if (useragent.includes("Mac")) {
    /*Detect if OS is iPad*/
    if (useragent.includes("iPad")) {
      OSNAME = `iPad OS`;
      IOS = true;
      /*Detect if OS is iPhone*/
    } else if (useragent.includes("iPhone")) {
      OSNAME = `iPhone OS`;
      IOS = true;
      /*Detect if OS is iPod*/
    } else if (useragent.includes("iPod")) {
      OSNAME = `iPod OS`;
      IOS = true;
    } else {
      OSNAME = `Mac OS`;
      Type = "Mac";
      if (useragent.includes("OS X")) {
        /*Detect MacOS version*/
        version = useragent.split('OS X')[1].split(")")[0].trim().replace('OS X', '').replace(' ', '').split('_').join('.');
      } else if (useragent.includes("Mac_PowerPC")) {
        version = `9`;
      };
    };
    /*Detect IOS version*/
    if (IOS == true) {
      Type = "IOS";
      if (useragent.includes("iPhone") || useragent.includes("iPad") || useragent.includes("iPod")) {
        version = useragent.split("OS")[1].split("Mac")[0].trim().replace("like", "").replace(" ", "").split("_").join(".");
        IOS = true;
      } else if (navigator.appVersion.match("iPhone OS") || navigator.appVersion.match("iPad OS") || navigator.appVersion.match("iPod OS")) {
        version = useragent.split("OS")[1].split("like")[0].trim().replace("_", ".");
        IOS = true;
      } else if (useragent.includes("Version/")) {
        version = useragent.split("Version/")[1].split("Gecko")[0].split("Mobile/")[0].trim();
      };
    };
  };

  /* Remove unix detection temporarily */
  /*Detect if OS is Unix*/
  /*
  if (useragent.includes("X11")) {
    OSNAME = "Unix OS";
    Type = "Unix";
  };
  */

  /*Detect Blackberry OS*/
  if (useragent.match(/BlackBerry|BB|PlayBook/i)) {
    OSNAME = `BlackBerry OS`;
  };

  /*Detect if OS is Linux or Android*/
  if (useragent.includes("Linux")) {
    /*Detect if OS is Android*/
    if (/Android/.test(useragent)) {
      version = useragent.split("Android")[1].split(";")[0].trim();
      OSNAME = "Android OS";
      Type = "Android";
    } else {
      OSNAME = "Linux OS";
      Type = "Linux";
    };
  };

  /*Detect if OS is ChromeOS*/
  if (useragent.includes("CrOS")) {
    OSNAME = "Chrome OS";
    Type = "ChromeOS";
  };

  /*Detect if OS is ubuntu*/
  if (useragent.includes("ubuntu")) {
    OSNAME = "Ubuntu OS";
    Type = "Ubuntu";
  };

  /* Detect if OS is Playstation */
  if (useragent.includes("PlayStation")) {
    /* Detect version */
    version = useragent.split('PlayStation')[1].split(".")[0].trim().replace('PlayStation', '').replace(' ', '');
    OSNAME = "PlayStation OS";
    Type = "PlayStation";
  };

  /*Convert variables to json*/
  OS = {
    name: OSNAME,
    browser: {
      name: browserName,
      version: browserVersion,
      combined: `${browserName} ${browserVersion}`
    },
    userAgent: useragent,
    version: version,
    isIOS: IOS,
    isMobile: Mobile,
    type: Type,
    win11support: win11detect
  };

  /* Add icon code if browsericons addon is included */
  if (typeof osd.bi === 'function') {
    OS.browser.icon = osd.bi(OS.browser.name);
  }

  /*Log info to console if debug = true*/
  if (debug == true) {
    console.info("Debug set to true, printing OS info");
    console.log(`OS: ${OS.name}\nBrowser: ${OS.browser.combined}\nUserAgent: ${OS.userAgent}`);
  };

  /* Return OS */
  return OS;
};