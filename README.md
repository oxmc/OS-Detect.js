# OS-Detect.js
A javascript function to help detect what OS is accessing the page.

# Example
<a href="https://osd.oxmc.xyz/example.html">Here is a simple example</a>

# How to use

To use OS-Detect.js, first include the script in your head element:

```html
<head>
  <script type="text/javascript" src="https://osd.oxmc.xyz/OS-Detect.min.js"></script>
</head>
```
## Get OS

Depending on what OS you want to detect change or modify this to fit your needs,

If you want to detect for windows:
```html
<script>
  async function ShowOS() {
    const OS = await DetectOS({debug: true});
    if (OS.Type == "Windows") {
      alert("OS is windows");
    } else {
      alert("OS is not windows");
    };
  };
</script>
```

If you want to detect for Iphone, Ipad, or Ipod:
```html
<script>
  async function ShowOS() {
    const OS = await DetectOS({debug: true});
    if (OS.ISIOS == "True") {
      alert("OS is IOS");
    } else {
      alert("OS is not IOS");
    };
  };
</script>
```

If you want to detect for MacOS:
```html
<script>
  async function ShowOS() {
    const OS = await DetectOS({debug: true});
    if (OS.Type == "Mac") {
      alert("OS is MacOS");
    } else {
      alert("OS is not MacOS");
    };
  };
</script>
```
## Get OS Version

If you want to detect the OS version:
```html
<script>
  async function ShowOS() {
    const OS = await DetectOS({debug: true});
    /* Get OS name and version */
    alert(`OS is: ${OS.Name} version: ${OS.Version}`);
  };
</script>
```
## Options:

OSDetect only has 1 option as of now, debug: true or false

Prints the OS info in the console:
```html
<script>
  async function ShowOS() {
    const OS = await DetectOS({debug: true});
    //In console:
    /*
    Debug set to true, printing OS info OS-Detect.min.js:1:5101
    OS: Windows OS
    Browser: Firefox 97
    UserAgent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:97.0) Gecko/20100101 Firefox/97.0 OS-Detect.min.js:1:5152
    */
  };
</script>
```
## Detect OS without button or function call:

You can use an async function like this:
```html
function ShowOSInfo(OS) {
  console.log(`OS: ${OS.Name}\nBrowser: ${OS.Browser}\nUserAgent: ${OS.UserAgent}`);
};
(async () => {
  var info = await DetectOS({debug: true});
  console.log(info);
  //Deal with info here, call function to handle data etc.
  //function call:
  ShowOSInfo(info);
})();
```
