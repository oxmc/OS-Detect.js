# OS-Detect.js
A javascript function to help detect what OS is accessing the page.

# Example
<a href="https://oxmc.github.io/OS-Detect.js/example.html">Here is a simple example</a>

# How to use

To use OS-Detect.js, first include the script in your head element:

```html
<head>
  <script type="text/javascript" src="https://oxmc.github.io/OS-Detect.js/OS-Detect.js"></script>
</head>
```

Depending on what OS you want to detect change or modify this to fit your needs,

If you want to detect for windows:
```html
<script>
  if (OS.Type == "Windows") {
    alert("OS is windows");
  } else {
    alert("OS is not windows");
  };
</script>
```

If you want to detect for Iphone, Ipad, or Ipod:
```html
<script>
  if (OS.ISIOS == "True") {
    alert("OS is IOS");
    /* Get OS name and version */
    alert(`OS is: ${OS.Name} version: ${OS.Version`);
  } else {
    alert("OS is not IOS");
  };
</script>
```

If you want to detect for MacOS:
```html
<script>
  if (OS.Type == "Mac") {
    alert("OS is MacOS");
    /* Get OS name and version */
    alert(`OS is: ${OS.Name} version: ${OS.Version}`);
  } else {
    alert("OS is not MacOS");
  };
</script>
```
