// Data 40 Gunung Jawa Barat
const dataGunung = [
    // id 1 diperbaiki: sebelumnya "Gunung Papandayan" dengan kesulitan " Mudah" dan mdpl 2.665 (duplikat id 4).
    // Disesuaikan dengan kartu pertama di HTML lama: Gunung Ciremai, Mahir, 3.078 mdpl, Kuningan & Majalengka.
    { id: 1, nama: "Gunung Ciremai", kesulitan: "Mahir", mdpl: 3078, lokasi: "Kuningan & Majalengka", foto: "./jpg/g.ciremai.jpeg" },
    { id: 2, nama: "Gunung Gede", kesulitan: "Menengah", mdpl: 2958, lokasi: "Cianjur, Sukabumi, Bogor", foto: "./jpg/g.gede.jpeg" },
    { id: 3, nama: "Gunung Pangrango", kesulitan: "Mahir", mdpl: 3019, lokasi: "Cianjur, Sukabumi, Bogor", foto: "./jpg/g.pangrango.jpeg" },
    { id: 4, nama: "Gunung Papandayan", kesulitan: "Pemula", mdpl: 2665, lokasi: "Garut", foto: "./jpg/g.papandayan.jpeg" },
    { id: 5, nama: "Gunung Cikuray", kesulitan: "Mahir", mdpl: 2821, lokasi: "Garut", foto: "./jpg/g.cikuray.jpeg" },
    { id: 6, nama: "Gunung Guntur", kesulitan: "Menengah", mdpl: 2249, lokasi: "Garut", foto: "./jpg/g.guntur.jpeg" },
    { id: 7, nama: "Gunung Salak", kesulitan: "Mahir", mdpl: 2211, lokasi: "Bogor & Sukabumi", foto: "./jpg/g.salak.jpeg" },
    { id: 8, nama: "Gunung Manglayang", kesulitan: "Pemula", mdpl: 1818, lokasi: "Bandung & Sumedang", foto: "./jpg/g.manglayang.jpeg" },
    { id: 9, nama: "Gunung Tangkuban Parahu", kesulitan: "Pemula", mdpl: 2084, lokasi: "Subang & Bandung Barat", foto: "./jpg/g.tangkuban_parahu.jpeg" },
    { id: 10, nama: "Gunung Burangrang", kesulitan: "Menengah", mdpl: 2050, lokasi: "Bandung Barat & Purwakarta", foto: "./jpg/g.burangrang.jpeg" },
    { id: 11, nama: "Gunung Tampomas", kesulitan: "Pemula", mdpl: 1684, lokasi: "Sumedang", foto: "./jpg/g.tampomas.jpeg" },
    { id: 12, nama: "Gunung Rakutak", kesulitan: "Menengah", mdpl: 1921, lokasi: "Kabupaten Bandung", foto: "./jpg/g.rakutak.jpeg" },
    { id: 13, nama: "Gunung Wayang", kesulitan: "Pemula", mdpl: 2182, lokasi: "Pangalengan, Bandung", foto: "./jpg/g.wayang.jpeg" },
    { id: 14, nama: "Gunung Malabar", kesulitan: "Menengah", mdpl: 2343, lokasi: "Kabupaten Bandung", foto: "./jpg/Gunung_malabar.jpeg" },
    { id: 15, nama: "Gunung Patuha", kesulitan: "Pemula", mdpl: 2434, lokasi: "Ciwidey, Bandung", foto: "./jpg/Gunung_patuha.jpeg" },
    { id: 16, nama: "Gunung Kencana", kesulitan: "Pemula", mdpl: 1803, lokasi: "Bogor", foto: "./jpg/g.kencana.jpeg" },
    // { id： 17, nama: "Gunung Munara", kesulitan: "Pemula", mdpl: 360, lokasi: "Rumpin, Bogor", foto: "./jpg/g.munara.jpeg" },
    // { id: 18, nama: "Gunung Batu Lembang", kesulitan: "Pemula", mdpl： 1228, lokasi: "Lembang, Bandung Barat", foto: "./jpg/g.batu_lembang.jpeg" },
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

// Koordinat gunung yang sudah dapat diverifikasi dari sumber publik (id gunung -> koordinat).
// Hanya gunung di daftar ini yang dipasangi marker di peta. Gunung lain memakai tautan pencarian Google Maps.
// Untuk menambah marker: pastikan koordinatnya dari sumber tepercaya, lalu tambahkan satu baris di sini.
// Catatan: koordinat dari Wikipedia/BIRA-IASB berpresisi sekitar 1 menit busur (kurang lebih 2 km), yaitu titik pusat/puncak gunung.
const koordinatGunung = {
    1: { lat: -6.89, lng: 108.40, sumber: "BIRA-IASB" },         // Ciremai
    2: { lat: -6.78, lng: 106.98, sumber: "Wikipedia" },         // Gede
    3: { lat: -6.7701, lng: 106.9650, sumber: "Gunung Bagging" }, // Pangrango
    4: { lat: -7.3167, lng: 107.7333, sumber: "Wikipedia" },     // Papandayan (7°19'S 107°44'E)
    5: { lat: -7.3226, lng: 107.8599, sumber: "Gunung Bagging" }, // Cikuray
    6: { lat: -7.14, lng: 107.84, sumber: "BIRA-IASB" },         // Guntur
    7: { lat: -6.72, lng: 106.73, sumber: "Wikipedia" },         // Salak
    9: { lat: -6.7532, lng: 107.6059, sumber: "Gunung Bagging" }, // Tangkuban Parahu
    15: { lat: -7.1624, lng: 107.3992, sumber: "Gunung Bagging" }, // Patuha
    22: { lat: -7.25, lng: 108.05, sumber: "Wikipedia" }          // Galunggung (7°15'S 108°03'E)
};

const KETERANGAN_KESULITAN = {
    Pemula: "Kategori Pemula: jalur relatif ringan dan cocok untuk pendaki yang baru memulai.",
    Menengah: "Kategori Menengah: butuh stamina dan pengalaman mendaki dasar.",
    Mahir: "Kategori Mahir: jalur panjang dan menanjak, disarankan untuk pendaki berpengalaman."
};

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
    const navbar = document.getElementById("navbar");
    const hero = document.getElementById("beranda");
    const jumlahBookmark = document.getElementById("jumlahBookmark");

    const KUNCI_BOOKMARK = "puncak_jabar_bookmarks";

    let filteredData = [...dataGunung];
    let bookmarkedIds = bacaBookmark();
    let petaLeaflet = null;
    const markerPeta = {};
    let gunungModalId = null;
    let fokusSebelumModal = null;

    // ---------- Util ----------
    function bacaBookmark() {
        try {
            const data = JSON.parse(localStorage.getItem(KUNCI_BOOKMARK));
            return Array.isArray(data) ? data : [];
        } catch (e) {
            return [];
        }
    }

    function simpanBookmark() {
        try {
            localStorage.setItem(KUNCI_BOOKMARK, JSON.stringify(bookmarkedIds));
        } catch (e) {
            // penyimpanan diblokir (mis. mode privat): bookmark tetap jalan selama halaman terbuka
        }
    }

    function formatMdpl(angka) {
        return angka.toLocaleString("id-ID");
    }

    function kelasKesulitan(kesulitan) {
        return String(kesulitan).trim();
    }

    function cariGunung(id) {
        return dataGunung.find(g => g.id === id);
    }

    function kategoriAktif() {
        const btnAktif = document.querySelector("#filter .pil.aktif");
        return btnAktif ? btnAktif.textContent.trim() : "Semua";
    }

    function linkGoogleMaps(gunung) {
        const k = koordinatGunung[gunung.id];
        const kueri = k ? `${k.lat},${k.lng}` : `${gunung.nama}, ${gunung.lokasi}, Jawa Barat`;
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(kueri)}`;
    }

    // Render Kartu Gunung
    function renderCards(data) {
        strip.innerHTML = "";

        if (data.length === 0) {
            const pesan = kategoriAktif() === "Bookmark" && !inputCari.value.trim()
                ? "Belum ada bookmark. Tekan ikon bookmark di foto gunung untuk menyimpannya."
                : "Tidak ada gunung yang cocok. Ubah kata kunci atau pilih filter lain.";
            strip.innerHTML = `<p class="strip-kosong">${pesan}</p>`;
            updateCounter(0, 0);
            if (bar) bar.style.width = "0%";
            return;
        }

        data.forEach(item => {
            const isBookmarked = bookmarkedIds.includes(item.id);
            const kartu = document.createElement("article");
            kartu.className = "kartu";
            kartu.dataset.id = item.id;
            kartu.tabIndex = 0;

            kartu.innerHTML = `
                <h3 title="${item.nama}">${item.nama}</h3>
                <div class="foto" style="background-image: url('${item.foto}');">
                    <span class="placeholder-gambar" style="display:none;">${item.nama}</span>
                    <button class="bookmark ${isBookmarked ? 'aktif' : ''}" type="button" data-id="${item.id}"
                        aria-pressed="${isBookmarked}" aria-label="${isBookmarked ? 'Hapus' : 'Simpan'} ${item.nama} ${isBookmarked ? 'dari' : 'ke'} bookmark">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true">
                            <path d="M1.8 1.8h10.4v12.4L7 10.8l-5.2 3.4z" />
                        </svg>
                    </button>
                    <span class="tag ${kelasKesulitan(item.kesulitan)}">${kelasKesulitan(item.kesulitan)}</span>
                </div>
                <div class="kartu-meta">
                    <span>Ketinggian</span>
                    <strong>${formatMdpl(item.mdpl)} mdpl</strong>
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

            // Akses keyboard: Enter / Spasi pada kartu membuka modal
            kartu.addEventListener("keydown", (e) => {
                if (e.target === kartu && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    bukaModal(item);
                }
            });

            strip.appendChild(kartu);
        });

        // Event listener untuk tombol bookmark
        strip.querySelectorAll(".bookmark").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const id = parseInt(btn.dataset.id);
                toggleBookmark(id);
            });
        });

        updateProgress();
    }

    // Filter Tingkat Kesulitan
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => {
                b.classList.remove("aktif");
                b.setAttribute("aria-pressed", "false");
            });
            btn.classList.add("aktif");
            btn.setAttribute("aria-pressed", "true");

            const kategori = btn.textContent.trim();
            const kataKunci = inputCari.value.toLowerCase().trim();

            terapkanFilterDanCari(kategori, kataKunci);
        });
    });

    // Pencarian
    function jalankanPencarian(tetapDiPosisi) {
        const kataKunci = inputCari.value.toLowerCase().trim();
        terapkanFilterDanCari(kategoriAktif(), kataKunci, tetapDiPosisi === true);
    }

    inputCari.addEventListener("input", () => jalankanPencarian());
    btnCari.addEventListener("click", () => {
        jalankanPencarian();
        inputCari.focus();
    });

    function terapkanFilterDanCari(kategori, kataKunci, tetapDiPosisi = false) {
        filteredData = dataGunung.filter(g => {
            let cocokKategori;
            if (kategori === "Semua") {
                cocokKategori = true;
            } else if (kategori === "Bookmark") {
                cocokKategori = bookmarkedIds.includes(g.id);
            } else {
                cocokKategori = kelasKesulitan(g.kesulitan) === kategori;
            }
            const cocokKataKunci = g.nama.toLowerCase().includes(kataKunci) || g.lokasi.toLowerCase().includes(kataKunci);
            return cocokKategori && cocokKataKunci;
        });

        const posisi = tetapDiPosisi ? strip.scrollLeft : 0;
        renderCards(filteredData);
        strip.scrollLeft = posisi;
        updateProgress();
    }

    // Toggle Bookmark (disinkronkan ke kartu, modal, jumlah di navbar, dan marker peta)
    function toggleBookmark(id) {
        const index = bookmarkedIds.indexOf(id);

        if (index > -1) {
            bookmarkedIds.splice(index, 1);
        } else {
            bookmarkedIds.push(id);
        }

        simpanBookmark();
        perbaruiBookmarkUI();

        // Di tampilan Bookmark, kartu yang dihapus harus hilang dari daftar
        if (kategoriAktif() === "Bookmark") {
            jalankanPencarian(true);
        }
    }

    function perbaruiBookmarkUI() {
        document.querySelectorAll(".bookmark[data-id]").forEach(btn => {
            const id = parseInt(btn.dataset.id);
            const aktif = bookmarkedIds.includes(id);
            const g = cariGunung(id);
            btn.classList.toggle("aktif", aktif);
            btn.setAttribute("aria-pressed", String(aktif));
            if (g) btn.setAttribute("aria-label", `${aktif ? "Hapus" : "Simpan"} ${g.nama} ${aktif ? "dari" : "ke"} bookmark`);
        });

        if (jumlahBookmark) jumlahBookmark.textContent = bookmarkedIds.length;

        const tombolModal = document.getElementById("modalBookmark");
        if (tombolModal && gunungModalId !== null) {
            tombolModal.textContent = bookmarkedIds.includes(gunungModalId) ? "Hapus dari bookmark" : "Simpan ke bookmark";
        }

        perbaruiIkonPeta();
    }

    // Scroll Horizontal & Panah Navigasi
    function lebarGeser() {
        const kartu = strip.querySelector(".kartu");
        if (!kartu) return 320;
        const jarak = parseFloat(getComputedStyle(strip).columnGap) || 0;
        return kartu.getBoundingClientRect().width + jarak;
    }

    if (panahKiri && panahKanan) {
        panahKiri.addEventListener("click", () => {
            strip.scrollBy({ left: -lebarGeser(), behavior: "smooth" });
        });

        panahKanan.addEventListener("click", () => {
            strip.scrollBy({ left: lebarGeser(), behavior: "smooth" });
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

        const k = koordinatGunung[gunung.id];
        const kelas = kelasKesulitan(gunung.kesulitan);
        const ditandai = bookmarkedIds.includes(gunung.id);
        gunungModalId = gunung.id;
        fokusSebelumModal = document.activeElement;

        const aksiLokasi = k
            ? `<button class="kembali" id="modalPeta" type="button">Lihat di peta</button>`
            : `<a class="kembali" href="${linkGoogleMaps(gunung)}" target="_blank" rel="noopener">Cari di Google Maps</a>`;

        const catatanLokasi = k
            ? `Koordinat ${k.lat}, ${k.lng} (sumber: ${k.sumber}). <a href="${linkGoogleMaps(gunung)}" target="_blank" rel="noopener">Buka di Google Maps</a>`
            : `Koordinat gunung ini belum terverifikasi, jadi belum tampil di peta. Gunakan pencarian Google Maps untuk melihat lokasinya.`;

        modal.innerHTML = `
            <button class="tutup" id="tutupModal" type="button" aria-label="Tutup detail">&times;</button>
            <img class="modal-foto" src="${gunung.foto}" alt="${gunung.nama}">
            <div class="isi">
                <h2 id="judulModal">${gunung.nama}</h2>
                <div class="baris"><b>Ketinggian</b><span>${formatMdpl(gunung.mdpl)} mdpl</span></div>
                <div class="baris"><b>Lokasi</b><span>${gunung.lokasi}</span></div>
                <div class="baris"><b>Tingkat Kesulitan</b><span>${kelas}</span></div>
                <p>${KETERANGAN_KESULITAN[kelas] || ""}</p>
                <div class="modal-aksi">
                    ${aksiLokasi}
                    <button class="modal-sekunder" id="modalBookmark" type="button">${ditandai ? "Hapus dari bookmark" : "Simpan ke bookmark"}</button>
                </div>
                <p class="modal-catatan">${catatanLokasi}</p>
            </div>
        `;

        overlay.classList.add("buka");
        overlay.style.display = "flex";
        overlay.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-terbuka");

        document.getElementById("tutupModal").addEventListener("click", tutupModal);
        document.getElementById("modalBookmark").addEventListener("click", () => toggleBookmark(gunung.id));
        const tombolPeta = document.getElementById("modalPeta");
        if (tombolPeta) tombolPeta.addEventListener("click", () => lihatDiPeta(gunung.id));
        document.getElementById("tutupModal").focus();
    }

    function tutupModal() {
        if (!overlay) return;
        overlay.classList.remove("buka");
        overlay.style.display = "none";
        overlay.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-terbuka");
        gunungModalId = null;
        if (fokusSebelumModal && typeof fokusSebelumModal.focus === "function") fokusSebelumModal.focus();
    }

    if (overlay) {
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) tutupModal();
        });

        // Tab tetap berputar di dalam modal
        overlay.addEventListener("keydown", (e) => {
            if (e.key !== "Tab") return;
            const fokusable = modal.querySelectorAll("a[href], button:not([disabled])");
            if (!fokusable.length) return;
            const pertama = fokusable[0];
            const terakhir = fokusable[fokusable.length - 1];
            if (e.shiftKey && document.activeElement === pertama) {
                e.preventDefault();
                terakhir.focus();
            } else if (!e.shiftKey && document.activeElement === terakhir) {
                e.preventDefault();
                pertama.focus();
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && overlay && overlay.classList.contains("buka")) tutupModal();
    });

    // ---------- Beranda: jumlah gunung ----------
    const jumlahGunung = document.getElementById("jumlahGunung");
    if (jumlahGunung) jumlahGunung.textContent = dataGunung.length;

    // ---------- Navbar: muncul setelah hero terlewati + penanda bagian aktif ----------
    function inisialisasiNavbar() {
        if (!navbar || !hero) return;

        if (!("IntersectionObserver" in window)) {
            navbar.classList.add("tampil");
            return;
        }

        new IntersectionObserver(([entri]) => {
            navbar.classList.toggle("tampil", !entri.isIntersecting);
        }, { threshold: 0 }).observe(hero);

        const tautan = navbar.querySelectorAll(".menu a[data-bagian]");
        const bagian = ["beranda", "destinasi", "peta"]
            .map(id => document.getElementById(id))
            .filter(Boolean);

        const pengamat = new IntersectionObserver((daftar) => {
            daftar.forEach(entri => {
                if (!entri.isIntersecting) return;
                tautan.forEach(a => {
                    const aktif = a.dataset.bagian === entri.target.id;
                    a.classList.toggle("aktif", aktif);
                    if (aktif) a.setAttribute("aria-current", "location");
                    else a.removeAttribute("aria-current");
                });
            });
        }, { rootMargin: "-45% 0px -50% 0px" });

        bagian.forEach(b => pengamat.observe(b));
    }

    // Menu Bookmark: buka Destinasi dengan filter Bookmark
    const menuBookmark = document.getElementById("menuBookmark");
    if (menuBookmark) {
        menuBookmark.addEventListener("click", () => {
            const pil = [...filterButtons].find(b => b.textContent.trim() === "Bookmark");
            inputCari.value = "";
            if (pil) pil.click();
        });
    }

    // ---------- Tiga puncak tertinggi (dari data gunung) ----------
    function renderSorotan() {
        const wadah = document.getElementById("sorotan");
        if (!wadah) return;

        const tertinggi = [...dataGunung].sort((a, b) => b.mdpl - a.mdpl).slice(0, 3);
        const posisi = ["a", "b", "c"];
        wadah.innerHTML = "";

        tertinggi.forEach((g, i) => {
            const item = document.createElement("button");
            item.type = "button";
            item.className = `sorotan-item sorotan-${posisi[i]}`;
            item.innerHTML = `
                <span class="sorotan-foto" style="background-image: url('${g.foto}');"></span>
                <span class="sorotan-nama">${g.nama}</span>
                <span class="sorotan-meta">${formatMdpl(g.mdpl)} mdpl</span>
                <span class="sorotan-lokasi">${g.lokasi}</span>
            `;
            item.addEventListener("click", () => bukaModal(g));
            wadah.appendChild(item);
        });
    }

    // ---------- Peta Lokasi (Leaflet + OpenStreetMap) ----------
    function buatIkonPeta(gunung) {
        const ditandai = bookmarkedIds.includes(gunung.id);
        return L.divIcon({
            className: "pin-wadah",
            html: `<span class="pin ${kelasKesulitan(gunung.kesulitan)}${ditandai ? " ditandai" : ""}"></span>`,
            iconSize: [24, 24],
            iconAnchor: [12, 12],
            popupAnchor: [0, -12]
        });
    }

    function buatIsiPopup(gunung) {
        const isi = document.createElement("div");
        isi.className = "popup-gunung";
        isi.innerHTML = `
            <strong class="popup-nama">${gunung.nama}</strong>
            <span class="popup-meta">${formatMdpl(gunung.mdpl)} mdpl, ${kelasKesulitan(gunung.kesulitan)}</span>
            <span class="popup-lokasi">${gunung.lokasi}</span>
        `;
        const tombol = document.createElement("button");
        tombol.type = "button";
        tombol.className = "popup-tombol";
        tombol.textContent = "Lihat detail";
        tombol.addEventListener("click", () => bukaModal(gunung));
        isi.appendChild(tombol);
        return isi;
    }

    function inisialisasiPeta() {
        const wadahPeta = document.getElementById("petaGunung");
        if (!wadahPeta) return;

        if (typeof L === "undefined") {
            wadahPeta.classList.add("peta-gagal");
            wadahPeta.textContent = "Peta tidak dapat dimuat. Periksa koneksi internet, lalu muat ulang halaman.";
            return;
        }

        petaLeaflet = L.map(wadahPeta, { scrollWheelZoom: false }).setView([-6.95, 107.6], 8);

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 18,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(petaLeaflet);

        const titik = [];
        dataGunung.forEach(g => {
            const k = koordinatGunung[g.id];
            if (!k) return; // tanpa koordinat terverifikasi: tidak ada marker
            const marker = L.marker([k.lat, k.lng], { icon: buatIkonPeta(g), title: g.nama, keyboard: true }).addTo(petaLeaflet);
            marker.bindPopup(buatIsiPopup(g));
            markerPeta[g.id] = marker;
            titik.push([k.lat, k.lng]);
        });

        if (titik.length) petaLeaflet.fitBounds(titik, { padding: [40, 40] });

        // Zoom dengan scroll hanya aktif setelah peta diklik, supaya scroll halaman tidak tersangkut
        petaLeaflet.on("click", () => petaLeaflet.scrollWheelZoom.enable());
        petaLeaflet.on("mouseout", () => petaLeaflet.scrollWheelZoom.disable());

        setTimeout(() => petaLeaflet.invalidateSize(), 300);
    }

    function perbaruiIkonPeta() {
        if (!petaLeaflet) return;
        Object.keys(markerPeta).forEach(id => {
            const g = cariGunung(parseInt(id));
            if (g) markerPeta[id].setIcon(buatIkonPeta(g));
        });
    }

    function isiDaftarTanpaKoordinat() {
        const daftar = document.getElementById("daftarTanpaKoordinat");
        const jumlah = document.getElementById("jumlahTanpaKoordinat");
        const catatan = document.getElementById("petaCatatan");
        const tanpa = dataGunung.filter(g => !koordinatGunung[g.id]);
        const dengan = dataGunung.length - tanpa.length;

        if (daftar) {
            daftar.innerHTML = tanpa
                .map(g => `<li><a href="${linkGoogleMaps(g)}" target="_blank" rel="noopener">${g.nama}</a></li>`)
                .join("");
        }
        if (jumlah) jumlah.textContent = tanpa.length;
        if (catatan) {
            catatan.textContent = `${dengan} dari ${dataGunung.length} gunung sudah punya koordinat terverifikasi dan tampil di peta. Sisanya bisa dicari lewat Google Maps.`;
        }
    }

    // Dari modal: gulir ke peta, lalu arahkan ke penanda gunung dan buka ringkasannya
    function lihatDiPeta(id) {
        const k = koordinatGunung[id];
        const marker = markerPeta[id];
        tutupModal();

        const bagianPeta = document.getElementById("peta");
        if (bagianPeta) bagianPeta.scrollIntoView({ behavior: "smooth", block: "start" });

        if (petaLeaflet && k && marker) {
            setTimeout(() => {
                petaLeaflet.invalidateSize();
                petaLeaflet.once("moveend", () => marker.openPopup());
                petaLeaflet.flyTo([k.lat, k.lng], 11, { duration: 1.2 });
                // cadangan: bila peta sudah berada di titik tersebut, moveend tidak terpicu
                setTimeout(() => { if (!marker.isPopupOpen()) marker.openPopup(); }, 1800);
            }, 500);
        }
    }

    // Inisialisasi awal
    renderCards(filteredData);
    renderSorotan();
    inisialisasiPeta();
    isiDaftarTanpaKoordinat();
    inisialisasiNavbar();
    perbaruiBookmarkUI();
});
