import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { List, MD3Colors } from "react-native-paper";

//LIST

export default function component8() {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={styles.container}>
      <List.Section title="List Accordions">
        <List.Accordion
          title="Subjects"
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="Math" />
          <List.Item title="English" />
        </List.Accordion>

        <List.Accordion
          title="Pets"
          left={(props) => <List.Icon {...props} icon="folder" />}
          expanded={expanded}
          onPress={handlePress}
        >
          <List.Item title="Dog" />
          <List.Item title="Cat" />
        </List.Accordion>
      </List.Section>
      <Text>
        ------------------------------------------------------------------------------------------------------------
      </Text>
      <View>
      <List.Section title="List Item">
        <List.Item
          title="Image"
          description="Item description"
          left={(props) => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="Video"
          description="Item description"
          left={(props) => <List.Icon {...props} icon="folder" />}
        />
        </List.Section>
      </View>
      <Text>
        ------------------------------------------------------------------------------------------------------------
      </Text>
      <View style={styles.icons}>
      <List.Section title="List Icon">
        <List.Icon color={MD3Colors.tertiary70} icon="folder" />
        <List.Icon color={MD3Colors.tertiary70} icon="equal" />
        <List.Icon color={MD3Colors.tertiary70} icon="calendar" />
        </List.Section>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingLeft: 20,
        paddingRight:20,
    },
    icons: {
        gap: 10,
        alignSelf: 'flex-start',
      },
    },
  );
