import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Select,
  SelectItem,
  SelectGroup,
  IndexPath,
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

  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0, 1));
  const displayValue =
    selectedIndex === 0
      ? anthonyData[selectedIndex.row]
      : aquaFloData[selectedIndex.row];

  const renderOption = (title) => <SelectItem key={title} title={title} />;

  return (
    <View style={{ paddingTop: 10 }}>
      <Select
        label='Pool Pump:'
        style={styles.select}
        placeholder='Default'
        value={displayValue}
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}>
        <SelectGroup title='Anthony'>
          {anthonyData.map(renderOption)}
        </SelectGroup>
        <SelectGroup title='Aqua-Flo'>
          {aquaFloData.map(renderOption)}
        </SelectGroup>
      </Select>
    </View>
  );
};

export default PoolPump;

const styles = StyleSheet.create({});
