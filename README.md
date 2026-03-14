# 📖 RestructuredJavaScript: From Code to Ladder Logic  
*A Complete Guide (Condensed Edition)*  

---

## **Chapter 1 — Introduction**
In industrial automation, **Ladder Logic** is the standard for programming **PLCs** (Programmable Logic Controllers).  
While effective, it’s visually oriented and can be slow to write for developers used to modern languages.  

**RestructuredJavaScript** bridges the gap by letting you write **JavaScript-like logic** in `.structjs` files, which is then converted into **ladder logic**.

---

## **Chapter 2 — Why RestructuredJavaScript?**
- **Familiar Syntax** — JavaScript-style conditions and assignments.  
- **Automation Ready** — Output is PLC-friendly ladder logic.  
- **Cross-Disciplinary** — Programmers and engineers can collaborate.  
- **Extensible** — Can be adapted for different PLC brands.  

---

## **Chapter 3 — How It Works**
1. You write logic in `.structjs` files.  
2. The parser reads and interprets the code.  
3. It maps conditions to ladder logic symbols:  
   - `if` → ⎯[ ]⎯ (Normally Open Contact)  
   - `else` → ⎯[ / ]⎯ (Normally Closed Contact)  
   - Assignments → Output Coils  
4. Output is printed as text-based ladder rungs.  

---

## **Chapter 4 — Installation**
**Requirements:**  
- Node.js v18+  
- npm  
- TypeScript  

**Setup:**
```bash
mkdir restructuredjavascript && cd restructuredjavascript
npm init -y
npm install typescript @types/node --save-dev
```
# chapter 5 - credits
homemovie - making this software

