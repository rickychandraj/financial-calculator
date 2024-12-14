import React from "react";

export const MAPPINGS = {
    "mbr9120": "Economizer",
    "mbr4221": "Diligent",
    "mbr1291": "Binger",
    "mbr2994": "Orderly",
    "mbr2934": "Can't Control Finance",
    "mbr1129": "Planner",
    "mbr4812": "Ups and Downs",
}

export const REVERSE_MAPPINGS = {
    "Economizer": "mbr9120",
    "Diligent": "mbr4221",
    "Binger": "mbr1291",
    "Orderly": "mbr2994",
    "Can't Control Finance": "mbr2934",
    "Planner": "mbr1129",
    "Ups and Downs": "mbr4812",
}

export const DESCRIPTION = {
    "Economizer": "Mengelola anggaran dengan hati-hati, tetapi sering terbebani oleh utang dan memiliki sedikit tabungan",
    "Diligent": "Berusaha keras untuk menghemat dan menghasilkan uang, cenderung tidak berutang.",
    "Binger": "Suka belanja impulsif tanpa pengelolaan keuangan yang baik, tetapi umumnya tidak memiliki banyak utang.",
    "Orderly": "Sangat terorganisir dalam pengelolaan keuangan, sering memiliki tabungan, tetapi juga suka belanja hal-hal trendi.",
    "Can't Control Finance": "Berusaha mengelola keuangan tetapi sering gagal, cenderung memiliki utang",
    "Planner": "Terencana dan hemat, aktif menabung dan bebas dari utang.",
    "Ups and Downs": "Perpaduan antara perilaku keuangan positif dan negatif, mampu menghemat tetapi juga belanja impulsif.",
}

export const MOST_MATCH_MAPPINGS = {
    "Economizer": (
        <ol className="list-disc space-y-2">
            <li className="flex">1. Economizer</li>
            <li className="flex">2. Orderly</li>
            <li className="flex">3. Planner</li>
        </ol>
    ),
    "Diligent": (
        <ol className="list-disc space-y-2">
            <li className="flex">1. Diligent</li>
            <li className="flex">2. Planner</li>
            <li className="flex">3. Orderly</li>
        </ol>
    ),
    "Binger": (
        <ol className="list-disc space-y-2">
            <li className="flex">1. Planner</li>
            <li className="flex">2. Orderly</li>
            <li className="flex">3. Diligent</li>
        </ol>
    ),
    "Orderly": (
        <ol className="list-disc space-y-2">
            <li className="flex">1. Economizer</li>
            <li className="flex">2. Orderly</li>
            <li className="flex">3. Planner</li>
        </ol>
    ),
    "Can't Control Finance": (
        <ol className="list-disc space-y-2">
            <li className="flex">1. Planner</li>
            <li className="flex">2. Orderly</li>
            <li className="flex">3. Diligent</li>
        </ol>
    ),
    "Planner": (
        <ol className="list-disc space-y-2">
            <li className="flex">1. Planner</li>
            <li className="flex">2. Diligent</li>
            <li className="flex">3. Orderly</li>
        </ol>
    ),
    "Ups and Downs": (
        <ol className="list-disc space-y-2">
            <li className="flex">1. Planner</li>
            <li className="flex">2. Orderly</li>
            <li className="flex">3. Diligent</li>
        </ol>
    ),
}

export const SIMULATION_RESULT = {
    "Economizer x Economizer": {
        lifestyle: "Pasangan ini cenderung sangat hemat dan suka menghindari pengeluaran yang tidak\n" +
            "perlu. Keduanya mungkin lebih suka memasak sendiri, membawa bekal, dan mencari\n" +
            "cara-cara kreatif untuk mengurangi biaya hidup. Mereka juga berdua akan sangat\n" +
            "memperhatikan setiap transaksi finansial dan mungkin sangat jarang membeli barang-\n" +
            "barang yang tidak penting.",
        moneyManagement: "Karena keduanya memiliki pola pikir yang sama dalam menghemat uang, mereka\n" +
            "akan merasa nyaman dengan cara mereka mengelola anggaran rumah tangga,\n" +
            "menghindari utang, dan lebih memilih untuk menyimpan uang daripada\n" +
            "\n" +
            "menghabiskannya. Mereka mungkin juga akan lebih sering mencari penawaran\n" +
            "diskon, menggunakan kupon, dan melakukan perbandingan harga dengan sangat teliti.",
        futureTarget: "Pasangan ini memiliki tujuan yang sangat selaras, seperti membangun tabungan yang\n" +
            "cukup untuk masa depan, membeli rumah tanpa harus berutang, atau memiliki dana\n" +
            "darurat yang solid. Mereka akan berfokus pada investasi yang aman dan cenderung\n" +
            "menghindari risiko.",
    },
    "Economizer x Diligent": {
        lifestyle: "Si Economizer sangat hemat, sering menahan diri untuk membeli sesuatu yang tidak\n" +
            "diperlukan, dan cenderung fokus pada penghematan jangka pendek. Si Diligent, di sisi\n" +
            "lain, lebih berorientasi pada kerja keras untuk mencapai stabilitas keuangan, seperti\n" +
            "mengambil pekerjaan tambahan untuk menambah penghasilan.\n" +
            "Dalam situasi sehari-hari, si Economizer mungkin lebih memilih memasak sendiri\n" +
            "daripada makan di luar, sedangkan si Diligent mungkin rela bekerja ekstra untuk bisa\n" +
            "sesekali makan di restoran bersama.",
        moneyManagement: "Keduanya berpotensi membuat keputusan finansial yang bertujuan sama (menghindari\n" +
            "utang dan memiliki tabungan). Namun, pendekatan mereka berbeda: si Economizer\n" +
            "ingin menghemat dengan mengurangi pengeluaran, sementara si Diligent lebih fokus\n" +
            "pada meningkatkan penghasilan.",
        futureTarget: "Keduanya sepakat pentingnya stabilitas finansial, tetapi si Economizer mungkin lebih\n" +
            "lambat mencapai target karena lebih fokus mengurangi pengeluaran daripada mencari\n" +
            "sumber pendapatan tambahan, yang berlawanan dengan si Diligent.",
    },
    "Economizer x Binger": {
        lifestyle: "Si Economizer sangat fokus pada penghematan dan tidak suka membuang-buang\n" +
            "uang. Mereka cenderung menghindari pengeluaran yang tidak perlu, selalu membuat\n" +
            "anggaran, dan lebih memilih gaya hidup yang sederhana dan hemat. Di sisi lain, si\n" +
            "Binger lebih impulsif dalam pengeluaran, sering kali membeli barang yang tidak\n" +
            "direncanakan atau mengikuti keinginan sesaat. Mereka menikmati membeli hal-hal\n" +
            "yang mereka inginkan, kadang tanpa pertimbangan panjang.",
        moneyManagement: "Si Economizer akan sangat fokus pada penghematan dan pengelolaan uang dengan\n" +
            "ketat. Mereka mungkin merasa tertekan atau kesal jika harus melihat si Binger yang\n" +
            "tampak &quot;boros&quot; dan tidak memperhatikan anggaran. Sebaliknya, si Binger mungkin\n" +
            "merasa tertekan oleh kebiasaan hemat si Economizer dan merasa terlalu banyak\n" +
            "mengorbankan kesenangan.",
        futureTarget: "Keduanya mungkin memiliki tujuan keuangan yang sama, seperti membeli rumah\n" +
            "atau menabung untuk masa depan. Namun, si Economizer cenderung fokus pada\n" +
            "penahanan pengeluaran, sementara si Binger cenderung berfokus pada menikmati\n" +
            "hidup saat ini dan bisa jadi lebih santai dalam pengelolaan tabungan.",
    },
    "Economizer x Orderly": {
        lifestyle: "Si Economizer sangat fokus pada penghematan dan pengurangan pengeluaran.\n" +
            "Mereka lebih suka mencari cara untuk mengurangi biaya, seperti memasak di rumah\n" +
            "daripada makan di luar dan mencari potongan harga. Di sisi lain, si Orderly memiliki\n" +
            "pendekatan yang sangat terorganisir terhadap keuangan. Mereka membuat anggaran\n" +
            "dengan teliti, membandingkan harga sebelum membeli, dan selalu menjaga\n" +
            "pengeluarannya tetap terkendali.",
        moneyManagement: "Kedua pasangan ini memiliki pendekatan yang sangat terstruktur terhadap keuangan,\n" +
            "tetapi dari dua sudut pandang yang sedikit berbeda. Si Economizer lebih menekankan\n" +
            "penghematan, sementara si Orderly lebih cenderung pada kontrol yang terperinci dan\n" +
            "perencanaan yang matang. Mereka akan merasa nyaman karena keduanya berorientasi\n" +
            "pada pencapaian stabilitas finansial, meskipun mungkin terkadang berbeda dalam cara\n" +
            "mereka mencapai tujuan tersebut.",
        futureTarget: "Si Economizer mungkin lebih terfokus pada tabungan cepat dan pengurangan\n" +
            "pengeluaran jangka pendek, sementara si Orderly mungkin lebih sabar dan berencana\n" +
            "lebih jangka panjang, seperti menyiapkan dana pensiun dengan cara yang terencana.\n" +
            "Meskipun keduanya memiliki tujuan yang sama, pendekatan mereka terhadap\n" +
            "pencapaian tersebut bisa sedikit berbeda.",
    },
    "Economizer x Can't Control Finance": {
        lifestyle: "Si Economizer sangat fokus pada penghematan dan pengelolaan keuangan yang\n" +
            "ketat. Mereka selalu berusaha untuk tidak mengeluarkan uang yang tidak perlu dan\n" +
            "lebih memilih gaya hidup sederhana, seperti memasak sendiri dan menghindari\n" +
            "pengeluaran besar. Di sisi lain, si Cannot Control Finances kesulitan dalam\n" +
            "mengelola uang mereka. Mereka sering kali boros, bahkan jika mereka tahu itu bisa\n" +
            "berdampak buruk pada keuangan mereka. Mereka mungkin lebih suka memanjakan\n" +
            "diri dengan membeli barang atau menghabiskan uang saat ada penawaran atau\n" +
            "keinginan mendalam untuk kesenangan sesaat.",
        moneyManagement: "Si Economizer akan merasa sangat tertekan melihat si Cannot Control Finances\n" +
            "yang sering kali melampaui batas anggaran atau membeli barang-barang yang tidak\n" +
            "diperlukan. Si Cannot Control Finances mungkin merasa sulit untuk menghargai\n" +
            "pendekatan hemat si Economizer dan sering kali merasa cemas atau frustrasi ketika\n" +
            "merasa &quot;terbatasi&quot; oleh kebiasaan pengelolaan keuangan yang ketat.",
        futureTarget: "Si Economizer akan cenderung menetapkan tujuan finansial jangka panjang yang\n" +
            "melibatkan tabungan dan investasi yang hati-hati. Si Cannot Control Finances,\n" +
            "sebaliknya, mungkin tidak terlalu fokus pada perencanaan keuangan jangka panjang\n" +
            "dan lebih berorientasi pada kepuasan jangka pendek, seperti memenuhi kebutuhan\n" +
            "atau keinginan saat itu juga.",
    },
    "Economizer x Planner": {
        lifestyle: "Si Economizer cenderung fokus pada penghematan dan pengelolaan keuangan yang\n" +
            "ketat. Mereka sangat berhati-hati dalam membuat pengeluaran dan lebih memilih\n" +
            "untuk menunda atau mengurangi pembelian barang-barang yang tidak diperlukan.\n" +
            "Sementara itu, si Planner memiliki pendekatan yang lebih sistematis terhadap\n" +
            "keuangan. Mereka cenderung merencanakan keuangan dengan sangat teliti,\n" +
            "menetapkan anggaran untuk berbagai kategori, dan memiliki rencana jangka panjang\n" +
            "yang jelas, seperti dana pensiun atau tabungan untuk membeli rumah.",
        moneyManagement: "Keduanya sangat peduli dengan keuangan, tetapi dengan pendekatan yang sedikit\n" +
            "berbeda. Si Economizer berfokus pada penghematan jangka pendek dan menekan\n" +
            "pengeluaran sebanyak mungkin. Sementara si Planner lebih menekankan\n" +
            "perencanaan yang matang untuk tujuan jangka panjang dan pengelolaan yang lebih\n" +
            "terstruktur. Mereka berdua mungkin saling melengkapi dalam banyak hal, dengan si\n" +
            "Economizer memastikan bahwa pengeluaran tidak membengkak, dan si Planner\n" +
            "memastikan bahwa ada tujuan jangka panjang yang jelas.",
        futureTarget: "Si Economizer mungkin lebih fokus pada pencapaian keuangan yang cepat, seperti\n" +
            "menghindari utang dan membangun dana darurat yang cepat. Si Planner mungkin\n" +
            "lebih sabar dalam merencanakan pengeluaran dan tabungan, fokus pada tujuan jangka\n" +
            "panjang seperti investasi, pembelian properti, atau pensiun.",
    },
    "Economizer x Ups and Downs": {
        lifestyle: "Si Economizer sangat fokus pada penghematan dan pengelolaan keuangan yang\n" +
            "ketat. Mereka cenderung menghindari pengeluaran yang tidak perlu dan lebih\n" +
            "memilih gaya hidup yang sederhana serta hemat. Di sisi lain, si Ups and Downs\n" +
            "memiliki pola keuangan yang lebih fluktuatif. Mereka bisa sangat hemat di satu\n" +
            "waktu, tetapi kemudian impulsif dan cenderung boros di waktu lain, mengikuti\n" +
            "perasaan atau keinginan sesaat. Si Ups and Downs mungkin cenderung menikmati\n" +
            "pengeluaran pada saat mereka merasa &quot;mood&quot; atau setelah mendapatkan hasil yang\n" +
            "baik dalam pekerjaan atau kehidupan pribadi.",
        moneyManagement: "Si Economizer akan merasa tertekan melihat si Ups and Downs yang menghabiskan\n" +
            "uang secara impulsif, terutama jika pengeluaran tersebut tidak direncanakan dan\n" +
            "bertentangan dengan anggaran yang telah mereka buat. Sebaliknya, si Ups and\n" +
            "Downs mungkin merasa si Economizer terlalu kaku dalam mengelola uang dan tidak\n" +
            "cukup memberi ruang untuk menikmati kehidupan atau pengalaman yang\n" +
            "menyenangkan.",
        futureTarget: "Si Economizer akan sangat fokus pada penghematan jangka panjang, seperti\n" +
            "menabung untuk masa depan dan menghindari utang. Sementara itu, si Ups and\n" +
            "Downs mungkin lebih cenderung berfokus pada kepuasan sesaat, tetapi mereka bisa\n" +
            "merasa tertekan jika mereka tidak dapat mencapai tujuan jangka panjang. Si\n" +
            "Economizer cenderung merasa lebih tenang ketika mereka memiliki tabungan dan\n" +
            "dana darurat yang memadai, sementara si Ups and Downs bisa merasa lebih rileks\n" +
            "jika mereka mengikuti arus dan menyesuaikan pengeluaran mereka dengan keadaan.",
    },
    "Diligent x Economizer": {
        lifestyle: "Si Diligent sangat fokus pada kerja keras dan disiplin dalam mengelola keuangan. Mereka cenderung mengambil pekerjaan tambahan atau melakukan usaha ekstra untuk menambah pendapatan dan menghindari utang. Sementara itu, si Economizer lebih fokus pada penghematan dan menghindari pengeluaran yang tidak perlu. Mereka akan berusaha untuk memaksimalkan penghematan dalam kehidupan sehari-hari, seperti memasak di rumah dan mencari diskon.",
        moneyManagement: "Keduanya memiliki kesamaan dalam hal tujuan keuangan: mereka ingin menghindari utang dan membangun stabilitas finansial. Diligent cenderung berusaha dengan lebih aktif meningkatkan pendapatan mereka, sementara Economizer lebih cermat dalam mengurangi pengeluaran. Ini berarti mereka dapat saling melengkapi—si Economizer bisa mengelola pengeluaran dengan hati-hati, sementara si Diligent akan bekerja lebih keras untuk meningkatkan pendapatan.",
        futureTarget: "Baik Diligent maupun Economizer berfokus pada tujuan jangka panjang seperti tabungan, investasi, dan stabilitas keuangan. Diligent akan berfokus pada mencari cara-cara untuk meningkatkan pendapatan, sementara Economizer akan memastikan bahwa pengeluaran tetap terkendali. Mereka memiliki tujuan yang sangat mirip, tetapi pendekatannya sedikit berbeda."
    },

    "Diligent x Diligent": {
        lifestyle: "Kedua pasangan ini akan sangat fokus pada peningkatan pendapatan dan perencanaan jangka panjang. Mereka akan sering membicarakan tujuan keuangan bersama, seperti menabung untuk membeli rumah, pensiun, atau investasi lainnya. Gaya hidup mereka mungkin cukup terstruktur dan terkendali, dengan rutinitas yang jelas, seperti membuat anggaran bulanan, mengurangi pengeluaran yang tidak perlu, dan mencari peluang pendapatan tambahan.",
        moneyManagement: "Si Diligent pertama akan selalu mengusahakan sumber pendapatan tambahan atau bekerja lebih keras untuk mencapai tujuan keuangan, sementara pasangannya yang juga Diligent akan mengelola pengeluaran dan tabungan dengan sangat hati-hati. Mereka berdua cenderung menghindari utang, merencanakan pengeluaran dengan rinci, dan sering mengevaluasi kemajuan finansial mereka.",
        futureTarget: "Tujuan masa depan mereka kemungkinan besar sejalan, seperti menabung untuk jangka panjang, berinvestasi, atau mencapai kebebasan finansial. Mereka akan merencanakan kehidupan bersama yang stabil dan nyaman, dengan mempersiapkan dana darurat, pendidikan anak (jika ada), dan kebutuhan pensiun."
    },

    "Diligent x Binger": {
        lifestyle: "Si Diligent sangat fokus pada kerja keras dan perencanaan keuangan yang matang. Mereka menetapkan anggaran yang ketat, berusaha menambah pendapatan, dan selalu menghindari pengeluaran yang tidak perlu. Si Binger, di sisi lain, cenderung lebih impulsif dalam pengeluaran, sering kali membeli barang-barang yang tidak direncanakan, dan lebih menikmati kenikmatan sesaat daripada menunda kepuasan untuk tujuan jangka panjang.",
        moneyManagement: "Si Diligent selalu merencanakan anggaran dan menabung dengan hati-hati untuk mencapai tujuan keuangan jangka panjang. Sebaliknya, si Binger lebih sering menghabiskan uang tanpa perencanaan, terkadang hanya karena keinginan sesaat atau tekanan emosional. Ini bisa menciptakan ketegangan jika si Binger tidak menghargai pentingnya perencanaan keuangan jangka panjang.",
        futureTarget: "Si Diligent akan lebih fokus pada pencapaian tujuan jangka panjang, seperti menabung untuk pensiun atau membeli rumah tanpa utang, sementara si Binger cenderung menikmati pengalaman hidup sekarang tanpa banyak berpikir tentang masa depan. Meskipun mereka mungkin memiliki tujuan yang sama, cara mereka mencapainya akan sangat berbeda."
    },

    "Diligent x Orderly": {
        lifestyle: "Si Diligent sangat fokus pada kerja keras dan pengelolaan keuangan yang disiplin, selalu berusaha menambah pendapatan dan menghindari utang. Mereka berorientasi pada tujuan jangka panjang dan seringkali mengambil langkah-langkah aktif untuk mencapai tujuan finansial mereka, seperti mencari peluang pendapatan tambahan. Di sisi lain, si Orderly memiliki pendekatan yang sangat terstruktur dan terorganisir dalam mengelola keuangan. Mereka selalu membuat anggaran yang teliti, membandingkan harga sebelum membeli, dan cenderung mengikuti aturan ketat dalam pengelolaan uang.",
        moneyManagement: "Keduanya sangat fokus pada pengelolaan uang yang baik, tetapi pendekatannya sedikit berbeda. Si Diligent akan lebih fokus pada peningkatan pendapatan dan mencari peluang baru untuk menambah uang, sementara si Orderly lebih cenderung pada disiplin dalam merencanakan dan mengelola setiap pengeluaran dengan cermat. Mereka cenderung merasa nyaman dengan perencanaan yang matang, namun bisa mengalami ketegangan jika terlalu kaku dalam mengatur anggaran.",
        futureTarget: "Si Diligent cenderung melihat masa depan dalam konteks mencapai tujuan keuangan melalui kerja keras dan peluang baru. Mereka ingin meraih kemajuan finansial melalui berbagai usaha dan investasi. Sementara itu, si Orderly lebih cenderung menetapkan tujuan finansial yang jelas dan terstruktur dengan rencana yang lebih konservatif, menghindari risiko berlebihan dan mengandalkan pengelolaan uang yang hati-hati. Mereka memiliki tujuan yang serupa, tetapi cara untuk mencapainya bisa sangat berbeda."
    },

    "Diligent x Cannot Control Finances": {
        lifestyle: "Si Diligent sangat fokus pada kerja keras dan perencanaan keuangan yang matang. Mereka memiliki anggaran yang ketat, bekerja keras untuk meningkatkan pendapatan, dan selalu berusaha menghindari pengeluaran yang tidak perlu. Sementara itu, si Cannot Control Finances sering kali kesulitan dalam mengelola uang mereka, dengan kecenderungan menghabiskan uang secara impulsif, bahkan ketika mereka tahu bahwa itu tidak sesuai dengan anggaran atau tujuan keuangan mereka.",
        moneyManagement: "Si Diligent sangat terorganisir dalam pengelolaan keuangan dan memiliki kontrol yang baik atas pengeluaran mereka. Mereka menetapkan anggaran, menabung, dan berusaha menambah pendapatan untuk mencapai tujuan jangka panjang. Sebaliknya, si Cannot Control Finances sering kali mengabaikan pengelolaan keuangan yang terstruktur, membuat keputusan keuangan yang impulsif, dan kesulitan dalam mengontrol pengeluaran mereka. Ini dapat menyebabkan ketegangan antara kedua pihak, terutama jika Diligent merasa bahwa si Cannot Control Finances tidak cukup serius dalam hal pengelolaan uang.",
        futureTarget: "Si Diligent memiliki tujuan jangka panjang yang jelas, seperti membeli rumah, menabung untuk pensiun, atau membangun dana darurat, dan mereka bekerja keras untuk mencapainya. Si Cannot Control Finances, di sisi lain, mungkin lebih berfokus pada kepuasan sesaat dan mengabaikan perencanaan keuangan jangka panjang. Meskipun keduanya mungkin memiliki tujuan yang serupa, cara mereka mencapainya bisa sangat berbeda."
    },

    "Diligent x Planner": {
        lifestyle: "Si Diligent sangat fokus pada kerja keras dan perencanaan keuangan yang matang. Mereka selalu mencari cara untuk meningkatkan pendapatan, dan biasanya bekerja lebih keras untuk mencapai tujuan keuangan jangka panjang, seperti menabung untuk rumah atau pensiun. Di sisi lain, si Planner memiliki pendekatan yang sangat sistematis dalam merencanakan keuangan. Mereka cenderung mengatur anggaran dengan sangat rinci, memetakan setiap langkah untuk mencapai tujuan jangka panjang, dan sangat berhati-hati dalam pengelolaan uang.",
        moneyManagement: "Keduanya sangat disiplin dalam mengelola uang, tetapi pendekatan mereka sedikit berbeda. Si Diligent berfokus pada peningkatan pendapatan dan mencari peluang tambahan untuk mencapai tujuan keuangan, sementara si Planner lebih fokus pada pengelolaan anggaran yang sangat terstruktur dan rinci. Diligent lebih cenderung pada usaha ekstra dan proaktif dalam menambah penghasilan, sementara Planner lebih cenderung menekankan perencanaan dan pengelolaan pengeluaran yang teratur.",
        futureTarget: "Keduanya memiliki tujuan yang serupa, seperti menabung untuk masa depan, membeli rumah, atau pensiun, tetapi cara untuk mencapainya bisa berbeda. Diligent lebih fokus pada peningkatan pendapatan dan mencari peluang untuk menghasilkan lebih banyak uang, sementara Planner lebih menekankan pentingnya perencanaan yang sangat rinci dan disiplin dalam mengikuti anggaran."
    },

    "Diligent x Ups and Downs": {
        lifestyle: "Si Diligent sangat fokus pada kerja keras dan perencanaan keuangan yang matang. Mereka selalu berusaha menambah pendapatan dan menghindari pengeluaran yang tidak perlu, dengan tujuan untuk mencapai kestabilan finansial jangka panjang. Di sisi lain, si Ups and Downs memiliki pola keuangan yang lebih fluktuatif. Mereka dapat sangat hemat di satu waktu, namun kemudian menghabiskan uang secara impulsif saat mereka merasa baik atau ketika ada dorongan untuk membeli sesuatu yang diinginkan. Si Ups and Downs cenderung mengikuti perasaan dan situasi emosional mereka dalam mengelola pengeluaran.",
        moneyManagement: "Si Diligent sangat terorganisir dan lebih berhati-hati dalam mengelola pengeluaran serta lebih disiplin dalam menabung. Mereka biasanya memiliki anggaran yang jelas dan rencana keuangan yang rinci. Sebaliknya, si Ups and Downs mungkin kesulitan mengelola uang mereka secara konsisten. Mereka bisa sangat disiplin di satu titik, tetapi kemudian kembali boros atau kehilangan kontrol pada waktu lain, tergantung pada suasana hati atau situasi mereka.",
        futureTarget: "Si Diligent memiliki tujuan jangka panjang yang sangat jelas, seperti pensiun dengan aman, membeli rumah, dan membangun tabungan yang solid. Mereka akan berusaha keras untuk mencapai tujuan-tujuan ini dengan disiplin. Si Ups and Downs, meskipun mungkin memiliki tujuan yang sama, bisa kesulitan untuk menjaga fokus jangka panjang karena kecenderungan untuk menghabiskan uang secara impulsif, yang menghalangi mereka untuk menabung secara konsisten."
    }
}

export const CONFLICT_RESULT = {
    "Economizer x Economizer": {
        firstConflictTitle: "Keterbatasan dalam Pengalaman Hidup:",
        firstConflictDescription: "Karena keduanya sangat hemat, ada kemungkinan mereka terlalu fokus pada tabungan\n" +
            "dan pengurangan pengeluaran, yang bisa mengurangi kualitas hidup mereka. Mereka\n" +
            "mungkin melewatkan kesempatan untuk bersenang-senang bersama atau\n" +
            "mengeksplorasi pengalaman hidup yang lebih berharga karena terlalu khawatir\n" +
            "dengan pengeluaran.",
        secondConflictTitle: "Ketidakseimbangan dalam Penghargaan untuk Diri Sendiri:",
        secondConflictDescription: "Kedua Economizer ini mungkin merasa bersalah atau tidak nyaman jika\n" +
            "menghabiskan uang untuk hal-hal yang tidak langsung menguntungkan. Mereka bisa\n" +
            "terlalu menekan diri mereka sendiri untuk menghemat, yang bisa mengarah pada stres\n" +
            "atau perasaan tidak puas terhadap hidup mereka bersama.",
        thirdConflictTitle: "Kekurangan Keberagaman dalam Keputusan Keuangan:",
        thirdConflictDescription: "Karena keduanya cenderung membuat keputusan yang sangat berhati-hati dalam\n" +
            "mengelola uang, mereka bisa terjebak dalam pola yang sangat terbatas dan tidak\n" +
            "fleksibel. Jika keduanya terlalu kaku dalam pengelolaan uang, mereka mungkin sulit\n" +
            "untuk menghadapi perubahan kebutuhan atau kesempatan yang memerlukan\n" +
            "pendekatan lebih dinamis.",
    },
    "Economizer x Diligent": {
        firstConflictTitle: "Perbedaan Prioritas:",
        firstConflictDescription: "Si Economizer cenderung merasa si Diligent terlalu “boros” karena bekerja ekstra\n" +
            "untuk memenuhi kebutuhan yang bisa dihemat. Sebaliknya, si Diligent merasa si\n" +
            "Economizer kurang menghargai upaya tambahan yang dilakukan untuk kenyamanan\n" +
            "bersama.",
        secondConflictTitle: "Gaya Hidup:",
        secondConflictDescription: "Si Economizer bisa kesal jika si Diligent sering membeli sesuatu yang dianggap\n" +
            "kurang esensial, seperti makan di luar atau memberikan hadiah yang mahal.\n" +
            "Sebaliknya, si Diligent bisa merasa si Economizer terlalu pelit dan tidak menikmati\n" +
            "hasil kerja keras.",
        thirdConflictTitle: "Kecepatan Pencapaian Target Keuangan:",
        thirdConflictDescription: "Si Diligent mungkin merasa frustrasi karena si Economizer lambat mencapai target\n" +
            "akibat kurangnya upaya untuk menambah penghasilan, sementara si Economizer\n" +
            "merasa si Diligent terlalu ambisius.",
    },
    "Economizer x Binger": {
        firstConflictTitle: "Perbedaan Prioritas Pengeluaran:",
        firstConflictDescription: "Si Economizer akan merasa frustrasi jika si Binger terus membeli barang-barang\n" +
            "yang tidak diperlukan, bahkan jika itu hanya untuk kesenangan sesaat. Sebaliknya, si\n" +
            "Binger mungkin merasa tertekan atau tidak dihargai karena merasa si Economizer\n" +
            "terlalu kaku dalam pengelolaan uang.",
        secondConflictTitle: "Perbedaan Sikap terhadap Penghematan:",
        secondConflictDescription: "Si Economizer cenderung menekan dirinya sendiri untuk menghemat sebanyak\n" +
            "mungkin, sementara si Binger mungkin tidak terlalu fokus pada tabungan dan lebih\n" +
            "berorientasi pada kenikmatan instan. Ini dapat menyebabkan ketegangan jika si\n" +
            "Economizer merasa bahwa si Binger tidak menghargai tujuan jangka panjang.",
        thirdConflictTitle: "Perbedaan Pendekatan terhadap Kehidupan Sosial:",
        thirdConflictDescription: "Si Economizer mungkin lebih memilih untuk tetap berada di rumah atau beraktivitas\n" +
            "hemat, sementara si Binger lebih suka menghabiskan waktu dengan teman-teman,\n" +
            "sering kali melibatkan pengeluaran untuk hiburan atau makan di luar. Hal ini bisa\n" +
            "menyebabkan perasaan ketegangan atau kekecewaan di antara mereka.",
    },
    "Economizer x Orderly": {
        firstConflictTitle: "Perbedaan Pendekatan terhadap Pengeluaran:",
        firstConflictDescription: "Si Economizer mungkin merasa bahwa si Orderly terlalu kaku dan berlebihan dalam\n" +
            "merencanakan setiap pengeluaran, sementara si Orderly mungkin merasa si\n" +
            "Economizer terlalu fokus pada penghematan jangka pendek dan tidak cukup\n" +
            "memperhatikan rencana jangka panjang.",
        secondConflictTitle: "Kekakuan dalam Mengelola Keuangan:",
        secondConflictDescription: "Si Orderly memiliki pendekatan yang lebih sistematis dan bisa merasa tidak nyaman\n" +
            "jika si Economizer terlalu fleksibel atau bahkan terlalu pelit dalam beberapa hal.\n" +
            "Misalnya, si Orderly mungkin merasa perlu untuk menganggarkan untuk pengalaman\n" +
            "tertentu, sementara si Economizer bisa merasa itu adalah pengeluaran yang tidak\n" +
            "perlu.",
        thirdConflictTitle: "Tantangan dalam Menyeimbangkan Keinginan dan Kebutuhan:",
        thirdConflictDescription: "Si Orderly cenderung lebih sabar dalam merencanakan dan mungkin merasa perlu\n" +
            "untuk membeli barang hanya jika benar-benar dibutuhkan dan sesuai dengan\n" +
            "anggaran, sementara si Economizer bisa lebih cenderung untuk menunda-nunda\n" +
            "pengeluaran tersebut, bahkan jika itu diperlukan dalam jangka panjang.",
    },
    "Economizer x Can't Control Finance": {
        firstConflictTitle: "Perbedaan Pendekatan terhadap Pengeluaran:",
        firstConflictDescription: "Si Economizer akan merasa tertekan atau kesal jika melihat si Cannot Control\n" +
            "Finances menghabiskan uang secara impulsif. Di sisi lain, si Cannot Control\n" +
            "Finances mungkin merasa dikendalikan atau terlalu ditekan oleh kebiasaan hemat si\n" +
            "Economizer, yang mereka anggap sebagai penghalang untuk menikmati hidup.",
        secondConflictTitle: "Kehilangan Kendali atas Keuangan:",
        secondConflictDescription: "Si Cannot Control Finances sering kali tidak bisa mengendalikan pengeluarannya,\n" +
            "bahkan ketika mereka tahu itu akan menciptakan masalah finansial di masa depan.\n" +
            "Hal ini bisa menciptakan kecemasan atau ketegangan dengan si Economizer, yang\n" +
            "ingin menjaga pengeluaran tetap terkendali untuk mencapai tujuan jangka panjang.",
        thirdConflictTitle: "Perbedaan Sikap terhadap Utang dan Tabungan:",
        thirdConflictDescription: "Si Economizer lebih suka menghindari utang dan lebih fokus pada menabung.\n" +
            "Sebaliknya, si Cannot Control Finances mungkin tidak terlalu khawatir tentang\n" +
            "utang dan lebih memilih untuk menikmati hidup saat ini, yang bisa menciptakan\n" +
            "ketegangan dalam hubungan mereka.",
    },
    "Economizer x Planner": {
        firstConflictTitle: "Perbedaan Fokus pada Pengeluaran Jangka Pendek dan Jangka Panjang:",
        firstConflictDescription: "Si Economizer mungkin merasa bahwa si Planner terlalu fokus pada tujuan jangka\n" +
            "panjang dan terlalu memperhitungkan setiap pengeluaran. Sementara si Planner bisa\n" +
            "merasa bahwa si Economizer terlalu terfokus pada penghematan sesaat dan\n" +
            "mengabaikan tujuan besar yang lebih penting.",
        secondConflictTitle: "Keterbatasan Fleksibilitas dalam Pengelolaan Keuangan:",
        secondConflictDescription: "Si Economizer cenderung lebih fleksibel dalam pengelolaan keuangan sehari-hari,\n" +
            "lebih mudah menyesuaikan pengeluaran berdasarkan situasi saat itu. Sementara si\n" +
            "Planner lebih cenderung mengandalkan anggaran yang sangat terstruktur, yang bisa\n" +
            "terasa kaku bagi si Economizer.",
        thirdConflictTitle: "Perbedaan dalam Menikmati Kehidupan Sosial dan Hiburan:",
        thirdConflictDescription: "Si Economizer mungkin merasa cemas atau tertekan jika harus mengeluarkan uang\n" +
            "untuk hiburan atau pengalaman yang dianggap tidak penting. Sebaliknya, si Planner\n" +
            "mungkin merasa perlu untuk mengalokasikan sebagian dari anggarannya untuk\n" +
            "menjaga keseimbangan hidup, seperti menikmati hiburan bersama pasangan atau\n" +
            "teman-teman.",
    },
    "Economizer x Ups and Downs": {
        firstConflictTitle: "Perbedaan Pendekatan terhadap Pengeluaran:",
        firstConflictDescription: "Si Economizer akan merasa kesal atau cemas jika melihat si Ups and Downs yang\n" +
            "menghabiskan uang dengan cara yang tidak terduga dan sering kali tidak perlu. Hal\n" +
            "ini bisa menciptakan ketegangan, terutama jika si Ups and Downs merasa dibatasi\n" +
            "atau dikendalikan oleh kebiasaan hemat si Economizer.",
        secondConflictTitle: "Keterbatasan dalam Pengelolaan Keuangan:",
        secondConflictDescription: "Si Ups and Downs cenderung tidak konsisten dalam pengelolaan keuangan mereka.\n" +
            "Mereka bisa sangat berhemat pada satu waktu, tetapi kemudian menghabiskan uang\n" +
            "secara impulsif pada waktu yang lain. Si Economizer bisa merasa frustrasi dengan\n" +
            "ketidakstabilan ini, sedangkan si Ups and Downs bisa merasa terlalu terbebani oleh\n" +
            "kebiasaan hemat yang terlalu ketat.",
        thirdConflictTitle: "Perbedaan dalam Menikmati Kehidupan Sosial dan Hiburan:",
        thirdConflictDescription: "Si Economizer mungkin merasa bahwa menghabiskan uang untuk hiburan atau\n" +
            "kegiatan sosial adalah pemborosan yang tidak perlu, sementara si Ups and Downs\n" +
            "bisa merasa bahwa hidup harus dinikmati dan tidak ingin terlalu membatasi diri dalam\n" +
            "hal pengeluaran untuk kesenangan.",
    },

}

export const SUGGESTION_RESULT = {
    "Economizer x Economizer": [
        {
            title: "Menetapkan Tujuan Keuangan yang Jelas dan Bersama:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Tentukan tujuan jangka pendek dan jangka panjang yang ingin dicapai bersama, seperti membeli rumah atau berinvestasi dalam pendidikan.</li>
                    <li>Diskusikan berapa banyak yang perlu disimpan setiap bulan untuk mencapai tujuan tersebut, dan alokasikan dana untuk pengeluaran hiburan agar kehidupan mereka tetap seimbang.</li>
                </ul>
            )
        },
        {
            title: "Menjaga Keseimbangan dalam Pengeluaran untuk Kebutuhan dan Kesenangan:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Tentukan anggaran untuk pengeluaran pribadi yang lebih fleksibel. Misalnya, meskipun mereka hemat, alokasikan sebagian uang untuk aktivitas yang menyenangkan atau pengalaman yang meningkatkan kualitas hidup, seperti liburan singkat atau makan di luar untuk merayakan pencapaian.</li>
                </ul>
            )
        },
        {
            title: "Fleksibilitas dalam Pengelolaan Keuangan:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Meskipun fokus utama mereka adalah menabung, cobalah untuk tetap terbuka
                        terhadap investasi atau peluang finansial lainnya yang mungkin memberi hasil
                        lebih besar. Ini bisa mencakup mempertimbangkan investasi jangka panjang
                        atau berinvestasi dalam pengalaman yang memberi nilai lebih bagi kehidupan
                        mereka bersama.
                    </li>
                </ul>
            )
        },
        {
            title: "Rencanakan Pengeluaran yang Tidak Terduga:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Meskipun sangat fokus pada penghematan, penting untuk menyiapkan
                        anggaran untuk hal-hal tak terduga. Kedua pasangan harus membuat dana
                        darurat yang cukup untuk menutupi biaya mendesak tanpa menambah stres.
                    </li>
                </ul>
            )
        },
        {
            title: "Memberi Penghargaan untuk Diri Sendiri:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Buatlah kebiasaan memberi penghargaan atas kerja keras mereka dengan cara
                        yang tidak berfokus pada penghematan, seperti membeli hadiah kecil untuk
                        diri sendiri setelah pencapaian finansial atau mengikuti kegiatan yang
                        menyegarkan tubuh dan pikiran.
                    </li>
                </ul>
            )
        },
        {
            title: "Berbagi Pengalaman Baru dan Menikmati Waktu Bersama:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jangan takut untuk membelanjakan uang untuk pengalaman baru yang bisa
                        memberi kenangan berharga bersama. Ini bisa berupa kegiatan baru, hobi yang
                        menyenangkan, atau acara sosial yang memberi kegembiraan.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tentukan waktu setiap beberapa bulan untuk mengevaluasi kemajuan
                        keuangan dan menyesuaikan anggaran sesuai kebutuhan. Jika ada perubahan
                        dalam pendapatan atau kebutuhan, mereka dapat merencanakan langkah-
                        langkah yang lebih fleksibel.
                    </li>
                </ul>
            )
        },
    ],
    "Economizer x Diligent": [
        {
            title: "Buat Kesepakatan Keuangan Bersama:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Duduk bersama dan tentukan tujuan keuangan bersama, seperti menabung
                        untuk membeli rumah atau liburan.</li>
                    <li>Pisahkan tanggung jawab: si Diligent fokus meningkatkan penghasilan,
                        sementara si Economizer mengelola anggaran dan pengeluaran.</li>
                </ul>
            )
        },
        {
            title: "Buat Anggaran Berbasis Kompromi:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Tentukan persentase alokasi untuk penghematan dan pengeluaran berdasarkan
                        kebutuhan bersama. Misalnya, 70% pendapatan untuk kebutuhan esensial dan
                        tabungan, 30% untuk hiburan.</li>
                </ul>
            )
        },
        {
            title: "Jadwalkan Evaluasi Keuangan:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Evaluasi keuangan bulanan untuk memastikan pengeluaran sesuai anggaran
                        dan target keuangan tetap tercapai. Si Economizer bertugas memantau
                        pengeluaran, sementara si Diligent menilai efektivitas pengelolaan pendapatan
                        tambahan.
                    </li>
                </ul>
            )
        },
        {
            title: "Prioritaskan Quality Time:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Cari aktivitas hemat tetapi bermakna, seperti memasak bersama di rumah.
                        Namun, beri ruang bagi si Diligent untuk sesekali menikmati hasil kerja
                        kerasnya, seperti makan di luar.
                    </li>
                </ul>
            )
        },
        {
            title: "Memberi Penghargaan untuk Diri Sendiri:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Buatlah kebiasaan memberi penghargaan atas kerja keras mereka dengan cara
                        yang tidak berfokus pada penghematan, seperti membeli hadiah kecil untuk
                        diri sendiri setelah pencapaian finansial atau mengikuti kegiatan yang
                        menyegarkan tubuh dan pikiran.
                    </li>
                </ul>
            )
        },
        {
            title: "Bangun Komunikasi yang Terbuka:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Diskusikan alasan di balik keputusan finansial masing-masing. Misalnya, si
                        Diligent menjelaskan pentingnya menghargai kerja keras melalui penghargaan
                        kecil, sementara si Economizer menyampaikan pentingnya disiplin dalam
                        pengeluaran.
                    </li>
                </ul>
            )
        },
        {
            title: "Kembangkan Keahlian Keuangan Bersama:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ikuti kursus atau baca buku tentang manajemen keuangan bersama untuk
                        meningkatkan pemahaman tentang keuangan dan belajar mengombinasikan
                        pendekatan hemat dan kerja keras.
                    </li>
                </ul>
            )
        },
    ],
    "Economizer x Binger": [
        {
            title: "Buat Kesepakatan Keuangan yang Jelas:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Duduk bersama dan tentukan tujuan keuangan bersama, seperti menabung
                        untuk liburan atau membeli rumah.</li>
                    <li>Buat anggaran bersama yang mengakomodasi kedua kebutuhan: penghematan
                        dan kesenangan. Tentukan persentase untuk penghematan dan pengeluaran
                        hiburan yang disepakati bersama.</li>
                </ul>
            )
        },
        {
            title: "Tetapkan Anggaran untuk Pengeluaran Hiburan:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Si Economizer bisa memberikan ruang bagi si Binger untuk menikmati
                        pengeluaran hiburan dengan menetapkan anggaran bulanan untuk kegiatan
                        seperti makan di luar, membeli barang-barang yang diinginkan, atau liburan.
                        Anggaran ini bisa lebih fleksibel dibandingkan dengan pengeluaran lainnya.</li>
                </ul>
            )
        },
        {
            title: "Pahami dan Hargai Pendekatan yang Berbeda:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Si Economizer perlu memahami bahwa tidak semua pengeluaran adalah
                        pemborosan, dan kadang-kadang menikmati pengalaman atau membeli barang
                        yang diinginkan dapat memberikan kebahagiaan dan memupuk hubungan.
                    </li>
                    <li>Si Binger juga perlu memahami bahwa pengelolaan keuangan yang lebih ketat
                        akan memberikan stabilitas jangka panjang dan menghindari masalah utang.
                    </li>
                </ul>
            )
        },
        {
            title: "Kombinasikan Penghematan dan Pengeluaran yang Bijaksana:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Si Economizer bisa mengajarkan si Binger untuk lebih bijak dalam memilih
                        pengeluaran, seperti mencari diskon atau membeli barang yang dibutuhkan di
                        waktu yang tepat. Sebaliknya, si Binger bisa memberikan perspektif tentang
                        menikmati hidup dan tidak terlalu terobsesi dengan penghematan yang
                        berlebihan.
                    </li>
                </ul>
            )
        },
        {
            title: "Sediakan Waktu untuk Pengalaman Bersama:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Buat rencana untuk melakukan kegiatan menyenangkan bersama yang tidak
                        menguras banyak uang, seperti hiking, memasak bersama, atau menonton film
                        di rumah. Ini akan mengurangi ketegangan dan memberikan kebahagiaan
                        tanpa harus mengeluarkan banyak uang.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Bersama Secara Berkala:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tentukan waktu setiap bulan untuk mengevaluasi anggaran dan mengecek
                        apakah tujuan keuangan tercapai. Hal ini akan membantu si Binger lebih sadar
                        tentang pengeluarannya dan membantu si Economizer merasa lebih tenang
                        dengan pengelolaan uang pasangan mereka.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Hadiah Sebagai Penghargaan:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Si Binger bisa belajar untuk memberi penghargaan kepada diri sendiri tanpa
                        terlalu berlebihan, sementara si Economizer bisa memahami pentingnya
                        memberikan sedikit fleksibilitas untuk hadiah atau pengalaman yang
                        menyenangkan sebagai bentuk apresiasi untuk kerja keras.
                    </li>
                </ul>
            )
        },
    ],
    "Economizer x Orderly": [
        {
            title: "Tetapkan Anggaran Bersama yang Fleksibel dan Realistis:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Duduk bersama dan buat anggaran bersama yang mengakomodasi tujuan
                        jangka panjang si Orderly dan pendekatan hemat si Economizer. Misalnya,
                        alokasikan sejumlah uang untuk kebutuhan sehari-hari dan tabungan, serta
                        anggaran untuk pengalaman atau pengeluaran yang diinginkan bersama.</li>
                </ul>
            )
        },
        {
            title: "Ciptakan Rencana Pengelolaan Keuangan yang Seimbang:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Si Economizer bisa mengajarkan pentingnya mengurangi pengeluaran yang
                        tidak perlu, sementara si Orderly bisa memastikan bahwa semua pengeluaran
                        dicatat dan tidak ada yang terlewat. Keduanya bisa membuat rencana bulanan
                        yang menggabungkan penghematan dan perencanaan yang terstruktur.</li>
                </ul>
            )
        },
        {
            title: "Beri Ruang untuk Pengeluaran yang Tidak Terduga:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Meskipun keduanya cenderung mengatur pengeluaran, penting untuk memberi
                        ruang untuk pengeluaran yang tidak terduga atau untuk pengalaman hidup
                        bersama. Tentukan anggaran untuk aktivitas yang menyenangkan, seperti
                        liburan, makan di luar, atau hobi bersama, tanpa merasa bersalah.
                    </li>
                </ul>
            )
        },
        {
            title: "Perencanaan Keuangan yang Melibatkan Kedua Pihak:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Si Economizer perlu memahami pentingnya menabung untuk tujuan jangka
                        panjang seperti pensiun, dan si Orderly perlu memahami bahwa kadang-
                        kadang penghematan jangka pendek bisa mengurangi kualitas hidup. Mereka
                        bisa merencanakan tujuan jangka panjang bersama sambil tetap menjaga
                        keseimbangan dengan pengeluaran yang bijaksana.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Bersama Secara Berkala:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tentukan waktu setiap beberapa bulan untuk mengevaluasi kemajuan
                        keuangan dan melihat apakah tujuan mereka tercapai. Ini akan membantu si
                        Economizer merasa lebih tenang dengan pendekatan yang lebih terstruktur,
                        sementara si Orderly bisa lebih fleksibel dalam menyesuaikan anggaran
                        sesuai dengan kebutuhan.
                    </li>
                </ul>
            )
        },
        {
            title: "Komunikasi yang Terbuka tentang Pengeluaran:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Komunikasi adalah kunci. Si Economizer bisa berbicara dengan si Orderly
                        jika merasa pengeluaran tertentu terlalu membebani, sementara si Orderly
                        bisa berbicara dengan si Economizer jika merasa bahwa penghematan
                        berlebihan mengurangi kualitas hidup mereka. Komunikasi ini akan
                        membantu mereka saling memahami dan menemukan keseimbangan yang
                        lebih baik.
                    </li>
                </ul>
            )
        },
        {
            title: "Pentingnya Penghargaan untuk Diri Sendiri:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Si Orderly mungkin lebih mengutamakan penghematan yang ketat, tetapi
                        sangat penting untuk memberi penghargaan pada pencapaian finansial
                        bersama. Mereka bisa merayakan pencapaian keuangan bersama dengan cara
                        yang tidak melanggar anggaran yang telah disepakati, seperti merencanakan
                        kegiatan sederhana namun bermakna bersama.
                    </li>
                </ul>
            )
        },
    ],
    "Economizer x Can't Control Finance": [
        {
            title: "Buat Kesepakatan Pengelolaan Keuangan Bersama:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Duduk bersama dan tentukan tujuan keuangan yang realistis untuk pasangan,
                        seperti menabung untuk masa depan, melunasi utang, atau membeli aset.</li>
                    <li>Buat anggaran yang memungkinkan kedua belah pihak memiliki ruang untuk
                        pengeluaran pribadi, tetapi tetap menjaga pengelolaan keuangan yang
                        bijaksana.</li>
                </ul>
            )
        },
        {
            title: "Fokus pada Meningkatkan Kesadaran Keuangan:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Si Economizer dapat membantu si Cannot Control Finances dengan
                        memberikan wawasan tentang pentingnya memonitor pengeluaran dan
                        membuat anggaran. Misalnya, mereka bisa melibatkan si Cannot Control
                        Finances dalam membuat daftar belanja atau menggunakan aplikasi pengelola
                        keuangan untuk memantau pengeluaran.</li>
                </ul>
            )
        },
        {
            title: "Tetapkan Batas Pengeluaran untuk Aktivitas Hiburan:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Si Economizer bisa memberikan ruang bagi si Cannot Control Finances
                        untuk menikmati pengeluaran hiburan (seperti makan di luar atau belanja),
                        tetapi dengan batasan yang disepakati bersama. Misalnya, alokasikan sejumlah
                        uang tertentu setiap bulan untuk kegiatan tersebut tanpa melampaui anggaran.
                    </li>
                </ul>
            )
        },
        {
            title: "Bangun Dana Darurat dan Tabungan Bersama:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tentukan target tabungan dan pastikan bahwa sebagian dari penghasilan setiap
                        bulan dialokasikan untuk dana darurat dan tabungan jangka panjang.
                    </li>
                    <li>
                        Si Cannot Control Finances bisa diberi insentif untuk menabung, seperti
                        berjanji untuk membeli sesuatu yang mereka inginkan setelah mencapai target
                        tabungan tertentu.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Bersama Secara Berkala:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tentukan waktu setiap beberapa bulan untuk mengevaluasi keuangan dan
                        memastikan bahwa mereka tetap berada di jalur yang benar menuju tujuan
                        mereka. Ini akan membantu si Cannot Control Finances lebih sadar akan
                        pengeluaran mereka dan mencegah kecenderungan boros.
                    </li>
                </ul>
            )
        },
        {
            title: "Komunikasi yang Terbuka tentang Pengeluaran:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Si Economizer perlu berbicara dengan si Cannot Control Finances jika
                        pengeluaran mulai melampaui anggaran, tetapi dengan cara yang penuh
                        pengertian. Si Cannot Control Finances juga perlu merasa bahwa mereka
                        tidak dibatasi sepenuhnya dan dapat memiliki kebebasan dalam pengeluaran
                        selama itu masih dalam batas yang sehat.
                    </li>
                </ul>
            )
        },
        {
            title: "Membangun Penghargaan untuk Keuangan yang Sehat:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Berikan penghargaan atau pengakuan kepada si Cannot Control Finances
                        ketika mereka berhasil mengendalikan pengeluarannya, misalnya, dengan
                        merayakan pencapaian kecil atau memberi mereka kesempatan untuk
                        menikmati pengalaman tertentu yang mereka inginkan.
                    </li>
                </ul>
            )
        },
    ],
    "Economizer x Planner": [
        {
            title: "Menyusun Anggaran Bersama yang Mengakomodasi Kebutuhan dan Tujuan:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Duduk bersama untuk membuat anggaran bersama yang mencakup tujuan
                        jangka panjang si Planner (seperti dana pensiun, investasi, atau tabungan
                        rumah) dan penghematan jangka pendek si Economizer.</li>
                    <li>Tentukan alokasi anggaran untuk berbagai kategori, tetapi beri ruang untuk
                        fleksibilitas, sehingga si Economizer merasa bahwa pengeluaran sehari-hari
                        tetap dapat dikendalikan.</li>
                </ul>
            )
        },
        {
            title: "Perencanaan Keuangan yang Realistis dan Fleksibel:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Si Planner bisa membantu si Economizer untuk melihat pentingnya memiliki
                        rencana keuangan jangka panjang yang jelas, tetapi dengan pendekatan yang
                        lebih fleksibel. Sementara si Economizer bisa memberi perspektif untuk tidak
                        terlalu ketat dalam perencanaan keuangan jangka pendek, memberi ruang
                        untuk pengalaman dan kesenangan sesekali.</li>
                </ul>
            )
        },
        {
            title: "Fokus pada Tujuan Bersama:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Tentukan tujuan keuangan bersama yang mencakup rencana jangka panjang
                        dan pencapaian penghematan yang lebih realistis. Ini bisa mencakup membeli
                        rumah, menyiapkan dana darurat, atau investasi yang dapat memberikan hasil
                        lebih besar di masa depan. Dengan memiliki tujuan bersama, keduanya bisa
                        lebih mudah untuk saling mendukung.
                    </li>
                </ul>
            )
        },
        {
            title: "Memberikan Ruang untuk Kesenangan Tanpa Mengorbankan Tujuan:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Buatlah anggaran hiburan yang terpisah, sehingga si Economizer dapat
                        merasa nyaman mengeluarkan uang untuk kegiatan yang menyenangkan tanpa
                        merasa bersalah. Si Planner juga bisa merencanakan beberapa pengalaman
                        yang bisa dinikmati bersama, yang tetap sesuai dengan anggaran.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Bersama Secara Berkala:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tentukan waktu setiap beberapa bulan untuk mengevaluasi kemajuan
                        keuangan dan melihat apakah tujuan jangka panjang tercapai. Hal ini akan
                        memberikan kesempatan bagi si Economizer untuk menilai efektivitas
                        pengelolaan uang dan bagi si Planner untuk memastikan bahwa mereka tetap
                        berada di jalur yang benar.
                    </li>
                </ul>
            )
        },
        {
            title: "Komunikasi yang Terbuka tentang Pengeluaran:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Penting untuk berbicara secara terbuka tentang pengeluaran yang mungkin
                        menimbulkan ketegangan. Misalnya, si Economizer bisa mengungkapkan
                        keprihatinannya jika ada pengeluaran yang terlalu besar, sementara si Planner
                        bisa memberikan pemahaman tentang pentingnya mencapai tujuan jangka
                        panjang dengan cara yang realistis.
                    </li>
                </ul>
            )
        },
        {
            title: "Pahami dan Hargai Pendekatan yang Berbeda:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Si Economizer perlu memahami bahwa perencanaan keuangan yang matang
                        adalah kunci untuk mencapai tujuan besar, sementara si Planner perlu
                        memahami bahwa hidup juga perlu dinikmati dalam perjalanan mencapai
                        tujuan tersebut. Keduanya bisa saling menghargai cara berbeda dalam
                        mengelola keuangan, tetapi tetap berfokus pada tujuan bersama.
                    </li>
                </ul>
            )
        },
    ],
    "Economizer x Ups and Downs": [
        {
            title: "Buat Anggaran Bersama yang Fleksibel:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Duduk bersama untuk membuat anggaran yang mengakomodasi kebutuhan si
                        Economizer untuk penghematan dan kebutuhan si Ups and Downs untuk
                        pengeluaran yang lebih fleksibel. Tentukan anggaran bulanan untuk
                        pengeluaran rutin dan pengeluaran hiburan, tetapi beri ruang untuk
                        penyesuaian sesuai dengan situasi.</li>
                </ul>
            )
        },
        {
            title: "Buat Sistem Pengelolaan Keuangan yang Menyeimbangkan Kebutuhan:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Si Economizer bisa membantu si Ups and Downs dengan membuat sistem
                        pengelolaan keuangan yang fleksibel, seperti alokasi dana yang berbeda untuk
                        &quot;tabungan&quot; dan &quot;pengeluaran kesenangan.&quot; Misalnya, si Economizer bisa
                        membuat kategori anggaran untuk tabungan yang lebih ketat, sementara si
                        Ups and Downs bisa diberi anggaran untuk hiburan atau pengeluaran ekstra
                        yang lebih leluasa.</li>
                </ul>
            )
        },
        {
            title: "Saling Memahami Tentang Kepuasan Jangka Pendek dan Jangka Panjang:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Si Economizer perlu memahami bahwa hidup bukan hanya tentang menabung
                        dan menghindari pengeluaran, melainkan juga tentang menikmati hidup.
                        Sementara si Ups and Downs perlu memahami pentingnya menabung dan
                        merencanakan masa depan. Mereka bisa berbicara terbuka tentang cara
                        mereka ingin mengelola uang dan menemukan keseimbangan antara
                        kesenangan jangka pendek dan keamanan finansial jangka panjang.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Bersama Secara Berkala:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tentukan waktu setiap beberapa bulan untuk mengevaluasi apakah anggaran
                        mereka berhasil dan apakah tujuan keuangan mereka tercapai. Jika si Ups and
                        Downs merasa pengeluarannya berlebihan, mereka bisa berdiskusi dengan si
                        Economizer untuk mencari solusi yang lebih seimbang.
                    </li>
                </ul>
            )
        },
        {
            title: "Memberi Ruang untuk Pengalaman Bersama:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Si Economizer bisa memberi ruang bagi si Ups and Downs untuk menikmati
                        pengalaman bersama, seperti makan di luar atau berlibur, tetapi dengan
                        anggaran yang telah disepakati. Ini akan membantu si Ups and Downs merasa
                        bahwa mereka tidak dibatasi, sementara si Economizer tetap dapat menjaga
                        pengelolaan keuangan.
                    </li>
                </ul>
            )
        },
        {
            title: "Buat Sistem Hadiah dan Penghargaan yang Seimbang:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Si Ups and Downs bisa merasa dihargai dengan memiliki ruang untuk
                        membeli barang yang mereka inginkan atau menikmati pengalaman tertentu
                        tanpa merasa bersalah. Sebaliknya, si Economizer bisa merasa tenang karena
                        mereka tetap mengikuti anggaran yang telah ditetapkan.
                    </li>
                </ul>
            )
        },
        {
            title: "Pahami dan Hargai Pendekatan yang Berbeda:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Kunci dalam hubungan ini adalah saling pengertian. Si Economizer perlu
                        memahami bahwa si Ups and Downs juga perlu merasa puas dengan hidup
                        mereka, sementara si Ups and Downs harus menghargai perlunya pengelolaan
                        keuangan yang lebih stabil dan terencana.
                    </li>
                </ul>
            )
        },
    ],
}
