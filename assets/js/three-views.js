// Add a view switch to each claim. Without JS, every view shows stacked inside its claim.
const claims = [...document.querySelectorAll(".claim")];

claims.forEach((claim) => {
  const panels = [...claim.querySelectorAll(".claim-view")];
  const viewSwitch = document.createElement("div");
  viewSwitch.className = "view-switch";
  viewSwitch.setAttribute("role", "tablist");
  viewSwitch.setAttribute("aria-label", "Choose a view");

  const tabs = panels.map((panel) => {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = panel.className.replace("claim-view", "view-tab");
    tab.id = `${panel.id}-tab`;
    tab.textContent = panel.dataset.shortLabel;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", panel.id);
    panel.setAttribute("role", "tabpanel");
    return tab;
  });

  function selectTab(selectedTab) {
    tabs.forEach((tab, index) => {
      const isSelected = tab === selectedTab;
      tab.setAttribute("aria-selected", String(isSelected));
      tab.tabIndex = isSelected ? 0 : -1;
      panels[index].hidden = !isSelected;
    });
  }

  viewSwitch.addEventListener("click", (event) => {
    const tab = event.target.closest("[role='tab']");
    if (tab) selectTab(tab);
  });

  viewSwitch.addEventListener("keydown", (event) => {
    const index = tabs.indexOf(document.activeElement);
    const targets = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: tabs.length - 1 };
    if (!(event.key in targets)) return;
    event.preventDefault();
    const tab = tabs[(targets[event.key] + tabs.length) % tabs.length];
    selectTab(tab);
    tab.focus();
  });

  viewSwitch.append(...tabs);
  claim.querySelector(".claim-body").prepend(viewSwitch);
  selectTab(tabs[0]);

  // Keep one claim open at a time so the page stays short on a phone.
  claim.addEventListener("toggle", () => {
    if (!claim.open) return;
    const openClaims = claims.filter((other) => other !== claim && other.open);
    openClaims.forEach((other) => {
      other.open = false;
    });
    if (openClaims.length) claim.querySelector("summary").scrollIntoView({ block: "start" });
  });
});
