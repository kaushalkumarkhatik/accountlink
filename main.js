const btn = document.querySelector(".btn");

const sharedta = {
  title: "techKK",
  text: "Projects Source Code Link...",
  url: "https://accountprofile.netlify.app/"
}


btn.addEventListener("click", async ()=> {
  try {
    await navigator.share(sharedta)
  } catch (e) {
    console.log(e)
  }
})
