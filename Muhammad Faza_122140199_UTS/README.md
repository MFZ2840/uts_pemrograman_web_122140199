# UTS React Product Catalog

Proyek ini adalah aplikasi React sederhana yang menampilkan daftar produk dari API eksternal. Aplikasi ini dibuat untuk memenuhi tugas UTS praktikum pemrograman web dan mengimplementasikan berbagai konsep React seperti komponen fungsional, props, state, hooks, routing, dan state management menggunakan useReducer.

## Fitur

- **Komponen Fungsional**: Terbagi menjadi komponen seperti `Header`, `Footer`, `ProductList`, `ProductItem`, `Home`, `ProductDetail`, dan `NotFound`.
- **Props dan Prop Validation**: Komponen saling berkomunikasi menggunakan props dengan validasi menggunakan PropTypes.
- **State Management**: Pengelolaan state lokal dan kompleks menggunakan `useReducer` (melalui custom hook `useFetch`).
                        Saya memilih useReducer karena state yang dikelola dalam aplikasi ini memiliki struktur yang kompleks dan memerlukan transisi state yang terorganisir dengan baik. Penggunaan useReducer memungkinkan saya mendefinisikan aksi-aksi yang spesifik (seperti FETCH_INIT, FETCH_SUCCESS, dan FETCH_FAILURE) yang secara eksplisit mengatur perubahan state, sehingga logika pengelolaan state menjadi lebih jelas dan mudah dipelihara. Dengan demikian, useReducer menyediakan kerangka kerja yang tepat untuk menangani kondisi seperti loading, error, dan data secara terintegrasi, sesuai dengan kompleksitas kebutuhan aplikasi.
- **Data Fetching**: Data produk diambil dari API (https://fakestoreapi.com/products) menggunakan fetch API dengan penanganan loading dan error.
- **Routing**: Implementasi navigasi menggunakan React Router dengan dynamic route untuk detail produk dan halaman not found.
- **Optimasi dengan Hooks**: Menggunakan `useEffect`, `useRef`, `useCallback`, dan `useMemo` untuk meningkatkan performa dan user experience.
- **Responsive UI**: Tampilan responsif dan user-friendly dengan styling menggunakan CSS.

## Alat dan Bahan

Pastikan kamu memiliki:
- **Browser Web**: Chrome, Firefox, atau Edge
- **Code Editor**: Visual Studio Code (dengan ekstensi ES7+ React/Redux/React-Native snippets)
- **Node.js dan npm**: Versi terbaru
- **Git**: Untuk version control
- **React Developer Tools**: Ekstensi browser untuk debugging

## Instalasi

Ikuti langkah-langkah berikut untuk menjalankan proyek ini secara lokal:

1. **Clone Repository dari GitHub**

   ```bash
   git clone https://github.com/MFZ2840//uts_pemrograman_web_122140199.git

2. **Masuk ke Folder Proyek**

    cd uts-react-app

3. **Install Dependensi**
    
    npm install

## Menjalankan Aplikasi

    npm start

## Testing (Opsional)

Proyek ini sudah temrasuk file-file default untuk testing:
App.test.js
setupTests.js

Untuk menjalankan, cukup jalankan:

    npm test

