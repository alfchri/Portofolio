// =====================================================================
// FILE: script.js (Versi Frontend Statis untuk GitHub Pages)
// Karena kita hosting di GitHub Pages (tanpa Backend), data proyek 
// langsung disimpan di dalam file ini.
// =====================================================================

document.addEventListener('DOMContentLoaded', () => {
    fetchProjects();   
    setupContactForm(); 
});

// =====================================================================
// FUNGSI 1: MEMUAT DATA PROYEK SECARA LOKAL
// =====================================================================
function fetchProjects() {
    const projectContainer = document.getElementById('project-list');
    
    // Data Proyek disimpan langsung di sini (tanpa perlu server.js)
    const projects = [
        {
            id: 1,
            title: "Microstrip Antenna",
            icon: "fa-solid fa-satellite-dish",
            desc: "Perancangan dan pembuatan antena mikrostrip array 2x1 pada frekuensi 3.3 GHz."
        },
        {
            id: 2,
            title: "Noise Detection IoT",
            icon: "fa-solid fa-ear-listen",
            desc: "Sistem pendeteksi kebisingan menggunakan sensor suara dan mikrokontroler ESP32."
        },
        {
            id: 3,
            title: "Signal Modulation",
            icon: "fa-solid fa-wave-square",
            desc: "Pembuatan kalkulator untuk simulasi modulasi sinyal analog menggunakan MATLAB App."
        },
        {
            id: 4,
            title: "Sensor Detectors",
            icon: "fa-solid fa-temperature-half",
            desc: "Pendeteksi suhu ruangan (LM35/PIC16F877A) dan pendeteksi magnetik (Reed Switch)."
        }
    ];

    // Cetak ke layar HTML
    renderProjects(projects, projectContainer);
}

// =====================================================================
// FUNGSI 2: MENCETAK KOTAK PROYEK KE HTML
// =====================================================================
function renderProjects(projects, container) {
    container.innerHTML = '';
    
    projects.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'p-5 rounded-2xl border border-slate-700/30 bg-slate-800/20 hover:bg-slate-800/60 hover:border-accent/40 transition-all duration-300 group/card hover:-translate-y-1 shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]';
        
        card.innerHTML = `
            <i class="${proj.icon} text-3xl text-slate-500 group-hover/card:text-accent mb-4 transition-all duration-300 group-hover/card:scale-110"></i>
            <h3 class="text-white font-bold text-lg mb-2">${proj.title}</h3>
            <p class="text-sm text-slate-400 leading-relaxed">${proj.desc}</p>
        `;
        
        container.appendChild(card);
    });
}

// =====================================================================
// FUNGSI 3: MENGATUR FORM KONTAK (Simulasi)
// Karena tidak ada backend, kita buat simulasi pengiriman pesan
// =====================================================================
function setupContactForm() {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const statusDiv = document.getElementById('form-status');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Animasi tombol loading
        submitBtn.innerHTML = '<div class="loader"></div> <span class="ml-2">Mengirim...</span>';
        submitBtn.disabled = true;
        statusDiv.innerHTML = '';

        // Berpura-pura loading selama 2 detik, lalu tampilkan pesan sukses
        setTimeout(() => {
            statusDiv.innerHTML = `<p class="text-green-400 text-sm mt-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20"><i class="fa-solid fa-circle-check mr-2"></i> Pesan terkirim! (Catatan: Ini versi statis, pesan tidak benar-benar masuk ke email saat ini).</p>`;
            form.reset();
            
            submitBtn.innerHTML = 'Kirim Pesan <i class="fa-solid fa-paper-plane ml-2"></i>';
            submitBtn.disabled = false;
        }, 2000);
    });
}
