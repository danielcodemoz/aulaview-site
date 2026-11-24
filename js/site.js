(function () {
  const html = document.documentElement;
  html.classList.add("js");

  const dict = {
    pt: {
      safetyKicker: "Guia de segurança · Windows",
      safetyTitle: "Antes de executar o instalador",
      safetyIntro: "Se o Microsoft Edge indicar que o ficheiro não é descarregado com frequência, significa que ainda não tem uma reputação estabelecida. Não significa que o ficheiro seja seguro. O Windows pode mostrar um aviso separado ao abrir o ficheiro.",
      safetyStart: "Na página oficial, confirme o domínio e clique em «Descarregar para Windows» (ou no botão do instalador Windows escolhido).",
      safetyOrigin: "Só se o Edge disser que o ficheiro não é transferido com frequência: confirme o domínio oficial, o nome exacto do ficheiro e a versão esperada. A página oficial deve publicar um SHA-256 para esse ficheiro. Se não publicar, pare. Domínio oficial: aulaview.danielpro.dev.",
      safetySignature: "Se houver assinatura digital, confirme nas propriedades do ficheiro que é válida e que pertence ao editor esperado. «Editor desconhecido» não confirma a identidade do editor.",
      safetyHash: "Se já tiver o ficheiro, abra o PowerShell na pasta onde o guardou. Substitua instalador.exe pelo nome exacto do ficheiro e compare o resultado com o SHA-256 publicado no cartão correspondente. A coincidência confirma que os ficheiros são idênticos, não que sejam seguros.",
      safetyStop: "Se não puder verificar a origem ou o ficheiro, o SHA-256 for diferente ou houver um aviso de perigo, de malware ou um bloqueio por política ou pelo administrador, não prossiga nem execute. Mantenha as protecções activas. Num computador da escola, contacte o responsável de TI.",
      safetyHashes: "Ver os valores SHA-256",
      safetyCaption: "Simulação: guardar o ficheiro sem o executar.",
      safetySave: "Nas Transferências do Edge, abra o menu ⋯ do ficheiro e escolha Manter (Keep). Em seguida, abra a seta junto de Eliminar (Delete) e escolha Manter mesmo assim (Keep anyway). Isto só guarda o ficheiro. Não clique em «Abrir ficheiro».",
      safetyPlay: "Reproduzir animação",
      safetyPause: "Pausar animação",
      safetyCommand: "Get-FileHash -LiteralPath '.\\instalador.exe' -Algorithm SHA256",
      skip: "Saltar para o conteúdo",
      navFeatures: "Funcionalidades",
      navOrigin: "Origem",
      navGallery: "Galeria",
      navHow: "Como funciona",
      navReq: "Requisitos",
      navDownload: "Transferir",
      navFaq: "Perguntas",
      navContact: "Contacto",
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
      dlKicker: "Versão 1.4.0",
      dlTitle: "Transferir o AulaView",
      dlLead: "Consola no computador do professor. Agente em cada computador da sala.",
      slidePrev: "Anterior",
      slideNext: "Seguinte",
      slideDots: "Diapositivos",
      slViewT: "Ver ecrã",
      slView: "Miniaturas ao vivo de cada computador da sala, com o estado e o que está aberto.",
      slControlT: "Assumir controlo",
      slControl: "Abra um ecrã e use o rato e o teclado desse computador.",
      slLockT: "Bloquear",
      slLock: "Cubra o ecrã e bloqueie o rato e o teclado, com uma mensagem sua.",
      slMsgT: "Mensagem",
      slMsg: "Envie um aviso aos PCs selecionados. A janela abre à frente e o aluno pode responder.",
      slFilesT: "Ficheiros",
      slFiles: "Envie materiais e recolha trabalhos, com verificação SHA-256.",
      slShotT: "Capturar",
      slShot: "Guarde uma imagem do ecrã de um aluno ou de vários.",
      slPowerT: "Energia",
      slPower: "Ligue com Wake-on-LAN, ou desligue, reinicie, suspenda e termine a sessão.",
      slInstallT: "Instalar e desinstalar",
      slInstall: "Nos PCs selecionados, instale um programa ou desinstale-o — de forma normal ou forçada.",
      slPresentT: "Modo Apresentar",
      slPresent: "Os diapositivos, em PDF ou PPTX, ficam sincronizados ao vivo nos ecrãs dos alunos.",
      slThemeT: "Claro e escuro",
      slTheme: "A mesma consola, no tema claro ou no tema escuro.",
      originKicker: "A origem do nome",
      originKickerLine: "Ver a aula inteira.",
      originBody: "Aula vem do latim aula — pátio, corte, palácio — e o latim trouxe a palavra do grego αὐλή, o pátio aberto. Com o tempo passou a nomear a sala e, em português, a própria lição. View vem do francês antigo veue, «o que se vê», do verbo veoir, do latim vidēre, «ver». AulaView é ver a aula.",
      tl1: "pátio",
      tl2: "corte",
      tl3: "lição",
      tl4: "ver a aula",
      originSources: "Fontes: Wiktionary, com Infopédia e Priberam; Ciberdúvidas da Língua Portuguesa; Etymonline.",
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
      a4: "Os instaladores publicados não têm assinatura digital. Se vir um aviso no Edge ou no Windows, consulte o guia de segurança acima. Não execute um ficheiro marcado como perigoso ou que não possa verificar.",
      q5: "Como confirmo que o instalador é o da versão 1.4.0?",
      a5: "Os dois ficheiros estão em /downloads/. Compare o SHA-256 do ficheiro descarregado com o valor nesta página.",
      q6: "O aluno consegue sair com Ctrl+Alt+Del?",
      a6: "Sim. Nenhum programa normal consegue bloquear Ctrl+Alt+Del. O bloqueio cobre o ecrã e o teclado e o rato, e o Windows mantém essa combinação.",
      q7: "Onde ficam os trabalhos dos alunos?",
      a7: "Na consola, os envios pela janela de entrega ficam agrupados por PC. A recolha e o envio verificam o SHA-256. Cada ficheiro pode ter no máximo 64 MB.",
      contactKicker: "Contacto",
      contactTitle: "Fale comigo.",
      contactLead: "Para projectos, colaborações ou dúvidas sobre o AulaView.",
      contactCta: "Enviar email",
      contactEmailLbl: "Email",
      contactLinkedinLbl: "LinkedIn",
      contactPageLbl: "Página de contacto",
      contactPlace: "Maputo, Moçambique",
      footCredit: "Desenvolvido por Danielpro",
      footRights: "© 2026 Daniel Marcos. AulaView.",
      footTop: "Voltar ao topo"
    },
    en: {
      safetyKicker: "Windows safety guide",
      safetyTitle: "Before you run the installer",
      safetyIntro: "If Microsoft Edge says the file isn't commonly downloaded, it means the file doesn't have an established reputation. It doesn't mean the file is safe. Windows can show a separate warning when you open the file.",
      safetyStart: "On the official page, confirm the domain and click “Download for Windows” (or the button for your chosen Windows installer).",
      safetyOrigin: "Only if Edge says the file isn’t commonly downloaded: confirm the official domain, exact filename and expected version. The official page must publish a SHA-256 for that exact file. If it does not, stop. Official domain: aulaview.danielpro.dev.",
      safetySignature: "If the file has a digital signature, check in its properties that it is valid and belongs to the expected publisher. “Unknown publisher” does not confirm who published it.",
      safetyHash: "If you already have the file, open PowerShell in the folder where you saved it. Replace installer.exe with the exact filename and compare the result with the SHA-256 shown on the matching download card. A match confirms the files are identical, not that they are safe.",
      safetyStop: "If you cannot verify the source or file, the SHA-256 differs, or there is an unsafe-file or malware warning or a policy or administrator block, stop and do not run the file. Keep protections enabled. On a school computer, contact your IT administrator.",
      safetyHashes: "View the SHA-256 values",
      safetyCaption: "Simulation: save the file without running it.",
      safetySave: "In Edge Downloads, open the file’s ⋯ menu and choose Keep. Next, open the arrow beside Delete and choose Keep anyway. This only saves the file. Do not click “Open file”.",
      safetyPlay: "Play animation",
      safetyPause: "Pause animation",
      safetyCommand: "Get-FileHash -LiteralPath '.\\installer.exe' -Algorithm SHA256",
      skip: "Skip to content",
      navFeatures: "Features",
      navOrigin: "The name",
      navGallery: "Gallery",
      navHow: "How it works",
      navReq: "Requirements",
      navDownload: "Download",
      navFaq: "FAQ",
      navContact: "Contact",
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
      dlKicker: "Version 1.4.0",
      dlTitle: "Download AulaView",
      dlLead: "The console on the teacher’s computer. The agent on every computer in the room.",
      slidePrev: "Previous",
      slideNext: "Next",
      slideDots: "Slides",
      slViewT: "View screen",
      slView: "Live thumbnails of every computer in the room, with its status and what is open.",
      slControlT: "Take control",
      slControl: "Open a screen and use that computer’s mouse and keyboard.",
      slLockT: "Lock",
      slLock: "Cover the screen and block the mouse and keyboard, with a message from you.",
      slMsgT: "Message",
      slMsg: "Send a note to the selected PCs. The window comes to the front, and the student can reply.",
      slFilesT: "Files",
      slFiles: "Send materials and collect work, with a SHA-256 check.",
      slShotT: "Screenshot",
      slShot: "Save a picture of one student’s screen, or of several.",
      slPowerT: "Power",
      slPower: "Wake computers with Wake-on-LAN, or shut down, restart, sleep and log off.",
      slInstallT: "Install and uninstall",
      slInstall: "On the selected PCs, install a program or uninstall it — the normal way, or forced.",
      slPresentT: "Present mode",
      slPresent: "Slides, as PDF or PPTX, stay synced live on the student screens.",
      slThemeT: "Light and dark",
      slTheme: "The same console, in the light theme or the dark theme.",
      originKicker: "Where the name comes from",
      originKickerLine: "Seeing the whole class.",
      originBody: "Aula comes from Latin aula — a courtyard, a court, a palace — and Latin took the word from Greek αὐλή, the open court. In time it named the hall and, in Portuguese, the lesson itself. View comes from Old French veue, “what is seen”, from the verb veoir, from Latin vidēre, “to see”. AulaView is seeing the class.",
      tl1: "courtyard",
      tl2: "court",
      tl3: "lesson",
      tl4: "see the class",
      originSources: "Sources: Wiktionary, with Infopédia and Priberam; Ciberdúvidas da Língua Portuguesa; Etymonline.",
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
      a4: "The published installers are not digitally signed. If you see a warning in Edge or Windows, read the safety guide above. Do not run a file flagged as unsafe or that you cannot verify.",
      q5: "How do I confirm the installer is version 1.4.0?",
      a5: "Both files are in /downloads/. Compare the SHA-256 of the downloaded file with the value on this page.",
      q6: "Can a student leave with Ctrl+Alt+Del?",
      a6: "Yes. No ordinary program can block Ctrl+Alt+Del. Lock covers the screen and the keyboard and mouse, and Windows keeps that combination.",
      q7: "Where does student work go?",
      a7: "In the console, files sent through the hand-in window are grouped by PC. Collect and send both check SHA-256. Each file can be at most 64 MB.",
      contactKicker: "Contact",
      contactTitle: "Get in touch.",
      contactLead: "For projects, collaborations or questions about AulaView.",
      contactCta: "Send email",
      contactEmailLbl: "Email",
      contactLinkedinLbl: "LinkedIn",
      contactPageLbl: "Contact page",
      contactPlace: "Maputo, Mozambique",
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
    syncInstallerMotion();
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

  const slider = document.querySelector("[data-slider]");
  const slideFigs = [...document.querySelectorAll("[data-slide]")];
  const slideCopies = [...document.querySelectorAll(".slide-copy")];
  const dots = [...document.querySelectorAll("[data-dot]")];
  let slideIndex = 0;
  let slideTimer = 0;
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  function showSlide(index) {
    if (!slideFigs.length) return;
    slideIndex = (index + slideFigs.length) % slideFigs.length;
    slideFigs.forEach((fig, n) => {
      const on = n === slideIndex;
      fig.classList.toggle("is-on", on);
      fig.setAttribute("aria-hidden", on ? "false" : "true");
    });
    slideCopies.forEach((copy, n) => copy.classList.toggle("is-on", n === slideIndex));
    dots.forEach((dot, n) => dot.setAttribute("aria-selected", n === slideIndex ? "true" : "false"));
  }
  function stopSlides() { clearInterval(slideTimer); }
  function playSlides() {
    if (reduceMotion || slideFigs.length < 2) return;
    stopSlides();
    slideTimer = setInterval(() => showSlide(slideIndex + 1), 3000);
  }
  document.querySelector("[data-slide-next]")?.addEventListener("click", () => { showSlide(slideIndex + 1); playSlides(); });
  document.querySelector("[data-slide-prev]")?.addEventListener("click", () => { showSlide(slideIndex - 1); playSlides(); });
  dots.forEach((dot) => dot.addEventListener("click", () => { showSlide(Number(dot.dataset.dot)); playSlides(); }));
  slider?.addEventListener("mouseenter", stopSlides);
  slider?.addEventListener("mouseleave", playSlides);
  slider?.addEventListener("focusin", stopSlides);
  slider?.addEventListener("focusout", (event) => { if (!slider.contains(event.relatedTarget)) playSlides(); });
  let swipeX = null;
  slider?.addEventListener("pointerdown", (event) => { swipeX = event.clientX; });
  slider?.addEventListener("pointerup", (event) => {
    if (swipeX == null) return;
    const dx = event.clientX - swipeX;
    swipeX = null;
    if (Math.abs(dx) < 48) return;
    showSlide(slideIndex + (dx < 0 ? 1 : -1));
    playSlides();
  });
  showSlide(0);
  playSlides();

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
      const kind = file.id === "agent" ? "agent" : "console";
      return `<article class="dl dl-${kind}">
        <div class="dl-art">${icon(kind === "agent" ? "students" : "teacher")}</div>
        <header>
          <p class="eyebrow">${t("dlVersion")} ${file.version || data.version || ""}</p>
          <h3>${t(label.title)}</h3>
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

  const installerMotion = document.querySelector("[data-installer-motion]");
  const installerFigure = installerMotion?.closest(".installer-figure");
  const prefersReducedInstallerMotion = matchMedia("(prefers-reduced-motion: reduce)");
  function syncInstallerMotion() {
    if (!installerMotion || !installerFigure) return;
    const playing = !prefersReducedInstallerMotion.matches && !installerFigure.classList.contains("is-paused");
    installerMotion.hidden = prefersReducedInstallerMotion.matches;
    installerMotion.dataset.i18n = playing ? "safetyPause" : "safetyPlay";
    installerMotion.textContent = t(installerMotion.dataset.i18n);
  }
  installerMotion?.addEventListener("click", () => {
    installerFigure.classList.toggle("is-paused");
    syncInstallerMotion();
  });
  prefersReducedInstallerMotion.addEventListener("change", syncInstallerMotion);
  if (installerFigure && "IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      installerFigure.classList.toggle("is-ready", entry.isIntersecting && entry.intersectionRatio >= 0.4);
    }, { threshold: 0.4 }).observe(installerFigure);
  }

  applyLang();
  loadDownloads();
})();
