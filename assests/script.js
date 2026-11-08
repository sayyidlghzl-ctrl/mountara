// Data 40 Gunung Jawa Barat
const dataGunung = [
    { id: 1, nama: "Gunung Ciremai", kesulitan: "Mahir", mdpl: 3078, lokasi: "Kuningan & Majalengka", foto: "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?w=600&auto=format&fit=crop" },
    { id: 2, nama: "Gunung Gede", kesulitan: "Menengah", mdpl: 2958, lokasi: "Cianjur, Sukabumi, Bogor", foto: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop" },
    { id: 3, nama: "Gunung Pangrango", kesulitan: "Mahir", mdpl: 3019, lokasi: "Cianjur, Sukabumi, Bogor", foto: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop" },
    { id: 4, nama: "Gunung Papandayan", kesulitan: "Pemula", mdpl: 2665, lokasi: "Garut", foto: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&auto=format&fit=crop" },
    { id: 5, nama: "Gunung Cikuray", kesulitan: "Mahir", mdpl: 2821, lokasi: "Garut", foto: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=600&auto=format&fit=crop" },
    { id: 6, nama: "Gunung Guntur", kesulitan: "Menengah", mdpl: 2249, lokasi: "Garut", foto: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&auto=format&fit=crop" },
    { id: 7, nama: "Gunung Salak", kesulitan: "Mahir", mdpl: 2211, lokasi: "Bogor & Sukabumi", foto: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=600&auto=format&fit=crop" },
    { id: 8, nama: "Gunung Manglayang", kesulitan: "Pemula", mdpl: 1818, lokasi: "Bandung & Sumedang", foto: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop" },
    { id: 9, nama: "Gunung Tangkuban Parahu", kesulitan: "Pemula", mdpl: 2084, lokasi: "Subang & Bandung Barat", foto: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop" },
    { id: 10, nama: "Gunung Burangrang", kesulitan: "Menengah", mdpl: 2050, lokasi: "Bandung Barat & Purwakarta", foto: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&auto=format&fit=crop" },
    { id: 11, nama: "Gunung Tampomas", kesulitan: "Pemula", mdpl: 1684, lokasi: "Sumedang", foto: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&auto=format&fit=crop" },
    { id: 12, nama: "Gunung Rakutak", kesulitan: "Menengah", mdpl: 1921, lokasi: "Kabupaten Bandung", foto: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop" },
    { id: 13, nama: "Gunung Wayang", kesulitan: "Pemula", mdpl: 2182, lokasi: "Pangalengan, Bandung", foto: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&auto=format&fit=crop" },
    { id: 14, nama: "Gunung Malabar", kesulitan: "Menengah", mdpl: 2343, lokasi: "Kabupaten Bandung", foto: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=600&auto=format&fit=crop" },
    { id: 15, nama: "Gunung Patuha", kesulitan: "Pemula", mdpl: 2434, lokasi: "Ciwidey, Bandung", foto: "https://images.unsplash.com/photo-1511497584788-876761465586?w=600&auto=format&fit=crop" },
    { id: 16, nama: "Gunung Kencana", kesulitan: "Pemula", mdpl: 1803, lokasi: "Bogor", foto: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format&fit=crop" },
    { id: 17, nama: "Gunung Munara", kesulitan: "Pemula", mdpl: 360, lokasi: "Rumpin, Bogor", foto: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&auto=format&fit=crop" },
    { id: 18, nama: "Gunung Batu Lembang", kesulitan: "Pemula", mdpl: 1228, lokasi: "Lembang, Bandung Barat", foto: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&auto=format&fit=crop" },
    { id: 19, nama: "Gunung Lembu", kesulitan: "Pemula", mdpl: 792, lokasi: "Purwakarta", foto: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&auto=format&fit=crop" },
    { id: 20, nama: "Gunung Parang", kesulitan: "Mahir", mdpl: 963, lokasi: "Purwakarta", foto: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=600&auto=format&fit=crop" },
    { id: 21, nama: "Gunung Bongkok", kesulitan: "Pemula", mdpl: 975, lokasi: "Purwakarta", foto: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&auto=format&fit=crop" },
    { id: 22, nama: "Gunung Galunggung", kesulitan: "Pemula", mdpl: 2168, lokasi: "Tasikmalaya", foto: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop" },
    { id: 23, nama: "Gunung Karang", kesulitan: "Menengah", mdpl: 1778, lokasi: "Majalengka", foto: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop" },
    { id: 24, nama: "Gunung Puncak Manik", kesulitan: "Menengah", mdpl: 2211, lokasi: "Salak 1, Sukabumi", foto: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&auto=format&fit=crop" },
    { id: 25, nama: "Gunung Palasari", kesulitan: "Pemula", mdpl: 1852, lokasi: "Sumedang", foto: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=600&auto=format&fit=crop" },
    { id: 26, nama: "Gunung Artapela", kesulitan: "Pemula", mdpl: 2194, lokasi: "Pangalengan, Bandung", foto: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&auto=format&fit=crop" },
    { id: 27, nama: "Gunung Sanggabuana", kesulitan: "Menengah", mdpl: 1291, lokasi: "Karawang", foto: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=600&auto=format&fit=crop" },
    { id: 28, nama: "Gunung Kancana Sukabumi", kesulitan: "Pemula", mdpl: 1200, lokasi: "Sukabumi", foto: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop" },
    { id: 29, nama: "Gunung Subang", kesulitan: "Menengah", mdpl: 1204, lokasi: "Cianjur & Kuningan", foto: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop" },
    { id: 30, nama: "Gunung Kendang", kesulitan: "Mahir", mdpl: 2608, lokasi: "Bandung & Garut", foto: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&auto=format&fit=crop" },
    { id: 31, nama: "Gunung Sadakora", kesulitan: "Pemula", mdpl: 1090, lokasi: "Purwakarta", foto: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&auto=format&fit=crop" },
    { id: 32, nama: "Gunung Tilu Purwakarta", kesulitan: "Menengah", mdpl: 1076, lokasi: "Purwakarta", foto: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop" },
    { id: 33, nama: "Gunung Sawal", kesulitan: "Menengah", mdpl: 1764, lokasi: "Ciamis", foto: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&auto=format&fit=crop" },
    { id: 34, nama: "Gunung Hejo", kesulitan: "Pemula", mdpl: 650, lokasi: "Purwakarta", foto: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=600&auto=format&fit=crop" },
    { id: 35, nama: "Gunung Kancana Bogor", kesulitan: "Pemula", mdpl: 1802, lokasi: "Cisarua, Bogor", foto: "https://images.unsplash.com/photo-1511497584788-876761465586?w=600&auto=format&fit=crop" },
    { id: 36, nama: "Gunung Sunda", kesulitan: "Pemula", mdpl: 700, lokasi: "Sukabumi", foto: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format&fit=crop" },
    { id: 37, nama: "Gunung Karacak", kesulitan: "Pemula", mdpl: 1838, lokasi: "Garut", foto: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&auto=format&fit=crop" },
    { id: 38, nama: "Gunung Srimahi", kesulitan: "Pemula", mdpl: 1250, lokasi: "Ciwidey, Bandung", foto: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&auto=format&fit=crop" },
    { id: 39, nama: "Gunung Sangar", kesulitan: "Menengah", mdpl: 1835, lokasi: "Arjasari, Bandung", foto: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&auto=format&fit=crop" },
    { id: 40, nama: "Gunung Halimun", kesulitan: "Mahir", mdpl: 1929, lokasi: "Sukabumi & Bogor", foto: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=600&auto=format&fit=crop" }
];

document.addEventListener("DOMContentLoaded", () => {
    const strip = document.getElementById("strip");
    const filterButtons = document.querySelectorAll("#filter .pil");
    const inputCari = document.getElementById("cari");
    const btnCari = document.getElementById("btnCari");
    const panahKiri = document.querySelector(".panah button:first-child");
    const panahKanan = document.querySelector(".panah button:last-child");
    const h1 = document.getElementById("h1");
    const h2 = document.getElementById("h2");
    const bar = document.getElementById("bar");
    const overlay = document.getElementById("overlay");
    const modal = document.getElementById("modal");

    let filteredData = [...dataGunung];
    let bookmarkedIds = JSON.parse(localStorage.getItem("puncak_jabar_bookmarks")) || [];

    // Render Kartu Gunung
    function renderCards(data) {
        strip.innerHTML = "";

        if (data.length === 0) {
            strip.innerHTML = `<div style="color:#fff; padding:20px; font-size:16px;">Tidak ada gunung yang ditemukan.</div>`;
            updateCounter(0, 0);
            return;
        }

        data.forEach(item => {
            const isBookmarked = bookmarkedIds.includes(item.id);
            const kartu = document.createElement("article");
            kartu.className = "kartu";
            kartu.dataset.id = item.id;

            kartu.innerHTML = `
                <h4>${item.nama}</h4>
                <div class="dots" aria-hidden="true">
                    <i></i><i></i><i></i>
                </div>
                <div class="foto" style="background-image: url('${item.foto}'); background-size: cover; background-position: center;">
                    <span class="placeholder-gambar" style="display:none;">${item.nama}</span>
                    <button class="bookmark ${isBookmarked ? 'aktif' : ''}" type="button" aria-label="Simpan gunung" data-id="${item.id}">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="${isBookmarked ? '#ff4757' : 'currentColor'}" aria-hidden="true">
                            <path d="M1 1h12v14l-6-4-6 4z" />
                        </svg>
                    </button>
                    <span class="tag">${item.kesulitan}</span>
                </div>
                <div class="kartu-meta">
                    <span>Ketinggian</span>
                    <strong>${item.mdpl.toLocaleString('id-ID')} mdpl</strong>
                    <span>Lokasi</span>
                    <strong>${item.lokasi}</strong>
                </div>
            `;

            // Modal Click Event (Kecuali tombol bookmark)
            kartu.addEventListener("click", (e) => {
                if (!e.target.closest(".bookmark")) {
                    bukaModal(item);
                }
            });

            strip.appendChild(kartu);
        });

        // Event listener untuk tombol bookmark
        document.querySelectorAll(".bookmark").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const id = parseInt(btn.dataset.id);
                toggleBookmark(id, btn);
            });
        });

        updateProgress();
    }

    // Filter Tingkat Kesulitan
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("aktif"));
            btn.classList.add("aktif");

            const kategori = btn.textContent.trim();
            const kataKunci = inputCari.value.toLowerCase().trim();

            terapkanFilterDanCari(kategori, kataKunci);
        });
    });

    // Pencarian
    function jalankanPencarian() {
        const kataKunci = inputCari.value.toLowerCase().trim();
        const btnAktif = document.querySelector("#filter .pil.aktif");
        const kategori = btnAktif ? btnAktif.textContent.trim() : "Semua";

        terapkanFilterDanCari(kategori, kataKunci);
    }

    inputCari.addEventListener("input", jalankanPencarian);
    btnCari.addEventListener("click", jalankanPencarian);

    function terapkanFilterDanCari(kategori, kataKunci) {
        filteredData = dataGunung.filter(g => {
            const cocokKategori = (kategori === "Semua") || (g.kesulitan === kategori);
            const cocokKataKunci = g.nama.toLowerCase().includes(kataKunci) || g.lokasi.toLowerCase().includes(kataKunci);
            return cocokKategori && cocokKataKunci;
        });

        renderCards(filteredData);
        strip.scrollLeft = 0;
    }

    // Toggle Bookmark
    function toggleBookmark(id, btn) {
        const index = bookmarkedIds.indexOf(id);
        const svgPath = btn.querySelector("svg");

        if (index > -1) {
            bookmarkedIds.splice(index, 1);
            btn.classList.remove("aktif");
            svgPath.setAttribute("fill", "currentColor");
        } else {
            bookmarkedIds.push(id);
            btn.classList.add("aktif");
            svgPath.setAttribute("fill", "#ff4757");
        }

        localStorage.setItem("puncak_jabar_bookmarks", JSON.stringify(bookmarkedIds));
    }

    // Scroll Horizontal & Panah Navigasi
    if (panahKiri && panahKanan) {
        panahKiri.addEventListener("click", () => {
            strip.scrollBy({ left: -320, behavior: "smooth" });
        });

        panahKanan.addEventListener("click", () => {
            strip.scrollBy({ left: 320, behavior: "smooth" });
        });
    }

    // Update Progress Bar & Counter
    function updateProgress() {
        if (filteredData.length === 0) return;

        const maxScroll = strip.scrollWidth - strip.clientWidth;
        const currentScroll = strip.scrollLeft;

        let indexTerlihat = 1;
        if (maxScroll > 0) {
            const rasio = currentScroll / maxScroll;
            indexTerlihat = Math.min(
                Math.round(rasio * (filteredData.length - 1)) + 1,
                filteredData.length
            );
            const persentaseBar = Math.max(5, ((currentScroll + strip.clientWidth) / strip.scrollWidth) * 100);
            if (bar) bar.style.width = `${persentaseBar}%`;
        } else {
            if (bar) bar.style.width = `100%`;
        }

        updateCounter(indexTerlihat, filteredData.length);
    }

    function updateCounter(saatIni, total) {
        if (h1) h1.textContent = saatIni < 10 ? `0${saatIni}` : saatIni;
        if (h2) h2.textContent = total < 10 ? `0${total}` : total;
    }

    strip.addEventListener("scroll", updateProgress);

    // Modal Detail Gunung
    function bukaModal(gunung) {
        if (!overlay || !modal) return;

        modal.innerHTML = `
            <div style="position:relative;">
                <button id="tutupModal" style="position:absolute; right:0; top:0; background:none; border:none; font-size:24px; cursor:pointer; color:#333;">&times;</button>
                <h3 style="margin-top:0; color:#1e293b; font-size:20px;">${gunung.nama}</h3>
                <img src="${gunung.foto}" alt="${gunung.nama}" style="width:100%; height:200px; object-fit:cover; border-radius:8px; margin:12px 0;">
                <p style="margin:6px 0; color:#475569;"><strong>Ketinggian:</strong> ${gunung.mdpl.toLocaleString('id-ID')} mdpl</p>
                <p style="margin:6px 0; color:#475569;"><strong>Lokasi:</strong> ${gunung.lokasi}</p>
                <p style="margin:6px 0; color:#475569;"><strong>Tingkat Kesulitan:</strong> ${gunung.kesulitan}</p>
            </div>
        `;

        overlay.style.display = "flex";
        overlay.setAttribute("aria-hidden", "false");

        document.getElementById("tutupModal").addEventListener("click", tutupModal);
    }

    function tutupModal() {
        if (!overlay) return;
        overlay.style.display = "none";
        overlay.setAttribute("aria-hidden", "true");
    }

    if (overlay) {
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) tutupModal();
        });
    }

    // Inisialisasi awal
    renderCards(filteredData);
});