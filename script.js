document.getElementById('checkButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const birthDate = document.getElementById('birthDateInput').value;

    let pesan = [];

    if (!name) {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Silakan masukkan nama Anda.'
        });
        return;
    }

    const khodams = [
        'Venti', 'Diluc', 'Amber', 'Barbara', 'Kaeya', 'Lisa', 'Jean', 'Razor', 'Klee', 'Bennett', 'Noelle', 'Fischl', 'Sucrose', 'Mona', 'Xiao', 'Ganyu', 'Albedo', 'Zhongli', 'Childe', 'Diona', 'Xinyan', 'Rosaria', 'Hu Tao', 'Yanfei', 'Eula', 'Kazuha', 'Ayaka', 'Yoimiya', 'Raiden Shogun', 'Sangonomiya Kokomi', 'Thoma', 'Gorou', 'Arataki Itto', 'Yae Miko', 'Shenhe', 'Yun Jin', 'Kamisato Ayato', 'Yelan', 'Kuki Shinobu', 'Shikanoin Heizou',
        'Naga Api', 'Burung Phoenix', 'Kucing Sihir', 'Anjing Gaib', 'Kuda Terbang', 'Singa Angkasa', 
        'Harimau Salju', 'Gajah Awan', 'Ular Emas', 'Rusa Kristal', 'Serigala Bayangan', 'Macan Angin', 
        'Kura-kura Zaman', 'Ikan Teratai', 'Kupu-kupu Api', 'Katak Guntur', 'Bebek Pelangi', 'Kambing Awan', 
        'Jerapah Api', 'Kumbang Komet', 'Kelelawar Mega', 'Singa Laut Galaksi', 'Ikan Paus Kosmik', 'Banteng Petir', 
        'Burung Merak Solar', 'Merpati Galaksi', 'Bebek Nebula', 'Burung Hantu Supernova', 'Ayam Meteor', 
        'Burung Elang Surya', 'Laba-laba Aurora', 'Kalajengking Plasma', 'Ikan Pari Bintang', 'Burung Hantu Lunar', 
        'Serigala Nebula', 'Singa Plasma', 'Gajah Lunar', 'Rusa Antimateri', 'Ular Quasar', 'Macan Pulsar', 
        'Kuda Nebula', 'Rajawali Supernova', 'Kijang Komet', 'Burung Hantu Kosmik', 'Rubah Aurora', 'Kura-kura Galaksi', 
        'Kakatua Nebula', 'Ikan Koi Galaksi', 'Lebah Supernova', 'Anjing Nebula', 'Kucing Quasar', 'Tikus Pulsar', 
        'Iguana Aurora', 'Jangkrik Plasma', 'Katak Bintang', 'Gurita Kosmik', 'Singa Antimateri', 'Kuda Laut Quasar', 
        'Hiu Supernova', 'Kuda Nil Plasma', 'Kerbau Pulsar', 'Jerapah Aurora', 'Kumbang Quasar', 'Kupu-kupu Nebula', 
        'Kelelawar Galaksi', 'Singa Laut Supernova', 'Ikan Paus Antimateri', 'Banteng Quasar', 'Kambing Nebula', 
        'Burung Merak Kosmik', 'Merpati Supernova', 'Bebek Plasma', 'Burung Hantu Bintang', 'Ayam Galaksi', 
        'Burung Elang Nebula', 'Laba-laba Quasar', 'Kalajengking Supernova', 'Ikan Pari Galaksi', 'Burung Hantu Quasar',
        'Macan Putih', 'Naga Biru', 'Garuda Emas', 'Harimau Hitam', 'Kuda Perkasa', 'Elang Merah', 
        'Singa Emas', 'Serigala Putih', 'Rusa Hijau', 'Gajah Besi', 'Buaya Perunggu', 'Kera Sakti', 
        'Burung Hantu', 'Ular Sanca', 'Rajawali Emas', 'Rubah Api', 'Ikan Mas', 'Kijang Perak', 
        'Kura-kura Hijau', 'Kakatua Putih', 'Lebah Emas', 'Anjing Hitam', 'Kucing Merah', 'Tikus Besi', 
        'Iguana Biru', 'Jangkrik Emas', 'Katak Merah', 'Gurita Ungu', 'Singa Putih', 'Kuda Laut Biru', 
        'Hiu Putih', 'Kuda Nil Perak', 'Kerbau Hitam', 'Jerapah Emas', 'Kumbang Merah', 'Kupu-kupu Biru', 
        'Kelelawar Hitam', 'Singa Laut', 'Ikan Paus Biru', 'Banteng Merah', 'Kambing Putih', 'Burung Merak', 
        'Merpati Emas', 'Bebek Hitam', 'Burung Hantu Merah', 'Ayam Jago', 'Burung Elang', 'Laba-laba Merah', 
        'Kalajengking Hitam', 'Ikan Pari Biru', 'Burung Hantu Putih', 'Serigala Hitam', 'Singa Merah', 
        'Gajah Merah', 'Rusa Perak', 'Ular Kobra', 'Macan Tutul', 'Kuda Biru', 'Rajawali Putih', 
        'Kijang Emas', 'Burung Hantu Biru', 'Rubah Perak', 'Kura-kura Merah', 'Kakatua Merah', 
        'Ikan Koi', 'Lebah Merah', 'Anjing Putih', 'Kucing Hitam', 'Tikus Merah', 'Iguana Hijau', 
        'Jangkrik Biru', 'Katak Emas', 'Gurita Hitam', 'Singa Biru', 'Kuda Laut Putih', 'Hiu Hitam', 
        'Kuda Nil Merah', 'Kerbau Emas', 'Jerapah Perak', 'Kumbang Hitam', 'Kupu-kupu Merah', 
        'Kelelawar Merah', 'Singa Laut Hitam', 'Ikan Paus Putih', 'Banteng Hitam', 'Kambing Merah', 
        'Burung Merak Emas', 'Merpati Putih', 'Bebek Merah', 'Burung Hantu Hijau', 'Ayam Jantan', 
        'Burung Elang Merah', 'Laba-laba Biru','Domba liar','Monyet','Setan Ancol','Saitama','Biju','Seblak', 'Kalajengking Merah', 'Ikan Pari Hitam', 'Burung Hantu Emas','kiyubi','Saint saiya',
    'Naruto Uzumaki', 'Sasuke Uchiha','EEK AYAM','CAPIII IMOET','BABON','LIU KANG','KUNG LAO','HARIMAU JAWA','ULER PIPIT','MIYABI','BEBEK MADURA',
    'Goku', 'Vegeta', 'Gohan', 'Frieza', 'Piccolo',
    'Luffy', 'Zoro', 'Nami', 'Sanji', 'Usopp', 'Shukaku', 'Gaara', 'Matatabi', 'Yugito Nii', 'Isobu', 'Yagura', 
    'Son Goku', 'Roshi', 'Kokuo', 'Han', 'Saiken', 'Utakata', 
    'Chomei', 'Fuu', 'Gyuki', 'Killer Bee', 'Kurama', 'Naruto Uzumaki',
    'Obito Uchiha', 'Madara Uchiha', 'Hagoromo Otsutsuki',
    'Saitama',
    'Boruto Uzumaki', 'Sarada Uchiha',
    'Himawari Uzumaki','Bulu jembut','Upin','IPIN','TOK DALANG'
    ];

    if (birthDate) {
        const khodamIndex = parseInt(birthDate.replace(/-/g, '').slice(4, 8), 10) % khodams.length;
        const khodamTerdeteksi = khodams[khodamIndex];

        pesan = [
            `Ya, ${name}, menurut tanggal lahir Anda, di dalam dirimu ada khodam ${khodamTerdeteksi}.`,
            `Tidak, ${name}, menurut tanggal lahir Anda, tidak ada khodam di dalam dirimu.`,
            `Menurut tanggal lahir Anda, khodam ${khodamTerdeteksi} sedang bersemayam di dalam dirimu, ${name}.`,
            `Menurut tanggal lahir Anda, kamu bersih dari khodam, ${name}.`,
            `Menurut tanggal lahir Anda, khodam ${khodamTerdeteksi} berada di dalam dirimu, ${name}, jaga baik-baik!`,
            `Khodam ${khodamTerdeteksi} berada di dalam dirimu, ${name}, TAPI BOONG !`,
            `Tidak dapat mendeteksi khodam di dalam dirimu menurut tanggal lahir Anda, ${name}. Coba lagi.`
        ];
    } else {
        const randomIndex = Math.floor(Math.random() * khodams.length);
        const khodamTerdeteksi = khodams[randomIndex];

        pesan = [
            `Ya, ${name}, di dalam dirimu ada khodam ${khodamTerdeteksi}.`,
            `Tidak, ${name}, tidak ada khodam di dalam dirimu.`,
            `Khodam ${khodamTerdeteksi} sedang bersemayam di dalam dirimu, ${name}.`,
            `Kamu bersih dari khodam, ${name}.`,
            `Khodam ${khodamTerdeteksi} berada di dalam dirimu, ${name}, jaga baik-baik!`,
            `Khodam ${khodamTerdeteksi} berada di dalam dirimu, ${name}, TAPI BOONG !`,
            `Tidak dapat mendeteksi khodam di dalam dirimu, ${name}. Coba lagi.`
        ];
    }

    const randomPesanIndex = Math.floor(Math.random() * pesan.length);
    const hasilTeks = pesan[randomPesanIndex];

    Swal.fire({
        title: 'Hasil Cek Khodam',
        text: hasilTeks,
        icon: 'info'
    });
});
