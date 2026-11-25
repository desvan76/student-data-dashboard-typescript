"use strict";
// mock data siswa
const siswa = [
    {
        name: "Desvanto",
        class: "Full Stack A",
        score: 95
    },
    {
        name: "Budi",
        class: "Full Stack A",
        score: 75
    },
    {
        name: "Asep",
        class: "Full Stack B",
        score: 86
    },
    {
        name: "Gandhi",
        class: "Dev Ops A",
        score: 90
    },
    {
        name: "Wahyu",
        class: "Dev Ops B",
        score: 71
    },
    {
        name: "Amelia",
        class: "Full Stack A",
        score: 80
    },
    {
        name: "Farhan",
        class: "Full Stack B",
        score: 81
    },
    {
        name: "Farid",
        class: "Dev Ops B",
        score: 87
    },
    {
        name: "Rizky",
        class: "Dev Ops A",
        score: 72
    },
    {
        name: "Putri",
        class: "Dev Ops B",
        score: 94
    }
];
// mengambil elemen html
const tabelSiswa = document.getElementById("tabelSiswa");
const searchInput = document.getElementById("searchInput");
const totalSiswa = document.getElementById("totalSiswa");
const rataRataElement = document.getElementById("rataRata");
// mengubah tipe elemen menjadi lebih spesifik
const inputPencarian = searchInput;
// fungsi untuk menampilkan data
function tampilkanSiswa(data) {
    // menggunakan map() untuk merender tabel
    tabelSiswa.innerHTML = data.map((siswa, index) => {
        // menentukan warna nilai
        let warna;
        if (siswa.score >= 85) {
            warna = "high";
        }
        else if (siswa.score >= 75) {
            warna = "medium";
        }
        else {
            warna = "low";
        }
        return `
                <tr>
                    <td>${index + 1}</td>
                    <td>${siswa.name}</td>
                    <td>
                        <span class="class-badge">
                            ${siswa.class}
                        </span>
                    </td>
                    <td>
                        <span class="score ${warna}">
                            ${siswa.score}
                        </span>
                    </td>
                </tr>
            `;
    }).join("");
    // Menggunakan reduce() untuk menghitung total nilai
    const totalNilai = data.reduce((total, siswa) => {
        return total + siswa.score;
    }, 0);
    // menghitung rata-rata
    const rataRata = data.length > 0
        ? (totalNilai / data.length).toFixed(1)
        : "0.0";
    // memperbarui rata-rata nilai
    rataRataElement.textContent = rataRata;
    // memperbarui jumlah data
    totalSiswa.textContent = String(data.length);
    // jika data tidak ditemukan
    if (data.length === 0) {
        tabelSiswa.innerHTML = `
            <tr>
                <td colspan="4" style="text-align:center; padding:30px;">
                    Data siswa tidak ditemukan.
                </td>
            </tr>
        `;
    }
}
// event listener untuk fitur pencarian
inputPencarian.addEventListener("input", function () {
    const keyword = inputPencarian.value.toLowerCase();
    // menggunakan filter() untuk mencari nama siswa
    const hasilPencarian = siswa.filter((data) => {
        return data.name.toLowerCase().includes(keyword);
    });
    // menampilkan hasil pencarian
    tampilkanSiswa(hasilPencarian);
});
// menampilkan semua data saat halaman dibuka
tampilkanSiswa(siswa);
