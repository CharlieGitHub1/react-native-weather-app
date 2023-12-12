import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    marginHorizontal: 16,
    marginVertical: 2,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: '#b8c2d4',
    backgroundColor: 'transparent',
    borderRadius: 4,
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.09,
    shadowRadius: 6,
  },
});

export default SearchBar;
