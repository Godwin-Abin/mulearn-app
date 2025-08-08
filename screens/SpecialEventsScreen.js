// SpecialEventsScreen.js
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Modal, Linking } from 'react-native';
import StaticHeader from '../components/StaticHeader';

const SpecialEventsScreen = ({ setIsLoggedIn }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 'top100coders',
      title: 'TOP 100 CODERS',
      tagline: 'CODE, COLLABORATE, BUILD',
      description: 'Welcome to the Top 100 Coders initiative Recognised by Kerala Govt. We\'re on a mission to recognize and empower the best coders in India. If you\'re passionate about coding and want to make a significant impact in the tech community, you\'re in the right place.',
      image: require('../assets/100coders.webp'),
      url: 'https://top100coders.com/',
    },
    {
      id: 'launchpad',
      title: 'LAUNCHPAD',
      tagline: 'KERALA',
      description: 'Launchpad Kerala 2025 is a premier job fair that brings together talented individuals and innovative companies in the technical and engineering fields.',
      image: require('../assets/launchpad.webp'),
      url: 'https://launchpadkerala.org/',
    },
    {
      id: 'trivialideas',
      title: 'Trivial Ideas',
      tagline: 'Innovation Hub',
      description: 'Welcome to Trivial Ideas, where great innovations begin. We believe that the smallest ideas can lead to the biggest breakthroughs. Join our community of thinkers, creators, and innovators. Have an idea that\'s out-of-the-box crazy? This is your chance to turn it into a real product!',
      image: require('../assets/trivialideas.webp'),
      url: 'https://www.instagram.com/mulearn.official/p/C6eHEzJyMMn/',
    }
  ];

  const handleReadMore = (event) => {
    setSelectedEvent(event);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedEvent(null);
  };

  const handleExploreMore = async () => {
    if (selectedEvent?.url) {
      try {
        const supported = await Linking.canOpenURL(selectedEvent.url);
        if (supported) {
          await Linking.openURL(selectedEvent.url);
        } else {
          console.log(`Cannot open URL: ${selectedEvent.url}`);
        }
      } catch (error) {
        console.error('Error opening URL:', error);
      }
    }
    closeModal();
  };

  return (
    <View style={styles.container}>
      <StaticHeader title="Manager" setIsLoggedIn={setIsLoggedIn} />
      <ScrollView style={styles.scrollContent}>
        {/* Special Events Header */}
        <View style={styles.headerSection}>
          <Text style={styles.mainTitle}>Special Events</Text>
          <Text style={styles.description}>
            Discover exclusive events designed to inspire innovation, enhance skills, and foster meaningful connections across technology, management, and creativity.
          </Text>
        </View>

        {/* Event Cards */}
        {events.map((event) => (
          <View key={event.id} style={styles[`${event.id}Card`]}>
            <Image 
              source={event.image} 
              style={styles.cardImage}
              resizeMode="cover"
            />
            <TouchableOpacity 
              style={styles.readMoreButton}
              onPress={() => handleReadMore(event)}
            >
              <Text style={styles.readMoreText}>Read More</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Modal Popup */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Header Section */}
            <View style={styles.modalHeader}>
              <View style={styles.headerContent}>
                <View style={styles.titleContainer}>
                  <Text style={styles.modalTitle}>{selectedEvent?.title}</Text>
                  <Text style={styles.modalTagline}>{selectedEvent?.tagline}</Text>
                </View>
                <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                  <Text style={styles.closeButtonText}>✕</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Body Section */}
            <View style={styles.modalBody}>
              <Text style={styles.modalDescription}>
                {selectedEvent?.description}
              </Text>
              <TouchableOpacity style={styles.exploreButton} onPress={handleExploreMore}>
                <Text style={styles.exploreButtonText}>Explore More</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#f5f8ff',
  },
  scrollContent: {
    padding: 16,
  },
  headerSection: {
    marginBottom: 24,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#4264ff',
    lineHeight: 22,
  },
  
  // Card Styles
  top100codersCard: {
    backgroundColor: '#1a1a2e',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  launchpadCard: {
    backgroundColor: '#000',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  trivialideasCard: {
    backgroundColor: '#e8f4fd',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  
  // Common Button Style
  readMoreButton: {
    backgroundColor: '#4264ff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    margin: 16,
  },
  readMoreText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 20,
    maxWidth: 400,
    width: '90%',
    overflow: 'hidden',
  },
  modalHeader: {
    backgroundColor: '#1a1a2e',
    padding: 20,
    position: 'relative',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  titleContainer: {
    flex: 1,
  },
  modalTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffd700',
    textShadowColor: '#4264ff',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginBottom: 4,
  },
  modalTagline: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
  },
  closeButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalBody: {
    padding: 20,
    backgroundColor: '#fff',
  },
  modalDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 20,
  },
  exploreButton: {
    backgroundColor: '#4264ff',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  exploreButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SpecialEventsScreen;
