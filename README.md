<h1 align="right">WIP: 🎨 React DALL·E Clone OpenAI</h1>

A simple Dalle clone built with React and Node.js.

---

## 📋 Table of Contents
- [General Info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Sources](#sources)

---

## 🧠 General Info
This project is a **DALL·E clone** that connects to the **OpenAI API** and generated images using OpenAI’s **DALL·E** model.  
It demonstrates how to integrate AI-powered image generation into a web app using a **Node.js** backend and a **React** frontend.

---

## 🛠️ Technologies
This project was built with:
- **JavaScript (ES6+)**
- **React**
- **Node.js**
- **Express**
- **HTML5**
- **CSS3**

---

## ⚙️ Setup
To run this project locally:

### 1️⃣ Clone the repo
```bash
git clone https://github.com/kpilszak/react-dalle-clone-openai.git
```

### 2️⃣ Go into the project folder
```bash
cd react-dalle-clone-openai
```

### 3️⃣ Install dependencies
```bash
npm install
```

### 4️⃣ Add your OpenAI API key to .env
```bash
touch .env
echo "OPENAI_API_KEY=your_api_key_here" > .env
```

### 5️⃣ Run the app
Start the backend and frontend (in **separate terminal windows** or **tabs**):
```bash
# Terminal 1
npm run start:backend
```
```bash
# Terminal 2
npm run start:frontend
```

The frontend will be available at http://localhost:3000 and the backend will run on http://localhost:5000
 (or your configured port).

---

## 📚 Sources
This project was inspired by and built with the help of  
**Ania Kubów’s tutorial** → [🛑 1h to code AI Image Variations App (Super simple!) | OpenAI API React Node.js](https://www.youtube.com/watch?v=PVK4_foBnwY)
