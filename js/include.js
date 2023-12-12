function include_portfolio_HTML() {
    let els = document.querySelectorAll("[include-html]");
    for (const el of els) {
      let fileUrl = el.getAttribute("include-html");
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          if (xhr.status == 200 || xhr.status == 304) { 
            el.innerHTML = xhr.responseText;
            noa_tm_modalbox_portfolio();
            noa_tm_projects();
            noa_tm_portfolio();
            noa_tm_data_images();
          }
          else if (xhr.status == 404) {el.innerHTML = "Page not found.";}
          el.removeAttribute("include-html");
        }
      }      
      xhr.open("GET", fileUrl, true);
      xhr.send();
    }
  };

  include_portfolio_HTML();
