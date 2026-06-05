// ============================================
// RICK MODZ X - FULLY DECRYPTED VERSION
// Original script completely deobfuscated
// ANY KEY WORKS - No authentication required
// ============================================

(function() {
    'use strict';
    
    // ========== BRANDING ==========
    console.log("%c⚡ RICK MODZ X - FULLY DECRYPTED ⚡", "color:#00ffcc;font-size:16px;font-weight:bold");
    console.log("%c✓ ANY KEY WORKS • NO VALIDATION REQUIRED", "color:#00ffcc");
    
    // ========== CONFIGURATION ==========
    const CONFIG = {
        keyFileUrl: "https://zxi-file-loader.ah4734536.workers.dev/?file=key.txt",
        redirectFileUrl: "https://zxi-file-loader.ah4734536.workers.dev/?file=zxi.txt",
        buttonFileUrl: "https://zxi-file-loader.ah4734536.workers.dev/?file=button.txt",
        musicFileUrl: "https://zxi-file-loader.ah4734536.workers.dev/?file=music.txt",
        updateCheckUrl: "https://zxi.zxidesert.workers.dev/",
        brandColor: "#00ffcc",
        brandName: "RICK MODZ X"
    };
    
    let audioPlayer = null;
    
    // ========== UI STYLES ==========
    const styles = document.createElement('style');
    styles.textContent = `
        @keyframes zxi-lightning-glow {
            0% { box-shadow: 0 0 5px #00ffcc; border-color: #00ffcc; }
            25% { box-shadow: 0 0 15px #00e6b8; border-color: #00e6b8; }
            35% { box-shadow: 0 0 25px #00ffff; border-color: #00ffff; }
            70% { box-shadow: 0 0 15px #00e6b8; border-color: #00e6b8; }
            100% { box-shadow: 0 0 5px #00ffcc; border-color: #00ffcc; }
        }
        @keyframes zxi-spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        @keyframes zxi-fire-spin {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes zxi-fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(styles);
    
    // ========== REMOVE EXISTING UI ==========
    const existingModal = document.getElementById('zxi-auth-box');
    if (existingModal) existingModal.remove();
    
    // ========== CREATE MODAL UI ==========
    const modal = document.createElement('div');
    modal.id = 'zxi-auth-box';
    modal.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(6,10,23,0.95);
        backdrop-filter: blur(12px);
        color: #fff;
        padding: 30px 25px;
        border-radius: 16px;
        z-index: 2147483647;
        font-family: system-ui, -apple-system, sans-serif;
        text-align: center;
        box-shadow: 0 20px 50px rgba(0,0,0,0.6);
        border: 2px solid #00ffcc;
        width: 300px;
        box-sizing: border-box;
        animation: zxi-lightning-glow 3s linear infinite;
    `;
    
    modal.innerHTML = `
        <button id="zxi-music-btn" style="position:absolute;top:15px;right:15px;background:rgba(255,255,255,0.05);border:1px solid rgba(0,255,204,0.3);color:#ff4444;border-radius:50%;width:32px;height:32px;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;z-index:10;">🔇</button>
        
        <h3 style="margin:0 0 6px 0;color:#00ffcc;font-size:20px;letter-spacing:1.5px;font-weight:800;text-shadow:0 0 12px rgba(0,255,204,0.5);">⚡ RICK MODZ X ⚡</h3>
        <p style="margin:0 0 20px 0;color:#ffaa00;font-size:11px;letter-spacing:2px;font-weight:600;">ANY KEY WORKS • NO VALIDATION</p>
        
        <input type="text" id="zxi-key-input" placeholder="ENTER ANY KEY" style="width:100%;padding:12px;margin-bottom:16px;border:1px solid rgba(0,255,204,0.4);border-radius:8px;background:rgba(7,11,25,0.6);color:#fff;text-align:center;box-sizing:border-box;font-size:13px;font-weight:600;outline:none;">
        
        <button id="zxi-login-btn" style="width:100%;background:#00ffcc;color:#030712;border:none;padding:12px;border-radius:8px;font-weight:700;cursor:pointer;font-size:14px;margin-bottom:12px;box-shadow:0 4px 12px rgba(0,255,204,0.3);">🔓 ACCESS SYSTEM</button>
        
        <button id="zxi-telegram-btn" style="width:100%;background:#229ED9;color:#fff;border:none;padding:12px;border-radius:8px;font-weight:700;cursor:pointer;font-size:14px;">📱 TELEGRAM</button>
        
        <div id="zxi-status" style="margin-top:16px;font-size:11px;font-weight:700;color:#00ffcc;">⚡ READY • ENTER ANY KEY</div>
    `;
    
    document.body.appendChild(modal);
    
    // ========== DOM ELEMENTS ==========
    const musicBtn = document.getElementById('zxi-music-btn');
    const keyInput = document.getElementById('zxi-key-input');
    const loginBtn = document.getElementById('zxi-login-btn');
    const telegramBtn = document.getElementById('zxi-telegram-btn');
    const statusDiv = document.getElementById('zxi-status');
    
    // ========== INPUT FOCUS/BLUR EFFECTS ==========
    keyInput.addEventListener('focus', () => {
        keyInput.style.border = '1px solid #00ffcc';
        keyInput.style.boxShadow = '0 0 10px rgba(0,255,204,0.25), inset 0 2px 4px rgba(0,0,0,0.5)';
    });
    
    keyInput.addEventListener('blur', () => {
        keyInput.style.border = '1px solid rgba(0,255,204,0.4)';
        keyInput.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.5)';
    });
    
    // ========== MUSIC BUTTON FUNCTIONALITY ==========
    async function initAudio() {
        if (!audioPlayer) {
            try {
                const response = await fetch(CONFIG.musicFileUrl + "?t=" + Date.now());
                const musicUrl = (await response.text()).trim();
                if (musicUrl && musicUrl.startsWith('http')) {
                    audioPlayer = new Audio(musicUrl);
                    audioPlayer.loop = true;
                }
            } catch (error) {
                console.log("Playback failed:", error);
            }
        }
    }
    
    musicBtn.addEventListener('click', async () => {
        await initAudio();
        if (audioPlayer && audioPlayer.paused) {
            audioPlayer.play().then(() => {
                musicBtn.textContent = "🔊";
                musicBtn.style.color = "#00ffcc";
                musicBtn.style.borderColor = "#00ffcc";
                musicBtn.style.boxShadow = "0 0 10px rgba(0,255,204,0.4)";
            }).catch((err) => {
                console.log("Playback failed:", err);
            });
        } else if (audioPlayer) {
            audioPlayer.pause();
            musicBtn.textContent = "🔇";
            musicBtn.style.borderColor = "rgba(0,255,204,0.3)";
            musicBtn.style.color = "#ff4444";
            musicBtn.style.boxShadow = "0 0 8px rgba(0,0,0,0.3)";
        }
    });
    
    // ========== TELEGRAM BUTTON ==========
    telegramBtn.addEventListener('click', async () => {
        try {
            const response = await fetch(CONFIG.buttonFileUrl + "?t=" + Date.now());
            const buttonUrl = (await response.text()).trim();
            if (buttonUrl.startsWith('http')) {
                window.open(buttonUrl, '_blank');
            }
        } catch (error) {}
    });
    
    // ========== REDIRECT WITH COUNTDOWN ==========
    function redirectWithCountdown(targetUrl) {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(3,7,18,0.85);
            backdrop-filter: blur(8px);
            z-index: 2147483647;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: system-ui, sans-serif;
        `;
        
        const randomSeconds = Math.floor(Math.random() * (25 - 22 + 1) + 22);
        let countdown = randomSeconds;
        
        overlay.innerHTML = `
            <div style="text-align:center;">
                <div style="position:relative; width:250px; height:250px; margin:0 auto;">
                    <div style="position:absolute; top:50%; left:50%; width:214px; height:214px; border-radius:50%; background:conic-gradient(transparent 0deg, #ff3300 90deg, #ffaa00 180deg, #00ffcc 270deg, transparent 360deg); filter:blur(14px); animation: zxi-fire-spin 1.5s linear infinite;"></div>
                    <div style="position:absolute; top:50%; left:50%; width:206px; height:206px; border-radius:50%; background:conic-gradient(transparent 0deg, #ff0055 60deg, #ff5500 120deg, #ffcc00 240deg, transparent 360deg); filter:blur(6px); animation: zxi-fire-spin 1s linear infinite reverse;"></div>
                    <svg width="240" height="240" style="transform:rotate(-90deg); position:relative;">
                        <circle cx="120" cy="120" r="95" fill="rgba(6,10,23,0.65)" stroke="rgba(0,255,204,0.1)" stroke-width="14"></circle>
                        <circle id="progressCircle" cx="120" cy="120" r="95" fill="none" stroke="#00ffcc" stroke-width="14" stroke-dasharray="597" stroke-dashoffset="597" stroke-linecap="round"></circle>
                    </svg>
                    <div id="countdownNumber" style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-size:54px; font-weight:900; color:#fff; text-shadow:0 0 20px #00ffcc;">${countdown}</div>
                </div>
                <p style="margin-top:30px; color:#00ffcc; font-size:16px; font-weight:700; letter-spacing:3px;">⚡ RICK MODZ X • REDIRECTING ⚡</p>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        const progressCircle = overlay.querySelector('#progressCircle');
        const countdownElement = overlay.querySelector('#countdownNumber');
        
        const interval = setInterval(() => {
            countdown--;
            countdownElement.textContent = countdown;
            const offset = 597 - (597 * (countdown / randomSeconds));
            progressCircle.style.strokeDashoffset = offset;
            
            if (countdown <= 0) {
                clearInterval(interval);
                if (audioPlayer) {
                    audioPlayer.pause();
                    audioPlayer = null;
                }
                overlay.remove();
                window.location.replace(targetUrl);
            }
        }, 1000);
    }
    
    // ========== CHECK FOR UPDATES ==========
    async function checkForUpdates() {
        const updateOverlay = document.createElement('div');
        updateOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(3,7,18,0.85);
            backdrop-filter: blur(8px);
            z-index: 2147483647;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        updateOverlay.innerHTML = `
            <div style="text-align:center; background:rgba(6,10,23,0.95); padding:35px 30px; border-radius:16px; border:1px solid #00ffcc; width:290px; animation: zxi-lightning-glow 3s linear infinite;">
                <div style="width:45px; height:45px; border:4px solid rgba(0,255,204,0.1); border-top:4px solid #00ffcc; border-radius:50%; margin:0 auto 20px auto; animation: zxi-spin 0.8s linear infinite;"></div>
                <p id="updateStatus" style="color:#00ffcc; font-size:15px; font-weight:700; margin:0;">⚡ CHECKING UPDATE... ⚡</p>
            </div>
        `;
        
        document.body.appendChild(updateOverlay);
        
        let hasUpdate = false;
        try {
            const response = await fetch(CONFIG.updateCheckUrl);
            const content = await response.text();
            if (content.includes("GitHub Updated")) {
                hasUpdate = true;
            }
        } catch (error) {}
        
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        const statusElement = document.getElementById('updateStatus');
        if (statusElement) {
            if (hasUpdate) {
                statusElement.innerHTML = "<span style='color:#00ffcc;'>Link Updated Successfully! ✓</span>";
            } else {
                statusElement.innerHTML = "<span style='color:#00ffcc;'>✓ RICK MODZ X • SYSTEM ONLINE ✓</span>";
            }
        }
        
        await new Promise(resolve => setTimeout(resolve, 1500));
        updateOverlay.remove();
    }
    
    // ========== LOGIN BUTTON - ANY KEY WORKS! ==========
    loginBtn.addEventListener('click', async () => {
        const enteredKey = keyInput.value.trim();
        
        // RICK MODZ X MODIFICATION: ANY KEY IS VALID
        // No validation - any input works immediately
        
        statusDiv.innerHTML = "<span style='color:#00ffcc;'>⚡ RICK MODZ X • ACCESS GRANTED ⚡</span>";
        statusDiv.style.color = "#00ffcc";
        loginBtn.disabled = telegramBtn.disabled = true;
        
        // Get music URL if not already loaded
        await initAudio();
        
        setTimeout(async () => {
            // Remove the auth modal
            modal.remove();
            
            // Show update checking
            await checkForUpdates();
            
            // Get redirect URL
            try {
                const redirectResponse = await fetch(CONFIG.redirectFileUrl + "?t=" + Date.now());
                const redirectUrl = (await redirectResponse.text()).trim();
                
                if (redirectUrl && redirectUrl.startsWith('http')) {
                    redirectWithCountdown(redirectUrl);
                }
            } catch (error) {
                console.log("Redirect error:", error);
            }
        }, 800);
    });
    
    // ========== AUTO-RESIZE FOR SMALL SCREENS ==========
    setTimeout(() => {
        modal.style.zIndex = "2147483647";
        if (window.innerWidth < 600) {
            modal.style.width = "90%";
            modal.style.maxWidth = "300px";
        }
    }, 10);
    
    // ========== WELCOME MESSAGE ==========
    console.log("%c╔════════════════════════════════════════════════════════════╗", "color:#00ffcc");
    console.log("%c║              RICK MODZ X - FULLY DECRYPTED                ║", "color:#00ffcc");
    console.log("%c║                    ✓ ANY KEY WORKS ✓                      ║", "color:#ffaa00");
    console.log("%c║              NO AUTHENTICATION REQUIRED                   ║", "color:#00ffcc");
    console.log("%c╚════════════════════════════════════════════════════════════╝", "color:#00ffcc");
    
})();
