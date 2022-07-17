const tech = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JavaScript" },
  { label: "Node.js" },
  { label: "React" },
  { label: "Vue" },
  { label: "Next.js" },
  { label: "Mobx" },
  { label: "Redux" },
  { label: "React Router" },
  { label: "GraphQl" },
  { label: "PostgreSQL" },
  { label: "MongoDB" },
];

const refs = {
  list: document.querySelector(".js-list"),
  input: document.querySelector("#filter"),
};

refs.input.addEventListener("input", _.debounce(onFilterChange, 500));

const listItemsMarkup = createListItemsMarkup(tech)

function createListItemsMarkup(list) {
    return list.map((item) => `<li>${item.label}</li>`).join("");
}

insertMarkup(listItemsMarkup);

function onFilterChange(e) {
    const filter = e.target.value.toLowerCase()

    const filteredItems = tech.filter(t => t.label.toLowerCase().includes(filter))
    const listItemsmarkup = createListItemsMarkup(filteredItems)
    insertMarkup(listItemsmarkup);
}

function insertMarkup(markup) {
    refs.list.innerHTML = markup;
}