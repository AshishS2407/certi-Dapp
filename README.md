# 🎓 Certi DApp: Your Digital Credential Hub

Welcome to the *Certi DApp*! 🌟 This decentralized application (DApp) provides a seamless, secure, and fun way to issue and verify certificates on the blockchain. Say goodbye to fake certificates and hello to trust and transparency! 🚀

---
## 🎥 Demo Video

Check out our live demo! 🎬👇

[![Watch the video](https://img.youtube.com/vi/RHL7r4BOoGc/maxresdefault.jpg)](https://youtu.be/RHL7r4BOoGc?si=6j1jOaM3XQFBi01s)

---

## ✨ Features

🛠 *Issue Certificates*: Administrators can create certificates for students with course details, grades, and dates.

🔍 *Verify Certificates*: Verify certificates by simply entering the certificate ID—anyone can do it!

🔐 *Blockchain Security*: Powered by Ethereum, all certificates are stored on the blockchain, ensuring they can't be altered or forged.

🎨 *Beautiful UI*: A sleek, modern interface built with React and styled with Tailwind CSS.

---

## 🚀 Quick Start

### Prerequisites

Before you get started, make sure you have the following:

- 🖥 [Node.js](https://nodejs.org/)
- 📦 [npm](https://www.npmjs.com/) (usually installed with Node.js)
- 🔐 [Metamask](https://metamask.io/)
- 💰 Ethereum wallet with testnet ETH

### Installation

1. *Clone the repository*:

   bash
   git clone https://github.com/your-username/certi-Dapp.git
   cd certi-Dapp

2. **Install dependencies**:

   bash
   npm install
   

3. **Start the development server**:

   bash
   npm run dev
   

4. **Deploy the smart contract**:

   bash
   npx hardhat ignition deploy ignition/modules/Cert.js --network <network-name>
   

---

## 💻 Frontend Overview

The DApp is designed to be user-friendly and interactive. Here’s what it offers:

- **🏠 Home Page**: Connect your Metamask wallet and easily search for certificates by ID.
  
- **📝 Issue Page**: Admins can issue new certificates by filling out a simple form with course details, candidate name, grade, and issue date.
  
- **📜 Certificate Page**: Displays detailed certificate information fetched directly from the blockchain.

---

## 🎯 Usage Guide

### Connect to Metamask

Make sure to connect your Metamask wallet before interacting with the DApp:

javascript
const provider = new BrowserProvider(window.ethereum);
const signer = await provider.getSigner();


### Issue a Certificate

Admins can issue new certificates through the **Issue Certificate** page:

javascript
const tx = await instance.issue(cerid, cname, course, grade, date);

### Verify a Certificate

Users can verify certificates by entering the ID on the *Home* page. The data is securely fetched from the blockchain!

---

## 🎨 Screenshots

### 🏠 Home Page
![Home Page](https://github.com/AshishS2407/certi-Dapp/blob/main/Home.png)

### 📝 Issue Certificate Page
![Issue Certificate Page](https://github.com/AshishS2407/certi-Dapp/blob/main/Issue.png)

### 📜 Certificate Display
![Certificate Display](https://github.com/AshishS2407/certi-Dapp/blob/main/View.png)


---

## 🤝 Contributing

We welcome contribution! 🙌 Feel free to fork this project, open issues, or submit pull requests. Let’s build something amazing together! 🚀

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)

---

💻 *Happy coding!* 😊
