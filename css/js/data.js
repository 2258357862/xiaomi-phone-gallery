// 手机数据
const phones = [
    {
        id: 'xiaomi-14-ultra',
        name: 'Xiaomi 14 Ultra',
        series: 'Xiaomi',
        imageUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1708387194.10087325.png',
        releaseDate: '2024年2月',
        dimensions: '161.4 × 75.3 × 9.2 mm',
        weight: '219.8 g',
        colors: ['黑色', '白色', '蓝色'],
        screen: {
            size: '6.73英寸',
            resolution: '3200 × 1440',
            refreshRate: '120Hz 自适应',
            type: 'AMOLED LTPO',
            brightness: '3000 nits峰值'
        },
        camera: {
            rear: ['5000万像素主摄(光学防抖)', '5000万像素超广角', '5000万像素人像', '5000万像素长焦'],
            front: '3200万像素',
            videoCapabilities: '8K@24fps, 4K@60fps'
        },
        performance: {
            processor: '骁龙8 Gen 3',
            ram: [12, 16],
            storage: [256, 512, 1024],
            battery: 5000,
            charging: '90W有线充电, 50W无线充电'
        },
        os: 'HyperOS 1.0',
        connectivity: {
            network: '5G',
            sim: '双SIM卡'
        },
        protection: 'IP68防水防尘',
        biometrics: {
            fingerprint: true,
            faceUnlock: true
        }
    },
    {
        id: 'xiaomi-14',
        name: 'Xiaomi 14',
        series: 'Xiaomi',
        imageUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1697433278.09439672.png',
        releaseDate: '2023年10月',
        dimensions: '152.8 × 71.5 × 8.2 mm',
        weight: '193 g',
        colors: ['黑色', '白色', '绿色', '蓝色'],
        screen: {
            size: '6.36英寸',
            resolution: '2670 × 1200',
            refreshRate: '120Hz',
            type: 'OLED',
            brightness: '3000 nits峰值'
        },
        camera: {
            rear: ['5000万像素主摄(光学防抖)', '5000万像素超广角', '5000万像素长焦'],
            front: '3200万像素',
            videoCapabilities: '8K@24fps, 4K@60fps'
        },
        performance: {
            processor: '骁龙8 Gen 3',
            ram: [8, 12, 16],
            storage: [256, 512, 1024],
            battery: 4610,
            charging: '90W有线充电, 50W无线充电'
        },
        os: 'HyperOS 1.0',
        connectivity: {
            network: '5G',
            sim: '双SIM卡'
        },
        protection: 'IP68防水防尘',
        biometrics: {
            fingerprint: true,
            faceUnlock: true
        }
    },
    {
        id: 'redmi-k70',
        name: 'Redmi K70',
        series: 'Redmi',
        imageUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1701246172.80815970.png',
        releaseDate: '2023年11月',
        dimensions: '160.9 × 74.3 × 8.3 mm',
        weight: '204 g',
        colors: ['黑色', '白色', '蓝色', '紫色'],
        screen: {
            size: '6.67英寸',
            resolution: '2712 × 1220',
            refreshRate: '120Hz',
            type: 'OLED',
            brightness: '4000 nits峰值'
        },
        camera: {
            rear: ['5000万像素主摄(光学防抖)', '800万像素超广角', '200万像素微距'],
            front: '1600万像素',
            videoCapabilities: '4K@30fps'
        },
        performance: {
            processor: '骁龙8 Gen 2',
            ram: [8, 12, 16],
            storage: [128, 256, 512, 1024],
            battery: 5000,
            charging: '120W有线充电'
        },
        os: 'HyperOS 1.0',
        connectivity: {
            network: '5G',
            sim: '双SIM卡'
        },
        protection: 'IP64防尘防泼溅',
        biometrics: {
            fingerprint: true,
            faceUnlock: true
        }
    },
    {
        id: 'poco-f6',
        name: 'POCO F6',
        series: 'POCO',
        imageUrl: 'https://i02.appmifile.com/510_operator_sg/22/05/2024/c284ffa22eb9832485cede86a2982bae.png',
        releaseDate: '2024年5月',
        dimensions: '160.5 × 74.4 × 8.3 mm',
        weight: '179 g',
        colors: ['黑色', '白色', '绿色'],
        screen: {
            size: '6.67英寸',
            resolution: '2400 × 1080',
            refreshRate: '120Hz',
            type: 'AMOLED',
            brightness: '2400 nits峰值'
        },
        camera: {
            rear: ['5000万像素主摄(光学防抖)', '800万像素超广角'],
            front: '1600万像素',
            videoCapabilities: '4K@30fps'
        },
        performance: {
            processor: '骁龙8 Gen 2',
            ram: [8, 12],
            storage: [256, 512],
            battery: 4500,
            charging: '90W有线充电'
        },
        os: 'HyperOS 1.0',
        connectivity: {
            network: '5G',
            sim: '双SIM卡'
        },
        protection: 'IP54防尘防泼溅',
        biometrics: {
            fingerprint: true,
            faceUnlock: true
        }
    },
    {
        id: 'xiaomi-mix-fold-3',
        name: 'Xiaomi MIX Fold 3',
        series: 'MIX',
        imageUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1691991510.83798648.png',
        releaseDate: '2023年8月',
        dimensions: '161.2 × 143.2 × 5.3 mm (展开), 161.2 × 73.0 × 10.9 mm (折叠)',
        weight: '259 g',
        colors: ['黑色', '金色'],
        screen: {
            size: '8.03英寸 (内屏), 6.56英寸 (外屏)',
            resolution: '2160 × 1916 (内屏), 2520 × 1080 (外屏)',
            refreshRate: '120Hz',
            type: 'OLED',
            brightness: '2600 nits峰值'
        },
        camera: {
            rear: ['5000万像素主摄', '1200万像素超广角', '1000万像素人像长焦', '1000万像素潜望长焦'],
            front: ['2000万像素 (内屏)', '2000万像素 (外屏)'],
            videoCapabilities: '8K@30fps, 4K@60fps'
        },
        performance: {
            processor: '骁龙8 Gen 2',
            ram: [12, 16],
            storage: [256, 512, 1024],
            battery: 4800,
            charging: '67W有线充电'
        },
        os: 'MIUI 14',
        connectivity: {
            network: '5G',
            sim: '双SIM卡'
        },
        protection: 'IPX8防水',
        biometrics: {
            fingerprint: true,
            faceUnlock: true
        }
    },
    {
        id: 'redmi-note-13-pro-plus',
        name: 'Redmi Note 13 Pro+',
        series: 'Redmi Note',
        imageUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1694422180.86528297.png',
        releaseDate: '2023年9月',
        dimensions: '161.4 × 74.2 × 9.0 mm',
        weight: '204.5 g',
        colors: ['黑色', '白色', '紫色'],
        screen: {
            size: '6.67英寸',
            resolution: '2712 × 1220',
            refreshRate: '120Hz',
            type: 'AMOLED',
            brightness: '1800 nits峰值'
        },
        camera: {
            rear: ['2亿像素主摄(光学防抖)', '800万像素超广角', '200万像素微距'],
            front: '1600万像素',
            videoCapabilities: '4K@30fps'
        },
        performance: {
            processor: '天玑7200 Ultra',
            ram: [8, 12],
            storage: [256, 512],
            battery: 5000,
            charging: '120W有线充电'
        },
        os: 'MIUI 14',
        connectivity: {
            network: '5G',
            sim: '双SIM卡'
        },
        protection: 'IP68防水防尘',
        biometrics: {
            fingerprint: true,
            faceUnlock: true
        }
    },
    {
        id: 'xiaomi-civi-3',
        name: 'Xiaomi CIVI 3',
        series: 'CIVI',
        imageUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1713859764.32033226.png',
        releaseDate: '2024年4月',
        dimensions: '158.04 × 72.34 × 7.56 mm',
        weight: '177 g',
        colors: ['白色', '紫色', '粉色', '绿色'],
        screen: {
            size: '6.55英寸',
            resolution: '2400 × 1080',
            refreshRate: '120Hz',
            type: 'AMOLED',
            brightness: '1500 nits峰值'
        },
        camera: {
            rear: ['5000万像素主摄(光学防抖)', '800万像素超广角', '200万像素微距'],
            front: ['3200万像素 + 3200万像素双摄'],
            videoCapabilities: '4K@30fps'
        },
        performance: {
            processor: '天玑8200 Ultra',
            ram: [12],
            storage: [256, 512],
            battery: 4500,
            charging: '67W有线充电'
        },
        os: 'HyperOS 1.0',
        connectivity: {
            network: '5G',
            sim: '双SIM卡'
        },
        protection: 'IP53防尘防泼溅',
        biometrics: {
            fingerprint: true,
            faceUnlock: true
        }
    }
];
