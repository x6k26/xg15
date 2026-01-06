
    body {
      margin: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: system-ui, sans-serif;
      background: #f5f5f5;
    }
    .container {
      text-align: center;
      max-width: 400px;
      width: 100%;
      padding: 2rem;
    }
    h1 {
      color: #0078d4;
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
    .loader {
      width: 80%;
      max-width: 300px;
      height: 8px;
      margin: 0 auto;
      background: #ddd;
      border-radius: 4px;
      overflow: hidden;
      position: relative;
    }
    .bar {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 40%;
      background: linear-gradient(90deg, transparent, #0078d4, transparent);
      border-radius: 4px;
      animation: loading 1.2s ease-in-out infinite;
    }
    @keyframes loading {
      0%   { transform: translateX(-100%); }
      100% { transform: translateX(300%); }
    }

