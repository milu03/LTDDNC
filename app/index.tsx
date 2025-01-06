import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Index() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false); // Chuyển sang trang Homepage sau 10 giây
    }, 10000);
    return () => clearTimeout(timer); // Dọn dẹp bộ hẹn giờ
  }, []);

  if (showIntro) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
        <Text style={styles.text}>Chào mừng! Tôi là Nguyễn Minh Luân.</Text>
        <Text style={styles.subtext}>Hãy đợi 10 giây để đến Homepage!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Đây là Trang Homepage!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  subtext: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
});

