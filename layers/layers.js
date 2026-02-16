var wms_layers = [];


        var lyr_EsriWorldImagery_0 = new ol.layer.Tile({
            'title': 'Esri World Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://wiki.openstreetmap.org/wiki/Esri">Terms & Feedback</a>',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AREA_PROYECTO_T2_T3_2 = new ol.format.GeoJSON();
var features_AREA_PROYECTO_T2_T3_2 = format_AREA_PROYECTO_T2_T3_2.readFeatures(json_AREA_PROYECTO_T2_T3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREA_PROYECTO_T2_T3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_PROYECTO_T2_T3_2.addFeatures(features_AREA_PROYECTO_T2_T3_2);
var lyr_AREA_PROYECTO_T2_T3_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREA_PROYECTO_T2_T3_2, 
                style: style_AREA_PROYECTO_T2_T3_2,
                popuplayertitle: 'AREA_PROYECTO_T2_T3',
                interactive: false,
    title: 'AREA_PROYECTO_T2_T3<br />\
    <img src="styles/legend/AREA_PROYECTO_T2_T3_2_0.png" /> Andenes<br />\
    <img src="styles/legend/AREA_PROYECTO_T2_T3_2_1.png" /> Ciclorruta<br />\
    <img src="styles/legend/AREA_PROYECTO_T2_T3_2_2.png" /> Eje Férreo<br />\
    <img src="styles/legend/AREA_PROYECTO_T2_T3_2_3.png" /> Estación Aguacatala<br />\
    <img src="styles/legend/AREA_PROYECTO_T2_T3_2_4.png" /> Multitubular<br />\
    <img src="styles/legend/AREA_PROYECTO_T2_T3_2_5.png" /> Parada Apolo<br />\
    <img src="styles/legend/AREA_PROYECTO_T2_T3_2_6.png" /> Parada Cristo Rey<br />\
    <img src="styles/legend/AREA_PROYECTO_T2_T3_2_7.png" /> Parada Guayabala<br />\
    <img src="styles/legend/AREA_PROYECTO_T2_T3_2_8.png" /> Parada La Mota<br />\
    <img src="styles/legend/AREA_PROYECTO_T2_T3_2_9.png" /> Parada La Palma<br />\
    <img src="styles/legend/AREA_PROYECTO_T2_T3_2_10.png" /> Parada Loma de los Bernal<br />\
    <img src="styles/legend/AREA_PROYECTO_T2_T3_2_11.png" /> Parada Los Pinos<br />\
    <img src="styles/legend/AREA_PROYECTO_T2_T3_2_12.png" /> Parada San Bernardo<br />\
    <img src="styles/legend/AREA_PROYECTO_T2_T3_2_13.png" /> Parada San Juan<br />\
    <img src="styles/legend/AREA_PROYECTO_T2_T3_2_14.png" /> Parada Villa de Aburrá<br />\
    <img src="styles/legend/AREA_PROYECTO_T2_T3_2_15.png" /> Puente Peatonal Aguacatala<br />\
    <img src="styles/legend/AREA_PROYECTO_T2_T3_2_16.png" /> Puentes<br />\
    <img src="styles/legend/AREA_PROYECTO_T2_T3_2_17.png" /> Quebrada Altavista<br />\
    <img src="styles/legend/AREA_PROYECTO_T2_T3_2_18.png" /> Subestación de Tracción<br />\
    <img src="styles/legend/AREA_PROYECTO_T2_T3_2_19.png" /> Via Vehicular<br />\
    <img src="styles/legend/AREA_PROYECTO_T2_T3_2_20.png" /> Viaducto Aguacatala<br />\
    <img src="styles/legend/AREA_PROYECTO_T2_T3_2_21.png" /> Zona Verde<br />' });
var format_shp_PREDIOS_3 = new ol.format.GeoJSON();
var features_shp_PREDIOS_3 = format_shp_PREDIOS_3.readFeatures(json_shp_PREDIOS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shp_PREDIOS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shp_PREDIOS_3.addFeatures(features_shp_PREDIOS_3);
var lyr_shp_PREDIOS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_shp_PREDIOS_3, 
                style: style_shp_PREDIOS_3,
                popuplayertitle: 'shp_PREDIOS',
                interactive: true,
    title: 'shp_PREDIOS<br />\
    <img src="styles/legend/shp_PREDIOS_3_0.png" /> Parcial<br />\
    <img src="styles/legend/shp_PREDIOS_3_1.png" /> Parcial <br />\
    <img src="styles/legend/shp_PREDIOS_3_2.png" /> Total<br />' });
var format_SoterradoSanGermn_4 = new ol.format.GeoJSON();
var features_SoterradoSanGermn_4 = format_SoterradoSanGermn_4.readFeatures(json_SoterradoSanGermn_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SoterradoSanGermn_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SoterradoSanGermn_4.addFeatures(features_SoterradoSanGermn_4);
var lyr_SoterradoSanGermn_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SoterradoSanGermn_4, 
                style: style_SoterradoSanGermn_4,
                popuplayertitle: 'Soterrado San Germán',
                interactive: true,
                title: '<img src="styles/legend/SoterradoSanGermn_4.png" /> Soterrado San Germán'
            });
var format_PuenteLaIguan_5 = new ol.format.GeoJSON();
var features_PuenteLaIguan_5 = format_PuenteLaIguan_5.readFeatures(json_PuenteLaIguan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuenteLaIguan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuenteLaIguan_5.addFeatures(features_PuenteLaIguan_5);
var lyr_PuenteLaIguan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuenteLaIguan_5, 
                style: style_PuenteLaIguan_5,
                popuplayertitle: 'Puente La Iguaná',
                interactive: true,
                title: '<img src="styles/legend/PuenteLaIguan_5.png" /> Puente La Iguaná'
            });
var format_EstacinCaribe_6 = new ol.format.GeoJSON();
var features_EstacinCaribe_6 = format_EstacinCaribe_6.readFeatures(json_EstacinCaribe_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstacinCaribe_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstacinCaribe_6.addFeatures(features_EstacinCaribe_6);
var lyr_EstacinCaribe_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstacinCaribe_6, 
                style: style_EstacinCaribe_6,
                popuplayertitle: 'Estación Caribe',
                interactive: true,
                title: '<img src="styles/legend/EstacinCaribe_6.png" /> Estación Caribe'
            });
var format_Inventario_T2_T3_2910_7 = new ol.format.GeoJSON();
var features_Inventario_T2_T3_2910_7 = format_Inventario_T2_T3_2910_7.readFeatures(json_Inventario_T2_T3_2910_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inventario_T2_T3_2910_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inventario_T2_T3_2910_7.addFeatures(features_Inventario_T2_T3_2910_7);
var lyr_Inventario_T2_T3_2910_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inventario_T2_T3_2910_7, 
                style: style_Inventario_T2_T3_2910_7,
                popuplayertitle: 'Inventario_T2_T3_2910',
                interactive: true,
    title: 'Inventario_T2_T3_2910<br />\
    <img src="styles/legend/Inventario_T2_T3_2910_7_0.png" /> Conservación<br />\
    <img src="styles/legend/Inventario_T2_T3_2910_7_1.png" /> Tala<br />\
    <img src="styles/legend/Inventario_T2_T3_2910_7_2.png" /> Trasplante<br />' });
var format_inventarioT1_rev_pred_8 = new ol.format.GeoJSON();
var features_inventarioT1_rev_pred_8 = format_inventarioT1_rev_pred_8.readFeatures(json_inventarioT1_rev_pred_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_inventarioT1_rev_pred_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_inventarioT1_rev_pred_8.addFeatures(features_inventarioT1_rev_pred_8);
var lyr_inventarioT1_rev_pred_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_inventarioT1_rev_pred_8, 
                style: style_inventarioT1_rev_pred_8,
                popuplayertitle: 'inventarioT1_rev_pred',
                interactive: true,
    title: 'inventarioT1_rev_pred<br />\
    <img src="styles/legend/inventarioT1_rev_pred_8_0.png" /> Conservacion<br />\
    <img src="styles/legend/inventarioT1_rev_pred_8_1.png" /> Ninguno<br />\
    <img src="styles/legend/inventarioT1_rev_pred_8_2.png" /> Tala<br />\
    <img src="styles/legend/inventarioT1_rev_pred_8_3.png" /> Trasplante<br />' });
var format_LimiteIntervencinM80_9 = new ol.format.GeoJSON();
var features_LimiteIntervencinM80_9 = format_LimiteIntervencinM80_9.readFeatures(json_LimiteIntervencinM80_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteIntervencinM80_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteIntervencinM80_9.addFeatures(features_LimiteIntervencinM80_9);
var lyr_LimiteIntervencinM80_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteIntervencinM80_9, 
                style: style_LimiteIntervencinM80_9,
                popuplayertitle: 'Limite Intervención M80',
                interactive: true,
                title: '<img src="styles/legend/LimiteIntervencinM80_9.png" /> Limite Intervención M80'
            });
var group_PAF = new ol.layer.Group({
                                layers: [lyr_Inventario_T2_T3_2910_7,lyr_inventarioT1_rev_pred_8,],
                                fold: 'open',
                                title: 'PAF'});
var group_Tramo1 = new ol.layer.Group({
                                layers: [lyr_EstacinCaribe_6,],
                                fold: 'open',
                                title: 'Tramo 1'});
var group_Puentes = new ol.layer.Group({
                                layers: [lyr_PuenteLaIguan_5,],
                                fold: 'close',
                                title: 'Puentes'});
var group_Soterreados = new ol.layer.Group({
                                layers: [lyr_SoterradoSanGermn_4,],
                                fold: 'open',
                                title: 'Soterreados'});
var group_Predios = new ol.layer.Group({
                                layers: [lyr_shp_PREDIOS_3,],
                                fold: 'close',
                                title: 'Predios'});

lyr_EsriWorldImagery_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_AREA_PROYECTO_T2_T3_2.setVisible(true);lyr_shp_PREDIOS_3.setVisible(true);lyr_SoterradoSanGermn_4.setVisible(true);lyr_PuenteLaIguan_5.setVisible(true);lyr_EstacinCaribe_6.setVisible(true);lyr_Inventario_T2_T3_2910_7.setVisible(true);lyr_inventarioT1_rev_pred_8.setVisible(true);lyr_LimiteIntervencinM80_9.setVisible(true);
var layersList = [lyr_EsriWorldImagery_0,lyr_GoogleSatellite_1,lyr_AREA_PROYECTO_T2_T3_2,group_Predios,group_Soterreados,group_Puentes,group_Tramo1,group_PAF,lyr_LimiteIntervencinM80_9];
lyr_AREA_PROYECTO_T2_T3_2.set('fieldAliases', {'Componente': 'Componente', });
lyr_shp_PREDIOS_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'tipo_afect': 'tipo_afect', 'adquiere': 'adquiere', 'Grupo': 'Grupo', 'Fecha_Rece': 'Fecha_Rece', 'Cobama': 'Cobama', 'Subtramo': 'Subtramo', 'Dirección': 'Dirección', 'Mat_Inmob': 'Mat_Inmob', 'RPH': 'RPH', 'Recep_UTM8': 'Recep_UTM8', 'Arqueologi': 'Arqueologi', 'Demolicion': 'Demolicion', 'Serv_Domi': 'Serv_Domi', 'Antej_Cara': 'Antej_Cara', 'ID_M80': 'ID_M80', 'ID_PREDIO': 'ID_PREDIO', 'Area_Adqui': 'Area_Adqui', 'Area_Carto': 'Area_Carto', 'NRD_227': 'NRD_227', 'ROSERIA_AM': 'ROSERIA_AM', '64_IMP': '64_IMP', 'Comit_Obra': 'Comit_Obra', 'Adq_Demol': 'Adq_Demol', });
lyr_SoterradoSanGermn_4.set('fieldAliases', {});
lyr_PuenteLaIguan_5.set('fieldAliases', {'Obra': 'Obra', 'Subtramo': 'Subtramo', 'Estado': 'Estado', 'LinkDiseñ': 'LinkDiseñ', 'ModeloBIM': 'ModeloBIM', });
lyr_EstacinCaribe_6.set('fieldAliases', {'FID': 'FID', });
lyr_Inventario_T2_T3_2910_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TRAMO': 'TRAMO', 'X': 'X', 'Y': 'Y', 'ID_arbol': 'ID_arbol', 'Nombre_com': 'Nombre_com', 'Nombre_cie': 'Nombre_cie', 'Tipo_Espac': 'Tipo_Espac', 'Estado_fit': 'Estado_fit', 'AIEV': 'AIEV', 'Cal_AIEV': 'Cal_AIEV', 'SUMA_DAP': 'SUMA_DAP', 'HT_M': 'HT_M', 'HC_M': 'HC_M', 'AB_INDIV': 'AB_INDIV', 'VT_m3_': 'VT_m3_', 'VC_m3_': 'VC_m3_', 'BIOMASA': 'BIOMASA', 'ESTADO_FEN': 'ESTADO_FEN', 'RIESGO': 'RIESGO', 'CAL_DAP': 'CAL_DAP', 'CAL_AIEV1': 'CAL_AIEV1', 'CAL_APE': 'CAL_APE', 'T': 'T', 'UVE__2025_': 'UVE__2025_', 'Trta_valid': 'Trta_valid', 'Retiro': 'Retiro', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'Inter_vali': 'Inter_vali', 'Obser': 'Obser', 'CATE_PATRI': 'CATE_PATRI', });
lyr_inventarioT1_rev_pred_8.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'ID_arbol': 'ID_arbol', 'Familia': 'Familia', 'Genero': 'Genero', 'NOM_CIEN': 'NOM_CIEN', 'NOM_COM': 'NOM_COM', 'Tipo_creci': 'Tipo_creci', 'Hábito': 'Hábito', 'Origen': 'Origen', 'Suma_DAP': 'Suma_DAP', 'G__m2_': 'G__m2_', 'HT__m_': 'HT__m_', 'HC__m_': 'HC__m_', 'VT__m3_': 'VT__m3_', 'VC__m3_': 'VC__m3_', 'ESTADO_FIT': 'ESTADO_FIT', 'CAL_DAP': 'CAL_DAP', 'AIEV': 'AIEV', 'CAL_AIEV': 'CAL_AIEV', 'CAL_APE': 'CAL_APE', 'T_UVE_': 'T_UVE_', 'T_SMLV_': 'T_SMLV_', 'Cate_Patri': 'Cate_Patri', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'Interferen': 'Interferen', 'Mat_Inmo': 'Mat_Inmo', 'Propietari': 'Propietari', 'Identif': 'Identif', 'Direccion': 'Direccion', 'Barrio': 'Barrio', 'Comuna': 'Comuna', 'Est_Permis': 'Est_Permis', 'Cobama': 'Cobama', 'Act_Fijo': 'Act_Fijo', 'Uso_Esp_Pu': 'Uso_Esp_Pu', 'Observacio': 'Observacio', 'ttamto_202': 'ttamto_202', });
lyr_LimiteIntervencinM80_9.set('fieldAliases', {});
lyr_AREA_PROYECTO_T2_T3_2.set('fieldImages', {'Componente': 'TextEdit', });
lyr_shp_PREDIOS_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'tipo_afect': 'TextEdit', 'adquiere': 'TextEdit', 'Grupo': 'TextEdit', 'Fecha_Rece': 'TextEdit', 'Cobama': 'TextEdit', 'Subtramo': 'TextEdit', 'Dirección': 'TextEdit', 'Mat_Inmob': 'TextEdit', 'RPH': 'TextEdit', 'Recep_UTM8': 'TextEdit', 'Arqueologi': 'TextEdit', 'Demolicion': 'TextEdit', 'Serv_Domi': 'TextEdit', 'Antej_Cara': 'TextEdit', 'ID_M80': 'TextEdit', 'ID_PREDIO': 'TextEdit', 'Area_Adqui': 'TextEdit', 'Area_Carto': 'TextEdit', 'NRD_227': 'TextEdit', 'ROSERIA_AM': 'TextEdit', '64_IMP': 'TextEdit', 'Comit_Obra': 'TextEdit', 'Adq_Demol': 'TextEdit', });
lyr_SoterradoSanGermn_4.set('fieldImages', {});
lyr_PuenteLaIguan_5.set('fieldImages', {'Obra': 'TextEdit', 'Subtramo': 'TextEdit', 'Estado': 'TextEdit', 'LinkDiseñ': 'TextEdit', 'ModeloBIM': 'TextEdit', });
lyr_EstacinCaribe_6.set('fieldImages', {'FID': 'TextEdit', });
lyr_Inventario_T2_T3_2910_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'TRAMO': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'ID_arbol': 'TextEdit', 'Nombre_com': 'TextEdit', 'Nombre_cie': 'TextEdit', 'Tipo_Espac': 'TextEdit', 'Estado_fit': 'TextEdit', 'AIEV': 'TextEdit', 'Cal_AIEV': 'TextEdit', 'SUMA_DAP': 'TextEdit', 'HT_M': 'TextEdit', 'HC_M': 'TextEdit', 'AB_INDIV': 'TextEdit', 'VT_m3_': 'TextEdit', 'VC_m3_': 'TextEdit', 'BIOMASA': 'TextEdit', 'ESTADO_FEN': 'TextEdit', 'RIESGO': 'TextEdit', 'CAL_DAP': 'TextEdit', 'CAL_AIEV1': 'TextEdit', 'CAL_APE': 'TextEdit', 'T': 'TextEdit', 'UVE__2025_': 'TextEdit', 'Trta_valid': 'TextEdit', 'Retiro': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'Inter_vali': 'TextEdit', 'Obser': 'TextEdit', 'CATE_PATRI': 'TextEdit', });
lyr_inventarioT1_rev_pred_8.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'ID_arbol': 'TextEdit', 'Familia': 'TextEdit', 'Genero': 'TextEdit', 'NOM_CIEN': 'TextEdit', 'NOM_COM': 'TextEdit', 'Tipo_creci': 'TextEdit', 'Hábito': 'TextEdit', 'Origen': 'TextEdit', 'Suma_DAP': 'TextEdit', 'G__m2_': 'TextEdit', 'HT__m_': 'TextEdit', 'HC__m_': 'TextEdit', 'VT__m3_': 'TextEdit', 'VC__m3_': 'TextEdit', 'ESTADO_FIT': 'TextEdit', 'CAL_DAP': 'TextEdit', 'AIEV': 'TextEdit', 'CAL_AIEV': 'TextEdit', 'CAL_APE': 'TextEdit', 'T_UVE_': 'TextEdit', 'T_SMLV_': 'TextEdit', 'Cate_Patri': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'Interferen': 'TextEdit', 'Mat_Inmo': 'TextEdit', 'Propietari': 'TextEdit', 'Identif': 'TextEdit', 'Direccion': 'TextEdit', 'Barrio': 'TextEdit', 'Comuna': 'TextEdit', 'Est_Permis': 'TextEdit', 'Cobama': 'TextEdit', 'Act_Fijo': 'TextEdit', 'Uso_Esp_Pu': 'TextEdit', 'Observacio': 'TextEdit', 'ttamto_202': 'TextEdit', });
lyr_LimiteIntervencinM80_9.set('fieldImages', {});
lyr_AREA_PROYECTO_T2_T3_2.set('fieldLabels', {'Componente': 'hidden field', });
lyr_shp_PREDIOS_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'tipo_afect': 'no label', 'adquiere': 'no label', 'Grupo': 'no label', 'Fecha_Rece': 'no label', 'Cobama': 'no label', 'Subtramo': 'no label', 'Dirección': 'no label', 'Mat_Inmob': 'no label', 'RPH': 'no label', 'Recep_UTM8': 'no label', 'Arqueologi': 'no label', 'Demolicion': 'no label', 'Serv_Domi': 'no label', 'Antej_Cara': 'no label', 'ID_M80': 'no label', 'ID_PREDIO': 'no label', 'Area_Adqui': 'no label', 'Area_Carto': 'no label', 'NRD_227': 'no label', 'ROSERIA_AM': 'no label', '64_IMP': 'no label', 'Comit_Obra': 'no label', 'Adq_Demol': 'no label', });
lyr_SoterradoSanGermn_4.set('fieldLabels', {});
lyr_PuenteLaIguan_5.set('fieldLabels', {'Obra': 'header label - visible with data', 'Subtramo': 'inline label - always visible', 'Estado': 'inline label - always visible', 'LinkDiseñ': 'inline label - always visible', 'ModeloBIM': 'inline label - always visible', });
lyr_EstacinCaribe_6.set('fieldLabels', {'FID': 'no label', });
lyr_Inventario_T2_T3_2910_7.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'TRAMO': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'ID_arbol': 'inline label - always visible', 'Nombre_com': 'inline label - always visible', 'Nombre_cie': 'inline label - always visible', 'Tipo_Espac': 'inline label - always visible', 'Estado_fit': 'inline label - always visible', 'AIEV': 'inline label - always visible', 'Cal_AIEV': 'inline label - always visible', 'SUMA_DAP': 'inline label - always visible', 'HT_M': 'inline label - always visible', 'HC_M': 'inline label - always visible', 'AB_INDIV': 'inline label - always visible', 'VT_m3_': 'inline label - always visible', 'VC_m3_': 'inline label - always visible', 'BIOMASA': 'inline label - always visible', 'ESTADO_FEN': 'inline label - always visible', 'RIESGO': 'inline label - always visible', 'CAL_DAP': 'inline label - always visible', 'CAL_AIEV1': 'inline label - always visible', 'CAL_APE': 'inline label - always visible', 'T': 'inline label - always visible', 'UVE__2025_': 'inline label - always visible', 'Trta_valid': 'inline label - always visible', 'Retiro': 'inline label - always visible', 'POINT_X': 'inline label - always visible', 'POINT_Y': 'inline label - always visible', 'Inter_vali': 'inline label - always visible', 'Obser': 'inline label - always visible', 'CATE_PATRI': 'inline label - always visible', });
lyr_inventarioT1_rev_pred_8.set('fieldLabels', {'latitude': 'inline label - always visible', 'longitude': 'inline label - always visible', 'ID_arbol': 'inline label - always visible', 'Familia': 'inline label - always visible', 'Genero': 'inline label - always visible', 'NOM_CIEN': 'inline label - always visible', 'NOM_COM': 'inline label - always visible', 'Tipo_creci': 'inline label - always visible', 'Hábito': 'inline label - always visible', 'Origen': 'inline label - always visible', 'Suma_DAP': 'inline label - always visible', 'G__m2_': 'inline label - always visible', 'HT__m_': 'inline label - always visible', 'HC__m_': 'inline label - always visible', 'VT__m3_': 'inline label - always visible', 'VC__m3_': 'inline label - always visible', 'ESTADO_FIT': 'inline label - always visible', 'CAL_DAP': 'inline label - always visible', 'AIEV': 'inline label - always visible', 'CAL_AIEV': 'inline label - always visible', 'CAL_APE': 'inline label - always visible', 'T_UVE_': 'inline label - always visible', 'T_SMLV_': 'inline label - always visible', 'Cate_Patri': 'inline label - always visible', 'POINT_X': 'inline label - always visible', 'POINT_Y': 'inline label - always visible', 'Interferen': 'inline label - always visible', 'Mat_Inmo': 'inline label - always visible', 'Propietari': 'inline label - always visible', 'Identif': 'inline label - always visible', 'Direccion': 'inline label - always visible', 'Barrio': 'inline label - always visible', 'Comuna': 'inline label - always visible', 'Est_Permis': 'inline label - always visible', 'Cobama': 'inline label - always visible', 'Act_Fijo': 'inline label - always visible', 'Uso_Esp_Pu': 'inline label - always visible', 'Observacio': 'inline label - always visible', 'ttamto_202': 'inline label - visible with data', });
lyr_LimiteIntervencinM80_9.set('fieldLabels', {});
lyr_LimiteIntervencinM80_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});