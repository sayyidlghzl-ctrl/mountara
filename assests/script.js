let dataGunung = [];
let koordinatGunung = {};

const KETERANGAN_KESULITAN = {
    Pemula: "Kategori Pemula: jalurnya relatif ringan dan cocok untuk pendaki yang baru memulai. Tetap bawa perlengkapan dasar dan cek cuaca sebelum berangkat.",
    Menengah: "Kategori Menengah: butuh stamina yang terlatih dan pengalaman mendaki dasar. Cocok dicoba setelah beberapa kali mendaki gunung yang lebih ringan.",
    Mahir: "Kategori Mahir: jalurnya panjang dan menanjak, jadi disarankan untuk pendaki berpengalaman dengan persiapan yang matang."
};

// =====================================================================
// Deskripsi gunung. Setiap isi disusun dari sumber yang dicantumkan pada
// entrinya (sumber: [{ judul, url }]). Hanya fakta yang tertulis di sumber
// tersebut yang dimasukkan. Gunung yang belum punya entri di sini belum
// diverifikasi sumbernya, sehingga detailnya hanya menampilkan data dasar.
// Untuk menambah: salin satu entri, isi dengan fakta dari sumber yang bisa
// dibuka, dan cantumkan tautan langsung ke halaman yang membahasnya.
// =====================================================================
const SUMBER = {
    wikiCiremai: { judul: "Wikipedia: Mount Ciremai", url: "https://en.wikipedia.org/wiki/Mount_Ciremai" },
    wikiTNCiremai: { judul: "Wikipedia: Mount Ciremai National Park", url: "https://en.wikipedia.org/wiki/Mount_Ciremai_National_Park" },
    bagCiremai: { judul: "Gunung Bagging: Gunung Ciremai", url: "https://www.gunungbagging.com/ciremai/" },
    wikiTNGede: { judul: "Wikipedia: Mount Gede Pangrango National Park", url: "https://en.wikipedia.org/wiki/Mount_Gede_Pangrango_National_Park" },
    wikiGede: { judul: "Wikipedia: Mount Gede", url: "https://wikiwand.com/en/articles/Gunung_gede" },
    wikiPapandayan: { judul: "Wikipedia: Mount Papandayan", url: "https://en.wikipedia.org/wiki/Mount_Papandayan" },
    wikiTangkuban: { judul: "Wikipedia: Tangkuban Perahu", url: "https://en.wikipedia.org/wiki/Tangkuban_Perahu" },
    wikiGalunggung: { judul: "Wikipedia: Galunggung", url: "https://en.wikipedia.org/wiki/Galunggung" },
    gvpGalunggung: { judul: "Smithsonian Global Volcanism Program: Galunggung", url: "https://volcano.si.edu/volcano.cfm?vn=263140" }
};

const deskripsiGunung = {
    1: {
        pembuka: "Dari jalur kereta di pesisir utara Jawa, kerucut Ciremai terlihat jelas menjulang di selatan. Wajar saja: inilah titik tertinggi di Jawa Barat.",
        bagian: [
            {
                judul: "Gunung api berbentuk kerucut",
                isi: [
                    "Ciremai adalah stratovolcano yang simetris, terletak di barat daya Cirebon dan masuk wilayah Kuningan serta Majalengka. Di puncaknya ada kawah selebar sekitar setengah kilometer. Letusan di masa sejarah relatif jarang; aktivitas eksplosif dan lahar dari kawah puncak pernah tercatat, dan letusan terakhirnya terjadi pada Maret 1951.",
                    "Nama Ciremai atau Cereme berasal dari kata Sunda untuk buah ceremai."
                ]
            },
            {
                judul: "Cerita di kaki gunung",
                isi: [
                    "Lereng Ciremai menyimpan lebih dari sekadar jalur pendakian. Di Linggajati ada museum yang mengisahkan Perundingan Linggajati pada masa perjuangan kemerdekaan tahun 1946. Di tenggara, dekat Kuningan, terdapat situs megalitik Cipari, situs arkeologi penting dari masa prasejarah. Sementara di Cilimus ada pemandian air panas alami Sangkanhurip."
                ]
            },
            {
                judul: "Soal pendakian",
                isi: [
                    "Pendaki biasanya memulai dari Linggajati di timur, Palutungan di selatan dekat Cigugur, atau dari arah Majalengka di barat. Perjalanan pergi-pulang sering memakan 12 jam atau lebih, dan sebagian kelompok bermalam di gunung. Seperti di banyak gunung lain di Indonesia, pendaki diharapkan mendaftar dulu kepada petugas setempat. Pendaki yang kurang berpengalaman kadang menemui kesulitan, jadi persiapan penting."
                ]
            },
            {
                judul: "Taman nasional",
                isi: [
                    "Kawasan di sekeliling gunung ditetapkan sebagai Taman Nasional Gunung Ciremai, sekitar 50 km di selatan Cirebon. Di sana tercatat satwa seperti macan tutul, muncak, surili jawa, dan elang jawa, serta berbagai jenis ular piton."
                ]
            }
        ],
        fakta: "Di kolam alami Cigugur dan Cibulan hidup ikan kancra bodas, yang oleh warga setempat dianggap ikan keramat.",
        sumber: [SUMBER.wikiCiremai, SUMBER.wikiTNCiremai, SUMBER.bagCiremai]
    },

    2: {
        pembuka: "Namanya sudah menjelaskan banyak hal: dalam bahasa Sunda, gede berarti besar.",
        bagian: [
            {
                judul: "Si kembar dari Jawa Barat",
                isi: [
                    "Gede adalah stratovolcano yang berpasangan dengan Pangrango sebagai gunung kembar. Keduanya dihubungkan pelana tinggi bernama Kandang Badak. Letusan terakhir Gede tercatat pada Maret 1957, dan pendakian pertamanya yang tercatat dilakukan oleh Raffles pada 1815. Jalur yang disebut paling mudah adalah lewat Gunung Putri."
                ]
            },
            {
                judul: "Satu taman nasional untuk dua gunung",
                isi: [
                    "Gede dan Pangrango berada dalam satu taman nasional seluas sekitar 150 km persegi. Kawasan ini tumbuh dari area konservasi yang sudah ada sebelumnya, termasuk Kebun Raya Cibodas, dan sejak 1977 diakui UNESCO sebagai bagian dari jaringan cagar biosfer dunia.",
                    "Hutan pegunungan bawah dan atas hingga zona subalpin di taman ini sudah banyak diteliti. Di sisi utara Gede terhampar padang edelweis jawa (Anaphalis javanica), dan di hutannya hidup antara lain elang jawa dan celepuk jawa. Taman nasional ini juga menjadi hulu bagi empat daerah aliran sungai di sekitarnya."
                ]
            }
        ],
        fakta: "Pendakian Gede yang paling awal tercatat dilakukan pada 1815 oleh Raffles.",
        catatan: "Angka ketinggian berbeda antar sumber: 2.958 m menurut keterangan taman nasional (dipakai di situs ini), sedangkan Global Volcanism Program mencatat 3.026 m.",
        sumber: [SUMBER.wikiGede, SUMBER.wikiTNGede]
    },

    3: {
        pembuka: "Pangrango sedikit lebih tinggi daripada Gede, saudara kembarnya: 3.019 mdpl berbanding 2.958 mdpl.",
        bagian: [
            {
                judul: "Dua puncak, satu pelana",
                isi: [
                    "Pangrango dan Gede adalah gunung api kembar yang dihubungkan pelana tinggi bernama Kandang Badak. Keduanya menjadi inti Taman Nasional Gunung Gede Pangrango di Jawa Barat, dengan Bogor sebagai kota terdekat.",
                    "Hutan pegunungan bawah dan atas hingga zona subalpin di taman nasional ini sudah banyak diteliti. Kawasan ini juga menjadi hulu bagi empat daerah aliran sungai dan, sejak 1977, diakui UNESCO sebagai bagian dari jaringan cagar biosfer dunia."
                ]
            }
        ],
        fakta: "Dua gunung ini bisa dibilang kembar, tetapi Pangrango yang menang tipis dalam urusan tinggi badan.",
        sumber: [SUMBER.wikiTNGede]
    },

    4: {
        pembuka: "Di Papandayan, kawah yang berasap dan berwarna kuning bisa dilihat dari jarak dekat, lengkap dengan kolam lumpur yang menggelegak.",
        bagian: [
            {
                judul: "Kawah-kawah yang masih bernapas",
                isi: [
                    "Papandayan adalah stratovolcano kompleks di Kabupaten Garut, sekitar 15 km di barat daya kota Garut. Di puncaknya ada empat kawah besar yang berisi lapangan fumarol aktif. Pengunjung bisa berjalan melintasi kawah dan melihat kolam lumpur mendidih, semburan uap, serta endapan belerang."
                ]
            },
            {
                judul: "Letusan 1772",
                isi: [
                    "Letusan pada 1772 meruntuhkan lereng timur laut gunung dan memicu longsoran besar yang menghancurkan 40 desa serta menewaskan hampir 3.000 orang. Sesudahnya, hanya letusan freatik kecil yang tercatat sampai letusan eksplosif pada November 2002."
                ]
            },
            {
                judul: "Hutan kerdil dan edelweis",
                isi: [
                    "Di atas kawah terdapat hutan kerdil dan beberapa padang edelweis jawa."
                ]
            }
        ],
        fakta: "Dari kejauhan Papandayan tampak seperti gunung kembar. Letusan memangkas bentuknya menjadi dua puncak, yaitu Papandayan dan Puntang, dengan dataran selebar 1,1 km yang berisi kawah Alun-Alun di tengahnya.",
        sumber: [SUMBER.wikiPapandayan]
    },

    9: {
        pembuka: "Dilihat dari samping, puncaknya menyerupai perahu yang terbalik, dan memang begitulah arti namanya dalam bahasa Sunda.",
        bagian: [
            {
                judul: "Legenda Sangkuriang",
                isi: [
                    "Menurut cerita rakyat, Sangkuriang jatuh cinta pada Dayang Sumbi tanpa menyadari bahwa ia adalah ibunya. Untuk menggagalkan pernikahan itu, Dayang Sumbi meminta Sangkuriang membendung Sungai Citarum dan membuat perahu besar sebelum matahari terbit. Ketika pekerjaan hampir rampung, Dayang Sumbi menghamparkan kain sutra merah di timur kota agar tampak seperti fajar. Sangkuriang mengira ia gagal, lalu menendang bendungan dan perahu yang belum selesai. Perahu itu jatuh telungkup dan menjadi Tangkuban Parahu."
                ]
            },
            {
                judul: "Sisa gunung purba",
                isi: [
                    "Bersama Gunung Burangrang dan Bukit Tunggul, Tangkuban Parahu adalah sisa Gunung Sunda purba, yang kalderanya runtuh setelah letusan plinian. Gunung ini terletak di Lembang, Kabupaten Bandung Barat."
                ]
            },
            {
                judul: "Gunung yang masih aktif",
                isi: [
                    "Sebuah studi pada 2001 menyimpulkan bahwa Tangkuban Parahu telah meletus sedikitnya 30 kali dalam 40.750 tahun terakhir. Letusan terakhir tercatat pada 26 Juli 2019. Kawah terbesarnya adalah Kawah Ratu. Wisatawan bisa mendekati bibir kawah untuk melihat mata air panas dan lumpur mendidih, bahkan membeli telur yang direbus memakai panas dari permukaan tanah.",
                    "Di lereng utaranya ada area bernama Lembah Maut, yang dinamai demikian karena sering menjadi tempat berkumpulnya gas beracun. Karena gunung ini aktif, kunjungan bisa ditutup sewaktu-waktu mengikuti kondisi aktivitasnya."
                ]
            }
        ],
        fakta: "Pendakian pertama Tangkuban Parahu yang tercatat dilakukan pada 1713 oleh Abraham van Riebeeck.",
        sumber: [SUMBER.wikiTangkuban]
    },

    10: {
        pembuka: "Burangrang adalah salah satu keping yang tersisa dari gunung purba bernama Gunung Sunda.",
        bagian: [
            {
                judul: "Bagian dari Gunung Sunda purba",
                isi: [
                    "Bersama Tangkuban Parahu dan Bukit Tunggul, Burangrang merupakan sisa Gunung Sunda purba setelah letusan plinian meruntuhkan kalderanya."
                ]
            }
        ],
        sumber: [SUMBER.wikiTangkuban]
    },

    22: {
        pembuka: "Pada 1982, awan abu dari Galunggung hampir menjatuhkan sebuah pesawat jumbo jet, dan sejak itu dunia penerbangan memandang abu vulkanik dengan lebih waspada.",
        bagian: [
            {
                judul: "Letusan 1982-1983",
                isi: [
                    "Letusan dimulai pada 5 April 1982, menghancurkan sebagian besar kubah lava yang terbentuk pada 1918, dan berlangsung hingga awal 1983. Tinggi kolom abu terbesar yang dilaporkan mencapai 16,5 km, dan sekitar 62.000 orang harus diungsikan dari kawasan padat penduduk di sekitar gunung.",
                    "Pada 24 Juni 1982, sebuah jumbo jet British Airways dengan 240 orang di dalamnya terbang menembus awan abu pada ketinggian sekitar 11 km. Keempat mesinnya mati dan pesawat turun sejauh 7,5 km sebelum mesin berhasil dihidupkan kembali, lalu mendarat dengan selamat di Jakarta. Pada Juli, sebuah jumbo jet Singapore Airlines mengalami hal serupa dan juga mendarat selamat di Jakarta. Setelah itu lalu lintas udara dialihkan menjauhi Galunggung."
                ]
            },
            {
                judul: "Letusan yang lebih mematikan",
                isi: [
                    "Letusan pertama yang tercatat pada 1822 menghasilkan awan panas dan lahar yang menewaskan 4.011 orang. Letusan eksplosif yang berpusat di danau kawah tercatat empat kali: 1822, 1894, 1918, dan 1982-1983."
                ]
            },
            {
                judul: "Kawah dan sepuluh ribu bukit",
                isi: [
                    "Danau di kawah kerucutnya berdiameter sekitar 1 km dengan kedalaman biasa sekitar 11 m menurut laporan PVMBG tahun 2012. Di tengah danau ada kerucut skoria setinggi 30 m yang terbentuk pada tahap akhir letusan 1982-1983.",
                    "Di dataran bawah gunung tersebar bukit-bukit kecil yang dijuluki Sepuluh Ribu Bukit Tasikmalaya. Para ahli kini memahaminya sebagai endapan longsoran besar dari runtuhnya lereng gunung ini."
                ]
            }
        ],
        fakta: "Letusan 1982 membuat bahaya abu vulkanik bagi pesawat mendapat perhatian dunia, dan jalur penerbangan pun dialihkan menjauhi gunung ini.",
        sumber: [SUMBER.gvpGalunggung, SUMBER.wikiGalunggung]
    }
};

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const respons = await fetch("./api/gunung.php", {
            headers: { Accept: "application/json" }
        });
        if (!respons.ok) throw new Error(`HTTP ${respons.status}`);

        const hasil = await respons.json();
        if (!Array.isArray(hasil)) throw new Error("Format data API tidak sesuai.");

        dataGunung = hasil.map(g => ({
            ...g,
            id: Number(g.id),
            mdpl: Number(g.mdpl),
            latitude: g.latitude === null ? null : Number(g.latitude),
            longitude: g.longitude === null ? null : Number(g.longitude)
        }));
        koordinatGunung = Object.fromEntries(
            dataGunung
                .filter(g => Number.isFinite(g.latitude) && Number.isFinite(g.longitude))
                .map(g => [g.id, {
                    lat: g.latitude,
                    lng: g.longitude,
                    sumber: g.koordinat_sumber || "Database"
                }])
        );

        if (dataGunung.length === 0) throw new Error("Tabel gunung belum berisi data.");
    } catch (error) {
        console.error("Gagal memuat daftar gunung dari API.", error);
        const strip = document.getElementById("strip");
        if (strip) strip.textContent = "Data gunung belum bisa dimuat. Periksa konfigurasi database dan API.";
        return;
    }

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
    const jumlahFavorit = document.getElementById("jumlahFavorit");
    const toastEl = document.getElementById("toast");

    // Nama kunci lama dipertahankan agar daftar yang sudah tersimpan di browser pengguna tidak hilang.
    const KUNCI_FAVORIT = "puncak_jabar_bookmarks";
    const KURANGI_GERAK = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const TINGGI_MAKS = Math.max(...dataGunung.map(g => g.mdpl));

    // Ikon hati (dipakai di kartu dan modal); isinya diwarnai lewat CSS saat aktif
    const IKON_HATI = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>`;

    let filteredData = [...dataGunung];
    let favoritIds = bacaFavorit();
    let petaLeaflet = null;
    const markerPeta = {};
    let gunungModalId = null;
    let fokusSebelumModal = null;
    let barusGeser = false;
    let timerToast = null;

    // ---------- Util ----------
    function bacaFavorit() {
        try {
            const data = JSON.parse(localStorage.getItem(KUNCI_FAVORIT));
            return Array.isArray(data) ? data : [];
        } catch (e) {
            return [];
        }
    }

    function simpanFavorit() {
        try {
            localStorage.setItem(KUNCI_FAVORIT, JSON.stringify(favoritIds));
        } catch (e) {
            // penyimpanan diblokir (mis. mode privat): favorit tetap jalan selama halaman terbuka
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
        return btnAktif ? btnAktif.dataset.kategori : "Semua";
    }

    function linkGoogleMaps(gunung) {
        const k = koordinatGunung[gunung.id];
        const kueri = k ? `${k.lat},${k.lng}` : `${gunung.nama}, ${gunung.lokasi}, Jawa Barat`;
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(kueri)}`;
    }

    function labelFavorit(gunung, aktif) {
        return `${aktif ? "Hapus" : "Tambahkan"} ${gunung.nama} ${aktif ? "dari" : "ke"} favorit`;
    }

    function tampilkanToast(pesan) {
        if (!toastEl) return;
        toastEl.textContent = pesan;
        toastEl.classList.add("tampil");
        clearTimeout(timerToast);
        timerToast = setTimeout(() => toastEl.classList.remove("tampil"), 2200);
    }

    // Jumlah di tiap tombol filter (Semua / tingkat kesulitan / Favorit)
    function perbaruiJumlahFilter() {
        filterButtons.forEach(btn => {
            const k = btn.dataset.kategori;
            let n;
            if (k === "Semua") n = dataGunung.length;
            else if (k === "Favorit") n = favoritIds.length;
            else n = dataGunung.filter(g => kelasKesulitan(g.kesulitan) === k).length;
            const el = btn.querySelector(".jml");
            if (el) el.textContent = n;
        });
    }

    // Render Kartu Gunung
    function renderCards(data, animasi = false) {
        strip.classList.toggle("masuk", animasi && !KURANGI_GERAK);
        strip.innerHTML = "";

        if (data.length === 0) {
            const pesan = kategoriAktif() === "Favorit" && !inputCari.value.trim()
                ? "Belum ada favorit. Tekan ikon hati di foto gunung untuk menyimpannya."
                : "Tidak ada gunung yang cocok. Ubah kata kunci atau pilih filter lain.";
            strip.innerHTML = `<p class="strip-kosong">${pesan}</p>`;
            updateCounter(0, 0);
            if (bar) bar.style.width = "0%";
            if (panahKiri) panahKiri.disabled = true;
            if (panahKanan) panahKanan.disabled = true;
            return;
        }

        data.forEach((item, i) => {
            const aktif = favoritIds.includes(item.id);
            const kelas = kelasKesulitan(item.kesulitan);
            const kartu = document.createElement("article");
            kartu.className = "kartu";
            kartu.dataset.id = item.id;
            kartu.tabIndex = 0;
            kartu.style.setProperty("--i", Math.min(i, 8));

            kartu.innerHTML = `
                <h3 title="${item.nama}">${item.nama}</h3>
                <div class="foto">
                    <span class="foto-gambar" style="background-image: url('${item.foto}');"></span>
                    <span class="placeholder-gambar" style="display:none;">${item.nama}</span>
                    <button class="favorit ${aktif ? 'aktif' : ''}" type="button" data-id="${item.id}"
                        aria-pressed="${aktif}" aria-label="${labelFavorit(item, aktif)}">${IKON_HATI}</button>
                    <span class="tag ${kelas}">${kelas}</span>
                    <span class="lihat" aria-hidden="true">Lihat detail</span>
                </div>
                <div class="kartu-meta">
                    <span>Ketinggian</span>
                    <strong>${formatMdpl(item.mdpl)} mdpl</strong>
                    <span>Lokasi</span>
                    <strong>${item.lokasi}</strong>
                </div>
                <span class="tinggi" aria-hidden="true"><i style="width: ${(item.mdpl / TINGGI_MAKS * 100).toFixed(1)}%"></i></span>
            `;

            // Jika foto gagal dimuat, tampilkan nama gunung sebagai pengganti
            const uji = new Image();
            uji.onerror = () => {
                const ph = kartu.querySelector(".placeholder-gambar");
                if (ph) ph.style.display = "grid";
            };
            uji.src = item.foto;

            // Modal Click Event (kecuali tombol favorit)
            kartu.addEventListener("click", (e) => {
                if (!e.target.closest(".favorit")) {
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

        // Event listener untuk tombol favorit
        strip.querySelectorAll(".favorit").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const id = parseInt(btn.dataset.id, 10);
                toggleFavorit(id);
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

            const kategori = btn.dataset.kategori;
            const kataKunci = inputCari.value.toLowerCase().trim();

            terapkanFilterDanCari(kategori, kataKunci, false, true);
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

    function terapkanFilterDanCari(kategori, kataKunci, tetapDiPosisi = false, animasi = false) {
        filteredData = dataGunung.filter(g => {
            let cocokKategori;
            if (kategori === "Semua") {
                cocokKategori = true;
            } else if (kategori === "Favorit") {
                cocokKategori = favoritIds.includes(g.id);
            } else {
                cocokKategori = kelasKesulitan(g.kesulitan) === kategori;
            }
            const cocokKataKunci = g.nama.toLowerCase().includes(kataKunci) || g.lokasi.toLowerCase().includes(kataKunci);
            return cocokKategori && cocokKataKunci;
        });

        const posisi = tetapDiPosisi ? strip.scrollLeft : 0;
        renderCards(filteredData, animasi);
        strip.scrollLeft = posisi;
        updateProgress();
    }

    // Toggle Favorit (disinkronkan ke kartu, modal, jumlah di navbar, filter, dan marker peta)
    function toggleFavorit(id) {
        const gunung = cariGunung(id);
        const index = favoritIds.indexOf(id);
        const ditambah = index === -1;

        if (ditambah) {
            favoritIds.push(id);
        } else {
            favoritIds.splice(index, 1);
        }

        simpanFavorit();
        perbaruiFavoritUI(id);
        if (gunung) tampilkanToast(`${gunung.nama} ${ditambah ? "ditambahkan ke" : "dihapus dari"} Favorit`);

        // Di tampilan Favorit, kartu yang dihapus harus hilang dari daftar
        if (kategoriAktif() === "Favorit") {
            jalankanPencarian(true);
        }
    }

    function perbaruiFavoritUI(idBerubah) {
        document.querySelectorAll(".favorit[data-id]").forEach(btn => {
            const id = parseInt(btn.dataset.id, 10);
            const aktif = favoritIds.includes(id);
            const g = cariGunung(id);
            btn.classList.toggle("aktif", aktif);
            btn.setAttribute("aria-pressed", String(aktif));
            if (g) btn.setAttribute("aria-label", labelFavorit(g, aktif));
            if (id === idBerubah && !KURANGI_GERAK) {
                btn.classList.remove("pop");
                void btn.offsetWidth; // mulai ulang animasi
                btn.classList.add("pop");
            }
        });

        if (jumlahFavorit) {
            jumlahFavorit.textContent = favoritIds.length;
            if (idBerubah !== undefined && !KURANGI_GERAK) {
                jumlahFavorit.classList.remove("naik");
                void jumlahFavorit.offsetWidth;
                jumlahFavorit.classList.add("naik");
            }
        }

        perbaruiJumlahFilter();

        const tombolModal = document.getElementById("modalFavorit");
        if (tombolModal && gunungModalId !== null) {
            const aktif = favoritIds.includes(gunungModalId);
            tombolModal.classList.toggle("aktif", aktif);
            tombolModal.setAttribute("aria-pressed", String(aktif));
            const label = tombolModal.querySelector(".label-fav");
            if (label) label.textContent = aktif ? "Hapus dari favorit" : "Simpan ke favorit";
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

    // Geser carousel dengan menyeret (khusus mouse; layar sentuh sudah punya geser bawaan)
    let seret = null;

    strip.addEventListener("pointerdown", (e) => {
        if (e.pointerType !== "mouse" || e.button !== 0) return;
        seret = { x: e.clientX, kiri: strip.scrollLeft, bergeser: false };
    });

    window.addEventListener("pointermove", (e) => {
        if (!seret) return;
        const dx = e.clientX - seret.x;
        if (!seret.bergeser && Math.abs(dx) > 6) {
            seret.bergeser = true;
            strip.classList.add("digeser");
        }
        if (seret.bergeser) strip.scrollLeft = seret.kiri - dx;
    });

    function akhiriSeret() {
        if (!seret) return;
        if (seret.bergeser) {
            barusGeser = true; // cegah klik yang menyusul membuka modal
            setTimeout(() => { barusGeser = false; }, 0);
        }
        strip.classList.remove("digeser");
        seret = null;
    }

    window.addEventListener("pointerup", akhiriSeret);
    window.addEventListener("pointercancel", akhiriSeret);

    strip.addEventListener("click", (e) => {
        if (barusGeser) {
            e.stopPropagation();
            e.preventDefault();
        }
    }, true);

    // Update Progress Bar, Counter, dan status panah
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

        if (panahKiri) panahKiri.disabled = currentScroll <= 2;
        if (panahKanan) panahKanan.disabled = maxScroll <= 2 || currentScroll >= maxScroll - 2;

        updateCounter(indexTerlihat, filteredData.length);
    }

    function updateCounter(saatIni, total) {
        if (h1) h1.textContent = saatIni < 10 ? `0${saatIni}` : saatIni;
        if (h2) h2.textContent = total < 10 ? `0${total}` : total;
    }

    strip.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);

    // Deskripsi dan sumber referensi di modal detail
    function htmlDeskripsi(gunung) {
        const d = deskripsiGunung[gunung.id];
        if (!d) {
            return `<p class="deskripsi-menunggu">Cerita dan fakta gunung ini belum ditambahkan karena sumber terpercayanya masih dalam proses verifikasi.</p>`;
        }
        const bagian = d.bagian.map(b => `
            <h3>${b.judul}</h3>
            ${b.isi.map(p => `<p>${p}</p>`).join("")}`).join("");
        const fakta = d.fakta
            ? `<aside class="fakta"><h3>Tahukah kamu?</h3><p>${d.fakta}</p></aside>`
            : "";
        const catatan = d.catatan ? `<p class="deskripsi-catatan">${d.catatan}</p>` : "";
        return `<div class="deskripsi">
            <p class="deskripsi-pembuka">${d.pembuka}</p>
            ${bagian}
            ${fakta}
            ${catatan}
        </div>`;
    }

    function htmlSumber(gunung) {
        const d = deskripsiGunung[gunung.id];
        if (!d || !d.sumber || !d.sumber.length) return "";
        const daftar = d.sumber
            .map(s => `<li><a href="${s.url}" target="_blank" rel="noopener">${s.judul}</a></li>`)
            .join("");
        return `<section class="sumber" aria-label="Sumber referensi">
            <h3>Sumber Referensi</h3>
            <ol>${daftar}</ol>
        </section>`;
    }

    // Modal Detail Gunung
    function bukaModal(gunung) {
        if (!overlay || !modal) return;

        const k = koordinatGunung[gunung.id];
        const kelas = kelasKesulitan(gunung.kesulitan);
        const aktif = favoritIds.includes(gunung.id);
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
                <div class="baris"><b>Tingkat Kesulitan</b><span><i class="chip ${kelas}">${kelas}</i></span></div>
                <p>${KETERANGAN_KESULITAN[kelas] || ""}</p>
                ${htmlDeskripsi(gunung)}
                <div class="modal-aksi">
                    ${aksiLokasi}
                    <button class="modal-sekunder modal-fav ${aktif ? "aktif" : ""}" id="modalFavorit" type="button" aria-pressed="${aktif}">${IKON_HATI}<span class="label-fav">${aktif ? "Hapus dari favorit" : "Simpan ke favorit"}</span></button>
                </div>
                <p class="modal-catatan">${catatanLokasi}</p>
                ${htmlSumber(gunung)}
            </div>
        `;

        overlay.classList.add("buka");
        overlay.style.display = "flex";
        overlay.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-terbuka");

        document.getElementById("tutupModal").addEventListener("click", tutupModal);
        document.getElementById("modalFavorit").addEventListener("click", () => toggleFavorit(gunung.id));
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

    // ---------- Beranda: jumlah gunung + ringkasan angka ----------
    const jumlahGunung = document.getElementById("jumlahGunung");
    if (jumlahGunung) jumlahGunung.textContent = dataGunung.length;

    function animasiAngka(el, akhir, durasi = 1400) {
        if (!el) return;
        if (KURANGI_GERAK) {
            el.textContent = formatMdpl(akhir);
            return;
        }
        const mulai = performance.now() + 700; // beri waktu teks hero muncul lebih dulu
        function langkah(sekarang) {
            const t = Math.min(Math.max((sekarang - mulai) / durasi, 0), 1);
            const halus = 1 - Math.pow(1 - t, 3);
            el.textContent = formatMdpl(Math.round(akhir * halus));
            if (t < 1) requestAnimationFrame(langkah);
        }
        requestAnimationFrame(langkah);
    }

    function inisialisasiStatHero() {
        const tertinggi = dataGunung.reduce((a, b) => (b.mdpl > a.mdpl ? b : a));
        const nama = document.getElementById("statNama");
        if (nama) nama.textContent = tertinggi.nama;
        animasiAngka(document.getElementById("statJumlah"), dataGunung.length, 1000);
        animasiAngka(document.getElementById("statTinggi"), tertinggi.mdpl, 1600);
    }

    // Foto hero bergeser sedikit lebih lambat dari halaman saat digulir (memberi kesan kedalaman)
    function inisialisasiParalaks() {
        if (!hero || KURANGI_GERAK) return;
        let menunggu = false;

        function perbarui() {
            menunggu = false;
            const y = window.scrollY;
            if (y > hero.offsetHeight) return;
            hero.style.setProperty("--geser", (y * 0.12).toFixed(1));
        }

        window.addEventListener("scroll", () => {
            if (!menunggu) {
                menunggu = true;
                requestAnimationFrame(perbarui);
            }
        }, { passive: true });
    }

    // ---------- Muncul saat digulir ----------
    function inisialisasiReveal() {
        const target = document.querySelectorAll("[data-reveal]");
        if (!("IntersectionObserver" in window) || KURANGI_GERAK) {
            target.forEach(el => el.classList.add("muncul"));
            return;
        }

        const pengamat = new IntersectionObserver((daftar, io) => {
            daftar.forEach(entri => {
                if (!entri.isIntersecting) return;
                entri.target.classList.add("muncul");
                io.unobserve(entri.target);
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

        target.forEach(el => pengamat.observe(el));
    }

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

    // Menu Favorit: buka Destinasi dengan filter Favorit
    const menuFavorit = document.getElementById("menuFavorit");
    if (menuFavorit) {
        menuFavorit.addEventListener("click", () => {
            const pil = [...filterButtons].find(b => b.dataset.kategori === "Favorit");
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
            item.setAttribute("data-reveal", "");
            item.style.setProperty("--d", `${120 + i * 110}ms`);
            item.innerHTML = `
                <span class="sorotan-foto">
                    <span class="sorotan-gambar" style="background-image: url('${g.foto}');"></span>
                    <span class="sorotan-no">0${i + 1}</span>
                </span>
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
        const ditandai = favoritIds.includes(gunung.id);
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
            const g = cariGunung(parseInt(id, 10));
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
    inisialisasiReveal(); // setelah kartu & sorotan dibuat, sebelum bagian yang bisa gagal (peta)
    inisialisasiStatHero();
    inisialisasiParalaks();
    inisialisasiPeta();
    isiDaftarTanpaKoordinat();
    inisialisasiNavbar();
    perbaruiFavoritUI();
});
