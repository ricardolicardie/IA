// Application State
const appState = {
  currentUser: null,
  selectedTheme: "",
  businessType: "",
  storeDescription: "",
  shopifyStore: "",
  shopifyApiKey: "",
  shopifyConnected: false,
  purchasedThemes: [],
  aiRecommendations: [],
  activeTab: "themes",
  activeDevice: "desktop",
  customization: {
    colors: {
      primary: "#6366f1",
      secondary: "#8b5cf6",
      accent: "#06b6d4",
      background: "#ffffff",
      text: "#1f2937",
    },
    typography: {
      headingFont: "Inter",
      bodyFont: "Inter",
      fontSize: 16,
      lineHeight: 1.6,
    },
    layout: {
      headerStyle: "modern",
      footerStyle: "minimal",
      spacing: 16,
      borderRadius: 8,
    },
  },
}

// Theme Data
const themes = {
  free: [
    {
      id: "modern-minimal",
      name: "Modern Minimal",
      category: "Fashion",
      preview: "https://via.placeholder.com/300x200/6366f1/ffffff?text=Modern+Minimal",
      colors: ["#000000", "#FFFFFF", "#F5F5F5"],
      features: ["Clean Layout", "Fast Loading", "Mobile First"],
      price: 0,
      isFree: true,
    },
    {
      id: "vibrant-commerce",
      name: "Vibrant Commerce",
      category: "Electronics",
      preview: "https://via.placeholder.com/300x200/ff6b6b/ffffff?text=Vibrant+Commerce",
      colors: ["#FF6B6B", "#4ECDC4", "#45B7D1"],
      features: ["Bold Colors", "Product Focus", "Conversion Optimized"],
      price: 0,
      isFree: true,
    },
    {
      id: "eco-friendly",
      name: "Eco Friendly",
      category: "Sustainable",
      preview: "https://via.placeholder.com/300x200/2ecc71/ffffff?text=Eco+Friendly",
      colors: ["#2ECC71", "#27AE60", "#F39C12"],
      features: ["Nature Inspired", "Sustainable Focus", "Organic Layout"],
      price: 0,
      isFree: true,
    },
    {
      id: "sports-pro",
      name: "Sports Pro",
      category: "Sports",
      preview: "https://via.placeholder.com/300x200/ff4500/ffffff?text=Sports+Pro",
      colors: ["#FF4500", "#000000", "#FFFFFF"],
      features: ["Dynamic Design", "Action Focused", "Performance Optimized"],
      price: 0,
      isFree: true,
    },
    {
      id: "culinary-delight",
      name: "Culinary Delight",
      category: "Cooking",
      preview: "https://via.placeholder.com/300x200/d2691e/ffffff?text=Culinary+Delight",
      colors: ["#D2691E", "#8B4513", "#F5DEB3"],
      features: ["Recipe Focused", "Food Photography", "Warm Colors"],
      price: 0,
      isFree: true,
    },
  ],
  premium: [
    {
      id: "luxury-boutique",
      name: "Luxury Boutique",
      category: "Fashion",
      preview: "https://via.placeholder.com/300x200/d4af37/ffffff?text=Luxury+Boutique",
      colors: ["#D4AF37", "#000000", "#FFFFFF"],
      features: ["Premium Feel", "Elegant Typography", "High-end Appeal"],
      price: 1,
      isFree: false,
    },
    {
      id: "gourmet-kitchen",
      name: "Gourmet Kitchen",
      category: "Cooking",
      preview: "https://via.placeholder.com/300x200/8b0000/ffffff?text=Gourmet+Kitchen",
      colors: ["#8B0000", "#FFD700", "#FFFFFF"],
      features: ["Chef Inspired", "Recipe Cards", "Ingredient Focus"],
      price: 1,
      isFree: false,
    },
    {
      id: "athletic-edge",
      name: "Athletic Edge",
      category: "Sports",
      preview: "https://via.placeholder.com/300x200/1e90ff/ffffff?text=Athletic+Edge",
      colors: ["#1E90FF", "#FF6347", "#000000"],
      features: ["High Energy", "Performance Stats", "Team Colors"],
      price: 1,
      isFree: false,
    },
    {
      id: "fashion-forward",
      name: "Fashion Forward",
      category: "Fashion",
      preview: "https://via.placeholder.com/300x200/ff1493/ffffff?text=Fashion+Forward",
      colors: ["#FF1493", "#000000", "#C0C0C0"],
      features: ["Runway Ready", "Model Showcase", "Trend Focused"],
      price: 1,
      isFree: false,
    },
  ],
}

// DOM Elements
const elements = {
  // Auth
  signInBtn: document.getElementById("sign-in-btn"),
  authModal: document.getElementById("auth-modal"),
  authContainer: document.getElementById("auth-container"),

  // Shopify Connection
  connectShopifyBtn: document.getElementById("connect-shopify-btn"),

  // Store Setup
  businessTypeSelect: document.getElementById("business-type"),
  storeDescriptionTextarea: document.getElementById("store-description"),
  shopifyStoreInput: document.getElementById("shopify-store"),
  shopifyApiKeyInput: document.getElementById("shopify-api-key"),
  generateAiBtn: document.getElementById("generate-ai-btn"),

  // AI Recommendations
  aiRecommendations: document.getElementById("ai-recommendations"),
  recommendationsList: document.getElementById("recommendations-list"),

  // Tabs
  tabBtns: document.querySelectorAll(".tab-btn"),
  tabContents: document.querySelectorAll(".tab-content"),

  // Device Controls
  deviceBtns: document.querySelectorAll("[data-device]"),

  // Themes
  freeThemesGrid: document.getElementById("free-themes-grid"),
  premiumThemesGrid: document.getElementById("premium-themes-grid"),

  // Theme Preview Modal
  themePreviewModal: document.getElementById("theme-preview-modal"),
  previewThemeName: document.getElementById("preview-theme-name"),
  previewThemeImage: document.getElementById("preview-theme-image"),
  previewThemeFeatures: document.getElementById("preview-theme-features"),
  previewThemeColors: document.getElementById("preview-theme-colors"),
  deployThemeBtn: document.getElementById("deploy-theme-btn"),
  buyThemeBtn: document.getElementById("buy-theme-btn"),
  themePrice: document.getElementById("theme-price"),

  // Customizer
  customizerTabBtns: document.querySelectorAll(".customizer-tab-btn"),
  customizerTabContents: document.querySelectorAll(".customizer-tab-content"),
  generateAiColorsBtn: document.getElementById("generate-ai-colors"),
  resetCustomizerBtn: document.getElementById("reset-customizer"),
  saveCustomizerBtn: document.getElementById("save-customizer"),
  themePreview: document.getElementById("theme-preview"),

  // Color Controls
  primaryColor: document.getElementById("primary-color"),
  secondaryColor: document.getElementById("secondary-color"),
  accentColor: document.getElementById("accent-color"),
  backgroundColor: document.getElementById("background-color"),
  textColor: document.getElementById("text-color"),

  // Typography Controls
  headingFont: document.getElementById("heading-font"),
  bodyFont: document.getElementById("body-font"),
  fontSize: document.getElementById("font-size"),
  fontSizeValue: document.getElementById("font-size-value"),
  lineHeight: document.getElementById("line-height"),
  lineHeightValue: document.getElementById("line-height-value"),

  // Loading
  loadingOverlay: document.getElementById("loading-overlay"),
  loadingText: document.getElementById("loading-text"),
}

// Utility Functions
function showLoading(text = "Loading...") {
  elements.loadingText.textContent = text
  elements.loadingOverlay.classList.add("show")
}

function hideLoading() {
  elements.loadingOverlay.classList.remove("show")
}

function showModal(modal) {
  modal.classList.add("show")
}

function hideModal(modal) {
  modal.classList.remove("show")
}

function updateButtonState(button, loading, text, loadingText) {
  if (loading) {
    button.disabled = true
    button.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${loadingText}`
  } else {
    button.disabled = false
    button.innerHTML = text
  }
}

// Authentication Functions
function initAuth() {
  const authTabBtns = document.querySelectorAll(".auth-tab-btn")
  const authForms = document.querySelectorAll(".auth-form")
  const loginSubmit = document.getElementById("login-submit")
  const registerSubmit = document.getElementById("register-submit")
  const passwordToggles = document.querySelectorAll(".password-toggle")

  // Auth tab switching
  authTabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab

      authTabBtns.forEach((b) => b.classList.remove("active"))
      authForms.forEach((f) => f.classList.remove("active"))

      btn.classList.add("active")
      document.getElementById(`${tab}-form`).classList.add("active")
    })
  })

  // Password toggles
  passwordToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const input = toggle.previousElementSibling
      const icon = toggle.querySelector("i")

      if (input.type === "password") {
        input.type = "text"
        icon.classList.remove("fa-eye")
        icon.classList.add("fa-eye-slash")
      } else {
        input.type = "password"
        icon.classList.remove("fa-eye-slash")
        icon.classList.add("fa-eye")
      }
    })
  })

  // Login form
  loginSubmit.addEventListener("click", async () => {
    const email = document.getElementById("login-email").value
    const password = document.getElementById("login-password").value

    if (!email || !password) {
      alert("Please fill in all fields")
      return
    }

    updateButtonState(loginSubmit, true, "Sign In", "Signing In...")

    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const user = {
      id: "user_123",
      name: email.split("@")[0],
      email: email,
      plan: "pro",
      avatar: "https://via.placeholder.com/40x40/8b5cf6/ffffff?text=" + email.charAt(0).toUpperCase(),
    }

    appState.currentUser = user
    updateAuthUI()
    hideModal(elements.authModal)
    updateButtonState(loginSubmit, false, "Sign In", "")
  })

  // Register form
  registerSubmit.addEventListener("click", async () => {
    const name = document.getElementById("register-name").value
    const email = document.getElementById("register-email").value
    const password = document.getElementById("register-password").value

    if (!name || !email || !password) {
      alert("Please fill in all fields")
      return
    }

    updateButtonState(registerSubmit, true, "Create Account", "Creating Account...")

    // Simulate registration
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const user = {
      id: "user_" + Date.now(),
      name: name,
      email: email,
      plan: "free",
      avatar: "https://via.placeholder.com/40x40/8b5cf6/ffffff?text=" + name.charAt(0).toUpperCase(),
    }

    appState.currentUser = user
    updateAuthUI()
    hideModal(elements.authModal)
    updateButtonState(registerSubmit, false, "Create Account", "")
  })
}

function updateAuthUI() {
  if (appState.currentUser) {
    elements.authContainer.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.75rem;">
                <img src="${appState.currentUser.avatar}" alt="${appState.currentUser.name}" 
                     style="width: 2rem; height: 2rem; border-radius: 50%;">
                <div style="display: none;">
                    <div style="font-weight: 500; font-size: 0.875rem;">${appState.currentUser.name}</div>
                    <div style="font-size: 0.75rem; color: #6b7280; text-transform: uppercase;">${appState.currentUser.plan}</div>
                </div>
                <button id="logout-btn" class="btn btn-outline btn-sm">
                    <i class="fas fa-sign-out-alt"></i> Logout
                </button>
            </div>
        `

    document.getElementById("logout-btn").addEventListener("click", () => {
      appState.currentUser = null
      updateAuthUI()
    })
  } else {
    elements.authContainer.innerHTML = `
            <button id="sign-in-btn" class="btn btn-primary">Sign In</button>
        `

    document.getElementById("sign-in-btn").addEventListener("click", () => {
      showModal(elements.authModal)
    })
  }
}

// Shopify Connection
function initShopify() {
  elements.connectShopifyBtn.addEventListener("click", async () => {
    if (appState.shopifyConnected) return

    updateButtonState(
      elements.connectShopifyBtn,
      true,
      '<i class="fas fa-shopping-cart"></i> Connect to Shopify',
      '<i class="fas fa-spinner fa-spin"></i> Connecting...',
    )

    // Simulate connection
    await new Promise((resolve) => setTimeout(resolve, 2000))

    appState.shopifyConnected = true
    elements.connectShopifyBtn.innerHTML = '<i class="fas fa-check"></i> Connected to Shopify'
    elements.connectShopifyBtn.classList.remove("btn-success")
    elements.connectShopifyBtn.classList.add("btn-primary")
  })
}

// Store Setup
function initStoreSetup() {
  elements.businessTypeSelect.addEventListener("change", (e) => {
    appState.businessType = e.target.value
    updateGenerateButton()
  })

  elements.storeDescriptionTextarea.addEventListener("input", (e) => {
    appState.storeDescription = e.target.value
    updateGenerateButton()
  })

  elements.shopifyStoreInput.addEventListener("input", (e) => {
    appState.shopifyStore = e.target.value
  })

  elements.shopifyApiKeyInput.addEventListener("input", (e) => {
    appState.shopifyApiKey = e.target.value
  })

  elements.generateAiBtn.addEventListener("click", generateAIRecommendations)
}

function updateGenerateButton() {
  const canGenerate = appState.businessType && appState.storeDescription.trim()
  elements.generateAiBtn.disabled = !canGenerate
}

async function generateAIRecommendations() {
  updateButtonState(
    elements.generateAiBtn,
    true,
    '<i class="fas fa-bolt"></i> Get AI Recommendations',
    '<i class="fas fa-spinner fa-spin"></i> Generating AI Recommendations...',
  )

  // Simulate AI processing
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const recommendations = [
    {
      type: "Theme",
      title: "Recommended Theme: Modern Minimal",
      description: "Based on your business type, this clean design will showcase your products effectively",
      confidence: 92,
    },
    {
      type: "Layout",
      title: "Hero Section with Video Background",
      description: "Add a compelling video hero section to increase engagement by 45%",
      confidence: 88,
    },
    {
      type: "Features",
      title: "Add Product Quick View",
      description: "Quick view modals can increase conversion rates by 23%",
      confidence: 85,
    },
    {
      type: "Apps",
      title: "Install Review System",
      description: "Customer reviews can boost sales by up to 31%",
      confidence: 90,
    },
  ]

  appState.aiRecommendations = recommendations
  displayAIRecommendations()

  updateButtonState(elements.generateAiBtn, false, '<i class="fas fa-bolt"></i> Get AI Recommendations', "")
}

function displayAIRecommendations() {
  elements.recommendationsList.innerHTML = appState.aiRecommendations
    .map(
      (rec) => `
        <div style="padding: 0.75rem; background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%); border-radius: 0.5rem; margin-bottom: 0.75rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                <span class="badge" style="background: #f3f4f6; color: #6b7280; padding: 0.125rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">${rec.type}</span>
                <span style="font-size: 0.75rem; color: #10b981; font-weight: 500;">${rec.confidence}% match</span>
            </div>
            <h4 style="font-weight: 500; font-size: 0.875rem; margin-bottom: 0.25rem;">${rec.title}</h4>
            <p style="font-size: 0.75rem; color: #6b7280;">${rec.description}</p>
        </div>
    `,
    )
    .join("")

  elements.aiRecommendations.style.display = "block"
}

// Tab System
function initTabs() {
  elements.tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab
      switchTab(tab)
    })
  })
}

function switchTab(tabName) {
  // Update tab buttons
  elements.tabBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabName)
  })

  // Update tab contents
  elements.tabContents.forEach((content) => {
    content.classList.toggle("active", content.id === `${tabName}-tab`)
  })

  appState.activeTab = tabName
}

// Device Controls
function initDeviceControls() {
  elements.deviceBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const device = btn.dataset.device

      elements.deviceBtns.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      appState.activeDevice = device
      updatePreviewDevice()
    })
  })
}

function updatePreviewDevice() {
  const preview = elements.themePreview
  if (preview) {
    preview.className = `theme-preview ${appState.activeDevice}`
  }
}

// Theme System
function initThemes() {
  renderThemes()
  initThemePreviewModal()
}

function renderThemes() {
  // Render free themes
  elements.freeThemesGrid.innerHTML = themes.free.map((theme) => createThemeCard(theme)).join("")

  // Render premium themes
  elements.premiumThemesGrid.innerHTML = themes.premium.map((theme) => createThemeCard(theme)).join("")

  // Add event listeners
  document.querySelectorAll(".theme-card").forEach((card) => {
    card.addEventListener("click", () => {
      const themeId = card.dataset.themeId
      selectTheme(themeId)
    })
  })

  document.querySelectorAll(".preview-theme-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation()
      const themeId = btn.dataset.themeId
      previewTheme(themeId)
    })
  })

  document.querySelectorAll(".buy-theme-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation()
      const themeId = btn.dataset.themeId
      purchaseTheme(themeId)
    })
  })
}

function createThemeCard(theme) {
  const isPurchased = appState.purchasedThemes.includes(theme.id)
  const isSelected = appState.selectedTheme === theme.id

  return `
        <div class="theme-card ${isSelected ? "selected" : ""}" data-theme-id="${theme.id}">
            <div class="theme-image">
                <img src="${theme.preview}" alt="${theme.name}">
                <div class="theme-badge ${theme.isFree ? "free" : "premium"}">
                    ${theme.isFree ? "FREE" : "£" + theme.price}
                </div>
                ${isPurchased ? '<div class="theme-badge owned" style="left: 0.5rem;"><i class="fas fa-check"></i> Owned</div>' : ""}
            </div>
            <div class="theme-details">
                <div class="theme-header">
                    <h3 class="theme-name">${theme.name}</h3>
                    <span class="theme-category">${theme.category}</span>
                </div>
                <div class="theme-colors">
                    ${theme.colors.map((color) => `<div class="color-dot" style="background-color: ${color};"></div>`).join("")}
                </div>
                <div class="theme-features">
                    ${theme.features.map((feature) => `<span class="feature-badge">${feature}</span>`).join("")}
                </div>
                <div class="theme-actions">
                    ${
                      isPurchased || theme.isFree
                        ? `<button class="btn btn-primary btn-full">Use This Theme</button>`
                        : `<button class="btn btn-primary btn-full buy-theme-btn" data-theme-id="${theme.id}">
                            <i class="fas fa-credit-card"></i> Buy for £${theme.price}
                        </button>`
                    }
                    <button class="btn btn-outline btn-full preview-theme-btn" data-theme-id="${theme.id}">
                        <i class="fas fa-eye"></i> Preview Theme
                    </button>
                </div>
            </div>
        </div>
    `
}

function selectTheme(themeId) {
  appState.selectedTheme = themeId

  // Update theme cards
  document.querySelectorAll(".theme-card").forEach((card) => {
    card.classList.toggle("selected", card.dataset.themeId === themeId)
  })
}

function previewTheme(themeId) {
  const theme = [...themes.free, ...themes.premium].find((t) => t.id === themeId)
  if (!theme) return

  elements.previewThemeName.textContent = `${theme.name} Preview`
  elements.previewThemeImage.src = theme.preview
  elements.previewThemeImage.alt = theme.name

  // Update features
  elements.previewThemeFeatures.innerHTML = theme.features
    .map((feature) => `<span class="feature-badge">${feature}</span>`)
    .join("")

  // Update colors
  elements.previewThemeColors.innerHTML = theme.colors
    .map((color) => `<div class="color-dot" style="background-color: ${color};"></div>`)
    .join("")

  // Update buttons
  const isPurchased = appState.purchasedThemes.includes(theme.id)

  if (!theme.isFree && !isPurchased) {
    elements.buyThemeBtn.style.display = "block"
    elements.themePrice.textContent = theme.price
    elements.buyThemeBtn.onclick = () => purchaseTheme(theme.id)
  } else {
    elements.buyThemeBtn.style.display = "none"
  }

  elements.deployThemeBtn.onclick = () => deployTheme(theme.id)

  showModal(elements.themePreviewModal)
}

async function purchaseTheme(themeId) {
  showLoading("Processing payment...")

  // Simulate payment processing
  await new Promise((resolve) => setTimeout(resolve, 1500))

  appState.purchasedThemes.push(themeId)
  hideLoading()
  hideModal(elements.themePreviewModal)

  // Re-render themes to update UI
  renderThemes()

  alert("Theme purchased successfully!")
}

async function deployTheme(themeId) {
  if (!appState.shopifyConnected) {
    alert("Please connect to Shopify first")
    return
  }

  showLoading("Deploying theme to Shopify...")

  // Simulate deployment
  await new Promise((resolve) => setTimeout(resolve, 3000))

  hideLoading()
  hideModal(elements.themePreviewModal)

  alert("Theme deployed successfully to your Shopify store!")
}

function initThemePreviewModal() {
  // Close modal handlers
  document.querySelectorAll(".modal-close").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const modal = e.target.closest(".modal")
      hideModal(modal)
    })
  })

  // Close modal on backdrop click
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        hideModal(modal)
      }
    })
  })
}

// Customizer System
function initCustomizer() {
  initCustomizerTabs()
  initColorControls()
  initTypographyControls()
  initCustomizerActions()
  updateThemePreview()
}

function initCustomizerTabs() {
  elements.customizerTabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab

      elements.customizerTabBtns.forEach((b) => b.classList.remove("active"))
      elements.customizerTabContents.forEach((c) => c.classList.remove("active"))

      btn.classList.add("active")
      document.getElementById(`${tab}-customizer`).classList.add("active")
    })
  })
}

function initColorControls() {
  const colorInputs = [
    { id: "primary-color", key: "primary" },
    { id: "secondary-color", key: "secondary" },
    { id: "accent-color", key: "accent" },
    { id: "background-color", key: "background" },
    { id: "text-color", key: "text" },
  ]

  colorInputs.forEach(({ id, key }) => {
    const colorInput = document.getElementById(id)
    const textInput = colorInput.nextElementSibling

    colorInput.addEventListener("change", (e) => {
      appState.customization.colors[key] = e.target.value
      textInput.value = e.target.value
      updateThemePreview()
    })

    textInput.addEventListener("input", (e) => {
      if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
        appState.customization.colors[key] = e.target.value
        colorInput.value = e.target.value
        updateThemePreview()
      }
    })
  })

  elements.generateAiColorsBtn.addEventListener("click", generateAIColors)
}

function initTypographyControls() {
  elements.headingFont.addEventListener("change", (e) => {
    appState.customization.typography.headingFont = e.target.value
    updateThemePreview()
  })

  elements.bodyFont.addEventListener("change", (e) => {
    appState.customization.typography.bodyFont = e.target.value
    updateThemePreview()
  })

  elements.fontSize.addEventListener("input", (e) => {
    appState.customization.typography.fontSize = Number.parseInt(e.target.value)
    elements.fontSizeValue.textContent = e.target.value + "px"
    updateThemePreview()
  })

  elements.lineHeight.addEventListener("input", (e) => {
    appState.customization.typography.lineHeight = Number.parseFloat(e.target.value)
    elements.lineHeightValue.textContent = e.target.value
    updateThemePreview()
  })
}

function initCustomizerActions() {
  elements.resetCustomizerBtn.addEventListener("click", resetCustomization)
  elements.saveCustomizerBtn.addEventListener("click", saveCustomization)
}

async function generateAIColors() {
  updateButtonState(
    elements.generateAiColorsBtn,
    true,
    '<i class="fas fa-magic"></i> AI Colors',
    '<i class="fas fa-spinner fa-spin"></i> Generating...',
  )

  await new Promise((resolve) => setTimeout(resolve, 2000))

  const aiColors = {
    primary: "#3b82f6",
    secondary: "#10b981",
    accent: "#f59e0b",
    background: "#f8fafc",
    text: "#0f172a",
  }

  appState.customization.colors = aiColors

  // Update color inputs
  Object.entries(aiColors).forEach(([key, value]) => {
    const colorInput = document.getElementById(`${key}-color`)
    const textInput = colorInput.nextElementSibling
    colorInput.value = value
    textInput.value = value
  })

  updateThemePreview()
  updateButtonState(elements.generateAiColorsBtn, false, '<i class="fas fa-magic"></i> AI Colors', "")
}

function resetCustomization() {
  appState.customization = {
    colors: {
      primary: "#6366f1",
      secondary: "#8b5cf6",
      accent: "#06b6d4",
      background: "#ffffff",
      text: "#1f2937",
    },
    typography: {
      headingFont: "Inter",
      bodyFont: "Inter",
      fontSize: 16,
      lineHeight: 1.6,
    },
    layout: {
      headerStyle: "modern",
      footerStyle: "minimal",
      spacing: 16,
      borderRadius: 8,
    },
  }

  // Update all inputs
  Object.entries(appState.customization.colors).forEach(([key, value]) => {
    const colorInput = document.getElementById(`${key}-color`)
    const textInput = colorInput.nextElementSibling
    colorInput.value = value
    textInput.value = value
  })

  elements.headingFont.value = appState.customization.typography.headingFont
  elements.bodyFont.value = appState.customization.typography.bodyFont
  elements.fontSize.value = appState.customization.typography.fontSize
  elements.fontSizeValue.textContent = appState.customization.typography.fontSize + "px"
  elements.lineHeight.value = appState.customization.typography.lineHeight
  elements.lineHeightValue.textContent = appState.customization.typography.lineHeight

  updateThemePreview()
}

function saveCustomization() {
  showLoading("Saving customization...")

  setTimeout(() => {
    hideLoading()
    alert("Theme customization saved successfully!")
  }, 1000)
}

function updateThemePreview() {
  const preview = elements.themePreview
  if (!preview) return

  const { colors, typography, layout } = appState.customization

  // Apply styles to preview
  preview.style.backgroundColor = colors.background
  preview.style.color = colors.text
  preview.style.fontFamily = typography.bodyFont
  preview.style.fontSize = typography.fontSize + "px"
  preview.style.lineHeight = typography.lineHeight

  // Update header
  const header = preview.querySelector(".preview-header")
  if (header) {
    header.style.backgroundColor = colors.primary
    header.style.color = colors.background

    const h1 = header.querySelector("h1")
    if (h1) {
      h1.style.fontFamily = typography.headingFont
    }
  }

  // Update sections
  const section = preview.querySelector(".preview-section")
  if (section) {
    section.style.backgroundColor = colors.secondary + "20"
    section.style.borderRadius = layout.borderRadius + "px"
    section.style.margin = layout.spacing + "px 0"

    const h2 = section.querySelector("h2")
    if (h2) {
      h2.style.fontFamily = typography.headingFont
      h2.style.color = colors.secondary
    }
  }

  // Update button
  const btn = preview.querySelector(".preview-btn")
  if (btn) {
    btn.style.backgroundColor = colors.accent
    btn.style.color = colors.background
    btn.style.borderRadius = layout.borderRadius + "px"
  }

  // Update products
  const products = preview.querySelectorAll(".preview-product")
  products.forEach((product) => {
    product.style.borderRadius = layout.borderRadius + "px"
    product.style.borderColor = colors.primary + "30"

    const image = product.querySelector(".preview-product-image")
    if (image) {
      image.style.backgroundColor = colors.primary + "10"
      image.style.borderRadius = layout.borderRadius + "px"
    }
  })

  // Update footer
  const footer = preview.querySelector(".preview-footer")
  if (footer) {
    footer.style.borderColor = colors.primary + "20"
  }
}

// Initialize Application
function init() {
  // Initialize all systems
  initAuth()
  initShopify()
  initStoreSetup()
  initTabs()
  initDeviceControls()
  initThemes()
  initCustomizer()

  // Update initial UI
  updateAuthUI()
  updateGenerateButton()

  console.log("AI Store Builder Pro initialized successfully!")
}

// Start the application when DOM is loaded
document.addEventListener("DOMContentLoaded", init)

// Handle window resize for responsive design
window.addEventListener("resize", () => {
  updatePreviewDevice()
})

