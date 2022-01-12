import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Select,
  SelectItem,
  IndexPath,
  Divider,
  Input,
} from '@ui-kitten/components';

const PoolCleaner = (props) => {
  const [makeIndex, setMakeIndex] = useState(new IndexPath(0));
  const [modelIndex, setModelIndex] = useState(new IndexPath(0));
  const [make, setMake] = useState('Aqua Products');
  const [customCleaner, setCustomCleaner] = useState('');
  const [customModel, setCustomModel] = useState('');
  //   const displayMake = brands[makeIndex.row];

  const brands = [
    'Aqua Products',
    'Hayward',
    'Jandy',
    'Paramount',
    'Pentair',
    'Polaris',
    'Other',
  ];

  const aquaproductsData = [
    'AquaBot AB',
    'AquaBot Apex Revive',
    'AquaBot Bravo',
    'AquaBot Classic',
    'AquaBot Fury',
    'AquaBot Junior',
    'AquaBot Turbo',
    'AquaBot Viva',
    'AquaMAX',
    'AquaMAX X1',
    'AquaMAX X2',
    'AquaMAX X3',
    'Breeze 4WD',
    'Breeze XLS',
    'DuraMAX',
    'DuraMAX BiTurbo T2',
    'DuraMAX BiTurbo T-RC',
    'DuraMAX Duo',
    'DuraMAX Duo Junior',
    'DuraMAX Junior T-RC',
    'DuraMAX RC',
    'DuraMAX Trio',
    'EcoJet Essential',
    'EcoJet Plus',
    'EcoJet Turbo',
    'EcoTrak Turbo',
    'Gemini',
    'Icon XI',
    'JetMAX',
    'JetMAX F24',
    'JetMAX Junior',
    'JetMAX Turbo',
    'JetMAX Ultra',
    'Magnum',
    'Magnum Junior',
    'Mamba',
    'Pool Rover Hybrid',
    'Pool Rover Junior',
    'Pool Rover S2-40',
    'Pool Rover S2-50',
    'Pool Rover Sport',
    'Pura 4X',
    'Pura 5X',
    'Rapids 4WD',
    'Rapids XLS',
    'Supreme',
    'Turbo T',
    'Turbo T2',
    'Turbo T4RC',
    'Turbo T-Jet',
    'UltraMAX',
    'UltraMAX XL',
    'Xtreme',
    'Other',
  ];

  const haywardData = [
    'AquaBug',
    'AquaDroid',
    'AquaNaut 200',
    'AquaNaut 400',
    'AquaNaut 450',
    'AquaVac 500',
    'AquaVac KingShark 2',
    'Diver Dave',
    'DV 5000',
    'Hayward Blu',
    'Navigator',
    'Navigator Pro',
    'Navigator V-Flex',
    'Phantom',
    'Phantom Turbo',
    'Phoenix 2X',
    'Phoenix 4X',
    'PoolVac Classic',
    'PoolVac Ultra',
    'PoolVac V-Flex',
    'PoolVac XL',
    'SharkVAC',
    'SharkVAC XL',
    'The PoolCleaner 2X',
    'The PoolCleaner 4X',
    'TigerShark',
    'TigerShark 2',
    'TigerShark 2 Plus',
    'TigerShark Plus',
    'TigerShark QC',
    'TriVac 500',
    'TriVac 700',
    'VIIO Turbo',
    'Viper',
    'W530 Leaf Canister',
    'W560 Leaf Canister',
    'Wanda The Whale',
    'Other',
  ];

  const jandyData = [
    'Baracuda G2',
    'Baracuda G3',
    'Baracuda Pacer',
    'Baracuda Ranger',
    'Baracuda X7 Quattro',
    'Baracuda Zoom',
    'MX8',
    'MX8 Elite',
    'Polaris 140',
    'Polaris 145',
    'Polaris 160',
    'Polaris 165',
    'Polaris 180',
    'Polaris 280',
    'Polaris 280 Black Max',
    'Polaris 340 Black Max',
    'Polaris 360',
    'Polaris 360 Black Max',
    'Polaris 380',
    'Polaris 380 Black Max',
    'Polaris 3900 Sport',
    'Polaris 480 Pro',
    'Polaris 60',
    'Polaris 65',
    'Polaris 9300 Sport',
    'Polaris 9300xi Sport',
    'Polaris 9350 Sport',
    'Polaris 9400 Sport',
    'Polaris 9450 Sport',
    'Polaris 9550 Sport',
    'Polaris 9650iQ Sport',
    'Polaris ATV',
    'Polaris P38',
    'Polaris P39',
    'Polaris P825',
    'Polaris P945',
    'Polaris P955',
    'Polaris Raptor',
    'Polaris Turbo Turtle',
    'Ray-Vac',
    'Ray-Vac Desert Model',
    'Zodiac Baracuda Automatic Suction Inground Swimming Pool Cleaner w/Hoses MX6',
    'Zodiac Cyclonic Leaf Catcher',
    'Zodiac MX6',
    'Zodiac MX8',
    'Zodiac Ranger',
    'Zodiac T3',
    'Zodiac T5 Duo',
    'Zodiac Wahoo',
  ];

  const paramountData = ['Infloor 6 Port Gear Box', 'Other'];

  const pentairData = [
    'Great White',
    'Jet Vac JV105',
    'Kreepy Kadet',
    'Kreepy Krauly 1993 &amp; Prior Model',
    'Kreepy Krauly 1994-1999 Model',
    'Kreepy Krauly 2000 Model',
    'Kreepy Krauly Legend II LX2000',
    'Kreepy Krauly Legend II LX5000G',
    'Kreepy Krauly Legend LL505G',
    'Kreepy Krauly Platinum LL505PMG',
    'Kreepy Krauly Platinum LL50PMG',
    'Kreepy Krauly Prowler 920',
    'Kreepy Krauly SandShark',
    'Kreepy Krauly Warrior',
    'Kreepy Kruiser',
    'Legend 3-Wheel',
    'Legend 4-Wheel LL105',
    'Lil Shark',
    'Model 179 Leaf Canister',
    'Model 180 Leaf Canister',
    'Model 186 Leaf Canister',
    'PoolShark',
    'Prowler 710',
    'Prowler 720',
    'Prowler 730',
    'Prowler 820',
    'Prowler 830',
    'Prowler 920',
    'Prowler 930',
    'Racer',
    'Rebel',
    'Vac-Mate',
    'Warrior',
    'Other',
  ];

  const polarisData = [
    '165',
    '180',
    '280 Black Max',
    '360 Black Max',
    '7240 Sport',
    '8050 Sport',
    '9350 Sport',
    '9450 Sport',
    '9550 Sport',
    '9650iQ Sport',
    'Quattro Sport',
    'TR28P',
    'TR35P',
    'TR36P',
    'Turbo Turtle',
    'Vac-Sweep 280',
    'Vac-Sweep 360',
    'Vac-Sweep 380',
    'Vac-Sweep 3900 Sport',
    'Vac-Sweep 65',
    'Other',
  ];

  let displayModel =
    make.toString() === 'Aqua Products'
      ? aquaproductsData[modelIndex.row]
      : make === 'Hayward'
      ? haywardData[modelIndex.row]
      : make === 'Jandy'
      ? jandyData[modelIndex.row]
      : make === 'Paramount'
      ? paramountData[modelIndex.row]
      : make === 'Pentair'
      ? pentairData[modelIndex.row]
      : polarisData[modelIndex.row];

  useEffect(() => {
    setModelIndex(new IndexPath(0));
  }, [make]);

  useEffect(() => {
    setMake(brands[makeIndex.row]);
  }, [makeIndex]);

  useEffect(() => {
    if (make.toString() === 'Other') {
      props.setCleanerInfo(customCleaner);
    } else if (displayModel === 'Other') {
      props.setCleanerInfo(`${make} ${customModel}`);
    } else {
      props.setCleanerInfo(`${make} ${displayModel}`);
    }
  }, [displayModel, make, customCleaner, customModel]);

  const renderOption = (title) => (
    <SelectItem key={title.toString()} title={title.toString()} />
  );

  return (
    <View style={{ paddingTop: 10 }}>
      <Divider style={{ backgroundColor: '#E5E4E2' }} />
      <Text style={{ fontWeight: 'bold', marginVertical: 10 }}>
        Pool Cleaner:
      </Text>
      <Select
        value={make}
        selectedIndex={makeIndex}
        onSelect={(index) => setMakeIndex(index)}
        label='Cleaner Make:'>
        {brands.map(renderOption)}
      </Select>

      {make !== 'Other' ? (
        <Select
          label='Cleaner Model:'
          style={{ marginTop: 10 }}
          value={displayModel}
          selectedIndex={modelIndex}
          onSelect={(index) => setModelIndex(index)}>
          {make === 'Aqua Products'
            ? aquaproductsData.map(renderOption)
            : make === 'Hayward'
            ? haywardData.map(renderOption)
            : make === 'Jandy'
            ? jandyData.map(renderOption)
            : make === 'Paramount'
            ? paramountData.map(renderOption)
            : make === 'Pentair'
            ? pentairData.map(renderOption)
            : polarisData.map(renderOption)}
        </Select>
      ) : (
        <Input
          style={{ marginTop: 10 }}
          value={customCleaner}
          onChange={(e) => setCustomCleaner(e.target.value)}
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

export default PoolCleaner;

const styles = StyleSheet.create({});
