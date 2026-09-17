const data = window.portfolioData;

const $ = (selector) => document.querySelector(selector);
let activeMedia = [];
let activeMediaIndex = 0;

function createChipList(items) {
  const wrapper = document.createElement("div");
  wrapper.className = "chip-list";
  items.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "pill";
    chip.textContent = item;
    wrapper.appendChild(chip);
  });
  return wrapper;
}

function getProject() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("project");
  return data.projects.find((item) => item.slug === slug) || data.projects[0];
}

function isCaseStudyProject(project) {
  const caseStudyGroup = (data.projectGroups || []).find((group) => group.id === "cs");
  return Boolean(caseStudyGroup && Array.isArray(caseStudyGroup.projects) && caseStudyGroup.projects.includes(project.slug));
}

function getProjectMedia(project) {
  if (Array.isArray(project.media) && project.media.length) return project.media;
  if (Array.isArray(project.images) && project.images.length) return project.images.map((src) => ({ type: "image", src }));
  if (project.image) return [{ type: "image", src: project.image }];
  if (Array.isArray(project.videos) && project.videos.length) return project.videos.map((src) => ({ type: "video", src }));
  if (project.video) return [{ type: "video", src: project.video }];
  return [];
}

function getProjectDocument(project) {
  if (project.document) return project.document;
  if (project.documentUrl) return project.documentUrl;
  if (project.previewDocument) return project.previewDocument;
  if (Array.isArray(project.documents) && project.documents.length) return project.documents[0];
  return "";
}

function getCaseStudyBlocks(project) {
  if (Array.isArray(project.caseStudyBlocks) && project.caseStudyBlocks.length) {
    return project.caseStudyBlocks;
  }

  const blocks = [];
  if (project.problem) blocks.push({ type: "text", title: "1. Context & Problem", body: project.problem });
  if (project.goal) blocks.push({ type: "text", title: "2. Understanding the Problem", body: project.goal });
  if (project.approach) blocks.push({ type: "text", title: "3. Root Cause & Key Insight", body: project.approach });
  if (project.solution) blocks.push({ type: "text", title: "4. Solution Exploration & Decision", body: project.solution });
  if (project.impact) blocks.push({ type: "text", title: "5. Final Solution", body: project.impact });
  return blocks;
}

function renderDocumentPreview(project, container) {
  const documentUrl = getProjectDocument(project);
  container.innerHTML = "";
  if (!documentUrl) return false;

  const isPdf = /\.pdf(\?|#|$)/i.test(documentUrl);
  if (isPdf) {
    const iframe = document.createElement("iframe");
    iframe.src = documentUrl;
    iframe.title = `${project.title} document preview`;
    iframe.className = "case-study-document";
    iframe.loading = "lazy";
    container.appendChild(iframe);
  } else {
    const img = document.createElement("img");
    img.src = documentUrl;
    img.alt = `${project.title} document preview`;
    img.loading = "lazy";
    container.appendChild(img);
  }
  return true;
}

function renderLightboxContent() {
  const frame = $("#lightboxFrame");
  const current = activeMedia[activeMediaIndex];
  frame.innerHTML = "";
  if (!current) return;

  if (current.type === "video") {
    const video = document.createElement("video");
    video.src = current.src;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = "metadata";
    frame.appendChild(video);
  } else {
    const image = document.createElement("img");
    image.src = current.src;
    image.alt = `Project media ${activeMediaIndex + 1}`;
    frame.appendChild(image);
  }
}

function openLightbox(index) {
  if (!activeMedia.length) return;
  activeMediaIndex = (index + activeMedia.length) % activeMedia.length;
  renderLightboxContent();
  $("#lightboxPrev").style.display = activeMedia.length > 1 ? "block" : "none";
  $("#lightboxNext").style.display = activeMedia.length > 1 ? "block" : "none";
  $("#imageLightbox").classList.add("is-open");
  $("#imageLightbox").setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  $("#imageLightbox").classList.remove("is-open");
  $("#imageLightbox").setAttribute("aria-hidden", "true");
}

function showNextImage(delta) {
  if (activeMedia.length <= 1) return;
  openLightbox(activeMediaIndex + delta);
}

function renderGallery(project, imageWrap) {
  imageWrap.innerHTML = "";
  activeMedia = getProjectMedia(project);

  if (!activeMedia.length) {
    imageWrap.setAttribute("aria-hidden", "true");
    $("#lightboxPrev").style.display = "none";
    $("#lightboxNext").style.display = "none";
    return false;
  }

  $("#lightboxPrev").style.display = activeMedia.length > 1 ? "block" : "none";
  $("#lightboxNext").style.display = activeMedia.length > 1 ? "block" : "none";

  const preview = document.createElement("button");
  preview.type = "button";
  preview.className = "detail-image detail-image-button";
  preview.setAttribute("aria-label", "Open project media viewer");

  const first = activeMedia[0];
  if (first.type === "video") {
    const video = document.createElement("video");
    video.src = first.src;
    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    video.autoplay = true;
    video.preload = "metadata";
    preview.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = first.src;
    img.alt = `${project.title} preview`;
    img.loading = "lazy";
    preview.appendChild(img);
  }
  preview.addEventListener("click", () => openLightbox(0));
  imageWrap.appendChild(preview);
  return true;
}

function renderOperationsCaseStudy(project, container) {
  const study = project.caseStudy;
  if (!study) return;

  container.innerHTML = `
    <div class="operations-case-study">
      <section class="case-study-brief">
        <p class="project-kicker">${study.eyebrow}</p>
        <div class="case-study-brief-grid">
          <div>
            <h2>At a glance</h2>
            <p>${study.problem}</p>
          </div>
          <dl class="case-study-meta">
            <div><dt>Role</dt><dd>${study.role}</dd></div>
            <div><dt>Scope</dt><dd>${study.duration}</dd></div>
            <div><dt>Key outcome</dt><dd>${study.outcome}</dd></div>
          </dl>
        </div>
      </section>

      <section class="case-study-section">
        <p class="case-study-label">Discovery</p>
        <h2>Find the actual failure beneath the symptom.</h2>
        <p>${study.discovery}</p>
        <div class="case-study-insight"><span>Reframing the ask</span><p>${study.reframe}</p></div>
      </section>

      <section class="case-study-section">
        <p class="case-study-label">Decision</p>
        <h2>Choose the approach with the least friction.</h2>
        <div class="case-study-options">
          ${study.options.map((option) => `
            <article class="case-study-option${option.chosen ? " is-chosen" : ""}">
              <p class="case-study-option-status">${option.chosen ? "Chosen direction" : "Considered"}</p>
              <h3>${option.title}</h3>
              <p><strong>Value:</strong> ${option.solves}</p>
              <p><strong>Trade-off:</strong> ${option.tradeoff}</p>
            </article>`).join("")}
        </div>
      </section>

      <section class="case-study-section">
        <p class="case-study-label">Framework</p>
        <h2>Turn one fuzzy question into four clear checks.</h2>
        <div class="case-study-framework">
          ${study.framework.map((step) => `
            <article class="case-study-step">
              <span>${step.number}</span><h3>${step.title}</h3><p>${step.body}</p>
            </article>`).join("")}
        </div>
      </section>

      <section class="case-study-section">
        <p class="case-study-label">Validation</p>
        <h2>Test the logic against the mistakes it must prevent.</h2>
        <div class="case-study-table-wrap">
          <table class="case-study-table">
            <thead><tr><th>Scenario</th><th>Current stock</th><th>Incoming</th><th>Minimum floor</th><th>Naive read</th><th>System output</th></tr></thead>
            <tbody>${study.scenarios.map((scenario) => `
              <tr><th scope="row">${scenario.label}</th><td>${scenario.stock}</td><td>${scenario.incoming}</td><td>${scenario.threshold}</td><td>${scenario.naive}</td><td><strong>${scenario.result}</strong></td></tr>`).join("")}
            </tbody>
          </table>
        </div>
      </section>

      <section class="case-study-section">
        <p class="case-study-label">Operating model</p>
        <h2>Keep the source transparent. Automate the judgment.</h2>
        <ol class="case-study-flow">${study.system.map((item, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span><p>${item}</p></li>`).join("")}</ol>
      </section>

      <section class="case-study-section case-study-impact-section">
        <p class="case-study-label">Impact</p>
        <h2>Make routine checks quieter and exceptions clearer.</h2>
        <div class="case-study-impact-grid">${study.impact.map((item) => `<article><span>+</span><p>${item}</p></article>`).join("")}</div>
      </section>

      <section class="case-study-section">
        <p class="case-study-label">Next</p>
        <h2>Extend only after the foundation is trusted.</h2>
        <div class="case-study-next-grid">${study.next.map((item, index) => `<article><span>0${index + 1}</span><p>${item}</p></article>`).join("")}</div>
      </section>

      <blockquote class="case-study-takeaway">${study.takeaway}</blockquote>
    </div>`;
}

function renderProject(project) {
  document.title = `${project.title} | Portfolio`;
  const isCaseStudy = isCaseStudyProject(project);
  const outcomesSection = document.querySelector("#projectOutcomes")?.closest(".detail-section");
  if (isCaseStudy && outcomesSection) {
    outcomesSection.style.display = "none";
  }
  document.body.classList.toggle("case-study-mode", isCaseStudy);

  const logo = document.getElementById("projectLogo");
  if (project.logo) {
    logo.src = project.logo;
    logo.style.display = "block";
  } else {
    logo.style.display = "none";
  }

  const prdBtn = document.getElementById("downloadPRD");
  if (project.prd) {
    prdBtn.href = project.prd;
    prdBtn.style.display = "inline-flex";
  } else {
    prdBtn.style.display = "none";
  }
  
  $("#detailHero").hidden = false;
  $("#detailGitHubTop").textContent = project.github ? "GitHub \u2197" : "";
  $("#projectTitle").textContent = project.title;
  $("#projectSummary").textContent = project.description;
  $("#projectNotes").textContent = project.longDescription || "";
  $("#projectOutcomes").innerHTML = (project.outcomes || []).map((item) => `<li>${item}</li>`).join("");

  const stack = $("#projectStack");
  stack.innerHTML = "";
  stack.appendChild(createChipList(project.stack || []));

  const imageWrap = $("#projectImageWrap");

  if (!isCaseStudy) {
    imageWrap.style.display = "";
    renderGallery(project, imageWrap);
  } else {
    // For case study → completely remove it safely
    imageWrap.style.display = "none";
  }

  const draft = $("#caseStudyDraft");
  if (isCaseStudy) {
    draft.hidden = false;
    if (project.caseStudyType === "operations-decision-system") {
      renderOperationsCaseStudy(project, draft);
    } else {
      const blocks = project.caseStudyBlocks || getCaseStudySections(project);
      draft.innerHTML = `
      <div class="case-study-draft-grid">
        ${blocks.map((block) => {
            if (block.type === "image") {
              return `
                <div class="case-study-image-block">
                  <img src="${block.src}" alt="case study image" />
                  ${block.caption ? `<p class="image-caption">${block.caption}</p>` : ""}
                </div>
              `;
            }

            return `
              <div class="case-study-draft-block">
                <h2>${block.title}</h2>
                <p class="detail-subtitle">${block.body}</p>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
      if (project.outcomes && project.outcomes.length) {
        draft.insertAdjacentHTML(
          "beforeend",
          `
            <div class="case-study-draft-block">
              <h2>Key Outcomes</h2>
              <ul class="detail-list">${project.outcomes.map((item) => `<li>${item}</li>`).join("")}</ul>
            </div>`
        );
      }
    }
  } else {
    draft.hidden = true;
    draft.innerHTML = "";
  }

  const aside = document.querySelector(".detail-aside");
  if (aside) {
    aside.hidden = isCaseStudy;
  }

  const githubTop = $("#detailGitHubTop");
  const demo = $("#detailDemo");
  githubTop.href = project.github || "#";
  githubTop.style.display = !isCaseStudy && project.github ? "inline-flex" : "none";
  demo.style.display = project.demo ? "inline-flex" : "none";
  if (project.demo) demo.href = project.demo;
}

function setupLightbox() {
  const overlay = $("#imageLightbox");
  $("#lightboxClose").addEventListener("click", closeLightbox);
  $("#lightboxPrev").addEventListener("click", () => showNextImage(-1));
  $("#lightboxNext").addEventListener("click", () => showNextImage(1));
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (!overlay.classList.contains("is-open")) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") showNextImage(-1);
    if (event.key === "ArrowRight") showNextImage(1);
  });
}

function setupReveal() {
  const elements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.12 }
  );
  elements.forEach((el) => observer.observe(el));
}

renderProject(getProject());
setupLightbox();
setupReveal();
