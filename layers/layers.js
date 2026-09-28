ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:9210").setExtent([590267.276587, 1186327.743496, 621747.070789, 1207184.726486]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 0.706000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PhngX168_1 = new ol.format.GeoJSON();
var features_PhngX168_1 = format_PhngX168_1.readFeatures(json_PhngX168_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9210'});
var jsonSource_PhngX168_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PhngX168_1.addFeatures(features_PhngX168_1);
var lyr_PhngX168_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PhngX168_1, 
                style: style_PhngX168_1,
                popuplayertitle: 'Phường Xã 168',
                interactive: true,
    title: 'Phường Xã 168<br />\
    <img src="styles/legend/PhngX168_1_0.png" /> Đặc khu Côn Đảo<br />\
    <img src="styles/legend/PhngX168_1_1.png" /> Phường An Đông<br />\
    <img src="styles/legend/PhngX168_1_2.png" /> Phường An Hội Đông<br />\
    <img src="styles/legend/PhngX168_1_3.png" /> Phường An Hội Tây<br />\
    <img src="styles/legend/PhngX168_1_4.png" /> Phường An Khánh<br />\
    <img src="styles/legend/PhngX168_1_5.png" /> Phường An Lạc<br />\
    <img src="styles/legend/PhngX168_1_6.png" /> Phường An Nhơn<br />\
    <img src="styles/legend/PhngX168_1_7.png" /> Phường An Phú<br />\
    <img src="styles/legend/PhngX168_1_8.png" /> Phường An Phú Đông<br />\
    <img src="styles/legend/PhngX168_1_9.png" /> Phường Bà Rịa<br />\
    <img src="styles/legend/PhngX168_1_10.png" /> Phường Bàn Cờ<br />\
    <img src="styles/legend/PhngX168_1_11.png" /> Phường Bảy Hiền<br />\
    <img src="styles/legend/PhngX168_1_12.png" /> Phường Bến Cát<br />\
    <img src="styles/legend/PhngX168_1_13.png" /> Phường Bến Thành<br />\
    <img src="styles/legend/PhngX168_1_14.png" /> Phường Bình Cơ<br />\
    <img src="styles/legend/PhngX168_1_15.png" /> Phường Bình Đông<br />\
    <img src="styles/legend/PhngX168_1_16.png" /> Phường Bình Dương<br />\
    <img src="styles/legend/PhngX168_1_17.png" /> Phường Bình Hòa<br />\
    <img src="styles/legend/PhngX168_1_18.png" /> Phường Bình Hưng Hòa<br />\
    <img src="styles/legend/PhngX168_1_19.png" /> Phường Bình Lợi Trung<br />\
    <img src="styles/legend/PhngX168_1_20.png" /> Phường Bình Phú<br />\
    <img src="styles/legend/PhngX168_1_21.png" /> Phường Bình Quới<br />\
    <img src="styles/legend/PhngX168_1_22.png" /> Phường Bình Tân<br />\
    <img src="styles/legend/PhngX168_1_23.png" /> Phường Bình Tây<br />\
    <img src="styles/legend/PhngX168_1_24.png" /> Phường Bình Thạnh<br />\
    <img src="styles/legend/PhngX168_1_25.png" /> Phường Bình Thới<br />\
    <img src="styles/legend/PhngX168_1_26.png" /> Phường Bình Tiên<br />\
    <img src="styles/legend/PhngX168_1_27.png" /> Phường Bình Trị Đông<br />\
    <img src="styles/legend/PhngX168_1_28.png" /> Phường Bình Trưng<br />\
    <img src="styles/legend/PhngX168_1_29.png" /> Phường Cát Lái<br />\
    <img src="styles/legend/PhngX168_1_30.png" /> Phường Cầu Kiệu<br />\
    <img src="styles/legend/PhngX168_1_31.png" /> Phường Cầu Ông Lãnh<br />\
    <img src="styles/legend/PhngX168_1_32.png" /> Phường Chánh Hiệp<br />\
    <img src="styles/legend/PhngX168_1_33.png" /> Phường Chánh Hưng<br />\
    <img src="styles/legend/PhngX168_1_34.png" /> Phường Chánh Phú Hòa<br />\
    <img src="styles/legend/PhngX168_1_35.png" /> Phường Chợ Lớn<br />\
    <img src="styles/legend/PhngX168_1_36.png" /> Phường Chợ Quán<br />\
    <img src="styles/legend/PhngX168_1_37.png" /> Phường Dĩ An<br />\
    <img src="styles/legend/PhngX168_1_38.png" /> Phường Diên Hồng<br />\
    <img src="styles/legend/PhngX168_1_39.png" /> Phường Đông Hòa<br />\
    <img src="styles/legend/PhngX168_1_40.png" /> Phường Đông Hưng Thuận<br />\
    <img src="styles/legend/PhngX168_1_41.png" /> Phường Đức Nhuận<br />\
    <img src="styles/legend/PhngX168_1_42.png" /> Phường Gia Định<br />\
    <img src="styles/legend/PhngX168_1_43.png" /> Phường Gò Vấp<br />\
    <img src="styles/legend/PhngX168_1_44.png" /> Phường Hạnh Thông<br />\
    <img src="styles/legend/PhngX168_1_45.png" /> Phường Hiệp Bình<br />\
    <img src="styles/legend/PhngX168_1_46.png" /> Phường Hòa Bình<br />\
    <img src="styles/legend/PhngX168_1_47.png" /> Phường Hòa Hưng<br />\
    <img src="styles/legend/PhngX168_1_48.png" /> Phường Hòa Lợi<br />\
    <img src="styles/legend/PhngX168_1_49.png" /> Phường Khánh Hội<br />\
    <img src="styles/legend/PhngX168_1_50.png" /> Phường Lái Thiêu<br />\
    <img src="styles/legend/PhngX168_1_51.png" /> Phường Linh Xuân<br />\
    <img src="styles/legend/PhngX168_1_52.png" /> Phường Long Bình<br />\
    <img src="styles/legend/PhngX168_1_53.png" /> Phường Long Hương<br />\
    <img src="styles/legend/PhngX168_1_54.png" /> Phường Long Nguyên<br />\
    <img src="styles/legend/PhngX168_1_55.png" /> Phường Long Phước<br />\
    <img src="styles/legend/PhngX168_1_56.png" /> Phường Long Trường<br />\
    <img src="styles/legend/PhngX168_1_57.png" /> Phường Minh Phụng<br />\
    <img src="styles/legend/PhngX168_1_58.png" /> Phường Nhiêu Lộc<br />\
    <img src="styles/legend/PhngX168_1_59.png" /> Phường Phú An<br />\
    <img src="styles/legend/PhngX168_1_60.png" /> Phường Phú Định<br />\
    <img src="styles/legend/PhngX168_1_61.png" /> Phường Phú Lâm<br />\
    <img src="styles/legend/PhngX168_1_62.png" /> Phường Phú Lợi<br />\
    <img src="styles/legend/PhngX168_1_63.png" /> Phường Phú Mỹ<br />\
    <img src="styles/legend/PhngX168_1_64.png" /> Phường Phú Nhuận<br />\
    <img src="styles/legend/PhngX168_1_65.png" /> Phường Phú Thạnh<br />\
    <img src="styles/legend/PhngX168_1_66.png" /> Phường Phú Thọ<br />\
    <img src="styles/legend/PhngX168_1_67.png" /> Phường Phú Thọ Hòa<br />\
    <img src="styles/legend/PhngX168_1_68.png" /> Phường Phú Thuận<br />\
    <img src="styles/legend/PhngX168_1_69.png" /> Phường Phước Long<br />\
    <img src="styles/legend/PhngX168_1_70.png" /> Phường Phước Thắng<br />\
    <img src="styles/legend/PhngX168_1_71.png" /> Phường Rạch Dừa<br />\
    <img src="styles/legend/PhngX168_1_72.png" /> Phường Sài Gòn<br />\
    <img src="styles/legend/PhngX168_1_73.png" /> Phường Tam Bình<br />\
    <img src="styles/legend/PhngX168_1_74.png" /> Phường Tam Long<br />\
    <img src="styles/legend/PhngX168_1_75.png" /> Phường Tam Thắng<br />\
    <img src="styles/legend/PhngX168_1_76.png" /> Phường Tân Bình<br />\
    <img src="styles/legend/PhngX168_1_77.png" /> Phường Tân Định<br />\
    <img src="styles/legend/PhngX168_1_78.png" /> Phường Tân Đông Hiệp<br />\
    <img src="styles/legend/PhngX168_1_79.png" /> Phường Tân Hải<br />\
    <img src="styles/legend/PhngX168_1_80.png" /> Phường Tân Hiệp<br />\
    <img src="styles/legend/PhngX168_1_81.png" /> Phường Tân Hòa<br />\
    <img src="styles/legend/PhngX168_1_82.png" /> Phường Tân Hưng<br />\
    <img src="styles/legend/PhngX168_1_83.png" /> Phường Tân Khánh<br />\
    <img src="styles/legend/PhngX168_1_84.png" /> Phường Tân Mỹ<br />\
    <img src="styles/legend/PhngX168_1_85.png" /> Phường Tân Phú<br />\
    <img src="styles/legend/PhngX168_1_86.png" /> Phường Tân Phước<br />\
    <img src="styles/legend/PhngX168_1_87.png" /> Phường Tân Sơn<br />\
    <img src="styles/legend/PhngX168_1_88.png" /> Phường Tân Sơn Hòa<br />\
    <img src="styles/legend/PhngX168_1_89.png" /> Phường Tân Sơn Nhất<br />\
    <img src="styles/legend/PhngX168_1_90.png" /> Phường Tân Sơn Nhì<br />\
    <img src="styles/legend/PhngX168_1_91.png" /> Phường Tân Tạo<br />\
    <img src="styles/legend/PhngX168_1_92.png" /> Phường Tân Thành<br />\
    <img src="styles/legend/PhngX168_1_93.png" /> Phường Tân Thới Hiệp<br />\
    <img src="styles/legend/PhngX168_1_94.png" /> Phường Tân Thuận<br />\
    <img src="styles/legend/PhngX168_1_95.png" /> Phường Tân Uyên<br />\
    <img src="styles/legend/PhngX168_1_96.png" /> Phường Tăng Nhơn Phú<br />\
    <img src="styles/legend/PhngX168_1_97.png" /> Phường Tây Nam<br />\
    <img src="styles/legend/PhngX168_1_98.png" /> Phường Tây Thạnh<br />\
    <img src="styles/legend/PhngX168_1_99.png" /> Phường Thạnh Mỹ Tây<br />\
    <img src="styles/legend/PhngX168_1_100.png" /> Phường Thới An<br />\
    <img src="styles/legend/PhngX168_1_101.png" /> Phường Thới Hòa<br />\
    <img src="styles/legend/PhngX168_1_102.png" /> Phường Thông Tây Hội<br />\
    <img src="styles/legend/PhngX168_1_103.png" /> Phường Thủ Dầu Một<br />\
    <img src="styles/legend/PhngX168_1_104.png" /> Phường Thủ Đức<br />\
    <img src="styles/legend/PhngX168_1_105.png" /> Phường Thuận An<br />\
    <img src="styles/legend/PhngX168_1_106.png" /> Phường Thuận Giao<br />\
    <img src="styles/legend/PhngX168_1_107.png" /> Phường Trung Mỹ Tây<br />\
    <img src="styles/legend/PhngX168_1_108.png" /> Phường Vĩnh Hội<br />\
    <img src="styles/legend/PhngX168_1_109.png" /> Phường Vĩnh Tân<br />\
    <img src="styles/legend/PhngX168_1_110.png" /> Phường Vũng Tàu<br />\
    <img src="styles/legend/PhngX168_1_111.png" /> Phường Vườn Lài<br />\
    <img src="styles/legend/PhngX168_1_112.png" /> Phường Xóm Chiếu<br />\
    <img src="styles/legend/PhngX168_1_113.png" /> Phường Xuân Hòa<br />\
    <img src="styles/legend/PhngX168_1_114.png" /> Xã An Long<br />\
    <img src="styles/legend/PhngX168_1_115.png" /> Xã An Nhơn Tây<br />\
    <img src="styles/legend/PhngX168_1_116.png" /> Xã An Thới Đông<br />\
    <img src="styles/legend/PhngX168_1_117.png" /> Xã Bà Điểm<br />\
    <img src="styles/legend/PhngX168_1_118.png" /> Xã Bắc Tân Uyên<br />\
    <img src="styles/legend/PhngX168_1_119.png" /> Xã Bàu Bàng<br />\
    <img src="styles/legend/PhngX168_1_120.png" /> Xã Bàu Lâm<br />\
    <img src="styles/legend/PhngX168_1_121.png" /> Xã Bình Chánh<br />\
    <img src="styles/legend/PhngX168_1_122.png" /> Xã Bình Châu<br />\
    <img src="styles/legend/PhngX168_1_123.png" /> Xã Bình Giã<br />\
    <img src="styles/legend/PhngX168_1_124.png" /> Xã Bình Hưng<br />\
    <img src="styles/legend/PhngX168_1_125.png" /> Xã Bình Khánh<br />\
    <img src="styles/legend/PhngX168_1_126.png" /> Xã Bình Lợi<br />\
    <img src="styles/legend/PhngX168_1_127.png" /> Xã Bình Mỹ<br />\
    <img src="styles/legend/PhngX168_1_128.png" /> Xã Cần Giờ<br />\
    <img src="styles/legend/PhngX168_1_129.png" /> Xã Châu Đức<br />\
    <img src="styles/legend/PhngX168_1_130.png" /> Xã Châu Pha<br />\
    <img src="styles/legend/PhngX168_1_131.png" /> Xã Củ Chi<br />\
    <img src="styles/legend/PhngX168_1_132.png" /> Xã Đất Đỏ<br />\
    <img src="styles/legend/PhngX168_1_133.png" /> Xã Dầu Tiếng<br />\
    <img src="styles/legend/PhngX168_1_134.png" /> Xã Đông Thạnh<br />\
    <img src="styles/legend/PhngX168_1_135.png" /> Xã Hiệp Phước<br />\
    <img src="styles/legend/PhngX168_1_136.png" /> Xã Hồ Tràm<br />\
    <img src="styles/legend/PhngX168_1_137.png" /> Xã Hòa Hiệp<br />\
    <img src="styles/legend/PhngX168_1_138.png" /> Xã Hòa Hội<br />\
    <img src="styles/legend/PhngX168_1_139.png" /> Xã Hóc Môn<br />\
    <img src="styles/legend/PhngX168_1_140.png" /> Xã Hưng Long<br />\
    <img src="styles/legend/PhngX168_1_141.png" /> Xã Kim Long<br />\
    <img src="styles/legend/PhngX168_1_142.png" /> Xã Long Điền<br />\
    <img src="styles/legend/PhngX168_1_143.png" /> Xã Long Hải<br />\
    <img src="styles/legend/PhngX168_1_144.png" /> Xã Long Hòa<br />\
    <img src="styles/legend/PhngX168_1_145.png" /> Xã Long Sơn<br />\
    <img src="styles/legend/PhngX168_1_146.png" /> Xã Minh Thạnh<br />\
    <img src="styles/legend/PhngX168_1_147.png" /> Xã Ngãi Giao<br />\
    <img src="styles/legend/PhngX168_1_148.png" /> Xã Nghĩa Thành<br />\
    <img src="styles/legend/PhngX168_1_149.png" /> Xã Nhà Bè<br />\
    <img src="styles/legend/PhngX168_1_150.png" /> Xã Nhuận Đức<br />\
    <img src="styles/legend/PhngX168_1_151.png" /> Xã Phú Giáo<br />\
    <img src="styles/legend/PhngX168_1_152.png" /> Xã Phú Hòa Đông<br />\
    <img src="styles/legend/PhngX168_1_153.png" /> Xã Phước Hải<br />\
    <img src="styles/legend/PhngX168_1_154.png" /> Xã Phước Hòa<br />\
    <img src="styles/legend/PhngX168_1_155.png" /> Xã Phước Thành<br />\
    <img src="styles/legend/PhngX168_1_156.png" /> Xã Tân An Hội<br />\
    <img src="styles/legend/PhngX168_1_157.png" /> Xã Tân Nhựt<br />\
    <img src="styles/legend/PhngX168_1_158.png" /> Xã Tân Vĩnh Lộc<br />\
    <img src="styles/legend/PhngX168_1_159.png" /> Xã Thái Mỹ<br />\
    <img src="styles/legend/PhngX168_1_160.png" /> Xã Thanh An<br />\
    <img src="styles/legend/PhngX168_1_161.png" /> Xã Thạnh An<br />\
    <img src="styles/legend/PhngX168_1_162.png" /> Xã Thường Tân<br />\
    <img src="styles/legend/PhngX168_1_163.png" /> Xã Trừ Văn Thố<br />\
    <img src="styles/legend/PhngX168_1_164.png" /> Xã Vĩnh Lộc<br />\
    <img src="styles/legend/PhngX168_1_165.png" /> Xã Xuân Sơn<br />\
    <img src="styles/legend/PhngX168_1_166.png" /> Xã Xuân Thới Sơn<br />\
    <img src="styles/legend/PhngX168_1_167.png" /> Xã Xuyên Mộc<br />\
    <img src="styles/legend/PhngX168_1_168.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_PhngX168_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PhngX168_1];
lyr_PhngX168_1.set('fieldAliases', {'SoKyHieu': 'SoKyHieu', 'TenDVHC': 'TenDVHC', 'TenTinh': 'TenTinh', 'DTKm2_356': 'DTKm2_356', 'DS_356': 'DS_356', 'MatDo': 'MatDo', 'TenHuyenCu': 'TenHuyenCu', 'ViTriCu': 'ViTriCu', 'DTKm2_SoDo': 'DTKm2_SoDo', 'DS_SoDo': 'DS_SoDo', 'TenPX_view': 'TenPX_view', 'DotPhLoai': 'DotPhLoai', 'QuyetDinh': 'QuyetDinh', 'KQPhanLoai': 'KQPhanLoai', 'Dtich': 'Dtich', 'ghiChu': 'ghiChu', });
lyr_PhngX168_1.set('fieldImages', {'SoKyHieu': 'TextEdit', 'TenDVHC': 'TextEdit', 'TenTinh': 'TextEdit', 'DTKm2_356': 'TextEdit', 'DS_356': 'Range', 'MatDo': 'Range', 'TenHuyenCu': 'TextEdit', 'ViTriCu': 'TextEdit', 'DTKm2_SoDo': 'TextEdit', 'DS_SoDo': 'Range', 'TenPX_view': 'TextEdit', 'DotPhLoai': 'TextEdit', 'QuyetDinh': 'TextEdit', 'KQPhanLoai': 'TextEdit', 'Dtich': 'TextEdit', 'ghiChu': '', });
lyr_PhngX168_1.set('fieldLabels', {'SoKyHieu': 'inline label - visible with data', 'TenDVHC': 'inline label - always visible', 'TenTinh': 'inline label - visible with data', 'DTKm2_356': 'inline label - visible with data', 'DS_356': 'inline label - visible with data', 'MatDo': 'inline label - visible with data', 'TenHuyenCu': 'inline label - visible with data', 'ViTriCu': 'inline label - visible with data', 'DTKm2_SoDo': 'no label', 'DS_SoDo': 'hidden field', 'TenPX_view': 'no label', 'DotPhLoai': 'hidden field', 'QuyetDinh': 'hidden field', 'KQPhanLoai': 'hidden field', 'Dtich': 'hidden field', 'ghiChu': 'inline label - visible with data', });
lyr_PhngX168_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});