function setActiveItems(e,t){e.forEach(((e,i)=>{e.classList.contains("arrow")||(i<t?(e.classList.add("active"),e.style.filter="blur(0px)"):(e.classList.remove("active"),e.style.filter="blur(4px)"))}))}function determineActiveItemCount(e){return e<=425?1:e<=766?3:2}function updateCarousel(){const e=document.querySelector(".slider"),t=e.querySelectorAll(".item"),i=determineActiveItemCount(screen.width);setActiveItems(t,i),t.length>=i&&(e.appendChild(t[0].cloneNode(!0)),e.removeChild(t[0]))}function prevSlide(){const e=document.querySelector(".slider"),t=e.querySelectorAll(".item"),i=determineActiveItemCount(screen.width);if(t.length>=i+1){const s=Array.from(t).slice(0,i+1),n=t[i-1].previousElementSibling;s.forEach(((e,t)=>{e.classList.contains("arrow")||(e.classList.remove("active"),e.style.filter="blur(4px)")})),s[i-1].classList.add("active"),s[i-1].style.filter="blur(0px)",e.insertBefore(s[i-1].cloneNode(!0),t[0].nextSibling),e.removeChild(s[i-1]),n&&!n.classList.contains("arrow")&&(n.classList.add("active"),n.style.filter="blur(0px)")}updateCarousel()}function nextSlide(){const e=document.querySelector(".slider"),t=e.querySelectorAll(".item"),i=determineActiveItemCount(screen.width);if(t.length>=i+1){const s=Array.from(t).slice(0,i+1),n=t[i].nextElementSibling;s.forEach(((e,t)=>{e.classList.contains("arrow")||(e.classList.remove("active"),e.style.filter="blur(4px)")})),s[i].classList.add("active"),s[i].style.filter="blur(0px)",e.insertBefore(s[i].cloneNode(!0),t[0].nextSibling),e.removeChild(s[i]),n&&!n.classList.contains("arrow")&&(n.classList.add("active"),n.style.filter="blur(0px)")}updateCarousel()}function setActiveFeedbacks(e,t){e.forEach(((e,i)=>{e.classList.contains("arrow")||(i<t?(e.classList.add("active"),e.style.display="flex"):(e.classList.remove("active"),e.style.display="none"))}))}function determineActiveFeedbackCount(e){return e<=768?1:2}function updateFeedback(){const e=document.querySelector(".feedbacks"),t=e.querySelectorAll(".item"),i=determineActiveFeedbackCount(screen.width);setActiveFeedbacks(t,i),t.length>=i&&(e.appendChild(t[0].cloneNode(!0)),e.removeChild(t[0]))}function prevFeedBack(){const e=document.querySelector(".feedbacks"),t=e.querySelectorAll(".item"),i=determineActiveFeedbackCount(screen.width);if(t.length>=i+1){const s=Array.from(t).slice(0,i+1),n=t[i-1].previousElementSibling;s.forEach(((e,t)=>{e.classList.contains("arrow")||(e.style.display="none")})),s[i-1].style.display="flex",e.insertBefore(s[i-1].cloneNode(!0),t[0].nextSibling),e.removeChild(s[i-1]),n&&!n.classList.contains("arrow")&&(n.style.display="flex")}updateFeedback()}function nextFeedBack(){const e=document.querySelector(".feedbacks"),t=e.querySelectorAll(".item"),i=determineActiveFeedbackCount(screen.width);if(t.length>=i+1){const s=Array.from(t).slice(0,i+1),n=t[i].nextElementSibling;s.forEach(((e,t)=>{e.classList.contains("arrow")||(e.style.display="none")})),s[i].style.display="flex",e.insertBefore(s[i].cloneNode(!0),t[0].nextSibling),e.removeChild(s[i]),n&&!n.classList.contains("arrow")&&(n.style.display="flex")}updateFeedback()}window.addEventListener("DOMContentLoaded",updateCarousel),window.addEventListener("resize",updateCarousel),window.addEventListener("DOMContentLoaded",updateFeedback),window.addEventListener("resize",updateFeedback);