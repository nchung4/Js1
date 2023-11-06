/**Bài 1 */
// const luongNgay = 100000;

document.getElementById('btnTienLuong').onclick = function () {
   var soLuongMotNgay = document.getElementById('txtLuongMotNgay').value * 1;
   var soNgay = document.getElementById('txtSoNgayLam').value * 1;
   
   var tienLuong = soLuongMotNgay * soNgay;
   console.log(tienLuong);
   document.getElementById('showTienLuong').innerHTML = ` Tiền lương tháng này của bạn là ${tienLuong}`;
};


/**Bài 2 */

document.getElementById('btnTrungBinh').onclick = function () {
    var soThuNhat = document.getElementById('txtSoThuNhat').value * 1;
    var soThuHai = document.getElementById('txtSoThuHai').value * 1;
    var soThuBa = document.getElementById('txtSoThuBa').value * 1;
    var soThuTu = document.getElementById('txtSoThuTu').value * 1;
    var soThuNam = document.getElementById('txtSoThuNam').value * 1;
    var soTrungBinh = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5;
    console.log(soTrungBinh);
    document.getElementById('showTrungBinh').innerHTML = ` Số trung bình là ${soTrungBinh}`;
};

/**Bài 3 */

document.getElementById('btnQuyDoi').onclick = function () {
    var quyDoiTien = document.getElementById('txtQuyDoi').value * 1;
    var quyDoi = quyDoiTien * 23500;
    console.log(quyDoi);
    document.getElementById('showQuyDoi').innerHTML = ` Số tiền là ${quyDoi} VNĐ `;
};


/**Bài 4 */

document.getElementById('btnDTCV').onclick = function () {
    var chieuDai = document.getElementById('txtChieuDai').value * 1;
    var chieuRong = document.getElementById('txtChieuRong').value * 1;
    var dienTich = chieuDai * chieuRong;
    var chuVi = ( chieuDai + chieuRong ) * 2;
    console.log(dienTich, chuVi);
    document.getElementById('showDTCV').innerHTML = ` Diện tích là ${dienTich}, Chu vi là ${chuVi}`;
};

/**Bài 5 */

document.getElementById('btnTong').onclick = function () {
    var soHaiChuSo = document.getElementById('txtSoHaiChuSo').value * 1;
    var soHangChuc = Math.floor(soHaiChuSo / 10);
    var soHangDonVi = soHaiChuSo % 10;
    var tinhTong = soHangChuc + soHangDonVi;
    console.log(tinhTong);
    document.getElementById('showTong').innerHTML = ` Tổng là ${tinhTong}`;
};

document.getElementById('btnXacNhan').onclick = function () {
    var tenPhim = document.getElementById('txtTenPhim').value;
    var soVeBan = document.getElementById('txtSoVeBan').value * 1;
    var doanhThu = soVeBan * 50000;
    var tienTuThien = doanhThu * (10/100);
    var tienConLai = doanhThu -tienTuThien; 
    console.log(tenPhim, soVeBan, doanhThu,tienTuThien, tienConLai);
    document.getElementById('showTatCa').innerHTML = ` Tên phim: ${tenPhim}
    <br>Số vé đã bán: ${soVeBan} vé
    <br>Doanh thu: ${doanhThu} VND
    <br>Số tiền trích từ thiện: ${tienTuThien} VND
    <br>Số tiền còn lại: ${tienConLai}`;
};