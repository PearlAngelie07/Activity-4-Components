import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button, Menu, Divider, PaperProvider } from "react-native-paper";

//MENU

export default function component9() {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>
      <View style={styles.container}>
      <View style={styles.menu1}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button mode='outlined' onPress={openMenu}>Show menu</Button>}
        >
          <Menu.Item onPress={() => {}} title="Open" />
          <Menu.Item onPress={() => {}} title="Delete" />
          <Menu.Item onPress={() => {}} title="Rename" />
        </Menu>
      </View>
      <View style={styles.menu2}>
        <Menu.Item leadingIcon="redo" onPress={() => {}} title="Redo" />
        <Menu.Item leadingIcon="undo" onPress={() => {}} title="Undo" />
        <Menu.Item
          leadingIcon="content-cut"
          onPress={() => {}}
          title="Cut"
          disabled
        />
        <Menu.Item
          leadingIcon="content-copy"
          onPress={() => {}}
          title="Copy"
          disabled
        />
        <Menu.Item
          leadingIcon="content-paste"
          onPress={() => {}}
          title="Paste"
        />
      </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        flexDirection: 'row',
        gap: 100,
        padding: 20,
    },

  menu1: {
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginLeft:10,
  },
  menu2: {
    alignSelf: 'flex-end',
    elevation: 10,
  },
});
