import "bootstrap";
import "./style.css";

const PRONOUNS = ["the", "our"];
const ADJECTIVES = ["great", "big"];
const NOUNS = ["jogger", "racoon"];
const EXTENSIONS = [".com", ".net", ".us", ".io"];

function generateDomains() {
  const domains = [];

  for (const pronoun of PRONOUNS) {
    for (const adjective of ADJECTIVES) {
      for (const noun of NOUNS) {
        for (const extension of EXTENSIONS) {
          domains.push(`${pronoun}${adjective}${noun}${extension}`);
        }
      }
    }
  }

  return domains;
}

function renderDomains(domains) {
  const domainCount = document.querySelector("#domainCount");
  const domainList = document.querySelector("#domainList");

  if (!domainCount || !domainList) return;

  domainCount.textContent = `${domains.length} domains generated automatically`;
  domainList.innerHTML = domains
    .map((domain) => `<li class="domain-card">${domain}</li>`)
    .join("");
}

window.addEventListener("load", () => {
  renderDomains(generateDomains());
});
