# OS-Detect.js
A javascript function to help detect what OS is accessing the page.

# Example
<a href="https://osd.oxmc.xyz/example.html">Here is a simple example</a>

# How to use

To use OS-Detect.js, first include the script in your head element:

```html
<head>
  <script type="text/javascript" src="https://osd.oxmc.xyz/OS-Detect.js"></script>
</head>
```

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
----- Get OS Version -----

If you want to detect the OS version:
```html
<script>
  async function ShowOS() {
    const OS = await DetectOS({debug: true});
    /* Get OS name and version */
    alert(`OS is: ${OS.Name} version: ${OS.Version}`);
  };
</script>
