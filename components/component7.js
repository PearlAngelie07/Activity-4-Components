import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Dialog, Portal, Button } from "react-native-paper";

//DIALOG

export default function component4() {
  const [visible, showVisible] = React.useState(false);
  const showDialog = () => showVisible(true);
  const hideDialog = () => showVisible(false);

  return (
    <View style={styles.container}>
      <Button title="Click here" mode="contained-tonal" onPress={showDialog}>
        Show Dialog
      </Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>MISSION</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">
            BISU is committed to provide quality higher education in the arts and sciences, as well as in the professional and
             technological fields; undertake research and development, and extension services for the sustainable development of Bohol and the country.
            </Text>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 10,
      paddingTop:10,
      justifyContent:'center',
      alignSelf:'center'
    },
  });
