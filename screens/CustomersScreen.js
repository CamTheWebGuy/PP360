import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  Divider,
  List,
  ListItem,
  BottomNavigation,
  BottomNavigationTab,
} from '@ui-kitten/components';

import { Ionicons } from '@expo/vector-icons';

const CustomersScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const data = [
    { title: 'Rachel West', description: '650 Depaul Dr' },
    { title: 'Troy Miller', description: '1249 Blossom Hill Rd' },
    { title: 'Peter Crawford', description: '9738 Adams St' },
    { title: 'Shannon Hopkins', description: '2773 James St' },
    { title: 'Russell Hill', description: '9883 Cackson St' },
    { title: 'Charlene Fernandez', description: '6902 Locust Rd' },
    { title: 'Craig Martin', description: '5983 Nowlin Rd' },
  ];
  const renderArrow = () => (
    <Ionicons name='chevron-forward-outline' size={22} color='gray' />
  );

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title}`}
      description={`${item.description}`}
      accessoryRight={renderArrow}
    />
  );

  return (
    <View style={styles.container}>
      {selectedIndex === 0 ? (
        <View style={{ flex: 1 }}>
          <List
            data={data}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
          />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <Text>Add Form</Text>
        </View>
      )}
      <View style={styles.btmNav}>
        <BottomNavigation
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}>
          <BottomNavigationTab
            title='CUSTOMERS'
            icon={() => <Ionicons name='people' size={22} color='gray' />}
          />
          <BottomNavigationTab
            title='ADD CUSTOMER'
            icon={() => <Ionicons name='add-circle' size={22} color='gray' />}
          />
        </BottomNavigation>
      </View>
    </View>
  );
};

export default CustomersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  btmNav: {
    height: 70,
    backgroundColor: '#fff',
  },
});
