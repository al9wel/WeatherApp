# 🌤️ Weather App (React + Redux)

A simple and responsive **Weather Application** built using **React**, **Vite**, **Redux Toolkit**, and **Tailwind CSS**, leveraging the **OpenWeather API**.  
Users can search for any city and instantly get **current weather data**, with **language support** in **English and Arabic** via **i18next (i18n)**.

---

![Weather App Preview](https://i.imgur.com/MPLdK2y.png)

---

## 📍 Live Demo

- https://al9wel-9.netlify.app/

---

## 🚀 Features

- 🔍 **City Search** – Search for any city worldwide.
- 🌡️ **Current Weather Data** – Displays temperature, weather description, humidity, wind speed, and more.
- 🌐 **Multilingual Support** – Switch between **English** and **Arabic** using **i18next**.
- ⚙️ **State Management with Redux** – Uses **Redux Toolkit** for global state handling and cleaner logic.
- 📱 **Responsive Design** – Works well on desktop, tablet, and mobile.
- ⚡ **Fast and Lightweight** – Built with React + Vite for smooth performance.

---

## 🧠 Purpose

This app demonstrates how to:

- Work with **REST APIs** using `fetch` in React.
- Manage global state efficiently using **Redux Toolkit**.
- Handle **JSON data** and dynamic UI updates.
- Implement **internationalization (i18n)** for multiple languages.
- Build a **responsive front-end interface** using Tailwind CSS.

---

## 🏗️ Technologies Used

- ⚛️ **React** – Component-based UI library.
- ⚡ **Vite** – Fast build tool for React projects.
- 🧰 **Redux Toolkit** – Simplifies state management in React apps.
- 🎨 **Tailwind CSS** – Utility-first CSS framework.
- 🌐 **OpenWeather API** – Provides real-time weather data.
- 🌍 **i18next (i18n)** – For language translation and localization.

---

## 📁 Project Structure

```
📦 WeatherApp
 ┣ 📂 src
 ┃ ┣ 📂 assets                   # images, fonts, etc.
 ┃ ┣ 📂 components               # Reusable components
 ┃ ┣ 📂 features                 # Redux slices and logic
 ┃ ┣ 📂 context                  # context (if used)
 ┃ ┣ 📂 store                    # Redux store setup
 ┃ ┣ 📜 App.jsx                  # Main app logic
 ┃ ┣ 📜 i18n.jsx                 # i18n configuration
 ┃ ┣ 📜 main.jsx                 # Entry point
 ┃ ┗ 📜 index.css                # Tailwind styles
 ┣ 📜 .env                       # Environment variables (API key)
 ┣ 📂 public                     # Static files
 ┃ ┗ 📂 locales                  # Language files
 ┃   ┗ 📂 ar                     # Arabic translation folder
 ┃     ┗ 📜 translation.json     # Translation file
 ┣ 📜 package.json               # Project dependencies
 ┣ 📜 tailwind.config.js         # Tailwind setup
 ┣ 📜 eslint.config.js           # ESLint setup
 ┣ 📜 vite.config.js             # Vite configuration
 ┣ 📜 README.md                  # Documentation
 ┗ 📜 .gitignore
```

---

## 🧾 How to Run the Project

1. **Clone or Download the Project**

   ```bash
   git clone https://github.com/al9wel/WeatherApp.git
   ```

2. **Navigate into the Project Folder**

   ```bash
   cd WeatherApp
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Add Your OpenWeather API Key**

   - Create a `.env` file in the root folder:

   ```ini
   VITE_API_KEY=your_api_key_here
   ```

5. **Run the App in Development Mode**

   ```bash
   npm run dev
   ```

   The project will start locally on `http://localhost:5173`.

6. **Build for Production**

   ```bash
   npm run build
   ```

7. **Preview the Build**

   ```bash
   npm run preview
   ```

---

## 🧩 How It Works

1. Enter a city name in the search bar.
2. The app sends a request to the OpenWeather API with your API key.
3. API returns weather data including temperature, humidity, wind, and description.
4. Redux handles the global state, storing city and weather data for consistent UI updates.
5. The app displays the data dynamically with weather-based icons.
6. Use the language switcher to toggle between English and Arabic.

---

## 📈 Future Improvements

- 🌐 Add 7-day or 5-day forecast.
- 🔔 Add weather alerts or notifications.
- 📊 Add charts for temperature and humidity trends.
- 💾 Enable offline mode caching.
- 🌍 Expand to additional languages beyond English and Arabic.

---

## 👨‍💻 Author

**Salem Ahmed Saeed Alswil**  
💼 Front-End Developer | React & Redux Projects  
📧 [sa.al9wel@gmail.com]  
🌐 [GitHub Profile](https://github.com/al9wel)  
📍 Yemen

---

## 📜 License

This project is open-source and available for personal or educational use.

---
