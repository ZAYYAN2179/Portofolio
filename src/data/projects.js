// Food Explore (PHP)
import foodExplorePhpDaftarUlasan from "../assets/images/Food Explore (PHP)/daftarulasan.png";
import foodExplorePhpFavorit from "../assets/images/Food Explore (PHP)/favorit.png";
import foodExplorePhpCover from "../assets/images/Food Explore (PHP)/landingpage.png";
import foodExplorePhpLogin from "../assets/images/Food Explore (PHP)/login.png";
import foodExplorePhpMenu from "../assets/images/Food Explore (PHP)/menu.png";
import foodExplorePhpPenilaian from "../assets/images/Food Explore (PHP)/penilaian.png";
import foodExplorePhpProfil from "../assets/images/Food Explore (PHP)/profil.png";
import foodExplorePhpRegister from "../assets/images/Food Explore (PHP)/register.png";
import foodExplorePhpWarung from "../assets/images/Food Explore (PHP)/warung.png";

// Futsal Booker
import futsalBookerCover from "../assets/images/Futsal Booker/landingpage.png";

export const projects = [
  {
    id: "food-explore-php",
    title: "Food Explore (PHP)",
    cover: foodExplorePhpCover,
    images: [foodExplorePhpRegister, foodExplorePhpLogin, foodExplorePhpCover, foodExplorePhpWarung, foodExplorePhpFavorit, foodExplorePhpMenu, foodExplorePhpPenilaian, foodExplorePhpDaftarUlasan, foodExplorePhpProfil],
    description: "Website pencarian makanan dengan layanan pengantaran khusus mahasiswa asrama Telkom University. Menyediakan fitur pencarian makanan, sistem rating, dan informasi warung.",
    role: "Ketua Tim & Backend Developer",
    responsibilities: [
      "Merancang dan mengimplementasikan logika backend menggunakan PHP dan MySQL",
      "Membangun fitur pencarian makanan dan pengelolaan data warung",
      "Mengembangkan sistem penilaian dan ulasan pengguna",
      "Mengelola struktur database dan relasi antar tabel",
      "Mengkoordinasikan pembagian tugas dan integrasi antar anggota tim",
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Food Explore (Laravel)",
    description:
      "Pengembangan lanjutan Food Explore berbasis Laravel dengan fitur role admin, pemilik warung, dan pengguna. Mendukung integrasi Map API, pengelolaan menu mandiri, serta pemesanan langsung yang terhubung ke WhatsApp. Berperan sebagai ketua tim dan mengembangkan fitur autentikasi serta role & permission.",
    tech: ["Laravel", "PHP", "MySQL", "REST API", "Map API"],
  },
  {
    id: "futsal-booker",
    title: "Futsal Booker",
    cover: futsalBookerCover,
    images: [futsalBookerCover, foodExplorePhpLogin, foodExplorePhpCover, foodExplorePhpWarung, foodExplorePhpFavorit, foodExplorePhpMenu, foodExplorePhpPenilaian, foodExplorePhpDaftarUlasan, foodExplorePhpProfil],
    description:
      "Aplikasi desktop berbasis Java untuk sistem booking lapangan futsal. Menyediakan fitur booking, pembayaran DP, invoice, serta pengelolaan jadwal dan konfirmasi booking oleh admin. Berperan dalam implementasi fungsionalitas utama aplikasi.",
    role: "Ketua Tim & Backend Developer",
    responsibilities: [
      "Mengimplementasikan fungsionalitas utama aplikasi desktop berbasis Java",
      "Membangun fitur registrasi dan autentikasi pengguna",
      "Mengembangkan sistem booking lapangan futsal dan pemilihan jadwal",
      "Mengimplementasikan perhitungan dan pembayaran DP serta pembuatan invoice",
      "Membangun fitur manajemen jadwal dan lapangan untuk admin",
      "Mengembangkan fitur konfirmasi dan reschedule booking",
      "Menerapkan konsep Object-Oriented Programming (OOP) pada struktur aplikasi",
    ],
    tech: ["Java", "OOP", "Desktop Application"],
  },
  {
    title: "Food Explore (Laravel)",
    description:
      "Pengembangan lanjutan Food Explore berbasis Laravel dengan fitur role admin, pemilik warung, dan pengguna. Mendukung integrasi Map API, pengelolaan menu mandiri, serta pemesanan langsung yang terhubung ke WhatsApp. Berperan sebagai ketua tim dan mengembangkan fitur autentikasi serta role & permission.",
    tech: ["Laravel", "PHP", "MySQL", "REST API", "Map API"],
  },
  {
    title: "TVBC App",
    description:
      "Aplikasi Android untuk mendukung pengelolaan UKM Voli Telkom University, meliputi absensi anggota, pengelolaan keuangan, pendataan anggota, dan penyampaian informasi. Dikembangkan secara berkelompok dengan peran sebagai ketua tim dan fokus pada fitur inti terintegrasi Firebase.",
    tech: ["Kotlin", "Android", "Firebase", "Authentication"],
  },
  {
    title: "Deep Blue Cleaner",
    description:
      "Game desktop bergenre action dan edukasi di mana pemain membersihkan sampah di laut sambil menjaga ekosistem. Pemain mengumpulkan skor, menghindari rintangan, dan mengelola oksigen. Berperan sebagai lead dan programmer pada pengembangan player controller.",
    tech: ["Game Development", "Desktop Game", "C#", "Unity"],
  },
  {
    title: "GalaxAR",
    description:
      "Aplikasi Augmented Reality yang menampilkan planet 3D ketika kartu planet dipindai menggunakan kamera. Setiap objek dilengkapi suara dan informasi edukatif. Berperan dalam pengembangan UI dan fitur pada tampilan awal aplikasi.",
    tech: ["Augmented Reality", "Unity", "C#", "Vuforia"],
  },
  {
    title: "Deteksi Uang Nominal",
    description:
      "Program berbasis Python untuk mengenali nominal uang dari gambar menggunakan ekstraksi fitur warna dan algoritma machine learning sederhana seperti Random Forest dan KNN. Berperan dalam pengolahan dataset, pelatihan model, dan pengujian prediksi.",
    tech: ["Python", "Machine Learning", "Random Forest", "KNN"],
  },
  {
    title: "AgeXplore Planet",
    description: "Aplikasi Android mandiri untuk menghitung usia pengguna di planet lain serta mencatat misi eksplorasi antariksa. Mengintegrasikan RESTful API untuk menampilkan data alat eksplorasi lengkap dengan gambar dan deskripsi.",
    tech: ["Kotlin", "Android", "REST API"],
  },
  {
    title: "AirCare",
    description: "Aplikasi pemantauan kualitas udara dan kondisi ruangan secara real-time menggunakan sensor lingkungan, mikrokontroler, dan aplikasi Android.",
    tech: ["ESP32", "MQ-135", "DHT11", "PIR Sensor", "Kotlin", "Android", "Firebase Realtime Database", "REST API"],
  },
];
