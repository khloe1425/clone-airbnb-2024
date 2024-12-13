export interface Room {
    id: number;
    tenPhong: string;
    khach: number;
    phongNgu: number;
    giuong: number;
    phongTam: number;
    moTa: string;
    giaTien: number;
    mayGiat: boolean;
    banLa: boolean;
    tivi: boolean;
    dieuHoa: boolean;
    wifi: boolean;
    bep: boolean;
    doXe: boolean;
    hoBoi: boolean;
    banUi: boolean;
    maViTri: number;
    hinhAnh: string;
    maChuPhong: string;
}


export const phong: Room[] = [
    {
        "id": 1,
        "tenPhong": "NewApt D1 - Cozy studio - NU apt - 500m Bui Vien!",
        "khach": 3,
        "phongNgu": 1,
        "giuong": 1,
        "phongTam": 1,
        "moTa": "Tự nhận phòng\r\nTự nhận phòng bằng khóa thông minh.\r\nDinh Long là Chủ nhà siêu cấp\r\nChủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.",
        "giaTien": 28,
        "mayGiat": true,
        "banLa": true,
        "tivi": true,
        "dieuHoa": false,
        "wifi": true,
        "bep": false,
        "doXe": true,
        "hoBoi": true,
        "banUi": true,
        "maViTri": 1,
        "hinhAnh": "https://airbnbnew.cybersoft.edu.vn/images/phong1.jpg",
        "maChuPhong": "CP2"
    },
    {
        "id": 2,
        "tenPhong": "STUDIO MỚI NETFLIX MIỄN PHÍ/ĐỖ XE MIỄN PHÍ",
        "khach": 2,
        "phongNgu": 1,
        "giuong": 1,
        "phongTam": 1,
        "moTa": "Không gian riêng để làm việc\r\nMột khu vực chung có Wi-fi, phù hợp để làm việc.\r\nTự nhận phòng\r\nTự nhận phòng bằng khóa thông minh.\r\nKim Nam là Chủ nhà siêu cấp\r\nChủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.",
        "giaTien": 21,
        "mayGiat": true,
        "banLa": true,
        "tivi": true,
        "dieuHoa": true,
        "wifi": true,
        "bep": true,
        "doXe": false,
        "hoBoi": false,
        "banUi": false,
        "maViTri": 1,
        "hinhAnh": "https://airbnbnew.cybersoft.edu.vn/images/phong2.png",
        "maChuPhong": "CP1"
    },
    {
        "id": 3,
        "tenPhong": "Phòng sang trọng với ban công tại D.1 - 200m đến Bitexco",
        "khach": 2,
        "phongNgu": 1,
        "giuong": 1,
        "phongTam": 1,
        "moTa": "Emmy là Chủ nhà siêu cấp\r\nChủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.\r\nTrải nghiệm nhận phòng tuyệt vời\r\n100% khách gần đây đã xếp hạng 5 sao cho quy trình nhận phòng.\r\nHủy miễn phí trước 28 thg 9.",
        "giaTien": 17,
        "mayGiat": true,
        "banLa": true,
        "tivi": true,
        "dieuHoa": false,
        "wifi": false,
        "bep": false,
        "doXe": true,
        "hoBoi": true,
        "banUi": true,
        "maViTri": 1,
        "hinhAnh": "https://airbnbnew.cybersoft.edu.vn/images/phong3.png",
        "maChuPhong": "CP1"
    },
    {
        "id": 4,
        "tenPhong": "Closer home!!!!",
        "khach": 4,
        "phongNgu": 2,
        "giuong": 2,
        "phongTam": 2,
        "moTa": "Hieu là Chủ nhà siêu cấp\r\nChủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.\r\nĐịa điểm tuyệt vời\r\n100% khách gần đây đã xếp hạng 5 sao cho vị trí này.\r\nTrải nghiệm nhận phòng tuyệt vời\r\n100% khách gần đây đã xếp hạng 5 sao cho quy trình nhận phòng.",
        "giaTien": 28,
        "mayGiat": true,
        "banLa": true,
        "tivi": true,
        "dieuHoa": true,
        "wifi": true,
        "bep": false,
        "doXe": false,
        "hoBoi": false,
        "banUi": false,
        "maViTri": 2,
        "hinhAnh": "https://airbnbnew.cybersoft.edu.vn/images/phong4.png",
        "maChuPhong": "CP1"
    },
    {
        "id": 5,
        "tenPhong": "Toàn bộ quê hương phải của Gi ngay trung tâm Cần Thơ",
        "khach": 4,
        "phongNgu": 2,
        "giuong": 2,
        "phongTam": 2,
        "moTa": "Giang là Chủ nhà siêu cấp\r\nChủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.\r\nĐịa điểm tuyệt vời\r\n94% khách gần đây đã xếp hạng 5 sao cho vị trí này.\r\nTrải nghiệm nhận phòng tuyệt vời\r\n94% khách gần đây đã xếp hạng 5 sao cho quy trình nhận phòng.",
        "giaTien": 25,
        "mayGiat": true,
        "banLa": true,
        "tivi": true,
        "dieuHoa": true,
        "wifi": false,
        "bep": false,
        "doXe": true,
        "hoBoi": false,
        "banUi": true,
        "maViTri": 2,
        "hinhAnh": "https://airbnbnew.cybersoft.edu.vn/images/phong5.png",
        "maChuPhong": "CP1"
    },
    {
        "id": 6,
        "tenPhong": "Ngôi nhà có hoa, nắng đẹp, trung tâm Cần Thơ",
        "khach": 4,
        "phongNgu": 1,
        "giuong": 2,
        "phongTam": 2,
        "moTa": "Tự nhận phòng\r\nTự nhận phòng với hộp khóa an toàn.\r\nDang là Chủ nhà siêu cấp\r\nChủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.",
        "giaTien": 21,
        "mayGiat": true,
        "banLa": true,
        "tivi": true,
        "dieuHoa": true,
        "wifi": true,
        "bep": true,
        "doXe": false,
        "hoBoi": false,
        "banUi": false,
        "maViTri": 2,
        "hinhAnh": "https://airbnbnew.cybersoft.edu.vn/images/phong6.png",
        "maChuPhong": "CP3"
    },
    {
        "id": 7,
        "tenPhong": "Near Hon Chong-Quiet Seaview Studio to beach",
        "khach": 2,
        "phongNgu": 1,
        "giuong": 1,
        "phongTam": 1,
        "moTa": "là nơi ẩn náu mới đưa khách tham quan một hành trình kỳ thú vào bãi biển Nha Trang. Chỉ 2 phút đi bộ ra bãi biển!\r\nCâu chuyện về Trăng tròn được diễn giải lại một cách nghệ thuật theo lối trang trí sang trọng, cổ điển của ngôi nhà – một phiên bản đương đại của thần thoại truyền thống được kể bằng đồ nội thất kết hợp các chi tiết phong cách với các yếu tố Việt cổ. Chúng tôi kết hợp dịch vụ lưu trú truyền thống của châu Á với các tiện ích hiểu biết về công nghệ,",
        "giaTien": 10,
        "mayGiat": true,
        "banLa": true,
        "tivi": true,
        "dieuHoa": false,
        "wifi": false,
        "bep": false,
        "doXe": true,
        "hoBoi": true,
        "banUi": true,
        "maViTri": 3,
        "hinhAnh": "https://airbnbnew.cybersoft.edu.vn/images/phong7.png",
        "maChuPhong": "CP3"
    },
    {
        "id": 8,
        "tenPhong": "Tầng 25 Căn hộ 1 phòng ngủ ấm cúng và hiện đại",
        "khach": 4,
        "phongNgu": 1,
        "giuong": 2,
        "phongTam": 1,
        "moTa": "Phòng ngủ ấm cúng và Morden 1 ở tầng 25. Cảm giác như ở nhà khi qua đêm ở đây! Mọi chi tiết trong căn hộ đều đi kèm với tinh thần nghệ thuật.\r\n\r\nChỗ ở\r\nToàn bộ căn hộ sẽ là của bạn! Sử dụng miễn phí tiện nghi và đồ dùng nhà bếp của chúng tôi",
        "giaTien": 15,
        "mayGiat": false,
        "banLa": false,
        "tivi": true,
        "dieuHoa": true,
        "wifi": true,
        "bep": true,
        "doXe": true,
        "hoBoi": true,
        "banUi": true,
        "maViTri": 3,
        "hinhAnh": "https://airbnbnew.cybersoft.edu.vn/images/phong8.png",
        "maChuPhong": "CP1"
    },
    {
        "id": 9,
        "tenPhong": "Căn hộ mặt tiền Economy Beach với chế độ ngắm bình minh",
        "khach": 4,
        "phongNgu": 1,
        "giuong": 2,
        "phongTam": 1,
        "moTa": "Căn hộ của tôi là căn hộ mặt tiền bãi biển, hướng ra bãi biển. Bạn có thể tận hưởng bình minh từ cửa sổ.\r\nCăn hộ có thể cho thuê tối đa 4 người với 2 giường đôi. Tọa lạc tại trung tâm thành phố với nhiều nhà hàng và siêu thị xung quanh.",
        "giaTien": 18,
        "mayGiat": true,
        "banLa": false,
        "tivi": true,
        "dieuHoa": false,
        "wifi": true,
        "bep": true,
        "doXe": false,
        "hoBoi": false,
        "banUi": true,
        "maViTri": 3,
        "hinhAnh": "https://airbnbnew.cybersoft.edu.vn/images/phong9.png",
        "maChuPhong": "CP2"
    },
    {
        "id": 10,
        "tenPhong": "Hanoi Old Quarter Homestay - Unique Railway View",
        "khach": 2,
        "phongNgu": 1,
        "giuong": 1,
        "phongTam": 1,
        "moTa": "Welcome to our house - a newly renovated apartment & just a step to Old Quarter, Dong Xuan Market, Hoan Kiem Lake...\r\n\r\nYou will get a chance to truly live a Hanoian life with local neighbor, local food & an one-of-a-kind experience of living right beside an unique Hanoi old French style Railway.",
        "giaTien": 23,
        "mayGiat": true,
        "banLa": true,
        "tivi": true,
        "dieuHoa": true,
        "wifi": true,
        "bep": true,
        "doXe": true,
        "hoBoi": false,
        "banUi": true,
        "maViTri": 4,
        "hinhAnh": "https://airbnbnew.cybersoft.edu.vn/images/phong10.png",
        "maChuPhong": "CP4"
    },
    {
        "id": 11,
        "tenPhong": "Studio mới, thang máy, Hoàn Kiếm, gần khu phố cổ",
        "khach": 2,
        "phongNgu": 1,
        "giuong": 1,
        "phongTam": 1,
        "moTa": "Chào mừng bạn đến với Botanicahome! Chúng tôi hân hạnh mời bạn trải nghiệm ngôi nhà của gia đình chúng tôi. Chúng tôi muốn tạo ra một không gian nơi mọi người cảm thấy hoàn toàn thoải mái và như ở nhà. Căn hộ studio nằm trong tòa nhà nhỏ gần khu phố cổ và trung tâm thành phố. Tòa nhà này được xây dựng và được vận hành bởi chính gia đình. Chúng tôi sẽ cố gắng tính toán từng chi tiết, lớn nhỏ để làm bạn hài lòng và mang đến cho bạn một môi trường gọn gàng, sạch sẽ, an toàn, giá cả phải chăng và ấm cúng.",
        "giaTien": 15,
        "mayGiat": true,
        "banLa": true,
        "tivi": true,
        "dieuHoa": true,
        "wifi": true,
        "bep": true,
        "doXe": false,
        "hoBoi": false,
        "banUi": false,
        "maViTri": 4,
        "hinhAnh": "https://airbnbnew.cybersoft.edu.vn/images/phong11.png",
        "maChuPhong": "CP4"
    },
    {
        "id": 12,
        "tenPhong": "Studio mới, thang máy, Hoàn Kiếm, gần khu phố cổ",
        "khach": 2,
        "phongNgu": 1,
        "giuong": 1,
        "phongTam": 1,
        "moTa": "Chào mừng bạn đến với Botanicahome! Chúng tôi hân hạnh mời bạn trải nghiệm ngôi nhà của gia đình chúng tôi. Chúng tôi muốn tạo ra một không gian nơi mọi người cảm thấy hoàn toàn thoải mái và như ở nhà. Căn hộ studio nằm trong tòa nhà nhỏ gần khu phố cổ và trung tâm thành phố. Tòa nhà này được xây dựng và được vận hành bởi chính gia đình. Chúng tôi sẽ cố gắng tính toán từng chi tiết, lớn nhỏ để làm bạn hài lòng và mang đến cho bạn một môi trường gọn gàng, sạch sẽ, an toàn, giá cả phải chăng và ấm cúng.",
        "giaTien": 18,
        "mayGiat": true,
        "banLa": true,
        "tivi": true,
        "dieuHoa": true,
        "wifi": true,
        "bep": true,
        "doXe": true,
        "hoBoi": true,
        "banUi": true,
        "maViTri": 4,
        "hinhAnh": "https://airbnbnew.cybersoft.edu.vn/images/phong12.png",
        "maChuPhong": "CP4"
    },
    {
        "id": 13,
        "tenPhong": "Fisherman homestay (phòng 2 người - B)",
        "khach": 2,
        "phongNgu": 1,
        "giuong": 1,
        "phongTam": 1,
        "moTa": "Feel free and make yourself at home\r\n\r\nĐây là nơi để bạn trốn đi những ồn ào, tấp nập của công việc. Nơi bạn có thể tận hưởng cảm giác bình yên, nhẹ nhàng, đón những cơn gió và ngửi được vị mặn của bỉển nhưng vẫn không mang cảm giác xa lạ. Một nơi thân thuộc như chính ngôi nhà của bạn.",
        "giaTien": 15,
        "mayGiat": true,
        "banLa": true,
        "tivi": true,
        "dieuHoa": true,
        "wifi": true,
        "bep": true,
        "doXe": true,
        "hoBoi": true,
        "banUi": true,
        "maViTri": 5,
        "hinhAnh": "https://airbnbnew.cybersoft.edu.vn/images/phong13.png",
        "maChuPhong": "CP5"
    },
    {
        "id": 14,
        "tenPhong": "ách nhau 2 phòng ngủ tại thị trấn Dương Đông",
        "khach": 8,
        "phongNgu": 2,
        "giuong": 3,
        "phongTam": 3,
        "moTa": "Chào mừng bạn đến với The Yard - nơi cách trung tâm quần đảo Phú Quốc vài bước chân.\r\n\r\nNằm trong khu phố với Thị trấn Dương Đông, Chợ đêm Phú Quốc, Bãi Dài, Chùa,... và được bao quanh bởi nhiều điều địa phương mang bạn đến gần hơn với cuộc sống hàng ngày của công dân đảo.",
        "giaTien": 43,
        "mayGiat": true,
        "banLa": false,
        "tivi": false,
        "dieuHoa": false,
        "wifi": true,
        "bep": true,
        "doXe": true,
        "hoBoi": true,
        "banUi": true,
        "maViTri": 5,
        "hinhAnh": "https://airbnbnew.cybersoft.edu.vn/images/phong14.png",
        "maChuPhong": "CP4"
    },
    {
        "id": 15,
        "tenPhong": "Fisherman homestay",
        "khach": 4,
        "phongNgu": 1,
        "giuong": 2,
        "phongTam": 2,
        "moTa": "Feel free and make yourself at home.\r\n\r\nĐây là nơi để bạn trốn đi những ồn ào, tấp nập của công việc. Nơi bạn có thể tận hưởng cảm giác bình yên, nhẹ nhàng, đón những cơn gió và ngửi được vị mặn của bỉển nhưng vẫn không mang cảm giác xa lạ. Một nơi thân thuộc như chính ngôi nhà của bạn.",
        "giaTien": 33,
        "mayGiat": true,
        "banLa": true,
        "tivi": false,
        "dieuHoa": false,
        "wifi": false,
        "bep": true,
        "doXe": true,
        "hoBoi": true,
        "banUi": true,
        "maViTri": 5,
        "hinhAnh": "https://airbnbnew.cybersoft.edu.vn/images/phong15.png",
        "maChuPhong": "CP3"
    },
    {
        "id": 16,
        "tenPhong": "Studio mới & ấm cúng | Riverside | Bên cạnh Cầu Hàn",
        "khach": 2,
        "phongNgu": 1,
        "giuong": 1,
        "phongTam": 1,
        "moTa": "Chào mừng bạn đến với Ngôi nhà Đậu thứ ba của tôi ở bên bờ sông Hàn, bên cạnh cầu sông Hàn\r\nstudio rộng 25 m2 được trang trí tốt, rộng rãi, rất mới, tươi mới và sạch sẽ.\r\nVị trí tuyệt vời:\r\n- 3 phút đi bộ đến Cầu Hàn, trung tâm thương mại Vincom...\r\n- 2-3 phút bằng taxi đến cầu Rồng, cầu Tình yêu, Chợ đêm Sontra và bãi biển",
        "giaTien": 13,
        "mayGiat": true,
        "banLa": true,
        "tivi": true,
        "dieuHoa": false,
        "wifi": false,
        "bep": false,
        "doXe": false,
        "hoBoi": false,
        "banUi": true,
        "maViTri": 6,
        "hinhAnh": "https://airbnbnew.cybersoft.edu.vn/images/phong16.png",
        "maChuPhong": "CP2"
    },
    {
        "id": 17,
        "tenPhong": "ModernLuxury Studio cách bãi biển 1 phút",
        "khach": 2,
        "phongNgu": 1,
        "giuong": 1,
        "phongTam": 1,
        "moTa": "Đắm chìm trong vẻ đẹp hiện đại và ấm áp của ngôi nhà mới xây này.\r\n* 3 phút đi bộ đến bãi biển Mỹ Khê\r\n* Không giới hạn Internet siêu tốc độ cao riêng tư/ WIFI và TV internet\r\n* Nhà bếp và máy giặt đầy đủ\r\ntiện nghi * Massage và massage phổ biến cạnh tòa nhà (phiếu giảm giá khi có sẵn)\r\n* Giảm giá 30% cho thời gian ở theo tháng",
        "giaTien": 19,
        "mayGiat": true,
        "banLa": false,
        "tivi": false,
        "dieuHoa": false,
        "wifi": true,
        "bep": true,
        "doXe": true,
        "hoBoi": true,
        "banUi": true,
        "maViTri": 6,
        "hinhAnh": "https://airbnbnew.cybersoft.edu.vn/images/phong17.png",
        "maChuPhong": "CP2"
    },
    {
        "id": 18,
        "tenPhong": "Phòng mùa hè",
        "khach": 2,
        "phongNgu": 1,
        "giuong": 1,
        "phongTam": 1,
        "moTa": "Mọi thứ đều trở nên đơn giản tại chỗ ở yên bình và nằm tại vị trí trung tâm này.",
        "giaTien": 9,
        "mayGiat": true,
        "banLa": true,
        "tivi": true,
        "dieuHoa": false,
        "wifi": false,
        "bep": false,
        "doXe": false,
        "hoBoi": false,
        "banUi": false,
        "maViTri": 7,
        "hinhAnh": "https://airbnbnew.cybersoft.edu.vn/images/phong18.png",
        "maChuPhong": "CP5"
    },
    {
        "id": 19,
        "tenPhong": "Căn hộ hiện đại độc đáo của Scandinavia",
        "khach": 2,
        "phongNgu": 1,
        "giuong": 1,
        "phongTam": 1,
        "moTa": "Nơi ở độc đáo này mang một phong cách rất riêng.",
        "giaTien": 17,
        "mayGiat": true,
        "banLa": true,
        "tivi": true,
        "dieuHoa": false,
        "wifi": false,
        "bep": false,
        "doXe": false,
        "hoBoi": false,
        "banUi": false,
        "maViTri": 7,
        "hinhAnh": "https://airbnbnew.cybersoft.edu.vn/images/phong19.png",
        "maChuPhong": "CP4"
    },
    {
        "id": 20,
        "tenPhong": "Hill Lodge Mũi Né - Ngôi nhà nhỏ gần bãi biển",
        "khach": 4,
        "phongNgu": 1,
        "giuong": 1,
        "phongTam": 1,
        "moTa": "Đó sẽ là một ý tưởng chớp nhoáng sau khi tôi quyết định nghỉ việc. Tôi chia sẻ với bạn tôi, một kiến trúc sư, sau đó Hill Lodge được tạo ra. Thành phố này nằm trên sườn đồi trong một bãi biển dài, đó là lý do tại sao chúng tôi gọi “Hill Lodge”.\r\n\r\nChỗ ở\r\nHill Lodge được thiết kế theo phong cách tối giản. Chúng tôi thiết lập một số vật liệu cần thiết trong nhà nghỉ nhỏ. Nó có thể là đủ để sống và ẹnjoy sau một thời gian dài làm việc trong một thành phố bận rộn hoặc chỉ là một chuyến đi.",
        "giaTien": 27,
        "mayGiat": true,
        "banLa": true,
        "tivi": true,
        "dieuHoa": true,
        "wifi": true,
        "bep": true,
        "doXe": true,
        "hoBoi": true,
        "banUi": true,
        "maViTri": 8,
        "hinhAnh": "https://airbnbnew.cybersoft.edu.vn/images/phong20.png",
        "maChuPhong": "CP3"
    },
    {
        "id": 21,
        "tenPhong": "Sky Guest House",
        "khach": 2,
        "phongNgu": 1,
        "giuong": 1,
        "phongTam": 1,
        "moTa": "Một số thông tin đã được dịch tự động. ",
        "giaTien": 19,
        "mayGiat": true,
        "banLa": true,
        "tivi": true,
        "dieuHoa": true,
        "wifi": true,
        "bep": true,
        "doXe": true,
        "hoBoi": true,
        "banUi": true,
        "maViTri": 8,
        "hinhAnh": "https://airbnbnew.cybersoft.edu.vn/images/phong21.png",
        "maChuPhong": "CP1"
    },
    {
        "id": 233092,
        "tenPhong": "phong view biển",
        "khach": 3,
        "phongNgu": 2,
        "giuong": 1,
        "phongTam": 2,
        "moTa": "phong  test",
        "giaTien": 8,
        "mayGiat": true,
        "banLa": true,
        "tivi": false,
        "dieuHoa": false,
        "wifi": false,
        "bep": false,
        "doXe": false,
        "hoBoi": false,
        "banUi": false,
        "maViTri": 5,
        "hinhAnh": "https://cdn3.ivivu.com/2022/09/T%E1%BB%95ng-quan-du-l%E1%BB%8Bch-V%C5%A9ng-T%C3%A0u-ivivu.jpg",
        "maChuPhong": "CP1"
    },
    {
        "id": 233103,
        "tenPhong": "Flat w Espresso Machine/Ban công/Hồ bơi/5 phút đến SECC",
        "khach": 4,
        "phongNgu": 2,
        "giuong": 2,
        "phongTam": 2,
        "moTa": "Chào mừng bạn đến với ngôi nhà 2 phòng ngủ thoáng mát của chúng tôi ở trung tâm Phú Mỹ Hưng, Quận 7. Bạn sẽ tìm thấy:\n\n* Ban công thư giãn với tầm nhìn thanh bình\n\n* Bếp đầy đủ tiện nghi với máy pha cà phê espresso, nước uống và dụng cụ nấu ăn miễn phí\n\n* Phòng tập thể dục được trang bị đầy đủ tiện nghi, hồ bơi ngoài trời\n\n* Nhà hàng, quán bar, quán cà phê. cửa hàng tạp hóa, công viên xinh đẹp ngay trước mắt bạn\n\n* 5 phút đi xe đến SECC, trung tâm mua sắm Crescent và rạp chiếu phim CGV\n\nNgôi nhà này lý tưởng cho những người tìm kiếm một kỳ nghỉ thoải mái.",
        "giaTien": 33,
        "mayGiat": true,
        "banLa": true,
        "tivi": true,
        "dieuHoa": true,
        "wifi": true,
        "bep": true,
        "doXe": true,
        "hoBoi": true,
        "banUi": true,
        "maViTri": 1,
        "hinhAnh": "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI2MTcyOTg5MDUxNjE5OTY3Mg%3D%3D/original/1f476474-8930-4858-9fc7-740fdc379de7.jpeg?im_w=1200",
        "maChuPhong": "CP2"
    },
    {
        "id": 233104,
        "tenPhong": "Phan thiết phòng",
        "khach": 5,
        "phongNgu": 1,
        "giuong": 2,
        "phongTam": 22,
        "moTa": "HOME RENTALS 140M2.\nA maximum of 3 people.\nThis spacious and peaceful space will make you feel good on this trip.\nThe house have a full yard (front,back, sky yard).\nRight next to the Phan Thiet platform you move to is also quite convenient.\n",
        "giaTien": 25,
        "mayGiat": true,
        "banLa": true,
        "tivi": true,
        "dieuHoa": true,
        "wifi": true,
        "bep": true,
        "doXe": true,
        "hoBoi": true,
        "banUi": true,
        "maViTri": 1,
        "hinhAnh": "https://airbnbnew.cybersoft.edu.vn/avatar/13-11-2024-08-36-31-screen-shot-2024-10-25-at-14.00.38.png",
        "maChuPhong": "CP4"
    }
]