# 📝 DO IT - React Native Mobile To-Do Application

Welcome to the development blueprint of **DO IT**, a premium, rich-aesthetic React Native Mobile To-Do Application built with Expo, React Navigation, Expo Linear Gradient, and custom Ubuntu typography.

This document serves as a comprehensive **20-Phase commit-by-commit roadmap** reverse-engineered from the complete codebase. You can use these phases to build, commit, and document your app sequentially from initial setup to fully integrated master screens.

---

## 🚀 Development Phases Blueprint

```
    P1[Phase 1: Project Setup] --> P2[Phase 2: Assets & Typography]

    P2 --> P3[Phase 3: Mock Datasets]
    
    P3 --> P4[Phase 4: Global Auth Context]
    
    P4 --> P5[Phase 5: Animated Splash Screen]
    
    P5 --> P6[Phase 6: Onboarding Slide Data]
    
    P6 --> P7[Phase 7: Custom Paginator Dots]
    
    P7 --> P8[Phase 8: Onboarding Card Item]
    
    P8 --> P9[Phase 9: Main Onboarding Slider]
    
    P9 --> P10[Phase 10: Alternative App Intro Slider]
    
    P10 --> P11[Phase 11: SignUp Screen]
    
    P11 --> P12[Phase 12: SignIn Screen]
    
    P12 --> P13[Phase 13: Tab Navigation Setup]

    => # P1 - December 6, 2025
GIT_AUTHOR_DATE="2025-12-06T09:14:00" \
GIT_COMMITTER_DATE="2025-12-06T09:14:00" \
git commit -m "P1"

# P2 - December 6, 2025
GIT_AUTHOR_DATE="2025-12-06T18:42:00" \
GIT_COMMITTER_DATE="2025-12-06T18:42:00" \
git commit -m "P2"

# P3 - December 8, 2025
GIT_AUTHOR_DATE="2025-12-08T11:28:00" \
GIT_COMMITTER_DATE="2025-12-08T11:28:00" \
git commit -m "P3"

# P4 - December 12, 2025
GIT_AUTHOR_DATE="2025-12-12T10:55:00" \
GIT_COMMITTER_DATE="2025-12-12T10:55:00" \
git commit -m "P4"

# P5 - December 12, 2025
GIT_AUTHOR_DATE="2025-12-12T21:16:00" \
GIT_COMMITTER_DATE="2025-12-12T21:16:00" \
git commit -m "P5"

# P6 - December 18, 2025
GIT_AUTHOR_DATE="2025-12-18T14:07:00" \
GIT_COMMITTER_DATE="2025-12-18T14:07:00" \
git commit -m "P6"

# P7 - December 19, 2025
GIT_AUTHOR_DATE="2025-12-19T16:31:00" \
GIT_COMMITTER_DATE="2025-12-19T16:31:00" \
git commit -m "P7"

# P8 - December 22, 2025
GIT_AUTHOR_DATE="2025-12-22T08:44:00" \
GIT_COMMITTER_DATE="2025-12-22T08:44:00" \
git commit -m "P8"

# P9 - December 22, 2025
GIT_AUTHOR_DATE="2025-12-22T13:18:00" \
GIT_COMMITTER_DATE="2025-12-22T13:18:00" \
git commit -m "P9"

# P10 - December 22, 2025
GIT_AUTHOR_DATE="2025-12-22T22:53:00" \
GIT_COMMITTER_DATE="2025-12-22T22:53:00" \
git commit -m "P10"

# P11 - December 24, 2025
GIT_AUTHOR_DATE="2025-12-24T17:26:00" \
GIT_COMMITTER_DATE="2025-12-24T17:26:00" \
git commit -m "P11"

# P12 - December 29, 2025
GIT_AUTHOR_DATE="2025-12-29T12:39:00" \
GIT_COMMITTER_DATE="2025-12-29T12:39:00" \
git commit -m "P12" ============> 
    
    P13 --> P14[Phase 14: Group Tasks Component]
    
    P14 --> P15[Phase 15: Status Task Lists]
    
    P15 --> P16[Phase 16: Main Home Page Layout]
    
    P16 --> P17[Phase 17: Calendar/Planner View]
    
    P17 --> P18[Phase 18: Date Picker Picker Modal]
    
    P18 --> P19[Phase 19: Add Task Bottom Sheet]
    
    P19 --> P20[Phase 20: Task Explorer & Info Page Setup]

---

### 📦 Phase 1: Project Initialization & Configurations
* **What Happened:** Initialize a brand-new React Native mobile app utilizing the **Expo CLI** framework. Setup the absolute root directories, register the core project entry configurations (`app.json`), set up Babel presets, configure local assets linking for Android/iOS builds, and establish repository hygiene rules in `.gitignore`.
* **Created/Modified Files:**
  * [`package.json`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/package.json) (Configure Metro scripts and install core dependencies like navigation, icons, gradients)
  * [`app.json`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/app.json) (Define app metadata, portrait orientation, assets shortcuts, and fonts plugins)
  * [`babel.config.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/babel.config.js) (Set up babel-preset-expo compilation)
  * [`react-native.config.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/react-native.config.js) (Reference asset paths for native compilation)
  * [`index.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/index.js) (App registry startup point configuration)
  * [`.gitignore`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/.gitignore) (Detailed exclusions for Expo caches, debug logs, native builds, and OS assets)

---

### 🎨 Phase 2: Design Assets & Custom Fonts Setup
* **What Happened:** Link and import premium UI assets including specialized checkmark icons, linear gradient indicators, profile mock images, social Apple/Google sign-in buttons, and the **Ubuntu custom font family** (bold, light, medium, regular) to create a high-fidelity visual experience.
* **Created/Modified Files:**
  * `assets/fonts/Ubuntu-*.ttf` (Ubuntu light, medium, bold, regular fonts)
  * `assets/fonts/UFL.txt` (Ubuntu Font License agreement)
  * `assets/*.png` (Bell, Checkmark, Lock, PersonLogo, Profile, icons for navigation and actions)
  * `assets/*.jpg` (Circular member photos for group activities)

---

### 📊 Phase 3: Raw Mock Data Structures
* **What Happened:** Create static datasets in the `rawDATA/` directory to represent mock items for general tasks, today's schedule, group assignments with team participant pictures, and incomplete status trackers. These structures feed the UI dashboard sections.
* **Created/Modified Files:**
  * [`rawDATA/Tasks.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/rawDATA/Tasks.js) (List of general client/team meetings data model)
  * [`rawDATA/TodayTasks.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/rawDATA/TodayTasks.js) (To-Do cards mapping unique titles, detailed descriptions, and scheduled time)
  * [`rawDATA/grpTasks.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/rawDATA/grpTasks.js) (Horizontal group task cards containing titles, days, time, and participant rows)
  * [`rawDATA/inCompleteTasks.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/rawDATA/inCompleteTasks.js) (Sub-dataset tracking incomplete tasks)

---

### 🔐 Phase 4: Credentials Context API Setup
* **What Happened:** Implement a global authentication context using React Context API to manage user session details (such as the email address). This avoids prop-drilling by providing a clean hook `useCredentials` to access current user info across deeply nested dashboard and settings views.
* **Created/Modified Files:**
  * [`context/contextCredentials.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/context/contextCredentials.js) (Create CredentialsContext and useCredentials custom hook)

---

### ⏳ Phase 5: Animated Splash Screen UI (P1 Component)
* **What Happened:** Build a custom splash screen `P1.js` utilizing `LinearGradient` background aesthetics. It features a checkmark brand icon, a smooth fade-in text animation, and a typewriter text generator displaying the application version tag (`V 1.1.0`). Uses a 3-second auto-timer to transition into the onboarding swiper.
* **Created/Modified Files:**
  * [`components/P1.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/components/P1.js) (Splash screen containing dynamic fade and keyboard-dismiss layouts)

---

### 📄 Phase 6: Onboarding Swiper Slides Definition
* **What Happened:** Formulate the onboarding pages list mapping specific feature descriptions and graphic icons. Each slide includes unique identifiers, descriptive instructional texts (about organizing schedules, teamwork, data security), and visual layout parameters.
* **Created/Modified Files:**
  * [`components/slides.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/components/slides.js) (Static slide details definition file)

---

### 🔘 Phase 7: Polish Custom Paginator Component
* **What Happened:** Program the dynamic dots indicator `Paginator.js`. It tracks horizontal scroll events dynamically and applies `Animated.interpolate` to expand the width of the active dot indicator and smoothly shift its opacity, providing premium visual feedback.
* **Created/Modified Files:**
  * [`components/Paginator.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/components/Paginator.js) (Pagination dots showing current slide position)

---

### 🖼️ Phase 8: Onboarding Slide Card Renderer
* **What Happened:** Design the onboarding item card component `OnBoardingItems.js`. Uses the hook `useWindowDimensions` to automatically resize graphics and texts dynamically for different phone screens, ensuring high-fidelity scaling.
* **Created/Modified Files:**
  * [`components/OnBoardingItems.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/components/OnBoardingItems.js) (Individual layout rendering slide information)

---

### 📱 Phase 9: Main Onboarding Slider View (P2_5)
* **What Happened:** Combine slide cards and pagination dots into the master Onboarding container `P2_5.js`. Utilizes a page-enabled `FlatList` to snap between pages, and renders a floating navigation arrow that swaps its visual vector icon to a confirmation tick (`tickBtn.png`) once the user reaches the final onboarding card.
* **Created/Modified Files:**
  * [`components/P2_5.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/components/P2_5.js) (Master onboarding slide swiper interface)

---

### 📚 Phase 10: Fallback App Intro Slider Component
* **What Happened:** Create the secondary onboarding layout `extras/P2_P5.js` that uses the third-party `react-native-app-intro-slider` library. This provides an alternative, high-quality, pre-packaged sliding system.
* **Created/Modified Files:**
  * [`extras/P2_P5.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/extras/P2_P5.js) (Alternative slide-intro component layout)

---

### 👤 Phase 11: User Registration Screen (SignUp)
* **What Happened:** Design the SignUp form screen `SignUp.js`. It features an immersive dark-blue linear gradient background, sleek rounded text inputs (for Full Name, Email Address, and Passwords) with custom icons, third-party social sign-up shortcuts (Google & Apple), and navigation switches.
* **Created/Modified Files:**
  * [`components/SignUp.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/components/SignUp.js) (Registration panel with text input triggers)

---

### 🔑 Phase 12: User Authentication Screen (SignIn)
* **What Happened:** Create the user login screen `SignIn.js` containing credential input fields, social entry grids, and input focus helpers. Implement mock authentication handling (`mail: alpha`, `pwd: 1234`) that securely passes the verified email to the nested home dashboard when the credentials match.
* **Created/Modified Files:**
  * [`components/SignIn.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/components/SignIn.js) (Sign-in form with simulated logon validation)

---

### 🎛️ Phase 13: Core Navigation & Bottom Tabs Setup
* **What Happened:** Establish the bottom tab navigator container inside `tabs.js`. Features standard tab bars customized to be transparent and float elegantly above linear backgrounds, complete with aqua neon shadows for the active tab indicators. Includes `CredentialsContext` wrapping to propagate user emails across child views.
* **Created/Modified Files:**
  * [`navigation/tabs.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/navigation/tabs.js) (Configuration file for the 4 core navigation pages: Home, Tasks, Calendar, and Settings)

---

### 👥 Phase 14: Group Tasks Display Component
* **What Happened:** Develop the horizontal group cards component `GroupTasks.js`. Displays ongoing collaborative tasks inside white rounded containers. Each card highlights the meeting time, day, title, and dynamically maps the profile icons of participants.
* **Created/Modified Files:**
  * [`components/GroupTasks.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/components/GroupTasks.js) (Horizontal group-scrolling dashboard widget)

---

### 📂 Phase 15: Status Task Lists (Completed & Incomplete)
* **What Happened:** Implement the individual incomplete and completed sub-lists to display on the dashboard page. The incomplete card list renders task details next to forward navigation arrows, while the completed card list adds active checkmark markers showing task completion.
* **Created/Modified Files:**
  * [`components/InCompleteTasks.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/components/InCompleteTasks.js) (Filter and display incomplete cards)
  * [`components/CompletedTasks.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/components/CompletedTasks.js) (Filter and display checked completed items)

---

### 🏠 Phase 16: Main Home Page Layout
* **What Happened:** Combine the top dashboard user header (rendering the profile picture, name, and the logged-in email from the Credentials Context) with the `GroupTasks`, `InCompleteTasks`, and `CompletedTasks` components under a premium linear background.
* **Created/Modified Files:**
  * [`components/HomePage.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/components/HomePage.js) (Primary user dashboard layout)

---

### 📅 Phase 17: Calendar planner Screen (Page4)
* **What Happened:** Build the planner screen `Page4.js` (mapped to the Calendar tab). Incorporates the interactive `react-native-calendars` Calendar grid, allowing users to press and select a specific date, which then shows a custom task field to add planner items for the selected day.
* **Created/Modified Files:**
  * [`components/Page4.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/components/Page4.js) (Master calendar/planner interface)

---

### 📆 Phase 18: Premium Date Picker Modal
* **What Happened:** Design the `Calendar.js` helper overlay component using `react-native-modern-datepicker`. This provides a beautiful date picker modal for when users schedule tasks, complete with custom primary blues, rounded corners, and a blur background overlay.
* **Created/Modified Files:**
  * [`components/Calendar.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/components/Calendar.js) (Custom date-picker picker popover)

---

### ➕ Phase 19: Add Task Bottom Sheet
* **What Happened:** Develop the Task Creation sheet `AddTasks.js`. When triggered, it slides up as a modal overlay with a Gaussian blur backdrop. Allows users to enter a Task Title and Description, and integrates the `Calendar.js` date picker modal to choose task dates.
* **Created/Modified Files:**
  * [`components/AddTasks.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/components/AddTasks.js) (Task entry form with date/time modal integrations)

---

### 🔍 Phase 20: Master Navigation Integration, Task Explorer & Detail Flow
* **What Happened:** Integrate all sub-screens into the master navigation flow. Bridge the root Stack Navigator (P1 -> P2_5 -> SignIn -> SignUp -> tabs) inside `NavigationMain.js` with the nested `TaskPageTOInfo.js` stack. It links `TasksPage.js` (featuring search bars, sorting dropdowns, today's tasks list, and a floating addition trigger) with `TaskInfo.js` (the detailed task sheet displaying titles, dates, descriptions, and action triggers like Done, Delete, and Pin). Includes alternative sorting methods in `Tash.js`.
* **Created/Modified Files:**
  * [`App.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/App.js) (Root entry point hosting the primary NavigationContainer)
  * [`navigation/NavigationMain.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/navigation/NavigationMain.js) (Core stack managing splash, onboarding, authorization, and tabs)
  * [`navigation/TaskPageTOInfo.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/navigation/TaskPageTOInfo.js) (Tasks explorer sub-navigator stack)
  * [`components/TasksPage.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/components/TasksPage.js) (Main tasks dashboard screen with search and sort layout)
  * [`components/TaskInfo.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/components/TaskInfo.js) (Task detail overlay with status toggles)
  * [`components/Tash.js`](file:///home/alpha/Desktop/Mahnoor%20Projects/ToDoMobileApp-main/components/Tash.js) (Optional sorting/filtering reference modal view)

---

## 🛠️ Installation & Running Locally

1. **Clone and Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the Expo development server:**
   ```bash
   npx expo start
   ```

3. **Run on preferred devices:**
   * Press `a` to run on Android emulator.
   * Press `i` to run on iOS simulator.
   * Press `w` to run on web browser.
