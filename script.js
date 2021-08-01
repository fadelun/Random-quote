function generate(){
    const quotes = {
         "Zig Ziglar" : "Peluang nyata untuk sukses terletak di dalam diri seseorang dan bukan pada pekerjaannya.",
         "John Wooden" : "Jangan biarkan apa yang tidak dapat kamu lakukan mengganggu apa yang dapat kamu lakukan.",
        "Winston Churchill" : "Keberanian adalah apa yang diperlukan untuk berdiri dan berbicara. Keberanian juga diperlukan untuk duduk dan mendengarkan.",
        "Maya Angelou" : "Sukses adalah menyukai diri sendiri, menyukai apa yang kamu lakukan, dan menyukai caramu melakukannya.",
        "Josh Hinds" : "Berani bermimpi, tapi yang lebih penting, berani melakukan tindakan di balik impianmu.",
        "William Arthur Ward" : "Kesempatan itu mirip seperti matahari terbit. Kalau kau menunggu terlalu lama, kau bisa melewatkannya",
        "Oprah Winfrey" :"Penemuan terbesar sepanjang masa adalah bahwa seseorang dapat mengubah masa depannya hanya dengan mengubah sikapnya.",
        "Kakashi Hatake" : "Kemampuan individu seorang ninja memang penting, tetapi yang lebih penting lagi adalah kerja sama tim",
        "Orochimaru" : "Tidak semua mimpi dan harapan akan terwujud sesuai dengan keinginan kita",
        "Tobi" : "Untuk mencapai tujuan, kamu harus bersabar",
        "Obito" : "Shinobi yang melanggar aturan memang disebut sampah, tetapi shinobi yang meninggalkan sahabatnya lebih rendah dari sampah.",
        "Ibnu Ruslan":"Orang yang beramal tanpa didasari ilmu, maka amalnya akan sia-sia belaka karena tidak diterima oleh Allah.",
        "Syaikh Hasan Al Bashri":"Aku tahu kematian itu selalu mengintip setiap saat sehingga aku bersiap-siap menghadapinya.",
        "Ali bin Abi Thalib":"Orang-orang yang suka berkata jujur mendapatkan tiga hal, kepercayaan, cinta, dan rasa hormat.",
        " Imam Al Ghazali":"Ilmu itu kehidupan hati daripada kebutaan, sinar penglihatan daripada kezaliman dan tenaga badan daripada kelemahan.",
        "Ibnu Mas’ud":"Sabar memiliki dua sisi. Sisi yang satu adalah sabar, sisi yang lain adalah bersyukur kepada Allah.",
        " Utsman bin Affan":"Saya heran kepada orang yang mengetahui setan sebagai musuh, tetapi tetap menanti ajakannya.",
        "Ali bin Abi Thalib":"Janganlah engkau mengucapkan perkataan yang engkau sendiri tak suka mendengarnya jika orang lain mengucapkannya kepadamu.",
        "Ibnul Qayyim":"Empat hal yang menghambat datangnya rezeki; tidur di waktu pagi, sedikit salat, malas-malasan, dan berkhianat.",
        "Imam al-Ghazali":"Barangsiapa tidak peduli terhadap nasib agama, berarti ia tidak punya agama. Barang siapa yang semangatnya tidak berkobar-kobar jika agama Islam ditimpa suatu bencana, maka Islam tidak butuh kepada mereka.",
        "Ibnu Attailllah":"Berteman dengan orang bodoh yang tidak mengikuti ajakan hawa nafsunya adalah lebih baik bagi kalian, daripada berteman dengan orang alim, tapi selalu suka terhadap hawa nafsunya.",
        "Ibn Rajab Al Hanbaly":"Jika tak mampu bersaing dengan para shalihin dalam ibadahnya, berlombalah dengan para pendosa dalam istigfarnya.",
        "Imam Hasan albasri":"Lakukanlah kebaikan sekecil apa pun karena engkau tidak pernah tahu kebaikan apa yang akan memasukkanmu ke surga." ,
    }
    // 
    const authors = Object.keys(quotes);
    // 
    const author = authors[Math.floor(Math.random() * authors.length)];
    // 
    const quote = quotes[author];
    
    document.getElementById('quote').innerHTML =   `"${quote}"`;
    document.getElementById('author').innerHTML = author;
}