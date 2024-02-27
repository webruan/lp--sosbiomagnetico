function loadTags() { 
  // Start - Tag Manager -> Owner 
  (function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
      'gtm.start':
        new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-WG9J4ZP');

  const tagManagerIframe = document.createElement('iframe');
  const tagManagerNoscript = document.createElement('noscript');

  tagManagerIframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-WG9J4ZP';
  tagManagerIframe.width = '0';
  tagManagerIframe.height = '0';
  tagManagerIframe.style = 'display:none;visibility:hidden';
  
  document.body.appendChild(tagManagerNoscript).appendChild(tagManagerIframe);
  // End - Tag Manager -> Owner

  // Start - Tag Manager -> @webruan
  (function (w, d, s, l, i) {
  w[l] = w[l] || []; w[l].push({
    'gtm.start':
      new Date().getTime(), event: 'gtm.js'
  }); var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
      'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-5PP4449K');

  const GTMIframeRuan = document.createElement('iframe');

  GTMIframeRuan.src = 'https://www.googletagmanager.com/ns.html?id=GTM-5PP4449K';
  GTMIframeRuan.width = '0';
  GTMIframeRuan.height = '0';
  GTMIframeRuan.style = 'display:none;visibility:hidden';

  document.body.appendChild(tagManagerNoscript).appendChild(GTMIframeRuan);
  // End - Tag Manager -> @webruan
  
  // Start - Bootstrap Icons
  const iconElement = document.createElement('link');
  iconElement.href = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css';
  iconElement.rel = 'stylesheet';
  iconElement.integrity = 'sha512-ZnR2wlLbSbr8/c9AgLg3jQPAattCUImNsae6NHYnS9KrIwRdcY9DxFotXhNAKIKbAXlRnujIqUWoXXwqyFOeIQ==';
  iconElement.crossOrigin = 'anonymous';
  iconElement.referrerPolicy = 'no-referrer';

  document.head.appendChild(iconElement);
  // End - Bootstrap Icons

  // Start - Clarity -> @webruan
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "ickjmp1vxy");
  // End - Clarity -> @webruan

  window.removeEventListener('scroll', loadTags);
}

window.addEventListener('scroll', loadTags);
