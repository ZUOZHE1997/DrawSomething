const _userAgent = navigator.userAgent.toLowerCase();
const isChrome = _userAgent.indexOf("chrome") > -1;
const isSafari = _userAgent.indexOf("safari") > -1;
const isFireFox = _userAgent.indexOf("firefox") > -1;
// @ts-ignore
const isIE = !!window.ActiveXObject || "ActiveXObject" in window;

console.log(_userAgent, isChrome, isSafari, isFireFox, isIE);
export const downloadFile = sUrl => {
  console.log(sUrl);
  if (/(iP)/g.test(navigator.userAgent)) {
    return false;
  }

  if (isChrome || isSafari || isFireFox) {
    var link = document.createElement("a");
    link.href = sUrl;
    if (link.download !== undefined) {
      link.download = sUrl.substring(sUrl.lastIndexOf("/") + 1, sUrl.length);
    }

    if (document.createEvent) {
      var e = document.createEvent("MouseEvents");
      e.initEvent("click", true, true);
      link.dispatchEvent(e);
      return true;
    }
  }

  if (isIE) {
    const iframe = document.createElement("iframe");
    iframe.src = sUrl;
    iframe.id = "saveFileFrame";
    iframe.style.display = "none";
    iframe.onload = function() {
      // @ts-ignore
      document.frames["saveFileFrame"].document.execCommand("saveAs");
      // @ts-ignore
      iframe.removeNode(true);
    };
    document.body.appendChild(iframe);
    return true;
  }

  if (sUrl.indexOf("?") === -1) {
    sUrl += "?download";
  }

  window.open(sUrl, "_self");
  return true;
};

export const downloadBase64Img = () => {
  console.log(123);
};