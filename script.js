
const device = document.getElementById("device");
const result = document.getElementById("result");

function getSettings() {
    const selectedDevice = device.value;

    let settings = {
        general: 185,
        redDot: 190,
        scope2x: 180,
        scope4x: 170,
        sniper: 150,
        freeLook: 185
    };

    if (selectedDevice === "iPhone 7 Plus") {
        settings = {
            general: 180,
            redDot: 185,
            scope2x: 175,
            scope4x: 165,
            sniper: 145,
            freeLook: 180
        };
    }

    if (selectedDevice === "iPhone 8 Plus") {
        settings = {
            general: 190,
            redDot: 195,
            scope2x: 180,
            scope4x: 170,
            sniper: 150,
            freeLook: 190
        };
    }

    if (selectedDevice === "Redmi") {
        settings = {
            general: 185,
            redDot: 190,
            scope2x: 180,
            scope4x: 170,
            sniper: 150,
            freeLook: 185
        };
    }

    result.innerHTML = `
        <h3>🔥 ${selectedDevice} Settings</h3>
        <br>
        General: ${settings.general}<br>
        Red Dot: ${settings.redDot}<br>
        2x Scope: ${settings.scope2x}<br>
        4x Scope: ${settings.scope4x}<br>
        Sniper Scope: ${settings.sniper}<br>
        Free Look: ${settings.freeLook}<br>
        <br>
        <button onclick="copySettings()">COPY SETTINGS</button>
    `;

    window.currentSettings = settings;
}

function copySettings() {
    const s = window.currentSettings;

    const text = `
KESHAN SENSITIVE
General: ${s.general}
Red Dot: ${s.redDot}
2x Scope: ${s.scope2x}
4x Scope: ${s.scope4x}
Sniper Scope: ${s.sniper}
Free Look: ${s.freeLook}
    `;

    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Settings Copied!");
        })
        .catch(() => {
            alert("Copy failed. Please try again.");
        });
}
