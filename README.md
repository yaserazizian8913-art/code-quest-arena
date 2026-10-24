@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Tahoma, sans-serif;
  background:
    radial-gradient(circle at top, rgba(124, 58, 237, 0.28), transparent 25%),
    radial-gradient(circle at bottom right, rgba(34, 211, 238, 0.2), transparent 30%),
    #050b1a;
  color: white;
}

* {
  box-sizing: border-box;
}

button,
input,
textarea {
  font: inherit;
}

::selection {
  background: rgba(139, 92, 246, 0.5);
}

