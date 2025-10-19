// Highlight the active nav link based on the current page filename
(function(){
  const here = location.pathname.split("/").pop() || "hoichi.html";
  document.querySelectorAll(".nav a").forEach(a=>{
    const target = a.getAttribute("href");
    if (target === here) a.classList.add("active");
  });
})();

// Optional: click to gently enlarge any image
document.addEventListener("click", (e)=>{
  const img = e.target.closest("img");
  if(!img) return;
  img.style.transition = "transform 180ms ease";
  img.style.transform = img.style.transform ? "" : "scale(1.03)";
  setTimeout(()=>{ img.style.transform = ""; }, 180);
});
