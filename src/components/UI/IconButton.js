import { Pressable, StyleSheet, Text, View } from 'react-native';

function IconButton({ onPress, children, color }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.buttonContainer}>
        <Text style={{ color: color, marginRight: 20, fontSize: 20 }}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    margin: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default IconButton;
