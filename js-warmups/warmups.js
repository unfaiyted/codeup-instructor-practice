// Way to load different warmups into memory.

// List of files that are in the warmups folder.
const files = [
    "get-slope",
    "other",
    "new",
    "old"
] // cant access files to get files names w/out node server?

// Drop down selector
const selector = document.getElementById("selector");
// Stored last value in memory
const lastSelected = sessionStorage.getItem("lastSelected");

// console.log(lastSelected, "last")

//append a script based on the currently selected item.
const addScript = () => {
    const script = document.createElement("script");
    script.src = selector.value + ".js";
    const body = document.getElementsByTagName("body")[0];
    body.append(script);
}

for(const file of files) {
    const option = document.createElement("option");
    option.append(file)
    option.value = file;
    selector.append(option)
}

selector.value = lastSelected;
addScript()


// Other scripts will be loaded on change.
selector.addEventListener("change", (e) => {
    addScript()
    sessionStorage.setItem("lastSelected", selector.value);
});

