import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Select,
  SelectItem,
  IndexPath,
  Divider,
  Input,
} from '@ui-kitten/components';

const PoolPump = (props) => {
  const anthonyData = [
    'Bronze 1 1/2 HP',
    'Bronze 1 HP',
    'Bronze 2 HP',
    'Bronze 3/4 HP',
    'Other',
  ];

  const aquaFloData = [
    'A Series Bronze 1 1/2 HP',
    'A Series Bronze 1 HP',
    'A Series Bronze 1/2 HP',
    'A Series Bronze 1/3 HP',
    'A Series Bronze 3 HP',
    'A Series Bronze 3/4 HP',
    'Dominator High Head 1 1/2 HP',
    'Dominator High Head 1 HP',
    'Dominator High Head 2 HP',
    'Dominator High Head 3/4 HP',
    'Dominator Medium Head 1 1/2 HP',
    'Dominator Medium Head 1 HP',
    'Dominator Medium Head 2 HP',
    'Dominator Medium Head 3/4 HP',
    'FMCP Series 1 1/2 HP',
    'FMCP Series 1 HP',
    'FMCP Series 1/2 HP',
    'FMCP Series 3/4 HP',
    'FMHP Series 1 1/2 HP',
    'FMHP Series 1 HP',
    'FMHP Series 1/2 HP',
    'FMHP Series 3/4 HP',
    'TMCP Series 1 1/2 HP',
    'TMCP Series 1 HP',
    'TMCP Series 1/2 HP',
    'TMCP Series 3/4 HP',
    'Other',
  ];

  const haywardData = [
    'Booster Model 6060 3/4 HP',
    'EcoStar SVRS SP3400',
    'EcoStar VS SP3400',
    'Max-Flo II SP2700X 1 1/2 HP',
    'Max-Flo II SP2700X 1 HP',
    'Max-Flo II SP2700X 2 HP',
    'Max-Flo II SP2700X 3/4 HP',
    'Max-Flo SP1800X 1 1/2 HP',
    'Max-Flo SP1800X 1 HP',
    'Max-Flo SP1800X 1/2 HP',
    'Max-Flo SP1800X 2 HP',
    'Max-Flo SP1800X 3/4 HP',
    'Max-Flo SP2800X 1 1/2 HP',
    'Max-Flo SP2800X 1 HP',
    'Max-Flo SP2800X 1/2 HP',
    'Max-Flo SP2800X 2 HP',
    'Max-Flo SP2800X 3/4 HP',
    'Max-Flo VS SP2300',
    'Max-Flo XL SP2300 1 1/2 HP',
    'Max-Flo XL SP2300 1 HP',
    'Max-Flo XL SP2300 2 HP',
    'Max-Flo XL SP2300 2 SPEED 1 1/2 HP',
    'Max-Flo XL SP2300 2 SPEED 1 HP',
    'Max-Flo XL SP2300 2 SPEED 2 HP',
    'Max-Flo XL SP2300 3/4 HP',
    'Max-Flo XL SP2300EE 3/4 HP',
    'Max-Flow SP2800B',
    'Northstar SP4000 1 1/2 HP',
    'Northstar SP4000 1 HP',
    'Northstar SP4000 1/2 HP',
    'Northstar SP4000 2 1/2 HP',
    'Northstar SP4000 2 HP',
    'Northstar SP4000 3 HP',
    'Northstar SP4000 3/4 HP',
    'Northstar SP4000X 1 1/2 HP',
    'Northstar SP4000X 1 HP',
    'Northstar SP4000X 2 1/2 HP',
    'Northstar SP4000X 2 HP',
    'Northstar SP4000X 3 HP',
    'Power-Flo II SP1700 1 HP',
    'Power-Flo II SP1700 1/2 HP',
    'Power-Flo II SP1700 3/4 HP',
    'Power-Flo III SP2600 1 1/2 HP',
    'Power-Flo III SP2600 1 HP',
    'Power-Flo LX SP1580 1 1/2 HP',
    'Power-Flo LX SP1580 1 HP',
    'Power-Flo LX SP1580 2 HP',
    'Power-Flo LX SP1580 3/4 HP',
    'Power-Flo Matrix SP1590 1 1/2 HP',
    'Power-Flo Matrix SP1590 1 HP',
    'Power-Flo Matrix SP1590 2 HP',
    'Power-Flo Matrix SP1590 3/4 HP',
    'Power-Flo SP1500 1 HP',
    'Power-Flo SP1500 1/2 HP',
    'Power-Flo SP1500 3/4 HP',
    'RS1000',
    'RS1500',
    'RS1502',
    'RS2000',
    'RS2002',
    'RS2500',
    'RS2502',
    'RS3000',
    'RS750',
    'Super II SP2600 1 1/2 HP',
    'Super II SP2600 1 HP',
    'Super II SP2600 1/2 HP',
    'Super II SP2600 3/4 HP',
    'Super II SP3000 1 1/2 HP',
    'Super II SP3000 1 HP',
    'Super II SP3000 1/2 HP',
    'Super II SP3000 2 1/2 HP',
    'Super II SP3000 2 HP',
    'Super II SP3000 3 HP',
    'Super II SP3000 3/4 HP',
    'Super II SP3000X 1 1/2 HP',
    'Super II SP3000X 1 HP',
    'Super II SP3000X 2 1/2 HP',
    'Super II SP3000X 2 HP',
    'Super II SP3000X 3 HP',
    'Super II SP3000X 3/4 HP',
    'Super Pump SP1600X 1 1/2 HP',
    'Super Pump SP1600X 1 HP',
    'Super Pump SP1600X 1/2 HP',
    'Super Pump SP1600X 2 HP',
    'Super Pump SP1600X 3/4 HP',
    'Super Pump SP2600 1 1/2 HP',
    'Super Pump SP2600 1 HP',
    'Super Pump SP2600 1/2 HP',
    'Super Pump SP2600 1/3 HP',
    'Super Pump SP2600 2 HP',
    'Super Pump SP2600 3/4 HP',
    'Super Pump SP2600X 1 1/2 HP',
    'Super Pump SP2600X 1 HP',
    'Super Pump SP2600X 1/2 HP',
    'Super Pump SP2600X 2 1/2 HP',
    'Super Pump SP2600X 2 HP',
    'Super Pump SP2600X 3/4 HP',
    'Super Pump VS SP2600',
    'TriStar SP3200 1 1/2 HP',
    'TriStar SP3200 1 HP',
    'TriStar SP3200 2 1/2 HP',
    'TriStar SP3200 2 HP',
    'TriStar SP3200 3 HP',
    'TriStar SP3200 3/4 HP',
    'TriStar SP3200EE 1 1/2 HP',
    'TriStar SP3200EE 1 HP',
    'TriStar SP3200EE 1/2 HP',
    'TriStar SP3200EE 2 HP',
    'TriStar SP3200EE 3 HP',
    'TriStar SP3200EE 3/4 HP',
    'TriStar SP3200EE 5 HP',
    'TriStar SP3600EE Waterfall 120 GPM',
    'TriStar SP3600EE Waterfall 75 GPM',
    'TriStar VS SP3200',
    'TriStar VS500',
    'TriStar VS900',
    'TriStar VS950',
    'Other',
  ];

  const jacuzziData = [
    'Cygnet 1 1/2 HP',
    'Cygnet 1 HP',
    'Cygnet 2 HP',
    'Cygnet 3/4 HP',
    'J-VSP150 Model 2 HP, Variable Speed',
    'L Model 1 1/2 HP',
    'L Model 1 HP',
    'L Model 1/2 HP',
    'L Model 3/4 HP',
    'LC Model 1 1/2 HP',
    'LC Model 1 HP',
    'LC Model 1/2 HP',
    'LC Model 3/4 HP',
    'LCM Model 1 1/2 HP',
    'LCM Model 1 HP',
    'LCM Model 1/2 HP',
    'LCM Model 3/4 HP',
    'LCU Model 1 1/2 HP',
    'LCU Model 1 HP',
    'LCU Model 1/2 HP',
    'LCU Model 3/4 HP',
    'LCUN2 Model 1 1/2 HP',
    'LCUN2 Model 1 HP',
    'LCUN2 Model 1/2 HP',
    'LCUN2 Model 3/4 HP',
    'LT Model 1 1/2 HP',
    'LT Model 1 HP',
    'LT Model 1/2 HP',
    'LT Model 3/4 HP',
    'LTC Model 1 1/2 HP',
    'LTC Model 1 HP',
    'LTC Model 1/2 HP',
    'LTC Model 3/4 HP',
    'LTCU Model 1 1/2 HP',
    'LTCU Model 1 HP',
    'LTCU Model 1/2 HP',
    'LTCU Model 3/4 HP',
    'LX Model 1 1/2 HP',
    'LX Model 1 HP',
    'LX Model 1/2 HP',
    'LX Model 3/4 HP',
    'Magnum 1 1/2 HP',
    'Magnum 1 HP',
    'Magnum 1/2 HP',
    'Magnum 2 HP',
    'Magnum 3 HP',
    'Magnum 3/4 HP',
    'Magnum Force 1 1/2 HP',
    'Magnum Force 1 HP',
    'Magnum Force 2 HP',
    'Magnum Force 3 HP',
    'Magnum Force 3/4 HP',
    'Magnum Plus 1 1/2 HP',
    'Magnum Plus 1 HP',
    'Magnum Plus 2 HP',
    'Magnum Plus 3 HP',
    'Magnum Plus 3/4 HP',
    'ULCU Model 1 1/2 HP',
    'ULCU Model 1 HP',
    'ULCU Model 1/2 HP',
    'ULCU Model 3/4 HP',
    'ULTCU Model 1 1/2 HP',
    'ULTCU Model 1 HP',
    'ULTCU Model 1/2 HP',
    'ULTCU Model 3/4 HP',
    'Other',
  ];

  const jandyData = [
    'FHPM Flo-Pro 1 1/2 HP',
    'FHPM Flo-Pro 1 HP',
    'FHPM Flo-Pro 2 1/2 HP',
    'FHPM Flo-Pro 2 HP',
    'FHPM Flo-Pro 3/4 HP',
    'FHPM Flo-Pro VS 1 HP',
    'FHPM Flo-Pro VS 2 HP',
    'HHP 1 1/2 HP',
    'HHP 1 HP',
    'HHP 2 HP',
    'HHP 3 HP',
    'HHP 3/4 HP',
    'HHPU 1 1/2 HP',
    'HHPU 1 HP',
    'HHPU 2 1/2 HP',
    'HHPU 2 HP',
    'JEP E-Pump 1 1/2 HP',
    'JEP E-Pump 2 HP',
    'JEP E-Pump VS 1.5 HP',
    'JEP E-Pump VS 2 HP',
    'JHP 1 1/2 HP',
    'JHP 1 HP',
    'JHP 2 HP',
    'JHP 3 HP',
    'JHP 3/4 HP',
    'JHPU 1 1/2 HP',
    'JHPU 1 HP',
    'JHPU 2 1/2 HP',
    'JHPU 2 HP',
    'MHP 1 1/2 HP',
    'MHP 1 HP',
    'MHP 2 HP',
    'MHP 3/4 HP',
    'MHPM Max-HP 1 1/2 HP',
    'MHPM Max-HP 1 HP',
    'MHPM Max-HP 2 1/2 HP',
    'MHPM Max-HP 2 HP',
    'MHPM Max-HP 3/4 HP',
    'MHPU 1 1/2 HP',
    'MHPU 1 HP',
    'MHPU 2 1/2 HP',
    'MHPU 2 HP',
    'MHPU 3/4 HP',
    'PB4-60 Polaris Booster ',
    'PB4-60Q Polaris Halcyon Booster',
    'PHP 1 1/2 HP',
    'PHP 1 HP',
    'PHP 2 HP',
    'PHP 3 HP',
    'PHP 3/4 HP',
    'PHPF Plus-HP 1 1/2 HP',
    'PHPF Plus-HP 1 HP',
    'PHPF Plus-HP 1/2 HP',
    'PHPF Plus-HP 2 HP',
    'PHPF Plus-HP 3/4 HP',
    'PHPF Plus-HP VS 2.7 HP',
    'PHPM Plus-HP 1 1/2 HP',
    'PHPM Plus-HP 1 HP',
    'PHPM Plus-HP 2 1/2 HP',
    'PHPM Plus-HP 2 HP',
    'PHPM Plus-HP 3/4 HP',
    'PHPM Plus-HP VS 2.7 HP',
    'PHPU 1 1/2 HP',
    'PHPU 1 HP',
    'PHPU 2 1/2 HP',
    'PHPU 2 HP',
    'Polaris PB4-SQ',
    'Pro Series Epump VSSHP270AUT',
    'SHPF Stealth 1 1/2 HP',
    'SHPF Stealth 1 HP',
    'SHPF Stealth 1/2 HP',
    'SHPF Stealth 2 HP',
    'SHPF Stealth 3 HP',
    'SHPF Stealth 3/4 HP',
    'SHPM Stealth 1 1/2 HP',
    'SHPM Stealth 1 HP',
    'SHPM Stealth 2 1/2 HP',
    'SHPM Stealth 2 HP',
    'SHPM Stealth 3 HP',
    'SHPM Stealth 3/4 HP',
    'VS FloPro 1.65 HP',
    'VS FloPro 1.85 HP Variable-Speed',
    'VS FloPro 2.7 HP',
    'WFTR Water Feature 1 1/2 HP',
    'WFTR Water Feature 1 HP',
    'WFTR Water Feature 2 1/2 HP',
    'WFTR Water Feature 2 HP',
    'FHPM Flo-Pro 1 1/2 HP',
    'FHPM Flo-Pro 1 HP',
    'FHPM Flo-Pro 2 1/2 HP',
    'FHPM Flo-Pro 2 HP',
    'FHPM Flo-Pro 3/4 HP',
    'FHPM Flo-Pro VS 1 HP',
    'FHPM Flo-Pro VS 2 HP',
    'HHP 1 1/2 HP',
    'HHP 1 HP',
    'HHP 2 HP',
    'HHP 3 HP',
    'HHP 3/4 HP',
    'HHPU 1 1/2 HP',
    'HHPU 1 HP',
    'HHPU 2 1/2 HP',
    'HHPU 2 HP',
    'JEP E-Pump 1 1/2 HP',
    'JEP E-Pump 2 HP',
    'JEP E-Pump VS 1.5 HP',
    'JEP E-Pump VS 2 HP',
    'JHP 1 1/2 HP',
    'JHP 1 HP',
    'JHP 2 HP',
    'JHP 3 HP',
    'JHP 3/4 HP',
    'JHPU 1 1/2 HP',
    'JHPU 1 HP',
    'JHPU 2 1/2 HP',
    'JHPU 2 HP',
    'MHP 1 1/2 HP',
    'MHP 1 HP',
    'MHP 2 HP',
    'MHP 3/4 HP',
    'MHPM Max-HP 1 1/2 HP',
    'MHPM Max-HP 1 HP',
    'MHPM Max-HP 2 1/2 HP',
    'MHPM Max-HP 2 HP',
    'MHPM Max-HP 3/4 HP',
    'MHPU 1 1/2 HP',
    'MHPU 1 HP',
    'MHPU 2 1/2 HP',
    'MHPU 2 HP',
    'MHPU 3/4 HP',
    'PB4-60 Polaris Booster ',
    'PB4-60Q Polaris Halcyon Booster',
    'PHP 1 1/2 HP',
    'PHP 1 HP',
    'PHP 2 HP',
    'PHP 3 HP',
    'PHP 3/4 HP',
    'PHPF Plus-HP 1 1/2 HP',
    'PHPF Plus-HP 1 HP',
    'PHPF Plus-HP 1/2 HP',
    'PHPF Plus-HP 2 HP',
    'PHPF Plus-HP 3/4 HP',
    'PHPF Plus-HP VS 2.7 HP',
    'PHPM Plus-HP 1 1/2 HP',
    'PHPM Plus-HP 1 HP',
    'PHPM Plus-HP 2 1/2 HP',
    'PHPM Plus-HP 2 HP',
    'PHPM Plus-HP 3/4 HP',
    'PHPM Plus-HP VS 2.7 HP',
    'PHPU 1 1/2 HP',
    'PHPU 1 HP',
    'PHPU 2 1/2 HP',
    'PHPU 2 HP',
    'Polaris PB4-SQ',
    'Pro Series Epump VSSHP270AUT',
    'SHPF Stealth 1 1/2 HP',
    'SHPF Stealth 1 HP',
    'SHPF Stealth 1/2 HP',
    'SHPF Stealth 2 HP',
    'SHPF Stealth 3 HP',
    'SHPF Stealth 3/4 HP',
    'SHPM Stealth 1 1/2 HP',
    'SHPM Stealth 1 HP',
    'SHPM Stealth 2 1/2 HP',
    'SHPM Stealth 2 HP',
    'SHPM Stealth 3 HP',
    'SHPM Stealth 3/4 HP',
    'VS FloPro 1.65 HP',
    'VS FloPro 1.85 HP Variable-Speed',
    'VS FloPro 2.7 HP',
    'WFTR Water Feature 1 1/2 HP',
    'WFTR Water Feature 1 HP',
    'WFTR Water Feature 2 1/2 HP',
    'WFTR Water Feature 2 HP',
    'Other',
  ];

  const pentairData = [
    'ABG 1 1/2 HP',
    'ABG 1 HP',
    'ABG 1/2 HP',
    'ABG 2 HP',
    'ABG 3/4 HP',
    'Boost-Rite Booster',
    'C Series 10 HP',
    'C Series 15 HP',
    'C Series 20 HP',
    'C Series 5 HP',
    'C Series 7 1/2 HP',
    'CC/C Series Bronze 3 HP',
    'CC/C Series Bronze 5 HP',
    'Challenger High Flow 1 1/2 HP',
    'Challenger High Flow 1 HP',
    'Challenger High Flow 1/2 HP',
    'Challenger High Flow 2 1/2 HP',
    'Challenger High Flow 2 HP',
    'Challenger High Flow 3/4 HP',
    'Challenger High Pressure 1 1/2 HP',
    'Challenger High Pressure 1 HP',
    'Challenger High Pressure 1/2 HP',
    'Challenger High Pressure 2 1/2 HP',
    'Challenger High Pressure 2 HP',
    'Challenger High Pressure 3 HP',
    'Challenger High Pressure 3/4 HP',
    'CSP/CCSP Cast Iron 10 HP',
    'CSP/CCSP Cast Iron 15 HP',
    'CSP/CCSP Cast Iron 20 HP',
    'CSP/CCSP Cast Iron 7 1/2 HP',
    'Dura-Glas 1 1/2 HP',
    'Dura-Glas 1 HP',
    'Dura-Glas 1/2 HP',
    'Dura-Glas 1/3 HP',
    'Dura-Glas 2 1/2 HP',
    'Dura-Glas 2 HP',
    'Dura-Glas 3 HP',
    'Dura-Glas 3/4 HP',
    'Dura-Glas II 1 1/2 HP',
    'Dura-Glas II 1 HP',
    'Dura-Glas II 2 1/2 HP',
    'Dura-Glas II 2 HP',
    'Dura-Glas II 3 HP',
    'Dura-Glas II 3/4 HP',
    'Dura-Jet 1 1/2 HP',
    'Dura-Jet 1 HP',
    'Dura-Jet 1/2 HP',
    'Dura-Jet 1/3 HP',
    'Dura-Jet 2 1/2 HP',
    'Dura-Jet 2 HP',
    'Dura-Jet 3 HP',
    'Dura-Jet 3/4 HP',
    'Dyna-Glas 1 1/2 HP',
    'Dyna-Glas 1 HP',
    'Dyna-Glas 2 1/2 HP',
    'Dyna-Glas 2 HP',
    'Dyna-Glas 3/4 HP',
    'Dyna-Max 1 1/2 HP',
    'Dyna-Max 1 HP',
    'Dyna-Max 2 1/2 HP',
    'Dyna-Max 2 HP',
    'Dyna-Max 3/4 HP',
    'Dynamo 1 HP',
    'Dynamo 1/2 HP',
    'Dynamo 3/4 HP',
    'Dyna-Pro 1 1/2 HP',
    'Dyna-Pro 1 HP',
    'Dyna-Pro 1/2 HP',
    'Dyna-Pro 2 1/2 HP',
    'Dyna-Pro 2 HP',
    'Dyna-Pro 3/4 HP',
    'Dyna-Pro E 1 1/2 HP',
    'Dyna-Pro E 2 1/2 HP',
    'Dyna-Pro E 2 HP',
    'Dyne-Wave 1/3 HP',
    'EQ1000 10 HP',
    'EQ1500 15 HP',
    'EQ300 3 HP',
    'EQ500 5 HP',
    'EQ750 7 1/2 HP',
    'Hydro Pump 1 1/2 HP',
    'Hydro Pump 1 HP',
    'Hydro Pump 1/2 HP',
    'Hydro Pump 2 1/2 HP',
    'Hydro Pump 2 HP',
    'Hydro Pump 3 HP',
    'Hydro Pump 3/4 HP',
    'IntelliFlo 2 VST',
    'IntelliFlo i1',
    'IntelliFlo i2',
    'IntelliFlo VF',
    'IntelliFlo VS',
    'IntelliFlo VS+SVRS',
    'IntelliFlo VSF',
    'IntelliFlo XF',
    'IntelliFlo XF VSF',
    'IntelliPro VF',
    'IntelliPro VS',
    'IntelliPro VS+SVRS',
    'IntelliPro XF',
    'JWP 1 1/2 HP',
    'JWP 1 HP',
    'JWP 1/2 HP',
    'JWP 3/4 HP',
    'LA01N Booster',
    'LT Series 1/2 HP',
    'LT Series 1/8 HP',
    'LT Series 3/4 HP',
    'Max-E-Glas 1 1/2 HP',
    'Max-E-Glas 1 HP',
    'Max-E-Glas 1/2 HP',
    'Max-E-Glas 1/3 HP',
    'Max-E-Glas 2 1/2 HP',
    'Max-E-Glas 2 HP',
    'Max-E-Glas 3 HP',
    'Max-E-Glas 3/4 HP',
    'Max-E-Glas II 1 1/2 HP',
    'Max-E-Glas II 1 HP',
    'Max-E-Glas II 2 1/2 HP',
    'Max-E-Glas II 2 HP',
    'Max-E-Glas II 3 HP',
    'Max-E-Glas II 3/4 HP',
    'Max-E-Pro 1 1/2 HP',
    'Max-E-Pro 1 3/4 HP',
    'Max-E-Pro 1 HP',
    'Max-E-Pro 1/2 HP',
    'Max-E-Pro 2 1/2 HP',
    'Max-E-Pro 2 HP',
    'Max-E-Pro 3 HP',
    'Max-E-Pro 3/4 HP',
    'Max-E-Pro XF 2 1/2 HP',
    'Max-E-Pro XF 2 HP',
    'Max-E-Pro XF 3 HP',
    'Max-E-Pro XF 5 HP',
    'OptiFlo 1 1/2 HP',
    'OptiFlo 1 HP',
    'OptiFlo 3/4 HP',
    'Pinnacle 1 1/2 HP',
    'Pinnacle 1 HP',
    'Pinnacle 1/2 HP',
    'Pinnacle 2 HP',
    'Pinnacle 3/4 HP',
    'PLBC Booster',
    'SuperFlo 1 1/2 HP',
    'SuperFlo 1 HP',
    'SuperFlo 1/2 HP',
    'SuperFlo 2 1/2 HP',
    'SuperFlo 2 HP',
    'SuperFlo 3/4 HP',
    'SuperFlo VS',
    'SuperMax 1 1/2 HP',
    'SuperMax 1 HP',
    'SuperMax 1/2 HP',
    'SuperMax 2 1/2 HP',
    'SuperMax 2 HP',
    'SuperMax 3/4 HP',
    'SuperMax VS',
    'TEFC WhisperFlo XF',
    'Ultra-Flow 1 1/2 HP',
    'Ultra-Flow 1 HP',
    'Ultra-Flow 1/2 HP',
    'Ultra-Flow 2 1/2 HP',
    'Ultra-Flow 2 HP',
    'Ultra-Flow 3 HP',
    'Ultra-Flow 3/4 HP',
    'Waterfall 120 GPM',
    'Waterfall 150 GPM',
    'Waterfall 180 GPM',
    'Waterfall 75 GPM',
    'WhisperFlo 1 1/2 HP',
    'WhisperFlo 1 HP',
    'WhisperFlo 2 HP',
    'WhisperFlo 3 HP',
    'WhisperFlo 3/4 HP',
    'WhisperFlo Dual Speed 1 1/2 HP',
    'WhisperFlo Dual Speed 1 HP',
    'WhisperFlo Dual Speed 2 1/2 HP',
    'WhisperFlo Dual Speed 2 HP',
    'WhisperFlo Dual Speed 3/4 HP',
    'WhisperFlo Energy Efficient Full Rated 1 1/2 HP',
    'WhisperFlo Energy Efficient Full Rated 1 HP',
    'WhisperFlo Energy Efficient Full Rated 1/2 HP',
    'WhisperFlo Energy Efficient Full Rated 2 HP',
    'WhisperFlo Energy Efficient Full Rated 3 HP',
    'WhisperFlo Energy Efficient Full Rated 3/4 HP',
    'WhisperFlo High Performance 1 1/2 HP',
    'WhisperFlo High Performance 1 HP',
    'WhisperFlo High Performance 1/2 HP',
    'WhisperFlo High Performance 2 1/2 HP',
    'WhisperFlo High Performance 2 HP',
    'WhisperFlo High Performance 3 HP',
    'WhisperFlo High Performance 3/4 HP',
    'WhisperFlo Standard Full Rated 1 1/2 HP',
    'WhisperFlo Standard Full Rated 1 HP',
    'WhisperFlo Standard Full Rated 1/2 HP',
    'WhisperFlo Standard Full Rated 2 HP',
    'WhisperFlo Standard Full Rated 3 HP',
    'WhisperFlo Standard Full Rated 3/4 HP',
    'WhisperFlo TEFC Super-Duty 1 1/2 HP',
    'WhisperFlo TEFC Super-Duty 1 HP',
    'WhisperFlo TEFC Super-Duty 2 HP',
    'WhisperFlo TEFC Super-Duty 3 HP',
    'WhisperFlo Up Rated High Performance 1 1/2 HP',
    'WhisperFlo Up Rated High Performance 1 HP',
    'WhisperFlo Up Rated High Performance 2 1/2 HP',
    'WhisperFlo Up Rated High Performance 2 HP',
    'WhisperFlo Up Rated High Performance 3/4 HP',
    'WhisperFlo XF 2 1/2 HP',
    'WhisperFlo XF 2 HP',
    'WhisperFlo XF 3 HP',
    'WhisperFlo XF 5 HP',
    'Other',
  ];

  const polarisData = [
    'PB4-60 3/4 HP Booster Pump',
    'PB4SQ Booster Pump',
    'Other',
  ];

  const premierData = ['Model 555N', 'Model 556N', 'Model 575N', 'Other'];

  const stariteData = ['Max-E-Pro', 'Other'];

  const waterWayData = [
    'Iron Might 1/15HP 3410030-1E',
    'SMF-110 1HP',
    'SMF-115 1.5HP',
    'Other',
  ];

  const brands = [
    'Anthony',
    'Aqua-Flo',
    'Hayward',
    'Jacuzzi',
    'Pentair',
    'Polaris',
    'Premier',
    'Sta-Rite',
    'Waterway',
    'Other',
  ];

  const [makeIndex, setMakeIndex] = useState(new IndexPath(0));
  const [brandIndex, setBrandIndex] = useState(new IndexPath(0));
  const [make, setMake] = useState('Anthony');
  //   const [brand, setBrand] = useState('Bronze 1 1/2 HP');
  const [customPump, setCustomPump] = useState('');
  const [customModel, setCustomModel] = useState('');
  const displayMake = brands[makeIndex.row];

  let displayBrand =
    make.toString() === 'Anthony'
      ? anthonyData[brandIndex.row]
      : make === 'Aqua-Flo'
      ? aquaFloData[brandIndex.row]
      : make === 'Hayward'
      ? haywardData[brandIndex.row]
      : make === 'Jacuzzi'
      ? jacuzziData[brandIndex.row]
      : make === 'Pentair'
      ? pentairData[brandIndex.row]
      : make === 'Polaris'
      ? polarisData[brandIndex.row]
      : make === 'Premier'
      ? premierData[brandIndex.row]
      : make === 'Sta-Rite'
      ? stariteData[brandIndex.row]
      : waterWayData[brandIndex.row];

  useEffect(() => {
    setBrandIndex(new IndexPath(0));
  }, [make]);

  //   useEffect(() => {
  //     setBrand(
  //       make === 'Anthony'
  //         ? anthonyData[makeIndex.row]
  //         : make === 'Aqua-Flo'
  //         ? aquaFloData[brandIndex.row]
  //         : make === 'Hayward'
  //         ? haywardData[brandIndex.row]
  //         : make === 'Jacuzzi'
  //         ? jacuzziData[brandIndex.row]
  //         : make === 'Pentair'
  //         ? pentairData[brandIndex.row]
  //         : make === 'Polaris'
  //         ? polarisData[brandIndex.row]
  //         : make === 'Premier'
  //         ? premierData[brandIndex.row]
  //         : make === 'Sta-Rite'
  //         ? stariteData[brandIndex.row]
  //         : waterWayData[brandIndex.row]
  //     );
  //   }, [brandIndex]);

  useEffect(() => {
    setMake(brands[makeIndex.row]);
  }, [makeIndex]);

  useEffect(() => {
    if (make.toString() === 'Other') {
      props.setPumpInfo(customPump);
    } else if (displayBrand === 'Other') {
      props.setPumpInfo(`${make} ${customModel}`);
    } else {
      props.setPumpInfo(`${make} ${displayBrand}`);
    }
  }, [displayBrand, make, customPump, customModel]);

  const renderOption = (title) => (
    <SelectItem key={title.toString()} title={title.toString()} />
  );

  return (
    <View style={{ paddingTop: 10 }}>
      <Divider style={{ backgroundColor: '#E5E4E2' }} />
      <Text style={{ fontWeight: 'bold', marginVertical: 10 }}>
        Pump Information:
      </Text>
      <Select
        label='Pump Make:'
        value={displayMake}
        selectedIndex={makeIndex}
        onSelect={(index) => setMakeIndex(index)}>
        {brands.map(renderOption)}
      </Select>

      {make !== 'Other' ? (
        <Select
          label='Pump Model:'
          style={{ marginTop: 10 }}
          value={displayBrand}
          selectedIndex={brandIndex}
          onSelect={(index) => setBrandIndex(index)}>
          {make === 'Anthony'
            ? anthonyData.map(renderOption)
            : make === 'Aqua-Flo'
            ? aquaFloData.map(renderOption)
            : make === 'Hayward'
            ? haywardData.map(renderOption)
            : make === 'Jacuzzi'
            ? jacuzziData.map(renderOption)
            : make === 'Pentair'
            ? pentairData.map(renderOption)
            : make === 'Polaris'
            ? polarisData.map(renderOption)
            : make === 'Premier'
            ? premierData.map(renderOption)
            : make === 'Sta-Rite'
            ? stariteData.map(renderOption)
            : waterWayData.map(renderOption)}
        </Select>
      ) : (
        <Input
          style={{ marginTop: 10 }}
          value={customPump}
          onChange={(e) => setCustomPump(e.target.value)}
          label='Brand/Model:'
        />
      )}

      {displayBrand === 'Other' && (
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

export default PoolPump;

const styles = StyleSheet.create({});
