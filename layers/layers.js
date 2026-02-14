var wms_layers = [];


        var lyr_EsriWorldImagery_0 = new ol.layer.Tile({
            'title': 'Esri World Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://wiki.openstreetmap.org/wiki/Esri">Terms & Feedback</a>',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_inventarioT1_rev_pred_1 = new ol.format.GeoJSON();
var features_inventarioT1_rev_pred_1 = format_inventarioT1_rev_pred_1.readFeatures(json_inventarioT1_rev_pred_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_inventarioT1_rev_pred_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_inventarioT1_rev_pred_1.addFeatures(features_inventarioT1_rev_pred_1);
var lyr_inventarioT1_rev_pred_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_inventarioT1_rev_pred_1, 
                style: style_inventarioT1_rev_pred_1,
                popuplayertitle: 'inventarioT1_rev_pred',
                interactive: true,
    title: 'inventarioT1_rev_pred<br />\
    <img src="styles/legend/inventarioT1_rev_pred_1_0.png" /> Conservacion<br />\
    <img src="styles/legend/inventarioT1_rev_pred_1_1.png" /> Ninguno<br />\
    <img src="styles/legend/inventarioT1_rev_pred_1_2.png" /> Tala<br />\
    <img src="styles/legend/inventarioT1_rev_pred_1_3.png" /> Trasplante<br />' });

lyr_EsriWorldImagery_0.setVisible(true);lyr_inventarioT1_rev_pred_1.setVisible(true);
var layersList = [lyr_EsriWorldImagery_0,lyr_inventarioT1_rev_pred_1];
lyr_inventarioT1_rev_pred_1.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'ID_arbol': 'ID_arbol', 'Familia': 'Familia', 'Genero': 'Genero', 'NOM_CIEN': 'NOM_CIEN', 'NOM_COM': 'NOM_COM', 'Tipo_creci': 'Tipo_creci', 'Hábito': 'Hábito', 'Origen': 'Origen', 'dap1': 'dap1', 'dap2': 'dap2', 'dap3': 'dap3', 'dap4': 'dap4', 'dap5': 'dap5', 'dap6': 'dap6', 'dap7': 'dap7', 'dap8': 'dap8', 'dap9': 'dap9', 'dap10': 'dap10', 'dap11': 'dap11', 'dap12': 'dap12', 'dap13': 'dap13', 'dap14': 'dap14', 'dap15': 'dap15', 'dap16': 'dap16', 'dap17': 'dap17', 'dap18': 'dap18', 'dap19': 'dap19', 'dap20': 'dap20', 'Suma_DAP': 'Suma_DAP', 'G__m2_': 'G__m2_', 'HT__m_': 'HT__m_', 'HC__m_': 'HC__m_', 'VT__m3_': 'VT__m3_', 'VC__m3_': 'VC__m3_', 'ESTADO_FIT': 'ESTADO_FIT', 'CAL_DAP': 'CAL_DAP', 'AIEV': 'AIEV', 'CAL_AIEV': 'CAL_AIEV', 'CAL_APE': 'CAL_APE', 'T_UVE_': 'T_UVE_', 'T_SMLV_': 'T_SMLV_', 'Cate_Patri': 'Cate_Patri', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'Interferen': 'Interferen', 'Mat_Inmo': 'Mat_Inmo', 'Propietari': 'Propietari', 'Identif': 'Identif', 'Direccion': 'Direccion', 'Barrio': 'Barrio', 'Comuna': 'Comuna', 'Est_Permis': 'Est_Permis', 'Cobama': 'Cobama', 'Act_Fijo': 'Act_Fijo', 'Uso_Esp_Pu': 'Uso_Esp_Pu', 'Observacio': 'Observacio', 'ttamto_202': 'ttamto_202', });
lyr_inventarioT1_rev_pred_1.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'ID_arbol': 'TextEdit', 'Familia': 'TextEdit', 'Genero': 'TextEdit', 'NOM_CIEN': 'TextEdit', 'NOM_COM': 'TextEdit', 'Tipo_creci': 'TextEdit', 'Hábito': 'TextEdit', 'Origen': 'TextEdit', 'dap1': 'TextEdit', 'dap2': 'TextEdit', 'dap3': 'TextEdit', 'dap4': 'TextEdit', 'dap5': 'TextEdit', 'dap6': 'TextEdit', 'dap7': 'TextEdit', 'dap8': 'TextEdit', 'dap9': 'TextEdit', 'dap10': 'TextEdit', 'dap11': 'TextEdit', 'dap12': 'TextEdit', 'dap13': 'TextEdit', 'dap14': 'TextEdit', 'dap15': 'TextEdit', 'dap16': 'TextEdit', 'dap17': 'TextEdit', 'dap18': 'TextEdit', 'dap19': 'TextEdit', 'dap20': 'TextEdit', 'Suma_DAP': 'TextEdit', 'G__m2_': 'TextEdit', 'HT__m_': 'TextEdit', 'HC__m_': 'TextEdit', 'VT__m3_': 'TextEdit', 'VC__m3_': 'TextEdit', 'ESTADO_FIT': 'TextEdit', 'CAL_DAP': 'TextEdit', 'AIEV': 'TextEdit', 'CAL_AIEV': 'TextEdit', 'CAL_APE': 'TextEdit', 'T_UVE_': 'TextEdit', 'T_SMLV_': 'TextEdit', 'Cate_Patri': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'Interferen': 'TextEdit', 'Mat_Inmo': 'TextEdit', 'Propietari': 'TextEdit', 'Identif': 'TextEdit', 'Direccion': 'TextEdit', 'Barrio': 'TextEdit', 'Comuna': 'TextEdit', 'Est_Permis': 'TextEdit', 'Cobama': 'TextEdit', 'Act_Fijo': 'TextEdit', 'Uso_Esp_Pu': 'TextEdit', 'Observacio': 'TextEdit', 'ttamto_202': 'TextEdit', });
lyr_inventarioT1_rev_pred_1.set('fieldLabels', {'latitude': 'no label', 'longitude': 'no label', 'ID_arbol': 'no label', 'Familia': 'no label', 'Genero': 'no label', 'NOM_CIEN': 'no label', 'NOM_COM': 'no label', 'Tipo_creci': 'no label', 'Hábito': 'no label', 'Origen': 'no label', 'dap1': 'no label', 'dap2': 'no label', 'dap3': 'no label', 'dap4': 'no label', 'dap5': 'no label', 'dap6': 'no label', 'dap7': 'no label', 'dap8': 'no label', 'dap9': 'no label', 'dap10': 'no label', 'dap11': 'no label', 'dap12': 'no label', 'dap13': 'no label', 'dap14': 'no label', 'dap15': 'no label', 'dap16': 'no label', 'dap17': 'no label', 'dap18': 'no label', 'dap19': 'no label', 'dap20': 'no label', 'Suma_DAP': 'no label', 'G__m2_': 'no label', 'HT__m_': 'no label', 'HC__m_': 'no label', 'VT__m3_': 'no label', 'VC__m3_': 'no label', 'ESTADO_FIT': 'no label', 'CAL_DAP': 'no label', 'AIEV': 'no label', 'CAL_AIEV': 'no label', 'CAL_APE': 'no label', 'T_UVE_': 'no label', 'T_SMLV_': 'no label', 'Cate_Patri': 'no label', 'POINT_X': 'no label', 'POINT_Y': 'no label', 'Interferen': 'no label', 'Mat_Inmo': 'no label', 'Propietari': 'no label', 'Identif': 'no label', 'Direccion': 'no label', 'Barrio': 'no label', 'Comuna': 'no label', 'Est_Permis': 'no label', 'Cobama': 'no label', 'Act_Fijo': 'no label', 'Uso_Esp_Pu': 'no label', 'Observacio': 'no label', 'ttamto_202': 'no label', });
lyr_inventarioT1_rev_pred_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});