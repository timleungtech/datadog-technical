const toggleNav = () => {
  const navDiv = document.getElementById("nav-mobile")
  const contentDiv = document.getElementById("content")
  const footerDiv = document.getElementById("footer")

  if (navDiv.style.display === "flex") {
    navDiv.style.display = "none"
    contentDiv.style.display = "block"
    footerDiv.style.display = "block"
  } else {
    navDiv.style.display = "flex"
    contentDiv.style.display = "none"
    footerDiv.style.display = "none"
  }
}