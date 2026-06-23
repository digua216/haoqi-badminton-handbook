const storeKeys = {
  matches: "haoqi-badminton-matches-v2",
  gear: "haoqi-badminton-gear-v2",
};

const categoryLabels = {
  racket: "球拍",
  shuttle: "羽毛球",
  shoes: "球鞋",
  clothes: "衣服",
  bag: "包",
  accessory: "配件",
  other: "其他",
};

const typeLabels = {
  singles: "单打",
  doubles: "双打",
  practice: "练球",
};

const resultLabels = {
  win: "胜",
  loss: "负",
  practice: "不计胜负",
};

const friendMessages = [
  {
    id: "goujie",
    name: "狗姐",
    title: "亲爱的好奇宝贝",
    note: "写给即将开启俄罗斯新副本的好奇",
    body: [
      "亲爱的好奇宝贝！恭喜你即将开启俄罗斯新副本啦！虽然你现在可能很焦虑很不安或者迷茫，但你要相信你可以搞定一切，会在这个新学期获得非常有意义的人生新体验！",
      "毕业不总是代表分离，比如我们还是会在一个学期之后重逢，再继续一起快乐玩耍。希望你能一直相信自己，人生的每一步都算数，你总是在不断的努力充实自己，就一定会在将来开花结果，你是最棒的小好奇！",
      "你善良开朗，总是能给周围的人带来快乐！认识你之后你总是能给我鼓励和支持🥺总是能对周围的人感同身受，对待朋友超级的真挚，我总是能在你身上看到我从来没有在别人身上看到的那种真诚，这种真诚让你闪闪发光哦～所以我也总是觉得你特别的可爱。",
      "虽然我不是很会表达情绪，也不总是能及时的察觉到你的情绪，但你要知道我一直在你身边在你背后，只要你有问题有苦恼我都在。",
      "抒情的话就说这么多，接下来我们也一起走花路吧！继续一起打球一起愉快玩耍一起尝遍美食走遍北京！爱你我的小宝❤️❤️❤️",
    ],
  },
  {
    id: "xiaodaoyan",
    name: "小导演",
    title: "《好奇的羽毛球手册》",
    note: "小导演写给好奇",
    showTitle: false,
    body: ["《好奇的羽毛球手册》"],
  },
  {
    id: "dao",
    name: "导",
    title: "详情请见私聊",
    note: "导写给好奇",
    showTitle: false,
    body: ["详情请见私聊。"],
  },
  {
    id: "haoxiang",
    name: "好香г",
    title: "未来的外交家",
    note: "好香г写给好奇",
    showTitle: false,
    body: ["未来的外交家，祝愿你也能成为真正的生活家。"],
  },
];

const legacyStatusLabels = {
  active: "服役中",
  idle: "闲置",
  worn: "损耗中",
  retired: "已退役",
};

const gearStatusOptions = {
  racket: [
    { value: "main", label: "主力拍" },
    { value: "backup", label: "备用拍" },
    { value: "stringing", label: "穿线中" },
    { value: "retired", label: "已退役" },
  ],
  shuttle: [
    { value: "sealed", label: "未开封" },
    { value: "using", label: "使用中" },
    { value: "low", label: "快用完" },
    { value: "depleted", label: "已用完" },
  ],
  shoes: [
    { value: "active", label: "服役中" },
    { value: "backup", label: "备用鞋" },
    { value: "worn", label: "磨损中" },
    { value: "retired", label: "已退役" },
  ],
  clothes: [
    { value: "daily", label: "常穿" },
    { value: "clean", label: "清洗中" },
    { value: "backup", label: "备用" },
    { value: "retired", label: "已退役" },
  ],
  bag: [
    { value: "packed", label: "出门常用" },
    { value: "travel", label: "远行备用" },
    { value: "idle", label: "闲置" },
    { value: "retired", label: "已退役" },
  ],
  accessory: [
    { value: "stock", label: "库存中" },
    { value: "active", label: "使用中" },
    { value: "replace", label: "待更换" },
    { value: "retired", label: "已退役" },
  ],
  other: [
    { value: "active", label: "使用中" },
    { value: "idle", label: "闲置" },
    { value: "worn", label: "损耗中" },
    { value: "retired", label: "已退役" },
  ],
};

const gearPlaceholderHints = {
  racket: {
    mode: "球拍：型号和手感",
    brand: "比如 YONEX / VICTOR",
    name: "比如 天斧 88D / 小红拍",
    nickname: "比如 好奇主拍 / 幸运拍",
    price: "899",
    photo: "点这里拍球拍",
    notes: "手感、穿线磅数、适合单打还是双打都可以写。",
  },
  shuttle: {
    mode: "羽毛球：筒装库存",
    brand: "比如 VICTOR / RSL",
    name: "比如 训练球一筒 / 金黄一号",
    nickname: "比如 云朵球 / 省球搭子",
    price: "86",
    photo: "点这里拍球筒",
    notes: "球速、耐打程度、还剩几颗都可以写。",
  },
  shoes: {
    mode: "球鞋：脚感和磨损",
    brand: "比如 YONEX / 李宁",
    name: "比如 贴地战靴 / 速度鞋",
    nickname: "比如 起飞鞋 / 不滑鞋",
    price: "399",
    photo: "点这里拍球鞋",
    notes: "抓地、缓震、磨损位置、适合哪块场地都可以写。",
  },
  clothes: {
    mode: "衣服：战袍收藏",
    brand: "比如 李宁 / 校队队服",
    name: "比如 毕业战袍 / 速干短袖",
    nickname: "比如 幸运战衣 / 漂亮上场服",
    price: "129",
    photo: "点这里拍战袍",
    notes: "哪场穿过、舒不舒服、搭配哪双鞋都可以写。",
  },
  bag: {
    mode: "球包：出门配置",
    brand: "比如 YONEX / 可爱装备柜",
    name: "比如 西瓜色球包 / 双肩球包",
    nickname: "比如 出发包 / 全家桶",
    price: "168",
    photo: "点这里拍球包",
    notes: "能装几支拍、常带什么、出门好不好背都可以写。",
  },
  accessory: {
    mode: "配件：手胶护腕",
    brand: "比如 AC / 尤尼克斯",
    name: "比如 粉色手胶 / 护腕 / 毛巾",
    nickname: "比如 小闪电 / 救命手胶",
    price: "25",
    photo: "点这里拍配件",
    notes: "什么时候换、颜色、手感、库存数量都可以写。",
  },
  other: {
    mode: "其他：训练小物",
    brand: "比如 迪卡侬 / 自购",
    name: "比如 计分牌 / 水壶 / 训练小物",
    nickname: "比如 神秘装备 / 球馆常驻",
    price: "59",
    photo: "点这里拍装备",
    notes: "用途、放在哪里、什么时候带去球馆都可以写。",
  },
};

let matches = [];
let gear = [];
let selectedDate = "";
let selectedGearPhotoData = "";
let selectedGearPhotoPromise = null;
let editingGearId = "";
let collapsedGearCategories = new Set();
let selectedFriendMessageId = "goujie";
let visibleMonth = startOfMonth(new Date());
let gameState = {
  running: false,
  over: false,
  phase: "idle",
  difficulty: "easy",
  animationFrame: 0,
  lastTime: 0,
  elapsed: 0,
  playerScore: 0,
  opponentScore: 0,
  rallyCount: 0,
  server: "player",
  serveSide: "right",
  pointTimer: 0,
  lastPointReason: "",
  swingTimer: 0,
  lastHitQuality: "",
  playerFacing: "left",
  playerAim: {
    x: 176,
    y: 366,
  },
  player: {
    x: 232,
    y: 382,
  },
  opponent: {
    x: 128,
    y: 118,
  },
  shuttle: {
    x: 180,
    y: 260,
    angle: 18,
    scale: 1,
  },
  shot: null,
};

const gameConfig = {
  easy: {
    label: "低",
    serveMs: 1460,
    rallyMs: 1280,
    minRallyMs: 820,
    speedUpPerHit: 24,
    maxSpeedUp: 170,
    opponentSpeed: 158,
    opponentSpeedUp: 8,
    maxOpponentBoost: 56,
    opponentFootworkY: 118,
    opponentAnticipation: 0.52,
    opponentLungeReach: 18,
    opponentReach: 54,
    playerReach: 45,
    playerLungeReach: 20,
    missChance: 0.18,
    longRallyMissBonus: 0.012,
    maxLongRallyMissBonus: 0.08,
    pressureMissBonus: 0.035,
    outChance: 0.2,
    targetSpread: 32,
    pointPause: 1.12,
  },
  medium: {
    label: "中",
    serveMs: 1260,
    rallyMs: 1060,
    minRallyMs: 690,
    speedUpPerHit: 32,
    maxSpeedUp: 245,
    opponentSpeed: 246,
    opponentSpeedUp: 12,
    maxOpponentBoost: 90,
    opponentFootworkY: 158,
    opponentAnticipation: 0.68,
    opponentLungeReach: 15,
    opponentReach: 48,
    playerReach: 39,
    playerLungeReach: 18,
    missChance: 0.08,
    longRallyMissBonus: 0.007,
    maxLongRallyMissBonus: 0.045,
    pressureMissBonus: 0.018,
    outChance: 0.11,
    targetSpread: 44,
    pointPause: 1,
  },
  hard: {
    label: "高",
    serveMs: 1080,
    rallyMs: 880,
    minRallyMs: 560,
    speedUpPerHit: 40,
    maxSpeedUp: 310,
    opponentSpeed: 340,
    opponentSpeedUp: 17,
    maxOpponentBoost: 128,
    opponentFootworkY: 205,
    opponentAnticipation: 0.82,
    opponentLungeReach: 12,
    opponentReach: 43,
    playerReach: 34,
    playerLungeReach: 16,
    missChance: 0.025,
    longRallyMissBonus: 0.003,
    maxLongRallyMissBonus: 0.022,
    pressureMissBonus: 0.01,
    outChance: 0.055,
    targetSpread: 58,
    pointPause: 0.9,
  },
};

const courtBounds = {
  outerLeft: 55,
  outerRight: 305,
  singlesLeft: 82,
  singlesRight: 278,
  centerX: 180,
  topBack: 48,
  bottomBack: 472,
  netY: 260,
  topShortServiceY: 192,
  bottomShortServiceY: 328,
  opponentTop: 54,
  opponentBottom: 210,
  playerAimTop: 270,
  playerTop: 286,
  playerBottom: 488,
};

let dragState = {
  active: false,
  pointerId: null,
  lastX: 0,
  lastY: 0,
  lastTime: 0,
  velocity: 0,
};

const audioState = {
  context: null,
  unlocked: false,
};

const gameEls = {};

const initialGameState = () => ({
  running: false,
  over: false,
  phase: "idle",
  difficulty: gameState ? gameState.difficulty : "easy",
  animationFrame: 0,
  lastTime: 0,
  elapsed: 0,
  playerScore: 0,
  opponentScore: 0,
  rallyCount: 0,
  server: "player",
  serveSide: "right",
  pointTimer: 0,
  lastPointReason: "",
  swingTimer: 0,
  lastHitQuality: "",
  playerFacing: "left",
  playerAim: {
    x: 176,
    y: 366,
  },
  player: {
    x: 232,
    y: 382,
  },
  opponent: {
    x: 128,
    y: 118,
  },
  shuttle: {
    x: 180,
    y: 260,
    angle: 18,
    scale: 1,
  },
  shot: null,
});


document.addEventListener("DOMContentLoaded", () => {
  loadData();
  bindNavigation();
  bindFriendBoard();
  bindForms();
  bindCalendar();
  bindLists();
  bindSimulator();
  setInitialDates();
  renderAll();
  const hashView = window.location.hash.replace("#", "");
  const initialView = hashView || new URLSearchParams(window.location.search).get("view");
  if (initialView) showView(initialView);
  registerPwa();
});

function registerPwa() {
  if (!("serviceWorker" in navigator)) return;

  navigator.serviceWorker.register("./service-worker.js").catch(() => {
    // The app still works normally if the browser blocks local service workers.
  });
}

function loadData() {
  const savedMatches = localStorage.getItem(storeKeys.matches);
  const savedGear = localStorage.getItem(storeKeys.gear);

  if (savedGear) {
    gear = JSON.parse(savedGear);
  } else {
    gear = [];
  }

  if (savedMatches) {
    matches = JSON.parse(savedMatches);
  } else {
    matches = [];
  }
}

function bindNavigation() {
  document.querySelectorAll("[data-nav], [data-go]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.nav || button.dataset.go;
      showView(target);
    });
  });
}

function bindFriendBoard() {
  const openButton = document.querySelector("#open-friend-board");
  const modal = document.querySelector("#friend-board-modal");
  const tabs = document.querySelector("#friend-tabs");
  if (!openButton || !modal || !tabs) return;

  openButton.addEventListener("click", openFriendBoard);
  document.querySelectorAll("[data-close-friend-board]").forEach((button) => {
    button.addEventListener("click", closeFriendBoard);
  });
  tabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-friend-id]");
    if (!button) return;
    renderFriendMessage(button.dataset.friendId);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeFriendBoard();
  });
  renderFriendTabs();
  renderFriendMessage(selectedFriendMessageId);
}

function openFriendBoard() {
  const modal = document.querySelector("#friend-board-modal");
  if (!modal) return;

  modal.hidden = false;
  document.body.classList.add("friend-board-open");
  renderFriendMessage(selectedFriendMessageId);
  const activeTab = modal.querySelector(".friend-tab.is-active");
  if (activeTab) activeTab.focus();
}

function closeFriendBoard() {
  const modal = document.querySelector("#friend-board-modal");
  if (!modal) return;

  modal.hidden = true;
  document.body.classList.remove("friend-board-open");
}

function renderFriendTabs() {
  const tabs = document.querySelector("#friend-tabs");
  if (!tabs) return;

  tabs.innerHTML = friendMessages
    .map(
      (message) => `
        <button class="friend-tab" type="button" data-friend-id="${escapeHtml(message.id)}" aria-selected="false">
          ${escapeHtml(message.name)}
        </button>
      `
    )
    .join("");
}

function renderFriendMessage(id) {
  const message = friendMessages.find((item) => item.id === id) || friendMessages[0];
  if (!message) return;

  selectedFriendMessageId = message.id;
  setText("#friend-letter-from", `${message.name} · ${message.note}`);
  const title = document.querySelector("#friend-letter-title");
  if (title) {
    title.hidden = message.showTitle === false;
    title.textContent = message.showTitle === false ? "" : message.title;
  }
  const body = document.querySelector("#friend-letter-body");
  if (body) {
    body.innerHTML = message.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  }
  document.querySelectorAll("[data-friend-id]").forEach((button) => {
    const isActive = button.dataset.friendId === message.id;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

function showView(name) {
  if (!["home", "sim", "matches", "gear"].includes(name)) name = "home";
  const activeView = document.querySelector(".view.is-active");
  if (activeView && activeView.dataset.view === "sim" && name !== "sim" && gameState.running) {
    pauseGame("切出模拟页，已自动暂停。");
  }

  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("is-active", view.dataset.view === name);
  });

  document.querySelectorAll("[data-nav]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.nav === name);
  });
  document.body.classList.toggle("sim-focused", name === "sim");

  const shell = document.querySelector(".phone-shell");
  if (shell) shell.scrollTo({ top: 0, behavior: "smooth" });
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (window.location.hash !== `#${name}`) {
    window.history.replaceState(null, "", `#${name}`);
  }
  renderSimulator();
}

function bindForms() {
  const matchForm = document.querySelector("#match-form");
  const gearForm = document.querySelector("#gear-form");
  const matchFormToggle = document.querySelector("#match-form-toggle");
  const matchType = document.querySelector("#match-type");
  const gearCategory = document.querySelector("#gear-category");
  const gearPhoto = document.querySelector("#gear-photo");
  const gearPhotoClear = document.querySelector("#gear-photo-clear");
  const gearFormToggle = document.querySelector("#gear-form-toggle");

  syncGearStatusOptions();
  updateGearFormMode();
  setMatchFormCollapsed(true);
  updateMatchParticipantFields();
  setGearFormCollapsed(true);
  if (matchFormToggle) {
    matchFormToggle.addEventListener("click", () => {
      setMatchFormCollapsed(!matchForm.classList.contains("is-collapsed"));
    });
  }
  if (matchType) {
    matchType.addEventListener("change", updateMatchParticipantFields);
  }
  if (gearFormToggle) {
    gearFormToggle.addEventListener("click", () => {
      setGearFormCollapsed(!gearForm.classList.contains("is-collapsed"));
    });
  }
  gearCategory.addEventListener("change", () => {
    syncGearStatusOptions();
    updateGearPlaceholders();
  });
  gearPhoto.addEventListener("change", async () => {
    const file = gearPhoto.files && gearPhoto.files[0];
    if (!file) {
      selectedGearPhotoData = "";
      selectedGearPhotoPromise = null;
      renderGearPhotoPreview();
      return;
    }

    try {
      selectedGearPhotoPromise = readAndCompressImage(file);
      selectedGearPhotoData = await selectedGearPhotoPromise;
      selectedGearPhotoPromise = null;
      renderGearPhotoPreview();
    } catch (error) {
      selectedGearPhotoData = "";
      selectedGearPhotoPromise = null;
      gearPhoto.value = "";
      renderGearPhotoPreview();
      notify("这张照片暂时读不了，换一张试试。");
    }
  });
  gearPhotoClear.addEventListener("click", () => {
    selectedGearPhotoData = "";
    selectedGearPhotoPromise = null;
    gearPhoto.value = "";
    renderGearPhotoPreview();
  });
  document.querySelector("#gear-edit-cancel").addEventListener("click", () => {
    resetGearForm();
    notify("已回到添加模式。");
  });

  matchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(matchForm);
    const type = formData.get("type");
    const teammate = type === "doubles" ? clean(formData.get("teammate")) : "";
    const opponentOne = clean(formData.get("opponentOne"));
    const opponentTwo = clean(formData.get("opponentTwo"));
    const singlesOpponent = clean(formData.get("opponent"));
    const match = {
      id: createId(),
      date: formData.get("date") || toISODate(new Date()),
      startTime: formData.get("startTime"),
      endTime: formData.get("endTime"),
      opponent: type === "doubles" ? [opponentOne, opponentTwo].filter(Boolean).join(" / ") : singlesOpponent,
      teammate,
      opponentOne: type === "doubles" ? opponentOne : singlesOpponent,
      opponentTwo: type === "doubles" ? opponentTwo : "",
      venue: clean(formData.get("venue")),
      type,
      scores: clean(formData.get("scores")),
      result: formData.get("result"),
      shuttleCount: numberOrNull(formData.get("shuttleCount")),
      rating: Number(formData.get("rating") || 4),
      notes: clean(formData.get("notes")),
      createdAt: new Date().toISOString(),
    };

    matches.unshift(match);
    selectedDate = match.date;
    visibleMonth = startOfMonth(parseISODate(match.date));
    saveMatches();
    matchForm.reset();
    setInitialDates();
    updateMatchParticipantFields();
    setMatchFormCollapsed(true);
    renderAll();
    notify("这一场已经存进手册。");
  });

  gearForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (selectedGearPhotoPromise) {
      selectedGearPhotoData = await selectedGearPhotoPromise;
      selectedGearPhotoPromise = null;
    }
    const formData = new FormData(gearForm);
    const itemData = {
      category: formData.get("category"),
      brand: clean(formData.get("brand")),
      name: clean(formData.get("name")) || "未命名装备",
      nickname: clean(formData.get("nickname")),
      purchaseDate: formData.get("purchaseDate"),
      price: numberOrNull(formData.get("price")),
      status: formData.get("status"),
      imageData: selectedGearPhotoData,
      notes: clean(formData.get("notes")),
    };

    if (editingGearId) {
      const now = new Date().toISOString();
      gear = gear.map((item) =>
        item.id === editingGearId
          ? {
              ...item,
              ...itemData,
              updatedAt: now,
            }
          : item
      );
    } else {
      gear.unshift({
        id: createId(),
        ...itemData,
        createdAt: new Date().toISOString(),
      });
    }

    saveGear();
    const wasEditing = Boolean(editingGearId);
    resetGearForm();
    renderAll();
    notify(wasEditing ? "装备信息已经改好了。" : "装备柜又变可爱了一点。");
  });
}

function bindCalendar() {
  document.querySelector("#prev-month").addEventListener("click", () => {
    visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() - 1, 1);
    renderCalendar();
  });

  document.querySelector("#next-month").addEventListener("click", () => {
    visibleMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 1);
    renderCalendar();
  });

  document.querySelector("#calendar-grid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-date]");
    if (!button) return;
    selectedDate = button.dataset.date;
    visibleMonth = startOfMonth(parseISODate(selectedDate));
    renderCalendar();
    renderMatches();
  });

  document.querySelector("#match-search").addEventListener("input", renderMatches);
  document.querySelector("#match-filter").addEventListener("change", renderMatches);
  document.querySelector("#clear-date").addEventListener("click", () => {
    selectedDate = "";
    renderCalendar();
    renderMatches();
  });
}

function bindLists() {
  document.querySelector("#match-list").addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete-match]");
    if (!button) return;
    matches = matches.filter((match) => match.id !== button.dataset.deleteMatch);
    saveMatches();
    renderAll();
    notify("这条对局记录已删除。");
  });

  document.querySelector("#gear-list").addEventListener("click", (event) => {
    const toggleButton = event.target.closest("[data-toggle-gear-category]");
    if (toggleButton) {
      const category = toggleButton.dataset.toggleGearCategory;
      if (collapsedGearCategories.has(category)) {
        collapsedGearCategories.delete(category);
      } else {
        collapsedGearCategories.add(category);
      }
      renderGearList();
      return;
    }

    const editButton = event.target.closest("[data-edit-gear]");
    if (editButton) {
      startGearEdit(editButton.dataset.editGear);
      return;
    }

    const button = event.target.closest("[data-delete-gear]");
    if (!button) return;
    const id = button.dataset.deleteGear;
    gear = gear.filter((item) => item.id !== id);
    if (editingGearId === id) resetGearForm();
    saveGear();
    renderAll();
    notify("装备已经移出柜子。");
  });
}

function bindSimulator() {
  gameEls.player = document.querySelector("#player-stick");
  gameEls.opponent = document.querySelector("#opponent-stick");
  gameEls.shuttle = document.querySelector("#shuttle");
  gameEls.playerScore = document.querySelector("#player-score");
  gameEls.opponentScore = document.querySelector("#opponent-score");
  gameEls.playerScoreCard = document.querySelector("#player-score-card");
  gameEls.opponentScoreCard = document.querySelector("#opponent-score-card");
  gameEls.startButton = document.querySelector("#game-start");
  gameEls.serverZone = document.querySelector("#serve-zone-server");
  gameEls.receiverZone = document.querySelector("#serve-zone-receiver");
  gameEls.playerHitRing = document.querySelector("#player-hit-ring");
  gameEls.opponentHitRing = document.querySelector("#opponent-hit-ring");
  gameEls.landingShadow = document.querySelector("#landing-shadow");

  document.querySelectorAll("[data-difficulty]").forEach((button) => {
    button.addEventListener("click", () => {
      setGameDifficulty(button.dataset.difficulty);
    });
  });

  document.querySelector("#game-start").addEventListener("click", toggleGameRunning);
  document.querySelector("#game-reset").addEventListener("click", resetGame);

  const courtSvg = document.querySelector("#court-svg");
  courtSvg.addEventListener("pointerdown", handleCourtPointerDown);
  courtSvg.addEventListener("pointermove", handleCourtPointerMove);
  courtSvg.addEventListener("pointerup", handleCourtPointerUp);
  courtSvg.addEventListener("pointercancel", handleCourtPointerUp);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && gameState.running) pauseGame("页面隐藏，已自动暂停。");
  });
  prepareNextServe("player", "准备开始", "真实单打规则：得分方发球，偶数右区、奇数左区。");
}

function setInitialDates() {
  const today = toISODate(new Date());
  document.querySelectorAll('input[type="date"]').forEach((input) => {
    if (!input.value && input.name === "date") input.value = today;
  });
}

function getStatusOptions(category) {
  return gearStatusOptions[category] || gearStatusOptions.other;
}

function getGearStatusLabel(item) {
  const option = getStatusOptions(item.category).find((status) => status.value === item.status);
  if (option) return option.label;
  return legacyStatusLabels[item.status] || item.status || "状态未知";
}

function isGearAvailable(item) {
  return item.status !== "retired" && item.status !== "depleted";
}

function syncGearStatusOptions(preferredValue = "") {
  const categorySelect = document.querySelector("#gear-category");
  const statusSelect = document.querySelector("#gear-status");
  if (!categorySelect || !statusSelect) return;

  const previousValue = preferredValue || statusSelect.value;
  const options = getStatusOptions(categorySelect.value);
  statusSelect.innerHTML = options
    .map((status) => `<option value="${escapeHtml(status.value)}">${escapeHtml(status.label)}</option>`)
    .join("");

  if (options.some((status) => status.value === previousValue)) {
    statusSelect.value = previousValue;
  } else if (previousValue) {
    const option = document.createElement("option");
    option.value = previousValue;
    option.textContent = legacyStatusLabels[previousValue] || previousValue;
    statusSelect.appendChild(option);
    statusSelect.value = previousValue;
  }
}

function setMatchFormCollapsed(collapsed) {
  const matchForm = document.querySelector("#match-form");
  const toggle = document.querySelector("#match-form-toggle");
  if (!matchForm || !toggle) return;

  matchForm.classList.toggle("is-collapsed", collapsed);
  toggle.setAttribute("aria-expanded", String(!collapsed));
  toggle.textContent = collapsed ? "展开" : "收起";
}

function updateMatchParticipantFields() {
  const matchType = document.querySelector("#match-type");
  const singleField = document.querySelector('[data-participant-mode="single"]');
  const doublesFields = document.querySelector('[data-participant-mode="doubles"]');
  const singleLabel = document.querySelector("#single-participant-label");
  if (!matchType || !singleField || !doublesFields) return;

  const isDoubles = matchType.value === "doubles";
  singleField.hidden = isDoubles;
  doublesFields.hidden = !isDoubles;
  singleField.querySelectorAll("input").forEach((input) => {
    input.disabled = isDoubles;
  });
  doublesFields.querySelectorAll("input").forEach((input) => {
    input.disabled = !isDoubles;
  });
  if (singleLabel) singleLabel.textContent = matchType.value === "practice" ? "搭子 / 对手" : "对手";
}

function updateGearFormMode() {
  const isEditing = Boolean(editingGearId);
  setText("#gear-form-title", isEditing ? "修改装备" : "添装备");
  updateGearPlaceholders();
  if (isEditing) setText("#gear-form-mode", "正在修改");
  setText("#gear-submit", isEditing ? "保存修改" : "放进装备柜");
  const cancelButton = document.querySelector("#gear-edit-cancel");
  if (cancelButton) cancelButton.hidden = !isEditing;
}

function getGearPlaceholderHint() {
  const category = document.querySelector("#gear-category")?.value || "other";
  return gearPlaceholderHints[category] || gearPlaceholderHints.other;
}

function updateGearPlaceholders() {
  const gearForm = document.querySelector("#gear-form");
  if (!gearForm) return;

  const hint = getGearPlaceholderHint();
  gearForm.elements.brand.placeholder = hint.brand;
  gearForm.elements.name.placeholder = hint.name;
  gearForm.elements.nickname.placeholder = hint.nickname;
  gearForm.elements.price.placeholder = hint.price;
  gearForm.elements.notes.placeholder = hint.notes;
  if (!editingGearId) setText("#gear-form-mode", hint.mode);
  renderGearPhotoPreview();
}

function setGearFormCollapsed(collapsed) {
  const gearForm = document.querySelector("#gear-form");
  const toggle = document.querySelector("#gear-form-toggle");
  if (!gearForm || !toggle) return;

  gearForm.classList.toggle("is-collapsed", collapsed);
  toggle.setAttribute("aria-expanded", String(!collapsed));
  toggle.textContent = collapsed ? "展开" : "收起";
}

function resetGearForm() {
  const gearForm = document.querySelector("#gear-form");
  if (!gearForm) return;

  editingGearId = "";
  gearForm.reset();
  selectedGearPhotoData = "";
  selectedGearPhotoPromise = null;
  syncGearStatusOptions();
  renderGearPhotoPreview();
  updateGearFormMode();
  setGearFormCollapsed(true);
}

function startGearEdit(id) {
  const item = gear.find((gearItem) => gearItem.id === id);
  const gearForm = document.querySelector("#gear-form");
  if (!item || !gearForm) return;

  editingGearId = id;
  gearForm.elements.category.value = item.category || "other";
  syncGearStatusOptions(item.status);
  gearForm.elements.brand.value = item.brand || "";
  gearForm.elements.name.value = item.name || "";
  gearForm.elements.nickname.value = item.nickname || "";
  gearForm.elements.purchaseDate.value = item.purchaseDate || "";
  gearForm.elements.price.value = item.price ?? "";
  gearForm.elements.notes.value = item.notes || "";
  selectedGearPhotoData = item.imageData || "";
  selectedGearPhotoPromise = null;
  const gearPhoto = document.querySelector("#gear-photo");
  if (gearPhoto) gearPhoto.value = "";
  renderGearPhotoPreview();
  updateGearFormMode();
  setGearFormCollapsed(false);
  gearForm.scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => gearForm.elements.name.focus(), 260);
  notify("已切到修改模式。");
}

function renderGearPhotoPreview() {
  const preview = document.querySelector("#gear-photo-preview");
  const clearButton = document.querySelector("#gear-photo-clear");
  if (!preview || !clearButton) return;

  preview.classList.toggle("has-image", Boolean(selectedGearPhotoData));
  preview.style.backgroundImage = selectedGearPhotoData ? `url(${selectedGearPhotoData})` : "";
  preview.innerHTML = selectedGearPhotoData ? "<span>已选择照片</span>" : `<span>${escapeHtml(getGearPlaceholderHint().photo)}</span>`;
  clearButton.hidden = !selectedGearPhotoData;
}

function readAndCompressImage(file) {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith("image/")) {
      reject(new Error("Not an image"));
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => reject(reader.error || new Error("Read failed"));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error("Image decode failed"));
      image.onload = () => {
        const maxSize = 900;
        const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
        const width = Math.max(1, Math.round(image.width * scale));
        const height = Math.max(1, Math.round(image.height * scale));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const context = canvas.getContext("2d");
        context.fillStyle = "#fffdf3";
        context.fillRect(0, 0, width, height);
        context.drawImage(image, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function renderAll() {
  renderHome();
  renderCalendar();
  renderMatches();
  renderGear();
  renderSimulator();
}

function renderHome() {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const monthMatches = matches.filter((match) => {
    const date = parseISODate(match.date);
    return date.getFullYear() === currentYear && date.getMonth() === currentMonth;
  });
  const resultMatches = matches.filter((match) => match.result === "win" || match.result === "loss");
  const wins = resultMatches.filter((match) => match.result === "win").length;
  const winRate = resultMatches.length ? Math.round((wins / resultMatches.length) * 100) : 0;
  const totalGearValue = gear.reduce((sum, item) => sum + (Number(item.price) || 0), 0);
  const latestMatch = [...matches].sort(sortByDateDesc)[0];

  setText("#home-month-count", String(monthMatches.length));
  setText("#home-win-rate", `${winRate}%`);
  setText("#home-gear-value", formatCurrency(totalGearValue));

  if (latestMatch) {
    const titleParts = [formatShortDate(latestMatch.date), typeLabels[latestMatch.type]];
    const detailParts = [
      resultLabels[latestMatch.result] || "记录",
      latestMatch.scores || "未写比分",
      getMatchTimeText(latestMatch),
      getMatchPeopleText(latestMatch),
      latestMatch.venue ? `在 ${latestMatch.venue}` : "",
    ];
    setText("#home-latest-title", titleParts.filter(Boolean).join(" · "));
    setText("#home-latest-detail", detailParts.filter(Boolean).join(" · "));
  } else {
    setText("#home-latest-title", "还没有记录");
    setText("#home-latest-detail", "点下面的“记一场”，把第一场毕业后的球记下来。");
  }
}

function renderCalendar() {
  const title = document.querySelector("#calendar-title");
  const grid = document.querySelector("#calendar-grid");
  const year = visibleMonth.getFullYear();
  const month = visibleMonth.getMonth();
  const first = new Date(year, month, 1);
  const startOffset = first.getDay();
  const gridStart = new Date(year, month, 1 - startOffset);
  const matchDates = new Set(matches.map((match) => match.date));

  title.textContent = `${year} 年 ${month + 1} 月`;
  grid.innerHTML = "";

  for (let index = 0; index < 42; index += 1) {
    const date = addDays(gridStart, index);
    const iso = toISODate(date);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "day-button";
    button.dataset.date = iso;
    button.textContent = String(date.getDate());
    if (date.getMonth() !== month) button.classList.add("is-muted");
    if (matchDates.has(iso)) button.classList.add("has-match");
    if (selectedDate === iso) button.classList.add("is-selected");
    grid.appendChild(button);
  }
}

function renderMatches() {
  const list = document.querySelector("#match-list");
  const search = clean(document.querySelector("#match-search").value).toLowerCase();
  const filter = document.querySelector("#match-filter").value;
  let visible = [...matches];

  if (selectedDate) {
    visible = visible.filter((match) => match.date === selectedDate);
  }

  if (filter !== "all") {
    visible = visible.filter((match) => match.result === filter);
  }

  if (search) {
    visible = visible.filter((match) => {
      const text = [
        match.opponent,
        match.teammate,
        match.opponentOne,
        match.opponentTwo,
        match.startTime,
        match.endTime,
        match.venue,
        match.scores,
        match.notes,
        typeLabels[match.type],
        resultLabels[match.result],
      ]
        .join(" ")
        .toLowerCase();
      return text.includes(search);
    });
  }

  visible.sort(sortByDateDesc);

  const title = selectedDate ? `${formatShortDate(selectedDate)} 的记录` : "全部记录";
  setText("#match-list-title", `${title} (${visible.length})`);

  if (!visible.length) {
    list.innerHTML = `<p class="empty-state">这里还没有对局。可以点日历换一天，或在上面新增一场。</p>`;
    return;
  }

  list.innerHTML = visible.map(renderMatchCard).join("");
}

function renderMatchCard(match) {
  const rating = "★★★★★".slice(0, Number(match.rating) || 0);
  const peopleText = getMatchPeopleText(match);
  const timeText = getMatchTimeText(match);
  return `
    <article class="item-card">
      <div class="item-main">
        <div>
          <h3 class="item-title">${escapeHtml(formatShortDate(match.date))} · ${escapeHtml(typeLabels[match.type] || "对局")}</h3>
          <p class="item-meta">${escapeHtml(peopleText || "未写对手")} · ${escapeHtml(match.venue || "未写场地")}</p>
        </div>
        <button class="delete-button" type="button" data-delete-match="${escapeHtml(match.id)}" aria-label="删除对局">×</button>
      </div>
      <div class="tag-row">
        <span class="tag melon">${escapeHtml(resultLabels[match.result] || "记录")}</span>
        ${timeText ? `<span class="tag">${escapeHtml(timeText)}</span>` : ""}
        ${match.scores ? `<span class="tag">${escapeHtml(match.scores)}</span>` : ""}
        ${match.shuttleCount ? `<span class="tag">用球 ${escapeHtml(match.shuttleCount)} 个</span>` : ""}
        ${rating ? `<span class="tag">${rating}</span>` : ""}
      </div>
      ${match.notes ? `<p class="item-note">${escapeHtml(match.notes)}</p>` : ""}
    </article>
  `;
}

function renderGear() {
  const total = gear.reduce((sum, item) => sum + (Number(item.price) || 0), 0);
  const activeCount = gear.filter(isGearAvailable).length;

  setText("#gear-total-value", formatCurrency(total));
  setText("#gear-total-count", String(gear.length));
  setText("#gear-active-count", String(activeCount));

  renderGearBars(total);
  renderGearList();
}

function renderGearBars(totalValue) {
  const bars = document.querySelector("#gear-bars");
  const grouped = gear.reduce((acc, item) => {
    const key = item.category || "other";
    if (!acc[key]) acc[key] = { value: 0, count: 0 };
    acc[key].value += Number(item.price) || 0;
    acc[key].count += 1;
    return acc;
  }, {});

  const entries = Object.entries(grouped);
  if (!entries.length) {
    bars.innerHTML = `<p class="empty-state">装备柜还是空的，先放一支球拍进去吧。</p>`;
    return;
  }

  const maxCount = Math.max(...entries.map(([, item]) => item.count), 1);
  bars.innerHTML = entries
    .map(([category, item]) => {
      const percent = totalValue > 0 ? Math.round((item.value / totalValue) * 100) : Math.round((item.count / maxCount) * 100);
      const width = Math.max(percent, 7);
      const label = totalValue > 0 ? `${formatCurrency(item.value)} · ${percent}%` : `${item.count} 件`;
      return `
        <div class="bar-item">
          <div class="bar-head">
            <span>${escapeHtml(categoryLabels[category] || "其他")}</span>
            <span>${escapeHtml(label)}</span>
          </div>
          <div class="bar-track"><div class="bar-fill" style="width: ${width}%"></div></div>
        </div>
      `;
    })
    .join("");
}

function renderGearList() {
  const list = document.querySelector("#gear-list");
  if (!gear.length) {
    list.innerHTML = `<p class="empty-state">还没有装备。加一支拍子，它就会出现在这里。</p>`;
    return;
  }

  list.innerHTML = Object.keys(categoryLabels)
    .map((category) => {
      const items = gear.filter((item) => (item.category || "other") === category);
      if (!items.length) return "";
      const value = items.reduce((sum, item) => sum + (Number(item.price) || 0), 0);
      const isCollapsed = collapsedGearCategories.has(category);
      return `
        <section class="gear-category-section ${isCollapsed ? "is-collapsed" : ""}">
          <button class="gear-category-head" type="button" data-toggle-gear-category="${escapeHtml(category)}" aria-expanded="${String(!isCollapsed)}">
            <span class="gear-category-title">
              <span class="eyebrow">${escapeHtml(categoryLabels[category])}</span>
              <span class="gear-category-count">${escapeHtml(items.length)} 件装备</span>
            </span>
            <span class="gear-category-value">${escapeHtml(formatCurrency(value))}</span>
            <svg class="collapse-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 10l5 5 5-5" />
            </svg>
          </button>
          <div class="gear-category-items">
            ${items.map(renderGearCard).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderGearCard(item) {
  const image = item.imageData
    ? `<img src="${escapeHtml(item.imageData)}" alt="${escapeHtml(item.nickname || item.name)}" />`
    : getGearIconSvg(item.category || "other");

  return `
    <article class="item-card gear-card">
      <div class="gear-card-layout">
        <div class="gear-thumb ${item.imageData ? "has-image" : ""}">
          ${image}
        </div>
        <div class="gear-card-body">
          <div class="item-main">
            <div>
              <h3 class="item-title">${escapeHtml(item.nickname || item.name)}</h3>
              <p class="item-meta">${escapeHtml(item.brand || "未写品牌")} · ${escapeHtml(item.name)}</p>
            </div>
            <div class="gear-card-actions">
              <button class="edit-button" type="button" data-edit-gear="${escapeHtml(item.id)}" aria-label="编辑装备">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 20l5-1 10-10-4-4L5 15zM13 7l4 4" />
                </svg>
              </button>
              <button class="delete-button" type="button" data-delete-gear="${escapeHtml(item.id)}" aria-label="删除装备">×</button>
            </div>
          </div>
          <div class="tag-row">
            <span class="tag melon">${escapeHtml(categoryLabels[item.category] || "其他")}</span>
            <span class="tag">${escapeHtml(getGearStatusLabel(item))}</span>
            ${item.price ? `<span class="tag sky">${escapeHtml(formatCurrency(item.price))}</span>` : ""}
            ${item.purchaseDate ? `<span class="tag">${escapeHtml(formatShortDate(item.purchaseDate))}</span>` : ""}
          </div>
          ${item.notes ? `<p class="item-note">${escapeHtml(item.notes)}</p>` : ""}
        </div>
      </div>
    </article>
  `;
}

function getGearIconSvg(category) {
  const icons = {
    racket: `
      <svg class="gear-thumb-icon" viewBox="0 0 64 64" aria-hidden="true">
        <ellipse cx="25" cy="21" rx="16" ry="20" transform="rotate(-30 25 21)" fill="#fffdf3" stroke="currentColor" stroke-width="5" />
        <path d="M16 12l20 30M10 23l30-17M13 32l31-18M21 40l27-16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity=".9" />
        <path d="M37 37l9 9M44 44l11 11M50 58l8-8" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20 7c10-2 20 5 22 15" fill="none" stroke="#ff6c61" stroke-width="5" stroke-linecap="round" />
      </svg>
    `,
    shuttle: `
      <svg class="gear-thumb-icon" viewBox="0 0 64 64" aria-hidden="true">
        <path d="M12 9l29 31M27 6l17 34M43 9l4 33" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" />
        <path d="M10 9l15 2 15 29-18-3zM27 6l16 5 1 29-15-8zM43 9l11 10-7 23-11-12z" fill="#fffdf3" stroke="currentColor" stroke-width="5" stroke-linejoin="round" />
        <path d="M39 40l8 8" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" />
        <path d="M44 45c6-3 13 2 14 8 .5 5-4 9-10 8-6-1-10-7-8-12 1-2 2-3 4-4z" fill="#ff6c61" stroke="currentColor" stroke-width="5" stroke-linejoin="round" />
      </svg>
    `,
    shoes: `
      <svg class="gear-thumb-icon" viewBox="0 0 64 64" aria-hidden="true">
        <path d="M10 39c11 2 18-4 24-14 6 8 11 13 20 15 3 4 1 10-5 11H16c-7 0-10-6-6-12z" fill="#ff6c61" stroke="currentColor" stroke-width="6" stroke-linejoin="round" />
        <path d="M22 39h11M36 39h9" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" />
      </svg>
    `,
    clothes: `
      <svg class="gear-thumb-icon" viewBox="0 0 64 64" aria-hidden="true">
        <path d="M22 12c3 5 17 5 20 0l12 9-8 12-5-3v22H23V30l-5 3-8-12z" fill="#ff6c61" stroke="currentColor" stroke-width="6" stroke-linejoin="round" />
        <path d="M25 17c4 5 10 5 14 0" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" />
      </svg>
    `,
    bag: `
      <svg class="gear-thumb-icon" viewBox="0 0 64 64" aria-hidden="true">
        <path d="M22 22v-4c0-7 5-11 10-11s10 4 10 11v4" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" />
        <path d="M13 22h38l-3 33H16z" fill="#ff6c61" stroke="currentColor" stroke-width="6" stroke-linejoin="round" />
        <path d="M24 37h16" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" />
      </svg>
    `,
    accessory: `
      <svg class="gear-thumb-icon" viewBox="0 0 64 64" aria-hidden="true">
        <path d="M34 5l-6 20 18-3-20 37 5-24-16 3z" fill="#fff266" stroke="currentColor" stroke-width="6" stroke-linejoin="round" />
      </svg>
    `,
    other: `
      <svg class="gear-thumb-icon" viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 8l7 15 16 2-12 11 3 16-14-8-14 8 3-16L9 25l16-2z" fill="#ff6c61" stroke="currentColor" stroke-width="6" stroke-linejoin="round" />
      </svg>
    `,
  };

  return icons[category] || icons.other;
}

function setGameDifficulty(difficulty) {
  if (!gameConfig[difficulty]) return;
  gameState.difficulty = difficulty;
  document.querySelectorAll("[data-difficulty]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.difficulty === difficulty);
  });
  if (!gameState.running && !gameState.over) {
    prepareNextServe(gameState.server, `电脑难度：${gameConfig[difficulty].label}`, "难度会从下一球开始生效。");
  } else {
    updateRallyText(`电脑难度：${gameConfig[difficulty].label}`, "本拍结束后会更明显。");
  }
}

function toggleGameRunning() {
  if (gameState.over) {
    resetGame();
  }

  gameState.running = !gameState.running;
  if (gameState.running) {
    unlockAudio();
    playGameSound("start");
    gameState.lastTime = performance.now();
    if (!gameState.shot) prepareNextServe(gameState.server);
    updateRallyText("比赛开始", "拖动好奇到球拍甜区，先到 11 分结束。");
    gameState.animationFrame = requestAnimationFrame(gameLoop);
  } else {
    pauseGame("已暂停", "按继续就能回到这一局。");
  }
  renderSimulator();
}

function pauseGame(title = "已暂停", note = "按继续就能回到这一局。") {
  gameState.running = false;
  cancelAnimationFrame(gameState.animationFrame);
  document.body.classList.remove("game-running");
  updateRallyText(title, note);
  renderSimulator();
}

function resetGame() {
  cancelAnimationFrame(gameState.animationFrame);
  const difficulty = gameState.difficulty;
  gameState = initialGameState();
  gameState.difficulty = difficulty;
  prepareNextServe("player", "准备开始", "真实单打规则：得分方发球，偶数右区、奇数左区。");
  renderSimulator();
}

function gameLoop(timestamp) {
  if (!gameState.running) return;
  const delta = Math.min((timestamp - gameState.lastTime) / 1000, 0.032);
  gameState.lastTime = timestamp;
  updateGame(delta);
  renderSimulator();
  if (gameState.running) {
    gameState.animationFrame = requestAnimationFrame(gameLoop);
  }
}

function updateGame(delta) {
  gameState.elapsed += delta;
  gameState.swingTimer = Math.max(0, gameState.swingTimer - delta);
  dragState.velocity = Math.max(0, dragState.velocity - delta * 240);

  if (gameState.phase === "point") {
    gameState.pointTimer -= delta;
    if (gameState.pointTimer <= 0) {
      prepareNextServe(gameState.server);
    }
    return;
  }

  if (!gameState.shot) return;
  advanceShot(delta);
  updatePlayerFacingForShot();
  const config = gameConfig[gameState.difficulty];
  updateOpponent(delta, config);
  tryReturnShot(config);
  if (gameState.shot && gameState.shot.progress >= 1) settleShot();
}

function updateOpponent(delta, config) {
  const shot = gameState.shot;
  const ready = getReadyPosition("opponent", gameState.serveSide);
  const intercept = shot && shot.receiver === "opponent" ? getOpponentInterceptPoint(shot, config) : null;
  const targetX = intercept ? intercept.x - 50 : ready.x;
  const targetY = intercept ? intercept.y - 86 : ready.y;
  const speedBoost = Math.min(gameState.rallyCount * config.opponentSpeedUp, config.maxOpponentBoost);
  const maxMoveX = (config.opponentSpeed + speedBoost) * delta;
  const maxMoveY = (config.opponentFootworkY + speedBoost * 0.62) * delta;
  const dx = targetX - gameState.opponent.x;
  const dy = targetY - gameState.opponent.y;
  gameState.opponent.x += clamp(dx, -maxMoveX, maxMoveX);
  gameState.opponent.y += clamp(dy, -maxMoveY, maxMoveY);
  gameState.opponent.x = clamp(gameState.opponent.x, courtBounds.singlesLeft, courtBounds.singlesRight);
  gameState.opponent.y = clamp(gameState.opponent.y, courtBounds.opponentTop, courtBounds.opponentBottom);
}

function updatePlayerFacingForShot() {
  const shot = gameState.shot;
  if (!shot || shot.receiver !== "player" || dragState.active) return;
  gameState.playerFacing = gameState.shuttle.x >= gameState.player.x ? "right" : "left";
}

function getOpponentInterceptPoint(shot, config) {
  const topDepth = clamp((shot.targetY - courtBounds.topBack) / (courtBounds.netY - courtBounds.topBack), 0, 1);
  const idealProgress = lerp(0.48, 0.79, topDepth);
  const lag = (1 - config.opponentAnticipation) * 0.12;
  const interceptProgress = clamp(Math.max(shot.progress + lag, idealProgress), 0.42, 0.88);
  return getShotPointAtProgress(shot, interceptProgress);
}

function prepareNextServe(server = gameState.server, title = "", note = "") {
  gameState.phase = "serve";
  gameState.server = server;
  gameState.serveSide = getServeSide(server);
  gameState.rallyCount = 0;
  const serverPos = getServePosition(server, gameState.serveSide);
  const receiver = otherSide(server);
  const receiverPos = getReceivePosition(receiver, gameState.serveSide);
  gameState.player = server === "player" ? { ...serverPos } : { ...receiverPos };
  gameState.opponent = server === "opponent" ? { ...serverPos } : { ...receiverPos };
  gameState.playerFacing = gameState.player.x >= courtBounds.centerX ? "left" : "right";
  syncPlayerAimFromBody();
  const serveFrom = server === "player" ? getPlayerRacketPoint() : getOpponentRacketPoint();
  startShot({
    hitter: server,
    receiver,
    kind: "serve",
    from: serveFrom,
    target: chooseServeTarget(server, gameState.serveSide),
    legalBox: getServeLegalBox(server, gameState.serveSide),
    duration: getServeDuration(server),
  });
  updateServeZones();
  updateRallyText(title || `${server === "player" ? "好奇" : "对手"}${gameState.serveSide === "right" ? "右区" : "左区"}发球`, note || "线算界内，接住对角发球区里的球。");
}

function startShot({ hitter, receiver, kind, from, target, legalBox, duration }) {
  gameState.phase = kind === "serve" ? "serve" : "rally";
  gameState.shot = {
    hitter,
    receiver,
    kind,
    fromX: from.x,
    fromY: from.y,
    targetX: target.x,
    targetY: target.y,
    legalBox,
    duration,
    progress: 0,
    touched: false,
    judgedMiss: false,
    willMiss: false,
  };
  gameState.shuttle.x = from.x;
  gameState.shuttle.y = from.y;
  gameState.shuttle.angle = hitter === "player" ? -18 : 18;
  if (gameState.running && kind === "serve") playGameSound("serve", { side: hitter });
}

function advanceShot(delta) {
  const shot = gameState.shot;
  shot.progress = Math.min(1, shot.progress + (delta * 1000) / shot.duration);
  const point = getShotPointAtProgress(shot, shot.progress);
  gameState.shuttle.x = point.x;
  gameState.shuttle.y = point.y;
  gameState.shuttle.angle += (shot.targetX >= shot.fromX ? 220 : -220) * delta;
  gameState.shuttle.scale = 1 + Math.sin(Math.PI * shot.progress) * 0.22;
}

function getShotPointAtProgress(shot, progress) {
  const eased = easeInOut(progress);
  const arc = Math.sin(Math.PI * progress) * 62;
  return {
    x: lerp(shot.fromX, shot.targetX, eased),
    y: lerp(shot.fromY, shot.targetY, eased) - arc,
  };
}

function tryReturnShot(config) {
  const shot = gameState.shot;
  if (!shot || shot.touched) return;

  if (shot.receiver === "player") {
    if (shot.progress < 0.56 || shot.progress > 0.94) return;
    const hitPoint = getPlayerRacketPoint();
    const distance = Math.hypot(gameState.shuttle.x - hitPoint.x, gameState.shuttle.y - hitPoint.y);
    const quality = getPlayerHitQuality(distance, config, shot.progress);
    if (!quality) return;
    hitShot("player", quality);
    return;
  }

  if (!shot.judgedMiss) {
    shot.judgedMiss = true;
    shot.willMiss = Math.random() < getOpponentMissChance(config, shot);
  }
  if (shot.progress < 0.42 || shot.progress > 0.92) return;
  const hitPoint = getOpponentRacketPoint();
  const distance = Math.hypot(gameState.shuttle.x - hitPoint.x, gameState.shuttle.y - hitPoint.y);
  const quality = getOpponentHitQuality(distance, config, shot.progress);
  if (shot.willMiss || !quality) return;
  hitShot("opponent", quality);
}

function hitShot(hitter, quality = "clean") {
  const shot = gameState.shot;
  if (!shot || shot.receiver !== hitter) return;
  shot.touched = true;
  gameState.lastHitQuality = quality;
  gameState.rallyCount += 1;
  const receiver = otherSide(hitter);
  const target = chooseRallyTarget(receiver, quality);
  const duration = getRallyDuration(quality);
  startShot({
    hitter,
    receiver,
    kind: "rally",
    from: { x: gameState.shuttle.x, y: gameState.shuttle.y },
    target,
    legalBox: getRallyLegalBox(receiver),
    duration,
  });
  pulseHit(hitter);
  playGameSound("hit", { side: hitter, quality });
  const qualityLabel = getHitQualityLabel(quality);
  updateRallyText(hitter === "player" ? `${qualityLabel} · 第 ${gameState.rallyCount} 拍` : `对手${qualityLabel} · 第 ${gameState.rallyCount} 拍`, hitter === "player" ? "球已经过网，准备下一拍。" : "看落点，拖动到球拍甜区。");
}

function getServeDuration(server) {
  const config = gameConfig[gameState.difficulty];
  return Math.round(config.serveMs * (server === "opponent" ? 0.94 : 1));
}

function getRallyDuration(quality = "clean") {
  const config = gameConfig[gameState.difficulty];
  const qualityPace = {
    perfect: 0.9,
    clean: 1,
    stretch: 1.08,
    rescue: 1.16,
  };
  const speedUp = Math.min(gameState.rallyCount * config.speedUpPerHit, config.maxSpeedUp);
  return Math.round(Math.max(config.minRallyMs, (config.rallyMs - speedUp) * (qualityPace[quality] || 1)));
}

function getOpponentMissChance(config, shot) {
  if (shot.kind === "serve") return 0;
  const longRallyBonus = Math.min(gameState.rallyCount * config.longRallyMissBonus, config.maxLongRallyMissBonus);
  const pressureBonus = gameState.playerScore - gameState.opponentScore >= 3 ? config.pressureMissBonus : 0;
  const opponentLeadFocus = gameState.opponentScore - gameState.playerScore >= 3 ? 0.75 : 1;
  return clamp((config.missChance + longRallyBonus + pressureBonus) * opponentLeadFocus, 0, 0.55);
}

function getPlayerHitQuality(distance, config, progress) {
  const reach = config.playerReach;
  const effectiveReach = reach + config.playerLungeReach;
  if (distance > effectiveReach) return "";
  const sweet = 1 - Math.min(distance, reach) / reach;
  const timing = clamp(1 - Math.abs(progress - 0.78) / 0.24, 0, 1);
  const swing = clamp((dragState.velocity - 60) / 210, 0, 0.38) + (gameState.swingTimer > 0 ? 0.1 : 0);
  const score = sweet * 0.68 + timing * 0.26 + swing;

  if (distance <= reach * 0.32 && timing > 0.35) return "perfect";
  if (distance <= reach * 0.68 && score >= 0.72) return "clean";
  if (score >= 0.54) return "stretch";
  if ((score >= 0.44 || distance > reach) && dragState.velocity > 110) return "rescue";
  return "";
}

function getOpponentHitQuality(distance, config, progress) {
  const reach = config.opponentReach;
  const effectiveReach = reach + config.opponentLungeReach;
  if (distance > effectiveReach) return "";
  const timing = clamp(1 - Math.abs(progress - 0.7) / 0.3, 0, 1);
  if (distance <= reach * 0.42 && timing > 0.45) return "perfect";
  if (distance <= reach * 0.78) return "clean";
  return timing > 0.25 ? "stretch" : "rescue";
}

function getHitQualityLabel(quality) {
  const labels = {
    perfect: "完美甜区",
    clean: "甜区命中",
    stretch: "擦边救球",
    rescue: "极限捞起",
  };
  return labels[quality] || "回球";
}

function getHitQualityModifier(quality) {
  const modifiers = {
    perfect: { out: 0.38, spread: 0.68 },
    clean: { out: 0.65, spread: 0.86 },
    stretch: { out: 1.35, spread: 1.18 },
    rescue: { out: 1.75, spread: 1.35 },
  };
  return modifiers[quality] || modifiers.clean;
}

function settleShot() {
  const shot = gameState.shot;
  if (!shot) return;
  const landedIn = pointInBox(shot.targetX, shot.targetY, shot.legalBox);

  if (shot.kind === "serve" && !landedIn) {
    scorePoint(shot.receiver, "发球失误");
    return;
  }

  if (landedIn) {
    scorePoint(shot.hitter, shot.receiver === "player" ? "没接到" : "对手没接到");
  } else {
    scorePoint(shot.receiver, "出界");
  }
}

function scorePoint(winner, reason = "") {
  if (winner === "player") {
    gameState.playerScore += 1;
  } else {
    gameState.opponentScore += 1;
  }
  pulseScore(winner);
  playGameSound("score", { winner, reason });

  gameState.server = winner;
  gameState.phase = "point";
  gameState.lastPointReason = reason;
  gameState.shot = null;
  const hasWinner = gameState.playerScore >= 11 || gameState.opponentScore >= 11;
  const gamePoint = gameState.playerScore === 10 || gameState.opponentScore === 10;
  gameState.pointTimer = getPointPause(reason, gamePoint);
  if (hasWinner) {
    finishGame();
    return;
  }

  const nextSide = getServeSide(winner);
  updateRallyText(
    `${winner === "player" ? "好奇" : "对手"}得分 · ${reason}`,
    `${gamePoint ? "局点！" : ""}下一球由${winner === "player" ? "好奇" : "对手"}${nextSide === "right" ? "右区" : "左区"}发球。`
  );
}

function finishGame() {
  gameState.running = false;
  gameState.over = true;
  gameState.phase = "finished";
  cancelAnimationFrame(gameState.animationFrame);
  document.body.classList.remove("game-running");
  const playerWon = gameState.playerScore > gameState.opponentScore;
  playGameSound("finish", { winner: playerWon ? "player" : "opponent" });
  updateRallyText(playerWon ? "好奇拿下这一局" : "对手先到 11 分", `最终比分 ${gameState.playerScore}:${gameState.opponentScore}，点再来打一局。`);
  renderSimulator();
}

function getPointPause(reason, gamePoint = false) {
  const config = gameConfig[gameState.difficulty];
  const faultPause = reason === "发球失误" || reason === "出界" ? 0.12 : 0;
  const gamePointPause = gamePoint ? 0.22 : 0;
  return config.pointPause + faultPause + gamePointPause;
}

function pulseHit(side) {
  const actor = side === "player" ? gameEls.player : gameEls.opponent;
  const ring = side === "player" ? gameEls.playerHitRing : gameEls.opponentHitRing;
  [actor, ring].forEach((node) => {
    if (!node) return;
    node.classList.remove("is-hitting");
    void node.getBoundingClientRect();
    node.classList.add("is-hitting");
    window.setTimeout(() => node.classList.remove("is-hitting"), 220);
  });
}

function pulseScore(side) {
  const card = side === "player" ? gameEls.playerScoreCard : gameEls.opponentScoreCard;
  if (!card) return;
  card.classList.remove("score-pop");
  void card.getBoundingClientRect();
  card.classList.add("score-pop");
  window.setTimeout(() => card.classList.remove("score-pop"), 260);
}

function handleCourtPointerDown(event) {
  unlockAudio();
  dragState.active = true;
  dragState.pointerId = event.pointerId;
  dragState.lastTime = 0;
  dragState.velocity = 0;
  gameState.swingTimer = 0.12;
  event.currentTarget.setPointerCapture(event.pointerId);
  movePlayerToPointer(event);
}

function handleCourtPointerMove(event) {
  if (!dragState.active || dragState.pointerId !== event.pointerId) return;
  movePlayerToPointer(event);
}

function handleCourtPointerUp(event) {
  if (dragState.pointerId !== event.pointerId) return;
  dragState.active = false;
  dragState.pointerId = null;
  dragState.lastTime = 0;
}

function movePlayerToPointer(event) {
  const svg = document.querySelector("#court-svg");
  const point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  const svgPoint = point.matrixTransform(svg.getScreenCTM().inverse());
  const before = getPlayerRacketPoint();
  const desiredHitX = clamp(svgPoint.x, courtBounds.singlesLeft, courtBounds.singlesRight);
  const desiredHitY = clamp(svgPoint.y - 18, courtBounds.playerAimTop, courtBounds.bottomBack);
  setPlayerAim({ x: desiredHitX, y: desiredHitY });
  const after = getPlayerRacketPoint();
  const now = getNowMs();
  if (dragState.lastTime) {
    const seconds = Math.max((now - dragState.lastTime) / 1000, 0.016);
    const speed = Math.hypot(after.x - before.x, after.y - before.y) / seconds;
    dragState.velocity = Math.max(dragState.velocity * 0.35, speed);
    if (speed > 82) gameState.swingTimer = 0.18;
  }
  dragState.lastX = after.x;
  dragState.lastY = after.y;
  dragState.lastTime = now;
  renderSimulator();
}

function setPlayerAim(point) {
  const aim = clampPlayerAim(point);
  gameState.playerFacing = getPlayerFacingForAim(aim.x);
  gameState.playerAim = aim;
  gameState.player.x = clamp(aim.x - getPlayerRacketOffsetX(), courtBounds.singlesLeft, courtBounds.singlesRight);
  gameState.player.y = clamp(aim.y - getPlayerRacketOffsetY(), courtBounds.playerTop, courtBounds.playerBottom);
}

function syncPlayerAimFromBody() {
  setPlayerAim({
    x: gameState.player.x + getPlayerRacketOffsetX(),
    y: gameState.player.y + getPlayerRacketOffsetY(),
  });
}

function clampPlayerAim(point) {
  return {
    x: clamp(point.x, courtBounds.singlesLeft, courtBounds.singlesRight),
    y: clamp(point.y, courtBounds.playerAimTop, courtBounds.bottomBack),
  };
}

function getPlayerFacingForAim(x) {
  const deadZone = 8;
  if (x > courtBounds.centerX + deadZone) return "right";
  if (x < courtBounds.centerX - deadZone) return "left";
  return gameState.playerFacing || "right";
}

function otherSide(side) {
  return side === "player" ? "opponent" : "player";
}

function getScore(side) {
  return side === "player" ? gameState.playerScore : gameState.opponentScore;
}

function getServeSide(server) {
  return getScore(server) % 2 === 0 ? "right" : "left";
}

function getServePosition(side, serveSide) {
  if (side === "player") {
    return {
      x: serveSide === "right" ? 232 : 128,
      y: 382,
    };
  }
  return {
    x: serveSide === "right" ? 128 : 232,
    y: 110,
  };
}

function getReceivePosition(side, serveSide) {
  if (side === "player") {
    return {
      x: serveSide === "right" ? 232 : 128,
      y: 374,
    };
  }
  return {
    x: serveSide === "right" ? 128 : 232,
    y: 125,
  };
}

function getReadyPosition(side, serveSide = gameState.serveSide) {
  return side === "player" ? getReceivePosition("player", serveSide) : getReceivePosition("opponent", serveSide);
}

function getServeLegalBox(server, serveSide) {
  if (server === "player") {
    return serveSide === "right"
      ? makeBox(courtBounds.singlesLeft, courtBounds.topBack, courtBounds.centerX, courtBounds.topShortServiceY)
      : makeBox(courtBounds.centerX, courtBounds.topBack, courtBounds.singlesRight, courtBounds.topShortServiceY);
  }
  return serveSide === "right"
    ? makeBox(courtBounds.centerX, courtBounds.bottomShortServiceY, courtBounds.singlesRight, courtBounds.bottomBack)
    : makeBox(courtBounds.singlesLeft, courtBounds.bottomShortServiceY, courtBounds.centerX, courtBounds.bottomBack);
}

function getRallyLegalBox(receiver) {
  return receiver === "player"
    ? makeBox(courtBounds.singlesLeft, courtBounds.netY, courtBounds.singlesRight, courtBounds.bottomBack)
    : makeBox(courtBounds.singlesLeft, courtBounds.topBack, courtBounds.singlesRight, courtBounds.netY);
}

function makeBox(left, top, right, bottom) {
  return { left, top, right, bottom };
}

function pointInBox(x, y, box) {
  return x >= box.left && x <= box.right && y >= box.top && y <= box.bottom;
}

function chooseServeTarget(server, serveSide) {
  const box = getServeLegalBox(server, serveSide);
  const config = gameConfig[gameState.difficulty];
  const goesOut = Math.random() < config.outChance * 0.35;
  return randomPointInOrNearBox(box, goesOut, 12);
}

function chooseRallyTarget(receiver, quality = "clean") {
  const box = getRallyLegalBox(receiver);
  const config = gameConfig[gameState.difficulty];
  const modifier = getHitQualityModifier(quality);
  const goesOut = Math.random() < Math.min(0.52, config.outChance * modifier.out);
  return randomPointInOrNearBox(box, goesOut, config.targetSpread * modifier.spread);
}

function randomPointInOrNearBox(box, goesOut, spread) {
  if (!goesOut) {
    return {
      x: randomBetween(box.left + 12, box.right - 12),
      y: randomBetween(box.top + 18, box.bottom - 18),
    };
  }

  const side = Math.floor(Math.random() * 4);
  const offset = randomBetween(10, spread);
  if (side === 0) return { x: box.left - offset, y: randomBetween(box.top, box.bottom) };
  if (side === 1) return { x: box.right + offset, y: randomBetween(box.top, box.bottom) };
  if (side === 2) return { x: randomBetween(box.left, box.right), y: box.top - offset };
  return { x: randomBetween(box.left, box.right), y: box.bottom + offset };
}

function getPlayerRacketPoint() {
  if (gameState.playerAim) return clampPlayerAim(gameState.playerAim);
  return clampPlayerAim({
    x: gameState.player.x + getPlayerRacketOffsetX(),
    y: gameState.player.y + getPlayerRacketOffsetY(),
  });
}

function getPlayerRacketOffsetX() {
  return gameState.playerFacing === "right" ? 56 : -56;
}

function getPlayerRacketOffsetY() {
  return -16;
}

function getOpponentRacketPoint() {
  return {
    x: gameState.opponent.x + 50,
    y: gameState.opponent.y + 86,
  };
}

function updateServeZones() {
  const serverBox = getOwnServeBox(gameState.server, gameState.serveSide);
  const receiverBox = getServeLegalBox(gameState.server, gameState.serveSide);
  setSvgRect(gameEls.serverZone, serverBox);
  setSvgRect(gameEls.receiverZone, receiverBox);
}

function getOwnServeBox(server, serveSide) {
  if (server === "player") {
    return serveSide === "right"
      ? makeBox(courtBounds.centerX, courtBounds.bottomShortServiceY, courtBounds.singlesRight, courtBounds.bottomBack)
      : makeBox(courtBounds.singlesLeft, courtBounds.bottomShortServiceY, courtBounds.centerX, courtBounds.bottomBack);
  }
  return serveSide === "right"
    ? makeBox(courtBounds.singlesLeft, courtBounds.topBack, courtBounds.centerX, courtBounds.topShortServiceY)
    : makeBox(courtBounds.centerX, courtBounds.topBack, courtBounds.singlesRight, courtBounds.topShortServiceY);
}

function setSvgRect(rect, box) {
  if (!rect) return;
  rect.setAttribute("x", String(box.left));
  rect.setAttribute("y", String(box.top));
  rect.setAttribute("width", String(box.right - box.left));
  rect.setAttribute("height", String(box.bottom - box.top));
}

function renderSimulator() {
  if (!gameEls.player || !gameEls.opponent || !gameEls.shuttle) return;

  if (gameEls.playerScore) gameEls.playerScore.textContent = String(gameState.playerScore);
  if (gameEls.opponentScore) gameEls.opponentScore.textContent = String(gameState.opponentScore);
  if (gameEls.startButton) {
    gameEls.startButton.textContent = gameState.over ? "再来" : gameState.running ? "暂停" : gameState.playerScore || gameState.opponentScore ? "继续" : "开始";
  }

  gameEls.player.style.transform = `translate(${gameState.player.x - 180}px, ${gameState.player.y - 415}px)`;
  gameEls.opponent.style.transform = `translate(${gameState.opponent.x - 180}px, ${gameState.opponent.y - 105}px)`;
  gameEls.shuttle.style.transform = `translate(${gameState.shuttle.x}px, ${gameState.shuttle.y}px) rotate(${gameState.shuttle.angle}deg) scale(${gameState.shuttle.scale})`;
  gameEls.player.classList.toggle("is-swinging", gameState.swingTimer > 0);
  gameEls.player.classList.toggle("is-reaching-right", gameState.playerFacing === "right");

  const playerHit = getPlayerRacketPoint();
  const opponentHit = getOpponentRacketPoint();
  if (gameEls.playerHitRing) {
    const config = gameConfig[gameState.difficulty];
    gameEls.playerHitRing.setAttribute("cx", String(playerHit.x));
    gameEls.playerHitRing.setAttribute("cy", String(playerHit.y));
    gameEls.playerHitRing.setAttribute("r", String(config.playerReach + config.playerLungeReach));
    gameEls.playerHitRing.classList.toggle("is-armed", dragState.velocity > 95 || gameState.swingTimer > 0);
  }
  if (gameEls.opponentHitRing) {
    gameEls.opponentHitRing.setAttribute("cx", String(opponentHit.x));
    gameEls.opponentHitRing.setAttribute("cy", String(opponentHit.y));
    const config = gameConfig[gameState.difficulty];
    gameEls.opponentHitRing.setAttribute("r", String(config.opponentReach + config.opponentLungeReach));
  }
  if (gameEls.landingShadow) {
    const shot = gameState.shot;
    gameEls.landingShadow.classList.toggle("is-hidden", !shot || gameState.phase === "point" || gameState.phase === "finished");
    if (shot) {
      gameEls.landingShadow.setAttribute("cx", String(shot.targetX));
      gameEls.landingShadow.setAttribute("cy", String(shot.targetY));
      const isPlayerSide = shot.receiver === "player";
      gameEls.landingShadow.classList.toggle("is-player-side", isPlayerSide);
    }
  }
  document.body.classList.toggle("game-running", gameState.running && document.querySelector(".view.is-active")?.dataset.view === "sim");
}

function updateRallyText(title, note) {
  setText("#rally-title", title);
  setText("#rally-note", note);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function lerp(start, end, amount) {
  return start + (end - start) * amount;
}

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function getNowMs() {
  return typeof performance !== "undefined" && performance.now ? performance.now() : Date.now();
}

function unlockAudio() {
  const context = getAudioContext();
  if (!context) return;
  audioState.unlocked = true;
  if (context.state === "suspended" && context.resume) {
    context.resume().catch(() => {});
  }
}

function getAudioContext() {
  if (typeof window === "undefined") return null;
  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextConstructor) return null;
  if (!audioState.context) {
    audioState.context = new AudioContextConstructor();
  }
  return audioState.context;
}

function playGameSound(kind, detail = {}) {
  if (!audioState.unlocked && kind !== "start") return;
  const context = getAudioContext();
  if (!context) return;
  if (context.state === "suspended" && context.resume) {
    context.resume().catch(() => {});
  }

  const now = context.currentTime;
  if (kind === "start") {
    playTone(context, 520, now, 0.05, { gain: 0.025, type: "triangle" });
    playTone(context, 720, now + 0.055, 0.06, { gain: 0.022, type: "triangle" });
    return;
  }

  if (kind === "serve") {
    const freq = detail.side === "player" ? 560 : 500;
    playTone(context, freq, now, 0.045, { gain: 0.025, type: "square", endFrequency: freq * 1.24 });
    return;
  }

  if (kind === "hit") {
    const tones = {
      perfect: [880, 1180, 0.044],
      clean: [720, 930, 0.038],
      stretch: [540, 740, 0.032],
      rescue: [430, 620, 0.03],
    };
    const [startFreq, endFreq, gain] = tones[detail.quality] || tones.clean;
    playTone(context, startFreq, now, 0.052, { gain, type: "triangle", endFrequency: endFreq });
    playTone(context, startFreq * 0.52, now, 0.032, { gain: gain * 0.35, type: "sine" });
    return;
  }

  if (kind === "score") {
    const playerWon = detail.winner === "player";
    playTone(context, playerWon ? 640 : 360, now, 0.08, { gain: 0.026, type: "triangle" });
    playTone(context, playerWon ? 880 : 300, now + 0.085, 0.1, { gain: 0.022, type: "triangle" });
    return;
  }

  if (kind === "finish") {
    const playerWon = detail.winner === "player";
    playTone(context, playerWon ? 760 : 420, now, 0.08, { gain: 0.024, type: "triangle" });
    playTone(context, playerWon ? 980 : 360, now + 0.09, 0.12, { gain: 0.024, type: "triangle" });
  }
}

function playTone(context, frequency, startTime, duration, options = {}) {
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const startGain = Math.max(options.gain || 0.02, 0.001);
  oscillator.type = options.type || "sine";
  oscillator.frequency.setValueAtTime(frequency, startTime);
  if (options.endFrequency) {
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(options.endFrequency, 1), startTime + duration);
  }
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(startGain, startTime + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.02);
}

function saveMatches() {
  localStorage.setItem(storeKeys.matches, JSON.stringify(matches));
}

function saveGear() {
  localStorage.setItem(storeKeys.gear, JSON.stringify(gear));
}

function notify(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(notify.timer);
  notify.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1800);
}

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
}

function clean(value) {
  return String(value || "").trim();
}

function numberOrNull(value) {
  const number = Number(value);
  return Number.isFinite(number) && value !== "" ? number : null;
}

function createId() {
  if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function parseISODate(value) {
  const [year, month, day] = String(value).split("-").map(Number);
  return new Date(year, month - 1, day || 1);
}

function toISODate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatShortDate(value) {
  const date = parseISODate(value);
  return `${date.getMonth() + 1}/${date.getDate()}`;
}

function getMatchTimeText(match) {
  const start = clean(match.startTime);
  const end = clean(match.endTime);
  if (start && end) return `${start}-${end}`;
  return start || end;
}

function getMatchPeopleText(match) {
  if (match.type === "doubles") {
    const teammate = clean(match.teammate);
    const opponents = [match.opponentOne, match.opponentTwo].map(clean).filter(Boolean);
    const parts = [];
    if (teammate) parts.push(`队友：${teammate}`);
    if (opponents.length) parts.push(`对手：${opponents.join(" / ")}`);
    return parts.join(" · ") || clean(match.opponent);
  }

  const opponent = clean(match.opponentOne) || clean(match.opponent);
  if (match.type === "practice") return opponent ? `搭子 / 对手：${opponent}` : "";
  return opponent ? `对手：${opponent}` : "";
}

function formatCurrency(value) {
  const number = Number(value) || 0;
  if (number >= 10000) return `¥${(number / 10000).toFixed(1)}万`;
  return `¥${Math.round(number).toLocaleString("zh-CN")}`;
}

function sortByDateDesc(a, b) {
  const dateDiff = parseISODate(b.date).getTime() - parseISODate(a.date).getTime();
  if (dateDiff !== 0) return dateDiff;
  const timeDiff = clean(b.startTime).localeCompare(clean(a.startTime));
  if (timeDiff !== 0) return timeDiff;
  return String(b.createdAt).localeCompare(String(a.createdAt));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
