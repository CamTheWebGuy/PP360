import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Select,
  SelectItem,
  IndexPath,
  Divider,
  Input,
} from '@ui-kitten/components';

const PoolFilter = (props) => {
  const brands = [
    'Anthony',
    'Harmsco',
    'Hayward',
    'Jacuzzi',
    'Jandy',
    'Pac-Fab',
    'Pentair',
    'Unicel',
    'Waterway',
    'Other',
  ];

  const anthonyData = [
    'Apollo VA-26 DE',
    'Apollo VA-38 DE',
    'Apollo VA-52 1.5" DE',
    'Apollo VA-52 2" DE',
    'Flowmaster 4000 DE',
    'Flowmaster 5000 DE',
    'Other',
  ];

  const harmscoData = [
    'BF 105 Single Cart',
    'BF 1200FL',
    'BF 126 Cluster Style',
    'BF 144 Cluster Style',
    'BF 155 Single Cart',
    'BF 168',
    'BF 252',
    'BF 336',
    'BF 42 Cluster Style',
    'BF 450',
    'BF 55 Single Cart',
    'BF 600',
    'BF 84 Cluster Style',
    'BF 900FL',
    'BF 96 Cluster Style',
    'TF 100',
    'TF 150',
    'TF 50',
    'TF 75',
    'Other',
  ];

  const haywardData = [
    'ASL C1250 Cartridge',
    'ASL C850 Cartridge',
    'Easy Clear C400 Cartridge',
    'Easy Clear C550 Cartridge',
    'Micro-Clear 24 DE',
    'Micro-Clear 36 DE',
    'Micro-Clear 48 DE',
    'Micro-Clear 60 DE',
    'Micro-Star Clear Cartridge',
    'Perflex EC30 DE',
    'Perflex EC40 DE',
    'Perflex EC40-AC DE',
    'Perflex EC50-A DE',
    'Perflex EC50-AC DE',
    'Perflex EC65 DE',
    'Perflex EC65-A DE',
    'Perflex EC75 DE',
    'Perflex EC75-A DE',
    'Pro Series Plus S311SX Sand',
    'Pro Series Plus S311SXV Sand',
    'Pro Series Plus S360SX Sand',
    'Pro Series S140T Sand',
    'Pro Series S144T Sand',
    'Pro Series S164T Sand',
    'Pro Series S166T Sand',
    'Pro Series S180T Sand',
    'Pro Series S210S Sand',
    'Pro Series S210T Sand',
    'Pro Series S220T Sand',
    'Pro Series S230T Sand',
    'Pro Series S244S Sand',
    'Pro Series S244T Sand',
    'Pro Series S270T Sand',
    'Pro Series S270T2 Sand',
    'Pro Series S310S Sand',
    'Pro Series S310T2 Sand',
    'Pro Series S360T2 Sand',
    'Pro-Grid 24 DE',
    'Pro-Grid 36 DE',
    'Pro-Grid 48 DE',
    'Pro-Grid 60 DE',
    'Pro-Grid 72 DE',
    'Regenx RG450 DE',
    'Regenx RG700 DE',
    'Regenx SC700 DE',
    'S160T Sand',
    'S190T Sand',
    'S200 Sand',
    'S240 Sand',
    'S245T Sand',
    'Star-Clear C1000 Cartridge',
    'Star-Clear C250 Cartridge',
    'Star-Clear C500 Cartridge',
    'Star-Clear C750 Cartridge',
    'Star-Clear II C1100 Cartridge',
    'Star-Clear II C1500 Cartridge',
    'Star-Clear II C800 Cartridge',
    'Star-Clear Plus C1200 Cartridge',
    'Star-Clear Plus C1750 Cartridge',
    'Star-Clear Plus C1900 Cartridge',
    'Star-Clear Plus C751 Cartridge',
    'Star-Clear Plus C900 Cartridge',
    'Super Star-Clear C2000 Cartridge',
    'Super Star-Clear C3000/C3025 Cartridge',
    'Super Star-Clear C4000/C4025 Cartridge',
    'Super Star-Clear C4500 Cartridge',
    'Super Star-Clear C5000 Cartridge',
    'Super Star-Clear C5500 Cartridge',
    'Swim Clear C100S',
    'Swim Clear C150S',
    'Swim Clear C200S Cartridge',
    'Swim Clear C2020/C2025 Cartridge',
    'Swim Clear C2030 Cartridge',
    'Swim Clear C3020/C3025 Cartridge',
    'Swim Clear C3030 Cartridge',
    'Swim Clear C4020/C4025 Cartridge',
    'Swim Clear C4030 Cartridge',
    'Swim Clear C4500 Cartridge',
    'Swim Clear C5020/C5025 Cartridge',
    'Swim Clear C5030 Cartridge',
    'Swim Clear C5520 Cartridge',
    'Swim Clear C7030 Cartridge',
    'Swim Clear DE-4520 Cartridge',
    'XStream CC1000 Cartridge',
    'XStream CC1500 Cartridge',
    'Other',
  ];

  const jacuzziData = [
    'CFR 100 Cartridge',
    'CFR 150 Cartridge',
    'CFR 50 Cartridge',
    'CFR 75 Cartridge',
    'J-CQ420 420 SF',
    'Landslide LS40 DE',
    'Landslide LS55 DE',
    'Landslide LS70 DE',
    'Laser 160L Sand',
    'Laser 190L Sand',
    'Laser 225L Sand',
    'Laser 250L Sand',
    'Sher 120 Cartridge',
    'Sher 160 Cartridge',
    'Sher 200 Cartridge',
    'Sher 80 Cartridge',
    'Other',
  ];

  const jandyData = [
    '2888 Energy Filter with Gauge',
    'C 200 Cartridge',
    'C 300 Cartridge',
    'C 400 Cartridge',
    'CJ 200 Cartridge',
    'CJ 250 Cartridge',
    'CL 340 Cartridge',
    'CL 460 Cartridge',
    'CL 580 Cartridge',
    'CS 100 Cartridge',
    'CS 150 Cartridge',
    'CS 200 Cartridge',
    'CS 250 Cartridge',
    'CT 100 Cartridge',
    'CT 50 Cartridge',
    'CT 75 Cartridge',
    'CV 340 Cartridge',
    'CV 460 Cartridge',
    'CV 580 Cartridge',
    'DEL 48 DE',
    'DEL 60 DE',
    'DEV 48 DE',
    'DEV 60 DE',
    'Pro Series Sand Filter JS100-SM',
    'ST 18T Sand',
    'ST 20T Sand',
    'ST 24T Sand',
    'Other',
  ];

  const pacfabData = ['Mitra MA160 Cartridge', 'Other'];

  const pentairData = [
    'CFW 120 Cartridge',
    'CFW 180 Cartridge',
    'CFW 315 Cartridge',
    'CFW 405 Cartridge',
    'CFW 560 Cartridge',
    'Clean & Clear 100 Cartridge',
    'Clean & Clear 150 Cartridge',
    'Clean & Clear 150 Complete Filter',
    'Clean & Clear 200 Cartridge',
    'Clean & Clear 200 Complete Filter',
    'Clean & Clear 50 Cartridge',
    'Clean & Clear 75 Cartridge',
    'Clean & Clear Plus 240 Cartridge',
    'Clean & Clear Plus 320 Cartridge',
    'Clean & Clear Plus 360 Cartridge',
    'Clean & Clear Plus 420 Cartridge',
    'Clean & Clear Plus 500 Cartridge',
    'Clean &amp; Clear Plus 520 Cartridge',
    'Commander 100 Cartridge',
    'Commander 25 Cartridge',
    'Commander 35 Cartridge',
    'Commander 50 Cartridge',
    'Commander 75 Cartridge',
    'Crystal-Flo II 16" Sand',
    'Crystal-Flo II 19" Sand',
    'Crystal-Flo II 22" Sand',
    'Crystal-Flo II 24" Sand',
    'Crystal-Flo II 26" Sand',
    'Crystal-Flo T-150BP Sand',
    'Crystal-Flo T-170BP Sand',
    'Crystal-Flo T-200BP Sand',
    'Crystal-Flo T-240BP Sand',
    'Crystal-Flo T-300BP Sand',
    'DEP 36 DE',
    'DEP 51 DE',
    'DEP 83 DE',
    'DEPB 36 DE',
    'DEPB 51 DE',
    'DEPB 83 DE',
    'Dynamic Series 1 Model RDC 25 Cartridge',
    'Dynamic Series 1 Model RDC 50 Cartridge',
    'Dynamic Series 2 Model RTL/RCF 100 Cartridge',
    'Dynamic Series 2 Model RTL/RCF 25 Cartridge',
    'Dynamic Series 2 Model RTL/RCF 50 Cartridge',
    'Dynamic Series 2 Model RTL/RCF 75 Cartridge',
    'Dynamic Series 3 Model RTL/RCF 100 Cartridge',
    'Dynamic Series 3 Model RTL/RCF 25 Cartridge',
    'Dynamic Series 3 Model RTL/RCF 50 Cartridge',
    'Dynamic Series 3 Model RTL/RCF 75 Cartridge',
    'EasyClean EC90 DE Inground Filter',
    'Eclipse 22" Sand',
    'Eclipse 26" Sand',
    'Eclipse 30" Sand',
    'Eclipse 36" Sand',
    'FNS 24 DE',
    'FNS 36 DE',
    'FNS 48 DE',
    'FNS 60 DE',
    'FNS Plus 24 DE',
    'FNS Plus 36 DE',
    'FNS Plus 48 DE',
    'FNS Plus 60 DE',
    'HRPB 20 Sand',
    'HRPB 24 Sand',
    'HRPB 30 Sand',
    'Meteor 18" Sand',
    'Meteor 20" Sand',
    'Meteor 22" Sand',
    'Meteor 26" Sand',
    'Meteor 30" Sand',
    'Nautilus 24 DE',
    'Nautilus 36 DE',
    'Nautilus 48 DE',
    'Nautilus 60 DE',
    'Nautilus 72 DE',
    'Nautilus Plus 24 DE',
    'Nautilus Plus 36 DE',
    'Nautilus Plus 48 DE',
    'Nautilus Plus 60 DE',
    'Nautilus Plus 72 DE',
    'Posi-Clear PXC 125 Cartridge',
    'Posi-Clear PXC 150 Cartridge',
    'Posi-Clear PXC 200 Cartridge',
    'Posi-Clear PXC 75 Cartridge',
    'Posi-Clear PXC 95 Cartridge',
    'Posi-Flo II PTM 100 Cartridge',
    'Posi-Flo II PTM 135 Cartridge',
    'Posi-Flo II PTM 50 Cartridge',
    'Posi-Flo II PTM 70 Cartridge',
    'Predator 100 Cartridge',
    'Predator 150 Cartridge',
    'Predator 200 Cartridge',
    'Predator 50 Cartridge',
    'Predator 75 Cartridge',
    'Quad 100 DE',
    'Quad 60 DE',
    'Quad 80 DE',
    'Sand Dollar SD 35 Sand',
    'Sand Dollar SD 40 Sand',
    'Sand Dollar SD 60 Sand',
    'Sand Dollar SD 80 Sand',
    'Sandpiper 18" Sand',
    'Sandpiper 24" Sand',
    'Sandpiper 30" Sand',
    'Seahorse 300 Fiberglass Cartridge',
    'Seahorse 300 Stainless Cartridge',
    'Seahorse 400 Fiberglass Cartridge',
    'Seahorse 400 Stainless Cartridge',
    'Seahorse 500 Fiberglass Cartridge',
    'Seahorse 500 Stainless Cartridge',
    'SEP 144 Separation Tank',
    'SEP 48 Separation Tank',
    'SEP 60 Separation Tank',
    'SEP 72 Separation Tank',
    'SEP 96 Separation Tank',
    'SM 2024 DE',
    'SM 2036 DE',
    'SM 2048 DE',
    'SM 2060 DE',
    'SM 2072 DE',
    'SM 4024 DE',
    'SM 4036 DE',
    'SM 4048 DE',
    'SM 4060 DE',
    'SMBW 2024 DE',
    'SMBW 2036 DE',
    'SMBW 2048 DE',
    'SMBW 2060 DE',
    'SMBW 2072 DE',
    'SMBW 4024 DE',
    'SMBW 4036 DE',
    'SMBW 4048 DE',
    'SMBW 4060 DE',
    'Star ST 35 DE',
    'Star ST 40 DE',
    'Star ST 50 DE',
    'Star ST 80 DE',
    'System 2 PLD 50 Modular',
    'System 2 PLD 70 Modular',
    'System 2 PLDE 36 Modular',
    'System 2 PLDE 48 Modular',
    'System 2 PLM 100 Modular',
    'System 2 PLM 125 Modular',
    'System 2 PLM 150 Modular',
    'System 2 PLM 175 Modular',
    'System 2 PLM 200 Modular',
    'System 2 PLM 300 Modular',
    'System 3 S7D75 DE',
    'System 3 S7M120 Modular',
    'System 3 S7M400 Modular',
    'System 3 S7MD60 Modular',
    'System 3 S7MD72 Modular',
    'System 3 S7S50 Sand',
    'System 3 S8D110 DE',
    'System 3 S8M150 Modular',
    'System 3 S8M500 Modular',
    'System 3 S8S70 Sand',
    'Tagleus TA 100 Sand',
    'Tagleus TA 100D Sand',
    'Tagleus TA 30 Sand',
    'Tagleus TA 30D Sand',
    'Tagleus TA 35 Sand',
    'Tagleus TA 35D Sand',
    'Tagleus TA 40 Sand',
    'Tagleus TA 40D Sand',
    'Tagleus TA 50 Sand',
    'Tagleus TA 50D Sand',
    'Tagleus TA 60 Sand',
    'Tagleus TA 60D Sand',
    'Titan 24 Fiberglass DE',
    'Titan 24 Stainless DE',
    'Titan 36 Fiberglass DE',
    'Titan 36 Stainless DE',
    'Titan 48 Fiberglass DE',
    'Titan 48 Stainless DE',
    'Titan 60 Fiberglass DE',
    'Titan 60 Stainless DE',
    'Titan CM 24 DE',
    'Titan CM 36 DE',
    'Titan CM 48 DE',
    'Titan CM 60 DE',
    'Titan RPM 24 DE',
    'Titan RPM 36 DE',
    'Titan RPM 48 DE',
    'Titan RPM 60 DE',
    'Triton II TR 100 Sand',
    'Triton II TR 100HD Sand',
    'Triton II TR 140 Sand',
    'Triton II TR 40 Sand',
    'Triton II TR 50 Sand',
    'Triton II TR 60 Sand',
    'Triton TR 100 C-3 Sand',
    'Triton TR 100C Sand',
    'Triton TR 140 C-3 Sand',
    'Triton TR 140C Sand',
    'Warrior 44GPM DE',
    'Warrior 66GPM DE',
    'Warrior 88GPM DE',
    'Other',
  ];

  const unicelData = [
    '7699',
    '8409',
    '8412',
    '8414',
    '8417',
    '8418',
    '8600',
    '9410',
    '9415',
    '9419',
    '9699',
    'Other',
  ];

  const waterWayData = [
    'ClearWater 16" Sand',
    'ClearWater 19" Sand',
    'ClearWater 22" Sand',
    'ClearWater 26" Sand',
    'Crystal Water Cartridge Filter 325 sq. ft.',
    'Crystal Water Cartridge Filter 425 sq. ft.',
    'Crystal Water Cartridge Filter 525 sq. ft.',
    'Crystal Water Filter DE 36 sq. ft.',
    'Crystal Water Filter DE 48 sq. ft.',
    'Crystal Water Filter DE 60 sq. ft.',
    'PCCF 100 sqft Filter Cartridge',
    'PCCF 150 sqft Filter Cartridge',
    'PCCF 200 sqft Filter Cartridge',
    'Other',
  ];

  const [makeIndex, setMakeIndex] = useState(new IndexPath(0));
  const [modelIndex, setModelIndex] = useState(new IndexPath(0));
  const [make, setMake] = useState('Anthony');
  const [customFilter, setCustomFilter] = useState('');
  const [customModel, setCustomModel] = useState('');
  //   const displayMake = brands[makeIndex.row];

  let displayModel =
    make.toString() === 'Anthony'
      ? anthonyData[modelIndex.row]
      : make === 'Harmsco'
      ? harmscoData[modelIndex.row]
      : make === 'Hayward'
      ? haywardData[modelIndex.row]
      : make === 'Jacuzzi'
      ? jacuzziData[modelIndex.row]
      : make === 'Jandy'
      ? jandyData[modelIndex.row]
      : make === 'Pac-Fab'
      ? pacfabData[modelIndex.row]
      : make === 'Pentair'
      ? pentairData[modelIndex.row]
      : make === 'Unicel'
      ? unicelData[modelIndex.row]
      : waterWayData[modelIndex.row];

  useEffect(() => {
    setModelIndex(new IndexPath(0));
  }, [make]);

  useEffect(() => {
    setMake(brands[makeIndex.row]);
  }, [makeIndex]);

  useEffect(() => {
    if (make.toString() === 'Other') {
      props.setFilterInfo(customFilter);
    } else if (displayModel === 'Other') {
      props.setFilterInfo(`${make} ${customModel}`);
    } else {
      props.setFilterInfo(`${make} ${displayModel}`);
    }
  }, [displayModel, make, customFilter, customModel]);

  const renderOption = (title) => (
    <SelectItem key={title.toString()} title={title.toString()} />
  );

  return (
    <View style={{ paddingTop: 10 }}>
      <Divider style={{ backgroundColor: '#E5E4E2' }} />
      <Text style={{ fontWeight: 'bold', marginVertical: 10 }}>
        Pool Filter:
      </Text>
      <Select
        value={make}
        selectedIndex={makeIndex}
        onSelect={(index) => setMakeIndex(index)}
        label='Filter Make:'>
        {brands.map(renderOption)}
      </Select>

      {make !== 'Other' ? (
        <Select
          label='Filter Model:'
          style={{ marginTop: 10 }}
          value={displayModel}
          selectedIndex={modelIndex}
          onSelect={(index) => setModelIndex(index)}>
          {make === 'Anthony'
            ? anthonyData.map(renderOption)
            : make === 'Harmsco'
            ? harmscoData.map(renderOption)
            : make === 'Hayward'
            ? haywardData.map(renderOption)
            : make === 'Jacuzzi'
            ? jacuzziData.map(renderOption)
            : make === 'Jandy'
            ? jandyData.map(renderOption)
            : make === 'Pac-Fab'
            ? pacfabData.map(renderOption)
            : make === 'Pentair'
            ? pentairData.map(renderOption)
            : make === 'Unicel'
            ? unicelData.map(renderOption)
            : waterWayData.map(renderOption)}
        </Select>
      ) : (
        <Input
          style={{ marginTop: 10 }}
          value={customFilter}
          onChange={(e) => setCustomFilter(e.target.value)}
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

export default PoolFilter;

const styles = StyleSheet.create({});
