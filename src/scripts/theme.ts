let theme: "light" | "dark" = "light";

if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
  theme = localStorage.getItem("theme") as "light" | "dark";
} // else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//   theme = "dark";
// }
else {
  theme = "light";
}

if (theme === "light") {
  document.documentElement.classList.remove("dark");
} else {
  document.documentElement.classList.add("dark");
}

window.localStorage.setItem("theme", theme);
