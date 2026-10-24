// Enhance topic links into filter buttons. Without JS, the links jump to each topic.
const filters = document.querySelector(".topic-filters");
const sections = [...document.querySelectorAll("[data-topic]")];
const articleCount = document.querySelector("#article-count");

const filterButtons = [...filters.querySelectorAll("[data-topic-filter]")].map((link) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = link.className;
  button.textContent = link.textContent;
  button.dataset.topicFilter = link.dataset.topicFilter;
  link.replaceWith(button);
  return button;
});

function filterArticles(selectedButton) {
  const selectedTopic = selectedButton.dataset.topicFilter;
  let visibleCount = 0;

  sections.forEach((section) => {
    section.hidden = selectedTopic !== "all" && section.dataset.topic !== selectedTopic;
    if (!section.hidden) visibleCount += section.querySelectorAll("article").length;
  });

  filterButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button === selectedButton));
  });

  const topicLabel = selectedTopic === "all" ? "" : ` · ${selectedButton.textContent}`;
  articleCount.textContent = `${visibleCount} ${visibleCount === 1 ? "article" : "articles"}${topicLabel}`;
}

filters.addEventListener("click", (event) => {
  const selectedButton = event.target.closest("button[data-topic-filter]");
  if (selectedButton) filterArticles(selectedButton);
});

filterArticles(filterButtons[0]);
