# ⚡ RestructuredJavaScript

**RestructuredJavaScript** (`.structjs`) is a specialized JavaScript-like format designed for **logic control systems**.  
It allows you to write structured conditional logic in a familiar syntax, then **convert it into Ladder Logic** — a format widely used in PLC (Programmable Logic Controller) programming.

This tool is written in **TypeScript** and runs on **Node.js**.

---

## 🚀 Features
- ✅ **Custom `.structjs` file support**  
- ✅ **Converts structured JS logic into Ladder Logic rungs**  
- ✅ **Beginner-friendly CLI**  
- ✅ **Written in TypeScript with full type safety**  
- ✅ **Easily extendable for real PLC integration**

---

## 📂 Example

**Example `.structjs` file:**
```javascript
// example.structjs
if (Sensor1 && Sensor2) {
    Motor = true;
} else {
    Motor = false;
}
