async function ShowOS() {
        const OS = await DetectOS({debug: true});
        /* Variables */
        var mainContainer = document.getElementById("OS-Info");
        /* Make elements */
        var message1 = document.createElement('p');
        var message2 = document.createElement('p');
        var message3 = document.createElement('p');
        var message4 = document.createElement('p');
        var osname = document.createElement('p');
        var osversion = document.createElement('p');
        var browserversion = document.createElement('p');
        var browseragent = document.createElement('p');
        var browserinfodiv = document.createElement('div');
        var OSInfo = document.createElement('div');
        /* Add classes and html */
        //browserinfodiv.className += 'divround';
        message1.className += 'bold';
        message1.innerHTML = "Your OS is:";
        message2.className += 'bold';
        message2.innerHTML = "Your OS Version is:";
        message3.className += 'bold';
        message3.innerHTML = "Your browser is:";
        message4.className += 'bold';
        message4.innerHTML = "Your UserAgent is:";
        osname.className += 'boldgreen';
        osname.innerHTML = OS.Name;
        osversion.className += 'boldgreen';
        osversion.innerHTML = OS.Version;
        browserversion.className += 'boldgreen';
        browserversion.innerHTML = OS.Browser;
        browseragent.className += 'boldgreen';
        browseragent.innerHTML = OS.UserAgent;
        /* Add to main html */
        browserinfodiv.appendChild(message1);
        browserinfodiv.appendChild(osname);
        browserinfodiv.appendChild(message2);
        browserinfodiv.appendChild(osversion);
        browserinfodiv.appendChild(message3);
        browserinfodiv.appendChild(browserversion);
        browserinfodiv.appendChild(message4);
        browserinfodiv.appendChild(browseragent);
        OSInfo.appendChild(browserinfodiv);
        mainContainer.appendChild(OSInfo);
      };