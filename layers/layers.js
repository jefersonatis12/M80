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
var format_SoterradoSanGermn_2 = new ol.format.GeoJSON();
var features_SoterradoSanGermn_2 = format_SoterradoSanGermn_2.readFeatures(json_SoterradoSanGermn_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SoterradoSanGermn_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SoterradoSanGermn_2.addFeatures(features_SoterradoSanGermn_2);
var lyr_SoterradoSanGermn_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SoterradoSanGermn_2, 
                style: style_SoterradoSanGermn_2,
                popuplayertitle: 'Soterrado San Germán',
                interactive: true,
                title: '<img src="styles/legend/SoterradoSanGermn_2.png" /> Soterrado San Germán'
            });
var format_PuenteLaIguan_3 = new ol.format.GeoJSON();
var features_PuenteLaIguan_3 = format_PuenteLaIguan_3.readFeatures(json_PuenteLaIguan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuenteLaIguan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuenteLaIguan_3.addFeatures(features_PuenteLaIguan_3);
var lyr_PuenteLaIguan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuenteLaIguan_3, 
                style: style_PuenteLaIguan_3,
                popuplayertitle: 'Puente La Iguaná',
                interactive: true,
                title: '<img src="styles/legend/PuenteLaIguan_3.png" /> Puente La Iguaná'
            });
var format_EstacinCaribe_4 = new ol.format.GeoJSON();
var features_EstacinCaribe_4 = format_EstacinCaribe_4.readFeatures(json_EstacinCaribe_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstacinCaribe_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstacinCaribe_4.addFeatures(features_EstacinCaribe_4);
var lyr_EstacinCaribe_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstacinCaribe_4, 
                style: style_EstacinCaribe_4,
                popuplayertitle: 'Estación Caribe',
                interactive: true,
                title: '<img src="styles/legend/EstacinCaribe_4.png" /> Estación Caribe'
            });
var format_inventarioT1_rev_pred_5 = new ol.format.GeoJSON();
var features_inventarioT1_rev_pred_5 = format_inventarioT1_rev_pred_5.readFeatures(json_inventarioT1_rev_pred_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_inventarioT1_rev_pred_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_inventarioT1_rev_pred_5.addFeatures(features_inventarioT1_rev_pred_5);
var lyr_inventarioT1_rev_pred_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_inventarioT1_rev_pred_5, 
                style: style_inventarioT1_rev_pred_5,
                popuplayertitle: 'inventarioT1_rev_pred',
                interactive: true,
    title: 'inventarioT1_rev_pred<br />\
    <img src="styles/legend/inventarioT1_rev_pred_5_0.png" /> Conservacion<br />\
    <img src="styles/legend/inventarioT1_rev_pred_5_1.png" /> Ninguno<br />\
    <img src="styles/legend/inventarioT1_rev_pred_5_2.png" /> Tala<br />\
    <img src="styles/legend/inventarioT1_rev_pred_5_3.png" /> Trasplante<br />' });
var format_2026_109_inv_T1prima_6 = new ol.format.GeoJSON();
var features_2026_109_inv_T1prima_6 = format_2026_109_inv_T1prima_6.readFeatures(json_2026_109_inv_T1prima_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2026_109_inv_T1prima_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2026_109_inv_T1prima_6.addFeatures(features_2026_109_inv_T1prima_6);
var lyr_2026_109_inv_T1prima_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2026_109_inv_T1prima_6, 
                style: style_2026_109_inv_T1prima_6,
                popuplayertitle: '2026_109_inv_T1prima',
                interactive: true,
    title: '2026_109_inv_T1prima<br />\
    <img src="styles/legend/2026_109_inv_T1prima_6_0.png" /> Tala<br />\
    <img src="styles/legend/2026_109_inv_T1prima_6_1.png" /> Trasplante<br />' });
var format_Emvarias_7 = new ol.format.GeoJSON();
var features_Emvarias_7 = format_Emvarias_7.readFeatures(json_Emvarias_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Emvarias_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Emvarias_7.addFeatures(features_Emvarias_7);
var lyr_Emvarias_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Emvarias_7, 
                style: style_Emvarias_7,
                popuplayertitle: 'Emvarias',
                interactive: true,
    title: 'Emvarias<br />\
    <img src="styles/legend/Emvarias_7_0.png" /> Tala<br />' });
var group_Quebradas = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Quebradas'});
var group_Area_proyecto = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Area_proyecto'});
var group_PAF = new ol.layer.Group({
                                layers: [lyr_inventarioT1_rev_pred_5,lyr_2026_109_inv_T1prima_6,lyr_Emvarias_7,],
                                fold: 'open',
                                title: 'PAF'});
var group_Tramo1 = new ol.layer.Group({
                                layers: [lyr_EstacinCaribe_4,],
                                fold: 'open',
                                title: 'Tramo 1'});
var group_Puentes = new ol.layer.Group({
                                layers: [lyr_PuenteLaIguan_3,],
                                fold: 'close',
                                title: 'Puentes'});
var group_Soterreados = new ol.layer.Group({
                                layers: [lyr_SoterradoSanGermn_2,],
                                fold: 'open',
                                title: 'Soterreados'});
var group_Predios = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Predios'});

lyr_EsriWorldImagery_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_SoterradoSanGermn_2.setVisible(true);lyr_PuenteLaIguan_3.setVisible(true);lyr_EstacinCaribe_4.setVisible(true);lyr_inventarioT1_rev_pred_5.setVisible(true);lyr_2026_109_inv_T1prima_6.setVisible(true);lyr_Emvarias_7.setVisible(true);
var layersList = [lyr_EsriWorldImagery_0,lyr_GoogleSatellite_1,group_Soterreados,group_Puentes,group_Tramo1,group_PAF];
lyr_SoterradoSanGermn_2.set('fieldAliases', {});
lyr_PuenteLaIguan_3.set('fieldAliases', {'Obra': 'Obra', 'Subtramo': 'Subtramo', 'Estado': 'Estado', 'LinkDiseñ': 'LinkDiseñ', 'ModeloBIM': 'ModeloBIM', 'Imagen': 'Imagen', });
lyr_EstacinCaribe_4.set('fieldAliases', {'FID': 'FID', });
lyr_inventarioT1_rev_pred_5.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'ID_arbol': 'ID_arbol', 'Familia': 'Familia', 'Genero': 'Genero', 'NOM_CIEN': 'NOM_CIEN', 'NOM_COM': 'NOM_COM', 'Tipo_creci': 'Tipo_creci', 'Hábito': 'Hábito', 'Origen': 'Origen', 'Suma_DAP': 'Suma_DAP', 'G__m2_': 'G__m2_', 'HT__m_': 'HT__m_', 'HC__m_': 'HC__m_', 'VT__m3_': 'VT__m3_', 'VC__m3_': 'VC__m3_', 'ESTADO_FIT': 'ESTADO_FIT', 'CAL_DAP': 'CAL_DAP', 'AIEV': 'AIEV', 'CAL_AIEV': 'CAL_AIEV', 'CAL_APE': 'CAL_APE', 'T_UVE_': 'T_UVE_', 'T_SMLV_': 'T_SMLV_', 'Cate_Patri': 'Cate_Patri', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'Interferen': 'Interferen', 'Mat_Inmo': 'Mat_Inmo', 'Propietari': 'Propietari', 'Identif': 'Identif', 'Direccion': 'Direccion', 'Barrio': 'Barrio', 'Comuna': 'Comuna', 'Est_Permis': 'Est_Permis', 'Cobama': 'Cobama', 'Act_Fijo': 'Act_Fijo', 'Uso_Esp_Pu': 'Uso_Esp_Pu', 'Observacio': 'Observacio', 'ttamto_202': 'ttamto_202', });
lyr_2026_109_inv_T1prima_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'ID': 'ID', 'Origen': 'Origen', 'Habito': 'Habito', 'Familia': 'Familia', 'Género': 'Género', 'Patrimonia': 'Patrimonia', 'Nombre_com': 'Nombre_com', 'Nombre_cie': 'Nombre_cie', 'cap1': 'cap1', 'cap2': 'cap2', 'cap3': 'cap3', 'cap4': 'cap4', 'cap5': 'cap5', 'cap6': 'cap6', 'cap7': 'cap7', 'cap8': 'cap8', 'cap9': 'cap9', 'cap10': 'cap10', 'cap11': 'cap11', 'cap12': 'cap12', 'cap13': 'cap13', 'cap14': 'cap14', 'cap15': 'cap15', 'cap16': 'cap16', 'SUMA_CAP': 'SUMA_CAP', 'DAP_1': 'DAP_1', 'DAP_2': 'DAP_2', 'DAP_3': 'DAP_3', 'DAP_4': 'DAP_4', 'DAP_5': 'DAP_5', 'DAP_6': 'DAP_6', 'DAP_7': 'DAP_7', 'DAP_8': 'DAP_8', 'DAP_9': 'DAP_9', 'DAP_10': 'DAP_10', 'DAP_11': 'DAP_11', 'DAP_12': 'DAP_12', 'DAP_13': 'DAP_13', 'DAP_14': 'DAP_14', 'DAP_15': 'DAP_15', 'DAP_16': 'DAP_16', 'SUMA_DAP__': 'SUMA_DAP__', 'Altura_tot': 'Altura_tot', 'Altura_com': 'Altura_com', 'Estado_fit': 'Estado_fit', 'AIEV': 'AIEV', 'Cal_AIEV': 'Cal_AIEV', 'CAL_DAP': 'CAL_DAP', 'CAL_APE': 'CAL_APE', 'T': 'T', 'UVE__2026_': 'UVE__2026_', 'AB_INDIV': 'AB_INDIV', 'VT_m3_': 'VT_m3_', 'VC_m3_': 'VC_m3_', 'BIOMASA': 'BIOMASA', 'Tipo_espac': 'Tipo_espac', 'estado_fen': 'estado_fen', 'Tratam': 'Tratam', 'Arbol_ries': 'Arbol_ries', 'Observacio': 'Observacio', 'Fecha': 'Fecha', 'Interferen': 'Interferen', 'Funcion_ec': 'Funcion_ec', 'Mat_Inmo': 'Mat_Inmo', 'Propietari': 'Propietari', 'Identif': 'Identif', 'Direccion': 'Direccion', 'Barrio': 'Barrio', 'Comuna': 'Comuna', 'Ten_UTM80': 'Ten_UTM80', 'Est_Permis': 'Est_Permis', 'Cobama': 'Cobama', 'Act_Fijo': 'Act_Fijo', });
lyr_Emvarias_7.set('fieldAliases', {'ID': 'ID', 'Fecha': 'Fecha', 'nombre_com': 'nombre_com', 'nombre_cie': 'nombre_cie', 'cap1': 'cap1', 'cap2': 'cap2', 'cap3': 'cap3', 'cap4': 'cap4', 'cap5': 'cap5', 'cap6': 'cap6', 'cap7': 'cap7', 'cap8': 'cap8', 'cap9': 'cap9', 'cap10': 'cap10', 'cap11': 'cap11', 'cap12': 'cap12', 'cap13': 'cap13', 'cap14': 'cap14', 'cap15': 'cap15', 'cap16': 'cap16', 'cap17': 'cap17', 'cap18': 'cap18', 'cap19': 'cap19', 'cap20': 'cap20', 'cap_medido': 'cap_medido', 'AT (m)': 'AT (m)', 'AC (m)': 'AC (m)', 'Estado_fit': 'Estado_fit', 'Calificaci': 'Calificaci', 'Nuevo_Cali': 'Nuevo_Cali', 'Tipo_espac': 'Tipo_espac', 'estado_fen': 'estado_fen', 'Intervenci': 'Intervenci', 'Nuevo Trat': 'Nuevo Trat', 'Se actuali': 'Se actuali', '¿Que se a': '¿Que se a', 'Arbol ries': 'Arbol ries', 'Observacio': 'Observacio', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Fotos': 'Fotos', 'Interferen': 'Interferen', });
lyr_SoterradoSanGermn_2.set('fieldImages', {});
lyr_PuenteLaIguan_3.set('fieldImages', {'Obra': 'TextEdit', 'Subtramo': 'TextEdit', 'Estado': 'TextEdit', 'LinkDiseñ': 'TextEdit', 'ModeloBIM': 'TextEdit', 'Imagen': '', });
lyr_EstacinCaribe_4.set('fieldImages', {'FID': 'TextEdit', });
lyr_inventarioT1_rev_pred_5.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'ID_arbol': 'TextEdit', 'Familia': 'TextEdit', 'Genero': 'TextEdit', 'NOM_CIEN': 'TextEdit', 'NOM_COM': 'TextEdit', 'Tipo_creci': 'TextEdit', 'Hábito': 'TextEdit', 'Origen': 'TextEdit', 'Suma_DAP': 'TextEdit', 'G__m2_': 'TextEdit', 'HT__m_': 'TextEdit', 'HC__m_': 'TextEdit', 'VT__m3_': 'TextEdit', 'VC__m3_': 'TextEdit', 'ESTADO_FIT': 'TextEdit', 'CAL_DAP': 'TextEdit', 'AIEV': 'TextEdit', 'CAL_AIEV': 'TextEdit', 'CAL_APE': 'TextEdit', 'T_UVE_': 'TextEdit', 'T_SMLV_': 'TextEdit', 'Cate_Patri': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'Interferen': 'TextEdit', 'Mat_Inmo': 'TextEdit', 'Propietari': 'TextEdit', 'Identif': 'TextEdit', 'Direccion': 'TextEdit', 'Barrio': 'TextEdit', 'Comuna': 'TextEdit', 'Est_Permis': 'TextEdit', 'Cobama': 'TextEdit', 'Act_Fijo': 'TextEdit', 'Uso_Esp_Pu': 'TextEdit', 'Observacio': 'TextEdit', 'ttamto_202': 'TextEdit', });
lyr_2026_109_inv_T1prima_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'ID': 'TextEdit', 'Origen': 'TextEdit', 'Habito': 'TextEdit', 'Familia': 'TextEdit', 'Género': 'TextEdit', 'Patrimonia': 'TextEdit', 'Nombre_com': 'TextEdit', 'Nombre_cie': 'TextEdit', 'cap1': 'TextEdit', 'cap2': 'TextEdit', 'cap3': 'TextEdit', 'cap4': 'TextEdit', 'cap5': 'TextEdit', 'cap6': 'TextEdit', 'cap7': 'TextEdit', 'cap8': 'TextEdit', 'cap9': 'TextEdit', 'cap10': 'TextEdit', 'cap11': 'TextEdit', 'cap12': 'TextEdit', 'cap13': 'TextEdit', 'cap14': 'TextEdit', 'cap15': 'TextEdit', 'cap16': 'TextEdit', 'SUMA_CAP': 'TextEdit', 'DAP_1': 'TextEdit', 'DAP_2': 'TextEdit', 'DAP_3': 'TextEdit', 'DAP_4': 'TextEdit', 'DAP_5': 'TextEdit', 'DAP_6': 'TextEdit', 'DAP_7': 'TextEdit', 'DAP_8': 'TextEdit', 'DAP_9': 'TextEdit', 'DAP_10': 'TextEdit', 'DAP_11': 'TextEdit', 'DAP_12': 'TextEdit', 'DAP_13': 'TextEdit', 'DAP_14': 'TextEdit', 'DAP_15': 'TextEdit', 'DAP_16': 'TextEdit', 'SUMA_DAP__': 'TextEdit', 'Altura_tot': 'TextEdit', 'Altura_com': 'TextEdit', 'Estado_fit': 'TextEdit', 'AIEV': 'TextEdit', 'Cal_AIEV': 'TextEdit', 'CAL_DAP': 'TextEdit', 'CAL_APE': 'TextEdit', 'T': 'TextEdit', 'UVE__2026_': 'TextEdit', 'AB_INDIV': 'TextEdit', 'VT_m3_': 'TextEdit', 'VC_m3_': 'TextEdit', 'BIOMASA': 'TextEdit', 'Tipo_espac': 'TextEdit', 'estado_fen': 'TextEdit', 'Tratam': 'TextEdit', 'Arbol_ries': 'TextEdit', 'Observacio': 'TextEdit', 'Fecha': 'DateTime', 'Interferen': 'TextEdit', 'Funcion_ec': 'TextEdit', 'Mat_Inmo': 'TextEdit', 'Propietari': 'TextEdit', 'Identif': 'TextEdit', 'Direccion': 'TextEdit', 'Barrio': 'TextEdit', 'Comuna': 'TextEdit', 'Ten_UTM80': 'TextEdit', 'Est_Permis': 'TextEdit', 'Cobama': 'TextEdit', 'Act_Fijo': 'TextEdit', });
lyr_Emvarias_7.set('fieldImages', {'ID': 'TextEdit', 'Fecha': 'DateTime', 'nombre_com': 'TextEdit', 'nombre_cie': 'TextEdit', 'cap1': 'TextEdit', 'cap2': 'TextEdit', 'cap3': 'TextEdit', 'cap4': 'TextEdit', 'cap5': 'TextEdit', 'cap6': 'TextEdit', 'cap7': 'TextEdit', 'cap8': 'TextEdit', 'cap9': 'TextEdit', 'cap10': 'TextEdit', 'cap11': 'TextEdit', 'cap12': 'TextEdit', 'cap13': 'TextEdit', 'cap14': 'TextEdit', 'cap15': 'TextEdit', 'cap16': 'TextEdit', 'cap17': 'TextEdit', 'cap18': 'TextEdit', 'cap19': 'TextEdit', 'cap20': 'TextEdit', 'cap_medido': 'TextEdit', 'AT (m)': 'TextEdit', 'AC (m)': 'TextEdit', 'Estado_fit': 'TextEdit', 'Calificaci': 'TextEdit', 'Nuevo_Cali': 'TextEdit', 'Tipo_espac': 'TextEdit', 'estado_fen': 'TextEdit', 'Intervenci': 'TextEdit', 'Nuevo Trat': 'TextEdit', 'Se actuali': 'TextEdit', '¿Que se a': 'TextEdit', 'Arbol ries': 'TextEdit', 'Observacio': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Fotos': 'TextEdit', 'Interferen': 'TextEdit', });
lyr_SoterradoSanGermn_2.set('fieldLabels', {});
lyr_PuenteLaIguan_3.set('fieldLabels', {'Obra': 'header label - visible with data', 'Subtramo': 'inline label - always visible', 'Estado': 'inline label - always visible', 'LinkDiseñ': 'inline label - always visible', 'ModeloBIM': 'inline label - always visible', 'Imagen': 'no label', });
lyr_EstacinCaribe_4.set('fieldLabels', {'FID': 'no label', });
lyr_inventarioT1_rev_pred_5.set('fieldLabels', {'latitude': 'inline label - always visible', 'longitude': 'inline label - always visible', 'ID_arbol': 'inline label - always visible', 'Familia': 'inline label - always visible', 'Genero': 'inline label - always visible', 'NOM_CIEN': 'inline label - always visible', 'NOM_COM': 'inline label - always visible', 'Tipo_creci': 'inline label - always visible', 'Hábito': 'inline label - always visible', 'Origen': 'inline label - always visible', 'Suma_DAP': 'inline label - always visible', 'G__m2_': 'inline label - always visible', 'HT__m_': 'inline label - always visible', 'HC__m_': 'inline label - always visible', 'VT__m3_': 'inline label - always visible', 'VC__m3_': 'inline label - always visible', 'ESTADO_FIT': 'inline label - always visible', 'CAL_DAP': 'inline label - always visible', 'AIEV': 'inline label - always visible', 'CAL_AIEV': 'inline label - always visible', 'CAL_APE': 'inline label - always visible', 'T_UVE_': 'inline label - always visible', 'T_SMLV_': 'inline label - always visible', 'Cate_Patri': 'inline label - always visible', 'POINT_X': 'inline label - always visible', 'POINT_Y': 'inline label - always visible', 'Interferen': 'inline label - always visible', 'Mat_Inmo': 'inline label - always visible', 'Propietari': 'inline label - always visible', 'Identif': 'inline label - always visible', 'Direccion': 'inline label - always visible', 'Barrio': 'inline label - always visible', 'Comuna': 'inline label - always visible', 'Est_Permis': 'inline label - always visible', 'Cobama': 'inline label - always visible', 'Act_Fijo': 'inline label - always visible', 'Uso_Esp_Pu': 'inline label - always visible', 'Observacio': 'inline label - always visible', 'ttamto_202': 'inline label - visible with data', });
lyr_2026_109_inv_T1prima_6.set('fieldLabels', {'OBJECTID': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'ID': 'no label', 'Origen': 'no label', 'Habito': 'no label', 'Familia': 'no label', 'Género': 'no label', 'Patrimonia': 'no label', 'Nombre_com': 'no label', 'Nombre_cie': 'no label', 'cap1': 'no label', 'cap2': 'no label', 'cap3': 'no label', 'cap4': 'no label', 'cap5': 'no label', 'cap6': 'no label', 'cap7': 'no label', 'cap8': 'no label', 'cap9': 'no label', 'cap10': 'no label', 'cap11': 'no label', 'cap12': 'no label', 'cap13': 'no label', 'cap14': 'no label', 'cap15': 'no label', 'cap16': 'no label', 'SUMA_CAP': 'no label', 'DAP_1': 'no label', 'DAP_2': 'no label', 'DAP_3': 'no label', 'DAP_4': 'no label', 'DAP_5': 'no label', 'DAP_6': 'no label', 'DAP_7': 'no label', 'DAP_8': 'no label', 'DAP_9': 'no label', 'DAP_10': 'no label', 'DAP_11': 'no label', 'DAP_12': 'no label', 'DAP_13': 'no label', 'DAP_14': 'no label', 'DAP_15': 'no label', 'DAP_16': 'no label', 'SUMA_DAP__': 'no label', 'Altura_tot': 'no label', 'Altura_com': 'no label', 'Estado_fit': 'no label', 'AIEV': 'no label', 'Cal_AIEV': 'no label', 'CAL_DAP': 'no label', 'CAL_APE': 'no label', 'T': 'no label', 'UVE__2026_': 'no label', 'AB_INDIV': 'no label', 'VT_m3_': 'no label', 'VC_m3_': 'no label', 'BIOMASA': 'no label', 'Tipo_espac': 'no label', 'estado_fen': 'no label', 'Tratam': 'no label', 'Arbol_ries': 'no label', 'Observacio': 'no label', 'Fecha': 'no label', 'Interferen': 'no label', 'Funcion_ec': 'no label', 'Mat_Inmo': 'no label', 'Propietari': 'no label', 'Identif': 'no label', 'Direccion': 'no label', 'Barrio': 'no label', 'Comuna': 'no label', 'Ten_UTM80': 'no label', 'Est_Permis': 'no label', 'Cobama': 'no label', 'Act_Fijo': 'no label', });
lyr_Emvarias_7.set('fieldLabels', {'ID': 'no label', 'Fecha': 'no label', 'nombre_com': 'no label', 'nombre_cie': 'no label', 'cap1': 'no label', 'cap2': 'no label', 'cap3': 'no label', 'cap4': 'no label', 'cap5': 'no label', 'cap6': 'no label', 'cap7': 'no label', 'cap8': 'no label', 'cap9': 'no label', 'cap10': 'no label', 'cap11': 'no label', 'cap12': 'no label', 'cap13': 'no label', 'cap14': 'no label', 'cap15': 'no label', 'cap16': 'no label', 'cap17': 'no label', 'cap18': 'no label', 'cap19': 'no label', 'cap20': 'no label', 'cap_medido': 'no label', 'AT (m)': 'no label', 'AC (m)': 'no label', 'Estado_fit': 'no label', 'Calificaci': 'no label', 'Nuevo_Cali': 'no label', 'Tipo_espac': 'no label', 'estado_fen': 'no label', 'Intervenci': 'no label', 'Nuevo Trat': 'no label', 'Se actuali': 'no label', '¿Que se a': 'no label', 'Arbol ries': 'no label', 'Observacio': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Fotos': 'no label', 'Interferen': 'no label', });
lyr_Emvarias_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});