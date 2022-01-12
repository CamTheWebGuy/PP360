import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Select,
  SelectItem,
  IndexPath,
  Divider,
  Input,
} from '@ui-kitten/components';

const PoolHeater = (props) => {
  const [makeIndex, setMakeIndex] = useState(new IndexPath(0));
  const [modelIndex, setModelIndex] = useState(new IndexPath(0));
  const [make, setMake] = useState('AquaCal');
  const [customHeater, setCustomHeater] = useState('');
  const [customModel, setCustomModel] = useState('');

  const brands = [
    'AquaCal',
    'Hayward',
    'Jandy',
    'Pentair',
    'Rheem / Raypak',
    'Other',
  ];

  const aquacalData = [
    'Great Big Bopper BB500BRDSBNA Heat Pump',
    'Great Big Bopper BB500DRDSBNA Heat Pump',
    'Great Big Bopper BB500GRDSBNA Heat Pump',
    'HeatWave SuperQuiet SQ110R 1 Phase Heat Pump',
    'HeatWave SuperQuiet SQ120R 1 Phase 50Hz Heat Pump',
    'HeatWave SuperQuiet SQ120R 1 Phase 60Hz Heat Pump',
    'HeatWave SuperQuiet SQ120R 3 Phase Heat Pump',
    'HeatWave SuperQuiet SQ166R 1 Phase Heat Pump',
    'HeatWave SuperQuiet SQ166R 3 Phase Heat Pump',
    'HeatWave SuperQuiet SQ175 1 Phase Heat Pump',
    'HeatWave SuperQuiet SQ175 3 Phase Heat Pump',
    'SideWinder SW112 Heat Pump',
    'TropiCal T115 1 Phase 60Hz Heat Pump',
    'TropiCal T115 3 Phase Heat Pump',
    'TropiCal T135 1 Phase 60Hz Heat Pump',
    'TropiCal T135 3 Phase Heat Pump',
    'TropiCal T35 1 Phase 50Hz Heat Pump',
    'TropiCal T35 1 Phase 60Hz Heat Pump',
    'TropiCal T35 3 Phase Heat Pump',
    'TropiCal T55 1 Phase 50Hz Heat Pump',
    'TropiCal T55 1 Phase 60Hz Heat Pump',
    'TropiCal T55 3 Phase Heat Pump',
    'TropiCal T75 1 Phase 50Hz Heat Pump',
    'TropiCal T75 1 Phase 60Hz Heat Pump',
    'TropiCal T75 3 Phase Heat Pump',
    'TropiCal T90 1 Phase 60Hz Heat Pump',
    'TropiCal T90 3 Phase Heat Pump',
    'TropiCool TC1000 Water Chiller',
    'TropiCool TC500 Water Chiller',
    'Water Source WS03 1 Phase 60Hz Heat Pump',
    'Water Source WS05 1 Phase 60Hz Heat Pump',
    'Water Source WS05 3 Phase 50Hz Heat Pump',
    'Water Source WS05 3 Phase 60Hz Heat Pump',
    'Water Source WS10 1 Phase 60Hz Heat Pump',
    'Water Source WS10 3 Phase 60Hz Heat Pump',
    'Other',
  ];

  const haywardData = [
    'Choose One',
    'CPS1120 LP',
    'CPS1120 NG',
    'CPS1320 LP',
    'CPS1320 NG',
    'CPS1820 LP',
    'CPS1820 NG',
    'CPS520 LP',
    'CPS520 NG',
    'CPS720 LP',
    'CPS720 NG',
    'CPS920 LP',
    'CPS920 NG',
    'CPSE1120 LP',
    'CPSE1120 NG',
    'CPSE1320 LP',
    'CPSE1320 NG',
    'CPSE1820 LP',
    'CPSE1820 NG',
    'CPSE520 LP',
    'CPSE520 NG',
    'CPSE720 LP',
    'CPSE720 NG',
    'CPSE920 LP',
    'CPSE920 NG',
    'C-Spa XI 1.5 Electric',
    'C-Spa XI 11 Electric',
    'C-Spa XI 5.5 Electric',
    'CZ150 IID LP',
    'CZ150 IID NG',
    'CZ150 MV LP',
    'CZ150 MV NG',
    'CZ200 IID LP',
    'CZ200 IID NG',
    'CZ200 MV LP',
    'CZ200 MV NG',
    'CZ250 IID LP',
    'CZ250 IID NG',
    'CZ250 MV LP',
    'CZ250 MV NG',
    'CZ300 IID LP',
    'CZ300 IID NG',
    'CZ300 MV LP',
    'CZ300 MV NG',
    'CZ400 IID LP',
    'CZ400 IID NG',
    'CZ400 MV LP',
    'CZ400 MV NG',
    'H100ID1 Above Ground Induced Draft LP',
    'H100ID1 Above Ground Induced Draft NG',
    'H150ED1 LP',
    'H150ED1 NG',
    'H150ED2 LP',
    'H150ED2 NG',
    'H200ED1 LP',
    'H200ED1 NG',
    'H200ED2 LP',
    'H200ED2 NG',
    'H250 Low Nox LP',
    'H250 Low Nox NG',
    'H250ED1 LP',
    'H250ED1 NG',
    'H250ED2 LP',
    'H250ED2 NG',
    'H250ID1 Induced Draft LP',
    'H250ID1 Induced Draft NG',
    'H250IDL Low Nox Induced Draft LP',
    'H250IDL Low Nox Induced Draft NG',
    'H300ED1 LP',
    'H300ED1 NG',
    'H300ED2 LP',
    'H300ED2 NG',
    'H350 Low Nox LP',
    'H350 Low Nox NG',
    'H350ED1 LP',
    'H350ED1 NG',
    'H350ED2 LP',
    'H350ED2 NG',
    'H400 Low Nox LP',
    'H400 Low Nox NG',
    'H400ED1 LP',
    'H400ED1 NG',
    'H400ED2 LP',
    'H400ED2 NG',
    'H400ID1 Induced Draft LP',
    'H400ID1 Induced Draft NG',
    'H400IDL Low Nox Induced Draft LP',
    'H400IDL Low Nox Induced Draft NG',
    'H500FDN',
    'HeatMaster HM2-150 LP',
    'HeatMaster HM2-150 NG',
    'HeatMaster HM2-200 LP',
    'HeatMaster HM2-200 NG',
    'HeatMaster HM2-250 LP',
    'HeatMaster HM2-250 NG',
    'HeatMaster HM2-300 LP',
    'HeatMaster HM2-300 NG',
    'HeatMaster HM2-350 LP',
    'HeatMaster HM2-350 NG',
    'HeatMaster HM2-400 LP',
    'HeatMaster HM2-400 NG',
    'HeatPro H/C Heat Pump',
    'HeatPro HP1100 Heat Pump',
    'HeatPro HP11002 Heat Pump',
    'HeatPro HP2100 Heat Pump',
    'HeatPro HP21002 Heat Pump',
    'HeatPro HP21002C Heat Pump',
    'HeatPro HP2100TCO Heat Pump',
    'HeatPro HP2100TCO2 Heat Pump',
    'HeatPro HP3100 Heat Pump',
    'HeatPro HP380 Heat Pump',
    'HeatPro HP5 Heat Pump',
    'HeatPro HP600 Heat Pump',
    'HeatPro HP6002 Heat Pump',
    'HeatPro HPABG Heat Pump',
    'HeatPro HPABGDELUXE Heat Pump',
    'PSG II 110 LP',
    'PSG II 110 NG',
    'PSG II 180 LP',
    'PSG II 180 NG',
    'PSG II 215 LP',
    'PSG II 215 NG',
    'PSG II 255 LP',
    'PSG II 255 NG',
    'PSG II 355 LP',
    'PSG II 355 NG',
    'SG II 60 LP',
    'SG II 60 NG',
    'Other',
  ];

  const jandyData = [
    'AE-Ti 2000 Heat Pump',
    'AE-Ti 2500 Heat Pump',
    'AE-Ti 3000 Heat Pump',
    'HI-E2 220 LP',
    'HI-E2 220 NG',
    'HI-E2 350 LP',
    'HI-E2 350 NG',
    'HI-E2 350NB NG',
    'HI-E2 350NC NG',
    'HI-E2 350NS NG',
    'HI-E2 350PB LP',
    'HI-E2 350PC LP',
    'HI-E2 350PS LP',
    'JE 1500T Heat Pump',
    'JE 2000T Heat Pump',
    'JE 2500T Heat Pump',
    'JE 2500T3 Heat Pump',
    'JE 3000T Heat Pump',
    'JE 3000T3 Heat Pump',
    'JE 3000TR Heat Pump',
    'JE 3000TR3 Heat Pump',
    'JXi 200 LP',
    'JXi 200 NG',
    'JXi 266 LP',
    'JXi 266 NG',
    'JXi 400 LP',
    'JXi 400 NG',
    'Legacy LRZE125 LP',
    'Legacy LRZE125 NG',
    'Legacy LRZE175 LP',
    'Legacy LRZE175 NG',
    'Legacy LRZE250 LP',
    'Legacy LRZE250 NG',
    'Legacy LRZE325 LP',
    'Legacy LRZE325 NG',
    'Legacy LRZE400 LP',
    'Legacy LRZE400 NG',
    'Legacy LRZM125 LP',
    'Legacy LRZM125 NG',
    'Legacy LRZM175 LP',
    'Legacy LRZM175 NG',
    'Legacy LRZM250 LP',
    'Legacy LRZM250 NG',
    'Legacy LRZM325 LP',
    'Legacy LRZM325 NG',
    'Legacy LRZM400 LP',
    'Legacy LRZM400 NG',
    'Lite LLD125 LP',
    'Lite LLD125 NG',
    'Lite LLD175 LP',
    'Lite LLD175 NG',
    'Lite LLD250 LP',
    'Lite LLD250 NG',
    'Lite LLD325 LP',
    'Lite LLD325 NG',
    'Lite LLD400 LP',
    'Lite LLD400 NG',
    'Lite LLG125 LP',
    'Lite LLG125 NG',
    'Lite LLG175 LP',
    'Lite LLG175 NG',
    'Lite LLG250 LP',
    'Lite LLG250 NG',
    'Lite LLG325 LP',
    'Lite LLG325 NG',
    'Lite LLG400 LP',
    'Lite LLG400 NG',
    'Lite2 LD125 LP',
    'Lite2 LD125 NG',
    'Lite2 LD175 LP',
    'Lite2 LD175 NG',
    'Lite2 LD250 LP',
    'Lite2 LD250 NG',
    'Lite2 LD325 LP',
    'Lite2 LD325 NG',
    'Lite2 LD400 LP',
    'Lite2 LD400 NG',
    'Lite2 LG125 LP',
    'Lite2 LG125 NG',
    'Lite2 LG175 LP',
    'Lite2 LG175 NG',
    'Lite2 LG250 LP',
    'Lite2 LG250 NG',
    'Lite2 LG325 LP',
    'Lite2 LG325 NG',
    'Lite2 LG400 LP',
    'Lite2 LG400 NG',
    'Lite2 LJ125 LP',
    'Lite2 LJ125 NG',
    'Lite2 LJ175 LP',
    'Lite2 LJ175 NG',
    'Lite2 LJ250 LP',
    'Lite2 LJ250 NG',
    'Lite2 LJ325 LP',
    'Lite2 LJ325 NG',
    'Lite2 LJ400 LP',
    'Lite2 LJ400 NG',
    'LT 250 Low Nox LP',
    'LT 250 Low Nox NG',
    'LT 250 LP',
    'LT 250 NG',
    'LT 400 Low Nox LP',
    'LT 400 Low Nox NG',
    'LT 400 LP',
    'LT 400 NG',
    'LX 250 Low Nox LP',
    'LX 250 Low Nox NG',
    'LX 250 LP',
    'LX 250 NG',
    'LX 400 Low Nox LP',
    'LX 400 Low Nox NG',
    'LX 400 LP',
    'LX 400 NG',
    'LXi 250 LP',
    'LXi 250 NG',
    'LXi 400 LP',
    'LXi 400 NG',
    'Series 1 EPC II 125 LP',
    'Series 1 EPC II 125 NG',
    'Series 1 EPC II 175 LP',
    'Series 1 EPC II 175 NG',
    'Series 1 EPC II 250 LP',
    'Series 1 EPC II 250 NG',
    'Series 1 EPC II 325 LP',
    'Series 1 EPC II 325 NG',
    'Series 1 EPC II 400 LP',
    'Series 1 EPC II 400 NG',
    'Series 1 EPC125 LP',
    'Series 1 EPC125 NG',
    'Series 1 EPC175 LP',
    'Series 1 EPC175 NG',
    'Series 1 EPC250 LP',
    'Series 1 EPC250 NG',
    'Series 1 EPC325 LP',
    'Series 1 EPC325 NG',
    'Series 1 EPC400 LP',
    'Series 1 EPC400 NG',
    'Series 1 EPG125 LP',
    'Series 1 EPG125 NG',
    'Series 1 EPG175 LP',
    'Series 1 EPG175 NG',
    'Series 1 EPG250 LP',
    'Series 1 EPG250 NG',
    'Series 1 EPG325 LP',
    'Series 1 EPG325 NG',
    'Series 1 EPG400 LP',
    'Series 1 EPG400 NG',
    'Series 1 EPM125 LP',
    'Series 1 EPM125 NG',
    'Series 1 EPM175 LP',
    'Series 1 EPM175 NG',
    'Series 1 EPM250 LP',
    'Series 1 EPM250 NG',
    'Series 1 EPM325 LP',
    'Series 1 EPM325 NG',
    'Series 1 EPM400 LP',
    'Series 1 EPM400 NG',
    'Series 1 EPS125 LP',
    'Series 1 EPS125 NG',
    'Series 1 EPS175 LP',
    'Series 1 EPS175 NG',
    'Series 1 EPS250 LP',
    'Series 1 EPS250 NG',
    'Series 1 EPS325 LP',
    'Series 1 EPS325 NG',
    'Series 1 EPS400 LP',
    'Series 1 EPS400 NG',
    'Series 2 ESC125 LP',
    'Series 2 ESC125 NG',
    'Series 2 ESC175 LP',
    'Series 2 ESC175 NG',
    'Series 2 ESC250 LP',
    'Series 2 ESC250 NG',
    'Series 2 ESC325 LP',
    'Series 2 ESC325 NG',
    'Series 2 ESC400 LP',
    'Series 2 ESC400 NG',
    'Series 2 ESG125 LP',
    'Series 2 ESG125 NG',
    'Series 2 ESG175 LP',
    'Series 2 ESG175 NG',
    'Series 2 ESG250 LP',
    'Series 2 ESG250 NG',
    'Series 2 ESG325 LP',
    'Series 2 ESG325 NG',
    'Series 2 ESG400 LP',
    'Series 2 ESG400 NG',
    'XL-3 Oil Fired',
    'Other',
  ];

  const pentairData = [
    'ETi 400',
    'Mastertemp 175 LP',
    'Mastertemp 175 NG',
    'Mastertemp 200 LP',
    'Mastertemp 200 NG',
    'Mastertemp 250 LP',
    'Mastertemp 250 NG',
    'Mastertemp 300 LP',
    'Mastertemp 300 NG',
    'Mastertemp 400 LP',
    'Mastertemp 400 NG',
    'Max-E-Therm 200 LP',
    'Max-E-Therm 200 NG',
    'Max-E-Therm 333 LP',
    'Max-E-Therm 333 NG',
    'Max-E-Therm 400 LP',
    'Max-E-Therm 400 NG',
    'Max-E-Therm HD 200 LP',
    'Max-E-Therm HD 200 NG',
    'Max-E-Therm HD 333 LP',
    'Max-E-Therm HD 333 NG',
    'Max-E-Therm HD 400 LP',
    'Max-E-Therm HD 400 NG',
    'MiniMax 100 DSI LP',
    'MiniMax 100 DSI NG',
    'MiniMax 100 Millivolt LP',
    'MiniMax 100 Millivolt NG',
    'MiniMax 75 DSI LP',
    'MiniMax 75 DSI NG',
    'MiniMax 75 Millivolt LP',
    'MiniMax 75 Millivolt NG',
    'MiniMax CH 150 LP',
    'MiniMax CH 150 NG',
    'MiniMax CH 200 LP',
    'MiniMax CH 200 NG',
    'MiniMax CH 250 LP',
    'MiniMax CH 250 NG',
    'MiniMax CH 300 LP',
    'MiniMax CH 300 NG',
    'MiniMax CH 350 LP',
    'MiniMax CH 350 NG',
    'MiniMax CH 400 LP',
    'MiniMax CH 400 NG',
    'MiniMax NT 200 LP',
    'MiniMax NT 200 NG',
    'MiniMax NT 250 LP',
    'MiniMax NT 250 NG',
    'MiniMax NT 300 LP',
    'MiniMax NT 300 NG',
    'MiniMax NT 400 LP',
    'MiniMax NT 400 NG',
    'MiniMax Plus 1000 Heat Pump',
    'MiniMax Plus 1000R Heat Pump',
    'MiniMax Plus 400 Heat Pump',
    'MiniMax Plus 600 Heat Pump',
    'MiniMax Plus 800 Heat Pump',
    'MiniMax Plus CHILLR Heat Pump',
    'MiniMax Plus IID 150 LP',
    'MiniMax Plus IID 150 NG',
    'MiniMax Plus IID 200 LP',
    'MiniMax Plus IID 200 NG',
    'MiniMax Plus IID 250 LP',
    'MiniMax Plus IID 250 NG',
    'MiniMax Plus IID 300 LP',
    'MiniMax Plus IID 300 NG',
    'MiniMax Plus IID 350 LP',
    'MiniMax Plus IID 350 NG',
    'MiniMax Plus IID 400 LP',
    'MiniMax Plus IID 400 NG',
    'MiniMax Plus Millivolt 150 LP',
    'MiniMax Plus Millivolt 150 NG',
    'MiniMax Plus Millivolt 200 LP',
    'MiniMax Plus Millivolt 200 NG',
    'MiniMax Plus Millivolt 250 LP',
    'MiniMax Plus Millivolt 250 NG',
    'MiniMax Plus Millivolt 300 LP',
    'MiniMax Plus Millivolt 300 NG',
    'MiniMax Plus Millivolt 350 LP',
    'MiniMax Plus Millivolt 350 NG',
    'MiniMax Plus Millivolt 400 LP',
    'MiniMax Plus Millivolt 400 NG',
    'PowerMax 150 IID LP',
    'PowerMax 150 IID NG',
    'PowerMax 150 Millivolt LP',
    'PowerMax 150 Millivolt NG',
    'PowerMax 200 IID LP',
    'PowerMax 200 IID NG',
    'PowerMax 200 Millivolt LP',
    'PowerMax 200 Millivolt NG',
    'PowerMax 250 IID LP',
    'PowerMax 250 IID NG',
    'PowerMax 250 Millivolt LP',
    'PowerMax 250 Millivolt NG',
    'PowerMax 300 IID LP',
    'PowerMax 300 IID NG',
    'PowerMax 300 Millivolt LP',
    'PowerMax 300 Millivolt NG',
    'PowerMax 350 IID LP',
    'PowerMax 350 IID NG',
    'PowerMax 350 Millivolt LP',
    'PowerMax 350 Millivolt NG',
    'PowerMax 400 IID LP',
    'PowerMax 400 IID NG',
    'PowerMax 400 Millivolt LP',
    'PowerMax 400 Millivolt NG',
    'SR400HD',
    'ThermalFlo 1200 Heat Pump',
    'ThermalFlo 1200C Heat Pump',
    'ThermalFlo 1200R Heat Pump',
    'ThermalFlo 500 Heat Pump',
    'ThermalFlo 700 Heat Pump',
    'ThermalFlo 900 Heat Pump',
    'UltraTemp 110 Heat Pump',
    'UltraTemp 120 Heat Pump',
    'UltraTemp 120HC Heat Pump',
    'UltraTemp 140 Heat Pump',
    'Other',
  ];

  const rheemData = [
    'E3T Digital Heater - 0005',
    'E3T Digital Heater - 0011',
    'E3T Digital Heater - 0018',
    'E3T Digital Heater – 0027',
    'ELS 1102-2 Electric',
    'ELS 552-2 Electric',
    'Model 053A IID LP',
    'Model 053A IID NG',
    'Model 053A Millivolt LP',
    'Model 053A Millivolt NG',
    'Model 055A IID LP',
    'Model 055A IID NG',
    'Model 055A Millivolt LP',
    'Model 055A Millivolt NG',
    'Model 055B IID LP',
    'Model 055B IID NG',
    'Model 055B Millivolt LP',
    'Model 055B Millivolt NG',
    'Model 104A IID Bronze LP',
    'Model 104A IID Bronze NG',
    'Model 104A IID Cast Iron LP',
    'Model 104A IID Cast Iron NG',
    'Model 104A Millivolt Bronze LP',
    'Model 104A Millivolt Bronze NG',
    'Model 104A Millivolt Cast Iron LP',
    'Model 104A Millivolt Cast Iron NG',
    'Model 153A IID LP',
    'Model 153A IID NG',
    'Model 153A Millivolt LP',
    'Model 153A Millivolt NG',
    'Model 155A IID Bronze LP',
    'Model 155A IID Bronze NG',
    'Model 155A IID Cast Iron LP',
    'Model 155A IID Cast Iron NG',
    'Model 155A Millivolt Bronze LP',
    'Model 155A Millivolt Bronze NG',
    'Model 155A Millivolt Cast Iron LP',
    'Model 155A Millivolt Cast Iron NG',
    'Model 183A IID Brass LP',
    'Model 183A IID Brass NG',
    'Model 183A IID Cast Iron LP',
    'Model 183A IID Cast Iron NG',
    'Model 183A Millivolt Brass LP',
    'Model 183A Millivolt Brass NG',
    'Model 183A Millivolt Cast Iron LP',
    'Model 183A Millivolt Cast Iron NG',
    'Model 263A IID Brass LP',
    'Model 263A IID Brass NG',
    'Model 263A IID Cast Iron LP',
    'Model 263A IID Cast Iron NG',
    'Model 263A Millivolt Brass LP',
    'Model 263A Millivolt Brass NG',
    'Model 263A Millivolt Cast Iron LP',
    'Model 263A Millivolt Cast Iron NG',
    'Model 333A IID Brass LP',
    'Model 333A IID Brass NG',
    'Model 333A IID Cast Iron LP',
    'Model 333A IID Cast Iron NG',
    'Model 333A Millivolt Brass LP',
    'Model 333A Millivolt Brass NG',
    'Model 333A Millivolt Cast Iron LP',
    'Model 333A Millivolt Cast Iron NG',
    'Model 403A IID Brass LP',
    'Model 403A IID Brass NG',
    'Model 403A IID Cast Iron LP',
    'Model 403A IID Cast Iron NG',
    'Model 403A Millivolt Brass LP',
    'Model 403A Millivolt Brass NG',
    'Model 403A Millivolt Cast Iron LP',
    'Model 403A Millivolt Cast Iron NG',
    'Model B-R259 LP',
    'Model B-R259 NG',
    'Model B-R268A LP',
    'Model B-R268A NG',
    'Model B-R408A LP',
    'Model B-R408A NG',
    'Model B-R409 LP',
    'Model B-R409 NG',
    'Model C-R206A Digital Copper LP',
    'Model C-R206A Digital Copper NG',
    'Model C-R206A Digital Cupro-Nickle LP',
    'Model C-R206A Digital Cupro-Nickle NG',
    'Model C-R206A Millivolt Copper LP',
    'Model C-R206A Millivolt Copper NG',
    'Model C-R206A Millivolt Cupro-Nickle LP',
    'Model C-R206A Millivolt Cupro-Nickle NG',
    'Model C-R207A Low Nox NG',
    'Model C-R266A Digital Copper LP',
    'Model C-R266A Digital Copper NG',
    'Model C-R266A Digital Cupro-Nickle LP',
    'Model C-R266A Digital Cupro-Nickle NG',
    'Model C-R266A Millivolt Copper LP',
    'Model C-R266A Millivolt Copper NG',
    'Model C-R266A Millivolt Cupro-Nickle LP',
    'Model C-R266A Millivolt Cupro-Nickle NG',
    'Model C-R267A Low Nox NG',
    'Model C-R336A Digital Copper LP',
    'Model C-R336A Digital Copper NG',
    'Model C-R336A Digital Cupro-Nickle LP',
    'Model C-R336A Digital Cupro-Nickle NG',
    'Model C-R336A Millivolt Copper LP',
    'Model C-R336A Millivolt Copper NG',
    'Model C-R336A Millivolt Cupro-Nickle LP',
    'Model C-R336A Millivolt Cupro-Nickle NG',
    'Model C-R337A Low Nox NG',
    'Model C-R406A Digital Copper LP',
    'Model C-R406A Digital Copper NG',
    'Model C-R406A Digital Cupro-Nickle LP',
    'Model C-R406A Digital Cupro-Nickle NG',
    'Model C-R406A Millivolt Copper LP',
    'Model C-R406A Millivolt Copper NG',
    'Model C-R406A Millivolt Cupro-Nickle LP',
    'Model C-R406A Millivolt Cupro-Nickle NG',
    'Model C-R407A Low Nox NG',
    'Model P-1005A LP',
    'Model P-1005A NG',
    'Model P-1104A LP',
    'Model P-1104A NG',
    'Model P-1125 LP',
    'Model P-1125 NG',
    'Model P-1223 LP',
    'Model P-1223 NG',
    'Model P-1262B LP',
    'Model P-1262B NG',
    'Model P-1336 LP',
    'Model P-1336 NG',
    'Model P-1468 LP',
    'Model P-1468 NG',
    'Model P-1504A LP',
    'Model P-1504A NG',
    'Model P-1505A LP',
    'Model P-1505A NG',
    'Model P-1532B LP',
    'Model P-1532B NG',
    'Model P-1631 LP',
    'Model P-1631 NG',
    'Model P-1802B LP',
    'Model P-1802B NG',
    'Model P-1826 LP',
    'Model P-1826 NG',
    'Model P-2002B NG',
    'Model P-2004A LP',
    'Model P-2004A NG',
    'Model P-2005A LP',
    'Model P-2005A NG',
    'Model P-2072B LP',
    'Model P-2072B NG',
    'Model P-2100 LP',
    'Model P-2100 NG',
    'Model P-2342B LP',
    'Model P-2342B NG',
    'Model P-2500 LP',
    'Model P-2500 NG',
    'Model P-3001 LP',
    'Model P-3001 NG',
    'Model P-302B LP',
    'Model P-302B NG',
    'Model P-3500 LP',
    'Model P-3500 NG',
    'Model P-4001 LP',
    'Model P-4001 NG',
    'Model P-402B LP',
    'Model P-402B NG',
    'Model P-502B LP',
    'Model P-502B NG',
    'Model P-504A LP',
    'Model P-504A NG',
    'Model P-514 LP',
    'Model P-514 NG',
    'Model P-624 LP',
    'Model P-624 NG',
    'Model P-652B LP',
    'Model P-652B NG',
    'Model P-724 LP',
    'Model P-724 NG',
    'Model P-752B LP',
    'Model P-752B NG',
    'Model P-754A LP',
    'Model P-754A NG',
    'Model P-824 LP',
    'Model P-824 NG',
    'Model P-902B LP',
    'Model P-902B NG',
    'Model P-962 LP',
    'Model P-962 NG',
    'Model P-992B LP',
    'Model P-992B NG',
    'Model P-M207 Digital Low Nox',
    'Model P-M267 Digital Low Nox',
    'Model P-M337 Digital Low Nox',
    'Model P-M406A-EN-C NG',
    'Model P-M407 Digital Low Nox',
    'Model P-R206A Digital Copper LP',
    'Model P-R206A Digital Copper NG',
    'Model P-R206A Digital Cupro-Nickle LP',
    'Model P-R206A Digital Cupro-Nickle NG',
    'Model P-R206A Millivolt Copper LP',
    'Model P-R206A Millivolt Copper NG',
    'Model P-R206A Millivolt Cupro-Nickle LP',
    'Model P-R206A Millivolt Cupro-Nickle NG',
    'Model P-R207A Low Nox NG',
    'Model P-R266A Digital Copper LP',
    'Model P-R266A Digital Copper NG',
    'Model P-R266A Digital Cupro-Nickle LP',
    'Model P-R266A Digital Cupro-Nickle NG',
    'Model P-R266A Millivolt Copper LP',
    'Model P-R266A Millivolt Copper NG',
    'Model P-R266A Millivolt Cupro-Nickle LP',
    'Model P-R266A Millivolt Cupro-Nickle NG',
    'Model P-R267A Low Nox NG',
    'Model P-R336A Digital Copper LP',
    'Model P-R336A Digital Copper NG',
    'Model P-R336A Digital Cupro-Nickle LP',
    'Model P-R336A Digital Cupro-Nickle NG',
    'Model P-R336A Millivolt Copper LP',
    'Model P-R336A Millivolt Copper NG',
    'Model P-R336A Millivolt Cupro-Nickle LP',
    'Model P-R336A Millivolt Cupro-Nickle NG',
    'Model P-R337A Low Nox NG',
    'Model P-R406A Digital Copper LP',
    'Model P-R406A Digital Copper NG',
    'Model P-R406A Digital Cupro-Nickle LP',
    'Model P-R406A Digital Cupro-Nickle NG',
    'Model P-R406A Millivolt Copper LP',
    'Model P-R406A Millivolt Copper NG',
    'Model P-R406A Millivolt Cupro-Nickle LP',
    'Model P-R406A Millivolt Cupro-Nickle NG',
    'Model P-R407A Low Nox NG',
    'Model PS10353ti 3 Phase Heat Pump',
    'Model PS10354ti 3 Phase Heat Pump',
    'Model PS10355ti 3 Phase Heat Pump',
    'Model R106A LP',
    'Model R106A NG',
    'Model R156A LP',
    'Model R156A NG',
    'Model R185 Digital IID LP',
    'Model R185 Digital IID NG',
    'Model R185 Digital Millivolt LP',
    'Model R185 Digital Millivolt NG',
    'Model R185 IID Brass LP',
    'Model R185 IID Brass NG',
    'Model R185 IID Cast Iron LP',
    'Model R185 IID Cast Iron NG',
    'Model R185 Millivolt Brass LP',
    'Model R185 Millivolt Brass NG',
    'Model R185 Millivolt Cast Iron LP',
    'Model R185 Millivolt Cast Iron NG',
    'Model R2350ti Heat Pump',
    'Model R265 Digital IID LP',
    'Model R265 Digital IID NG',
    'Model R265 Digital Millivolt LP',
    'Model R265 Digital Millivolt NG',
    'Model R265 IID Brass LP',
    'Model R265 IID Brass NG',
    'Model R265 IID Cast Iron LP',
    'Model R265 IID Cast Iron NG',
    'Model R265 Millivolt Brass LP',
    'Model R265 Millivolt Brass NG',
    'Model R265 Millivolt Cast Iron LP',
    'Model R265 Millivolt Cast Iron NG',
    'Model R335 Digital IID LP',
    'Model R335 Digital IID NG',
    'Model R335 Digital Millivolt LP',
    'Model R335 Digital Millivolt NG',
    'Model R335 IID Brass LP',
    'Model R335 IID Brass NG',
    'Model R335 IID Cast Iron LP',
    'Model R335 IID Cast Iron NG',
    'Model R335 Millivolt Brass LP',
    'Model R335 Millivolt Brass NG',
    'Model R335 Millivolt Cast Iron LP',
    'Model R335 Millivolt Cast Iron NG',
    'Model R3350ti Heat Pump',
    'Model R405 Digital IID LP',
    'Model R405 Digital IID NG',
    'Model R405 Digital Millivolt LP',
    'Model R405 Digital Millivolt NG',
    'Model R405 IID Brass LP',
    'Model R405 IID Brass NG',
    'Model R405 IID Cast Iron LP',
    'Model R405 IID Cast Iron NG',
    'Model R405 Millivolt Brass LP',
    'Model R405 Millivolt Brass NG',
    'Model R405 Millivolt Cast Iron LP',
    'Model R405 Millivolt Cast Iron NG',
    'Model R4350ti Heat Pump',
    'Model R5350ti Heat Pump',
    'Model R6350ti Heat Pump',
    'Model R6350ti-E-HC Heat Pump',
    'Model R6350ti-E-PD Heat Pump',
    'Model R6353ti-E 3 Phase Heat Pump',
    'Model R6353ti-E-HC 3 Phase Heat Pump',
    'Model R8350ti Heat Pump',
    'Model R8350ti-E-HC Heat Pump',
    'Model R8353ti-E 3 Phase Heat Pump',
    'Model R8353ti-E-HE 3 Phase Heat Pump',
    'Model R8354ti-A 3 Phase Heat Pump',
    'Model RS5350ti-E-QT Heat Pump',
    'Model RS6350ti-E-QT Heat Pump',
    'Model RS8350ti-E-QT Heat Pump',
    'Model S-R410 LP',
    'Model S-R410 NG',
    'RHP 072 1 Phase Heat Pump',
    'RHP 072 3 Phase Heat Pump',
    'RHP 100 Heat Pump',
    'RHP 104 1 Phase Heat Pump',
    'RHP 104 3 Phase Heat Pump',
    'RHP 115 Heat Pump',
    'RHP 160 Heat Pump',
    'Other',
  ];

  let displayModel =
    make.toString() === 'AquaCal'
      ? aquacalData[modelIndex.row]
      : make === 'Hayward'
      ? haywardData[modelIndex.row]
      : make === 'Jandy'
      ? jandyData[modelIndex.row]
      : make === 'Pentair'
      ? pentairData[modelIndex.row]
      : rheemData[modelIndex.row];

  useEffect(() => {
    setMake(brands[makeIndex.row]);
  }, [makeIndex]);

  useEffect(() => {
    setModelIndex(new IndexPath(0));
  }, [make]);

  useEffect(() => {
    if (make.toString() === 'Other') {
      props.setHeaterInfo(customHeater);
    } else if (displayModel === 'Other') {
      props.setHeaterInfo(`${make} ${customModel}`);
    } else {
      props.setHeaterInfo(`${make} ${displayModel}`);
    }
  }, [displayModel, make, customModel, customHeater]);

  const renderOption = (title) => (
    <SelectItem key={title.toString()} title={title.toString()} />
  );

  return (
    <View style={{ paddingTop: 10 }}>
      <Divider style={{ backgroundColor: '#E5E4E2' }} />
      <Text style={{ fontWeight: 'bold', marginVertical: 10 }}>
        Pool Heater:
      </Text>
      <Select
        value={make}
        selectedIndex={makeIndex}
        onSelect={(index) => setMakeIndex(index)}
        label='Heater Make:'>
        {brands.map(renderOption)}
      </Select>

      {make !== 'Other' ? (
        <Select
          label='Heater Model:'
          style={{ marginTop: 10 }}
          value={displayModel}
          selectedIndex={modelIndex}
          onSelect={(index) => setModelIndex(index)}>
          {make === 'AquaCal'
            ? aquacalData.map(renderOption)
            : make === 'Hayward'
            ? haywardData.map(renderOption)
            : make === 'Jandy'
            ? jandyData.map(renderOption)
            : make === 'Pentair'
            ? pentairData.map(renderOption)
            : rheemData.map(renderOption)}
        </Select>
      ) : (
        <Input
          style={{ marginTop: 10 }}
          value={customHeater}
          onChange={(e) => setCustomHeater(e.target.value)}
          label='Brand/Model:'
        />
      )}

      {displayModel === 'Other' && (
        <Input
          value={customModel}
          onChange={(e) => setCustomModel(e.target.value)}
          style={{ marginTop: 10 }}
          label='Custom Model:'
        />
      )}
    </View>
  );
};

export default PoolHeater;

const styles = StyleSheet.create({});
