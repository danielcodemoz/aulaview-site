(function () {
  const html = document.documentElement;
  html.classList.add("js");

  const dict = {
    pt: {
      skip: "Saltar para o conteúdo",
      navFeatures: "Funcionalidades",
      navGallery: "Galeria",
      navHow: "Como funciona",
      navReq: "Requisitos",
      navDownload: "Transferir",
      navFaq: "Perguntas",
      ctaDownload: "Transferir",
      ctaSee: "Ver a consola",
      themeToLight: "Mudar para o tema claro",
      themeToDark: "Mudar para o tema escuro",
      menuOpen: "Abrir menu",
      menuClose: "Fechar menu",
      heroKicker: "Laboratório de informática · Windows",
      heroTitleA: "A sala inteira,",
      heroTitleB: "num só ecrã.",
      heroLead: "O AulaView é a consola do professor para os computadores da sala. Veja os ecrãs ao vivo, assuma o controlo de um PC, cubra o ecrã da turma e troque ficheiros — o servidor fica no seu computador, na rede local, sem nuvem.",
      factWin: "Windows 10 ou posterior, 64 bits",
      factLocal: "Rede local, sem nuvem",
      factPort: "Porta TCP 19544",
      heroCaption: "Consola do professor, com a grelha da sala. Interface reconstruída a partir do programa real.",
      stripView: "Ver ecrã",
      stripControl: "Assumir controlo",
      stripLock: "Bloquear",
      stripBlank: "Ecrã em branco",
      stripMsg: "Mensagem",
      stripFiles: "Ficheiros",
      stripInstall: "Programas",
      stripPresent: "Apresentar",
      stripShot: "Capturar",
      stripPower: "Energia",
      stripSearch: "Procurar PCs",
      featuresKicker: "O que o professor faz da consola",
      featuresTitle: "A aula, sem andar entre as secretárias.",
      featuresLead: "Feito para uma sala de informática em Windows: a consola no PC do professor e um agente em cada computador do aluno.",
      fGridT: "Grelha de ecrãs ao vivo",
      fGrid: "Miniaturas da sala, com pesquisa, filtros e o estado de cada PC. A ordem dos cartões fica guardada.",
      fControlT: "Controlo remoto",
      fControl: "Abra um ecrã e assuma o rato e o teclado. Se o PC se religar durante o controlo, a sessão retoma.",
      fLockT: "Bloquear e desbloquear",
      fLock: "Cubra todos os monitores e bloqueie o teclado e o rato, com uma mensagem sua. Desbloqueie quando a turma puder continuar. O Windows mantém Ctrl+Alt+Del.",
      fBlankT: "Ecrã em branco",
      fBlank: "O ambiente de trabalho desaparece. O aluno vê a mensagem do professor — por exemplo «Olhe para o professor» — em vez do que estava aberto.",
      fMsgT: "Mensagens aos alunos",
      fMsg: "Envie um aviso a um computador ou a vários. A janela de conversa abre à frente e o aluno pode responder.",
      fFilesT: "Enviar e recolher ficheiros",
      fFiles: "Distribua materiais e recolha trabalhos — Word, PDF, imagens e outros tipos — com verificação SHA-256. Cada ficheiro até 64 MB.",
      fUploadT: "Janela de envio do aluno",
      fUpload: "Peça a entrega: a janela «Entregar trabalho» abre nos PCs escolhidos. Os ficheiros ficam agrupados por computador.",
      fShotT: "Capturas de ecrã",
      fShot: "Guarde uma imagem do ecrã de um aluno ou de vários, para consultar mais tarde na consola.",
      fPowerT: "Ligar e desligar",
      fPower: "Ligue computadores com Wake-on-LAN, ou desligue, reinicie, suspenda e termine a sessão nos PCs selecionados.",
      fFindT: "Procurar e Adicionar",
      fFind: "O agente anuncia-se na rede. Em Procurar computadores, marque os PCs desta sala e clique em Adicionar.",
      fManyT: "Seleção de vários PCs",
      fMany: "Marque vários cartões. As ações da barra aplicam-se à seleção — ou a todos os PCs online, quando nada está marcado.",
      fInstallT: "Instalar e remover programas",
      fInstall: "Nos PCs selecionados, instale um programa ou desinstale-o — de forma normal ou forçada.",
      fPresentT: "Modo Apresentar",
      fPresent: "Os diapositivos do professor, em PDF ou PPTX, ficam sincronizados ao vivo nos ecrãs dos alunos.",
      galleryKicker: "A consola",
      galleryTitle: "O mesmo programa, em claro e em escuro.",
      galleryLead: "Estas imagens seguem a interface real da consola AulaView 1.4.0: cores, tipo de letra, barra de ações e a janela Procurar computadores. Os computadores da grelha são de exemplo.",
      galleryTabs: "Vistas da consola",
      zoomHint: "Clique para ampliar",
      g1: "Visão da sala, tema escuro",
      g2: "Visão da sala, tema claro",
      g3: "Procurar computadores e Adicionar",
      g4: "Controlo remoto de um PC",
      close: "Fechar",
      howKicker: "Três passos",
      howTitle: "Como a sala fica ligada.",
      howLead: "Não há servidor na nuvem. O PC do professor é o servidor, e a consola deve ficar aberta durante a aula.",
      s1t: "Agente em cada PC da sala",
      s1: "Execute o instalador do agente como administrador. No fim, o serviço fica em execução.",
      s2t: "Consola no PC do professor",
      s2: "Instale a consola e abra o AulaView. A palavra-passe, as salas e os computadores já adicionados mantêm-se numa atualização.",
      s3t: "Procurar e Adicionar",
      s3: "Clique em Procurar computadores, marque os PCs desta sala e clique em Adicionar. Cada computador entra na grelha depois de ser aceite.",
      reqKicker: "Windows",
      reqTitle: "O que a sala precisa.",
      reqTeacher: "PC do professor",
      reqStudents: "PCs dos alunos",
      r1: "Windows 10 ou posterior, 64 bits (x64).",
      r2: "A consola AulaView instalada. Ela própria é o servidor da sala.",
      r3: "A consola aberta durante a aula. Trancá-la não desliga o servidor.",
      r4: "Firewall do Windows a permitir o AulaView na porta TCP 19544.",
      r5: "Windows 10 ou posterior, 64 bits, em cada computador.",
      r6: "Agente AulaView instalado como administrador.",
      r7: "A mesma rede local que o PC do professor.",
      r8: "Wake-on-LAN na BIOS e na placa de rede, se quiser ligar os PCs à distância.",
      r9: "Conta de aluno sem privilégios de administrador — é o que a documentação da sala recomenda.",
      dlKicker: "Instaladores",
      dlTitle: "Transferir o AulaView",
      dlLead: "Versão 1.4.0: a consola do professor e o agente do aluno. O nome, o tamanho e o SHA-256 vêm de downloads.json.",
      dlConsole: "Consola do professor",
      dlAgent: "Agente do aluno",
      dlConsoleHint: "Instalar no PC do professor, por cima de uma versão anterior se já existir.",
      dlAgentHint: "Instalar em cada PC da sala, como administrador. Atualizar não pede /RESET.",
      dlSoon: "Disponível em breve",
      dlGet: "Transferir",
      dlVersion: "Versão",
      dlSize: "Tamanho",
      dlSizeLater: "O tamanho aparece quando o ficheiro estiver publicado.",
      dlCopy: "Copiar SHA-256",
      dlCopied: "SHA-256 copiado",
      dlMissing: "Não foi possível ler downloads.json.",
      dlCheck: "A verificar o ficheiro…",
      faqKicker: "Perguntas",
      faqTitle: "Antes de instalar.",
      q1: "Preciso de internet ou de um servidor na nuvem?",
      a1: "Não. O PC do professor é o servidor. Os computadores da sala falam com a consola na rede local, na porta TCP 19544. Não há PHP, base de dados nem serviço na nuvem.",
      q2: "Que Windows é necessário?",
      a2: "Windows 10 ou posterior, de 64 bits, tanto no PC do professor como nos PCs dos alunos. O instalador do agente recusa um Windows de 32 bits ou anterior ao Windows 10.",
      q3: "Para quantos computadores serve?",
      a3: "Foi feito para uma sala de informática. A versão 1.4.0 acompanha uma turma na casa dos 22 PCs, e o teste de carga usou 25 computadores simulados.",
      q4: "Os instaladores têm assinatura digital?",
      a4: "Ainda não. O SmartScreen do Windows pode mostrar «O Windows protegeu o seu PC». Em Mais informações pode escolher Executar mesmo assim. Confira o SHA-256 publicado nesta página.",
      q5: "Como confirmo que o instalador é o da versão 1.4.0?",
      a5: "Os dois ficheiros estão em /downloads/. Compare o SHA-256 do ficheiro descarregado com o valor nesta página.",
      q6: "O aluno consegue sair com Ctrl+Alt+Del?",
      a6: "Sim. Nenhum programa normal consegue bloquear Ctrl+Alt+Del. O bloqueio cobre o ecrã e o teclado e o rato, e o Windows mantém essa combinação.",
      q7: "Onde ficam os trabalhos dos alunos?",
      a7: "Na consola, os envios pela janela de entrega ficam agrupados por PC. A recolha e o envio verificam o SHA-256. Cada ficheiro pode ter no máximo 64 MB.",
      footCredit: "Desenvolvido por Danielpro",
      footRights: "© 2026 Daniel Marcos. AulaView.",
      footTop: "Voltar ao topo"
    },
    en: {
      skip: "Skip to content",
      navFeatures: "Features",
      navGallery: "Gallery",
      navHow: "How it works",
      navReq: "Requirements",
      navDownload: "Download",
      navFaq: "FAQ",
      ctaDownload: "Download",
      ctaSee: "See the console",
      themeToLight: "Switch to light theme",
      themeToDark: "Switch to dark theme",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      heroKicker: "Computer lab · Windows",
      heroTitleA: "The whole lab,",
      heroTitleB: "on one screen.",
      heroLead: "AulaView is the teacher console for the computers in a lab. Watch live screens, take control of a PC, blank the class and exchange files — the server is your computer, on the local network, with no cloud.",
      factWin: "Windows 10 or later, 64-bit",
      factLocal: "Local network, no cloud",
      factPort: "TCP port 19544",
      heroCaption: "Teacher console, classroom grid. Interface rebuilt from the real application.",
      stripView: "View screen",
      stripControl: "Take control",
      stripLock: "Lock",
      stripBlank: "Blank screen",
      stripMsg: "Message",
      stripFiles: "Files",
      stripInstall: "Programs",
      stripPresent: "Present",
      stripShot: "Screenshot",
      stripPower: "Power",
      stripSearch: "Search PCs",
      featuresKicker: "From the teacher console",
      featuresTitle: "Teach the room without leaving your desk.",
      featuresLead: "Built for a Windows computer lab: the console on the teacher PC and an agent on every student computer.",
      fGridT: "Live screen grid",
      fGrid: "Thumbnails of the room, with search, filters and each PC’s status. Card order is remembered.",
      fControlT: "Remote control",
      fControl: "Open a screen and take the mouse and keyboard. If the PC reconnects during control, the session resumes.",
      fLockT: "Lock and unlock",
      fLock: "Cover every monitor and block the keyboard and mouse, with your own message. Unlock when the class can continue. Windows still keeps Ctrl+Alt+Del.",
      fBlankT: "Blank screen",
      fBlank: "The desktop disappears. The student sees the teacher’s message — for example “Look at the teacher” — instead of whatever was open.",
      fMsgT: "Messages to students",
      fMsg: "Send a note to one computer or to several. The chat window comes to the front, and the student can reply.",
      fFilesT: "Send and collect files",
      fFiles: "Hand out materials and collect work — Word, PDF, images and other types — with a SHA-256 check. Up to 64 MB per file.",
      fUploadT: "Student upload window",
      fUpload: "Ask for the work: the “Hand in work” window opens on the chosen PCs. Files are grouped by computer.",
      fShotT: "Screenshots",
      fShot: "Save a picture of one student’s screen, or of several, and look at it later in the console.",
      fPowerT: "Power on and off",
      fPower: "Wake computers with Wake-on-LAN, or shut down, restart, sleep and log off the selected PCs.",
      fFindT: "Search and Add",
      fFind: "The agent announces itself on the network. In Search for computers, tick this room’s PCs and click Add.",
      fManyT: "Select several PCs",
      fMany: "Tick several cards. Toolbar actions apply to the selection — or to every online PC when nothing is selected.",
      fInstallT: "Install and remove programs",
      fInstall: "On the selected PCs, install a program or uninstall it — the normal way, or forced.",
      fPresentT: "Present mode",
      fPresent: "The teacher’s slides, as PDF or PPTX, stay synced live on the student screens.",
      galleryKicker: "The console",
      galleryTitle: "The same program, in light and in dark.",
      galleryLead: "These pictures follow the real AulaView 1.4.0 console: colours, type, action bar and the Search for computers window. The computers in the grid are examples.",
      galleryTabs: "Console views",
      zoomHint: "Click to enlarge",
      g1: "Classroom view, dark theme",
      g2: "Classroom view, light theme",
      g3: "Search for computers and Add",
      g4: "Remote control of one PC",
      close: "Close",
      howKicker: "Three steps",
      howTitle: "How the lab gets connected.",
      howLead: "There is no cloud server. The teacher PC is the server, and the console should stay open during the lesson.",
      s1t: "Agent on every lab PC",
      s1: "Run the agent installer as administrator. When it finishes, the service is running.",
      s2t: "Console on the teacher PC",
      s2: "Install the console and open AulaView. A password, rooms and computers already added stay in place when you update.",
      s3t: "Search and Add",
      s3: "Click Search for computers, tick the PCs in this room and click Add. Each computer joins the grid after it is accepted.",
      reqKicker: "Windows",
      reqTitle: "What the lab needs.",
      reqTeacher: "Teacher PC",
      reqStudents: "Student PCs",
      r1: "Windows 10 or later, 64-bit (x64).",
      r2: "The AulaView console installed. It is the room server.",
      r3: "The console open during the lesson. Locking it does not stop the server.",
      r4: "Windows Firewall allowing AulaView on TCP port 19544.",
      r5: "Windows 10 or later, 64-bit, on every computer.",
      r6: "AulaView agent installed as administrator.",
      r7: "The same local network as the teacher PC.",
      r8: "Wake-on-LAN in the BIOS and on the network adapter, if you want to power PCs on remotely.",
      r9: "A student account without administrator rights — that is what the lab notes recommend.",
      dlKicker: "Installers",
      dlTitle: "Download AulaView",
      dlLead: "Version 1.4.0: the teacher console and the student agent. The name, size and SHA-256 come from downloads.json.",
      dlConsole: "Teacher console",
      dlAgent: "Student agent",
      dlConsoleHint: "Install on the teacher PC, over an older version if one is already there.",
      dlAgentHint: "Install on every lab PC, as administrator. An update does not need /RESET.",
      dlSoon: "Available soon",
      dlGet: "Download",
      dlVersion: "Version",
      dlSize: "Size",
      dlSizeLater: "The size appears once the file is published.",
      dlCopy: "Copy SHA-256",
      dlCopied: "SHA-256 copied",
      dlMissing: "Could not read downloads.json.",
      dlCheck: "Checking the file…",
      faqKicker: "Questions",
      faqTitle: "Before you install.",
      q1: "Do I need the internet or a cloud server?",
      a1: "No. The teacher PC is the server. Lab computers talk to the console on the local network, on TCP port 19544. There is no PHP, database or cloud service.",
      q2: "Which Windows is required?",
      a2: "Windows 10 or later, 64-bit, on the teacher PC and on the student PCs. The agent installer refuses 32-bit Windows or anything older than Windows 10.",
      q3: "How many computers does it cover?",
      a3: "It is made for one computer lab. Version 1.4.0 follows a class of about 22 PCs, and the load test used 25 simulated computers.",
      q4: "Are the installers digitally signed?",
      a4: "Not yet. Windows SmartScreen may say “Windows protected your PC”. Under More info you can choose Run anyway. Check the SHA-256 published on this page.",
      q5: "How do I confirm the installer is version 1.4.0?",
      a5: "Both files are in /downloads/. Compare the SHA-256 of the downloaded file with the value on this page.",
      q6: "Can a student leave with Ctrl+Alt+Del?",
      a6: "Yes. No ordinary program can block Ctrl+Alt+Del. Lock covers the screen and the keyboard and mouse, and Windows keeps that combination.",
      q7: "Where does student work go?",
      a7: "In the console, files sent through the hand-in window are grouped by PC. Collect and send both check SHA-256. Each file can be at most 64 MB.",
      footCredit: "Built by Danielpro",
      footRights: "© 2026 Daniel Marcos. AulaView.",
      footTop: "Back to top"
    }
  };

  const storedLang = localStorage.getItem("av-lang");
  const storedTheme = localStorage.getItem("av-theme");
  let lang = storedLang === "en" || storedLang === "pt" ? storedLang : "pt";
  let theme = storedTheme === "light" || storedTheme === "dark"
    ? storedTheme
    : (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

  function t(key) { return (dict[lang] && dict[lang][key]) || dict.pt[key] || key; }

  function applyLang() {
    html.lang = lang === "pt" ? "pt-MZ" : "en";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      el.alt = t(el.dataset.i18nAlt);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.dataset.i18nAria));
    });
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
    });
    const title = lang === "pt"
      ? "AulaView — consola do professor para o laboratório"
      : "AulaView — teacher console for the computer lab";
    const desc = t("heroLead");
    document.title = title;
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", desc);
    const ogt = document.querySelector('meta[property="og:title"]');
    const ogd = document.querySelector('meta[property="og:description"]');
    const ogl = document.querySelector('meta[property="og:locale"]');
    if (ogt) ogt.setAttribute("content", title);
    if (ogd) ogd.setAttribute("content", desc);
    if (ogl) ogl.setAttribute("content", lang === "pt" ? "pt_MZ" : "en_US");
    applyTheme();
    if (window.__avDownloads) renderDownloads(window.__avDownloads);
  }

  function applyTheme() {
    html.classList.toggle("light", theme === "light");
    const btn = document.querySelector("[data-theme-toggle]");
    if (btn) {
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      btn.setAttribute("aria-label", theme === "dark" ? t("themeToLight") : t("themeToDark"));
      const use = btn.querySelector("use");
      if (use) use.setAttribute("href", theme === "dark" ? "#i-sun" : "#i-moon");
    }
    const shot = document.querySelector("[data-shot]");
    if (shot) {
      const next = theme === "light" ? shot.dataset.light : shot.dataset.dark;
      if (next && shot.getAttribute("src") !== next) shot.src = next;
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#f7f8fa" : "#0b0d0f");
    syncShot();
  }

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      lang = btn.dataset.lang;
      localStorage.setItem("av-lang", lang);
      applyLang();
    });
  });
  document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("av-theme", theme);
    applyTheme();
  });

  const menu = document.querySelector("[data-menu]");
  const panel = document.querySelector("[data-mobile-nav]");
  function setMenu(open) {
    if (!menu || !panel) return;
    panel.classList.toggle("open", open);
    menu.setAttribute("aria-expanded", open ? "true" : "false");
    menu.setAttribute("aria-label", open ? t("menuClose") : t("menuOpen"));
    const use = menu.querySelector("use");
    if (use) use.setAttribute("href", open ? "#i-close" : "#i-menu");
  }
  menu?.addEventListener("click", () => setMenu(!panel.classList.contains("open")));
  panel?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

  const header = document.querySelector(".site-header");
  const onScroll = () => header?.classList.toggle("is-stuck", scrollY > 8);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  const shotTabs = [...document.querySelectorAll("[data-shot-tab]")];
  function syncShot(tab) {
    const current = tab || shotTabs.find((item) => item.getAttribute("aria-selected") === "true") || shotTabs[0];
    if (!current) return;
    shotTabs.forEach((item) => {
      const on = item === current;
      item.setAttribute("aria-selected", on ? "true" : "false");
      item.tabIndex = on ? 0 : -1;
    });
    const img = document.querySelector("#gallery-shot");
    if (img) {
      if (img.getAttribute("src") !== current.dataset.src) img.src = current.dataset.src;
      img.dataset.i18nAlt = current.dataset.i18n;
      img.alt = t(current.dataset.i18n);
    }
    const cap = document.querySelector("[data-gallery-cap]");
    if (cap) {
      cap.dataset.i18n = current.dataset.i18n;
      cap.textContent = t(current.dataset.i18n);
    }
  }
  shotTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => syncShot(tab));
    tab.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
      event.preventDefault();
      const next = event.key === "ArrowRight" ? (index + 1) % shotTabs.length : (index - 1 + shotTabs.length) % shotTabs.length;
      syncShot(shotTabs[next]);
      shotTabs[next].focus();
    });
  });

  const box = document.querySelector("[data-lightbox]");
  const boxImg = document.querySelector("[data-lightbox-img]");
  const boxCap = document.querySelector("[data-lightbox-cap]");
  document.querySelectorAll("[data-zoom]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const img = btn.querySelector("img");
      if (!box || !img) return;
      boxImg.src = img.currentSrc || img.src;
      boxImg.alt = img.alt;
      boxCap.textContent = img.alt;
      box.classList.add("open");
      box.querySelector("button")?.focus();
    });
  });
  function closeBox() { box?.classList.remove("open"); }
  box?.addEventListener("click", (e) => { if (e.target === box) closeBox(); });
  box?.querySelector("button")?.addEventListener("click", closeBox);
  addEventListener("keydown", (e) => { if (e.key === "Escape") closeBox(); });

  function formatSize(n) {
    if (!Number.isFinite(n) || n <= 0) return "";
    const units = ["B", "KB", "MB", "GB"];
    let i = 0;
    let v = n;
    while (v >= 1024 && i < units.length - 1) { v /= 1024; i += 1; }
    const digits = i === 0 ? 0 : (v >= 10 ? 1 : 1);
    return v.toFixed(digits) + " " + units[i];
  }

  async function probe(url) {
    const opts = { cache: "no-store", redirect: "follow" };
    let res;
    try { res = await fetch(url, { ...opts, method: "HEAD" }); }
    catch { return { ok: false }; }
    if (res.status === 405 || res.status === 501) {
      try { res = await fetch(url, { ...opts, method: "GET", headers: { Range: "bytes=0-0" } }); }
      catch { return { ok: false }; }
    }
    if (!res.ok && res.status !== 206) return { ok: false };
    const type = (res.headers.get("content-type") || "").toLowerCase();
    if (type.includes("text/html") || type.startsWith("text/") || type.includes("application/json") || type.includes("image/")) {
      return { ok: false };
    }
    let size = null;
    const range = res.headers.get("content-range") || "";
    const total = range.match(/\/(\d+)\s*$/);
    if (total) size = Number(total[1]);
    else if (res.status !== 206) {
      const len = Number(res.headers.get("content-length"));
      if (Number.isFinite(len) && len > 0) size = len;
    }
    return { ok: true, size };
  }

  function icon(id) {
    return `<svg class="icon" aria-hidden="true"><use href="#i-${id}"></use></svg>`;
  }

  function renderDownloads(data) {
    const root = document.querySelector("[data-downloads]");
    if (!root || !data) return;
    const labels = {
      console: { title: "dlConsole", hint: "dlConsoleHint" },
      agent: { title: "dlAgent", hint: "dlAgentHint" }
    };
    root.innerHTML = (data.files || []).map((file) => {
      const label = labels[file.id] || labels.console;
      const known = Number(file.size);
      const sizeText = file._size
        ? `${t("dlSize")}: ${formatSize(file._size)}`
        : (Number.isFinite(known) && known > 0 ? `${t("dlSize")}: ${formatSize(known)}` : t("dlSizeLater"));
      const ready = file._ready === true;
      const action = ready
        ? `<a class="btn btn-primary" href="${file.url}" download>${icon("download")}<span>${t("dlGet")}</span></a>`
        : `<button class="btn btn-soon" type="button" disabled>${icon("clock")}<span>${file._ready === false ? t("dlSoon") : t("dlCheck")}</span></button>`;
      return `<article class="dl">
        <header>
          <div>
            <p class="eyebrow">${t("dlVersion")} ${file.version || data.version || ""}</p>
            <h3>${t(label.title)}</h3>
          </div>
          ${icon(file.id === "agent" ? "users" : "monitor")}
        </header>
        <p class="meta-line">${t(label.hint)}</p>
        <p class="file">${file.filename}</p>
        <p class="meta-line">${sizeText}</p>
        <div class="hash">
          <code title="${file.sha256 || ""}">${file.sha256 || ""}</code>
          <button class="icon-btn" type="button" data-copy="${file.sha256 || ""}" aria-label="${t("dlCopy")}">${icon("copy")}</button>
        </div>
        ${action}
      </article>`;
    }).join("");
    root.querySelectorAll("[data-copy]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(btn.dataset.copy || "");
          btn.setAttribute("aria-label", t("dlCopied"));
        } catch { /* clipboard may be blocked; the hash stays visible */ }
      });
    });
  }

  async function loadDownloads() {
    const root = document.querySelector("[data-downloads]");
    try {
      const res = await fetch("/downloads.json", { cache: "no-store" });
      if (!res.ok) throw new Error("status");
      const data = await res.json();
      window.__avDownloads = data;
      (data.files || []).forEach((file) => { file._ready = undefined; });
      renderDownloads(data);
      await Promise.all((data.files || []).map(async (file) => {
        const found = await probe(file.url);
        file._ready = found.ok;
        if (found.size) file._size = found.size;
        else if (Number(file.size) > 0) file._size = Number(file.size);
      }));
      renderDownloads(data);
    } catch {
      if (root) root.innerHTML = `<p class="note">${t("dlMissing")}</p>`;
    }
  }

  applyLang();
  loadDownloads();
})();
