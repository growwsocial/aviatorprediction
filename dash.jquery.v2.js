const allowedDomain = 'dashboard.aviatorhacks.xyz';

// Function to dynamically insert and show the popup
function showPopup() {
    const overlay = document.createElement('div');
    overlay.className = 'x1y2z3';
    document.body.appendChild(overlay);

    const popup = document.createElement('div');
    popup.className = 'j4k5l6';
    popup.innerHTML = `
        <div class="k7m8n9">
            <p>You have not purchased. <a href="https://yourlandingpage.com">Click here</a> to purchase.</p>
            <button class="b1c2d3" onclick="window.location.href='https://yourlandingpage.com'">Purchase Now</button>
        </div>
    `;
    document.body.appendChild(popup);

    // Apply styles
    overlay.style.display = 'block';
    document.querySelector('.z9y8x7')?.classList.add('a1b2c3'); // Optional if 'z9y8x7' is an existing class
    popup.style.display = 'flex';
}

// Add external CSS link
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://growwsocial.github.io/aviatorprediction/dash.style.css';
document.head.appendChild(link);

// Add inline CSS dynamically
const style = document.createElement('style');
style.textContent = `
    .x1y2z3 {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 999;
    }

    .a1b2c3 {
        filter: blur(5px);
        position: relative;
        z-index: 998;
        pointer-events: none;
    }

    .j4k5l6 {
        display: none;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70%;
        max-width: 400px;
        height: auto;
        background: radial-gradient(circle, #2c2c2c, #4c4c4c);
        border-radius: 20px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
        color: #f0f0f0;
        font-family: 'Verdana', sans-serif;
        z-index: 1000;
        opacity: 0;
        animation: fadeAnim 1s forwards;
    }

    .k7m8n9 {
        padding: 25px;
        text-align: center;
    }

    .k7m8n9 p {
        font-size: 1.1em;
        margin: 0 0 20px;
    }

    .k7m8n9 a {
        color: #3cb371;
        text-decoration: none;
        font-weight: bold;
    }

    .k7m8n9 a:hover {
        color: #2e8b57;
    }

    .b1c2d3 {
        background-color: #3cb371;
        color: #fff;
        padding: 12px 25px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 1.1em;
        margin-top: 20px;
        transition: background-color 0.3s;
    }

    .b1c2d3:hover {
        background-color: #2e8b57;
    }

    @keyframes fadeAnim {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);

// Debugging: Log the current hostname
console.log('Current Hostname:', window.location.hostname);

// Check domain and show popup if necessary
if (window.location.hostname.trim().toLowerCase() !== allowedDomain.trim().toLowerCase()) {
    showPopup();
}
