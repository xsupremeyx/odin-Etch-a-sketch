# odin-Etch-a-Sketch 🎨 [Version 1.1]

A browser-based digital sketch pad inspired by the classic Etch-a-Sketch toy. Draw by simply moving your mouse across the grid — colors change randomly on hover, and clicking tiles increases their opacity.

---

## ✨ Features

- ✅ Responsive grid of customizable size (up to 100×100)
- 🎨 Tiles change to random colors on hover
- 🖱️ Click to increase tile opacity (up to full opacity)
- 🔁 Dynamic grid resizing via input + button
- 💡 Clean layout using Flexbox

---

## 🚀 How It Works

### Grid Initialization
- A `960px` wide container holds a square grid of tiles.
- The number of tiles per row/column is controlled by user input (default: 16×16).

### Interactivity
- **Hovering** a tile: adds the `hovered` class and a random background color.
- **Clicking** a tile: increases its opacity incrementally (capped at 1).
- **Resize Button**: prompts for new grid size and regenerates the grid.

---

## 🧩 File Structure
project-root/
├── index.html # Main page
├── style.css # Styling for grid, layout, and hover effects
└── script.js # JavaScript for dynamic grid + interactivity


---

## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox)
- Vanilla JavaScript (DOM manipulation, event handling)

---

## 🧪 How to Use

1. Go to the Link: https://xsupremeyx.github.io/odin-Etch-a-sketch/
2. Use the **Grid Size** input to choose tile count (1–100).
3. Click **Resize Grid** to apply.
4. Hover over the grid to draw with random colors.
5. Click on tiles to make them darker (increase opacity).

---

## 📎 Notes

- Tiles reset every time you resize the grid.
- Opacity increases by `0.25` per click up to a maximum of `1`.
- Prevents invalid inputs (e.g., non-numeric or >100) by resetting to default (16).

---


## 📄 License

This project is open-source and free to use.

---

> Created for learning DOM manipulation and CSS layout.
> Followed The Odin Project Course


## Changelog

- Ver 1.0: original version
- Ver 1.1: Fix the Grid and Add Random / Black color selector options.
