import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';

//SNACK BAR

const SnackbarExample = () => {
  const [visible, setVisible] = React.useState(false);

  const showSnackbar = () => {
    setVisible(true);
  };

  const hideSnackbar = () => {
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button onPress={showSnackbar}>Show Snackbar</Button>
      <Snackbar
        visible={visible}
        onDismiss={hideSnackbar}
        action={{
          label: 'UNDO',
          onPress: () => {
            hideSnackbar();
          },
        }}
        duration={Snackbar.DURATION_SHORT}
        style={styles.snackbar}
      >
        This is a Snackbar message.
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  snackbar: {
    backgroundColor: '#007bff', 
    borderRadius: 10,
  },
});

export default SnackbarExample;
