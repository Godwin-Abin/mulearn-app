// HomeScreen.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import StaticHeader from '../components/StaticHeader';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StaticHeader title="Manager" />
      <ScrollView style={styles.scrollContent}>
        <View style={styles.bannerCard}>
          <Text style={styles.bannerTitle}>Welcome User 👋</Text>
          <Text style={styles.bannerText}>
            This dashboard is being updated. Expect improvements and possible bugs. Thanks for your patience!
          </Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.bannerButton}><Text style={styles.bannerButtonText}>Start Learning</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bannerButtonOutline}><Text style={styles.bannerButtonOutlineText}>Join Learning</Text></TouchableOpacity>
          </View>
        </View>

        {/* Learning Circles */}
        <Text style={styles.sectionTitle}>Learning Circles</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Product and analytics</Text>
          <Text style={styles.cardSubtitle}>Product and analytics Hosted by Angel Rose</Text>
          <View style={styles.badgeRow}>
            <View style={styles.badge}><Text style={styles.badgeText}>Product Management</Text></View>
            <View style={styles.badgeOutline}><Text style={styles.badgeOutlineText}>⚡ Offline</Text></View>
          </View>
          <TouchableOpacity style={styles.viewDetails}><Text style={styles.viewDetailsText}>View Details</Text></TouchableOpacity>
        </View>

        {/* Karma Earners */}
        <Text style={styles.sectionTitle}>Karma Earners</Text>
        <View style={[styles.karmaCard, { backgroundColor: '#E6F7F8' }]}>        
          <Text style={styles.karmaTitle}>Highest Karma Earner (Student)</Text>
          <Text style={styles.karmaText}>Ebin Reji</Text>
          <Text style={styles.karmaText}>ebinreji@mulearn</Text>
          <Text style={styles.karmaLink}>Karma : 17231</Text>
        </View>
        <View style={[styles.karmaCard, { backgroundColor: '#E9F3E9' }]}>        
          <Text style={styles.karmaTitle}>Highest Karma Earner (College/Organisation)</Text>
          <Text style={styles.karmaText}>IEEE</Text>
          <Text style={styles.karmaLink}>Karma: 143617</Text>
        </View>

        {/* Interest Groups */}
        <View style={styles.interestHeaderRow}>
          <Text style={styles.sectionTitle}>Interest groups in manager</Text>
          <Text style={styles.showMore}>Show more &gt;</Text>
        </View>

        <View style={styles.interestCard}>
          <Image source={require('../assets/product.webp')} style={styles.interestImage} />
          <Text style={styles.interestText}>PRODUCT MANAGEMENT ➤</Text>
        </View>
        <View style={styles.interestCard}>
          <Image source={require('../assets/marketing.webp')} style={styles.interestImage} />
          <Text style={styles.interestText}>DIGITAL MARKETING ➤</Text>
        </View>
      </ScrollView>
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
  bannerCard: {
    backgroundColor: '#4264ff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },
  bannerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  bannerText: { color: '#fff', marginTop: 8 },
  buttonRow: { flexDirection: 'row', marginTop: 12 },
  bannerButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  bannerButtonText: { color: '#4264ff', fontWeight: 'bold' },
  bannerButtonOutline: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  bannerButtonOutlineText: { color: 'white', fontWeight: 'bold' },

  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  cardTitle: { fontSize: 16, fontWeight: 'bold' },
  cardSubtitle: { color: '#666', marginVertical: 6 },
  badgeRow: { flexDirection: 'row', gap: 10, marginVertical: 8 },
  badge: {
    backgroundColor: '#B2F2BB',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  badgeText: { color: '#2b8a3e' },
  badgeOutline: {
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  badgeOutlineText: { color: '#888' },
  viewDetails: {
    backgroundColor: '#4264ff',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  viewDetailsText: { color: 'white', textAlign: 'center' },

  karmaCard: {
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  karmaTitle: { fontWeight: 'bold', fontSize: 14 },
  karmaText: { marginVertical: 2 },
  karmaLink: { color: '#4264ff', fontWeight: '600' },

  interestHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  showMore: {
    color: '#4264ff',
    fontSize: 13,
  },
  interestCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  interestImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  interestText: {
    fontWeight: 'bold',
    flexShrink: 1,
  },
});

export default HomeScreen;
