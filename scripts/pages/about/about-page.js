export default class AboutPage {
    async render() {
        return `
        <h1 class="content-title">About Page</h1>
        <p>Ini adalah konten halaman about.</p>
        <ol>
            <li>Kita</li>
            <li>Punya</li>
            <li>Elemen</li>
            <li>Daftar</li>
            <li>di sini!</li>
        </ol>
        <p>Oke, sudah cukup. Kita bisa kembali <a href="#/">Halaman Home</a></p>
        `
    }

    async afterRender() {
        // Do something
    }
}