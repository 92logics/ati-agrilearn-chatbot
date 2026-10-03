
(function () {
  "use strict";

  var SOURCE = "Public AgriLearn homepage, checked 3 Oct 2026: https://agrilearn.ati.gov.et/";

  var entries = [
    {
      id: "what",
      keys: ["what is agrilearn", "what is agri learn", "about agrilearn", "what does agrilearn", "platform"],
      chips: "What is AgriLearn?",
      text: "AgriLearn is a digital learning platform of the Ethiopian Agricultural Transformation Institute (ATI). The public homepage describes it as focused on agribusiness and entrepreneurial mindset development, preparing youth and other value-chain actors for employment and enterprise opportunities.\n\nIt sits under ATI’s program “Agriculture-focused Dignified Employment for Youth in Ethiopia” (ADEY), which the same page says is meant to address youth unemployment, especially for young women, and increase participation in the agriculture labor market."
    },
    {
      id: "who",
      keys: ["who runs", "who operates", "who built", "ati", "buyer", "institute"],
      chips: "Who runs AgriLearn?",
      text: "The public site names the Ethiopian Agricultural Transformation Institute (ATI). The page footer lists support at agrilearn@ati.gov.et and telephone +251-115-570-678 (fax +251-115-570-668).\n\nThe procurement notice for a chatbot is a separate item: the buyer on the mirrored eGP notice is also the Ethiopian Agricultural Transformation Institute, Addis Ababa."
    },
    {
      id: "adey",
      keys: ["adey", "youth", "women", "job", "employment", "program"],
      chips: "What is ADEY?",
      text: "On the AgriLearn homepage, ADEY is “Agriculture-focused Dignified Employment for Youth in Ethiopia.” ATI says it designed the program to address unemployment among youths, especially young women, and to increase their participation in the labor market, particularly in agriculture.\n\nThe same page says ATI has mainstreamed youth employment, gender equality, climate-smart agriculture, and nutrition-sensitive agriculture, with aims of more sustainable and inclusive job opportunities, inclusivity, and sustainable use of natural resources."
    },
    {
      id: "goals",
      keys: ["goal", "pillar", "inclusive", "sustainab", "economic", "disability"],
      chips: "What goals are listed?",
      text: "The homepage lists four themes:\n• Job creation — young people creating agricultural businesses and employment in their communities.\n• Sustainable agriculture — environmentally friendly practices for long-term productivity and resource conservation.\n• Economic growth — rural development through productivity and market integration.\n• Inclusiveness — youth and farmers, including women, men, and persons with disabilities, with equal access to practical agribusiness skills."
    },
    {
      id: "courses",
      keys: ["course", "module", "catalog", "which class", "what can i learn", "subjects", "list"],
      chips: "Which courses are listed?",
      text: "When this prototype was checked, the public homepage said “10 courses” and listed:\n• Entrepreneurship Mindset, Business skills development and inclusion safeguarding\n• Business Organization and Management\n• Marketing Management\n• Record-keeping and Financial Management\n• Layer Production Business\n• Honey and Beeswax Production Business\n• Green Maize Production Business\n• Avocado Seedling Production Business\n• Onion Seed Production Business\n\nThe page also showed “589 active users.” Both figures are live page counters and can change. Short descriptions on the page are summaries only; this prototype does not include lesson text."
    },
    {
      id: "layer",
      keys: ["layer", "chicken", "poultry"],
      chips: "What does the layer course cover?",
      text: "The homepage blurb for Layer Production Business says the course includes producing layer chickens, essential materials to run a layer chicken business, technical aspects of layer production, and supplementary materials such as risks and mitigation strategies and record keeping to evaluate profitability.\n\nThat is the public summary only. Lesson steps are not in this prototype."
    },
    {
      id: "honey",
      keys: ["honey", "beeswax", "bee"],
      chips: "What about honey and beeswax?",
      text: "The homepage blurb says Honey and Beeswax Production Business covers honeybees, selecting a site, seasonal management, health, and production. It does not publish the full syllabus on that page."
    },
    {
      id: "maize",
      keys: ["maize", "corn"],
      chips: "What about green maize?",
      text: "The homepage says the Green Maize Production Business module is to empower youth agri-entrepreneurs in maize value chains with skills in green maize production, processing, and marketing. No further lesson outline is on that page."
    },
    {
      id: "avocado",
      keys: ["avocado", "graft", "seedling"],
      chips: "What about avocado seedlings?",
      text: "The homepage says the Avocado Seedling Production Business course equips youth, women’s groups, and farmers with modern grafting techniques to boost avocado seedling production and income, with assessments to track learning progress."
    },
    {
      id: "onion",
      keys: ["onion"],
      chips: "What about onion seed?",
      text: "The homepage says the Onion Seed Production Business module is designed so youth and women groups, farmers, and others can gain knowledge and skill on onion seed production and apply the technologies to increase onion seed production and income."
    },
    {
      id: "business",
      keys: ["business organization", "msme", "management course", "entrepreneur"],
      chips: "What business courses are described?",
      text: "From the homepage blurbs:\n• Entrepreneurship Mindset, Business skills development and inclusion safeguarding — entrepreneurial mindset, essential business skills, and inclusion and safeguarding, for responsible enterprises.\n• Business Organization and Management — business development and management for agricultural MSMEs, and sustainable decent work for Ethiopian youth, with a particular focus on young women.\n• Marketing Management — agribusiness concepts, agricultural marketing, marketing strategies, customer relationship management, and digital innovation, plus activities and assessments.\n• Record-keeping and Financial Management — practical record-keeping and financial management so agripreneurs can track farm activities, manage resources, and make financial decisions."
    },
    {
      id: "enroll",
      keys: ["enroll", "enrol", "register", "login", "log in", "access", "sign up", "how do i", "how can i"],
      chips: "How do I enroll?",
      text: "The homepage “How can I access the courses?” says:\n1. Login if you already have an account, or register as a new user.\n2. Search for a course preference.\n3. Enroll and proceed with the lessons.\n\nThis prototype cannot create an account or open the real platform."
    },
    {
      id: "certificate",
      keys: ["certificate", "certification", "diploma"],
      chips: "Are there certificates?",
      text: "Yes, according to the public FAQ: “certificates will be provided at the end of the course lessons.” The page does not describe the certificate format, issuer name beyond ATI, or whether it is accredited."
    },
    {
      id: "offline",
      keys: ["offline", "download", "without internet", "local device"],
      chips: "Can I study offline?",
      text: "The public FAQ says you can download course content and browse it on your local device. It does not describe which file format or which courses support download."
    },
    {
      id: "support",
      keys: ["support", "contact", "email", "phone", "help", "agrilearn@"],
      chips: "How do I get support?",
      text: "The AgriLearn footer says: for support, email agrilearn@ati.gov.et. It also lists The Agricultural Transformation Institute, Tel: +251-115-570-678, Fax: +251-115-570-668.\n\nThat is learner support on the public site. It is not the procurement mailbox on the tender notice."
    },
    {
      id: "prototype",
      keys: ["prototype", "92 logics", "who made", "demo", "chatbot", "tender", "bid", "scope"],
      chips: "What is this prototype?",
      text: "This is a labeled prototype by 92 Logics (Islamabad), not an ATI system and not a live model.\n\nThe mirrored public notice describes consultancy services to hire an IT firm for the development and integration of an AI-based chatbot for the AgriLearn digital learning platform (reference ATI-NCB-C-0022-2019-BID). It does not, in the text available here, specify channels, languages, or features. This demo therefore only answers questions already answered on the public AgriLearn homepage."
    }
  ];

  var log = document.getElementById("log");
  var form = document.getElementById("form");
  var input = document.getElementById("q");
  var chips = document.getElementById("chips");
  var reset = document.getElementById("reset");

  var chipIds = ["what", "courses", "enroll", "certificate", "offline", "support", "prototype"];

  function add(role, text, cite) {
    var div = document.createElement("div");
    div.className = "bubble " + role;
    var p = document.createElement("p");
    p.textContent = text;
    div.appendChild(p);
    if (cite) {
      var c = document.createElement("span");
      c.className = "cite";
      c.textContent = cite;
      div.appendChild(c);
    }
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
  }

  function norm(s) {
    return s.toLowerCase().replace(/[^a-z0-9@+ ]+/g, " ").replace(/\s+/g, " ").trim();
  }

  function answer(question) {
    var q = norm(question);
    if (!q) return;
    add("user", question);
    var best = null;
    var bestScore = 0;
    entries.forEach(function (e) {
      var score = 0;
      e.keys.forEach(function (k) {
        if (q.indexOf(k) !== -1) score += k.length;
      });
      if (score > bestScore) {
        bestScore = score;
        best = e;
      }
    });
    if (!best || bestScore < 3) {
      add("bot", "I don’t have a verified answer for that in this sample set. I only use text published on the AgriLearn homepage (courses, access, certificates, offline use, and support) plus the short public description of the chatbot consultancy. Try a suggested question.", "No matching public sentence — nothing invented.");
      return;
    }
    add("bot", best.text, SOURCE);
  }

  chipIds.forEach(function (id) {
    var e = entries.filter(function (x) { return x.id === id; })[0];
    var b = document.createElement("button");
    b.type = "button";
    b.textContent = e.chips;
    b.addEventListener("click", function () { answer(e.chips); });
    chips.appendChild(b);
  });

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var q = input.value.trim();
    if (!q) return;
    input.value = "";
    answer(q);
  });

  reset.addEventListener("click", function () {
    log.innerHTML = "";
    greet();
  });

  function greet() {
    add("bot", "Hello. I am a scripted AgriLearn sample from 92 Logics, not the official ATI assistant.\n\nAsk about what AgriLearn is, the courses named on the public homepage, how to enroll, certificates, offline access, or support. I will not answer beyond those pages.", SOURCE);
  }

  greet();
})();
