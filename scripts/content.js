// ================================================================
// DATA KONTEN DUMMY UNTUK UGER HYDROTECH
// Semua gambar menggunakan placeholder dari picsum.photos
// Video hero menggunakan sample-videos.com
// ================================================================

// ----- HOME DATA -----
const homeData = {
    hero: {
        bgVideo: 'assets/videos/hero_loop.mp4',
        title: 'UGER HYDROTECH — RoboSub 2026',
        subtitle: 'Menjelajahi batas teknologi maritim otonom Indonesia',
        ctaText: 'Cari Tahu Lebih',
        ctaLink: 'about'
    },
    latestVehicles: {
        title: 'Robot Terbaru Kami',
        items: [
            {
                image: 'https://picsum.photos/seed/asv26/600/400',
                name: 'Sagara Pandhalungan ASV 2026',
                desc: 'Kapal permukaan otonom dengan navigasi RTK GPS dan radar mutakhir.',
                link: 'asv-2026',
                date: '2026-07-01'
            },
            {
                image: 'https://picsum.photos/seed/rov3/600/400',
                name: 'UGER ROV 3.0',
                desc: 'Manipulator presisi, sonar imaging, kedalaman 300m.',
                link: 'rov-30',
                date: '2026-06-15'
            },
            {
                image: 'https://picsum.photos/seed/auv3/600/400',
                name: 'UGER AUV 3.0',
                desc: 'Generasi terbaru dengan navigasi AI canggih dan endurance 10 jam.',
                link: 'auv-30',
                date: '2026-06-01'
            },
            {
                image: 'https://picsum.photos/seed/asv25/600/400',
                name: 'Sagara Pandhalungan ASV 2025',
                desc: 'Juara RobotX 2024 dengan sistem kontrol adaptif.',
                link: 'asv-2025',
                date: '2025-12-10'
            },
            {
                image: 'https://picsum.photos/seed/auv2/600/400',
                name: 'UGER AUV 2.0',
                desc: 'Peraih penghargaan inovasi terbaik 2025 dengan SLAM presisi tinggi.',
                link: 'auv-20',
                date: '2025-08-20'
            },
            {
                image: 'https://picsum.photos/seed/rov2/600/400',
                name: 'UGER ROV 2.0',
                desc: 'ROV serbaguna untuk inspeksi pipa bawah laut.',
                link: 'rov-20',
                date: '2025-05-10'
            },
            {
                image: 'https://picsum.photos/seed/asv24/600/400',
                name: 'Sagara Pandhalungan ASV 2024',
                desc: 'Generasi awal ASV dengan side-scan sonar.',
                link: 'asv-2024',
                date: '2024-11-01'
            },
            {
                image: 'https://picsum.photos/seed/auv1/600/400',
                name: 'UGER AUV 1.0',
                desc: 'Peraih juara 2 internasional Materov 2024.',
                link: 'auv-10',
                date: '2024-07-15'
            },
            {
                image: 'https://picsum.photos/seed/rov1/600/400',
                name: 'UGER ROV 1.0',
                desc: 'ROV pertama yang berhasil lolos uji kolam 2023.',
                link: 'rov-10',
                date: '2023-12-01'
            }
        ]
    },
    feature: {
        bgImage: 'assets/images/home.jpg',
        title: 'Sagara Pandhalungan ASV 4.0',
        desc: 'Kapal permukaan otonom generasi keempat, juara RobotX 2024 di Florida, AS.',
        ctaText: 'Cari Tahu Lebih',
        ctaLink: 'asv-2026'
    },
    knowUs: {
        title: 'Kenali Kami!',
        items: [
            {
                image: 'https://picsum.photos/seed/aboutus/600/400',
                title: 'Tentang Kami',
                desc: 'Kami adalah tim multidisiplin dari berbagai universitas di Indonesia yang membangun sistem maritim otonom—merancang kendaraan bawah air dan permukaan yang cerdas untuk lingkungan kompleks.',
                ctaText: 'Pelajari',
                ctaLink: 'about'
            },
            {
                image: 'https://picsum.photos/seed/teamphoto/600/400',
                title: 'Tim Kami',
                desc: 'Tim kami terdiri dari mahasiswa Teknik Mesin, Elektro, Ilmu Komputer, Fisika, dan Bisnis dari berbagai kampus di Indonesia.',
                ctaText: 'Kenali',
                ctaLink: 'team'
            },
            {
                image: 'https://picsum.photos/seed/hornet/600/400',
                title: 'Hornet Program',
                desc: 'Program pelatihan dan rekrutmen anggota baru untuk mengembangkan AUV/ASV sambil membangun keterampilan teknis dan kerja tim.',
                ctaText: 'Daftar',
                ctaLink: 'program'
            }
        ]
    },
    sponsor: {
        title: 'Bergabunglah dengan komunitas sponsor kami.',
        image: 'https://picsum.photos/seed/sponsor/800/400',
        cta1Text: 'Hubungi Kami',
        cta1Link: '#',
        cta2Text: 'Dukung Kami',
        cta2Link: '#'
    }
};

// ----- DETAIL KENDARAAN (AUV, ROV, ASV) -----
const detailData = {
    // AUV 3.0
    'auv-30': {
        title: 'UGER AUV 3.0',
        image: 'https://picsum.photos/seed/auv3detail/800/500',
        specs: [
            { label: 'Dimensions', values: ['Length: 1.4 m', 'Diameter: 0.22 m'] },
            { label: 'Mass', values: ['25 kg (Air)'] },
            { label: 'Top Speed', values: ['2.0 m/s'] },
            { label: 'DOF', values: ['6 (Surge, Sway, Heave, Roll, Pitch, Yaw)'] },
            { label: 'Compute', values: ['NVIDIA Jetson AGX Orin 64GB'] },
            { label: 'Acoustics', values: ['Custom modem, 4x hydrophone'] },
            { label: 'Propulsion', values: ['BlueRobotics T200 x8'] },
            { label: 'Navigation', values: ['Teledyne DVL, VN-100, Bar30'] },
            { label: 'Vision', values: ['FLIR 4K (Forward), Downward'] },
            { label: 'Sonar', values: ['Side-scan + Multibeam'] },
            { label: 'Power', values: ['14.8V 200Wh LiPo x2'] },
            { label: 'Software', values: ['ROS 2 (Humble), Ubuntu 22.04'] }
        ],
        actions: [
            { label: 'Mechanical', class: 'btn-outline', link: 'mechanical-auv-30' },
            { label: 'Electrical', class: 'btn-outline', link: 'electrical-auv-30' },
            { label: 'Software', class: 'btn-outline', link: 'software-auv-30' },
            { label: 'Paper', class: 'btn-solid', link: 'paper-auv-30' }
        ]
    },
    'auv-20': {
        title: 'UGER AUV 2.0',
        image: 'https://picsum.photos/seed/auv2detail/800/500',
        specs: [
            { label: 'Dimensions', values: ['Length: 1.2 m', 'Diameter: 0.20 m'] },
            { label: 'Mass', values: ['20 kg (Air)'] },
            { label: 'Top Speed', values: ['1.5 m/s'] },
            { label: 'DOF', values: ['6'] },
            { label: 'Compute', values: ['NVIDIA Jetson Orin 32GB'] },
            { label: 'Acoustics', values: ['Custom modem, 4x hydrophone'] },
            { label: 'Propulsion', values: ['BlueRobotics T200 x6'] },
            { label: 'Navigation', values: ['Teledyne DVL, VN-100, Bar30'] },
            { label: 'Vision', values: ['FLIR 4K (Forward), Downward'] },
            { label: 'Sonar', values: ['Side-scan'] },
            { label: 'Power', values: ['14.8V 150Wh LiPo x2'] },
            { label: 'Software', values: ['ROS 2 (Humble), Ubuntu 22.04'] }
        ],
        actions: [
            { label: 'Mechanical', class: 'btn-outline', link: 'mechanical-auv-20' },
            { label: 'Electrical', class: 'btn-outline', link: 'electrical-auv-20' },
            { label: 'Software', class: 'btn-outline', link: 'software-auv-20' },
            { label: 'Paper', class: 'btn-solid', link: 'paper-auv-20' }
        ]
    },
    'auv-10': {
        title: 'UGER AUV 1.0',
        image: 'https://picsum.photos/seed/auv1detail/800/500',
        specs: [
            { label: 'Dimensions', values: ['Length: 1.0 m', 'Diameter: 0.18 m'] },
            { label: 'Mass', values: ['15 kg (Air)'] },
            { label: 'Top Speed', values: ['1.2 m/s'] },
            { label: 'DOF', values: ['6'] },
            { label: 'Compute', values: ['NVIDIA Jetson Nano'] },
            { label: 'Propulsion', values: ['T200 x4'] },
            { label: 'Navigation', values: ['IMU, Bar30'] },
            { label: 'Vision', values: ['1080p Camera'] },
            { label: 'Power', values: ['14.8V 100Wh LiPo'] },
            { label: 'Software', values: ['ROS 2 (Foxy), Ubuntu 20.04'] }
        ],
        actions: [
            { label: 'Mechanical', class: 'btn-outline', link: 'mechanical-auv-10' },
            { label: 'Electrical', class: 'btn-outline', link: 'electrical-auv-10' },
            { label: 'Software', class: 'btn-outline', link: 'software-auv-10' },
            { label: 'Paper', class: 'btn-solid', link: 'paper-auv-10' }
        ]
    },
    'rov-30': {
        title: 'UGER ROV 3.0',
        image: 'https://picsum.photos/seed/rov3detail/800/500',
        specs: [
            { label: 'Dimensions', values: ['Length: 0.8 m', 'Width: 0.5 m', 'Height: 0.4 m'] },
            { label: 'Mass', values: ['25 kg (Air)'] },
            { label: 'Top Speed', values: ['2.0 m/s'] },
            { label: 'DOF', values: ['6'] },
            { label: 'Compute', values: ['Jetson Xavier NX'] },
            { label: 'Propulsion', values: ['T200 x8, FLIPSKY ESCs'] },
            { label: 'Navigation', values: ['DVL, IMU, Bar30'] },
            { label: 'Vision', values: ['4K (Forward), Low-light (Down)'] },
            { label: 'Manipulators', values: ['3-Axis Arm, Soft Gripper'] },
            { label: 'Power', values: ['14.8V 100Wh LiPo x3'] },
            { label: 'Connectors', values: ['Subconn Micro'] },
            { label: 'Software', values: ['ROS 2 (Foxy), Ubuntu 20.04'] }
        ],
        actions: [
            { label: 'Mechanical', class: 'btn-outline', link: 'mechanical-rov-30' },
            { label: 'Electrical', class: 'btn-outline', link: 'electrical-rov-30' },
            { label: 'Software', class: 'btn-outline', link: 'software-rov-30' },
            { label: 'Paper', class: 'btn-solid', link: 'paper-rov-30' }
        ]
    },
    'rov-20': {
        title: 'UGER ROV 2.0',
        image: 'https://picsum.photos/seed/rov2detail/800/500',
        specs: [
            { label: 'Dimensions', values: ['Length: 0.7 m', 'Width: 0.45 m', 'Height: 0.35 m'] },
            { label: 'Mass', values: ['20 kg (Air)'] },
            { label: 'Top Speed', values: ['1.8 m/s'] },
            { label: 'DOF', values: ['6'] },
            { label: 'Compute', values: ['Jetson TX2'] },
            { label: 'Propulsion', values: ['T200 x6'] },
            { label: 'Navigation', values: ['IMU, Bar30'] },
            { label: 'Vision', values: ['1080p (Forward)'] },
            { label: 'Power', values: ['14.8V 80Wh LiPo x2'] },
            { label: 'Software', values: ['ROS 2 (Foxy), Ubuntu 20.04'] }
        ],
        actions: [
            { label: 'Mechanical', class: 'btn-outline', link: 'mechanical-rov-20' },
            { label: 'Electrical', class: 'btn-outline', link: 'electrical-rov-20' },
            { label: 'Software', class: 'btn-outline', link: 'software-rov-20' },
            { label: 'Paper', class: 'btn-solid', link: 'paper-rov-20' }
        ]
    },
    'rov-10': {
        title: 'UGER ROV 1.0',
        image: 'https://picsum.photos/seed/rov1detail/800/500',
        specs: [
            { label: 'Dimensions', values: ['Length: 0.6 m', 'Width: 0.4 m', 'Height: 0.3 m'] },
            { label: 'Mass', values: ['15 kg (Air)'] },
            { label: 'Top Speed', values: ['1.5 m/s'] },
            { label: 'DOF', values: ['5'] },
            { label: 'Compute', values: ['Raspberry Pi 4'] },
            { label: 'Propulsion', values: ['T200 x4'] },
            { label: 'Navigation', values: ['IMU, Bar30'] },
            { label: 'Vision', values: ['720p Camera'] },
            { label: 'Power', values: ['14.8V 60Wh LiPo'] },
            { label: 'Software', values: ['ROS 1, Ubuntu 18.04'] }
        ],
        actions: [
            { label: 'Mechanical', class: 'btn-outline', link: 'mechanical-rov-10' },
            { label: 'Electrical', class: 'btn-outline', link: 'electrical-rov-10' },
            { label: 'Software', class: 'btn-outline', link: 'software-rov-10' },
            { label: 'Paper', class: 'btn-solid', link: 'paper-rov-10' }
        ]
    },
    'asv-2026': {
        title: 'Sagara Pandhalungan ASV 2026',
        image: 'https://picsum.photos/seed/asv26detail/800/500',
        specs: [
            { label: 'Dimensions', values: ['Length: 1.6 m', 'Width: 0.9 m'] },
            { label: 'Mass', values: ['45 kg (Air)'] },
            { label: 'Top Speed', values: ['3.5 m/s'] },
            { label: 'DOF', values: ['4 (Surge, Sway, Yaw, Roll)'] },
            { label: 'Compute', values: ['Intel NUC i9'] },
            { label: 'Propulsion', values: ['2x Jet Drives (upgraded)'] },
            { label: 'Navigation', values: ['RTK GPS, IMU, Radar'] },
            { label: 'Vision', values: ['4K (Forward), 360° IR'] },
            { label: 'Sonar', values: ['Multibeam'] },
            { label: 'Power', values: ['24V 300Wh LiFePO4'] },
            { label: 'Comm', values: ['RF 20 km, 5G'] },
            { label: 'Software', values: ['ROS 2 (Humble), Ubuntu 22.04'] }
        ],
        actions: [
            { label: 'Mechanical', class: 'btn-outline', link: 'mechanical-asv-2026' },
            { label: 'Electrical', class: 'btn-outline', link: 'electrical-asv-2026' },
            { label: 'Software', class: 'btn-outline', link: 'software-asv-2026' },
            { label: 'Paper', class: 'btn-solid', link: 'paper-asv-2026' }
        ]
    },
    'asv-2025': {
        title: 'Sagara Pandhalungan ASV 2025',
        image: 'https://picsum.photos/seed/asv25detail/800/500',
        specs: [
            { label: 'Dimensions', values: ['Length: 1.5 m', 'Width: 0.8 m'] },
            { label: 'Mass', values: ['40 kg (Air)'] },
            { label: 'Top Speed', values: ['3.0 m/s'] },
            { label: 'DOF', values: ['4'] },
            { label: 'Compute', values: ['Intel NUC i7'] },
            { label: 'Propulsion', values: ['2x Jet Drives'] },
            { label: 'Navigation', values: ['GPS, IMU, Radar'] },
            { label: 'Vision', values: ['1080p (Forward), 360° IR'] },
            { label: 'Sonar', values: ['Multibeam'] },
            { label: 'Power', values: ['24V 200Wh LiFePO4'] },
            { label: 'Comm', values: ['RF 15 km, 4G'] },
            { label: 'Software', values: ['ROS 2 (Humble), Ubuntu 22.04'] }
        ],
        actions: [
            { label: 'Mechanical', class: 'btn-outline', link: 'mechanical-asv-2025' },
            { label: 'Electrical', class: 'btn-outline', link: 'electrical-asv-2025' },
            { label: 'Software', class: 'btn-outline', link: 'software-asv-2025' },
            { label: 'Paper', class: 'btn-solid', link: 'paper-asv-2025' }
        ]
    },
    'asv-2024': {
        title: 'Sagara Pandhalungan ASV 2024',
        image: 'https://picsum.photos/seed/asv24detail/800/500',
        specs: [
            { label: 'Dimensions', values: ['Length: 1.4 m', 'Width: 0.7 m'] },
            { label: 'Mass', values: ['35 kg (Air)'] },
            { label: 'Top Speed', values: ['2.8 m/s'] },
            { label: 'DOF', values: ['4'] },
            { label: 'Compute', values: ['Intel NUC i5'] },
            { label: 'Propulsion', values: ['2x Jet Drives'] },
            { label: 'Navigation', values: ['GPS, IMU'] },
            { label: 'Vision', values: ['1080p (Forward)'] },
            { label: 'Sonar', values: ['Side-scan'] },
            { label: 'Power', values: ['24V 150Wh LiFePO4'] },
            { label: 'Comm', values: ['RF 10 km'] },
            { label: 'Software', values: ['ROS 2 (Foxy), Ubuntu 20.04'] }
        ],
        actions: [
            { label: 'Mechanical', class: 'btn-outline', link: 'mechanical-asv-2024' },
            { label: 'Electrical', class: 'btn-outline', link: 'electrical-asv-2024' },
            { label: 'Software', class: 'btn-outline', link: 'software-asv-2024' },
            { label: 'Paper', class: 'btn-solid', link: 'paper-asv-2024' }
        ]
    }
};

// ----- SUB-DETAIL -----
const subDetailData = {
    'mechanical-auv-30': {
        title: 'UGER AUV 3.0 — Mechanical Structure',
        sections: [
            {
                image: 'https://picsum.photos/seed/mec1/600/400',
                heading: 'Refurbished Structure',
                text: 'Setelah 4 tahun beroperasi, kami merombak lambung, pelampung, dan rangka karena mulai menunjukkan korosi. Penetrator tambahan dirancang untuk integrasi komponen baru seperti sonar mutakhir dan sistem komunikasi optik.'
            },
            {
                image: 'https://picsum.photos/seed/mec2/600/400',
                heading: 'Jaw-Dropping Markers',
                text: 'Dropper kami dirancang ulang dengan servo bawah air baru yang tahan tekanan hingga 300m. Marker berbentuk seperti laras memungkinkan sistem indeks gaya gripper, lebih mudah dirawat dan dipasang di ruang terbatas.'
            },
            {
                image: 'https://picsum.photos/seed/mec3/600/400',
                heading: 'Firing from Range',
                text: 'Geometri torpedo disempurnakan dengan CFD untuk stabilitas dan efisiensi. Desain baru mengurangi drag 20% dan meningkatkan jarak tempuh hingga 50% dibanding generasi sebelumnya.'
            },
            {
                image: 'https://picsum.photos/seed/mec4/600/400',
                heading: 'Adaptive Gripper',
                text: 'Kami menyempurnakan ujung lunak gripper dengan struktur Finray dari TPU. Mekanisme 4-bar linkage memberikan jangkauan lebih panjang dan area cengkeraman konstan di setiap bukaan.'
            }
        ]
    },
    'mechanical-auv-20': {
        title: 'UGER AUV 2.0 — Mechanical Structure',
        sections: [
            {
                image: 'https://picsum.photos/seed/mec20a/600/400',
                heading: 'Hull Design',
                text: 'Desain lambung AUV 2.0 menggunakan material aluminium anodized dengan ketebalan 5mm, mampu menahan tekanan hingga 200m. Bentuk streamline dioptimalkan untuk mengurangi hambatan.'
            },
            {
                image: 'https://picsum.photos/seed/mec20b/600/400',
                heading: 'Thruster Configuration',
                text: 'Konfigurasi 6 thruster (4 horizontal, 2 vertikal) memberikan manuverabilitas tinggi. Setiap thruster dilengkapi dengan ESC water-cooled untuk performa optimal.'
            }
        ]
    },
    'electrical-auv-30': {
        title: 'UGER AUV 3.0 — Electrical Architecture',
        sections: [
            {
                image: 'https://picsum.photos/seed/elec1/600/400',
                heading: 'Power Distribution',
                text: 'Sistem distribusi daya menggunakan custom PCB dengan 12V, 5V, dan 3.3V rails. Dilengkapi dengan sensor arus dan tegangan untuk monitoring real-time.'
            },
            {
                image: 'https://picsum.photos/seed/elec2/600/400',
                heading: 'Communication Bus',
                text: 'Menggunakan CAN bus untuk komunikasi antar modul dengan kecepatan 1Mbps. Juga dilengkapi dengan Ethernet untuk transfer data berkecepatan tinggi dari kamera dan sonar.'
            }
        ]
    },
    'software-auv-30': {
        title: 'UGER AUV 3.0 — Software System',
        sections: [
            {
                image: 'https://picsum.photos/seed/sw1/600/400',
                heading: 'ROS 2 Architecture',
                text: 'Menggunakan ROS 2 Humble dengan node-node terdistribusi untuk kontrol, navigasi, sensor fusion, dan visi. Semua node berkomunikasi via DDS dengan latensi rendah.'
            },
            {
                image: 'https://picsum.photos/seed/sw2/600/400',
                heading: 'AI Navigation',
                text: 'Sistem navigasi menggunakan gabungan SLAM (ORB-SLAM3) dan pembelajaran mendalam untuk deteksi objek bawah air. Model AI dilatih dengan dataset ribuan gambar bawah laut.'
            }
        ]
    },
    'paper-auv-30': {
        title: 'UGER AUV 3.0 — Technical Paper',
        sections: [
            {
                image: 'https://picsum.photos/seed/paper1/600/400',
                heading: 'Design Methodology',
                text: 'Makalah teknis ini membahas metodologi desain, simulasi CFD, dan hasil uji coba lapangan AUV 3.0. Juga dibahas tentang pemilihan material dan strategi kontrol.'
            },
            {
                image: 'https://picsum.photos/seed/paper2/600/400',
                heading: 'Experimental Results',
                text: 'Hasil uji coba menunjukkan peningkatan signifikan dalam hal endurance (10 jam), kedalaman operasi (300m), dan akurasi navigasi (error < 0.5m).'
            }
        ]
    }
};

// ----- TIM -----
const coreTeam = [
    { name: "Gramandha Wega Igniyato", role: "Pembina", expertise: "Robotika bawah air, sistem hidrolik", photo: "https://picsum.photos/seed/leader/200/200" },
    { name: "Wahyu", role: "Lead UGER HYDROTECH 2025", expertise: "Sistem kontrol dan navigasi", photo: "https://picsum.photos/seed/lead1/200/200" },
    { name: "Antariksa", role: "Lead UGER HYDROTECH 2026", expertise: "Desain mekanikal dan struktur", photo: "https://picsum.photos/seed/lead2/200/200" },
    { name: "Budi Santoso", role: "Lead ROV Engineer", expertise: "Robotika bawah air, embedded system", photo: "https://picsum.photos/seed/team3/200/200" },
    { name: "Citra Dewi", role: "Lead AUV Engineer", expertise: "Navigasi otonom, sensor fusion", photo: "https://picsum.photos/seed/team4/200/200" },
    { name: "Dedi Kurniawan", role: "Lead ASV Engineer", expertise: "Sistem komunikasi, kontrol permukaan", photo: "https://picsum.photos/seed/team5/200/200" },
    { name: "Eka Pratiwi", role: "Software Lead", expertise: "ROS, AI, computer vision", photo: "https://picsum.photos/seed/team6/200/200" },
    { name: "Fajar Nugroho", role: "Electrical Lead", expertise: "Power distribution, PCB design", photo: "https://picsum.photos/seed/team7/200/200" }
];