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
        lifestyle: "Pasangan Economizer x Economizer memiliki pendekatan keuangan yang mirip, di mana keduanya berusaha mengelola anggaran dengan hati-hati. Namun, tantangan utama mereka adalah bahwa keduanya sering terbebani oleh utang dan memiliki sedikit tabungan. Tanpa rencana konkret, pasangan ini mungkin sulit mencapai stabilitas finansial dan terjebak dalam pola mengatasi utang tanpa menabung untuk masa depan.\n",
        moneyManagement: "Karena keduanya terbiasa fokus pada penghematan sehari-hari, pasangan ini cenderung bekerja sama dalam menekan pengeluaran. Namun, kurangnya kemampuan untuk mengatasi utang secara efektif dapat menghambat kemajuan keuangan mereka. Hubungan ini membutuhkan pendekatan strategis untuk melunasi utang dan membangun tabungan.\n",
        futureTarget: "Pasangan ini mungkin kesulitan menetapkan tujuan jangka panjang karena perhatian mereka sering terfokus pada mengelola utang. Dengan perencanaan yang tepat, mereka dapat keluar dari tekanan finansial dan mulai mengejar tujuan seperti menabung untuk rumah atau investasi.",
    },
    "Economizer x Diligent": {
        lifestyle: "Si Diligent sangat fokus pada kerja keras dan disiplin dalam mengelola keuangan. Mereka cenderung mengambil pekerjaan tambahan atau melakukan usaha ekstra untuk menambah pendapatan dan menghindari utang. Sementara itu, si Economizer lebih fokus pada penghematan dan menghindari pengeluaran yang tidak perlu. Mereka akan berusaha untuk memaksimalkan penghematan dalam kehidupan sehari-hari, seperti memasak di rumah dan mencari diskon.",
        moneyManagement: "Keduanya memiliki kesamaan dalam hal tujuan keuangan: mereka ingin menghindari utang dan membangun stabilitas finansial. Diligent cenderung berusaha dengan lebih aktif meningkatkan pendapatan mereka, sementara Economizer lebih cermat dalam mengurangi pengeluaran. Ini berarti mereka dapat saling melengkapi—si Economizer bisa mengelola pengeluaran dengan hati-hati, sementara si Diligent akan bekerja lebih keras untuk meningkatkan pendapatan.",
        futureTarget: "Baik Diligent maupun Economizer berfokus pada tujuan jangka panjang seperti tabungan, investasi, dan stabilitas keuangan. Diligent akan berfokus pada mencari cara-cara untuk meningkatkan pendapatan, sementara Economizer akan memastikan bahwa pengeluaran tetap terkendali. Mereka memiliki tujuan yang sangat mirip, tetapi pendekatannya sedikit berbeda.",
    },
    "Economizer x Binger": {
        lifestyle: "Si Binger cenderung menikmati hidup dengan fokus pada pengeluaran untuk memenuhi keinginan sesaat, seperti membeli barang atau pengalaman yang memberikan kepuasan emosional. Mereka jarang memikirkan anggaran dan lebih mengutamakan kebahagiaan saat ini. Sebaliknya, si Economizer sangat hati-hati dalam mengelola keuangan, lebih memilih hidup sederhana, dan memprioritaskan penghematan karena sering terbebani oleh utang. Perbedaan gaya hidup ini membuat hubungan mereka memiliki potensi gesekan tetapi juga peluang untuk saling melengkapi.",
        moneyManagement: "Si Economizer sangat disiplin dan fokus pada memaksimalkan setiap pengeluaran, sementara si Binger sering impulsif dan tidak memprioritaskan pengelolaan keuangan jangka panjang. Economizer mungkin merasa frustrasi dengan kebiasaan belanja si Binger, sementara Binger merasa terkekang oleh pendekatan hemat si Economizer. Keduanya perlu bekerja sama untuk menemukan keseimbangan dalam mengelola keuangan.",
        futureTarget: "Si Economizer cenderung fokus pada tujuan keuangan jangka panjang, seperti melunasi utang atau menabung untuk masa depan, sementara Binger lebih menikmati hidup tanpa banyak memikirkan perencanaan jangka panjang. Meskipun cara mereka berbeda, jika keduanya dapat menyelaraskan prioritas, mereka dapat bekerja sama untuk mencapai tujuan keuangan bersama.",
    },
    "Economizer x Orderly": {
        lifestyle: "Si Orderly sangat terorganisir dalam pengelolaan keuangan, memiliki tabungan, dan cenderung belanja hal-hal trendi. Mereka menikmati keseimbangan antara disiplin keuangan dan penghargaan untuk diri sendiri. Di sisi lain, si Economizer berhati-hati dalam mengelola anggaran, tetapi sering terbebani oleh utang dan memiliki sedikit tabungan. Economizer berfokus pada efisiensi pengeluaran, sementara Orderly mencari keseimbangan antara menabung dan menikmati tren.",
        moneyManagement: "Si Orderly membawa disiplin dan perencanaan yang baik ke dalam hubungan, sementara Economizer dapat berkontribusi dengan ide-ide kreatif untuk menghemat pengeluaran. Namun, utang yang dimiliki Economizer bisa menjadi sumber tekanan bagi pasangan, terutama jika Orderly merasa bahwa utang tersebut menghambat tujuan keuangan mereka.",
        futureTarget: "Si Orderly memiliki kecenderungan untuk memprioritaskan tabungan, investasi, dan pengeluaran yang terkontrol, sementara Economizer cenderung kesulitan menabung karena harus mengatasi beban utang. Jika tidak ada strategi bersama, mereka mungkin kesulitan mencapai tujuan keuangan bersama seperti membeli rumah atau membangun dana darurat.",
    },
    "Economizer x Can't Control Finance": {
        lifestyle: "Pasangan ini menghadapi tantangan besar dalam pengelolaan keuangan. Si Cannot Control Finances sering kesulitan mengelola uang, mudah terjebak dalam pengeluaran impulsif, dan cenderung memiliki utang yang sulit diatasi. Di sisi lain, si Economizer berusaha keras untuk mengelola anggaran dengan hati-hati, tetapi sering terbebani oleh utang dan memiliki sedikit tabungan. Keduanya memiliki beban finansial yang signifikan, yang bisa membuat hubungan ini penuh tekanan jika tidak ada strategi bersama.",
        moneyManagement: "Si Economizer membawa upaya untuk efisiensi dan penghematan, meskipun keterbatasan tabungan dan utang mereka dapat menjadi hambatan. Sementara itu, Cannot Control Finances perlu bimbingan untuk mengurangi pengeluaran impulsif dan fokus pada perbaikan kebiasaan keuangan. Kombinasi ini membutuhkan kerja sama yang besar untuk mengatasi utang dan membangun stabilitas keuangan.",
        futureTarget: "Kedua pihak mungkin kesulitan memiliki rencana keuangan jangka panjang karena fokus mereka lebih pada masalah keuangan yang ada. Mereka perlu mendiskusikan tujuan bersama yang realistis, seperti melunasi utang terlebih dahulu sebelum membangun tabungan atau investasi.",
    },
    "Economizer x Planner": {
        lifestyle: "Si Planner adalah individu yang sangat terencana, disiplin, dan hemat. Mereka memiliki kebiasaan menabung aktif dan bebas dari utang. Sebaliknya, si Economizer berusaha mengelola anggaran dengan hati-hati, tetapi sering terbebani oleh utang dan memiliki sedikit tabungan. Pasangan ini menghadirkan dinamika yang menarik, di mana Planner dapat membawa stabilitas dan panduan, sementara Economizer menawarkan efisiensi pengeluaran.",
        moneyManagement: "Si Planner memiliki kemampuan untuk membuat rencana jangka panjang, yang dapat membantu Economizer keluar dari situasi utang mereka. Sebaliknya, Economizer dapat memberikan ide-ide kreatif untuk menghemat pengeluaran sehari-hari. Kombinasi ini memiliki potensi besar untuk menciptakan stabilitas finansial, selama ada komunikasi yang baik.",
        futureTarget: "Si Planner fokus pada menabung untuk masa depan, seperti dana pensiun atau investasi, sementara si Economizer mungkin lebih terjebak dalam mengatasi utang mereka. Dengan bantuan Planner, pasangan ini dapat bekerja sama untuk melunasi utang Economizer terlebih dahulu sebelum mengejar tujuan jangka panjang.",
    },
    "Economizer x Ups and Downs": {
        lifestyle: "Si Ups and Downs memiliki perilaku keuangan yang fluktuatif, kadang sangat hemat tetapi di lain waktu belanja impulsif tanpa rencana. Di sisi lain, si Economizer berusaha mengelola anggaran dengan hati-hati, tetapi sering terbebani oleh utang dan memiliki sedikit tabungan. Kombinasi ini menghadirkan tantangan besar karena keduanya cenderung mengalami ketidakstabilan finansial, baik karena perilaku impulsif maupun beban utang yang ada.",
        moneyManagement: "Economizer mencoba menjaga efisiensi dalam pengeluaran sehari-hari, tetapi utang mereka menjadi hambatan besar untuk membangun stabilitas keuangan. Ups and Downs mungkin memiliki momen hemat yang membantu, tetapi perilaku impulsif mereka dapat memperburuk situasi keuangan pasangan. Hubungan ini membutuhkan upaya besar untuk menciptakan keseimbangan dan konsistensi dalam pengelolaan uang.",
        futureTarget: "Pasangan ini mungkin kesulitan untuk fokus pada tujuan keuangan jangka panjang karena terlalu banyak waktu yang dihabiskan untuk mengatasi masalah keuangan jangka pendek seperti pembayaran utang atau kebutuhan mendesak. Diskusi terbuka diperlukan untuk menyelaraskan prioritas mereka.",
    },

    "Diligent x Diligent": {
        lifestyle: "Kedua pasangan ini akan sangat fokus pada peningkatan pendapatan dan perencanaan jangka panjang. Mereka akan sering membicarakan tujuan keuangan bersama, seperti menabung untuk membeli rumah, pensiun, atau investasi lainnya. Gaya hidup mereka mungkin cukup terstruktur dan terkendali, dengan rutinitas yang jelas, seperti membuat anggaran bulanan, mengurangi pengeluaran yang tidak perlu, dan mencari peluang pendapatan tambahan.",
        moneyManagement: "Si Diligent pertama akan selalu mengusahakan sumber pendapatan tambahan atau bekerja lebih keras untuk mencapai tujuan keuangan, sementara pasangannya yang juga Diligent akan mengelola pengeluaran dan tabungan dengan sangat hati-hati. Mereka berdua cenderung menghindari utang, merencanakan pengeluaran dengan rinci, dan sering mengevaluasi kemajuan finansial mereka.",
        futureTarget: "Tujuan masa depan mereka kemungkinan besar sejalan, seperti menabung untuk jangka panjang, berinvestasi, atau mencapai kebebasan finansial. Mereka akan merencanakan kehidupan bersama yang stabil dan nyaman, dengan mempersiapkan dana darurat, pendidikan anak (jika ada), dan kebutuhan pensiun."
    },
    "Diligent x Economizer": {
        lifestyle: "Si Diligent sangat fokus pada kerja keras dan disiplin dalam mengelola keuangan. Mereka cenderung mengambil pekerjaan tambahan atau melakukan usaha ekstra untuk menambah pendapatan dan menghindari utang. Sementara itu, si Economizer lebih fokus pada penghematan dan menghindari pengeluaran yang tidak perlu. Mereka akan berusaha untuk memaksimalkan penghematan dalam kehidupan sehari-hari, seperti memasak di rumah dan mencari diskon.",
        moneyManagement: "Keduanya memiliki kesamaan dalam hal tujuan keuangan: mereka ingin menghindari utang dan membangun stabilitas finansial. Diligent cenderung berusaha dengan lebih aktif meningkatkan pendapatan mereka, sementara Economizer lebih cermat dalam mengurangi pengeluaran. Ini berarti mereka dapat saling melengkapi—si Economizer bisa mengelola pengeluaran dengan hati-hati, sementara si Diligent akan bekerja lebih keras untuk meningkatkan pendapatan.",
        futureTarget: "Baik Diligent maupun Economizer berfokus pada tujuan jangka panjang seperti tabungan, investasi, dan stabilitas keuangan. Diligent akan berfokus pada mencari cara-cara untuk meningkatkan pendapatan, sementara Economizer akan memastikan bahwa pengeluaran tetap terkendali. Mereka memiliki tujuan yang sangat mirip, tetapi pendekatannya sedikit berbeda.",
    },
    "Diligent x Binger": {
        lifestyle: "Si Binger cenderung hidup untuk saat ini, menikmati pengeluaran untuk barang dan pengalaman yang memberikan kepuasan instan. Mereka sering membeli barang secara impulsif dan kurang memperhatikan anggaran. Di sisi lain, si Diligent sangat fokus pada kerja keras dan perencanaan keuangan jangka panjang. Mereka disiplin dalam pengelolaan keuangan, selalu berusaha menambah pendapatan, dan menghindari pengeluaran yang tidak perlu.",
        moneyManagement: "Si Binger seringkali mengabaikan anggaran dan pengelolaan uang yang teratur, sementara si Diligent sangat terstruktur dan disiplin dalam hal ini. Diligent mungkin merasa perlu untuk menabung dan berinvestasi untuk masa depan, sedangkan Binger lebih suka menghabiskan uang untuk kesenangan saat ini. Perbedaan ini bisa menimbulkan ketegangan dalam hubungan mereka.",
        futureTarget: "Si Diligent memiliki tujuan jangka panjang yang jelas, seperti membeli rumah, menabung untuk pensiun, atau investasi lainnya. Si Binger mungkin tidak memiliki rencana keuangan jangka panjang yang solid dan lebih fokus pada menikmati hidup sekarang. Ini bisa membuat mereka memiliki prioritas yang berbeda dalam hal keuangan dan kehidupan.",
    },
    "Diligent x Orderly": {
        lifestyle: "Si Orderly sangat terorganisir dalam pengelolaan keuangan, cenderung menikmati belanja untuk hal-hal trendi, tetapi tetap memiliki tabungan yang memadai karena kedisiplinan mereka. Di sisi lain, si Diligent adalah individu yang gigih, bekerja keras untuk menghasilkan uang, menghindari utang, dan berusaha keras untuk menabung. Keduanya memiliki orientasi keuangan yang kuat tetapi dengan gaya yang berbeda: Orderly lebih terstruktur, sementara Diligent lebih berorientasi pada upaya dan penghematan.",
        moneyManagement: "Si Orderly akan membawa keteraturan dan sistem dalam pengelolaan keuangan bersama, sementara si Diligent akan memperkuat keuangan dengan upaya keras dan kontribusi mereka yang konsisten. Kombinasi ini dapat menciptakan stabilitas keuangan yang kuat, meskipun konflik kecil bisa terjadi terkait belanja trendi dari Orderly, yang mungkin dianggap tidak perlu oleh Diligent.",
        futureTarget: "Keduanya memiliki tujuan keuangan jangka panjang yang kuat, seperti membeli rumah, menabung untuk pensiun, atau membangun dana darurat. Diligent fokus pada penghematan melalui usaha keras, sementara Orderly memastikan keuangan tetap terorganisir untuk mencapai tujuan bersama.",
    },
    "Diligent x Can't Control Finance": {
        lifestyle: "Si Cannot Control Finances sering berusaha mengelola keuangan, tetapi gagal mempertahankan disiplin, cenderung memiliki utang, dan kerap terjebak dalam pengeluaran impulsif. Di sisi lain, si Diligent adalah individu yang bekerja keras untuk menghasilkan uang, disiplin dalam penghematan, dan sangat menghindari utang. Kombinasi ini menghadirkan tantangan, karena Diligent cenderung merasa frustrasi dengan kebiasaan keuangan Cannot Control Finances, sementara Cannot Control Finances mungkin merasa tertekan dengan ekspektasi tinggi dari pasangannya.",
        moneyManagement: "Diligent membawa etos kerja keras dan ketekunan dalam menjaga keuangan tetap stabil, sedangkan Cannot Control Finances membutuhkan bimbingan untuk mengontrol kebiasaan belanja dan mengatasi utang. Jika Diligent dapat mendukung perubahan positif pada pasangan mereka, hubungan ini dapat berkembang menuju stabilitas finansial.",
        futureTarget: "Si Diligent cenderung memiliki rencana keuangan jangka panjang yang kuat, seperti menabung untuk investasi atau tujuan besar lainnya. Sebaliknya, Cannot Control Finances mungkin kesulitan membuat rencana karena fokus mereka sering teralihkan oleh masalah keuangan jangka pendek. Pasangan ini perlu menyelaraskan prioritas untuk mencapai tujuan bersama.",
    },
    "Diligent x Planner": {
        lifestyle: "Si Planner adalah individu yang terencana, hemat, dan fokus pada tujuan keuangan jangka panjang seperti menabung dan investasi. Sementara itu, si Diligent adalah pekerja keras yang berusaha keras menghemat dan menghasilkan uang, dengan kebiasaan yang cenderung menghindari utang. Keduanya memiliki kesamaan dalam pola pikir keuangan yang disiplin, menjadikan pasangan ini salah satu kombinasi paling stabil secara finansial.",
        moneyManagement: "Dengan karakteristik yang mirip, pasangan ini kemungkinan akan dengan mudah menyusun anggaran bersama, menetapkan tujuan jangka panjang, dan bekerja sama untuk mencapainya. Planner membawa struktur dan strategi jangka panjang, sementara Diligent berkontribusi dengan kerja keras dan kemauan untuk terus berhemat.",
        futureTarget: "Pasangan ini memiliki kemampuan untuk menyelaraskan tujuan keuangan mereka, seperti membangun tabungan, membeli rumah, atau berinvestasi. Dengan kerja sama yang kuat, mereka dapat mencapai tujuan finansial lebih cepat daripada kebanyakan pasangan.",
    },
    "Diligent x Ups and Downs": {
        lifestyle: "Si Ups and Downs memiliki kebiasaan keuangan yang tidak konsisten, dengan momen-momen hemat diimbangi oleh pengeluaran impulsif. Sebaliknya, si Diligent adalah pekerja keras yang fokus pada penghematan dan menghasilkan uang, dengan kebiasaan yang disiplin dan cenderung menghindari utang. Kombinasi ini menciptakan dinamika yang menarik, di mana Diligent membawa stabilitas, sementara Ups and Downs menawarkan fleksibilitas yang dapat membantu Diligent untuk lebih menikmati hidup.",
        moneyManagement: "Diligent dapat menjadi pengarah utama dalam hubungan ini, membantu Ups and Downs untuk lebih konsisten dalam kebiasaan finansial mereka. Di sisi lain, Ups and Downs dapat membantu Diligent menemukan cara untuk bersantai dan menikmati hasil kerja keras mereka tanpa terlalu khawatir tentang uang.",
        futureTarget: "Pasangan ini dapat bekerja sama untuk menetapkan tujuan keuangan bersama, seperti menabung untuk rumah atau dana pensiun. Diligent akan berfokus pada pelaksanaan, sementara Ups and Downs memberikan fleksibilitas dalam menghadapi perubahan situasi atau kebutuhan mendadak.",
    },

    "Binger x Binger": {
        lifestyle: "Pasangan Binger x Binger cenderung menikmati hidup dengan mengutamakan pengeluaran untuk hal-hal yang memberikan kepuasan sesaat. Mereka lebih suka menghabiskan uang untuk hiburan, barang, atau pengalaman tanpa terlalu memikirkan anggaran atau konsekuensi jangka panjang. Gaya hidup mereka sering kali berorientasi pada kepuasan emosional, dengan pola pengeluaran yang impulsif dan kurang terencana.",
        moneyManagement: "Karena keduanya memiliki kecenderungan yang sama untuk tidak mengelola uang secara disiplin, pasangan ini mungkin kesulitan dalam menjaga stabilitas keuangan. Tanpa perencanaan yang baik, ada risiko pengeluaran mereka melebihi pendapatan, yang dapat menyebabkan masalah finansial seperti utang atau kesulitan memenuhi kebutuhan pokok di masa depan.",
        futureTarget: "Keduanya mungkin tidak memiliki rencana keuangan jangka panjang yang jelas, karena lebih fokus pada menikmati hidup saat ini. Jika tidak ada upaya untuk menyesuaikan pola keuangan, tujuan jangka panjang seperti menabung untuk rumah, pendidikan anak, atau pensiun bisa sulit dicapai.",
    },
    "Binger x Economizer": {
        lifestyle: "Si Binger cenderung menikmati hidup dengan fokus pada pengeluaran untuk memenuhi keinginan sesaat, seperti membeli barang atau pengalaman yang memberikan kepuasan emosional. Mereka jarang memikirkan anggaran dan lebih mengutamakan kebahagiaan saat ini. Sebaliknya, si Economizer sangat hati-hati dalam mengelola keuangan, lebih memilih hidup sederhana, dan memprioritaskan penghematan karena sering terbebani oleh utang. Perbedaan gaya hidup ini membuat hubungan mereka memiliki potensi gesekan tetapi juga peluang untuk saling melengkapi.",
        moneyManagement: "Si Economizer sangat disiplin dan fokus pada memaksimalkan setiap pengeluaran, sementara si Binger sering impulsif dan tidak memprioritaskan pengelolaan keuangan jangka panjang. Economizer mungkin merasa frustrasi dengan kebiasaan belanja si Binger, sementara Binger merasa terkekang oleh pendekatan hemat si Economizer. Keduanya perlu bekerja sama untuk menemukan keseimbangan dalam mengelola keuangan.",
        futureTarget: "Si Economizer cenderung fokus pada tujuan keuangan jangka panjang, seperti melunasi utang atau menabung untuk masa depan, sementara Binger lebih menikmati hidup tanpa banyak memikirkan perencanaan jangka panjang. Meskipun cara mereka berbeda, jika keduanya dapat menyelaraskan prioritas, mereka dapat bekerja sama untuk mencapai tujuan keuangan bersama.",
    },
    "Binger x Diligent": {
        lifestyle: "Si Binger cenderung hidup untuk saat ini, menikmati pengeluaran untuk barang dan pengalaman yang memberikan kepuasan instan. Mereka sering membeli barang secara impulsif dan kurang memperhatikan anggaran. Di sisi lain, si Diligent sangat fokus pada kerja keras dan perencanaan keuangan jangka panjang. Mereka disiplin dalam pengelolaan keuangan, selalu berusaha menambah pendapatan, dan menghindari pengeluaran yang tidak perlu.",
        moneyManagement: "Si Binger seringkali mengabaikan anggaran dan pengelolaan uang yang teratur, sementara si Diligent sangat terstruktur dan disiplin dalam hal ini. Diligent mungkin merasa perlu untuk menabung dan berinvestasi untuk masa depan, sedangkan Binger lebih suka menghabiskan uang untuk kesenangan saat ini. Perbedaan ini bisa menimbulkan ketegangan dalam hubungan mereka.",
        futureTarget: "Si Diligent memiliki tujuan jangka panjang yang jelas, seperti membeli rumah, menabung untuk pensiun, atau investasi lainnya. Si Binger mungkin tidak memiliki rencana keuangan jangka panjang yang solid dan lebih fokus pada menikmati hidup sekarang. Ini bisa membuat mereka memiliki prioritas yang berbeda dalam hal keuangan dan kehidupan.",
    },
    "Binger x Orderly": {
        lifestyle: "Si Orderly sangat terorganisir dalam pengelolaan keuangan, memastikan ada tabungan yang cukup sambil tetap menikmati belanja untuk hal-hal trendi yang mereka sukai. Di sisi lain, si Binger cenderung belanja impulsif tanpa terlalu memikirkan anggaran atau konsekuensi jangka panjang. Pasangan ini memiliki pendekatan keuangan yang sangat berbeda, dengan Orderly yang fokus pada disiplin dan rencana, sementara Binger lebih spontan dan kurang terstruktur.",
        moneyManagement: "Si Orderly berusaha menjaga keseimbangan antara menabung dan menikmati hasil kerja keras, sedangkan si Binger sering menghabiskan uang untuk kepuasan sesaat tanpa perencanaan yang jelas. Ini bisa menjadi tantangan dalam hubungan mereka, terutama jika Orderly merasa si Binger tidak bertanggung jawab, sementara Binger merasa terkekang oleh pendekatan si Orderly.",
        futureTarget: "Si Orderly memiliki tujuan keuangan jangka panjang yang jelas, seperti menabung untuk pensiun atau membeli rumah. Sebaliknya, si Binger mungkin tidak terlalu peduli dengan tujuan jangka panjang dan lebih fokus pada menikmati hidup saat ini. Perbedaan ini dapat menyebabkan ketegangan jika tidak ada kompromi atau komunikasi yang baik.",
    },
    "Binger x Can't Control Finance": {
        lifestyle: "Pasangan Cannot Control Finances x Binger memiliki kebiasaan keuangan yang kurang stabil. Si Cannot Control Finances berusaha mengelola keuangan tetapi sering gagal, sehingga mereka cenderung memiliki utang. Sementara itu, si Binger suka belanja impulsif tanpa perencanaan yang jelas, tetapi biasanya tidak memiliki banyak utang karena tidak terbiasa menggunakan kredit. Kombinasi ini menciptakan dinamika yang penuh tantangan karena keduanya kurang terorganisir dalam pengelolaan keuangan.",
        moneyManagement: "Keduanya memiliki kecenderungan untuk mengabaikan anggaran atau perencanaan jangka panjang. Si Cannot Control Finances mungkin mencoba memperbaiki keuangan mereka tetapi kesulitan untuk konsisten, sementara si Binger lebih fokus pada kepuasan sesaat daripada pengelolaan uang yang terencana. Ini membuat hubungan mereka rentan terhadap masalah keuangan yang signifikan.",
        futureTarget: "Pasangan ini kemungkinan besar tidak memiliki rencana keuangan jangka panjang yang jelas. Si Binger fokus pada pengeluaran untuk kesenangan saat ini, sedangkan si Cannot Control Finances berjuang untuk mengelola situasi utang mereka. Mereka perlu menemukan cara untuk menyelaraskan prioritas dan membuat tujuan keuangan bersama.",
    },
    "Binger x Planner": {
        lifestyle: "Si Planner sangat terencana, hemat, dan fokus pada tujuan jangka panjang seperti menabung dan investasi. Sebaliknya, si Binger suka belanja impulsif tanpa perencanaan keuangan yang baik, tetapi biasanya tidak memiliki banyak utang. Kombinasi ini menciptakan dinamika yang penuh tantangan, karena Planner cenderung mengutamakan kestabilan dan kontrol, sementara Binger lebih santai dan mencari kepuasan sesaat melalui pengeluaran.",
        moneyManagement: "Planner akan mencoba membawa struktur dan rencana keuangan yang jelas ke dalam hubungan, sementara Binger mungkin merasa kesulitan untuk mengikuti aturan ketat. Hubungan ini membutuhkan komunikasi yang baik agar keduanya dapat menyesuaikan pendekatan mereka terhadap keuangan.",
        futureTarget: "Si Planner fokus pada tujuan jangka panjang seperti investasi atau menabung untuk rumah, sedangkan Binger mungkin tidak terlalu peduli dengan rencana keuangan masa depan. Pasangan ini perlu berdiskusi secara terbuka untuk menemukan keseimbangan antara pengelolaan keuangan yang disiplin dan ruang untuk menikmati hidup.",
    },
    "Binger x Ups and Downs": {
        lifestyle: "Kombinasi Ups and Downs x Binger menciptakan pasangan dengan kecenderungan finansial yang impulsif. Si Ups and Downs memiliki pola keuangan yang fluktuatif, kadang hemat tetapi sering impulsif. Di sisi lain, Binger cenderung belanja tanpa perencanaan dan menikmati kepuasan instan tanpa memikirkan konsekuensi jangka panjang. Hubungan ini berisiko menjadi tidak stabil jika tidak ada struktur atau rencana keuangan yang jelas.",
        moneyManagement: "Keduanya memiliki kesulitan untuk konsisten dalam pengelolaan uang. Ups and Downs mungkin mencoba untuk menghemat di saat-saat tertentu, tetapi pengeluaran impulsif dari Binger dapat membuat usaha tersebut sia-sia. Hubungan ini membutuhkan komitmen bersama untuk menetapkan batas pengeluaran dan tujuan keuangan.",
        futureTarget: "Pasangan ini cenderung fokus pada kebutuhan jangka pendek dan kurang perhatian pada tujuan jangka panjang seperti tabungan atau investasi. Untuk mengatasi hal ini, mereka perlu bekerja sama menetapkan tujuan yang realistis dan membangun kebiasaan finansial yang lebih disiplin.",
    },

    "Orderly x Orderly": {
        lifestyle: "Pasangan Orderly x Orderly adalah kombinasi yang sangat terstruktur dan terorganisir dalam pengelolaan keuangan. Keduanya cenderung memiliki tabungan, menghindari pengeluaran yang tidak perlu, tetapi tetap menikmati belanja untuk hal-hal trendi yang mereka sukai. Mereka memiliki kesamaan nilai dalam menjaga keseimbangan antara stabilitas finansial dan menikmati hidup dengan cara yang terencana.",
        moneyManagement: "Dengan pendekatan keuangan yang serupa, pasangan ini kemungkinan akan mudah membuat anggaran bersama, menabung untuk tujuan jangka panjang, dan mengelola pengeluaran dengan baik. Mereka akan saling mendukung dalam mempertahankan gaya hidup yang disiplin sekaligus memberi ruang untuk kesenangan kecil.",
        futureTarget: "Keduanya memiliki tujuan keuangan yang jelas, seperti menabung untuk rumah, investasi, atau pensiun. Dengan pendekatan yang terorganisir, mereka dapat dengan mudah mencapai tujuan bersama tanpa banyak konflik atau ketegangan.",
    },
    "Orderly x Economizer": {
        lifestyle: "Si Orderly sangat terorganisir dalam pengelolaan keuangan, memiliki tabungan, dan cenderung belanja hal-hal trendi. Mereka menikmati keseimbangan antara disiplin keuangan dan penghargaan untuk diri sendiri. Di sisi lain, si Economizer berhati-hati dalam mengelola anggaran, tetapi sering terbebani oleh utang dan memiliki sedikit tabungan. Economizer berfokus pada efisiensi pengeluaran, sementara Orderly mencari keseimbangan antara menabung dan menikmati tren.",
        moneyManagement: "Si Orderly membawa disiplin dan perencanaan yang baik ke dalam hubungan, sementara Economizer dapat berkontribusi dengan ide-ide kreatif untuk menghemat pengeluaran. Namun, utang yang dimiliki Economizer bisa menjadi sumber tekanan bagi pasangan, terutama jika Orderly merasa bahwa utang tersebut menghambat tujuan keuangan mereka.",
        futureTarget: "Si Orderly memiliki kecenderungan untuk memprioritaskan tabungan, investasi, dan pengeluaran yang terkontrol, sementara Economizer cenderung kesulitan menabung karena harus mengatasi beban utang. Jika tidak ada strategi bersama, mereka mungkin kesulitan mencapai tujuan keuangan bersama seperti membeli rumah atau membangun dana darurat.",
    },
    "Orderly x Diligent": {
        lifestyle: "Si Orderly sangat terorganisir dalam pengelolaan keuangan, cenderung menikmati belanja untuk hal-hal trendi, tetapi tetap memiliki tabungan yang memadai karena kedisiplinan mereka. Di sisi lain, si Diligent adalah individu yang gigih, bekerja keras untuk menghasilkan uang, menghindari utang, dan berusaha keras untuk menabung. Keduanya memiliki orientasi keuangan yang kuat tetapi dengan gaya yang berbeda: Orderly lebih terstruktur, sementara Diligent lebih berorientasi pada upaya dan penghematan.",
        moneyManagement: "Si Orderly akan membawa keteraturan dan sistem dalam pengelolaan keuangan bersama, sementara si Diligent akan memperkuat keuangan dengan upaya keras dan kontribusi mereka yang konsisten. Kombinasi ini dapat menciptakan stabilitas keuangan yang kuat, meskipun konflik kecil bisa terjadi terkait belanja trendi dari Orderly, yang mungkin dianggap tidak perlu oleh Diligent.",
        futureTarget: "Keduanya memiliki tujuan keuangan jangka panjang yang kuat, seperti membeli rumah, menabung untuk pensiun, atau membangun dana darurat. Diligent fokus pada penghematan melalui usaha keras, sementara Orderly memastikan keuangan tetap terorganisir untuk mencapai tujuan bersama.",
    },
    "Orderly x Binger": {
        lifestyle: "Si Orderly sangat terorganisir dalam pengelolaan keuangan, memastikan ada tabungan yang cukup sambil tetap menikmati belanja untuk hal-hal trendi yang mereka sukai. Di sisi lain, si Binger cenderung belanja impulsif tanpa terlalu memikirkan anggaran atau konsekuensi jangka panjang. Pasangan ini memiliki pendekatan keuangan yang sangat berbeda, dengan Orderly yang fokus pada disiplin dan rencana, sementara Binger lebih spontan dan kurang terstruktur.",
        moneyManagement: "Si Orderly berusaha menjaga keseimbangan antara menabung dan menikmati hasil kerja keras, sedangkan si Binger sering menghabiskan uang untuk kepuasan sesaat tanpa perencanaan yang jelas. Ini bisa menjadi tantangan dalam hubungan mereka, terutama jika Orderly merasa si Binger tidak bertanggung jawab, sementara Binger merasa terkekang oleh pendekatan si Orderly.",
        futureTarget: "Si Orderly memiliki tujuan keuangan jangka panjang yang jelas, seperti menabung untuk pensiun atau membeli rumah. Sebaliknya, si Binger mungkin tidak terlalu peduli dengan tujuan jangka panjang dan lebih fokus pada menikmati hidup saat ini. Perbedaan ini dapat menyebabkan ketegangan jika tidak ada kompromi atau komunikasi yang baik.",
    },
    "Orderly x Can't Control Finance": {
        lifestyle: "Si Cannot Control Finances sering kali berjuang untuk mengelola keuangan dengan baik, terjebak dalam pengeluaran impulsif, dan cenderung memiliki utang. Di sisi lain, si Orderly sangat terorganisir, memiliki tabungan yang cukup, dan suka menikmati belanja untuk hal-hal trendi tanpa mengorbankan stabilitas keuangan. Kombinasi ini menghadirkan tantangan karena pendekatan keuangan mereka sangat berbeda.",
        moneyManagement: "Si Orderly membawa struktur, perencanaan, dan stabilitas ke dalam hubungan. Mereka cenderung ingin membantu pasangan mereka, tetapi mungkin merasa frustrasi dengan kesulitan si Cannot Control Finances dalam mengubah kebiasaan mereka. Cannot Control Finances membutuhkan bimbingan yang penuh empati dari Orderly untuk mengembangkan kebiasaan finansial yang lebih sehat.",
        futureTarget: "Si Orderly memiliki tujuan keuangan yang jelas, seperti menabung untuk investasi atau pengeluaran besar yang sudah direncanakan. Sebaliknya, si Cannot Control Finances sering kali fokus pada kebutuhan jangka pendek dan sulit untuk memprioritaskan tujuan jangka panjang. Pasangan ini perlu menyelaraskan prioritas untuk mencapai stabilitas keuangan bersama.",
    },
    "Orderly x Planner": {
        lifestyle: "Si Planner adalah individu yang disiplin, hemat, dan terencana, dengan fokus pada tujuan jangka panjang seperti tabungan dan investasi. Di sisi lain, si Orderly sangat terorganisir dalam pengelolaan keuangan, memiliki tabungan yang memadai, tetapi juga menikmati belanja untuk hal-hal trendi yang mereka sukai. Kombinasi ini menghadirkan pasangan yang harmonis, di mana Planner membawa stabilitas finansial dan visi jangka panjang, sementara Orderly menawarkan keseimbangan dengan menyelipkan ruang untuk menikmati hidup.",
        moneyManagement: "Si Planner akan menjadi pemimpin dalam perencanaan keuangan strategis, sementara si Orderly memastikan bahwa rencana berjalan dengan baik tanpa melupakan elemen kesenangan. Keduanya memiliki kemampuan untuk bekerja sama dengan baik dalam membuat anggaran, menabung, dan mengelola pengeluaran.",
        futureTarget: "Keduanya memiliki tujuan keuangan yang jelas dan cenderung selaras, seperti membeli rumah, membangun portofolio investasi, atau menabung untuk dana pensiun. Dengan pendekatan yang terencana dan terorganisir, mereka dapat mencapai tujuan finansial dengan efisiensi dan harmoni.",
    },
    "Orderly x Ups and Downs": {
        lifestyle: "Pasangan Ups and Downs x Orderly menghadirkan kombinasi yang dinamis. Si Ups and Downs memiliki kebiasaan keuangan yang fluktuatif, dengan momen hemat diimbangi dengan pengeluaran impulsif. Sebaliknya, si Orderly sangat terorganisir dalam mengelola keuangan, memiliki tabungan yang baik, tetapi tetap menikmati belanja untuk barang-barang trendi. Orderly membawa struktur dan kestabilan, sementara Ups and Downs menambahkan elemen spontanitas dalam hubungan.",
        moneyManagement: "Orderly cenderung mengambil peran sebagai pihak yang mengatur anggaran dan memastikan rencana keuangan berjalan dengan baik. Sementara itu, Ups and Downs dapat membantu menciptakan fleksibilitas, tetapi perlu diawasi agar kebiasaan impulsif mereka tidak mengganggu kestabilan yang dibangun oleh Orderly.",
        futureTarget: "Dengan komunikasi yang baik, pasangan ini dapat menetapkan tujuan bersama, seperti menabung untuk investasi atau membeli barang besar. Orderly akan menjaga arah dan konsistensi, sementara Ups and Downs dapat mendukung selama ada ruang untuk spontanitas.",
    },

    "Can't Control Finance x Can't Control Finance": {
        lifestyle: "Ketika dua orang dengan tipe Cannot Control Finances menjalin hubungan, dinamika keuangan mereka menjadi tantangan besar. Keduanya sering kesulitan mengelola pengeluaran, mudah terjebak dalam pembelian impulsif, dan cenderung memiliki utang yang sulit diatasi. Tanpa kepemimpinan atau strategi yang jelas dalam pengelolaan uang, hubungan ini berisiko menghadapi masalah keuangan yang serius.",
        moneyManagement: "Karena keduanya memiliki kebiasaan finansial yang kurang terkontrol, pasangan ini mungkin kesulitan menyusun anggaran, melunasi utang, atau menabung. Tanpa perubahan signifikan dalam kebiasaan mereka, hubungan ini berisiko terjebak dalam siklus utang dan ketidakstabilan keuangan.",
        futureTarget: "Pasangan ini mungkin kesulitan memiliki tujuan keuangan jangka panjang karena fokus mereka lebih pada kebutuhan jangka pendek atau menyelesaikan masalah keuangan yang sudah ada. Mereka perlu bekerja sama untuk mengubah pola pikir dan mulai membangun rencana keuangan yang realistis.",
    },
    "Can't Control Finance x Economizer": {
        lifestyle: "Pasangan ini menghadapi tantangan besar dalam pengelolaan keuangan. Si Cannot Control Finances sering kesulitan mengelola uang, mudah terjebak dalam pengeluaran impulsif, dan cenderung memiliki utang yang sulit diatasi. Di sisi lain, si Economizer berusaha keras untuk mengelola anggaran dengan hati-hati, tetapi sering terbebani oleh utang dan memiliki sedikit tabungan. Keduanya memiliki beban finansial yang signifikan, yang bisa membuat hubungan ini penuh tekanan jika tidak ada strategi bersama.",
        moneyManagement: "Si Economizer membawa upaya untuk efisiensi dan penghematan, meskipun keterbatasan tabungan dan utang mereka dapat menjadi hambatan. Sementara itu, Cannot Control Finances perlu bimbingan untuk mengurangi pengeluaran impulsif dan fokus pada perbaikan kebiasaan keuangan. Kombinasi ini membutuhkan kerja sama yang besar untuk mengatasi utang dan membangun stabilitas keuangan.",
        futureTarget: "Kedua pihak mungkin kesulitan memiliki rencana keuangan jangka panjang karena fokus mereka lebih pada masalah keuangan yang ada. Mereka perlu mendiskusikan tujuan bersama yang realistis, seperti melunasi utang terlebih dahulu sebelum membangun tabungan atau investasi.",
    },
    "Can't Control Finance x Diligent": {
        lifestyle: "Si Cannot Control Finances sering berusaha mengelola keuangan, tetapi gagal mempertahankan disiplin, cenderung memiliki utang, dan kerap terjebak dalam pengeluaran impulsif. Di sisi lain, si Diligent adalah individu yang bekerja keras untuk menghasilkan uang, disiplin dalam penghematan, dan sangat menghindari utang. Kombinasi ini menghadirkan tantangan, karena Diligent cenderung merasa frustrasi dengan kebiasaan keuangan Cannot Control Finances, sementara Cannot Control Finances mungkin merasa tertekan dengan ekspektasi tinggi dari pasangannya.",
        moneyManagement: "Diligent membawa etos kerja keras dan ketekunan dalam menjaga keuangan tetap stabil, sedangkan Cannot Control Finances membutuhkan bimbingan untuk mengontrol kebiasaan belanja dan mengatasi utang. Jika Diligent dapat mendukung perubahan positif pada pasangan mereka, hubungan ini dapat berkembang menuju stabilitas finansial.",
        futureTarget: "Si Diligent cenderung memiliki rencana keuangan jangka panjang yang kuat, seperti menabung untuk investasi atau tujuan besar lainnya. Sebaliknya, Cannot Control Finances mungkin kesulitan membuat rencana karena fokus mereka sering teralihkan oleh masalah keuangan jangka pendek. Pasangan ini perlu menyelaraskan prioritas untuk mencapai tujuan bersama.",
    },
    "Can't Control Finance x Binger": {
        lifestyle: "Pasangan Cannot Control Finances x Binger memiliki kebiasaan keuangan yang kurang stabil. Si Cannot Control Finances berusaha mengelola keuangan tetapi sering gagal, sehingga mereka cenderung memiliki utang. Sementara itu, si Binger suka belanja impulsif tanpa perencanaan yang jelas, tetapi biasanya tidak memiliki banyak utang karena tidak terbiasa menggunakan kredit. Kombinasi ini menciptakan dinamika yang penuh tantangan karena keduanya kurang terorganisir dalam pengelolaan keuangan.",
        moneyManagement: "Keduanya memiliki kecenderungan untuk mengabaikan anggaran atau perencanaan jangka panjang. Si Cannot Control Finances mungkin mencoba memperbaiki keuangan mereka tetapi kesulitan untuk konsisten, sementara si Binger lebih fokus pada kepuasan sesaat daripada pengelolaan uang yang terencana. Ini membuat hubungan mereka rentan terhadap masalah keuangan yang signifikan.",
        futureTarget: "Pasangan ini kemungkinan besar tidak memiliki rencana keuangan jangka panjang yang jelas. Si Binger fokus pada pengeluaran untuk kesenangan saat ini, sedangkan si Cannot Control Finances berjuang untuk mengelola situasi utang mereka. Mereka perlu menemukan cara untuk menyelaraskan prioritas dan membuat tujuan keuangan bersama.",
    },
    "Can't Control Finance x Orderly": {
        lifestyle: "Si Cannot Control Finances sering kali berjuang untuk mengelola keuangan dengan baik, terjebak dalam pengeluaran impulsif, dan cenderung memiliki utang. Di sisi lain, si Orderly sangat terorganisir, memiliki tabungan yang cukup, dan suka menikmati belanja untuk hal-hal trendi tanpa mengorbankan stabilitas keuangan. Kombinasi ini menghadirkan tantangan karena pendekatan keuangan mereka sangat berbeda.",
        moneyManagement: "Si Orderly membawa struktur, perencanaan, dan stabilitas ke dalam hubungan. Mereka cenderung ingin membantu pasangan mereka, tetapi mungkin merasa frustrasi dengan kesulitan si Cannot Control Finances dalam mengubah kebiasaan mereka. Cannot Control Finances membutuhkan bimbingan yang penuh empati dari Orderly untuk mengembangkan kebiasaan finansial yang lebih sehat.",
        futureTarget: "Si Orderly memiliki tujuan keuangan yang jelas, seperti menabung untuk investasi atau pengeluaran besar yang sudah direncanakan. Sebaliknya, si Cannot Control Finances sering kali fokus pada kebutuhan jangka pendek dan sulit untuk memprioritaskan tujuan jangka panjang. Pasangan ini perlu menyelaraskan prioritas untuk mencapai stabilitas keuangan bersama.",
    },
    "Can't Control Finance x Planner": {
        lifestyle: "Si Planner sangat disiplin, terencana, dan hemat, dengan fokus pada tujuan keuangan jangka panjang seperti tabungan dan investasi. Sebaliknya, si Cannot Control Finances sering kesulitan mengelola uang, terjebak dalam pengeluaran impulsif, dan cenderung memiliki utang. Kombinasi ini menghadirkan tantangan besar karena perbedaan drastis dalam pendekatan terhadap keuangan. Planner akan berusaha membawa struktur, sementara Cannot Control Finances mungkin merasa kesulitan mengikuti aturan ketat.",
        moneyManagement: "Planner dapat membawa stabilitas dan panduan ke dalam hubungan, tetapi keberhasilan hubungan ini sangat bergantung pada kesediaan Cannot Control Finances untuk berubah. Jika Cannot Control Finances bersedia menerima bimbingan dan belajar mengelola uang dengan lebih baik, hubungan ini dapat berkembang menjadi lebih stabil.",
        futureTarget: "Si Planner memiliki rencana jangka panjang yang terstruktur, seperti menabung untuk rumah atau investasi. Sementara itu, Cannot Control Finances sering kali terjebak dalam mengatasi masalah keuangan jangka pendek. Pasangan ini perlu menyelaraskan tujuan mereka agar dapat bergerak maju bersama.",
    },
    "Can't Control Finance x Ups and Downs": {
        lifestyle: "Kombinasi Ups and Downs x Cannot Control Finances menciptakan hubungan dengan dinamika keuangan yang sangat menantang. Si Ups and Downs memiliki kebiasaan keuangan yang fluktuatif, kadang hemat tetapi sering impulsif. Sebaliknya, Cannot Control Finances sering kesulitan mengelola keuangan, cenderung berutang, dan gagal mempertahankan pengelolaan yang konsisten. Tanpa perencanaan yang matang, pasangan ini berisiko menghadapi ketidakstabilan finansial yang serius.",
        moneyManagement: "Keduanya cenderung kurang disiplin dalam pengelolaan keuangan. Ups and Downs mungkin memiliki momen hemat yang dapat membantu, tetapi kebiasaan belanja impulsif dari kedua pihak dapat memperburuk situasi keuangan. Hubungan ini membutuhkan usaha bersama untuk membangun kebiasaan yang lebih stabil dan terstruktur.",
        futureTarget: "Pasangan ini mungkin kesulitan menetapkan tujuan keuangan jangka panjang karena fokus mereka sering kali hanya pada kebutuhan jangka pendek atau menyelesaikan masalah keuangan yang mendesak. Mereka perlu menyelaraskan prioritas agar bisa mencapai stabilitas.",
    },

    "Planner x Planner": {
        lifestyle: "Pasangan Planner x Planner adalah kombinasi yang sangat terstruktur dan disiplin dalam pengelolaan keuangan. Keduanya sama-sama hemat, aktif menabung, dan memiliki rencana jangka panjang yang jelas, seperti investasi atau membeli rumah. Mereka cenderung memiliki gaya hidup yang sangat terencana dan fokus pada stabilitas keuangan. Hubungan ini menghadirkan harmoni karena kedua pihak memiliki visi yang selaras.",
        moneyManagement: "Pasangan ini sangat pandai membuat anggaran, menetapkan tujuan keuangan, dan melacak pengeluaran mereka. Mereka tidak hanya menjaga stabilitas finansial tetapi juga bekerja sama untuk mencapai tujuan yang lebih besar. Dengan pendekatan yang sama, pasangan ini memiliki sedikit risiko konflik terkait keuangan.",
        futureTarget: "Si Planner x Planner memiliki kemampuan untuk menetapkan dan mencapai tujuan finansial yang ambisius. Mereka akan saling mendukung dalam menabung untuk dana pensiun, investasi, atau pembelian besar seperti rumah, kendaraan, atau pendidikan anak.",
    },
    "Planner x Economizer": {
        lifestyle: "Si Planner adalah individu yang sangat terencana, disiplin, dan hemat. Mereka memiliki kebiasaan menabung aktif dan bebas dari utang. Sebaliknya, si Economizer berusaha mengelola anggaran dengan hati-hati, tetapi sering terbebani oleh utang dan memiliki sedikit tabungan. Pasangan ini menghadirkan dinamika yang menarik, di mana Planner dapat membawa stabilitas dan panduan, sementara Economizer menawarkan efisiensi pengeluaran.",
        moneyManagement: "Si Planner memiliki kemampuan untuk membuat rencana jangka panjang, yang dapat membantu Economizer keluar dari situasi utang mereka. Sebaliknya, Economizer dapat memberikan ide-ide kreatif untuk menghemat pengeluaran sehari-hari. Kombinasi ini memiliki potensi besar untuk menciptakan stabilitas finansial, selama ada komunikasi yang baik.",
        futureTarget: "Si Planner fokus pada menabung untuk masa depan, seperti dana pensiun atau investasi, sementara si Economizer mungkin lebih terjebak dalam mengatasi utang mereka. Dengan bantuan Planner, pasangan ini dapat bekerja sama untuk melunasi utang Economizer terlebih dahulu sebelum mengejar tujuan jangka panjang.",
    },
    "Planner x Diligent": {
        lifestyle: "Si Planner adalah individu yang terencana, hemat, dan fokus pada tujuan keuangan jangka panjang seperti menabung dan investasi. Sementara itu, si Diligent adalah pekerja keras yang berusaha keras menghemat dan menghasilkan uang, dengan kebiasaan yang cenderung menghindari utang. Keduanya memiliki kesamaan dalam pola pikir keuangan yang disiplin, menjadikan pasangan ini salah satu kombinasi paling stabil secara finansial.",
        moneyManagement: "Dengan karakteristik yang mirip, pasangan ini kemungkinan akan dengan mudah menyusun anggaran bersama, menetapkan tujuan jangka panjang, dan bekerja sama untuk mencapainya. Planner membawa struktur dan strategi jangka panjang, sementara Diligent berkontribusi dengan kerja keras dan kemauan untuk terus berhemat.",
        futureTarget: "Pasangan ini memiliki kemampuan untuk menyelaraskan tujuan keuangan mereka, seperti membangun tabungan, membeli rumah, atau berinvestasi. Dengan kerja sama yang kuat, mereka dapat mencapai tujuan finansial lebih cepat daripada kebanyakan pasangan.",
    },
    "Planner x Binger": {
        lifestyle: "Si Planner sangat terencana, hemat, dan fokus pada tujuan jangka panjang seperti menabung dan investasi. Sebaliknya, si Binger suka belanja impulsif tanpa perencanaan keuangan yang baik, tetapi biasanya tidak memiliki banyak utang. Kombinasi ini menciptakan dinamika yang penuh tantangan, karena Planner cenderung mengutamakan kestabilan dan kontrol, sementara Binger lebih santai dan mencari kepuasan sesaat melalui pengeluaran.",
        moneyManagement: "Planner akan mencoba membawa struktur dan rencana keuangan yang jelas ke dalam hubungan, sementara Binger mungkin merasa kesulitan untuk mengikuti aturan ketat. Hubungan ini membutuhkan komunikasi yang baik agar keduanya dapat menyesuaikan pendekatan mereka terhadap keuangan.",
        futureTarget: "Si Planner fokus pada tujuan jangka panjang seperti investasi atau menabung untuk rumah, sedangkan Binger mungkin tidak terlalu peduli dengan rencana keuangan masa depan. Pasangan ini perlu berdiskusi secara terbuka untuk menemukan keseimbangan antara pengelolaan keuangan yang disiplin dan ruang untuk menikmati hidup.",
    },
    "Planner x Orderly": {
        lifestyle: "Si Planner adalah individu yang disiplin, hemat, dan terencana, dengan fokus pada tujuan jangka panjang seperti tabungan dan investasi. Di sisi lain, si Orderly sangat terorganisir dalam pengelolaan keuangan, memiliki tabungan yang memadai, tetapi juga menikmati belanja untuk hal-hal trendi yang mereka sukai. Kombinasi ini menghadirkan pasangan yang harmonis, di mana Planner membawa stabilitas finansial dan visi jangka panjang, sementara Orderly menawarkan keseimbangan dengan menyelipkan ruang untuk menikmati hidup.",
        moneyManagement: "Si Planner akan menjadi pemimpin dalam perencanaan keuangan strategis, sementara si Orderly memastikan bahwa rencana berjalan dengan baik tanpa melupakan elemen kesenangan. Keduanya memiliki kemampuan untuk bekerja sama dengan baik dalam membuat anggaran, menabung, dan mengelola pengeluaran.",
        futureTarget: "Keduanya memiliki tujuan keuangan yang jelas dan cenderung selaras, seperti membeli rumah, membangun portofolio investasi, atau menabung untuk dana pensiun. Dengan pendekatan yang terencana dan terorganisir, mereka dapat mencapai tujuan finansial dengan efisiensi dan harmoni.",
    },
    "Planner x Can't Control Finance": {
        lifestyle: "Si Planner sangat disiplin, terencana, dan hemat, dengan fokus pada tujuan keuangan jangka panjang seperti tabungan dan investasi. Sebaliknya, si Cannot Control Finances sering kesulitan mengelola uang, terjebak dalam pengeluaran impulsif, dan cenderung memiliki utang. Kombinasi ini menghadirkan tantangan besar karena perbedaan drastis dalam pendekatan terhadap keuangan. Planner akan berusaha membawa struktur, sementara Cannot Control Finances mungkin merasa kesulitan mengikuti aturan ketat.",
        moneyManagement: "Planner dapat membawa stabilitas dan panduan ke dalam hubungan, tetapi keberhasilan hubungan ini sangat bergantung pada kesediaan Cannot Control Finances untuk berubah. Jika Cannot Control Finances bersedia menerima bimbingan dan belajar mengelola uang dengan lebih baik, hubungan ini dapat berkembang menjadi lebih stabil.",
        futureTarget: "Si Planner memiliki rencana jangka panjang yang terstruktur, seperti menabung untuk rumah atau investasi. Sementara itu, Cannot Control Finances sering kali terjebak dalam mengatasi masalah keuangan jangka pendek. Pasangan ini perlu menyelaraskan tujuan mereka agar dapat bergerak maju bersama.",
    },
    "Planner x Ups and Downs": {
        lifestyle: "Pasangan Ups and Downs x Planner menghadirkan kombinasi yang menarik. Si Planner sangat disiplin, terstruktur, dan fokus pada tujuan jangka panjang seperti tabungan dan investasi. Sementara itu, si Ups and Downs memiliki kebiasaan keuangan yang fluktuatif, dengan momen hemat yang diimbangi oleh pengeluaran impulsif. Planner membawa stabilitas dan arah keuangan, sementara Ups and Downs menambahkan fleksibilitas dan spontanitas dalam hubungan.",
        moneyManagement: "Planner akan menjadi pemimpin dalam perencanaan dan menjaga stabilitas keuangan, sementara Ups and Downs memiliki potensi untuk mendukung rencana ini, terutama selama fase hemat mereka. Hubungan ini dapat bekerja dengan baik jika Planner mampu mengakomodasi kebutuhan spontan Ups and Downs dan membantu mereka menjadi lebih konsisten.",
        futureTarget: "Si Planner memiliki rencana jangka panjang yang jelas, seperti menabung untuk dana pensiun atau membeli rumah, sedangkan Ups and Downs lebih fokus pada kebutuhan jangka pendek. Pasangan ini perlu bekerja sama untuk menyelaraskan tujuan keuangan mereka.",
    },

    "Ups and Downs x Ups and Downs": {
        lifestyle: "Pasangan Ups and Downs x Ups and Downs menghadirkan dinamika keuangan yang penuh tantangan karena keduanya memiliki pola keuangan yang fluktuatif. Ada momen di mana mereka sangat hemat, tetapi juga ada waktu ketika pengeluaran impulsif mendominasi. Hubungan ini dapat berjalan dengan baik jika keduanya mampu menyelaraskan momen hemat mereka untuk mencapai tujuan keuangan yang nyata.",
        moneyManagement: "Kedua pihak cenderung kesulitan mempertahankan konsistensi dalam pengelolaan keuangan. Namun, mereka dapat memanfaatkan momen ketika keduanya berada dalam fase hemat untuk menabung atau melunasi utang. Dengan rencana yang jelas dan dukungan satu sama lain, pasangan ini dapat mengubah kebiasaan mereka secara bertahap.",
        futureTarget: "Pasangan ini mungkin sulit menetapkan dan mencapai tujuan keuangan jangka panjang karena fokus mereka sering kali terpecah antara momen penghematan dan pengeluaran impulsif. Untuk sukses, mereka perlu berkomitmen pada tujuan kecil yang dapat dicapai secara bersama-sama.",
    },
    "Ups and Downs x Economizer": {
        lifestyle: "Si Ups and Downs memiliki perilaku keuangan yang fluktuatif, kadang sangat hemat tetapi di lain waktu belanja impulsif tanpa rencana. Di sisi lain, si Economizer berusaha mengelola anggaran dengan hati-hati, tetapi sering terbebani oleh utang dan memiliki sedikit tabungan. Kombinasi ini menghadirkan tantangan besar karena keduanya cenderung mengalami ketidakstabilan finansial, baik karena perilaku impulsif maupun beban utang yang ada.",
        moneyManagement: "Economizer mencoba menjaga efisiensi dalam pengeluaran sehari-hari, tetapi utang mereka menjadi hambatan besar untuk membangun stabilitas keuangan. Ups and Downs mungkin memiliki momen hemat yang membantu, tetapi perilaku impulsif mereka dapat memperburuk situasi keuangan pasangan. Hubungan ini membutuhkan upaya besar untuk menciptakan keseimbangan dan konsistensi dalam pengelolaan uang.",
        futureTarget: "Pasangan ini mungkin kesulitan untuk fokus pada tujuan keuangan jangka panjang karena terlalu banyak waktu yang dihabiskan untuk mengatasi masalah keuangan jangka pendek seperti pembayaran utang atau kebutuhan mendesak. Diskusi terbuka diperlukan untuk menyelaraskan prioritas mereka.",
    },
    "Ups and Downs x Diligent": {
        lifestyle: "Si Ups and Downs memiliki kebiasaan keuangan yang tidak konsisten, dengan momen-momen hemat diimbangi oleh pengeluaran impulsif. Sebaliknya, si Diligent adalah pekerja keras yang fokus pada penghematan dan menghasilkan uang, dengan kebiasaan yang disiplin dan cenderung menghindari utang. Kombinasi ini menciptakan dinamika yang menarik, di mana Diligent membawa stabilitas, sementara Ups and Downs menawarkan fleksibilitas yang dapat membantu Diligent untuk lebih menikmati hidup.",
        moneyManagement: "Diligent dapat menjadi pengarah utama dalam hubungan ini, membantu Ups and Downs untuk lebih konsisten dalam kebiasaan finansial mereka. Di sisi lain, Ups and Downs dapat membantu Diligent menemukan cara untuk bersantai dan menikmati hasil kerja keras mereka tanpa terlalu khawatir tentang uang.",
        futureTarget: "Pasangan ini dapat bekerja sama untuk menetapkan tujuan keuangan bersama, seperti menabung untuk rumah atau dana pensiun. Diligent akan berfokus pada pelaksanaan, sementara Ups and Downs memberikan fleksibilitas dalam menghadapi perubahan situasi atau kebutuhan mendadak.",
    },
    "Ups and Downs x Binger": {
        lifestyle: "Kombinasi Ups and Downs x Binger menciptakan pasangan dengan kecenderungan finansial yang impulsif. Si Ups and Downs memiliki pola keuangan yang fluktuatif, kadang hemat tetapi sering impulsif. Di sisi lain, Binger cenderung belanja tanpa perencanaan dan menikmati kepuasan instan tanpa memikirkan konsekuensi jangka panjang. Hubungan ini berisiko menjadi tidak stabil jika tidak ada struktur atau rencana keuangan yang jelas.",
        moneyManagement: "Keduanya memiliki kesulitan untuk konsisten dalam pengelolaan uang. Ups and Downs mungkin mencoba untuk menghemat di saat-saat tertentu, tetapi pengeluaran impulsif dari Binger dapat membuat usaha tersebut sia-sia. Hubungan ini membutuhkan komitmen bersama untuk menetapkan batas pengeluaran dan tujuan keuangan.",
        futureTarget: "Pasangan ini cenderung fokus pada kebutuhan jangka pendek dan kurang perhatian pada tujuan jangka panjang seperti tabungan atau investasi. Untuk mengatasi hal ini, mereka perlu bekerja sama menetapkan tujuan yang realistis dan membangun kebiasaan finansial yang lebih disiplin.",
    },
    "Ups and Downs x Orderly": {
        lifestyle: "Pasangan Ups and Downs x Orderly menghadirkan kombinasi yang dinamis. Si Ups and Downs memiliki kebiasaan keuangan yang fluktuatif, dengan momen hemat diimbangi dengan pengeluaran impulsif. Sebaliknya, si Orderly sangat terorganisir dalam mengelola keuangan, memiliki tabungan yang baik, tetapi tetap menikmati belanja untuk barang-barang trendi. Orderly membawa struktur dan kestabilan, sementara Ups and Downs menambahkan elemen spontanitas dalam hubungan.",
        moneyManagement: "Orderly cenderung mengambil peran sebagai pihak yang mengatur anggaran dan memastikan rencana keuangan berjalan dengan baik. Sementara itu, Ups and Downs dapat membantu menciptakan fleksibilitas, tetapi perlu diawasi agar kebiasaan impulsif mereka tidak mengganggu kestabilan yang dibangun oleh Orderly.",
        futureTarget: "Dengan komunikasi yang baik, pasangan ini dapat menetapkan tujuan bersama, seperti menabung untuk investasi atau membeli barang besar. Orderly akan menjaga arah dan konsistensi, sementara Ups and Downs dapat mendukung selama ada ruang untuk spontanitas.",
    },
    "Ups and Downs x Can't Control Finance": {
        lifestyle: "Kombinasi Ups and Downs x Cannot Control Finances menciptakan hubungan dengan dinamika keuangan yang sangat menantang. Si Ups and Downs memiliki kebiasaan keuangan yang fluktuatif, kadang hemat tetapi sering impulsif. Sebaliknya, Cannot Control Finances sering kesulitan mengelola keuangan, cenderung berutang, dan gagal mempertahankan pengelolaan yang konsisten. Tanpa perencanaan yang matang, pasangan ini berisiko menghadapi ketidakstabilan finansial yang serius.",
        moneyManagement: "Keduanya cenderung kurang disiplin dalam pengelolaan keuangan. Ups and Downs mungkin memiliki momen hemat yang dapat membantu, tetapi kebiasaan belanja impulsif dari kedua pihak dapat memperburuk situasi keuangan. Hubungan ini membutuhkan usaha bersama untuk membangun kebiasaan yang lebih stabil dan terstruktur.",
        futureTarget: "Pasangan ini mungkin kesulitan menetapkan tujuan keuangan jangka panjang karena fokus mereka sering kali hanya pada kebutuhan jangka pendek atau menyelesaikan masalah keuangan yang mendesak. Mereka perlu menyelaraskan prioritas agar bisa mencapai stabilitas.",
    },
    "Ups and Downs x Planner": {
        lifestyle: "Pasangan Ups and Downs x Planner menghadirkan kombinasi yang menarik. Si Planner sangat disiplin, terstruktur, dan fokus pada tujuan jangka panjang seperti tabungan dan investasi. Sementara itu, si Ups and Downs memiliki kebiasaan keuangan yang fluktuatif, dengan momen hemat yang diimbangi oleh pengeluaran impulsif. Planner membawa stabilitas dan arah keuangan, sementara Ups and Downs menambahkan fleksibilitas dan spontanitas dalam hubungan.",
        moneyManagement: "Planner akan menjadi pemimpin dalam perencanaan dan menjaga stabilitas keuangan, sementara Ups and Downs memiliki potensi untuk mendukung rencana ini, terutama selama fase hemat mereka. Hubungan ini dapat bekerja dengan baik jika Planner mampu mengakomodasi kebutuhan spontan Ups and Downs dan membantu mereka menjadi lebih konsisten.",
        futureTarget: "Si Planner memiliki rencana jangka panjang yang jelas, seperti menabung untuk dana pensiun atau membeli rumah, sedangkan Ups and Downs lebih fokus pada kebutuhan jangka pendek. Pasangan ini perlu bekerja sama untuk menyelaraskan tujuan keuangan mereka.",
    },
}

export const CONFLICT_RESULT = {
    "Economizer x Economizer": {
        firstConflictTitle: "Ketegangan Akibat Utang yang Sama-Sama Tinggi:",
        firstConflictDescription: "Beban utang dari kedua pihak dapat memicu tekanan emosional, terutama jika mereka merasa tidak ada kemajuan signifikan.",
        secondConflictTitle: "Kurangnya Fokus pada Tujuan Jangka Panjang:",
        secondConflictDescription: "Karena keduanya terjebak dalam pola mengelola utang, mereka mungkin tidak memberikan cukup perhatian pada rencana untuk masa depan.",
        thirdConflictTitle: "Persaingan dalam Menekan Pengeluaran:",
        thirdConflictDescription: "Keduanya mungkin menjadi terlalu fokus pada penghematan kecil, yang bisa memicu perasaan frustrasi atau tekanan dalam hubungan.",
    },
    "Economizer x Diligent": {
        firstConflictTitle: "Perbedaan Pendekatan dalam Menangani Pengeluaran:",
        firstConflictDescription: "Si Economizer mungkin akan merasa frustrasi jika si Diligent menganggap pengeluaran tambahan sebagai hal yang wajar untuk meningkatkan kualitas hidup atau bekerja lebih keras. Sebaliknya, si Diligent bisa merasa terbebani dengan kebiasaan hemat yang terlalu ketat dari Economizer, yang bisa membuatnya merasa \"terbatas\" dalam menikmati hasil kerja keras mereka.",
        secondConflictTitle: "Fokus yang Berbeda pada Pengelolaan Keuangan:",
        secondConflictDescription: "Si Economizer lebih banyak fokus pada penghematan dan pengendalian pengeluaran, sedangkan si Diligent berfokus pada menambah pendapatan dan mengoptimalkan sumber daya. Ketegangan mungkin muncul jika salah satu merasa terlalu fokus pada aspek yang lain—misalnya, Economizer merasa penghematan lebih penting daripada menambah pendapatan, sementara Diligent merasa bahwa kerja keras lebih penting daripada terlalu khawatir tentang pengeluaran.",
        thirdConflictTitle: "Ketidakseimbangan dalam Pengelolaan Waktu dan Uang:",
        thirdConflictDescription: "Si Diligent sering bekerja ekstra atau mencari peluang pendapatan tambahan, sementara Economizer mungkin lebih memilih untuk menjaga keseimbangan hidup dengan mengurangi pengeluaran dan tidak terlalu fokus pada kerja ekstra. Konflik bisa terjadi jika Diligent merasa bahwa Economizer tidak cukup berusaha atau tidak melihat pentingnya peningkatan pendapatan jangka panjang.",
    },
    "Economizer x Binger": {
        firstConflictTitle: "Perbedaan Pendekatan terhadap Pengeluaran:",
        firstConflictDescription: "Si Economizer mungkin merasa frustrasi dengan kebiasaan belanja impulsif Binger, terutama jika hal tersebut memperburuk kondisi keuangan mereka. Di sisi lain, si Binger merasa tidak bebas dan terkekang oleh aturan hemat si Economizer.",
        secondConflictTitle: "Kesulitan Mencapai Tujuan Keuangan Bersama:",
        secondConflictDescription: "Economizer ingin memprioritaskan pelunasan utang dan tabungan, sementara Binger tidak memiliki motivasi yang sama. Hal ini dapat menciptakan ketegangan karena perbedaan fokus dan cara mengelola uang.",
        thirdConflictTitle: "Ketidakseimbangan dalam Gaya Hidup:",
        thirdConflictDescription: "Binger mungkin ingin menikmati pengalaman yang memerlukan pengeluaran besar, seperti liburan atau makan di restoran mahal, sementara Economizer lebih memilih cara hidup hemat untuk menjaga keuangan.",
    },
    "Economizer x Orderly": {
        firstConflictTitle: "Pendekatan terhadap Utang:",
        firstConflictDescription: "Si Economizer sering terbebani oleh utang, sementara si Orderly cenderung menghindari situasi keuangan yang tidak stabil. Ketegangan dapat muncul jika Orderly merasa harus menanggung beban utang yang bukan miliknya, atau jika Economizer merasa tertekan dengan standar keuangan yang lebih tinggi.",
        secondConflictTitle: "Pengeluaran untuk Hal-Hal Trendi:",
        secondConflictDescription: "Orderly menikmati belanja hal-hal trendi yang memberi mereka kepuasan, tetapi hal ini mungkin dianggap tidak perlu oleh Economizer, yang lebih fokus pada efisiensi pengeluaran. Konflik bisa muncul jika ada ketidaksepakatan tentang prioritas pengeluaran.",
        thirdConflictTitle: "Ketidakseimbangan dalam Tabungan:",
        thirdConflictDescription: "Si Orderly mungkin frustrasi dengan kesulitan Economizer dalam menabung karena beban utang mereka. Sebaliknya, Economizer bisa merasa minder atau tertekan jika tidak mampu berkontribusi secara signifikan terhadap tujuan keuangan bersama.",
    },
    "Economizer x Can't Control Finance": {
        firstConflictTitle: "Beban Utang yang Bertumpuk:",
        firstConflictDescription: "Kedua pihak cenderung memiliki utang, yang dapat memperburuk situasi keuangan bersama. Konflik dapat muncul jika salah satu merasa pasangan mereka tidak cukup bertanggung jawab untuk mengatasi masalah ini.",
        secondConflictTitle: "Ketidakseimbangan dalam Usaha Mengelola Keuangan:",
        secondConflictDescription: "Si Economizer mungkin merasa frustrasi karena mereka sudah berusaha keras untuk berhemat, sementara si Cannot Control Finances sering gagal mengendalikan pengeluaran mereka.",
        thirdConflictTitle: "Kekurangan Tabungan:",
        thirdConflictDescription: "Dengan keterbatasan tabungan dari kedua belah pihak, mereka mungkin kesulitan menghadapi situasi darurat, yang dapat menyebabkan stres dan ketegangan dalam hubungan.",
    },
    "Economizer x Planner": {
        firstConflictTitle: "Ketegangan Akibat Utang:",
        firstConflictDescription: "Si Planner mungkin merasa frustrasi dengan situasi utang Economizer, terutama jika itu memperlambat pencapaian tujuan finansial jangka panjang mereka.",
        secondConflictTitle: "Perbedaan dalam Prioritas Keuangan:",
        secondConflictDescription: "Planner cenderung fokus pada investasi atau tabungan besar, sementara Economizer lebih fokus pada efisiensi pengeluaran harian. Ketidaksesuaian ini bisa memicu konflik jika tidak diselaraskan.",
        thirdConflictTitle: "Kurangnya Fleksibilitas dari Planner:",
        thirdConflictDescription: "Si Planner yang sangat terencana mungkin terlalu kaku dalam anggaran mereka, yang dapat membuat Economizer merasa tertekan.",
    },
    "Economizer x Ups and Downs": {
        firstConflictTitle: "Ketidakstabilan Finansial:",
        firstConflictDescription: "Keduanya memiliki kebiasaan yang dapat mengarah pada ketidakstabilan keuangan, seperti utang dari Economizer dan pengeluaran impulsif dari Ups and Downs.",
        secondConflictTitle: "Kurangnya Rencana Keuangan yang Jelas:",
        secondConflictDescription: "Karena keduanya kurang disiplin dalam menetapkan dan mengikuti rencana keuangan, mereka mungkin kesulitan membuat kemajuan finansial bersama.",
        thirdConflictTitle: "Frustrasi Akibat Perilaku Keuangan yang Berbeda:",
        thirdConflictDescription: "Si Economizer mungkin merasa frustrasi dengan belanja impulsif Ups and Downs, sementara Ups and Downs merasa tertekan oleh fokus Economizer pada pelunasan utang.",
    },

    "Diligent x Diligent": {
        firstConflictTitle: "Terlalu Fokus pada Pekerjaan:",
        firstConflictDescription: "Karena keduanya sangat fokus pada pekerjaan dan peningkatan pendapatan, pasangan ini mungkin terlalu sibuk dengan karier dan usaha masing-masing, sehingga kurang waktu untuk menikmati kehidupan sosial bersama. Mereka bisa merasa terjebak dalam rutinitas yang terlalu sibuk tanpa memberi ruang untuk kegiatan yang menyenangkan atau relaksasi bersama.",
        secondConflictTitle: "Over-Planning dan Kekakuan:",
        secondConflictDescription: "Kedua pasangan ini mungkin cenderung membuat perencanaan yang sangat terperinci dan terkadang terlalu kaku. Jika salah satu dari mereka merasa perlu fleksibilitas dalam hal pengeluaran atau perencanaan, mereka bisa merasa terhambat oleh struktur yang terlalu ketat. Konflik bisa muncul jika keduanya merasa bahwa ada terlalu banyak kontrol dalam pengelolaan keuangan dan hidup bersama.",
        thirdConflictTitle: "Kekhawatiran Berlebih Terhadap Keuangan:",
        thirdConflictDescription: "Kedua pasangan ini cenderung khawatir tentang masa depan keuangan dan bisa sangat berhati-hati dalam membuat keputusan keuangan. Mereka bisa terjebak dalam rasa takut akan ketidakpastian finansial, yang membuat mereka ragu untuk mengambil keputusan besar atau menikmati hidup. Ketegangan bisa muncul jika salah satu pasangan merasa cemas atau tidak cukup yakin dengan keputusan finansial yang telah dibuat.",
        fourthConflictTitle: "Persaingan dalam Mencapai Tujuan:",
        fourthConflictDescription: "Karena keduanya sangat berorientasi pada pencapaian tujuan, bisa saja muncul persaingan yang tidak sehat antara pasangan untuk mencapai tujuan tertentu lebih cepat. Mereka mungkin merasa tekanan untuk menunjukkan kemajuan yang lebih cepat dalam hal keuangan atau karier, yang bisa menciptakan ketegangan dan perasaan tidak dihargai.",
    },
    "Diligent x Economizer": {
        firstConflictTitle: "Perbedaan Pendekatan dalam Menangani Pengeluaran:",
        firstConflictDescription: "Si Economizer mungkin akan merasa frustrasi jika si Diligent menganggap pengeluaran tambahan sebagai hal yang wajar untuk meningkatkan kualitas hidup atau bekerja lebih keras. Sebaliknya, si Diligent bisa merasa terbebani dengan kebiasaan hemat yang terlalu ketat dari Economizer, yang bisa membuatnya merasa \"terbatas\" dalam menikmati hasil kerja keras mereka.",
        secondConflictTitle: "Fokus yang Berbeda pada Pengelolaan Keuangan:",
        secondConflictDescription: "Si Economizer lebih banyak fokus pada penghematan dan pengendalian pengeluaran, sedangkan si Diligent berfokus pada menambah pendapatan dan mengoptimalkan sumber daya. Ketegangan mungkin muncul jika salah satu merasa terlalu fokus pada aspek yang lain—misalnya, Economizer merasa penghematan lebih penting daripada menambah pendapatan, sementara Diligent merasa bahwa kerja keras lebih penting daripada terlalu khawatir tentang pengeluaran.",
        thirdConflictTitle: "Ketidakseimbangan dalam Pengelolaan Waktu dan Uang:",
        thirdConflictDescription: "Si Diligent sering bekerja ekstra atau mencari peluang pendapatan tambahan, sementara Economizer mungkin lebih memilih untuk menjaga keseimbangan hidup dengan mengurangi pengeluaran dan tidak terlalu fokus pada kerja ekstra. Konflik bisa terjadi jika Diligent merasa bahwa Economizer tidak cukup berusaha atau tidak melihat pentingnya peningkatan pendapatan jangka panjang.",
    },
    "Diligent x Binger": {
        firstConflictTitle: "Perbedaan Prioritas Keuangan:",
        firstConflictDescription: "Si Diligent akan merasa frustrasi dengan kebiasaan belanja impulsif Binger, yang dapat menghambat pencapaian tujuan keuangan jangka panjang. Binger mungkin merasa tertekan oleh sikap Diligent yang terlalu serius dan kurang fleksibel dalam hal pengeluaran.",
        secondConflictTitle: "Kesulitan dalam Perencanaan Keuangan Bersama:",
        secondConflictDescription: "Diligent ingin membuat dan mengikuti anggaran yang ketat, sementara Binger cenderung mengabaikan anggaran dan mengeluarkan uang tanpa banyak pertimbangan. Ini bisa membuat sulit bagi mereka untuk merencanakan keuangan bersama secara efektif.",
        thirdConflictTitle: "Perbedaan Sikap terhadap Risiko dan Investasi:",
        thirdConflictDescription: "Si Diligent mungkin lebih tertarik pada investasi dan peningkatan pendapatan melalui usaha keras, sementara Binger kurang peduli dengan hal tersebut dan lebih fokus pada pengeluaran untuk kesenangan pribadi.",
        fourthConflictTitle: "Kesenjangan dalam Gaya Hidup:",
        fourthConflictDescription: "Binger mungkin ingin sering keluar untuk hiburan atau belanja, sedangkan Diligent lebih memilih menghemat dan fokus pada tujuan jangka panjang. Perbedaan ini bisa menyebabkan ketidakpuasan jika tidak ada kompromi.",
    },
    "Diligent x Orderly": {
        firstConflictTitle: "Belanja untuk Hal-Hal Trendi:",
        firstConflictDescription: "Orderly suka membeli barang-barang yang dianggap menarik atau trendi, yang mungkin dianggap tidak perlu oleh Diligent yang lebih konservatif dalam pengeluaran. Konflik kecil bisa muncul jika prioritas pengeluaran ini tidak disepakati bersama.",
        secondConflictTitle: "Pendekatan terhadap Risiko:",
        secondConflictDescription: "Si Diligent cenderung berhati-hati dalam mengambil risiko keuangan, sedangkan si Orderly mungkin lebih terbuka terhadap pengeluaran yang terencana tetapi kurang konservatif dibandingkan Diligent. Perbedaan ini dapat memunculkan diskusi tentang bagaimana menggunakan uang secara optimal.",
        thirdConflictTitle: "Gaya Hidup yang Berbeda:",
        thirdConflictDescription: "Orderly mungkin menginginkan keseimbangan antara tabungan dan kesenangan, sementara Diligent lebih fokus pada kerja keras dan penghematan. Jika tidak ada komunikasi yang baik, ini bisa menyebabkan salah satu merasa tidak didukung.",
    },
    "Diligent x Can't Control Finance": {
        firstConflictTitle: "Frustrasi Akibat Perbedaan Pendekatan Keuangan:",
        firstConflictDescription: "Si Diligent mungkin merasa bahwa usaha keras mereka untuk menghemat dan menghindari utang tidak seimbang dengan kebiasaan Cannot Control Finances, yang sering gagal mengendalikan pengeluaran.",
        secondConflictTitle: "Ketegangan Akibat Utang:",
        secondConflictDescription: "Beban utang dari Cannot Control Finances bisa menjadi sumber stres bagi Diligent, terutama jika utang tersebut menghambat kemampuan mereka untuk mencapai tujuan finansial bersama.",
        thirdConflictTitle: "Perasaan Tertekan pada Cannot Control Finances:",
        thirdConflictDescription: "Cannot Control Finances mungkin merasa bahwa Diligent terlalu kritis atau memiliki ekspektasi yang terlalu tinggi, yang dapat memicu konflik emosional.",
    },
    "Diligent x Planner": {
        firstConflictTitle: "Perbedaan Kecepatan dalam Mengambil Keputusan Keuangan:",
        firstConflictDescription: "Si Planner mungkin membutuhkan waktu lebih lama untuk merencanakan dan mempertimbangkan keputusan keuangan, sementara Diligent yang berorientasi pada tindakan mungkin lebih suka langsung bertindak. Hal ini dapat menyebabkan perdebatan kecil tentang kapan dan bagaimana menggunakan uang.",
        secondConflictTitle: "Ketegangan Akibat Standar Tinggi:",
        secondConflictDescription: "Keduanya memiliki standar tinggi dalam pengelolaan keuangan. Jika salah satu membuat kesalahan atau kurang berkontribusi, hal ini bisa memicu ketegangan, meskipun kecil.",
        thirdConflictTitle: "Kurangnya Ruang untuk Hiburan:",
        thirdConflictDescription: "Dengan fokus yang kuat pada tabungan dan tujuan keuangan, pasangan ini mungkin lupa untuk memberikan ruang bagi pengeluaran yang lebih santai atau spontan.",
    },
    "Diligent x Ups and Downs": {
        firstConflictTitle: "Ketidakstabilan dari Ups and Downs:",
        firstConflictDescription: "Diligent mungkin merasa frustrasi dengan kebiasaan impulsif Ups and Downs, terutama jika itu mengganggu rencana keuangan yang telah disusun.",
        secondConflictTitle: "Tekanan dari Diligent:",
        secondConflictDescription: "Ups and Downs mungkin merasa tertekan oleh ekspektasi tinggi Diligent dalam hal penghematan dan konsistensi finansial.",
        thirdConflictTitle: "Perbedaan Gaya Hidup:",
        thirdConflictDescription: "Diligent mungkin terlalu fokus pada pekerjaan dan penghematan, sementara Ups and Downs cenderung lebih spontan, yang dapat menyebabkan perbedaan pandangan tentang cara mengelola uang.",
    },

    "Binger x Binger": {
        firstConflictTitle: "Masalah Keuangan yang Meningkat:",
        firstConflictDescription: "Dengan gaya pengeluaran impulsif dari kedua belah pihak, mereka bisa menghadapi kesulitan keuangan yang serius. Ketegangan dapat muncul jika mereka tidak dapat memenuhi kebutuhan pokok atau jika utang mulai menumpuk.",
        secondConflictTitle: "Kurangnya Tujuan Finansial Bersama:",
        secondConflictDescription: "Karena keduanya lebih fokus pada pengeluaran untuk kepuasan saat ini, mereka mungkin kesulitan mencapai tujuan finansial jangka panjang. Konflik bisa muncul jika salah satu mulai merasa khawatir tentang stabilitas keuangan, sementara yang lain tetap menikmati gaya hidup boros.",
        thirdConflictTitle: "Ketidakmampuan Mengatasi Krisis Keuangan:",
        thirdConflictDescription: "Dalam situasi darurat, seperti kehilangan pekerjaan atau kebutuhan mendesak, pasangan ini mungkin tidak memiliki dana darurat yang cukup karena pola pengeluaran mereka yang tidak terencana. Hal ini dapat memicu stres dan konflik.",
    },
    "Binger x Economizer": {
        firstConflictTitle: "Perbedaan Pendekatan terhadap Pengeluaran:",
        firstConflictDescription: "Si Economizer mungkin merasa frustrasi dengan kebiasaan belanja impulsif Binger, terutama jika hal tersebut memperburuk kondisi keuangan mereka. Di sisi lain, si Binger merasa tidak bebas dan terkekang oleh aturan hemat si Economizer.",
        secondConflictTitle: "Kesulitan Mencapai Tujuan Keuangan Bersama:",
        secondConflictDescription: "Economizer ingin memprioritaskan pelunasan utang dan tabungan, sementara Binger tidak memiliki motivasi yang sama. Hal ini dapat menciptakan ketegangan karena perbedaan fokus dan cara mengelola uang.",
        thirdConflictTitle: "Ketidakseimbangan dalam Gaya Hidup:",
        thirdConflictDescription: "Binger mungkin ingin menikmati pengalaman yang memerlukan pengeluaran besar, seperti liburan atau makan di restoran mahal, sementara Economizer lebih memilih cara hidup hemat untuk menjaga keuangan.",
    },
    "Binger x Diligent": {
        firstConflictTitle: "Perbedaan Prioritas Keuangan:",
        firstConflictDescription: "Si Diligent akan merasa frustrasi dengan kebiasaan belanja impulsif Binger, yang dapat menghambat pencapaian tujuan keuangan jangka panjang. Binger mungkin merasa tertekan oleh sikap Diligent yang terlalu serius dan kurang fleksibel dalam hal pengeluaran.",
        secondConflictTitle: "Kesulitan dalam Perencanaan Keuangan Bersama:",
        secondConflictDescription: "Diligent ingin membuat dan mengikuti anggaran yang ketat, sementara Binger cenderung mengabaikan anggaran dan mengeluarkan uang tanpa banyak pertimbangan. Ini bisa membuat sulit bagi mereka untuk merencanakan keuangan bersama secara efektif.",
        thirdConflictTitle: "Perbedaan Sikap terhadap Risiko dan Investasi:",
        thirdConflictDescription: "Si Diligent mungkin lebih tertarik pada investasi dan peningkatan pendapatan melalui usaha keras, sementara Binger kurang peduli dengan hal tersebut dan lebih fokus pada pengeluaran untuk kesenangan pribadi.",
        fourthConflictTitle: "Kesenjangan dalam Gaya Hidup:",
        fourthConflictDescription: "Binger mungkin ingin sering keluar untuk hiburan atau belanja, sedangkan Diligent lebih memilih menghemat dan fokus pada tujuan jangka panjang. Perbedaan ini bisa menyebabkan ketidakpuasan jika tidak ada kompromi.",
    },
    "Binger x Orderly": {
        firstConflictTitle: "Gaya Pengeluaran yang Berbeda:",
        firstConflictDescription: "Si Binger sering mengeluarkan uang secara impulsif, yang bisa membuat si Orderly frustrasi karena mereka lebih suka perencanaan dan disiplin dalam pengeluaran.",
        secondConflictTitle: "Ketegangan atas Anggaran:",
        secondConflictDescription: "Orderly ingin memastikan semua pengeluaran sesuai anggaran, sementara Binger cenderung mengabaikan anggaran untuk membeli sesuatu yang mereka inginkan. Konflik dapat muncul jika Orderly merasa bahwa upaya mereka untuk menjaga stabilitas keuangan tidak dihargai.",
        thirdConflictTitle: "Kurangnya Keselarasan dalam Tujuan Keuangan:",
        thirdConflictDescription: "Si Orderly memiliki tujuan finansial yang terstruktur, sedangkan Binger sering tidak memikirkan masa depan. Ketidaksesuaian ini bisa menyebabkan frustrasi jika salah satu merasa bahwa yang lain tidak mendukung atau memahami prioritas mereka.",
    },
    "Binger x Can't Control Finance": {
        firstConflictTitle: "Ketidakstabilan Finansial:",
        firstConflictDescription: "Dengan pengeluaran impulsif dari Binger dan kesulitan mengelola uang dari Cannot Control Finances, pasangan ini berisiko mengalami kesulitan finansial yang serius.",
        secondConflictTitle: "Beban Utang:",
        secondConflictDescription: "Si Cannot Control Finances mungkin membawa utang ke dalam hubungan, yang dapat menjadi tekanan tambahan ketika Binger tidak membantu memperbaiki situasi keuangan.",
        thirdConflictTitle: "Kurangnya Kepemimpinan Keuangan:",
        thirdConflictDescription: "Tanpa salah satu pihak yang mampu memimpin dalam pengelolaan uang, pasangan ini mungkin kesulitan menciptakan stabilitas keuangan bersama.",
        fourthConflictTitle: "Perbedaan Pendekatan terhadap Risiko:",
        fourthConflictDescription: "Si Cannot Control Finances mungkin merasa cemas tentang situasi keuangan mereka, sementara si Binger lebih santai dan cenderung mengabaikan risiko.",
    },
    "Binger x Planner": {
        firstConflictTitle: "Perbedaan Prioritas Keuangan:",
        firstConflictDescription: "Planner cenderung ingin mengalokasikan dana untuk tabungan atau investasi, sementara Binger lebih suka menggunakan uang untuk pengeluaran spontan yang memberi kepuasan sesaat. Konflik bisa muncul jika keduanya tidak menyepakati prioritas bersama.",
        secondConflictTitle: "Frustrasi Akibat Ketidakdisiplinan:",
        secondConflictDescription: "Si Planner mungkin merasa frustrasi dengan kebiasaan belanja impulsif Binger, yang bisa menghambat pencapaian tujuan keuangan bersama.",
        thirdConflictTitle: "Perasaan Terkekang pada Binger:",
        thirdConflictDescription: "Si Binger mungkin merasa terlalu dikontrol oleh Planner, terutama jika mereka merasa tidak memiliki cukup kebebasan untuk mengelola uang sesuai keinginan mereka.",
    },
    "Binger x Ups and Downs": {
        firstConflictTitle: "Ketidakstabilan Finansial:",
        firstConflictDescription: "Tanpa adanya pihak yang disiplin secara finansial, pasangan ini berisiko terjebak dalam pengeluaran berlebihan dan kurangnya tabungan.",
        secondConflictTitle: "Kurangnya Fokus pada Tujuan Keuangan:",
        secondConflictDescription: "Dengan kebiasaan impulsif dari kedua pihak, sulit bagi pasangan ini untuk menetapkan atau mencapai tujuan jangka panjang.",
        thirdConflictTitle: "Frustrasi karena Kurangnya Kontrol Keuangan:",
        thirdConflictDescription: "Ketika Ups and Downs berada dalam fase hemat, mereka mungkin merasa frustrasi dengan kebiasaan belanja Binger, yang bisa memicu konflik.",
    },

    "Orderly x Orderly": {
        firstConflictTitle: "Kekakuan dalam Pengelolaan Keuangan:",
        firstConflictDescription: "Karena keduanya sangat terstruktur, ada risiko menjadi terlalu kaku dalam pengelolaan uang. Hal ini bisa menyebabkan ketegangan jika salah satu merasa bahwa ada terlalu banyak aturan atau kurang fleksibilitas dalam pengeluaran.",
        secondConflictTitle: "Kompetisi Tidak Sehat:",
        secondConflictDescription: "Jika salah satu merasa lebih baik dalam mengelola keuangan, ini dapat menciptakan kompetisi tidak sehat atau perasaan minder di pihak lain. Hal ini perlu diwaspadai agar tidak memengaruhi hubungan.",
        thirdConflictTitle: "Pengeluaran untuk Hal-Hal Trendi:",
        thirdConflictDescription: "Karena keduanya suka belanja untuk barang-barang trendi, konflik kecil bisa muncul jika mereka tidak sepakat tentang prioritas pengeluaran, seperti kapan dan berapa banyak uang yang dihabiskan untuk kesenangan.",
    },
    "Orderly x Economizer": {
        firstConflictTitle: "Pendekatan terhadap Utang:",
        firstConflictDescription: "Si Economizer sering terbebani oleh utang, sementara si Orderly cenderung menghindari situasi keuangan yang tidak stabil. Ketegangan dapat muncul jika Orderly merasa harus menanggung beban utang yang bukan miliknya, atau jika Economizer merasa tertekan dengan standar keuangan yang lebih tinggi.",
        secondConflictTitle: "Pengeluaran untuk Hal-Hal Trendi:",
        secondConflictDescription: "Orderly menikmati belanja hal-hal trendi yang memberi mereka kepuasan, tetapi hal ini mungkin dianggap tidak perlu oleh Economizer, yang lebih fokus pada efisiensi pengeluaran. Konflik bisa muncul jika ada ketidaksepakatan tentang prioritas pengeluaran.",
        thirdConflictTitle: "Ketidakseimbangan dalam Tabungan:",
        thirdConflictDescription: "Si Orderly mungkin frustrasi dengan kesulitan Economizer dalam menabung karena beban utang mereka. Sebaliknya, Economizer bisa merasa minder atau tertekan jika tidak mampu berkontribusi secara signifikan terhadap tujuan keuangan bersama.",
    },
    "Orderly x Diligent": {
        firstConflictTitle: "Belanja untuk Hal-Hal Trendi:",
        firstConflictDescription: "Orderly suka membeli barang-barang yang dianggap menarik atau trendi, yang mungkin dianggap tidak perlu oleh Diligent yang lebih konservatif dalam pengeluaran. Konflik kecil bisa muncul jika prioritas pengeluaran ini tidak disepakati bersama.",
        secondConflictTitle: "Pendekatan terhadap Risiko:",
        secondConflictDescription: "Si Diligent cenderung berhati-hati dalam mengambil risiko keuangan, sedangkan si Orderly mungkin lebih terbuka terhadap pengeluaran yang terencana tetapi kurang konservatif dibandingkan Diligent. Perbedaan ini dapat memunculkan diskusi tentang bagaimana menggunakan uang secara optimal.",
        thirdConflictTitle: "Gaya Hidup yang Berbeda:",
        thirdConflictDescription: "Orderly mungkin menginginkan keseimbangan antara tabungan dan kesenangan, sementara Diligent lebih fokus pada kerja keras dan penghematan. Jika tidak ada komunikasi yang baik, ini bisa menyebabkan salah satu merasa tidak didukung.",
    },
    "Orderly x Binger": {
        firstConflictTitle: "Gaya Pengeluaran yang Berbeda:",
        firstConflictDescription: "Si Binger sering mengeluarkan uang secara impulsif, yang bisa membuat si Orderly frustrasi karena mereka lebih suka perencanaan dan disiplin dalam pengeluaran.",
        secondConflictTitle: "Ketegangan atas Anggaran:",
        secondConflictDescription: "Orderly ingin memastikan semua pengeluaran sesuai anggaran, sementara Binger cenderung mengabaikan anggaran untuk membeli sesuatu yang mereka inginkan. Konflik dapat muncul jika Orderly merasa bahwa upaya mereka untuk menjaga stabilitas keuangan tidak dihargai.",
        thirdConflictTitle: "Kurangnya Keselarasan dalam Tujuan Keuangan:",
        thirdConflictDescription: "Si Orderly memiliki tujuan finansial yang terstruktur, sedangkan Binger sering tidak memikirkan masa depan. Ketidaksesuaian ini bisa menyebabkan frustrasi jika salah satu merasa bahwa yang lain tidak mendukung atau memahami prioritas mereka.",
    },
    "Orderly x Can't Control Finance": {
        firstConflictTitle: "Perbedaan Gaya Pengelolaan Keuangan:",
        firstConflictDescription: "Si Orderly cenderung disiplin dan terencana, sementara si Cannot Control Finances sulit mengikuti aturan keuangan yang konsisten. Hal ini bisa memicu frustrasi di kedua belah pihak.",
        secondConflictTitle: "Beban Utang:",
        secondConflictDescription: "Si Cannot Control Finances mungkin membawa utang yang menjadi beban emosional dan finansial dalam hubungan. Orderly mungkin merasa tertekan untuk membantu menyelesaikan masalah ini.",
        thirdConflictTitle: "Perasaan Dikontrol:",
        thirdConflictDescription: "Si Cannot Control Finances mungkin merasa terlalu diawasi atau dikendalikan oleh Orderly, yang bisa menyebabkan konflik emosional jika pendekatan tidak dilakukan dengan empati.",
    },
    "Orderly x Planner": {
        firstConflictTitle: "Pendekatan terhadap Pengeluaran Trendi:",
        firstConflictDescription: "Orderly suka membeli barang-barang trendi yang mungkin dianggap tidak perlu oleh Planner, yang lebih fokus pada efisiensi dan alokasi anggaran untuk tabungan atau investasi.",
        secondConflictTitle: "Kesulitan dalam Menyeimbangkan Rencana dan Fleksibilitas:",
        secondConflictDescription: "Planner mungkin terlalu fokus pada rencana jangka panjang, sementara Orderly lebih terbuka untuk menikmati hasil kerja keras di masa kini. Perbedaan ini dapat memicu perdebatan kecil tentang prioritas pengeluaran.",
        thirdConflictTitle: "Standar yang Tinggi dalam Pengelolaan Keuangan:",
        thirdConflictDescription: "Keduanya memiliki standar tinggi dalam mengelola keuangan, yang bisa menyebabkan ketegangan jika salah satu pihak merasa pasangan mereka kurang memenuhi ekspektasi.",
    },
    "Orderly x Ups and Downs": {
        firstConflictTitle: "Ketidakstabilan dari Ups and Downs:",
        firstConflictDescription: "Orderly mungkin merasa frustrasi dengan perilaku impulsif Ups and Downs, terutama jika itu mengganggu rencana keuangan yang telah mereka atur dengan rapi.",
        secondConflictTitle: "Perasaan Dikekang oleh Orderly:",
        secondConflictDescription: "Ups and Downs mungkin merasa kurang bebas karena kebiasaan mereka yang impulsif sering kali dikritik atau dibatasi oleh Orderly.",
        thirdConflictTitle: "Perbedaan Prioritas:",
        thirdConflictDescription: "Orderly mungkin lebih fokus pada menabung atau pengeluaran strategis, sementara Ups and Downs cenderung memprioritaskan spontanitas yang bisa memicu konflik.",
    },

    "Can't Control Finance x Can't Control Finance": {
        firstConflictTitle: "Ketidakstabilan Finansial:",
        firstConflictDescription: "Dengan kurangnya pengelolaan uang yang baik dari kedua belah pihak, pasangan ini bisa menghadapi tekanan finansial yang signifikan, terutama saat menghadapi kebutuhan mendesak.",
        secondConflictTitle: "Tumpukan Utang:",
        secondConflictDescription: "Jika keduanya memiliki utang, beban finansial ini bisa menjadi sumber ketegangan yang terus-menerus dalam hubungan.",
        thirdConflictTitle: "Kurangnya Kepemimpinan Keuangan:",
        thirdConflictDescription: "Tidak ada pihak yang secara alami mengambil peran dalam mengelola keuangan, sehingga pasangan ini mungkin kesulitan membuat dan mengikuti rencana yang terstruktur.",
    },
    "Can't Control Finance x Economizer": {
        firstConflictTitle: "Beban Utang yang Bertumpuk:",
        firstConflictDescription: "Kedua pihak cenderung memiliki utang, yang dapat memperburuk situasi keuangan bersama. Konflik dapat muncul jika salah satu merasa pasangan mereka tidak cukup bertanggung jawab untuk mengatasi masalah ini.",
        secondConflictTitle: "Ketidakseimbangan dalam Usaha Mengelola Keuangan:",
        secondConflictDescription: "Si Economizer mungkin merasa frustrasi karena mereka sudah berusaha keras untuk berhemat, sementara si Cannot Control Finances sering gagal mengendalikan pengeluaran mereka.",
        thirdConflictTitle: "Kekurangan Tabungan:",
        thirdConflictDescription: "Dengan keterbatasan tabungan dari kedua belah pihak, mereka mungkin kesulitan menghadapi situasi darurat, yang dapat menyebabkan stres dan ketegangan dalam hubungan.",
    },
    "Can't Control Finance x Diligent": {
        firstConflictTitle: "Frustrasi Akibat Perbedaan Pendekatan Keuangan:",
        firstConflictDescription: "Si Diligent mungkin merasa bahwa usaha keras mereka untuk menghemat dan menghindari utang tidak seimbang dengan kebiasaan Cannot Control Finances, yang sering gagal mengendalikan pengeluaran.",
        secondConflictTitle: "Ketegangan Akibat Utang:",
        secondConflictDescription: "Beban utang dari Cannot Control Finances bisa menjadi sumber stres bagi Diligent, terutama jika utang tersebut menghambat kemampuan mereka untuk mencapai tujuan finansial bersama.",
        thirdConflictTitle: "Perasaan Tertekan pada Cannot Control Finances:",
        thirdConflictDescription: "Cannot Control Finances mungkin merasa bahwa Diligent terlalu kritis atau memiliki ekspektasi yang terlalu tinggi, yang dapat memicu konflik emosional.",
    },
    "Can't Control Finance x Binger": {
        firstConflictTitle: "Ketidakstabilan Finansial:",
        firstConflictDescription: "Dengan pengeluaran impulsif dari Binger dan kesulitan mengelola uang dari Cannot Control Finances, pasangan ini berisiko mengalami kesulitan finansial yang serius.",
        secondConflictTitle: "Beban Utang:",
        secondConflictDescription: "Si Cannot Control Finances mungkin membawa utang ke dalam hubungan, yang dapat menjadi tekanan tambahan ketika Binger tidak membantu memperbaiki situasi keuangan.",
        thirdConflictTitle: "Kurangnya Kepemimpinan Keuangan:",
        thirdConflictDescription: "Tanpa salah satu pihak yang mampu memimpin dalam pengelolaan uang, pasangan ini mungkin kesulitan menciptakan stabilitas keuangan bersama.",
        fourthConflictTitle: "Perbedaan Pendekatan terhadap Risiko:",
        fourthConflictDescription: "Si Cannot Control Finances mungkin merasa cemas tentang situasi keuangan mereka, sementara si Binger lebih santai dan cenderung mengabaikan risiko.",
    },
    "Can't Control Finance x Orderly": {
        firstConflictTitle: "Perbedaan Gaya Pengelolaan Keuangan:",
        firstConflictDescription: "Si Orderly cenderung disiplin dan terencana, sementara si Cannot Control Finances sulit mengikuti aturan keuangan yang konsisten. Hal ini bisa memicu frustrasi di kedua belah pihak.",
        secondConflictTitle: "Beban Utang:",
        secondConflictDescription: "Si Cannot Control Finances mungkin membawa utang yang menjadi beban emosional dan finansial dalam hubungan. Orderly mungkin merasa tertekan untuk membantu menyelesaikan masalah ini.",
        thirdConflictTitle: "Perasaan Dikontrol:",
        thirdConflictDescription: "Si Cannot Control Finances mungkin merasa terlalu diawasi atau dikendalikan oleh Orderly, yang bisa menyebabkan konflik emosional jika pendekatan tidak dilakukan dengan empati.",
    },
    "Can't Control Finance x Planner": {
        firstConflictTitle: "Perbedaan Pendekatan terhadap Pengeluaran:",
        firstConflictDescription: "Si Planner mungkin frustrasi dengan pengeluaran impulsif Cannot Control Finances, sementara si Cannot Control Finances merasa terkekang oleh rencana yang terlalu ketat.",
        secondConflictTitle: "Beban Utang:",
        secondConflictDescription: "Utang yang dibawa oleh Cannot Control Finances dapat menjadi sumber tekanan dalam hubungan, terutama jika itu menghambat kemampuan pasangan untuk mencapai tujuan bersama.",
        thirdConflictTitle: "Kurangnya Kesabaran:",
        thirdConflictDescription: "Planner yang sangat terstruktur mungkin kesulitan memahami lambatnya perubahan kebiasaan finansial Cannot Control Finances, yang dapat memicu konflik.",
    },
    "Can't Control Finance x Ups and Downs": {
        firstConflictTitle: "Ketidakstabilan Finansial yang Parah:",
        firstConflictDescription: "Dengan kebiasaan pengelolaan uang yang tidak konsisten dari Ups and Downs dan ketidakmampuan Cannot Control Finances untuk mengatur keuangan, pasangan ini berisiko menghadapi tekanan finansial yang signifikan.",
        secondConflictTitle: "Frustrasi Akibat Pengeluaran Impulsif:",
        secondConflictDescription: "Ketika Ups and Downs mencoba untuk menghemat, kebiasaan belanja impulsif Cannot Control Finances dapat memicu konflik.",
        thirdConflictTitle: "Kurangnya Pemimpin Keuangan:",
        thirdConflictDescription: "Tidak ada pihak yang memiliki kemampuan untuk mengambil kendali atas pengelolaan keuangan, sehingga sulit bagi pasangan ini untuk membuat rencana atau mengambil langkah konkret untuk memperbaiki situasi.",
    },

    "Planner x Planner": {
        firstConflictTitle: "Ketegangan Akibat Perfeksionisme:",
        firstConflictDescription: "Karena keduanya sangat terencana, ada risiko mereka memiliki standar yang sangat tinggi terhadap pasangan. Ini dapat memicu konflik kecil jika salah satu pihak merasa pasangan mereka kurang berkontribusi secara maksimal",
        secondConflictTitle: "Kurangnya Spontanitas:",
        secondConflictDescription: "Dengan fokus kuat pada rencana dan stabilitas keuangan, pasangan ini mungkin lupa memberikan ruang untuk pengeluaran spontan atau hiburan, yang dapat menyebabkan rasa jenuh atau stres dalam hubungan.",
        thirdConflictTitle: "Perbedaan dalam Prioritas:",
        thirdConflictDescription: "Meskipun keduanya sangat terencana, mereka mungkin memiliki prioritas yang berbeda untuk alokasi dana, seperti memilih antara investasi atau liburan.",
    },
    "Planner x Economizer": {
        firstConflictTitle: "Ketegangan Akibat Utang:",
        firstConflictDescription: "Si Planner mungkin merasa frustrasi dengan situasi utang Economizer, terutama jika itu memperlambat pencapaian tujuan finansial jangka panjang mereka.",
        secondConflictTitle: "Perbedaan dalam Prioritas Keuangan:",
        secondConflictDescription: "Planner cenderung fokus pada investasi atau tabungan besar, sementara Economizer lebih fokus pada efisiensi pengeluaran harian. Ketidaksesuaian ini bisa memicu konflik jika tidak diselaraskan.",
        thirdConflictTitle: "Kurangnya Fleksibilitas dari Planner:",
        thirdConflictDescription: "Si Planner yang sangat terencana mungkin terlalu kaku dalam anggaran mereka, yang dapat membuat Economizer merasa tertekan.",
    },
    "Planner x Diligent": {
        firstConflictTitle: "Perbedaan Kecepatan dalam Mengambil Keputusan Keuangan:",
        firstConflictDescription: "Si Planner mungkin membutuhkan waktu lebih lama untuk merencanakan dan mempertimbangkan keputusan keuangan, sementara Diligent yang berorientasi pada tindakan mungkin lebih suka langsung bertindak. Hal ini dapat menyebabkan perdebatan kecil tentang kapan dan bagaimana menggunakan uang.",
        secondConflictTitle: "Ketegangan Akibat Standar Tinggi:",
        secondConflictDescription: "Keduanya memiliki standar tinggi dalam pengelolaan keuangan. Jika salah satu membuat kesalahan atau kurang berkontribusi, hal ini bisa memicu ketegangan, meskipun kecil.",
        thirdConflictTitle: "Kurangnya Ruang untuk Hiburan:",
        thirdConflictDescription: "Dengan fokus yang kuat pada tabungan dan tujuan keuangan, pasangan ini mungkin lupa untuk memberikan ruang bagi pengeluaran yang lebih santai atau spontan.",
    },
    "Planner x Binger": {
        firstConflictTitle: "Perbedaan Prioritas Keuangan:",
        firstConflictDescription: "Planner cenderung ingin mengalokasikan dana untuk tabungan atau investasi, sementara Binger lebih suka menggunakan uang untuk pengeluaran spontan yang memberi kepuasan sesaat. Konflik bisa muncul jika keduanya tidak menyepakati prioritas bersama.",
        secondConflictTitle: "Frustrasi Akibat Ketidakdisiplinan:",
        secondConflictDescription: "Si Planner mungkin merasa frustrasi dengan kebiasaan belanja impulsif Binger, yang bisa menghambat pencapaian tujuan keuangan bersama.",
        thirdConflictTitle: "Perasaan Terkekang pada Binger:",
        thirdConflictDescription: "Si Binger mungkin merasa terlalu dikontrol oleh Planner, terutama jika mereka merasa tidak memiliki cukup kebebasan untuk mengelola uang sesuai keinginan mereka.",
    },
    "Planner x Orderly": {
        firstConflictTitle: "Pendekatan terhadap Pengeluaran Trendi:",
        firstConflictDescription: "Orderly suka membeli barang-barang trendi yang mungkin dianggap tidak perlu oleh Planner, yang lebih fokus pada efisiensi dan alokasi anggaran untuk tabungan atau investasi.",
        secondConflictTitle: "Kesulitan dalam Menyeimbangkan Rencana dan Fleksibilitas:",
        secondConflictDescription: "Planner mungkin terlalu fokus pada rencana jangka panjang, sementara Orderly lebih terbuka untuk menikmati hasil kerja keras di masa kini. Perbedaan ini dapat memicu perdebatan kecil tentang prioritas pengeluaran.",
        thirdConflictTitle: "Standar yang Tinggi dalam Pengelolaan Keuangan:",
        thirdConflictDescription: "Keduanya memiliki standar tinggi dalam mengelola keuangan, yang bisa menyebabkan ketegangan jika salah satu pihak merasa pasangan mereka kurang memenuhi ekspektasi.",
    },
    "Planner x Can't Control Finance": {
        firstConflictTitle: "Perbedaan Pendekatan terhadap Pengeluaran:",
        firstConflictDescription: "Si Planner mungkin frustrasi dengan pengeluaran impulsif Cannot Control Finances, sementara si Cannot Control Finances merasa terkekang oleh rencana yang terlalu ketat.",
        secondConflictTitle: "Beban Utang:",
        secondConflictDescription: "Utang yang dibawa oleh Cannot Control Finances dapat menjadi sumber tekanan dalam hubungan, terutama jika itu menghambat kemampuan pasangan untuk mencapai tujuan bersama.",
        thirdConflictTitle: "Kurangnya Kesabaran:",
        thirdConflictDescription: "Planner yang sangat terstruktur mungkin kesulitan memahami lambatnya perubahan kebiasaan finansial Cannot Control Finances, yang dapat memicu konflik.",
    },
    "Planner x Ups and Downs": {
        firstConflictTitle: "Ketidakstabilan dari Ups and Downs:",
        firstConflictDescription: "Planner mungkin merasa frustrasi dengan perilaku impulsif Ups and Downs, terutama jika itu mengganggu rencana keuangan yang telah disusun.",
        secondConflictTitle: "Perasaan Dikekang oleh Planner:",
        secondConflictDescription: "Ups and Downs mungkin merasa tertekan oleh struktur dan aturan ketat yang diterapkan oleh Planner, terutama jika mereka tidak diberi ruang untuk pengeluaran spontan.",
        thirdConflictTitle: "Ketidakseimbangan Prioritas Keuangan:",
        thirdConflictDescription: "Planner cenderung fokus pada tujuan jangka panjang, sementara Ups and Downs lebih suka menikmati momen saat ini, yang dapat memicu perbedaan pandangan.",
    },

    "Ups and Downs x Ups and Downs": {
        firstConflictTitle: "Ketidakstabilan Finansial yang Parah:",
        firstConflictDescription: "Dengan kebiasaan keuangan yang tidak konsisten dari kedua pihak, pasangan ini berisiko menghadapi tekanan keuangan yang signifikan jika tidak ada upaya untuk mengatur anggaran bersama.",
        secondConflictTitle: "Kurangnya Pemimpin Keuangan:",
        secondConflictDescription: "Tidak ada pihak yang secara alami disiplin atau terstruktur dalam mengelola keuangan, sehingga sulit untuk membuat dan mempertahankan rencana.",
        thirdConflictTitle: "Frustrasi karena Ketidakkonsistenan:",
        thirdConflictDescription: "Ketika salah satu pihak mencoba untuk lebih disiplin, perilaku impulsif pihak lain dapat memicu konflik.",
    },
    "Ups and Downs x Economizer": {
        firstConflictTitle: "Ketidakstabilan Finansial:",
        firstConflictDescription: "Keduanya memiliki kebiasaan yang dapat mengarah pada ketidakstabilan keuangan, seperti utang dari Economizer dan pengeluaran impulsif dari Ups and Downs.",
        secondConflictTitle: "Kurangnya Rencana Keuangan yang Jelas:",
        secondConflictDescription: "Karena keduanya kurang disiplin dalam menetapkan dan mengikuti rencana keuangan, mereka mungkin kesulitan membuat kemajuan finansial bersama.",
        thirdConflictTitle: "Frustrasi Akibat Perilaku Keuangan yang Berbeda:",
        thirdConflictDescription: "Si Economizer mungkin merasa frustrasi dengan belanja impulsif Ups and Downs, sementara Ups and Downs merasa tertekan oleh fokus Economizer pada pelunasan utang.",
    },
    "Ups and Downs x Diligent": {
        firstConflictTitle: "Ketidakstabilan dari Ups and Downs:",
        firstConflictDescription: "Diligent mungkin merasa frustrasi dengan kebiasaan impulsif Ups and Downs, terutama jika itu mengganggu rencana keuangan yang telah disusun.",
        secondConflictTitle: "Tekanan dari Diligent:",
        secondConflictDescription: "Ups and Downs mungkin merasa tertekan oleh ekspektasi tinggi Diligent dalam hal penghematan dan konsistensi finansial.",
        thirdConflictTitle: "Perbedaan Gaya Hidup:",
        thirdConflictDescription: "Diligent mungkin terlalu fokus pada pekerjaan dan penghematan, sementara Ups and Downs cenderung lebih spontan, yang dapat menyebabkan perbedaan pandangan tentang cara mengelola uang.",
    },
    "Ups and Downs x Binger": {
        firstConflictTitle: "Ketidakstabilan Finansial:",
        firstConflictDescription: "Tanpa adanya pihak yang disiplin secara finansial, pasangan ini berisiko terjebak dalam pengeluaran berlebihan dan kurangnya tabungan.",
        secondConflictTitle: "Kurangnya Fokus pada Tujuan Keuangan:",
        secondConflictDescription: "Dengan kebiasaan impulsif dari kedua pihak, sulit bagi pasangan ini untuk menetapkan atau mencapai tujuan jangka panjang.",
        thirdConflictTitle: "Frustrasi karena Kurangnya Kontrol Keuangan:",
        thirdConflictDescription: "Ketika Ups and Downs berada dalam fase hemat, mereka mungkin merasa frustrasi dengan kebiasaan belanja Binger, yang bisa memicu konflik.",
    },
    "Ups and Downs x Orderly": {
        firstConflictTitle: "Ketidakstabilan dari Ups and Downs:",
        firstConflictDescription: "Orderly mungkin merasa frustrasi dengan perilaku impulsif Ups and Downs, terutama jika itu mengganggu rencana keuangan yang telah mereka atur dengan rapi.",
        secondConflictTitle: "Perasaan Dikekang oleh Orderly:",
        secondConflictDescription: "Ups and Downs mungkin merasa kurang bebas karena kebiasaan mereka yang impulsif sering kali dikritik atau dibatasi oleh Orderly.",
        thirdConflictTitle: "Perbedaan Prioritas:",
        thirdConflictDescription: "Orderly mungkin lebih fokus pada menabung atau pengeluaran strategis, sementara Ups and Downs cenderung memprioritaskan spontanitas yang bisa memicu konflik.",
    },
    "Ups and Downs x Can't Control Finance": {
        firstConflictTitle: "Ketidakstabilan Finansial yang Parah:",
        firstConflictDescription: "Dengan kebiasaan pengelolaan uang yang tidak konsisten dari Ups and Downs dan ketidakmampuan Cannot Control Finances untuk mengatur keuangan, pasangan ini berisiko menghadapi tekanan finansial yang signifikan.",
        secondConflictTitle: "Frustrasi Akibat Pengeluaran Impulsif:",
        secondConflictDescription: "Ketika Ups and Downs mencoba untuk menghemat, kebiasaan belanja impulsif Cannot Control Finances dapat memicu konflik.",
        thirdConflictTitle: "Kurangnya Pemimpin Keuangan:",
        thirdConflictDescription: "Tidak ada pihak yang memiliki kemampuan untuk mengambil kendali atas pengelolaan keuangan, sehingga sulit bagi pasangan ini untuk membuat rencana atau mengambil langkah konkret untuk memperbaiki situasi.",
    },
    "Ups and Downs x Planner": {
        firstConflictTitle: "Ketidakstabilan dari Ups and Downs:",
        firstConflictDescription: "Planner mungkin merasa frustrasi dengan perilaku impulsif Ups and Downs, terutama jika itu mengganggu rencana keuangan yang telah disusun.",
        secondConflictTitle: "Perasaan Dikekang oleh Planner:",
        secondConflictDescription: "Ups and Downs mungkin merasa tertekan oleh struktur dan aturan ketat yang diterapkan oleh Planner, terutama jika mereka tidak diberi ruang untuk pengeluaran spontan.",
        thirdConflictTitle: "Ketidakseimbangan Prioritas Keuangan:",
        thirdConflictDescription: "Planner cenderung fokus pada tujuan jangka panjang, sementara Ups and Downs lebih suka menikmati momen saat ini, yang dapat memicu perbedaan pandangan.",
    },
}

export const SUGGESTION_RESULT = {
    "Economizer x Economizer": [
        {
            title: "Evaluasi Utang secara Bersama-sama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Identifikasi semua utang yang dimiliki kedua pihak dan buat daftar prioritas pelunasan berdasarkan tingkat bunga dan jumlah utang.</li>
                </ul>
            )
        },
        {
            title: "Buat Rencana Pelunasan Utang yang Realistis",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Gunakan metode seperti Avalanche (melunasi utang dengan bunga tertinggi terlebih dahulu) atau Snowball (memulai dari utang terkecil) untuk memberikan rasa pencapaian dan motivasi.</li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Jangka Pendek dan Panjang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Setelah mengelola utang dengan baik, fokus pada tujuan kecil seperti menabung untuk dana darurat sebelum menetapkan target besar seperti investasi atau pembelian rumah.</li>
                </ul>
            )
        },
        {
            title: "Manfaatkan Kekuatan Bersama dalam Penghematan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan kebiasaan hemat yang dimiliki keduanya untuk mengurangi pengeluaran yang tidak perlu, seperti memasak di rumah atau mengurangi langganan yang tidak digunakan.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi atau spreadsheet untuk melacak pengeluaran dan kemajuan pelunasan utang. Transparansi ini membantu keduanya memahami situasi finansial secara menyeluruh.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Kemajuan Finansial dengan Bijak",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika berhasil melunasi sebagian utang, rayakan pencapaian ini dengan cara yang sederhana tetapi bermakna untuk menjaga motivasi.
                    </li>
                </ul>
            )
        },
        {
            title: "Edukasi Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ikuti seminar atau baca buku tentang cara mengelola utang dan membangun tabungan. Pengetahuan baru dapat membantu keduanya membuat keputusan yang lebih baik.
                    </li>
                </ul>
            )
        },
        {
            title: "Jaga Komunikasi yang Positif",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Hindari menyalahkan satu sama lain atas situasi utang. Fokuslah pada solusi bersama untuk membangun hubungan yang harmonis.
                    </li>
                </ul>
            )
        },
    ],
    "Economizer x Diligent": [
        {
            title: "Buat Anggaran yang Mengakomodasi Pendapatan dan Pengeluaran:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Tentukan anggaran bersama yang memungkinkan si Diligent untuk terus mencari peluang tambahan pendapatan, tetapi juga memberi ruang bagi Economizer untuk menjaga pengeluaran tetap terkendali.</li>
                    <li>Tentukan anggaran untuk pengeluaran rutin, investasi jangka panjang, serta ruang untuk hiburan atau pengeluaran sesekali, yang disetujui oleh keduanya.</li>
                </ul>
            )
        },
        {
            title: "Fokus pada Tujuan Keuangan Bersama:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Diskusikan tujuan jangka panjang bersama, seperti membeli rumah, pensiun, atau membangun dana darurat, dan buat rencana yang mengakomodasi upaya kedua belah pihak.</li>
                    <li>Si Diligent bisa fokus pada mencari peluang pendapatan tambahan, sementara si Economizer bisa mengelola pengeluaran dengan lebih hati-hati.</li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan secara Teratur:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Tentukan waktu setiap beberapa bulan untuk mengevaluasi apakah tujuan keuangan telah tercapai, apakah anggaran berfungsi dengan baik, dan apakah ada ruang untuk perbaikan atau penyesuaian.</li>
                    <li>Evaluasi ini akan membantu Diligent dan Economizer melihat hasil dari usaha mereka bersama dan menyesuaikan pendekatan jika diperlukan.</li>
                </ul>
            )
        },
        {
            title: "Berikan Ruang untuk Pengalaman dan Kesenangan:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Meskipun si Economizer lebih fokus pada penghematan, penting untuk memberikan ruang untuk pengalaman yang menyenangkan, seperti liburan singkat atau makan bersama. Si Diligent bisa merencanakan cara untuk menikmati kehidupan tanpa harus melampaui anggaran yang telah disepakati.
                    </li>
                </ul>
            )
        },
        {
            title: "Menghargai Pendekatan yang Berbeda:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Economizer dan Diligent harus saling menghargai peran masing-masing. Economizer bisa mengajarkan si Diligent tentang pentingnya pengendalian pengeluaran, sementara Diligent bisa membantu Economizer melihat pentingnya meningkatkan pendapatan dan membuka peluang baru untuk mencapai tujuan finansial mereka.
                    </li>
                </ul>
            )
        },
        {
            title: "Menetapkan Prioritas Pengeluaran:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tentukan prioritas pengeluaran yang penting bagi keduanya. Misalnya, si Economizer bisa setuju untuk memberi lebih banyak ruang untuk tabungan atau investasi jangka panjang, sementara si Diligent bisa melihat pentingnya memiliki dana untuk pengalaman dan pengembangan diri.
                    </li>
                </ul>
            )
        },
    ],
    "Economizer x Binger": [
        {
            title: "Buat Anggaran Bersama yang Seimbang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Tentukan anggaran yang mengakomodasi kebutuhan masing-masing. Misalnya, alokasikan sebagian kecil untuk hiburan atau belanja impulsif si Binger, tetapi sisakan sebagian besar untuk tabungan dan pelunasan utang yang menjadi prioritas si Economizer.</li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Pilih tujuan yang dapat memotivasi keduanya, seperti menabung untuk liburan sederhana atau melunasi sebagian utang. Ini membantu Binger memahami pentingnya pengelolaan uang dan membuat Economizer merasa didukung.</li>
                </ul>
            )
        },
        {
            title: "Pisahkan Anggaran Pribadi",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Berikan kebebasan kepada si Binger untuk mengelola sebagian kecil anggaran mereka sendiri tanpa merasa bersalah. Economizer tetap bertanggung jawab untuk menjaga prioritas utama, seperti pelunasan utang.</li>
                </ul>
            )
        },
        {
            title: "Pahami Pentingnya Kepuasan Jangka Pendek dan Jangka Panjang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Si Economizer perlu memahami bahwa sesekali menikmati hidup tidak akan menghancurkan keuangan mereka, sementara si Binger harus belajar bahwa tabungan dan rencana keuangan yang baik akan memberikan manfaat besar di masa depan.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Pencapaian Finansial",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika berhasil melunasi sebagian utang atau mencapai target tabungan kecil, rayakan dengan cara sederhana tetapi bermakna. Misalnya, makan malam bersama atau membeli barang kecil yang diinginkan si Binger.
                    </li>
                </ul>
            )
        },
        {
            title: "Bangun Dana Darurat Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Sisihkan sebagian dari pendapatan untuk membangun dana darurat. Ini membantu Economizer merasa lebih tenang dan memberikan fleksibilitas kepada Binger dalam pengeluaran tanpa menambah utang.
                    </li>
                </ul>
            )
        },
        {
            title: "Komunikasi Terbuka tentang Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Diskusikan secara terbuka alasan di balik kebiasaan masing-masing. Si Economizer bisa menjelaskan pentingnya disiplin keuangan, sementara si Binger dapat berbagi alasan mereka mengutamakan pengalaman hidup.
                    </li>
                </ul>
            )
        },
        {
            title: "Edukasi Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ikuti seminar atau pelatihan keuangan untuk meningkatkan pemahaman tentang cara mengelola uang yang lebih baik. Dengan pemahaman yang sama, keduanya dapat membuat keputusan finansial yang lebih selaras.
                    </li>
                </ul>
            )
        },
    ],
    "Economizer x Orderly": [
        {
            title: "Diskusikan Pendekatan terhadap Utang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Si Orderly perlu memahami situasi utang si Economizer tanpa menghakimi. Bersama-sama, mereka dapat membuat rencana untuk melunasi utang tersebut secara bertahap. Economizer harus bersedia transparan mengenai situasi keuangan mereka agar Orderly merasa percaya diri dalam hubungan ini.</li>
                </ul>
            )
        },
        {
            title: "Buat Rencana Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Tetapkan prioritas bersama, seperti melunasi utang Economizer, menabung, atau investasi kecil. Si Orderly dapat membantu dengan membuat perencanaan yang terorganisir, sementara Economizer bisa belajar dari strategi ini untuk mengelola uang dengan lebih baik.</li>
                </ul>
            )
        },
        {
            title: "Alokasikan Dana untuk Kesenangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Sisihkan sebagian kecil anggaran untuk hal-hal trendi yang disukai Orderly agar mereka tetap merasa dihargai. Pastikan juga ada ruang untuk efisiensi pengeluaran yang disukai Economizer, sehingga keduanya merasa kebutuhan mereka terpenuhi.</li>
                </ul>
            )
        },
        {
            title: "Rayakan Pencapaian Kecil",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika utang Economizer mulai berkurang atau mereka berhasil menabung, rayakan pencapaian tersebut dengan cara yang terjangkau. Ini akan memotivasi keduanya untuk terus bekerja menuju stabilitas keuangan.
                    </li>
                </ul>
            )
        },
        {
            title: "Fokus pada Edukasi Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jika Economizer memiliki kebiasaan keuangan yang kurang sehat, si Orderly dapat membantu dengan berbagi strategi pengelolaan uang yang lebih terorganisir. Mengikuti seminar atau membaca buku keuangan bersama dapat memperkuat pemahaman mereka.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Jangka Panjang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tentukan tujuan seperti dana darurat, menabung untuk rumah, atau liburan bersama. Si Orderly dapat memimpin dalam merencanakan langkah-langkah rinci, sementara Economizer fokus pada pengurangan utang dan kontribusi tabungan.
                    </li>
                </ul>
            )
        },
    ],
    "Economizer x Can't Control Finance": [
        {
            title: "Komunikasi yang Jujur tentang Utang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Diskusikan situasi utang masing-masing secara terbuka dan tanpa menyalahkan. Langkah ini penting untuk menciptakan pemahaman bersama dan membuat strategi pelunasan yang efektif.</li>
                </ul>
            )
        },
        {
            title: "Buat Rencana Pelunasan Utang Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Prioritaskan pelunasan utang sebagai langkah pertama. Gunakan pendekatan seperti metode Avalanche (memprioritaskan bunga tertinggi) atau Snowball (memulai dari utang terkecil) sesuai preferensi pasangan. Si Economizer dapat memimpin dalam membuat rencana ini.</li>
                </ul>
            )
        },
        {
            title: "Tentukan Anggaran yang Realistis",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Buat anggaran bersama yang mencakup kebutuhan pokok, pelunasan utang, dan sedikit ruang untuk pengeluaran hiburan. Ini membantu Cannot Control Finances belajar disiplin, sementara Economizer tetap merasa bahwa efisiensi dijaga.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi untuk melacak pengeluaran harian. Transparansi ini dapat membantu Cannot Control Finances lebih sadar tentang kebiasaan mereka dan membuat Economizer merasa lebih tenang.
                    </li>
                </ul>
            )
        },
        {
            title: "Bangun Dana Darurat Kecil-Kecilan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Setelah utang mulai terkelola, mulailah menyisihkan dana kecil untuk situasi darurat. Ini penting untuk menghindari stres keuangan tambahan saat menghadapi pengeluaran tak terduga.
                    </li>
                </ul>
            )
        },
        {
            title: "Dukung Perubahan Positif",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Si Economizer harus memberikan dukungan kepada Cannot Control Finances ketika mereka berusaha mengurangi pengeluaran impulsif. Penghargaan kecil untuk pencapaian ini dapat memotivasi mereka untuk terus berubah.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tetapkan waktu untuk meninjau kemajuan dalam pelunasan utang dan pengelolaan keuangan. Evaluasi ini membantu pasangan tetap pada jalur dan menemukan cara untuk memperbaiki pendekatan jika diperlukan.
                    </li>
                </ul>
            )
        },
        {
            title: "Fokus pada Edukasi Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ikuti pelatihan atau baca buku keuangan bersama untuk meningkatkan pemahaman tentang pengelolaan keuangan. Dengan pengetahuan yang lebih baik, keduanya dapat mengambil langkah yang lebih tepat dalam mengelola keuangan.
                    </li>
                </ul>
            )
        },
    ],
    "Economizer x Planner": [
        {
            title: "Diskusikan Utang secara Terbuka",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Planner dan Economizer perlu berbicara secara jujur tentang situasi utang Economizer tanpa menyalahkan. Fokus pada menemukan solusi bersama, seperti menetapkan rencana pelunasan utang.</li>
                </ul>
            )
        },
        {
            title: "Buat Rencana Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Tetapkan prioritas bersama, seperti melunasi utang terlebih dahulu sebelum mulai menabung untuk tujuan jangka panjang. Planner dapat memimpin dalam menyusun rencana, sementara Economizer berkontribusi dengan ide-ide penghematan.</li>
                </ul>
            )
        },
        {
            title: "Alokasikan Anggaran untuk Fleksibilitas",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Sisihkan sebagian kecil anggaran untuk pengeluaran spontan atau hiburan. Ini membantu Economizer merasa tidak terlalu terkekang, sementara Planner tetap bisa menjaga stabilitas finansial.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi atau spreadsheet sederhana untuk melacak pengeluaran dan kemajuan pelunasan utang. Ini memberikan transparansi bagi keduanya dan membantu menjaga akuntabilitas.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Keberhasilan Kecil",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika utang Economizer mulai berkurang atau mereka berhasil mengikuti anggaran, rayakan pencapaian ini bersama. Ini memperkuat hubungan dan memotivasi keduanya untuk terus maju.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Jangka Pendek dan Jangka Panjang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Mulailah dengan tujuan kecil yang dapat dicapai dalam waktu singkat, seperti melunasi satu utang kecil. Setelah itu, rencanakan tujuan jangka panjang, seperti menabung untuk investasi atau pembelian besar.
                    </li>
                </ul>
            )
        },
        {
            title: "Planner Memberikan Dukungan Emosional",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Si Planner harus mendukung Economizer secara emosional, menghindari kritik berlebihan, dan fokus pada kemajuan yang telah dicapai daripada kesalahan yang terjadi.
                    </li>
                </ul>
            )
        },
    ],
    "Economizer x Ups and Downs": [
        {
            title: "Komunikasi Terbuka tentang Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Diskusikan kebiasaan keuangan masing-masing secara jujur. Ups and Downs harus berusaha lebih konsisten, sementara Economizer perlu belajar untuk tidak terlalu fokus pada masalah utang dan membuka diri untuk rencana keuangan yang lebih besar.
                    </li>
                </ul>
            )
        },
        {
            title: "Buat Rencana Pelunasan Utang Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Prioritaskan pelunasan utang Economizer dengan menetapkan anggaran yang realistis. Gunakan pendekatan seperti Snowball (mulai dari utang kecil) untuk membangun momentum positif.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Anggaran Bersama yang Fleksibel",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Buat anggaran yang mencakup kebutuhan pokok, pelunasan utang, dan sedikit ruang untuk pengeluaran spontan. Ini membantu Ups and Downs merasa tidak terkekang, sementara Economizer tetap dapat fokus pada pelunasan utang.
                    </li>
                </ul>
            )
        },
        {
            title: "Manfaatkan Momen Hemat dari Ups and Downs",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika Ups and Downs berada dalam fase hemat, gunakan kesempatan ini untuk menabung atau mempercepat pelunasan utang. Ini dapat membantu menciptakan stabilitas jangka pendek.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi untuk melacak pengeluaran harian. Transparansi ini membantu kedua pihak memahami kebiasaan pengeluaran mereka dan memberikan rasa kontrol.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Kecil",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Fokus pada pencapaian kecil yang dapat dirasakan manfaatnya secara langsung, seperti menabung untuk liburan kecil atau melunasi sebagian utang. Ini membantu meningkatkan kepercayaan diri mereka dalam pengelolaan keuangan.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Kemajuan Finansial dengan Bijak",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika berhasil mencapai target kecil, rayakan dengan cara hemat tetapi menyenangkan. Ini membantu menjaga motivasi dan memperkuat hubungan emosional.
                    </li>
                </ul>
            )
        },
        {
            title: "Edukasi Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ikuti seminar atau pelatihan keuangan untuk belajar bersama tentang cara mengelola keuangan dengan lebih baik. Ini akan memberikan dasar pengetahuan yang sama bagi keduanya.
                    </li>
                </ul>
            )
        },
    ],

    "Diligent x Diligent": [
        {
            title: "Tetapkan Tujuan Keuangan Bersama yang Sejalan:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Duduk bersama dan tetapkan tujuan keuangan jangka pendek dan panjang yang realistis. Pastikan bahwa kedua pasangan sepakat tentang prioritas keuangan, seperti membeli rumah, menabung untuk pendidikan anak, atau mencapai tujuan pensiun.
                    </li>
                    <li>
                        Tentukan anggaran yang fleksibel yang bisa mengakomodasi kebutuhan pribadi masing-masing, namun tetap sejalan dengan tujuan bersama.
                    </li>
                </ul>
            )
        },
        {
            title: "Jaga Keseimbangan Antara Karier dan Kehidupan Pribadi:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Cobalah untuk tidak terlalu terjebak dalam pekerjaan dan ingat bahwa hubungan pribadi juga memerlukan perhatian. Jadwalkan waktu untuk kegiatan bersama yang menyenangkan, seperti liburan singkat atau makan malam bersama, untuk menjaga keseimbangan antara karier dan kehidupan pribadi.
                    </li>
                    <li>
                        Tentukan waktu untuk mengevaluasi hubungan, selain hanya fokus pada pencapaian tujuan keuangan atau profesional.
                    </li>
                </ul>
            )
        },
        {
            title: "Kembangkan Fleksibilitas dalam Perencanaan:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Meski perencanaan itu penting, berikan sedikit ruang untuk fleksibilitas. Cobalah untuk tidak terlalu terikat dengan anggaran atau perencanaan yang ketat, dan beri kesempatan untuk menikmati hidup dengan pengeluaran yang tidak selalu terencana.
                    </li>
                    <li>
                        Ketika membuat keputusan besar (seperti investasi besar atau pembelian rumah), pastikan bahwa keduanya merasa nyaman dengan keputusan tersebut dan memberi ruang bagi penyesuaian jika diperlukan.
                    </li>
                </ul>
            )
        },
        {
            title: "Berikan Penghargaan untuk Pencapaian Kecil:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Karena pasangan ini berfokus pada tujuan jangka panjang, penting untuk merayakan pencapaian-pencapaian kecil di sepanjang jalan. Ini bisa termasuk merayakan tabungan yang tercapai atau keberhasilan dalam mencapai target pendapatan tambahan. Memberikan penghargaan untuk pencapaian kecil akan membantu menjaga semangat dan mengurangi rasa cemas.
                    </li>
                </ul>
            )
        },
        {
            title: "Pentingnya Komunikasi Terbuka:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Komunikasikan secara terbuka tentang ketakutan atau kecemasan finansial yang mungkin muncul. Jika salah satu pasangan merasa stres dengan perencanaan atau pengelolaan uang, penting untuk berbicara dan mencari solusi bersama.
                    </li>
                    <li>
                        Jangan ragu untuk mendiskusikan cara menikmati hidup bersama tanpa merasa terbebani oleh pengelolaan keuangan yang terlalu ketat.
                    </li>
                </ul>
            )
        },
        {
            title: "Menghargai Proses dan Menerima Ketidakpastian:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Kedua pasangan ini harus menerima bahwa tidak semua hal dalam kehidupan dapat direncanakan dengan sempurna, dan kadang-kadang mereka harus menerima ketidakpastian dalam perjalanan menuju tujuan mereka. Membangun fleksibilitas dan merayakan keberhasilan dalam proses adalah kunci untuk menjaga hubungan tetap sehat dan tidak terlalu terfokus pada hasil akhir.
                    </li>
                </ul>
            )
        },
    ],
    "Diligent x Binger": [
        {
            title: "Komunikasi Terbuka tentang Tujuan Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Diskusikan secara jujur tentang tujuan keuangan jangka pendek dan jangka panjang. Si Diligent perlu menjelaskan pentingnya perencanaan keuangan dan menabung, sementara Binger dapat berbagi pandangannya tentang pentingnya menikmati hidup saat ini. Pemahaman bersama dapat membantu menemukan titik tengah.
                    </li>
                </ul>
            )
        },
        {
            title: "Membuat Anggaran Fleksibel Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Buat anggaran yang mengakomodasi kebutuhan keduanya. Tentukan alokasi untuk tabungan dan investasi sesuai keinginan Diligent, serta alokasi untuk hiburan dan pengeluaran pribadi yang dihargai oleh Binger. Pastikan anggaran ini realistis dan dapat diikuti oleh keduanya.
                    </li>
                </ul>
            )
        },
        {
            title: "Menetapkan Batas Pengeluaran Pribadi",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Sepakati batas pengeluaran bulanan untuk masing-masing individu. Binger dapat memiliki jumlah tertentu untuk pengeluaran tanpa perlu mempertanggungjawabkannya, selama tidak melebihi batas yang telah ditentukan. Ini memberi Binger kebebasan sekaligus menjaga keuangan bersama tetap sehat.
                    </li>
                </ul>
            )
        },
        {
            title: "Pendidikan Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ikuti seminar atau baca buku tentang pengelolaan keuangan bersama. Ini dapat membantu Binger memahami pentingnya perencanaan keuangan, sementara Diligent dapat belajar tentang pentingnya fleksibilitas dan menikmati hasil kerja keras.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Pencapaian Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika mencapai target tabungan atau tujuan keuangan tertentu, rayakan bersama dengan cara yang menyenangkan bagi keduanya. Misalnya, setelah mencapai target tabungan, gunakan sebagian kecil dana untuk liburan atau kegiatan yang disukai Binger. Ini akan memotivasi keduanya untuk terus bekerja sama.
                    </li>
                </ul>
            )
        },
        {
            title: "Menghargai dan Mengakomodasi Perbedaan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Diligent perlu memahami bahwa sesekali menikmati hasil kerja keras adalah penting untuk kesejahteraan emosional. Binger juga perlu menghargai usaha Diligent dalam merencanakan masa depan dan berusaha untuk tidak mengganggu rencana keuangan bersama.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tetapkan waktu rutin, misalnya setiap bulan, untuk meninjau keuangan bersama. Diskusikan apa yang berjalan baik dan apa yang perlu diperbaiki. Ini memberi kesempatan untuk menyesuaikan anggaran dan strategi keuangan sesuai kebutuhan.
                    </li>
                </ul>
            )
        },
        {
            title: "Membuat Komitmen untuk Tujuan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tentukan beberapa tujuan keuangan yang ingin dicapai bersama dan buat rencana langkah demi langkah untuk mencapainya. Dengan bekerja menuju tujuan bersama, keduanya dapat merasa lebih terhubung dan termotivasi.
                    </li>
                </ul>
            )
        },
    ],
    "Diligent x Economizer": [
        {
            title: "Buat Anggaran yang Mengakomodasi Pendapatan dan Pengeluaran:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Tentukan anggaran bersama yang memungkinkan si Diligent untuk terus mencari peluang tambahan pendapatan, tetapi juga memberi ruang bagi Economizer untuk menjaga pengeluaran tetap terkendali.</li>
                    <li>Tentukan anggaran untuk pengeluaran rutin, investasi jangka panjang, serta ruang untuk hiburan atau pengeluaran sesekali, yang disetujui oleh keduanya.</li>
                </ul>
            )
        },
        {
            title: "Fokus pada Tujuan Keuangan Bersama:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Diskusikan tujuan jangka panjang bersama, seperti membeli rumah, pensiun, atau membangun dana darurat, dan buat rencana yang mengakomodasi upaya kedua belah pihak.</li>
                    <li>Si Diligent bisa fokus pada mencari peluang pendapatan tambahan, sementara si Economizer bisa mengelola pengeluaran dengan lebih hati-hati.</li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan secara Teratur:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Tentukan waktu setiap beberapa bulan untuk mengevaluasi apakah tujuan keuangan telah tercapai, apakah anggaran berfungsi dengan baik, dan apakah ada ruang untuk perbaikan atau penyesuaian.</li>
                    <li>Evaluasi ini akan membantu Diligent dan Economizer melihat hasil dari usaha mereka bersama dan menyesuaikan pendekatan jika diperlukan.</li>
                </ul>
            )
        },
        {
            title: "Berikan Ruang untuk Pengalaman dan Kesenangan:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Meskipun si Economizer lebih fokus pada penghematan, penting untuk memberikan ruang untuk pengalaman yang menyenangkan, seperti liburan singkat atau makan bersama. Si Diligent bisa merencanakan cara untuk menikmati kehidupan tanpa harus melampaui anggaran yang telah disepakati.
                    </li>
                </ul>
            )
        },
        {
            title: "Menghargai Pendekatan yang Berbeda:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Economizer dan Diligent harus saling menghargai peran masing-masing. Economizer bisa mengajarkan si Diligent tentang pentingnya pengendalian pengeluaran, sementara Diligent bisa membantu Economizer melihat pentingnya meningkatkan pendapatan dan membuka peluang baru untuk mencapai tujuan finansial mereka.
                    </li>
                </ul>
            )
        },
        {
            title: "Menetapkan Prioritas Pengeluaran:",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tentukan prioritas pengeluaran yang penting bagi keduanya. Misalnya, si Economizer bisa setuju untuk memberi lebih banyak ruang untuk tabungan atau investasi jangka panjang, sementara si Diligent bisa melihat pentingnya memiliki dana untuk pengalaman dan pengembangan diri.
                    </li>
                </ul>
            )
        },
    ],
    "Diligent x Orderly": [
        {
            title: "Diskusikan Prioritas Pengeluaran",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Diligent dan Orderly perlu mendiskusikan prioritas pengeluaran mereka. Si Orderly dapat menjelaskan alasan pentingnya belanja untuk hal-hal yang mereka sukai, sementara si Diligent dapat berbagi tentang pentingnya penghematan untuk jangka panjang. Diskusi ini akan membantu menyelaraskan harapan mereka.
                    </li>
                </ul>
            )
        },
        {
            title: "Buat Anggaran Bersama yang Seimbang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tetapkan anggaran yang mencakup kebutuhan pokok, tabungan, dan ruang untuk pengeluaran rekreasi atau trendi. Dengan anggaran yang jelas, Orderly tetap bisa menikmati kesenangan, sementara Diligent merasa bahwa tujuan finansial jangka panjang tetap terjaga.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Fokus pada tujuan seperti membeli rumah, dana darurat, atau investasi jangka panjang. Si Diligent dapat membantu dengan usaha keras mereka, sementara si Orderly bisa memastikan rencana tetap berjalan dengan terorganisir.
                    </li>
                </ul>
            )
        },
        {
            title: "Berikan Ruang untuk Belanja Hal-Hal Trendi",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Sisihkan sebagian kecil dari pendapatan untuk pengeluaran personal yang sudah disepakati bersama. Ini memberi Orderly kebebasan untuk membeli barang-barang yang mereka sukai tanpa mengganggu anggaran keseluruhan.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Keberhasilan Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika mencapai milestone finansial, seperti mencapai target tabungan, rayakan bersama. Ini akan membantu Orderly merasa dihargai dan memberikan semangat kepada Diligent untuk terus bekerja keras.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jadwalkan evaluasi keuangan rutin untuk meninjau kemajuan dalam mencapai tujuan. Ini akan membantu menjaga komunikasi terbuka dan memungkinkan keduanya untuk menyesuaikan rencana jika diperlukan.
                    </li>
                </ul>
            )
        },
        {
            title: "Fokus pada Komunikasi dan Penghargaan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Diligent perlu menghargai kontribusi Orderly dalam menjaga keteraturan keuangan, sementara Orderly harus memahami dan mendukung usaha keras Diligent. Saling menghargai akan memperkuat hubungan dan menciptakan kerja sama yang harmonis.
                    </li>
                </ul>
            )
        },
    ],
    "Diligent x Can't Control Finance": [
        {
            title: "Komunikasi yang Empati dan Tanpa Menghakimi",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Si Diligent harus mendekati pasangan mereka dengan empati, menghindari menyalahkan, dan lebih fokus pada mencari solusi bersama. Diskusikan situasi keuangan dengan jujur untuk memahami tantangan yang dihadapi oleh Cannot Control Finances.</li>
                </ul>
            )
        },
        {
            title: "Buat Rencana Pelunasan Utang Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Prioritaskan pelunasan utang sebagai langkah pertama. Diligent dapat membantu dengan perencanaan yang terstruktur, sementara Cannot Control Finances berkomitmen untuk mengurangi pengeluaran impulsif.</li>
                </ul>
            )
        },
        {
            title: "Tentukan Anggaran Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Buat anggaran yang realistis dan mencakup kebutuhan pokok, pelunasan utang, serta sedikit ruang untuk hiburan. Ini membantu Cannot Control Finances belajar disiplin tanpa merasa terkekang.
                    </li>
                </ul>
            )
        },
        {
            title: "Berikan Dukungan Positif",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Diligent harus memberikan penghargaan atas perubahan positif yang dilakukan oleh Cannot Control Finances, seperti mengurangi kebiasaan impulsif atau melunasi sebagian utang. Penghargaan kecil dapat memotivasi pasangan untuk terus memperbaiki kebiasaan keuangan.
                    </li>
                </ul>
            )
        },
        {
            title: "Fokus pada Edukasi Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ikuti seminar atau baca buku tentang pengelolaan keuangan bersama. Cannot Control Finances dapat belajar cara mengelola uang dengan lebih baik, sementara Diligent mendapatkan cara baru untuk mendukung pasangan mereka secara efektif.
                    </li>
                </ul>
            )
        },
        {
            title: "Bangun Dana Darurat Secara Bertahap",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Setelah utang mulai terkendali, mulailah menyisihkan dana kecil untuk kebutuhan darurat. Ini penting untuk mengurangi stres finansial ketika menghadapi pengeluaran tak terduga.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jadwalkan pertemuan rutin untuk mengevaluasi kemajuan dalam pengelolaan keuangan. Diskusikan apa yang berjalan dengan baik, apa yang perlu diperbaiki, dan bagaimana mereka dapat mendukung satu sama lain.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Jangka Pendek",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tentukan tujuan kecil yang dapat dicapai dalam waktu singkat, seperti menabung untuk liburan kecil atau melunasi satu utang. Kesuksesan ini akan membantu Cannot Control Finances merasa lebih percaya diri.
                    </li>
                </ul>
            )
        },
    ],
    "Diligent x Planner": [
        {
            title: "Tetapkan Prioritas Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Diskusikan dan sepakati tujuan keuangan jangka pendek dan panjang, seperti membeli rumah atau investasi. Pastikan bahwa kedua pihak merasa nyaman dengan prioritas yang ditetapkan.
                    </li>
                </ul>
            )
        },
        {
            title: "Seimbangkan Tabungan dan Hiburan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Sisihkan sebagian kecil anggaran untuk kesenangan atau pengeluaran spontan agar tidak merasa terlalu terkekang. Hal ini membantu menjaga keseimbangan antara disiplin finansial dan menikmati hasil kerja keras.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Kekuatan Masing-Masing",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Biarkan si Planner memimpin dalam merancang strategi jangka panjang, sementara si Diligent berfokus pada pelaksanaan dan eksekusi rencana. Dengan memanfaatkan kekuatan masing-masing, pasangan ini dapat bekerja lebih efektif.
                    </li>
                </ul>
            )
        },
        {
            title: "Berikan Ruang untuk Fleksibilitas",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Si Planner perlu belajar untuk memberikan ruang bagi spontanitas dan keputusan cepat yang mungkin diajukan oleh Diligent, terutama jika keputusan tersebut tidak berdampak besar pada anggaran.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jadwalkan pertemuan rutin untuk mengevaluasi kemajuan keuangan. Gunakan waktu ini untuk meninjau anggaran, menyesuaikan rencana jika diperlukan, dan merayakan pencapaian bersama.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Keberhasilan Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika mencapai milestone finansial, seperti mencapai target tabungan atau investasi, rayakan bersama dengan cara yang sederhana tetapi bermakna. Ini membantu memperkuat hubungan emosional dan memberikan motivasi untuk melangkah lebih jauh.
                    </li>
                </ul>
            )
        },
        {
            title: "Hindari Perfeksionisme",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Keduanya perlu menerima bahwa tidak semua rencana akan berjalan sempurna. Jika terjadi kesalahan, fokuslah pada solusi daripada mencari siapa yang harus disalahkan.
                    </li>
                </ul>
            )
        },
    ],
    "Diligent x Ups and Downs": [
        {
            title: "Diskusikan Gaya Keuangan Masing-Masing",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jelaskan kebiasaan keuangan masing-masing secara terbuka. Diligent harus memahami bahwa fluktuasi keuangan Ups and Downs adalah bagian dari sifat mereka, sementara Ups and Downs harus berusaha untuk lebih konsisten.
                    </li>
                </ul>
            )
        },
        {
            title: "Buat Anggaran Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tetapkan anggaran yang mencakup kebutuhan pokok, tabungan, dan sedikit ruang untuk pengeluaran spontan. Ini memberikan keseimbangan antara disiplin dan fleksibilitas.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Jangka Pendek dan Panjang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Mulailah dengan tujuan kecil, seperti menabung untuk liburan, sebelum beralih ke tujuan jangka panjang seperti membeli rumah. Ini membantu Ups and Downs tetap fokus pada rencana.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat untuk Memantau Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi atau spreadsheet untuk melacak pengeluaran bersama. Ini membantu Ups and Downs lebih sadar tentang kebiasaan mereka dan memberikan Diligent rasa kontrol.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Pencapaian Keuangan dengan Bijak",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika mencapai milestone finansial, rayakan dengan cara sederhana tetapi bermakna. Ini membantu menjaga semangat Ups and Downs dan mengajarkan mereka untuk menikmati pencapaian tanpa berlebihan.
                    </li>
                </ul>
            )
        },
        {
            title: "Berikan Ruang untuk Hiburan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Diligent harus memberi ruang bagi Ups and Downs untuk menikmati pengeluaran yang spontan, selama itu tidak mengganggu anggaran utama.
                    </li>
                </ul>
            )
        },
        {
            title: "Dukung Perubahan Kecil",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Apresiasi setiap usaha Ups and Downs untuk lebih konsisten dalam pengelolaan keuangan. Fokus pada kemajuan, bukan kesalahan.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tetapkan waktu untuk mengevaluasi anggaran dan kemajuan bersama. Gunakan momen ini untuk menyesuaikan rencana sesuai kebutuhan.
                    </li>
                </ul>
            )
        },
    ],

    "Binger x Binger": [
        {
            title: "Membangun Kesadaran Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Keduanya perlu meningkatkan kesadaran tentang pentingnya pengelolaan keuangan yang baik. Mulailah dengan mengevaluasi pola pengeluaran dan memahami dampaknya terhadap stabilitas finansial. Langkah ini dapat membantu mereka mengidentifikasi area yang perlu diperbaiki.</li>
                </ul>
            )
        },
        {
            title: "Buat Anggaran Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Tentukan anggaran bulanan bersama untuk pengeluaran, tabungan, dan hiburan. Pastikan ada batas pengeluaran untuk hal-hal non-esensial, sehingga mereka masih bisa menikmati hidup tanpa mengorbankan stabilitas finansial.</li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Sepakati tujuan finansial yang ingin dicapai, seperti menabung untuk liburan, membeli rumah, atau membangun dana darurat. Tujuan ini akan memberi arah yang jelas bagi mereka untuk bekerja sama dalam mengelola uang.</li>
                </ul>
            )
        },
        {
            title: "Alokasikan Dana Hiburan yang Terkendali",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Sisihkan sebagian anggaran untuk hiburan dan kepuasan pribadi, tetapi dalam jumlah yang sudah disepakati bersama. Ini memberi mereka kebebasan untuk menikmati hidup tanpa mengganggu tabungan atau kebutuhan pokok.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Mulailah menggunakan aplikasi pengelolaan keuangan untuk melacak pengeluaran dan memastikan mereka tidak melampaui anggaran. Dengan memantau keuangan secara real-time, mereka dapat lebih mudah menyesuaikan pengeluaran.
                    </li>
                </ul>
            )
        },
        {
            title: "Bangun Dana Darurat",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Sepakati untuk menyisihkan sebagian pendapatan mereka setiap bulan ke dalam dana darurat. Ini akan membantu mereka menghadapi situasi mendesak tanpa harus berutang atau mengorbankan kebutuhan lain.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tetapkan waktu untuk meninjau keuangan bersama, misalnya setiap bulan. Evaluasi ini akan membantu mereka melihat kemajuan dalam mencapai tujuan finansial dan menemukan cara untuk meningkatkan pengelolaan uang.
                    </li>
                </ul>
            )
        },
        {
            title: "Libatkan Ahli Keuangan jika Diperlukan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jika kesulitan mengelola keuangan tetap berlanjut, pertimbangkan untuk berkonsultasi dengan perencana keuangan. Ahli keuangan dapat membantu mereka membuat rencana yang realistis dan mengajarkan strategi untuk mengelola uang dengan lebih baik.
                    </li>
                </ul>
            )
        },
    ],
    "Binger x Economizer": [
        {
            title: "Buat Anggaran Bersama yang Seimbang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Tentukan anggaran yang mengakomodasi kebutuhan masing-masing. Misalnya, alokasikan sebagian kecil untuk hiburan atau belanja impulsif si Binger, tetapi sisakan sebagian besar untuk tabungan dan pelunasan utang yang menjadi prioritas si Economizer.</li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Pilih tujuan yang dapat memotivasi keduanya, seperti menabung untuk liburan sederhana atau melunasi sebagian utang. Ini membantu Binger memahami pentingnya pengelolaan uang dan membuat Economizer merasa didukung.</li>
                </ul>
            )
        },
        {
            title: "Pisahkan Anggaran Pribadi",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Berikan kebebasan kepada si Binger untuk mengelola sebagian kecil anggaran mereka sendiri tanpa merasa bersalah. Economizer tetap bertanggung jawab untuk menjaga prioritas utama, seperti pelunasan utang.</li>
                </ul>
            )
        },
        {
            title: "Pahami Pentingnya Kepuasan Jangka Pendek dan Jangka Panjang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Si Economizer perlu memahami bahwa sesekali menikmati hidup tidak akan menghancurkan keuangan mereka, sementara si Binger harus belajar bahwa tabungan dan rencana keuangan yang baik akan memberikan manfaat besar di masa depan.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Pencapaian Finansial",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika berhasil melunasi sebagian utang atau mencapai target tabungan kecil, rayakan dengan cara sederhana tetapi bermakna. Misalnya, makan malam bersama atau membeli barang kecil yang diinginkan si Binger.
                    </li>
                </ul>
            )
        },
        {
            title: "Bangun Dana Darurat Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Sisihkan sebagian dari pendapatan untuk membangun dana darurat. Ini membantu Economizer merasa lebih tenang dan memberikan fleksibilitas kepada Binger dalam pengeluaran tanpa menambah utang.
                    </li>
                </ul>
            )
        },
        {
            title: "Komunikasi Terbuka tentang Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Diskusikan secara terbuka alasan di balik kebiasaan masing-masing. Si Economizer bisa menjelaskan pentingnya disiplin keuangan, sementara si Binger dapat berbagi alasan mereka mengutamakan pengalaman hidup.
                    </li>
                </ul>
            )
        },
        {
            title: "Edukasi Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ikuti seminar atau pelatihan keuangan untuk meningkatkan pemahaman tentang cara mengelola uang yang lebih baik. Dengan pemahaman yang sama, keduanya dapat membuat keputusan finansial yang lebih selaras.
                    </li>
                </ul>
            )
        },
    ],
    "Binger x Diligent": [
        {
            title: "Komunikasi Terbuka tentang Tujuan Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Diskusikan secara jujur tentang tujuan keuangan jangka pendek dan jangka panjang. Si Diligent perlu menjelaskan pentingnya perencanaan keuangan dan menabung, sementara Binger dapat berbagi pandangannya tentang pentingnya menikmati hidup saat ini. Pemahaman bersama dapat membantu menemukan titik tengah.
                    </li>
                </ul>
            )
        },
        {
            title: "Membuat Anggaran Fleksibel Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Buat anggaran yang mengakomodasi kebutuhan keduanya. Tentukan alokasi untuk tabungan dan investasi sesuai keinginan Diligent, serta alokasi untuk hiburan dan pengeluaran pribadi yang dihargai oleh Binger. Pastikan anggaran ini realistis dan dapat diikuti oleh keduanya.
                    </li>
                </ul>
            )
        },
        {
            title: "Menetapkan Batas Pengeluaran Pribadi",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Sepakati batas pengeluaran bulanan untuk masing-masing individu. Binger dapat memiliki jumlah tertentu untuk pengeluaran tanpa perlu mempertanggungjawabkannya, selama tidak melebihi batas yang telah ditentukan. Ini memberi Binger kebebasan sekaligus menjaga keuangan bersama tetap sehat.
                    </li>
                </ul>
            )
        },
        {
            title: "Pendidikan Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ikuti seminar atau baca buku tentang pengelolaan keuangan bersama. Ini dapat membantu Binger memahami pentingnya perencanaan keuangan, sementara Diligent dapat belajar tentang pentingnya fleksibilitas dan menikmati hasil kerja keras.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Pencapaian Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika mencapai target tabungan atau tujuan keuangan tertentu, rayakan bersama dengan cara yang menyenangkan bagi keduanya. Misalnya, setelah mencapai target tabungan, gunakan sebagian kecil dana untuk liburan atau kegiatan yang disukai Binger. Ini akan memotivasi keduanya untuk terus bekerja sama.
                    </li>
                </ul>
            )
        },
        {
            title: "Menghargai dan Mengakomodasi Perbedaan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Diligent perlu memahami bahwa sesekali menikmati hasil kerja keras adalah penting untuk kesejahteraan emosional. Binger juga perlu menghargai usaha Diligent dalam merencanakan masa depan dan berusaha untuk tidak mengganggu rencana keuangan bersama.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tetapkan waktu rutin, misalnya setiap bulan, untuk meninjau keuangan bersama. Diskusikan apa yang berjalan baik dan apa yang perlu diperbaiki. Ini memberi kesempatan untuk menyesuaikan anggaran dan strategi keuangan sesuai kebutuhan.
                    </li>
                </ul>
            )
        },
        {
            title: "Membuat Komitmen untuk Tujuan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tentukan beberapa tujuan keuangan yang ingin dicapai bersama dan buat rencana langkah demi langkah untuk mencapainya. Dengan bekerja menuju tujuan bersama, keduanya dapat merasa lebih terhubung dan termotivasi.
                    </li>
                </ul>
            )
        },
    ],
    "Binger x Orderly": [
        {
            title: "Komunikasi tentang Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Diskusikan gaya keuangan masing-masing dengan terbuka. Si Orderly perlu menjelaskan pentingnya menabung dan perencanaan keuangan, sementara si Binger dapat berbagi tentang bagaimana mereka melihat pengeluaran sebagai cara menikmati hidup. Dengan saling memahami, mereka bisa menemukan solusi yang seimbang.</li>
                </ul>
            )
        },
        {
            title: "Buat Anggaran Bersama yang Realistis",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Tetapkan anggaran yang mencakup kebutuhan pokok, tabungan, dan pengeluaran untuk hiburan atau belanja impulsif. Ini memungkinkan Binger untuk menikmati hidup, sementara Orderly tetap merasa bahwa stabilitas keuangan terjaga.</li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Fokus pada tujuan yang disepakati bersama, seperti menabung untuk liburan atau membeli barang besar. Dengan memiliki tujuan bersama, Binger dapat merasa lebih terlibat dalam perencanaan, dan Orderly merasa bahwa rencana mereka dihargai.
                    </li>
                </ul>
            )
        },
        {
            title: "Sisihkan Dana Hiburan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Alokasikan sebagian kecil pendapatan untuk digunakan si Binger tanpa merasa bersalah, sementara tetap mempertahankan tabungan dan anggaran yang diatur oleh si Orderly. Hal ini akan mengurangi ketegangan dalam pengeluaran spontan.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Keberhasilan Finansial",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika mencapai target keuangan bersama, rayakan dengan cara yang menyenangkan tetapi terjangkau. Ini akan membantu si Orderly merasa bahwa usaha mereka dihargai, dan si Binger merasa bahwa mereka tidak kehilangan kesenangan dalam hidup.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi keuangan untuk membantu si Binger melacak pengeluaran mereka dan membantu si Orderly merasa lebih tenang karena ada transparansi dalam keuangan bersama.
                    </li>
                </ul>
            )
        },
        {
            title: "Berikan Penghargaan atas Perubahan Positif",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jika si Binger berhasil mengurangi belanja impulsif atau mengikuti anggaran, berikan penghargaan kecil untuk memotivasi mereka. Hal ini akan memperkuat kebiasaan baik dalam pengelolaan keuangan.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jadwalkan evaluasi bulanan untuk meninjau anggaran dan kemajuan dalam mencapai tujuan keuangan. Ini akan membantu menjaga komunikasi terbuka dan memberikan kesempatan untuk menyesuaikan rencana jika diperlukan.
                    </li>
                </ul>
            )
        },
    ],
    "Binger x Can't Control Finance": [
        {
            title: "Komunikasi Jujur tentang Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Diskusikan kebiasaan keuangan masing-masing dengan terbuka. Cannot Control Finances perlu menjelaskan tantangan yang mereka hadapi, sementara Binger harus bersedia mendengarkan dan memahami bagaimana pengeluaran impulsif mereka dapat memengaruhi hubungan.</li>
                </ul>
            )
        },
        {
            title: "Buat Rencana Pelunasan Utang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Jika Cannot Control Finances memiliki utang, prioritas pertama adalah membuat rencana pelunasan yang realistis. Binger dapat mendukung dengan mengurangi pengeluaran impulsif mereka untuk membantu mencapai tujuan bersama.</li>
                </ul>
            )
        },
        {
            title: "Buat Anggaran Bersama yang Fleksibel",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tetapkan anggaran sederhana yang mencakup kebutuhan pokok, pelunasan utang, dan sedikit ruang untuk hiburan. Ini membantu keduanya belajar disiplin tanpa merasa terkekang.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi atau metode sederhana untuk melacak pengeluaran harian. Transparansi ini dapat membantu Cannot Control Finances dan Binger lebih sadar tentang kebiasaan mereka.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Kecil",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Fokus pada tujuan kecil yang dapat dicapai dalam waktu singkat, seperti menabung untuk liburan kecil atau membayar sebagian utang. Kesuksesan ini akan membantu keduanya membangun kepercayaan diri dalam pengelolaan uang.
                    </li>
                </ul>
            )
        },
        {
            title: "Bangun Dana Darurat Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Setelah utang mulai terkendali, mulailah menyisihkan dana kecil untuk kebutuhan darurat. Ini penting untuk mengurangi stres finansial ketika menghadapi pengeluaran tak terduga.
                    </li>
                </ul>
            )
        },
        {
            title: "Batasi Pengeluaran Impulsif",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Sepakati batas pengeluaran bulanan untuk pembelian impulsif yang disukai Binger. Ini memungkinkan mereka tetap menikmati hidup tanpa mengganggu rencana keuangan yang lebih besar.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jadwalkan waktu rutin untuk mengevaluasi keuangan bersama. Diskusikan apa yang berjalan baik dan apa yang perlu ditingkatkan.
                    </li>
                </ul>
            )
        },
    ],
    "Binger x Planner": [
        {
            title: "Diskusikan Prioritas Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Planner dan Binger perlu berdiskusi tentang tujuan keuangan jangka pendek dan panjang. Tetapkan prioritas bersama yang mencakup kebutuhan pokok, tabungan, dan hiburan agar keduanya merasa didengar.
                    </li>
                </ul>
            )
        },
        {
            title: "Buat Anggaran yang Fleksibel",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Buat anggaran sederhana yang memungkinkan Planner menjaga stabilitas keuangan sambil memberi ruang bagi Binger untuk memiliki pengeluaran spontan. Misalnya, tetapkan batas bulanan untuk pengeluaran impulsif.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi keuangan untuk melacak pengeluaran bersama. Ini membantu Planner memantau anggaran, sementara Binger dapat lebih sadar tentang dampak kebiasaan belanja mereka.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Kecil yang Bisa Dicapai",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Fokus pada tujuan jangka pendek yang menarik bagi keduanya, seperti menabung untuk liburan atau membeli barang tertentu. Kesuksesan kecil ini akan membantu Binger merasa terlibat dalam perencanaan keuangan.
                    </li>
                </ul>
            )
        },
        {
            title: "Berikan Dukungan Tanpa Kritik Berlebihan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Planner harus mendukung perubahan kecil yang dilakukan oleh Binger tanpa mengkritik secara berlebihan. Fokus pada kemajuan daripada kesalahan.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Keberhasilan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika mencapai target keuangan bersama, rayakan pencapaian tersebut dengan cara yang hemat tetapi bermakna. Ini membantu Binger melihat nilai dari perencanaan keuangan tanpa merasa terkekang.
                    </li>
                </ul>
            )
        },
        {
            title: "Fokus pada Edukasi Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jika memungkinkan, ajak Binger untuk belajar tentang pengelolaan keuangan melalui buku, seminar, atau diskusi santai. Dengan pemahaman yang lebih baik, mereka dapat lebih menghargai pentingnya perencanaan.
                    </li>
                </ul>
            )
        },
        {
            title: "Jaga Komunikasi yang Terbuka",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Planner perlu berbicara dengan empati dan menghindari nada yang menghakimi. Binger harus merasa bahwa perubahan yang diminta bukanlah kontrol, melainkan langkah untuk mencapai tujuan bersama.
                    </li>
                </ul>
            )
        },
    ],
    "Binger x Ups and Downs": [
        {
            title: "Komunikasi Terbuka tentang Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Diskusikan kebiasaan finansial masing-masing secara jujur. Keduanya harus mengakui kelemahan mereka dan sepakat untuk bekerja sama dalam memperbaiki pengelolaan uang.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Batas Pengeluaran Impulsif",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Sepakati batas bulanan untuk pengeluaran spontan yang dapat dinikmati keduanya tanpa mengganggu stabilitas keuangan.
                    </li>
                </ul>
            )
        },
        {
            title: "Buat Anggaran Dasar yang Sederhana",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Susun anggaran yang mencakup kebutuhan pokok dan hiburan. Pastikan anggaran ini mudah diikuti agar tidak terasa membebani.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi keuangan untuk melacak pengeluaran harian. Transparansi ini membantu kedua pihak memahami dampak kebiasaan mereka dan membuat perbaikan yang diperlukan.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Kecil yang Dapat Dicapai",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Fokus pada pencapaian tujuan kecil, seperti menabung untuk perjalanan singkat atau membeli barang yang diinginkan. Ini membantu membangun kebiasaan keuangan yang lebih sehat.
                    </li>
                </ul>
            )
        },
        {
            title: "Manfaatkan Fase Hemat dari Ups and Downs",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika Ups and Downs berada dalam fase hemat, gunakan kesempatan ini untuk menabung atau mengurangi pengeluaran besar.
                    </li>
                </ul>
            )
        },
        {
            title: "Edukasi Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ikuti seminar atau pelatihan tentang pengelolaan keuangan. Dengan pengetahuan yang lebih baik, keduanya dapat membuat keputusan keuangan yang lebih bijak
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jadwalkan waktu untuk meninjau keuangan bersama. Diskusikan keberhasilan dan tantangan yang dihadapi, lalu sesuaikan rencana jika diperlukan.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Keberhasilan Finansial dengan Bijak",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika mencapai target kecil, rayakan dengan cara sederhana yang tidak membahayakan anggaran.
                    </li>
                </ul>
            )
        },
    ],

    "Orderly x Orderly": [
        {
            title: "Komunikasi dan Kesepakatan Prioritas Pengeluaran",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Diskusikan apa yang dianggap penting dan tidak penting dalam pengeluaran. Tentukan prioritas bersama untuk memastikan bahwa pengeluaran tetap terkendali tanpa mengorbankan kesenangan individu.</li>
                </ul>
            )
        },
        {
            title: "Tetapkan Batas Pengeluaran untuk Hal-Hal Trendi",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Buat batas anggaran khusus untuk belanja trendi. Dengan demikian, keduanya tetap bisa menikmati barang-barang yang disukai tanpa mengganggu rencana tabungan atau pengeluaran penting lainnya.</li>
                </ul>
            )
        },
        {
            title: "Buat Anggaran yang Memberi Ruang untuk Fleksibilitas",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Sisihkan sebagian anggaran untuk pengeluaran spontan atau hiburan. Ini akan membantu mencegah pasangan merasa terkekang oleh perencanaan yang terlalu ketat.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Fokus pada tujuan jangka panjang seperti menabung untuk rumah, dana darurat, atau investasi. Dengan bekerja menuju tujuan yang sama, keduanya dapat merasa lebih terhubung dan termotivasi untuk mendukung satu sama lain.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Keberhasilan Finansial",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Setelah mencapai milestone keuangan, seperti mencapai target tabungan atau melunasi utang, rayakan bersama dengan cara yang menyenangkan tetapi sesuai anggaran. Ini akan memperkuat ikatan emosional dan memberi penghargaan atas usaha bersama.
                    </li>
                </ul>
            )
        },
        {
            title: "Jaga Keseimbangan Antara Kedisiplinan dan Kesenangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Pastikan untuk tidak terlalu fokus pada aturan atau kontrol dalam keuangan. Berikan ruang untuk menikmati hidup tanpa merasa bersalah, dengan tetap menjaga stabilitas keuangan.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jadwalkan waktu untuk mengevaluasi anggaran dan rencana keuangan. Tinjau apakah ada yang perlu disesuaikan untuk memastikan bahwa kedua belah pihak merasa nyaman dengan pengelolaan keuangan bersama.
                    </li>
                </ul>
            )
        },
    ],
    "Orderly x Economizer": [
        {
            title: "Diskusikan Pendekatan terhadap Utang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Si Orderly perlu memahami situasi utang si Economizer tanpa menghakimi. Bersama-sama, mereka dapat membuat rencana untuk melunasi utang tersebut secara bertahap. Economizer harus bersedia transparan mengenai situasi keuangan mereka agar Orderly merasa percaya diri dalam hubungan ini.</li>
                </ul>
            )
        },
        {
            title: "Buat Rencana Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Tetapkan prioritas bersama, seperti melunasi utang Economizer, menabung, atau investasi kecil. Si Orderly dapat membantu dengan membuat perencanaan yang terorganisir, sementara Economizer bisa belajar dari strategi ini untuk mengelola uang dengan lebih baik.</li>
                </ul>
            )
        },
        {
            title: "Alokasikan Dana untuk Kesenangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Sisihkan sebagian kecil anggaran untuk hal-hal trendi yang disukai Orderly agar mereka tetap merasa dihargai. Pastikan juga ada ruang untuk efisiensi pengeluaran yang disukai Economizer, sehingga keduanya merasa kebutuhan mereka terpenuhi.</li>
                </ul>
            )
        },
        {
            title: "Rayakan Pencapaian Kecil",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika utang Economizer mulai berkurang atau mereka berhasil menabung, rayakan pencapaian tersebut dengan cara yang terjangkau. Ini akan memotivasi keduanya untuk terus bekerja menuju stabilitas keuangan.
                    </li>
                </ul>
            )
        },
        {
            title: "Fokus pada Edukasi Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jika Economizer memiliki kebiasaan keuangan yang kurang sehat, si Orderly dapat membantu dengan berbagi strategi pengelolaan uang yang lebih terorganisir. Mengikuti seminar atau membaca buku keuangan bersama dapat memperkuat pemahaman mereka.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Jangka Panjang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tentukan tujuan seperti dana darurat, menabung untuk rumah, atau liburan bersama. Si Orderly dapat memimpin dalam merencanakan langkah-langkah rinci, sementara Economizer fokus pada pengurangan utang dan kontribusi tabungan.
                    </li>
                </ul>
            )
        },
    ],
    "Orderly x Diligent": [
        {
            title: "Diskusikan Prioritas Pengeluaran",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Diligent dan Orderly perlu mendiskusikan prioritas pengeluaran mereka. Si Orderly dapat menjelaskan alasan pentingnya belanja untuk hal-hal yang mereka sukai, sementara si Diligent dapat berbagi tentang pentingnya penghematan untuk jangka panjang. Diskusi ini akan membantu menyelaraskan harapan mereka.
                    </li>
                </ul>
            )
        },
        {
            title: "Buat Anggaran Bersama yang Seimbang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tetapkan anggaran yang mencakup kebutuhan pokok, tabungan, dan ruang untuk pengeluaran rekreasi atau trendi. Dengan anggaran yang jelas, Orderly tetap bisa menikmati kesenangan, sementara Diligent merasa bahwa tujuan finansial jangka panjang tetap terjaga.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Fokus pada tujuan seperti membeli rumah, dana darurat, atau investasi jangka panjang. Si Diligent dapat membantu dengan usaha keras mereka, sementara si Orderly bisa memastikan rencana tetap berjalan dengan terorganisir.
                    </li>
                </ul>
            )
        },
        {
            title: "Berikan Ruang untuk Belanja Hal-Hal Trendi",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Sisihkan sebagian kecil dari pendapatan untuk pengeluaran personal yang sudah disepakati bersama. Ini memberi Orderly kebebasan untuk membeli barang-barang yang mereka sukai tanpa mengganggu anggaran keseluruhan.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Keberhasilan Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika mencapai milestone finansial, seperti mencapai target tabungan, rayakan bersama. Ini akan membantu Orderly merasa dihargai dan memberikan semangat kepada Diligent untuk terus bekerja keras.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jadwalkan evaluasi keuangan rutin untuk meninjau kemajuan dalam mencapai tujuan. Ini akan membantu menjaga komunikasi terbuka dan memungkinkan keduanya untuk menyesuaikan rencana jika diperlukan.
                    </li>
                </ul>
            )
        },
        {
            title: "Fokus pada Komunikasi dan Penghargaan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Diligent perlu menghargai kontribusi Orderly dalam menjaga keteraturan keuangan, sementara Orderly harus memahami dan mendukung usaha keras Diligent. Saling menghargai akan memperkuat hubungan dan menciptakan kerja sama yang harmonis.
                    </li>
                </ul>
            )
        },
    ],
    "Orderly x Binger": [
        {
            title: "Komunikasi tentang Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Diskusikan gaya keuangan masing-masing dengan terbuka. Si Orderly perlu menjelaskan pentingnya menabung dan perencanaan keuangan, sementara si Binger dapat berbagi tentang bagaimana mereka melihat pengeluaran sebagai cara menikmati hidup. Dengan saling memahami, mereka bisa menemukan solusi yang seimbang.</li>
                </ul>
            )
        },
        {
            title: "Buat Anggaran Bersama yang Realistis",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Tetapkan anggaran yang mencakup kebutuhan pokok, tabungan, dan pengeluaran untuk hiburan atau belanja impulsif. Ini memungkinkan Binger untuk menikmati hidup, sementara Orderly tetap merasa bahwa stabilitas keuangan terjaga.</li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Fokus pada tujuan yang disepakati bersama, seperti menabung untuk liburan atau membeli barang besar. Dengan memiliki tujuan bersama, Binger dapat merasa lebih terlibat dalam perencanaan, dan Orderly merasa bahwa rencana mereka dihargai.
                    </li>
                </ul>
            )
        },
        {
            title: "Sisihkan Dana Hiburan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Alokasikan sebagian kecil pendapatan untuk digunakan si Binger tanpa merasa bersalah, sementara tetap mempertahankan tabungan dan anggaran yang diatur oleh si Orderly. Hal ini akan mengurangi ketegangan dalam pengeluaran spontan.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Keberhasilan Finansial",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika mencapai target keuangan bersama, rayakan dengan cara yang menyenangkan tetapi terjangkau. Ini akan membantu si Orderly merasa bahwa usaha mereka dihargai, dan si Binger merasa bahwa mereka tidak kehilangan kesenangan dalam hidup.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi keuangan untuk membantu si Binger melacak pengeluaran mereka dan membantu si Orderly merasa lebih tenang karena ada transparansi dalam keuangan bersama.
                    </li>
                </ul>
            )
        },
        {
            title: "Berikan Penghargaan atas Perubahan Positif",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jika si Binger berhasil mengurangi belanja impulsif atau mengikuti anggaran, berikan penghargaan kecil untuk memotivasi mereka. Hal ini akan memperkuat kebiasaan baik dalam pengelolaan keuangan.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jadwalkan evaluasi bulanan untuk meninjau anggaran dan kemajuan dalam mencapai tujuan keuangan. Ini akan membantu menjaga komunikasi terbuka dan memberikan kesempatan untuk menyesuaikan rencana jika diperlukan.
                    </li>
                </ul>
            )
        },
    ],
    "Orderly x Can't Control Finance": [
        {
            title: "Komunikasi dengan Empati",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Si Orderly harus mendekati pasangan mereka dengan pengertian, bukan kritik. Diskusikan masalah keuangan secara terbuka tanpa menyalahkan, dan fokus pada solusi bersama.</li>
                </ul>
            )
        },
        {
            title: "Buat Rencana Pelunasan Utang yang Jelas",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Jika Cannot Control Finances memiliki utang, prioritas pertama adalah menyusun strategi pelunasan. Orderly dapat membantu dengan membuat rencana yang terorganisir, sementara Cannot Control Finances berkomitmen untuk mengurangi pengeluaran impulsif.</li>
                </ul>
            )
        },
        {
            title: "Tetapkan Anggaran Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Buat anggaran sederhana yang mencakup kebutuhan pokok, pelunasan utang, tabungan, dan hiburan. Ini membantu Cannot Control Finances belajar disiplin tanpa merasa terlalu terkekang.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi keuangan untuk melacak pengeluaran. Ini akan memberikan transparansi kepada Orderly dan membantu Cannot Control Finances menyadari pola pengeluaran mereka.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Jangka Pendek",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Fokus pada tujuan kecil yang dapat dicapai dengan cepat, seperti menabung untuk kebutuhan mendesak atau melunasi satu utang kecil. Kesuksesan ini akan memotivasi keduanya untuk terus bekerja menuju stabilitas finansial.
                    </li>
                </ul>
            )
        },
        {
            title: "Berikan Ruang untuk Kesalahan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Orderly perlu memahami bahwa perubahan kebiasaan finansial membutuhkan waktu. Berikan dukungan kepada Cannot Control Finances meskipun mereka melakukan kesalahan sesekali.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Keberhasilan Finansial",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika Cannot Control Finances membuat kemajuan, rayakan pencapaian tersebut bersama. Ini akan memperkuat hubungan emosional dan memotivasi pasangan untuk terus memperbaiki kebiasaan mereka.
                    </li>
                </ul>
            )
        },
        {
            title: "Bangun Dana Darurat Secara Bertahap",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Setelah utang terkendali, mulailah membangun dana darurat bersama untuk mengurangi tekanan finansial di masa depan.
                    </li>
                </ul>
            )
        },
    ],
    "Orderly x Planner": [
        {
            title: "Diskusikan Prioritas Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tetapkan tujuan keuangan jangka pendek dan panjang yang disepakati bersama, seperti menabung untuk rumah atau dana pensiun. Pastikan tujuan ini mencakup elemen fleksibilitas untuk memenuhi kebutuhan masing-masing.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Batas Pengeluaran untuk Hal-Hal Trendi",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Siapkan anggaran khusus untuk pengeluaran rekreasi atau barang-barang trendi yang disukai Orderly. Ini memungkinkan mereka menikmati hidup tanpa mengganggu stabilitas keuangan yang diutamakan oleh Planner.
                    </li>
                </ul>
            )
        },
        {
            title: "Buat Anggaran yang Seimbang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Kombinasikan kekuatan Planner dalam perencanaan strategis dengan kemampuan Orderly menjaga keteraturan dalam pengeluaran sehari-hari. Anggaran yang seimbang akan membantu keduanya merasa puas dengan kontribusi masing-masing.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat untuk Memantau Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi atau spreadsheet untuk melacak pengeluaran bersama. Transparansi ini akan membantu keduanya memantau anggaran dan kemajuan keuangan tanpa banyak konflik.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Pencapaian Finansial",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika mencapai target keuangan bersama, rayakan dengan cara yang menyenangkan tetapi hemat. Ini membantu menjaga hubungan tetap harmonis dan memotivasi keduanya untuk mencapai tujuan berikutnya.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jadwalkan waktu rutin untuk mengevaluasi anggaran, rencana keuangan, dan kemajuan menuju tujuan. Gunakan waktu ini untuk menyesuaikan rencana jika diperlukan dan memastikan bahwa keduanya merasa didengar.
                    </li>
                </ul>
            )
        },
        {
            title: "Planner Memberikan Ruang untuk Fleksibilitas",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Si Planner harus belajar memberikan ruang untuk keputusan spontan yang dilakukan oleh Orderly, terutama jika pengeluaran tersebut tidak merusak rencana keuangan jangka panjang.
                    </li>
                </ul>
            )
        },
        {
            title: "Orderly Menghargai Disiplin Planner",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Orderly harus menghormati dedikasi Planner dalam menjaga stabilitas keuangan dan berusaha mengurangi pengeluaran trendi jika itu dianggap berlebihan.
                    </li>
                </ul>
            )
        },
    ],
    "Orderly x Ups and Downs": [
        {
            title: "Diskusikan Kebiasaan Keuangan Masing-Masing",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jelaskan kebiasaan finansial masing-masing secara jujur. Orderly harus memahami kebutuhan spontanitas Ups and Downs, sementara Ups and Downs harus berusaha lebih konsisten.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Anggaran Bersama yang Fleksibel",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Buat anggaran yang mencakup kebutuhan pokok, tabungan, dan ruang untuk pengeluaran spontan. Ini membantu keduanya merasa kebutuhan mereka terpenuhi tanpa mengorbankan stabilitas finansial.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Batas Pengeluaran Impulsif",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Sepakati batas bulanan untuk belanja impulsif yang dapat dinikmati oleh Ups and Downs tanpa mengganggu anggaran utama.
                    </li>
                </ul>
            )
        },
        {
            title: "Manfaatkan Struktur dari Orderly",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Orderly dapat membantu Ups and Downs untuk lebih teratur dalam pengeluaran, sementara tetap memberikan ruang untuk fleksibilitas dan spontanitas.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi atau spreadsheet untuk melacak pengeluaran bersama. Transparansi ini membantu Orderly tetap merasa terkendali, sementara Ups and Downs lebih sadar tentang kebiasaan mereka.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Kecil dan Jangka Panjang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Mulailah dengan tujuan kecil yang mudah dicapai, seperti menabung untuk perjalanan singkat, sebelum menetapkan tujuan jangka panjang seperti membeli rumah.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Keberhasilan dengan Bijak",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika mencapai milestone finansial bersama, rayakan dengan cara sederhana tetapi bermakna. Ini membantu menjaga keseimbangan antara disiplin dan kesenangan.
                    </li>
                </ul>
            )
        },
        {
            title: "Orderly Memberikan Ruang untuk Kesalahan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Orderly harus memberikan ruang bagi Ups and Downs untuk belajar dari kesalahan tanpa merasa dikritik secara berlebihan.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jadwalkan pertemuan rutin untuk mengevaluasi anggaran dan kemajuan keuangan. Diskusikan apa yang berjalan baik dan apa yang perlu ditingkatkan.
                    </li>
                </ul>
            )
        },
    ],

    "Can't Control Finance x Can't Control Finance": [
        {
            title: "Komunikasi Terbuka tentang Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Diskusikan masalah keuangan masing-masing dengan jujur dan tanpa menyalahkan. Langkah pertama adalah menyadari bahwa perubahan diperlukan untuk memperbaiki situasi finansial bersama.</li>
                </ul>
            )
        },
        {
            title: "Mulai dengan Rencana Pelunasan Utang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Jika keduanya memiliki utang, fokuslah untuk membuat rencana pelunasan yang sederhana tetapi efektif. Gunakan metode seperti Snowball (mulai dari utang kecil) untuk membangun momentum positif.</li>
                </ul>
            )
        },
        {
            title: "Tetapkan Anggaran Sederhana",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Buat anggaran bersama yang mencakup kebutuhan pokok, pelunasan utang, dan sedikit ruang untuk hiburan. Pastikan anggaran ini realistis dan mudah diikuti oleh keduanya.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat untuk Melacak Pengeluaran",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Mulailah menggunakan aplikasi keuangan atau catatan sederhana untuk melacak pengeluaran harian. Dengan transparansi ini, keduanya dapat lebih sadar tentang kebiasaan mereka dan menemukan area untuk perbaikan.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Kecil",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Mulailah dengan tujuan kecil yang dapat dicapai dalam waktu singkat, seperti menabung untuk kebutuhan darurat atau melunasi satu utang kecil. Kesuksesan ini akan memotivasi keduanya untuk terus melangkah maju.
                    </li>
                </ul>
            )
        },
        {
            title: "Cari Bantuan Ahli jika Diperlukan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jika pasangan ini merasa kesulitan membuat perubahan signifikan, pertimbangkan untuk berkonsultasi dengan perencana keuangan atau mengikuti pelatihan tentang pengelolaan uang.
                    </li>
                </ul>
            )
        },
        {
            title: "Berikan Dukungan Satu Sama Lain",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Keduanya harus saling mendukung dalam upaya memperbaiki kebiasaan finansial. Fokus pada kemajuan kecil daripada kesalahan yang dibuat, sehingga suasana dalam hubungan tetap positif.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Kemajuan dengan Bijak",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika berhasil mencapai target keuangan kecil, rayakan dengan cara yang hemat, seperti memasak makan malam di rumah atau aktivitas sederhana lainnya. Ini membantu memperkuat hubungan tanpa menambah tekanan finansial.
                    </li>
                </ul>
            )
        },
        {
            title: "Bangun Dana Darurat Secara Perlahan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Setelah utang terkendali, mulailah menyisihkan dana kecil untuk kebutuhan darurat. Ini akan membantu mengurangi stres finansial saat menghadapi situasi tak terduga.
                    </li>
                </ul>
            )
        },
    ],
    "Can't Control Finance x Economizer": [
        {
            title: "Komunikasi yang Jujur tentang Utang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Diskusikan situasi utang masing-masing secara terbuka dan tanpa menyalahkan. Langkah ini penting untuk menciptakan pemahaman bersama dan membuat strategi pelunasan yang efektif.</li>
                </ul>
            )
        },
        {
            title: "Buat Rencana Pelunasan Utang Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Prioritaskan pelunasan utang sebagai langkah pertama. Gunakan pendekatan seperti metode Avalanche (memprioritaskan bunga tertinggi) atau Snowball (memulai dari utang terkecil) sesuai preferensi pasangan. Si Economizer dapat memimpin dalam membuat rencana ini.</li>
                </ul>
            )
        },
        {
            title: "Tentukan Anggaran yang Realistis",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Buat anggaran bersama yang mencakup kebutuhan pokok, pelunasan utang, dan sedikit ruang untuk pengeluaran hiburan. Ini membantu Cannot Control Finances belajar disiplin, sementara Economizer tetap merasa bahwa efisiensi dijaga.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi untuk melacak pengeluaran harian. Transparansi ini dapat membantu Cannot Control Finances lebih sadar tentang kebiasaan mereka dan membuat Economizer merasa lebih tenang.
                    </li>
                </ul>
            )
        },
        {
            title: "Bangun Dana Darurat Kecil-Kecilan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Setelah utang mulai terkelola, mulailah menyisihkan dana kecil untuk situasi darurat. Ini penting untuk menghindari stres keuangan tambahan saat menghadapi pengeluaran tak terduga.
                    </li>
                </ul>
            )
        },
        {
            title: "Dukung Perubahan Positif",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Si Economizer harus memberikan dukungan kepada Cannot Control Finances ketika mereka berusaha mengurangi pengeluaran impulsif. Penghargaan kecil untuk pencapaian ini dapat memotivasi mereka untuk terus berubah.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tetapkan waktu untuk meninjau kemajuan dalam pelunasan utang dan pengelolaan keuangan. Evaluasi ini membantu pasangan tetap pada jalur dan menemukan cara untuk memperbaiki pendekatan jika diperlukan.
                    </li>
                </ul>
            )
        },
        {
            title: "Fokus pada Edukasi Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ikuti pelatihan atau baca buku keuangan bersama untuk meningkatkan pemahaman tentang pengelolaan keuangan. Dengan pengetahuan yang lebih baik, keduanya dapat mengambil langkah yang lebih tepat dalam mengelola keuangan.
                    </li>
                </ul>
            )
        },
    ],
    "Can't Control Finance x Diligent": [
        {
            title: "Komunikasi yang Empati dan Tanpa Menghakimi",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Si Diligent harus mendekati pasangan mereka dengan empati, menghindari menyalahkan, dan lebih fokus pada mencari solusi bersama. Diskusikan situasi keuangan dengan jujur untuk memahami tantangan yang dihadapi oleh Cannot Control Finances.</li>
                </ul>
            )
        },
        {
            title: "Buat Rencana Pelunasan Utang Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Prioritaskan pelunasan utang sebagai langkah pertama. Diligent dapat membantu dengan perencanaan yang terstruktur, sementara Cannot Control Finances berkomitmen untuk mengurangi pengeluaran impulsif.</li>
                </ul>
            )
        },
        {
            title: "Tentukan Anggaran Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Buat anggaran yang realistis dan mencakup kebutuhan pokok, pelunasan utang, serta sedikit ruang untuk hiburan. Ini membantu Cannot Control Finances belajar disiplin tanpa merasa terkekang.
                    </li>
                </ul>
            )
        },
        {
            title: "Berikan Dukungan Positif",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Diligent harus memberikan penghargaan atas perubahan positif yang dilakukan oleh Cannot Control Finances, seperti mengurangi kebiasaan impulsif atau melunasi sebagian utang. Penghargaan kecil dapat memotivasi pasangan untuk terus memperbaiki kebiasaan keuangan.
                    </li>
                </ul>
            )
        },
        {
            title: "Fokus pada Edukasi Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ikuti seminar atau baca buku tentang pengelolaan keuangan bersama. Cannot Control Finances dapat belajar cara mengelola uang dengan lebih baik, sementara Diligent mendapatkan cara baru untuk mendukung pasangan mereka secara efektif.
                    </li>
                </ul>
            )
        },
        {
            title: "Bangun Dana Darurat Secara Bertahap",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Setelah utang mulai terkendali, mulailah menyisihkan dana kecil untuk kebutuhan darurat. Ini penting untuk mengurangi stres finansial ketika menghadapi pengeluaran tak terduga.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jadwalkan pertemuan rutin untuk mengevaluasi kemajuan dalam pengelolaan keuangan. Diskusikan apa yang berjalan dengan baik, apa yang perlu diperbaiki, dan bagaimana mereka dapat mendukung satu sama lain.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Jangka Pendek",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tentukan tujuan kecil yang dapat dicapai dalam waktu singkat, seperti menabung untuk liburan kecil atau melunasi satu utang. Kesuksesan ini akan membantu Cannot Control Finances merasa lebih percaya diri.
                    </li>
                </ul>
            )
        },
    ],
    "Can't Control Finance x Binger": [
        {
            title: "Komunikasi Jujur tentang Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Diskusikan kebiasaan keuangan masing-masing dengan terbuka. Cannot Control Finances perlu menjelaskan tantangan yang mereka hadapi, sementara Binger harus bersedia mendengarkan dan memahami bagaimana pengeluaran impulsif mereka dapat memengaruhi hubungan.</li>
                </ul>
            )
        },
        {
            title: "Buat Rencana Pelunasan Utang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Jika Cannot Control Finances memiliki utang, prioritas pertama adalah membuat rencana pelunasan yang realistis. Binger dapat mendukung dengan mengurangi pengeluaran impulsif mereka untuk membantu mencapai tujuan bersama.</li>
                </ul>
            )
        },
        {
            title: "Buat Anggaran Bersama yang Fleksibel",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tetapkan anggaran sederhana yang mencakup kebutuhan pokok, pelunasan utang, dan sedikit ruang untuk hiburan. Ini membantu keduanya belajar disiplin tanpa merasa terkekang.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi atau metode sederhana untuk melacak pengeluaran harian. Transparansi ini dapat membantu Cannot Control Finances dan Binger lebih sadar tentang kebiasaan mereka.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Kecil",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Fokus pada tujuan kecil yang dapat dicapai dalam waktu singkat, seperti menabung untuk liburan kecil atau membayar sebagian utang. Kesuksesan ini akan membantu keduanya membangun kepercayaan diri dalam pengelolaan uang.
                    </li>
                </ul>
            )
        },
        {
            title: "Bangun Dana Darurat Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Setelah utang mulai terkendali, mulailah menyisihkan dana kecil untuk kebutuhan darurat. Ini penting untuk mengurangi stres finansial ketika menghadapi pengeluaran tak terduga.
                    </li>
                </ul>
            )
        },
        {
            title: "Batasi Pengeluaran Impulsif",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Sepakati batas pengeluaran bulanan untuk pembelian impulsif yang disukai Binger. Ini memungkinkan mereka tetap menikmati hidup tanpa mengganggu rencana keuangan yang lebih besar.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jadwalkan waktu rutin untuk mengevaluasi keuangan bersama. Diskusikan apa yang berjalan baik dan apa yang perlu ditingkatkan.
                    </li>
                </ul>
            )
        },
    ],
    "Can't Control Finance x Orderly": [
        {
            title: "Komunikasi dengan Empati",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Si Orderly harus mendekati pasangan mereka dengan pengertian, bukan kritik. Diskusikan masalah keuangan secara terbuka tanpa menyalahkan, dan fokus pada solusi bersama.</li>
                </ul>
            )
        },
        {
            title: "Buat Rencana Pelunasan Utang yang Jelas",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Jika Cannot Control Finances memiliki utang, prioritas pertama adalah menyusun strategi pelunasan. Orderly dapat membantu dengan membuat rencana yang terorganisir, sementara Cannot Control Finances berkomitmen untuk mengurangi pengeluaran impulsif.</li>
                </ul>
            )
        },
        {
            title: "Tetapkan Anggaran Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Buat anggaran sederhana yang mencakup kebutuhan pokok, pelunasan utang, tabungan, dan hiburan. Ini membantu Cannot Control Finances belajar disiplin tanpa merasa terlalu terkekang.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi keuangan untuk melacak pengeluaran. Ini akan memberikan transparansi kepada Orderly dan membantu Cannot Control Finances menyadari pola pengeluaran mereka.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Jangka Pendek",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Fokus pada tujuan kecil yang dapat dicapai dengan cepat, seperti menabung untuk kebutuhan mendesak atau melunasi satu utang kecil. Kesuksesan ini akan memotivasi keduanya untuk terus bekerja menuju stabilitas finansial.
                    </li>
                </ul>
            )
        },
        {
            title: "Berikan Ruang untuk Kesalahan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Orderly perlu memahami bahwa perubahan kebiasaan finansial membutuhkan waktu. Berikan dukungan kepada Cannot Control Finances meskipun mereka melakukan kesalahan sesekali.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Keberhasilan Finansial",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika Cannot Control Finances membuat kemajuan, rayakan pencapaian tersebut bersama. Ini akan memperkuat hubungan emosional dan memotivasi pasangan untuk terus memperbaiki kebiasaan mereka.
                    </li>
                </ul>
            )
        },
        {
            title: "Bangun Dana Darurat Secara Bertahap",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Setelah utang terkendali, mulailah membangun dana darurat bersama untuk mengurangi tekanan finansial di masa depan.
                    </li>
                </ul>
            )
        },
    ],
    "Can't Control Finance x Planner": [
        {
            title: "Komunikasi yang Empati",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Si Planner harus mendekati pasangan mereka dengan pengertian, bukan kritik. Diskusikan tantangan keuangan dengan fokus pada solusi daripada menyalahkan.
                    </li>
                </ul>
            )
        },
        {
            title: "Buat Rencana Pelunasan Utang yang Realistis",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jika Cannot Control Finances memiliki utang, langkah pertama adalah membuat rencana pelunasan. Planner dapat membantu dengan strategi yang terstruktur, sementara Cannot Control Finances harus berkomitmen untuk mengurangi pengeluaran impulsif.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Anggaran yang Fleksibel",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Buat anggaran yang mencakup kebutuhan pokok, pelunasan utang, dan sedikit ruang untuk pengeluaran hiburan. Ini memungkinkan Cannot Control Finances belajar disiplin tanpa merasa terlalu terkekang.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi atau spreadsheet untuk melacak pengeluaran dan anggaran. Transparansi ini akan membantu Planner merasa lebih tenang dan Cannot Control Finances lebih sadar tentang kebiasaan mereka.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Kecil yang Dapat Dicapai",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Fokus pada pencapaian kecil seperti melunasi satu utang atau menabung untuk kebutuhan mendesak. Kesuksesan ini dapat memotivasi Cannot Control Finances untuk terus memperbaiki kebiasaan mereka.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Kemajuan dengan Bijak",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika Cannot Control Finances berhasil membuat perubahan positif, rayakan dengan cara sederhana tetapi bermakna. Ini membantu memperkuat kepercayaan diri mereka tanpa menambah tekanan finansial.
                    </li>
                </ul>
            )
        },
        {
            title: "Edukasi Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ikuti seminar atau baca buku tentang pengelolaan keuangan bersama. Dengan pengetahuan yang lebih baik, Cannot Control Finances dapat belajar mengelola uang dengan lebih baik, sementara Planner belajar mendukung pasangan mereka secara efektif.
                    </li>
                </ul>
            )
        },
        {
            title: "Planner Memberikan Ruang untuk Kesalahan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Si Planner harus memahami bahwa perubahan kebiasaan memerlukan waktu. Berikan dukungan emosional kepada pasangan mereka saat menghadapi kesulitan.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tetapkan waktu rutin untuk mengevaluasi anggaran dan kemajuan keuangan. Diskusikan apa yang berjalan baik dan apa yang perlu ditingkatkan.
                    </li>
                </ul>
            )
        },
    ],
    "Can't Control Finance x Ups and Downs": [
        {
            title: "Komunikasi Terbuka tentang Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Keduanya harus berdiskusi secara jujur tentang kebiasaan keuangan mereka. Akui kelemahan masing-masing dan sepakati langkah-langkah yang perlu diambil untuk memperbaiki situasi.
                    </li>
                </ul>
            )
        },
        {
            title: "Buat Rencana Pelunasan Utang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jika Cannot Control Finances memiliki utang, prioritas pertama adalah membuat rencana pelunasan yang realistis. Ups and Downs dapat membantu dengan momen-momen hemat mereka.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Anggaran Bersama yang Fleksibel",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Buat anggaran sederhana yang mencakup kebutuhan pokok, pelunasan utang, dan sedikit ruang untuk pengeluaran spontan. Ini membantu keduanya merasa tidak terkekang sambil tetap fokus pada stabilitas finansial.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi keuangan untuk melacak pengeluaran dan memantau anggaran. Transparansi ini membantu kedua pihak memahami dampak kebiasaan mereka dan membuat perubahan yang diperlukan.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Kecil",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Mulailah dengan tujuan kecil yang dapat dicapai dengan cepat, seperti menabung untuk kebutuhan mendesak. Kesuksesan ini dapat memotivasi keduanya untuk terus berusaha memperbaiki kebiasaan finansial.
                    </li>
                </ul>
            )
        },
        {
            title: "Manfaatkan Momen Hemat dari Ups and Downs",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Saat Ups and Downs berada dalam fase hemat, gunakan kesempatan ini untuk menabung atau melunasi sebagian utang.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Keberhasilan dengan Bijak",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika berhasil mencapai target kecil, rayakan pencapaian tersebut dengan cara yang hemat tetapi menyenangkan. Ini membantu menjaga motivasi dan memperkuat hubungan.
                    </li>
                </ul>
            )
        },
        {
            title: "Edukasi Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ikuti pelatihan atau seminar keuangan untuk mendapatkan pemahaman yang lebih baik tentang pengelolaan uang. Pengetahuan ini membantu keduanya membuat keputusan finansial yang lebih bijak.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tetapkan waktu untuk meninjau keuangan bersama. Diskusikan kemajuan yang telah dicapai dan identifikasi area yang perlu ditingkatkan.
                    </li>
                </ul>
            )
        },
    ],

    "Planner x Planner": [
        {
            title: "Tetapkan Tujuan Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Diskusikan prioritas jangka pendek dan panjang, seperti menabung untuk membeli rumah atau dana pensiun. Dengan menyepakati tujuan bersama, keduanya dapat bekerja lebih efisien menuju hasil yang diinginkan.
                    </li>
                </ul>
            )
        },
        {
            title: "Alokasikan Dana untuk Hiburan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Sisihkan sebagian kecil anggaran untuk pengeluaran spontan atau hiburan, seperti makan malam romantis atau liburan singkat. Ini membantu menjaga keseimbangan antara disiplin dan kesenangan.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Pencapaian Finansial",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika mencapai target keuangan, rayakan pencapaian tersebut dengan cara yang bermakna tetapi hemat. Ini membantu memperkuat hubungan emosional dan memberikan penghargaan atas kerja keras bersama.
                    </li>
                </ul>
            )
        },
        {
            title: "Buat Ruang untuk Fleksibilitas",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Pastikan rencana keuangan tidak terlalu kaku. Berikan ruang untuk menyesuaikan anggaran sesuai kebutuhan atau perubahan dalam prioritas.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jadwalkan pertemuan bulanan untuk mengevaluasi anggaran, kemajuan keuangan, dan tujuan. Gunakan waktu ini untuk berbicara tentang perubahan kebutuhan atau rencana baru.
                    </li>
                </ul>
            )
        },
        {
            title: "Fokus pada Komunikasi",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Diskusikan standar dan ekspektasi keuangan secara terbuka. Jika ada ketegangan, fokus pada solusi daripada mencari siapa yang salah.
                    </li>
                </ul>
            )
        },
        {
            title: "Bersikap Fleksibel terhadap Perbedaan Prioritas",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jika ada perbedaan dalam alokasi anggaran, coba kompromikan dengan membagi dana ke dalam beberapa kategori prioritas, sehingga kedua pihak merasa kebutuhan mereka dihargai.
                    </li>
                </ul>
            )
        },
        {
            title: "Hindari Perfeksionisme Berlebih",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ingatkan diri bahwa kesalahan kecil atau perbedaan dalam pendekatan adalah bagian dari hubungan. Fokus pada keselarasan tujuan besar daripada detail yang terlalu kecil.
                    </li>
                </ul>
            )
        },
    ],
    "Planner x Economizer": [
        {
            title: "Diskusikan Utang secara Terbuka",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Planner dan Economizer perlu berbicara secara jujur tentang situasi utang Economizer tanpa menyalahkan. Fokus pada menemukan solusi bersama, seperti menetapkan rencana pelunasan utang.</li>
                </ul>
            )
        },
        {
            title: "Buat Rencana Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>Tetapkan prioritas bersama, seperti melunasi utang terlebih dahulu sebelum mulai menabung untuk tujuan jangka panjang. Planner dapat memimpin dalam menyusun rencana, sementara Economizer berkontribusi dengan ide-ide penghematan.</li>
                </ul>
            )
        },
        {
            title: "Alokasikan Anggaran untuk Fleksibilitas",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Sisihkan sebagian kecil anggaran untuk pengeluaran spontan atau hiburan. Ini membantu Economizer merasa tidak terlalu terkekang, sementara Planner tetap bisa menjaga stabilitas finansial.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi atau spreadsheet sederhana untuk melacak pengeluaran dan kemajuan pelunasan utang. Ini memberikan transparansi bagi keduanya dan membantu menjaga akuntabilitas.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Keberhasilan Kecil",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika utang Economizer mulai berkurang atau mereka berhasil mengikuti anggaran, rayakan pencapaian ini bersama. Ini memperkuat hubungan dan memotivasi keduanya untuk terus maju.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Jangka Pendek dan Jangka Panjang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Mulailah dengan tujuan kecil yang dapat dicapai dalam waktu singkat, seperti melunasi satu utang kecil. Setelah itu, rencanakan tujuan jangka panjang, seperti menabung untuk investasi atau pembelian besar.
                    </li>
                </ul>
            )
        },
        {
            title: "Planner Memberikan Dukungan Emosional",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Si Planner harus mendukung Economizer secara emosional, menghindari kritik berlebihan, dan fokus pada kemajuan yang telah dicapai daripada kesalahan yang terjadi.
                    </li>
                </ul>
            )
        },
    ],
    "Planner x Diligent": [
        {
            title: "Tetapkan Prioritas Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Diskusikan dan sepakati tujuan keuangan jangka pendek dan panjang, seperti membeli rumah atau investasi. Pastikan bahwa kedua pihak merasa nyaman dengan prioritas yang ditetapkan.
                    </li>
                </ul>
            )
        },
        {
            title: "Seimbangkan Tabungan dan Hiburan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Sisihkan sebagian kecil anggaran untuk kesenangan atau pengeluaran spontan agar tidak merasa terlalu terkekang. Hal ini membantu menjaga keseimbangan antara disiplin finansial dan menikmati hasil kerja keras.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Kekuatan Masing-Masing",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Biarkan si Planner memimpin dalam merancang strategi jangka panjang, sementara si Diligent berfokus pada pelaksanaan dan eksekusi rencana. Dengan memanfaatkan kekuatan masing-masing, pasangan ini dapat bekerja lebih efektif.
                    </li>
                </ul>
            )
        },
        {
            title: "Berikan Ruang untuk Fleksibilitas",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Si Planner perlu belajar untuk memberikan ruang bagi spontanitas dan keputusan cepat yang mungkin diajukan oleh Diligent, terutama jika keputusan tersebut tidak berdampak besar pada anggaran.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jadwalkan pertemuan rutin untuk mengevaluasi kemajuan keuangan. Gunakan waktu ini untuk meninjau anggaran, menyesuaikan rencana jika diperlukan, dan merayakan pencapaian bersama.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Keberhasilan Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika mencapai milestone finansial, seperti mencapai target tabungan atau investasi, rayakan bersama dengan cara yang sederhana tetapi bermakna. Ini membantu memperkuat hubungan emosional dan memberikan motivasi untuk melangkah lebih jauh.
                    </li>
                </ul>
            )
        },
        {
            title: "Hindari Perfeksionisme",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Keduanya perlu menerima bahwa tidak semua rencana akan berjalan sempurna. Jika terjadi kesalahan, fokuslah pada solusi daripada mencari siapa yang harus disalahkan.
                    </li>
                </ul>
            )
        },
    ],
    "Planner x Binger": [
        {
            title: "Diskusikan Prioritas Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Planner dan Binger perlu berdiskusi tentang tujuan keuangan jangka pendek dan panjang. Tetapkan prioritas bersama yang mencakup kebutuhan pokok, tabungan, dan hiburan agar keduanya merasa didengar.
                    </li>
                </ul>
            )
        },
        {
            title: "Buat Anggaran yang Fleksibel",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Buat anggaran sederhana yang memungkinkan Planner menjaga stabilitas keuangan sambil memberi ruang bagi Binger untuk memiliki pengeluaran spontan. Misalnya, tetapkan batas bulanan untuk pengeluaran impulsif.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi keuangan untuk melacak pengeluaran bersama. Ini membantu Planner memantau anggaran, sementara Binger dapat lebih sadar tentang dampak kebiasaan belanja mereka.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Kecil yang Bisa Dicapai",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Fokus pada tujuan jangka pendek yang menarik bagi keduanya, seperti menabung untuk liburan atau membeli barang tertentu. Kesuksesan kecil ini akan membantu Binger merasa terlibat dalam perencanaan keuangan.
                    </li>
                </ul>
            )
        },
        {
            title: "Berikan Dukungan Tanpa Kritik Berlebihan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Planner harus mendukung perubahan kecil yang dilakukan oleh Binger tanpa mengkritik secara berlebihan. Fokus pada kemajuan daripada kesalahan.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Keberhasilan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika mencapai target keuangan bersama, rayakan pencapaian tersebut dengan cara yang hemat tetapi bermakna. Ini membantu Binger melihat nilai dari perencanaan keuangan tanpa merasa terkekang.
                    </li>
                </ul>
            )
        },
        {
            title: "Fokus pada Edukasi Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jika memungkinkan, ajak Binger untuk belajar tentang pengelolaan keuangan melalui buku, seminar, atau diskusi santai. Dengan pemahaman yang lebih baik, mereka dapat lebih menghargai pentingnya perencanaan.
                    </li>
                </ul>
            )
        },
        {
            title: "Jaga Komunikasi yang Terbuka",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Planner perlu berbicara dengan empati dan menghindari nada yang menghakimi. Binger harus merasa bahwa perubahan yang diminta bukanlah kontrol, melainkan langkah untuk mencapai tujuan bersama.
                    </li>
                </ul>
            )
        },
    ],
    "Planner x Orderly": [
        {
            title: "Diskusikan Prioritas Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tetapkan tujuan keuangan jangka pendek dan panjang yang disepakati bersama, seperti menabung untuk rumah atau dana pensiun. Pastikan tujuan ini mencakup elemen fleksibilitas untuk memenuhi kebutuhan masing-masing.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Batas Pengeluaran untuk Hal-Hal Trendi",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Siapkan anggaran khusus untuk pengeluaran rekreasi atau barang-barang trendi yang disukai Orderly. Ini memungkinkan mereka menikmati hidup tanpa mengganggu stabilitas keuangan yang diutamakan oleh Planner.
                    </li>
                </ul>
            )
        },
        {
            title: "Buat Anggaran yang Seimbang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Kombinasikan kekuatan Planner dalam perencanaan strategis dengan kemampuan Orderly menjaga keteraturan dalam pengeluaran sehari-hari. Anggaran yang seimbang akan membantu keduanya merasa puas dengan kontribusi masing-masing.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat untuk Memantau Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi atau spreadsheet untuk melacak pengeluaran bersama. Transparansi ini akan membantu keduanya memantau anggaran dan kemajuan keuangan tanpa banyak konflik.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Pencapaian Finansial",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika mencapai target keuangan bersama, rayakan dengan cara yang menyenangkan tetapi hemat. Ini membantu menjaga hubungan tetap harmonis dan memotivasi keduanya untuk mencapai tujuan berikutnya.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jadwalkan waktu rutin untuk mengevaluasi anggaran, rencana keuangan, dan kemajuan menuju tujuan. Gunakan waktu ini untuk menyesuaikan rencana jika diperlukan dan memastikan bahwa keduanya merasa didengar.
                    </li>
                </ul>
            )
        },
        {
            title: "Planner Memberikan Ruang untuk Fleksibilitas",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Si Planner harus belajar memberikan ruang untuk keputusan spontan yang dilakukan oleh Orderly, terutama jika pengeluaran tersebut tidak merusak rencana keuangan jangka panjang.
                    </li>
                </ul>
            )
        },
        {
            title: "Orderly Menghargai Disiplin Planner",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Orderly harus menghormati dedikasi Planner dalam menjaga stabilitas keuangan dan berusaha mengurangi pengeluaran trendi jika itu dianggap berlebihan.
                    </li>
                </ul>
            )
        },
    ],
    "Planner x Can't Control Finance": [
        {
            title: "Komunikasi yang Empati",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Si Planner harus mendekati pasangan mereka dengan pengertian, bukan kritik. Diskusikan tantangan keuangan dengan fokus pada solusi daripada menyalahkan.
                    </li>
                </ul>
            )
        },
        {
            title: "Buat Rencana Pelunasan Utang yang Realistis",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jika Cannot Control Finances memiliki utang, langkah pertama adalah membuat rencana pelunasan. Planner dapat membantu dengan strategi yang terstruktur, sementara Cannot Control Finances harus berkomitmen untuk mengurangi pengeluaran impulsif.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Anggaran yang Fleksibel",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Buat anggaran yang mencakup kebutuhan pokok, pelunasan utang, dan sedikit ruang untuk pengeluaran hiburan. Ini memungkinkan Cannot Control Finances belajar disiplin tanpa merasa terlalu terkekang.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi atau spreadsheet untuk melacak pengeluaran dan anggaran. Transparansi ini akan membantu Planner merasa lebih tenang dan Cannot Control Finances lebih sadar tentang kebiasaan mereka.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Kecil yang Dapat Dicapai",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Fokus pada pencapaian kecil seperti melunasi satu utang atau menabung untuk kebutuhan mendesak. Kesuksesan ini dapat memotivasi Cannot Control Finances untuk terus memperbaiki kebiasaan mereka.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Kemajuan dengan Bijak",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika Cannot Control Finances berhasil membuat perubahan positif, rayakan dengan cara sederhana tetapi bermakna. Ini membantu memperkuat kepercayaan diri mereka tanpa menambah tekanan finansial.
                    </li>
                </ul>
            )
        },
        {
            title: "Edukasi Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ikuti seminar atau baca buku tentang pengelolaan keuangan bersama. Dengan pengetahuan yang lebih baik, Cannot Control Finances dapat belajar mengelola uang dengan lebih baik, sementara Planner belajar mendukung pasangan mereka secara efektif.
                    </li>
                </ul>
            )
        },
        {
            title: "Planner Memberikan Ruang untuk Kesalahan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Si Planner harus memahami bahwa perubahan kebiasaan memerlukan waktu. Berikan dukungan emosional kepada pasangan mereka saat menghadapi kesulitan.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tetapkan waktu rutin untuk mengevaluasi anggaran dan kemajuan keuangan. Diskusikan apa yang berjalan baik dan apa yang perlu ditingkatkan.
                    </li>
                </ul>
            )
        },
    ],

    "Ups and Downs x Ups and Downs": [
        {
            title: "Diskusikan Kebiasaan Keuangan dengan Jujur",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Keduanya harus terbuka tentang pola keuangan mereka. Identifikasi kapan masing-masing berada dalam fase hemat atau impulsif, dan cari cara untuk memanfaatkan momen positif.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Kecil",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Mulailah dengan tujuan kecil, seperti menabung untuk sesuatu yang sederhana atau melunasi utang kecil. Keberhasilan ini dapat memberikan motivasi untuk lebih konsisten.
                    </li>
                </ul>
            )
        },
        {
            title: "Buat Anggaran Sederhana",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Susun anggaran yang fleksibel tetapi realistis, mencakup kebutuhan pokok, tabungan, dan ruang untuk pengeluaran impulsif. Pastikan anggaran ini disepakati bersama.
                    </li>
                </ul>
            )
        },
        {
            title: "Manfaatkan Momen Hemat secara Maksimal",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika keduanya berada dalam fase hemat, gunakan kesempatan ini untuk menabung, melunasi utang, atau mengurangi pengeluaran besar.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi untuk melacak pengeluaran harian dan memantau kemajuan keuangan. Transparansi ini membantu keduanya memahami kebiasaan masing-masing dan membuat penyesuaian yang diperlukan.
                    </li>
                </ul>
            )
        },
        {
            title: "Berikan Dukungan dan Motivasi Satu Sama Lain",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Fokus pada kemajuan kecil yang dicapai bersama daripada mengkritik kesalahan. Dukungan emosional dapat membantu memperbaiki kebiasaan finansial secara bertahap.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jadwalkan waktu untuk meninjau anggaran dan tujuan bersama. Gunakan momen ini untuk mengevaluasi apa yang berjalan baik dan apa yang perlu diperbaiki.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Kemajuan dengan Bijak",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika berhasil mencapai target keuangan, rayakan dengan cara sederhana yang tidak membahayakan anggaran.
                    </li>
                </ul>
            )
        },
        {
            title: "Tingkatkan Literasi Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ikuti pelatihan, seminar, atau baca buku tentang pengelolaan keuangan bersama. Dengan pemahaman yang lebih baik, keduanya dapat membangun kebiasaan yang lebih sehat.
                    </li>
                </ul>
            )
        },
    ],
    "Ups and Downs x Economizer": [
        {
            title: "Komunikasi Terbuka tentang Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Diskusikan kebiasaan keuangan masing-masing secara jujur. Ups and Downs harus berusaha lebih konsisten, sementara Economizer perlu belajar untuk tidak terlalu fokus pada masalah utang dan membuka diri untuk rencana keuangan yang lebih besar.
                    </li>
                </ul>
            )
        },
        {
            title: "Buat Rencana Pelunasan Utang Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Prioritaskan pelunasan utang Economizer dengan menetapkan anggaran yang realistis. Gunakan pendekatan seperti Snowball (mulai dari utang kecil) untuk membangun momentum positif.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Anggaran Bersama yang Fleksibel",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Buat anggaran yang mencakup kebutuhan pokok, pelunasan utang, dan sedikit ruang untuk pengeluaran spontan. Ini membantu Ups and Downs merasa tidak terkekang, sementara Economizer tetap dapat fokus pada pelunasan utang.
                    </li>
                </ul>
            )
        },
        {
            title: "Manfaatkan Momen Hemat dari Ups and Downs",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika Ups and Downs berada dalam fase hemat, gunakan kesempatan ini untuk menabung atau mempercepat pelunasan utang. Ini dapat membantu menciptakan stabilitas jangka pendek.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi untuk melacak pengeluaran harian. Transparansi ini membantu kedua pihak memahami kebiasaan pengeluaran mereka dan memberikan rasa kontrol.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Kecil",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Fokus pada pencapaian kecil yang dapat dirasakan manfaatnya secara langsung, seperti menabung untuk liburan kecil atau melunasi sebagian utang. Ini membantu meningkatkan kepercayaan diri mereka dalam pengelolaan keuangan.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Kemajuan Finansial dengan Bijak",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika berhasil mencapai target kecil, rayakan dengan cara hemat tetapi menyenangkan. Ini membantu menjaga motivasi dan memperkuat hubungan emosional.
                    </li>
                </ul>
            )
        },
        {
            title: "Edukasi Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ikuti seminar atau pelatihan keuangan untuk belajar bersama tentang cara mengelola keuangan dengan lebih baik. Ini akan memberikan dasar pengetahuan yang sama bagi keduanya.
                    </li>
                </ul>
            )
        },
    ],
    "Ups and Downs x Diligent": [
        {
            title: "Diskusikan Gaya Keuangan Masing-Masing",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jelaskan kebiasaan keuangan masing-masing secara terbuka. Diligent harus memahami bahwa fluktuasi keuangan Ups and Downs adalah bagian dari sifat mereka, sementara Ups and Downs harus berusaha untuk lebih konsisten.
                    </li>
                </ul>
            )
        },
        {
            title: "Buat Anggaran Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tetapkan anggaran yang mencakup kebutuhan pokok, tabungan, dan sedikit ruang untuk pengeluaran spontan. Ini memberikan keseimbangan antara disiplin dan fleksibilitas.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Jangka Pendek dan Panjang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Mulailah dengan tujuan kecil, seperti menabung untuk liburan, sebelum beralih ke tujuan jangka panjang seperti membeli rumah. Ini membantu Ups and Downs tetap fokus pada rencana.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat untuk Memantau Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi atau spreadsheet untuk melacak pengeluaran bersama. Ini membantu Ups and Downs lebih sadar tentang kebiasaan mereka dan memberikan Diligent rasa kontrol.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Pencapaian Keuangan dengan Bijak",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika mencapai milestone finansial, rayakan dengan cara sederhana tetapi bermakna. Ini membantu menjaga semangat Ups and Downs dan mengajarkan mereka untuk menikmati pencapaian tanpa berlebihan.
                    </li>
                </ul>
            )
        },
        {
            title: "Berikan Ruang untuk Hiburan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Diligent harus memberi ruang bagi Ups and Downs untuk menikmati pengeluaran yang spontan, selama itu tidak mengganggu anggaran utama.
                    </li>
                </ul>
            )
        },
        {
            title: "Dukung Perubahan Kecil",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Apresiasi setiap usaha Ups and Downs untuk lebih konsisten dalam pengelolaan keuangan. Fokus pada kemajuan, bukan kesalahan.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tetapkan waktu untuk mengevaluasi anggaran dan kemajuan bersama. Gunakan momen ini untuk menyesuaikan rencana sesuai kebutuhan.
                    </li>
                </ul>
            )
        },
    ],
    "Ups and Downs x Binger": [
        {
            title: "Komunikasi Terbuka tentang Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Diskusikan kebiasaan finansial masing-masing secara jujur. Keduanya harus mengakui kelemahan mereka dan sepakat untuk bekerja sama dalam memperbaiki pengelolaan uang.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Batas Pengeluaran Impulsif",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Sepakati batas bulanan untuk pengeluaran spontan yang dapat dinikmati keduanya tanpa mengganggu stabilitas keuangan.
                    </li>
                </ul>
            )
        },
        {
            title: "Buat Anggaran Dasar yang Sederhana",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Susun anggaran yang mencakup kebutuhan pokok dan hiburan. Pastikan anggaran ini mudah diikuti agar tidak terasa membebani.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi keuangan untuk melacak pengeluaran harian. Transparansi ini membantu kedua pihak memahami dampak kebiasaan mereka dan membuat perbaikan yang diperlukan.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Kecil yang Dapat Dicapai",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Fokus pada pencapaian tujuan kecil, seperti menabung untuk perjalanan singkat atau membeli barang yang diinginkan. Ini membantu membangun kebiasaan keuangan yang lebih sehat.
                    </li>
                </ul>
            )
        },
        {
            title: "Manfaatkan Fase Hemat dari Ups and Downs",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika Ups and Downs berada dalam fase hemat, gunakan kesempatan ini untuk menabung atau mengurangi pengeluaran besar.
                    </li>
                </ul>
            )
        },
        {
            title: "Edukasi Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ikuti seminar atau pelatihan tentang pengelolaan keuangan. Dengan pengetahuan yang lebih baik, keduanya dapat membuat keputusan keuangan yang lebih bijak
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jadwalkan waktu untuk meninjau keuangan bersama. Diskusikan keberhasilan dan tantangan yang dihadapi, lalu sesuaikan rencana jika diperlukan.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Keberhasilan Finansial dengan Bijak",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika mencapai target kecil, rayakan dengan cara sederhana yang tidak membahayakan anggaran.
                    </li>
                </ul>
            )
        },
    ],
    "Ups and Downs x Orderly": [
        {
            title: "Diskusikan Kebiasaan Keuangan Masing-Masing",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jelaskan kebiasaan finansial masing-masing secara jujur. Orderly harus memahami kebutuhan spontanitas Ups and Downs, sementara Ups and Downs harus berusaha lebih konsisten.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Anggaran Bersama yang Fleksibel",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Buat anggaran yang mencakup kebutuhan pokok, tabungan, dan ruang untuk pengeluaran spontan. Ini membantu keduanya merasa kebutuhan mereka terpenuhi tanpa mengorbankan stabilitas finansial.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Batas Pengeluaran Impulsif",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Sepakati batas bulanan untuk belanja impulsif yang dapat dinikmati oleh Ups and Downs tanpa mengganggu anggaran utama.
                    </li>
                </ul>
            )
        },
        {
            title: "Manfaatkan Struktur dari Orderly",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Orderly dapat membantu Ups and Downs untuk lebih teratur dalam pengeluaran, sementara tetap memberikan ruang untuk fleksibilitas dan spontanitas.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi atau spreadsheet untuk melacak pengeluaran bersama. Transparansi ini membantu Orderly tetap merasa terkendali, sementara Ups and Downs lebih sadar tentang kebiasaan mereka.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Kecil dan Jangka Panjang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Mulailah dengan tujuan kecil yang mudah dicapai, seperti menabung untuk perjalanan singkat, sebelum menetapkan tujuan jangka panjang seperti membeli rumah.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Keberhasilan dengan Bijak",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika mencapai milestone finansial bersama, rayakan dengan cara sederhana tetapi bermakna. Ini membantu menjaga keseimbangan antara disiplin dan kesenangan.
                    </li>
                </ul>
            )
        },
        {
            title: "Orderly Memberikan Ruang untuk Kesalahan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Orderly harus memberikan ruang bagi Ups and Downs untuk belajar dari kesalahan tanpa merasa dikritik secara berlebihan.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jadwalkan pertemuan rutin untuk mengevaluasi anggaran dan kemajuan keuangan. Diskusikan apa yang berjalan baik dan apa yang perlu ditingkatkan.
                    </li>
                </ul>
            )
        },
    ],
    "Ups and Downs x Can't Control Finance": [
        {
            title: "Komunikasi Terbuka tentang Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Keduanya harus berdiskusi secara jujur tentang kebiasaan keuangan mereka. Akui kelemahan masing-masing dan sepakati langkah-langkah yang perlu diambil untuk memperbaiki situasi.
                    </li>
                </ul>
            )
        },
        {
            title: "Buat Rencana Pelunasan Utang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jika Cannot Control Finances memiliki utang, prioritas pertama adalah membuat rencana pelunasan yang realistis. Ups and Downs dapat membantu dengan momen-momen hemat mereka.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Anggaran Bersama yang Fleksibel",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Buat anggaran sederhana yang mencakup kebutuhan pokok, pelunasan utang, dan sedikit ruang untuk pengeluaran spontan. Ini membantu keduanya merasa tidak terkekang sambil tetap fokus pada stabilitas finansial.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi keuangan untuk melacak pengeluaran dan memantau anggaran. Transparansi ini membantu kedua pihak memahami dampak kebiasaan mereka dan membuat perubahan yang diperlukan.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Kecil",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Mulailah dengan tujuan kecil yang dapat dicapai dengan cepat, seperti menabung untuk kebutuhan mendesak. Kesuksesan ini dapat memotivasi keduanya untuk terus berusaha memperbaiki kebiasaan finansial.
                    </li>
                </ul>
            )
        },
        {
            title: "Manfaatkan Momen Hemat dari Ups and Downs",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Saat Ups and Downs berada dalam fase hemat, gunakan kesempatan ini untuk menabung atau melunasi sebagian utang.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Keberhasilan dengan Bijak",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika berhasil mencapai target kecil, rayakan pencapaian tersebut dengan cara yang hemat tetapi menyenangkan. Ini membantu menjaga motivasi dan memperkuat hubungan.
                    </li>
                </ul>
            )
        },
        {
            title: "Edukasi Keuangan Bersama",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ikuti pelatihan atau seminar keuangan untuk mendapatkan pemahaman yang lebih baik tentang pengelolaan uang. Pengetahuan ini membantu keduanya membuat keputusan finansial yang lebih bijak.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Tetapkan waktu untuk meninjau keuangan bersama. Diskusikan kemajuan yang telah dicapai dan identifikasi area yang perlu ditingkatkan.
                    </li>
                </ul>
            )
        },
    ],
    "Ups and Downs x Planner": [
        {
            title: "Diskusikan Gaya Keuangan Secara Terbuka",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jelaskan kebiasaan keuangan masing-masing dengan jujur. Planner harus memahami kebutuhan spontan Ups and Downs, sementara Ups and Downs perlu menghargai pentingnya rencana keuangan jangka panjang.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Anggaran Bersama yang Seimbang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Buat anggaran yang mencakup kebutuhan pokok, tabungan, dan ruang untuk pengeluaran spontan. Ini membantu Ups and Downs merasa tidak terkekang sambil tetap menjaga stabilitas yang diinginkan oleh Planner.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Batas untuk Pengeluaran Impulsif",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Sepakati batas bulanan untuk belanja impulsif. Ini memungkinkan Ups and Downs menikmati fleksibilitas tanpa merusak anggaran utama.
                    </li>
                </ul>
            )
        },
        {
            title: "Gunakan Alat Pengelola Keuangan",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Gunakan aplikasi untuk melacak pengeluaran dan memantau kemajuan keuangan. Transparansi ini membantu Ups and Downs memahami kebiasaan mereka dan memberi Planner rasa tenang.
                    </li>
                </ul>
            )
        },
        {
            title: "Tetapkan Tujuan Keuangan Kecil dan Jangka Panjang",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Mulailah dengan tujuan kecil yang mudah dicapai, seperti menabung untuk perjalanan singkat, sebelum beralih ke tujuan jangka panjang seperti investasi atau membeli rumah.
                    </li>
                </ul>
            )
        },
        {
            title: "Rayakan Keberhasilan Finansial dengan Bijak",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ketika mencapai milestone keuangan bersama, rayakan dengan cara sederhana tetapi bermakna. Ini membantu Ups and Downs merasa dihargai dan tetap termotivasi.
                    </li>
                </ul>
            )
        },
        {
            title: "Planner Memberikan Ruang untuk Fleksibilitas",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Planner harus belajar untuk menerima keputusan spontan Ups and Downs selama itu tidak merusak rencana besar mereka.
                    </li>
                </ul>
            )
        },
        {
            title: "Ups and Downs Berusaha Lebih Konsisten",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Ups and Downs perlu bekerja untuk lebih konsisten dalam pengelolaan uang mereka, terutama dengan bantuan arahan dari Planner.
                    </li>
                </ul>
            )
        },
        {
            title: "Evaluasi Keuangan Secara Berkala",
            description: (
                <ul className="list-disc ml-6 space-y-1 font-semibold">
                    <li>
                        Jadwalkan pertemuan rutin untuk mengevaluasi anggaran dan kemajuan keuangan. Gunakan waktu ini untuk menyelaraskan kembali prioritas dan menyesuaikan rencana sesuai kebutuhan.
                    </li>
                </ul>
            )
        },
    ],
}
