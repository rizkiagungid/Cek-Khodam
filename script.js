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
         // Naruto
    'Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Itachi Uchiha', 'Madara Uchiha',
    'Minato Namikaze', 'Hinata Hyuga', 'Neji Hyuga', 'Gaara', 'Rock Lee', 'Shikamaru Nara',
    'Ino Yamanaka', 'Choji Akimichi', 'Kiba Inuzuka', 'Shino Aburame', 'Temari', 'Kankuro',
    // Dragon Ball
    'Goku', 'Vegeta', 'Gohan', 'Frieza', 'Piccolo', 'Majin Buu', 'Cell', 'Bulma', 'Trunks', 'Krillin',
    'Yamcha', 'Tien Shinhan', 'Chiaotzu', 'Master Roshi', 'Android 18', 'Android 17', 'Beerus', 'Whis',
    // One Piece
    'Luffy', 'Zoro', 'Nami', 'Sanji', 'Usopp', 'Chopper', 'Robin', 'Franky', 'Brook', 'Shanks', 'Ace',
    'Jimbei', 'Nico Robin', 'Trafalgar Law', 'Donquixote Doflamingo', 'Boa Hancock', 'Buggy', 'Crocodile',
    // Attack on Titan
    'Eren Yeager', 'Mikasa Ackerman', 'Armin Arlert', 'Levi Ackerman', 'Erwin Smith', 'Reiner Braun',
    'Annie Leonhart', 'Hange Zoe', 'Jean Kirstein', 'Connie Springer', 'Sasha Blouse', 'Historia Reiss',
    // Bleach
    'Ichigo Kurosaki', 'Rukia Kuchiki', 'Orihime Inoue', 'Uryu Ishida', 'Sado Yasutora', 'Renji Abarai',
    'Byakuya Kuchiki', 'Toshiro Hitsugaya', 'Kenpachi Zaraki', 'Retsu Unohana', 'Sosuke Aizen', 'Shinji Hirako',
    // One Punch Man
    'Saitama', 'Genos', 'Bang', 'King', 'Tatsumaki', 'Fubuki', 'Mumen Rider',
    // Hunter x Hunter
    'Gon Freecss', 'Killua Zoldyck', 'Kurapika', 'Leorio Paradinight', 'Hisoka', 'Chrollo Lucilfer',
    'Biscuit Krueger', 'Meruem', 'Neferpitou', 'Komugi', 'Isaac Netero', 'Kite', 'Knuckle Bine',
    // Demon Slayer
    'Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira', 'Kanao Tsuyuri', 'Giyu Tomioka',
    'Shinobu Kocho', 'Kyojuro Rengoku', 'Tengen Uzui', 'Mitsuri Kanroji', 'Muichiro Tokito', 'Sanemi Shinazugawa',
    // Boruto
    'Boruto Uzumaki', 'Sarada Uchiha', 'Mitsuki', 'Kawaki', 'Shikadai Nara', 'Inojin Yamanaka', 'Chocho Akimichi',
    'Himawari Uzumaki', 'Konohamaru Sarutobi', 'Moegi Kazamatsuri','Bulu jembut','Upin','IPIN','TOK DALANG', 'Udon Ise'
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
