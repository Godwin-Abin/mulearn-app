import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import StaticHeader from '../components/StaticHeader';

const LeaderboardScreen = ({ setIsLoggedIn }) => {
  const [activeTab, setActiveTab] = useState('monthly');
  const [activeFilter, setActiveFilter] = useState('student');
  const [showDropdown, setShowDropdown] = useState(false);

  // Different data for different filter types and tabs
  const studentData = {
    monthly: {
      topPerformers: [
        {
          name: 'Niranj R',
          karma: '4,302',
          rank: 1,
          badge: 'Diamond',
          badgeColor: '#4264ff',
          avatar: require('../assets/avatar.jpg')
        },
        {
          name: 'Abhinav P',
          karma: '3,572',
          rank: 2,
          badge: 'Gold',
          badgeColor: '#fbbf24',
          avatar: require('../assets/avatar.jpg')
        },
        {
          name: 'Fathima Mahruban',
          karma: '2,820',
          rank: 3,
          badge: 'Silver',
          badgeColor: '#9ca3af',
          avatar: require('../assets/avatar.jpg')
        }
      ],
      rankedList: [
        { rank: 4, name: 'Alan Varghese', karma: '2,500' },
        { rank: 5, name: 'Abin Philip', karma: '2,100' },
        { rank: 6, name: 'Athul Sabu', karma: '2,000' },
        { rank: 7, name: 'Sujeena Mol.', karma: '1,800' },
        { rank: 8, name: 'Devika S', karma: '1,700' },
        { rank: 9, name: 'Niranjana KS', karma: '1,651' },
        { rank: 10, name: 'Sidhardh C R', karma: '1,600' },
        { rank: 11, name: 'Devika Subhash', karma: '1,600' }
      ]
    },
    overall: {
      topPerformers: [
        {
          name: 'K H Arjun',
          karma: '52,648',
          rank: 1,
          badge: 'Gold',
          badgeColor: '#fbbf24',
          avatar: require('../assets/avatar.jpg')
        },
        {
          name: 'Arjun C Vinod',
          karma: '53,836',
          rank: 2,
          badge: 'Diamond',
          badgeColor: '#4264ff',
          avatar: require('../assets/avatar.jpg')
        },
        {
          name: 'Agnivesh P S',
          karma: '51,200',
          rank: 3,
          badge: 'Silver',
          badgeColor: '#9ca3af',
          avatar: require('../assets/avatar.jpg')
        }
      ],
      rankedList: [
        { rank: 4, name: 'Niranj R', karma: '46,930' },
        { rank: 5, name: 'Vedha Mahadevan', karma: '46,412' },
        { rank: 6, name: 'Adhithya Mohan', karma: '45,800' },
        { rank: 7, name: 'Edwin Alex Shaji', karma: '45,200' },
        { rank: 8, name: 'V.S. SABARINATH', karma: '44,500' },
        { rank: 9, name: 'Sradhya Renish', karma: '43,800' },
        { rank: 10, name: 'Aaron S Varghese', karma: '43,200' },
        { rank: 11, name: 'Jenin Joseph', karma: '42,600' }
      ]
    }
  };

  const campusData = {
    monthly: {
      topPerformers: [
        {
          name: 'SJC',
          karma: '15,361',
          rank: 1,
          badge: 'Gold',
          badgeColor: '#fbbf24',
          avatar: require('../assets/avatar.jpg')
        },
        {
          name: 'AWH',
          karma: '16,026',
          rank: 2,
          badge: 'Diamond',
          badgeColor: '#4264ff',
          avatar: require('../assets/avatar.jpg')
        },
        {
          name: 'SCTCE',
          karma: '13,943',
          rank: 3,
          badge: 'Silver',
          badgeColor: '#9ca3af',
          avatar: require('../assets/avatar.jpg')
        }
      ],
      rankedList: [
        { rank: 4, name: 'MBT', karma: '12,500' },
        { rank: 5, name: 'IDK', karma: '12,253' },
        { rank: 6, name: 'LBT', karma: '11,052' },
        { rank: 7, name: 'STI', karma: '10,997' },
        { rank: 8, name: 'VJC', karma: '10,991' },
        { rank: 9, name: 'MESCAS', karma: '8,699' },
        { rank: 10, name: 'SBC', karma: '7,618' },
        { rank: 11, name: 'CHN', karma: '6,435' }
      ]
    },
    overall: {
      topPerformers: [
        {
          name: 'Mar Baselios College of Engineering and Technology',
          karma: '3,255,047',
          rank: 1,
          badge: 'Diamond',
          badgeColor: '#4264ff',
          avatar: require('../assets/avatar.jpg')
        },
        {
          name: 'ST JOSEPHS COLLEGE OF ENGINEERING AND TECHNOLOGY PALAI',
          karma: '2,296,753',
          rank: 2,
          badge: 'Gold',
          badgeColor: '#fbbf24',
          avatar: require('../assets/avatar.jpg')
        },
        {
          name: 'MARIAN ENGINEERING COLLEGE',
          karma: '1,048,165',
          rank: 3,
          badge: 'Silver',
          badgeColor: '#9ca3af',
          avatar: require('../assets/avatar.jpg')
        }
      ],
      rankedList: [
        { rank: 4, name: 'AWH ENGINEERING COLLEGE', karma: '745,679' },
        { rank: 5, name: 'COLLEGE OF ENGINEERING PATHANAPURAM', karma: '714,991' },
        { rank: 6, name: 'COLLEGE OF ENGINEERING ARANMULA', karma: '633,878' },
        { rank: 7, name: 'GOVERNMENT ENGINEERING COLLEGE THRISSUR', karma: '580,000' },
        { rank: 8, name: 'COLLEGE OF ENGINEERING TRIVANDRUM', karma: '520,000' },
        { rank: 9, name: 'UNIVERSITY COLLEGE OF ENGINEERING', karma: '480,000' },
        { rank: 10, name: 'COLLEGE OF ENGINEERING CHENGANNUR', karma: '450,000' },
        { rank: 11, name: 'GOVERNMENT ENGINEERING COLLEGE WAYANAD', karma: '420,000' }
      ]
    }
  };

  const zonalData = {
    monthly: {
      topPerformers: [
        {
          name: 'ST JOSEPHS COLLEGE OF ENGINEERING AND TECHNOLOGY PALAI',
          karma: '8,750',
          rank: 1,
          badge: 'Gold',
          badgeColor: '#fbbf24',
          avatar: require('../assets/avatar.jpg')
        },
        {
          name: 'Mar Baselios College of Engineering and Technology',
          karma: '33,250',
          rank: 2,
          badge: 'Diamond',
          badgeColor: '#4264ff',
          avatar: require('../assets/avatar.jpg')
        },
        {
          name: 'COLLEGE OF ENGINEERING CHENGANNUR',
          karma: '6,400',
          rank: 3,
          badge: 'Silver',
          badgeColor: '#9ca3af',
          avatar: require('../assets/avatar.jpg')
        }
      ],
      rankedList: [
        { rank: 4, name: 'NEHRU COLLEGE OF ENGINEERING AND RESEARCH CENTRE', karma: '6,000' },
        { rank: 5, name: 'COLLEGE OF ENGINEERING TRIVANDRUM', karma: '4,850' },
        { rank: 6, name: 'GOVERNMENT ENGINEERING COLLEGE THRISSUR', karma: '4,750' }
      ]
    },
    overall: {
      topPerformers: [
        {
          name: 'Central',
          karma: '35,150',
          rank: 1,
          badge: 'Gold',
          badgeColor: '#fbbf24',
          avatar: require('../assets/avatar.jpg')
        },
        {
          name: 'South',
          karma: '68,100',
          rank: 2,
          badge: 'Diamond',
          badgeColor: '#4264ff',
          avatar: require('../assets/avatar.jpg')
        },
        {
          name: 'North',
          karma: '31,100',
          rank: 3,
          badge: 'Silver',
          badgeColor: '#9ca3af',
          avatar: require('../assets/avatar.jpg')
        }
      ],
      rankedList: [
        { rank: 4, name: 'East Zone', karma: '28,500' },
        { rank: 5, name: 'West Zone', karma: '25,200' },
        { rank: 6, name: 'North East Zone', karma: '22,800' }
      ]
    }
  };

  const filterOptions = [
    { key: 'student', label: 'Student' },
    { key: 'campus', label: 'Campus' },
    { key: 'zonal', label: 'Zonal' }
  ];

  const getCurrentData = () => {
    let data;
    switch (activeFilter) {
      case 'student':
        data = studentData;
        break;
      case 'campus':
        data = campusData;
        break;
      case 'zonal':
        data = zonalData;
        break;
      default:
        data = studentData;
    }
    
    return data[activeTab] || data.monthly;
  };

  const currentData = getCurrentData();

  const getFilterLabel = () => {
    const option = filterOptions.find(opt => opt.key === activeFilter);
    return option ? option.label : 'Student';
  };

  const getColumnHeader = () => {
    const timeFrame = activeTab === 'overall' ? 'Overall' : 'Monthly';
    switch (activeFilter) {
      case 'student':
        return `${timeFrame} Karma`;
      case 'campus':
        return `${timeFrame} Karma`;
      case 'zonal':
        return `${timeFrame} Karma`;
      default:
        return `${timeFrame} Karma`;
    }
  };

  return (
    <View style={styles.container}>
      <StaticHeader title="Leaderboard" setIsLoggedIn={setIsLoggedIn} />
      <ScrollView style={styles.scrollContent}>
        {/* Main Container */}
        <View style={styles.mainContainer}>
          {/* Tabs */}
          <View style={styles.tabContainer}>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'monthly' && styles.activeTab]} 
              onPress={() => setActiveTab('monthly')}
            >
              <Text style={[styles.tabText, activeTab === 'monthly' && styles.activeTabText]}>Monthly</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.tab, activeTab === 'overall' && styles.activeTab]} 
              onPress={() => setActiveTab('overall')}
            >
              <Text style={[styles.tabText, activeTab === 'overall' && styles.activeTabText]}>Overall</Text>
            </TouchableOpacity>
          </View>

          {/* Filter Dropdown */}
          <View style={styles.dropdownContainer}>
            <TouchableOpacity 
              style={styles.dropdownButton}
              onPress={() => setShowDropdown(!showDropdown)}
            >
              <Text style={styles.dropdownText}>{getFilterLabel()}</Text>
              <Text style={[styles.dropdownIcon, showDropdown && styles.dropdownIconRotated]}>▼</Text>
            </TouchableOpacity>
            
            {showDropdown && (
              <View style={styles.dropdownMenu}>
                {filterOptions.map((option) => (
                  <TouchableOpacity
                    key={option.key}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setActiveFilter(option.key);
                      setShowDropdown(false);
                    }}
                  >
                    <Text style={[
                      styles.dropdownItemText,
                      activeFilter === option.key && styles.dropdownItemTextActive
                    ]}>
                      {option.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Top Performers */}
          <View style={styles.topPerformersContainer}>
            {currentData.topPerformers.map((performer, index) => (
              <View key={index} style={styles.performerCard}>
                <Text style={styles.trophyIcon}>🏆</Text>
                <Image source={performer.avatar} style={styles.performerAvatar} />
                <Text style={styles.performerName} numberOfLines={2}>{performer.name}</Text>
                <Text style={styles.performerKarma}>{performer.karma} Karma pts</Text>
                <View style={[styles.badge, { backgroundColor: performer.badgeColor }]}>
                  <Text style={styles.badgeText}>{performer.badge}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Ranked List Header */}
          <View style={styles.listHeader}>
            <Text style={styles.headerText}>Rank</Text>
            <Text style={styles.headerText}>Name</Text>
            <Text style={styles.headerText}>{getColumnHeader()}</Text>
          </View>

          {/* Ranked List */}
          <View style={styles.rankedList}>
            {currentData.rankedList.map((item, index) => (
              <View key={index} style={styles.listItem}>
                <Text style={styles.rankText}>{item.rank}</Text>
                <View style={styles.nameContainer}>
                  <Image source={require('../assets/avatar.jpg')} style={styles.listAvatar} />
                  <Text style={styles.nameText} numberOfLines={2}>{item.name}</Text>
                </View>
                <View style={styles.karmaContainer}>
                  <Text style={styles.karmaText}>{item.karma}</Text>
                  <Text style={styles.trendIcon}>↗</Text>
                </View>
              </View>
            ))}
          </View>
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
  mainContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#4264ff',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#4264ff',
    fontWeight: 'bold',
  },
  dropdownContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownIcon: {
    fontSize: 12,
    color: '#666',
  },
  dropdownIconRotated: {
    transform: [{ rotate: '180deg' }],
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    marginTop: 4,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    zIndex: 1000,
  },
  dropdownItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownItemTextActive: {
    color: '#4264ff',
    fontWeight: 'bold',
  },
  topPerformersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  performerCard: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 8,
  },
  trophyIcon: {
    position: 'absolute',
    top: -5,
    right: 10,
    fontSize: 16,
    zIndex: 1,
  },
  performerAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  performerName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 4,
    maxWidth: 100,
  },
  performerKarma: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  listHeader: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 8,
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
  },
  rankedList: {
    gap: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  rankText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    width: 40,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  listAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  nameText: {
    fontSize: 14,
    color: '#000',
    flex: 1,
    maxWidth: 200,
  },
  karmaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  karmaText: {
    fontSize: 14,
    color: '#000',
    marginRight: 4,
  },
  trendIcon: {
    fontSize: 12,
    color: '#22c55e',
  },
});

export default LeaderboardScreen;