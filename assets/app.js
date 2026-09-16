(() => {
  const data = window.MATERIALS_DATA;
  const app = document.querySelector("#app");

  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));

  const activityById = (id) => data.activities.find((activity) => activity.id === id);

  const getFiles = (material) => Array.isArray(material.files)
    ? material.files.filter((file) => file && file.driveId)
    : [];

  const drivePreview = (id) => `https://drive.google.com/file/d/${encodeURIComponent(id)}/preview?usp=sharing`;

  function materialIcon(type) {
    const t = type.toLowerCase();
    if (t.includes("poster")) return "▤";
    if (t.includes("board")) return "▱";
    if (t.includes("booklet")) return "▥";
    if (t.includes("deck")) return "▰";
    return "◇";
  }

  function renderHome() {
    app.innerHTML = `
      <section class="section activities-section" id="activities">
        <div class="section-heading">
          <div>
            <p class="eyebrow">CLASSROOM MATERIALS</p>
            <h2>Game wise repository.</h2>
          </div>
        </div>
        <div class="activity-grid">
          ${data.activities.map(activityCard).join("")}
        </div>
      </section>
    `;
    animate();
  }

  function activityCard(activity) {
    return `
      <a class="activity-card ${activity.accent}" href="#/activity/${activity.id}">
        <div class="card-copy">
          <h3>${esc(activity.title)}</h3>
          <p>${esc(activity.short)}</p>
        </div>
        <div class="card-foot">
          <span>${activity.materials.length} material sections</span>
          <span>${activity.materials.reduce((sum, m) => sum + getFiles(m).length, 0)} digital files</span>
        </div>
      </a>
    `;
  }

  function renderActivity(id) {
    const activity = activityById(id);
    if (!activity) return renderNotFound();

    app.innerHTML = `
      <section class="detail-hero ${activity.accent}">
        <div class="breadcrumb">
          <a href="#/">Home</a><span>/</span><strong>${esc(activity.title)}</strong>
        </div>
        <div class="detail-heading">
          <span class="detail-number" aria-hidden="true">◆</span>
          <div>
            <p class="eyebrow">MATH GAME</p>
            <h1>${esc(activity.title)}</h1>
            <p>${esc(activity.description)}</p>
          </div>
        </div>
      </section>

      <section class="section material-section">
        <div class="section-heading">
          <div>
            <p class="eyebrow">MATERIALS</p>
            <h2>Digital resources</h2>
          </div>
        </div>

        <div class="material-grid">
          ${activity.materials.map((material, index) => materialCard(material, activity, index)).join("")}
        </div>

        ${activity.note ? `<aside class="manual-note"><span>NOTE</span><p>${esc(activity.note)}</p></aside>` : ""}
      </section>
    `;
    animate();
  }

  function materialCard(material, activity, index) {
    const files = Array.isArray(material.files) ? material.files : [];
    const mappedFiles = getFiles(material);

    return `
      <article class="material-card">
        <div class="material-card-top">
          <span class="material-index">${String(index + 1).padStart(2, "0")}</span>
          <span class="material-icon" aria-hidden="true">${materialIcon(material.type)}</span>
        </div>

        <div class="material-body">
          <div class="material-type">${esc(material.type)}</div>
          <h3>${esc(material.name)}</h3>
          <div class="quantity">${esc(material.quantity)}</div>
          <p>${esc(material.details)}</p>
        </div>

        <div class="file-list">
          ${files.length === 0 ? `
            <div class="file-empty">No digital files listed yet.</div>
          ` : files.map((file, fileIndex) => fileRow(file, material, activity, fileIndex)).join("")}
        </div>

        <div class="material-file-summary">
          <span>${mappedFiles.length} of ${files.length} digital files mapped</span>
        </div>
      </article>
    `;
  }

  function fileRow(file, material, activity, index) {
    const mapped = Boolean(file.driveId);
    const fileName = file.name || `Digital file ${index + 1}`;

    return `
      <div class="file-row">
        <div class="file-info">
          <span class="file-number">${String(index + 1).padStart(2, "0")}</span>
          <div>
            <strong>${esc(fileName)}</strong>
            <small>${mapped ? "PDF · available" : "PDF · not mapped"}</small>
          </div>
        </div>

        ${mapped ? `
        <div class="file-actions">
          <a
            class="file-link preview-link"
            href="${drivePreview(file.driveId)}"
            target="_blank"
            rel="noopener"
          >
            Preview
          </a>
        </div>
        ` : `
          <span class="file-pending">Pending</span>
        `}
      </div>
    `;
  }

  function renderNotFound() {
    app.innerHTML = `
      <section class="page-intro not-found">
        <p class="eyebrow">404</p>
        <h1>That page isn't <em>in the kit.</em></h1>
        <p>Use the home page to return to the materials library.</p>
        <a class="button button-primary" href="#/">Back home</a>
      </section>
    `;
  }

  function render() {
    const hash = location.hash || "#/";
    const parts = hash.replace(/^#\/?/, "").split("/");

    if (parts[0] === "activity" && parts[1]) {
      renderActivity(parts[1]);
    } else {
      renderHome();
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function animate() {
    document.querySelectorAll(".reveal").forEach((el, i) => {
      el.style.animationDelay = `${Math.min(i * 70, 350)}ms`;
    });
  }

  window.addEventListener("hashchange", render);
  render();
})();
