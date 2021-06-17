function DetectOS () {
  HTMLDocument.prototype.e = document.getElementById;
        var el_down = document.e("GFG_DOWN");
		var el_down2 = document.e("GFG_DOWN2");
        var Name = "Not known";
		setTimeout(GetOS, 0500);
		function GetOS () {
          if (navigator.appVersion.indexOf("Win") != -1) Name = 
            "Windows OS";
          if (navigator.appVersion.indexOf("Mac") != -1) Name = 
            "MacOS";
          if (navigator.appVersion.indexOf("X11") != -1) Name = 
            "UNIX OS";
          if (navigator.appVersion.indexOf("Linux") != -1) Name = 
            "Linux OS";
   
		  navigator.sayswho= (function(){
            var ua= navigator.userAgent, tem, 
            M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if(/trident/i.test(M[1])){
              tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
              return 'IE '+(tem[1] || '');
            }
            if(M[1]=== 'Chrome'){
              tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
              if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
            }
            M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
            if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
            return M.join(' ');
        })();

        console.log("User is running: " + navigator.sayswho + " On: " + Name); // Log to console chrome version
		el_down.innerHTML = Name;
		// el_down2.innerHTML = navigator.sayswho;
		}
}
