// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native';
import StaticHeader from '../components/StaticHeader';

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState('basic');
  const [publicProfile, setPublicProfile] = useState(true);
  const [openToWork, setOpenToWork] = useState(false);
  const [openToGigs, setOpenToGigs] = useState(false);

  return (
    <View style={styles.container}>
      <StaticHeader title="Profile" />
      <ScrollView style={styles.scrollContent}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileBackground}>
            <Image source={require('../assets/planet.webp')} style={styles.backgroundImage} />
          </View>
          <View style={styles.profileContent}>
            <View style={styles.profileImageContainer}>
              <Image source={require('../assets/avatar.jpg')} style={styles.profileImage} />
              <View style={styles.verifiedBadge}>
                <Text style={styles.verifiedText}>✓</Text>
              </View>
            </View>
            <View style={styles.profileActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionIcon}>✏️</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionIcon}>📤</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.userName}>User Name</Text>
              <Text style={styles.userEmail}>user@mulearn</Text>
              <Text style={styles.userLevel}>LEVEL 2</Text>
            </View>
          </View>
        </View>

                 {/* Navigation Tabs */}
         <ScrollView 
           horizontal 
           showsHorizontalScrollIndicator={false}
           style={styles.tabContainer}
           contentContainerStyle={styles.tabContentContainer}
         >
           <TouchableOpacity 
             style={[styles.tab, activeTab === 'basic' && styles.activeTab]} 
             onPress={() => setActiveTab('basic')}
           >
             <Text style={[styles.tabText, activeTab === 'basic' && styles.activeTabText]}>Basic Details</Text>
           </TouchableOpacity>
           <TouchableOpacity 
             style={[styles.tab, activeTab === 'karma' && styles.activeTab]} 
             onPress={() => setActiveTab('karma')}
           >
             <Text style={[styles.tabText, activeTab === 'karma' && styles.activeTabText]}>Karma History</Text>
           </TouchableOpacity>
           <TouchableOpacity 
             style={[styles.tab, activeTab === 'voya' && styles.activeTab]} 
             onPress={() => setActiveTab('voya')}
           >
             <Text style={[styles.tabText, activeTab === 'voya' && styles.activeTabText]}>Mu Voyage</Text>
           </TouchableOpacity>
           <TouchableOpacity 
             style={[styles.tab, activeTab === 'achievement' && styles.activeTab]} 
             onPress={() => setActiveTab('achievement')}
           >
             <Text style={[styles.tabText, activeTab === 'achievement' && styles.activeTabText]}>Achievement</Text>
           </TouchableOpacity>
         </ScrollView>

                 {/* Tab Content */}
         {activeTab === 'basic' && (
           <>
             {/* Statistics Section */}
             <View style={styles.statsContainer}>
               <View style={styles.statsRow}>
                 <View style={styles.statItem}>
                   <Text style={styles.statIcon}>K</Text>
                   <Text style={styles.statLabel}>Karma</Text>
                   <Text style={styles.statValue}>72</Text>
                 </View>
                 <View style={styles.statItem}>
                   <Text style={styles.statIcon}>📊</Text>
                   <Text style={styles.statLabel}>Rank</Text>
                   <Text style={styles.statValue}>14040</Text>
                 </View>
               </View>
               <View style={styles.statsRow}>
                 <View style={styles.statItem}>
                   <Text style={styles.statIcon}>%</Text>
                   <Text style={styles.statLabel}>Avg.Karma/Month</Text>
                   <Text style={styles.statValue}>1.67</Text>
                 </View>
                 <View style={styles.statItem}>
                   <Text style={styles.statIcon}>📊</Text>
                   <Text style={styles.statLabel}>Percentile</Text>
                   <Text style={styles.statValue}>26.65</Text>
                 </View>
               </View>
             </View>

             {/* Interest Groups */}
             <View style={styles.section}>
               <Text style={styles.sectionTitle}>Interest Groups</Text>
               <View style={styles.interestTags}>
                 <View style={styles.interestTag}>
                   <Text style={styles.interestText}>Ai</Text>
                   <View style={styles.interestCount}>
                     <Text style={styles.interestCountText}>0</Text>
                   </View>
                 </View>
                 <View style={styles.interestTag}>
                   <Text style={styles.interestText}>Cyber Security</Text>
                   <View style={styles.interestCount}>
                     <Text style={styles.interestCountText}>0</Text>
                   </View>
                 </View>
               </View>
             </View>

             {/* Activity Calendar */}
             <View style={styles.section}>
               <Text style={styles.sectionTitle}>Activity Calendar</Text>
               <View style={styles.calendarContainer}>
                 <View style={styles.calendarHeader}>
                   <Text style={styles.calendarHeaderText}>Mon</Text>
                   <Text style={styles.calendarHeaderText}>Wed</Text>
                   <Text style={styles.calendarHeaderText}>Fri</Text>
                 </View>
                 <View style={styles.calendarGrid}>
                   {['Jan', 'Feb', 'Mar', 'Apr', 'May'].map((month, index) => (
                     <View key={index} style={styles.calendarColumn}>
                       <Text style={styles.monthText}>{month}</Text>
                       <View style={styles.dayGrid}>
                         {[1, 2, 3].map((day) => (
                           <View key={day} style={styles.dayCell} />
                         ))}
                       </View>
                     </View>
                   ))}
                 </View>
                 <View style={styles.yearSelector}>
                   <Text style={styles.yearText}>2022</Text>
                   <Text style={styles.yearText}>2023</Text>
                   <Text style={styles.yearText}>2024</Text>
                   <View style={styles.activeYear}>
                     <Text style={styles.activeYearText}>2025</Text>
                   </View>
                 </View>
               </View>
             </View>
           </>
         )}

         {activeTab === 'karma' && (
           <>
             {/* Statistics Section */}
             <View style={styles.statsContainer}>
               <View style={styles.statsRow}>
                 <View style={styles.statItem}>
                   <Text style={styles.statIcon}>K</Text>
                   <Text style={styles.statLabel}>Karma</Text>
                   <Text style={styles.statValue}>72</Text>
                 </View>
                 <View style={styles.statItem}>
                   <Text style={styles.statIcon}>📊</Text>
                   <Text style={styles.statLabel}>Rank</Text>
                   <Text style={styles.statValue}>14040</Text>
                 </View>
               </View>
               <View style={styles.statsRow}>
                 <View style={styles.statItem}>
                   <Text style={styles.statIcon}>%</Text>
                   <Text style={styles.statLabel}>Avg.Karma/Month</Text>
                   <Text style={styles.statValue}>1.67</Text>
                 </View>
                 <View style={styles.statItem}>
                   <Text style={styles.statIcon}>📊</Text>
                   <Text style={styles.statLabel}>Percentile</Text>
                   <Text style={styles.statValue}>26.65</Text>
                 </View>
               </View>
             </View>

             {/* Hide daily chat karma toggle */}
             <View style={styles.section}>
               <View style={styles.settingItem}>
                 <Text style={styles.settingText}>Hide daily chat karma</Text>
                 <Switch
                   value={openToGigs}
                   onValueChange={setOpenToGigs}
                   trackColor={{ false: '#e0e0e0', true: '#4264ff' }}
                   thumbColor={'#f4f3f4'}
                 />
               </View>
             </View>

             {/* Karma Award History */}
             <View style={styles.section}>
               <Text style={styles.sectionTitle}>Karma Award History</Text>
               <View style={styles.karmaAwardCard}>
                 <Text style={styles.karmaAwardValue}>50 κ</Text>
                 <Text style={styles.karmaAwardLabel}>Karma</Text>
                 <Text style={styles.karmaAwardReason}>#Drug Free Kerala Pledge</Text>
                 <Text style={styles.karmaAwardTime}>2 months ago</Text>
               </View>
               <View style={styles.karmaAwardCard}>
                 <Text style={styles.karmaAwardValue}>20 κ</Text>
                 <Text style={styles.karmaAwardLabel}>Karma</Text>
                 <Text style={styles.karmaAwardReason}>#Self Introduction</Text>
                 <Text style={styles.karmaAwardTime}>3 months ago</Text>
               </View>
             </View>
           </>
         )}

         {activeTab === 'voya' && (
           <>
             {/* Statistics Section */}
             <View style={styles.statsContainer}>
               <View style={styles.statsRow}>
                 <View style={styles.statItem}>
                   <Text style={styles.statIcon}>K</Text>
                   <Text style={styles.statLabel}>Karma</Text>
                   <Text style={styles.statValue}>72</Text>
                 </View>
                 <View style={styles.statItem}>
                   <Text style={styles.statIcon}>📊</Text>
                   <Text style={styles.statLabel}>Rank</Text>
                   <Text style={styles.statValue}>14040</Text>
                 </View>
               </View>
               <View style={styles.statsRow}>
                 <View style={styles.statItem}>
                   <Text style={styles.statIcon}>%</Text>
                   <Text style={styles.statLabel}>Avg.Karma/Month</Text>
                   <Text style={styles.statValue}>1.67</Text>
                 </View>
                 <View style={styles.statItem}>
                   <Text style={styles.statIcon}>📊</Text>
                   <Text style={styles.statLabel}>Percentile</Text>
                   <Text style={styles.statValue}>26.65</Text>
                 </View>
               </View>
             </View>

             {/* Level Progress */}
             <View style={styles.section}>
               <Text style={styles.sectionTitle}>Level Progress</Text>
               <View style={styles.levelProgressCard}>
                 <View style={styles.currentLevelSection}>
                   <View style={styles.levelBadge}>
                     <Text style={styles.levelBadgeText}>⭐</Text>
                   </View>
                   <View style={styles.levelInfo}>
                     <Text style={styles.levelText}>lvl2</Text>
                     <View style={styles.progressBar}>
                       <View style={styles.progressFill} />
                     </View>
                     <Text style={styles.progressText}>50/3250 Karma</Text>
                   </View>
                 </View>
                 <View style={styles.levelList}>
                   {[
                     { level: 1, karma: '20/2150', tasks: 26, completed: true },
                     { level: 2, karma: '50/3250', tasks: 19, completed: false },
                     { level: 3, karma: '0/5800', tasks: 34, completed: false },
                     { level: 4, karma: '0/34011', tasks: 142, completed: false },
                     { level: 5, karma: '0/1820', tasks: 15, completed: false },
                     { level: 6, karma: '0/5600', tasks: 8, completed: false },
                   ].map((item, index) => (
                     <View key={index} style={styles.levelItem}>
                       <Text style={styles.levelItemText}>lvl{item.level}</Text>
                       <Text style={styles.levelItemKarma}>[{item.karma}]</Text>
                       <View style={[styles.levelProgressCircle, item.completed && styles.levelProgressCompleted]} />
                       <Text style={styles.levelItemTasks}>{item.tasks} Tasks</Text>
                       <Text style={styles.levelItemChevron}>▼</Text>
                     </View>
                   ))}
                 </View>
               </View>
             </View>
           </>
         )}

         {activeTab === 'achievement' && (
           <>
             {/* Statistics Section */}
             <View style={styles.statsContainer}>
               <View style={styles.statsRow}>
                 <View style={styles.statItem}>
                   <Text style={styles.statIcon}>K</Text>
                   <Text style={styles.statLabel}>Karma</Text>
                   <Text style={styles.statValue}>72</Text>
                 </View>
                 <View style={styles.statItem}>
                   <Text style={styles.statIcon}>📊</Text>
                   <Text style={styles.statLabel}>Rank</Text>
                   <Text style={styles.statValue}>14040</Text>
                 </View>
               </View>
               <View style={styles.statsRow}>
                 <View style={styles.statItem}>
                   <Text style={styles.statIcon}>%</Text>
                   <Text style={styles.statLabel}>Avg.Karma/Month</Text>
                   <Text style={styles.statValue}>1.67</Text>
                 </View>
                 <View style={styles.statItem}>
                   <Text style={styles.statIcon}>📊</Text>
                   <Text style={styles.statLabel}>Percentile</Text>
                   <Text style={styles.statValue}>26.65</Text>
                 </View>
               </View>
             </View>

             {/* Eligible Achievements */}
             <View style={styles.section}>
               <Text style={styles.sectionTitle}>Eligible Achievements</Text>
               <View style={styles.achievementContent}>
                 <View style={styles.achievementIllustration}>
                   <Text style={styles.illustrationText}>🎨</Text>
                 </View>
                 <Text style={styles.achievementMessage}>No achievements available for you at the moment. Keep learning.</Text>
               </View>
             </View>
           </>
         )}
         <>
         {/* Profile Settings */}
         <View style={styles.section}>
               <Text style={styles.sectionTitle}>Profile Settings</Text>
               <View style={styles.settingItem}>
                 <Text style={styles.settingText}>Switch to public profile</Text>
                 <Switch
                   value={publicProfile}
                   onValueChange={setPublicProfile}
                   trackColor={{ false: '#e0e0e0', true: '#4264ff' }}
                   thumbColor={publicProfile ? '#fff' : '#f4f3f4'}
                 />
               </View>
               <View style={styles.settingItem}>
                 <Text style={styles.settingText}>Open to work</Text>
                 <Switch
                   value={openToWork}
                   onValueChange={setOpenToWork}
                   trackColor={{ false: '#e0e0e0', true: '#4264ff' }}
                   thumbColor={openToWork ? '#fff' : '#f4f3f4'}
                 />
               </View>
               <View style={styles.settingItem}>
                 <Text style={styles.settingText}>Open to gigs</Text>
                 <Switch
                   value={openToGigs}
                   onValueChange={setOpenToGigs}
                   trackColor={{ false: '#e0e0e0', true: '#4264ff' }}
                   thumbColor={openToGigs ? '#fff' : '#f4f3f4'}
                 />
               </View>
             </View>

             {/* Connect with me */}
             <View style={styles.section}>
               <View style={styles.sectionHeader}>
                 <Text style={styles.sectionTitle}>Connect with me</Text>
                 <TouchableOpacity>
                   <Text style={styles.editIcon}>✏️</Text>
                 </TouchableOpacity>
               </View>
               <Text style={styles.connectText}>You have not connected any socials medias to your profile yet.</Text>
             </View>

             {/* Existing Roles */}
             <View style={styles.section}>
               <Text style={styles.sectionTitle}>Existing Roles</Text>
               <Text style={styles.roleText}>Student</Text>
             </View>

             {/* Karma Distribution */}
             <View style={styles.section}>
               <Text style={styles.sectionTitle}>Karma Distribution</Text>
               <View style={styles.karmaChart}>
                 <View style={styles.pieChart}>
                   <View style={styles.pieSlice}>
                     <Text style={styles.pieText}>97.2%</Text>
                   </View>
                 </View>
                 <View style={styles.chartLegend}>
                   <View style={styles.legendItem}>
                     <View style={[styles.legendDot, { backgroundColor: '#4264ff' }]} />
                     <Text style={styles.legendText}>Collabora...</Text>
                   </View>
                   <View style={styles.legendItem}>
                     <View style={[styles.legendDot, { backgroundColor: '#1e3a8a' }]} />
                     <Text style={styles.legendText}>General Enablement</Text>
                   </View>
                 </View>
               </View>
             </View>

             {/* Recent Activity */}
             <View style={styles.section}>
               <View style={styles.sectionHeader}>
                 <Text style={styles.sectionTitle}>Recent Activity</Text>
                 <TouchableOpacity>
                   <Text style={styles.viewMoreText}>View More</Text>
                 </TouchableOpacity>
               </View>
               <View style={styles.activityItem}>
                 <View style={styles.activityIcon}>
                   <Text style={styles.activityIconText}>H</Text>
                 </View>
                 <View style={styles.activityContent}>
                   <Text style={styles.activityText}>
                     <Text style={styles.karmaAmount}>50</Text> awarded for Drug Free Kerala Pledge.
                   </Text>
                   <Text style={styles.activityTime}>2 months ago</Text>
                 </View>
               </View>
               <View style={styles.activityItem}>
                 <View style={styles.activityIcon}>
                   <Text style={styles.activityIconText}>H</Text>
                 </View>
                 <View style={styles.activityContent}>
                   <Text style={styles.activityText}>
                     <Text style={styles.karmaAmount}>20</Text> awarded for Self Introduction.
                   </Text>
                   <Text style={styles.activityTime}>2 years ago</Text>
                 </View>
               </View>
               <View style={styles.activityItem}>
                 <View style={styles.activityIcon}>
                   <Text style={styles.activityIconText}>H</Text>
                 </View>
                 <View style={styles.activityContent}>
                   <Text style={styles.activityText}>
                     <Text style={styles.karmaAmount}>1</Text> awarded for Chat Karma.
                   </Text>
                   <Text style={styles.activityTime}>2 years ago</Text>
                 </View>
               </View>
               <View style={styles.activityItem}>
                 <View style={styles.activityIcon}>
                   <Text style={styles.activityIconText}>H</Text>
                 </View>
                 <View style={styles.activityContent}>
                   <Text style={styles.activityText}>
                     <Text style={styles.karmaAmount}>1</Text> awarded for Chat Karma.
                   </Text>
                   <Text style={styles.activityTime}>2 years ago</Text>
                 </View>
               </View>
             </View>
         </>
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
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  profileBackground: {
    height: 120,
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileContent: {
    padding: 20,
    position: 'relative',
  },
  profileImageContainer: {
    position: 'absolute',
    top: -40,
    left: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#22c55e',
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#22c55e',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifiedText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  profileActions: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row',
  },
  actionButton: {
    width: 32,
    height: 32,
    backgroundColor: '#4264ff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  actionIcon: {
    fontSize: 16,
    color: '#fff',
  },
  profileInfo: {
    marginTop: 50,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  userLevel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4264ff',
  },
  tabContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 4,
    maxHeight: 50,
  },
  tabContentContainer: {
    flexDirection: 'row',
    paddingHorizontal: 4,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  activeTab: {
    backgroundColor: '#4264ff',
    borderRadius: 8,
  },
  tabText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  statsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statIcon: {
    fontSize: 24,
    color: '#4264ff',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#4264ff',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  editIcon: {
    fontSize: 16,
    color: '#4264ff',
  },
  viewMoreText: {
    fontSize: 14,
    color: '#4264ff',
  },
  interestTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  interestTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fef3c7',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  interestText: {
    fontSize: 14,
    color: '#92400e',
    marginRight: 8,
  },
  interestCount: {
    backgroundColor: '#f59e0b',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  interestCountText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  calendarContainer: {
    alignItems: 'center',
  },
  calendarHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  calendarHeaderText: {
    fontSize: 12,
    color: '#666',
    marginHorizontal: 15,
  },
  calendarGrid: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  calendarColumn: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  monthText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  dayGrid: {
    gap: 2,
  },
  dayCell: {
    width: 12,
    height: 12,
    backgroundColor: '#e5f3e5',
    borderRadius: 2,
  },
  yearSelector: {
    flexDirection: 'row',
    gap: 10,
  },
  yearText: {
    fontSize: 12,
    color: '#22c55e',
  },
  activeYear: {
    backgroundColor: '#22c55e',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  activeYearText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingText: {
    fontSize: 16,
    color: '#000',
  },
  connectText: {
    fontSize: 14,
    color: '#4264ff',
    lineHeight: 20,
  },
  roleText: {
    fontSize: 16,
    color: '#4264ff',
  },
  karmaChart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pieChart: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#4264ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  pieSlice: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pieText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4264ff',
  },
  chartLegend: {
    flex: 1,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
    color: '#666',
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  activityIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#8b5cf6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activityIconText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: 14,
    color: '#000',
    lineHeight: 20,
  },
  karmaAmount: {
    color: '#4264ff',
    fontWeight: 'bold',
  },
     activityTime: {
     fontSize: 12,
     color: '#666',
     marginTop: 4,
   },
   karmaAwardCard: {
     backgroundColor: '#fff',
     borderRadius: 10,
     padding: 16,
     marginBottom: 12,
     elevation: 2,
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 1 },
     shadowOpacity: 0.1,
     shadowRadius: 2,
   },
   karmaAwardValue: {
     fontSize: 24,
     fontWeight: 'bold',
     color: '#4264ff',
     marginBottom: 4,
   },
   karmaAwardLabel: {
     fontSize: 14,
     fontWeight: 'bold',
     color: '#000',
     marginBottom: 4,
   },
   karmaAwardReason: {
     fontSize: 14,
     color: '#4264ff',
     marginBottom: 4,
   },
   karmaAwardTime: {
     fontSize: 12,
     color: '#666',
   },
   levelProgressCard: {
     backgroundColor: '#fff',
     borderRadius: 10,
     padding: 20,
     elevation: 2,
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 1 },
     shadowOpacity: 0.1,
     shadowRadius: 2,
   },
   currentLevelSection: {
     flexDirection: 'row',
     alignItems: 'center',
     marginBottom: 20,
   },
   levelBadge: {
     width: 60,
     height: 60,
     borderRadius: 30,
     backgroundColor: '#fbbf24',
     justifyContent: 'center',
     alignItems: 'center',
     marginRight: 16,
   },
   levelBadgeText: {
     fontSize: 24,
   },
   levelInfo: {
     flex: 1,
   },
   levelText: {
     fontSize: 24,
     fontWeight: 'bold',
     color: '#000',
     marginBottom: 8,
   },
   progressBar: {
     height: 8,
     backgroundColor: '#e5e7eb',
     borderRadius: 4,
     marginBottom: 4,
   },
   progressFill: {
     height: '100%',
     backgroundColor: '#22c55e',
     borderRadius: 4,
     width: '5%',
   },
   progressText: {
     fontSize: 12,
     color: '#666',
   },
   levelList: {
     gap: 12,
   },
   levelItem: {
     flexDirection: 'row',
     alignItems: 'center',
     paddingVertical: 8,
   },
   levelItemText: {
     fontSize: 16,
     fontWeight: 'bold',
     color: '#000',
     width: 50,
   },
   levelItemKarma: {
     fontSize: 14,
     color: '#666',
     width: 80,
   },
   levelProgressCircle: {
     width: 16,
     height: 16,
     borderRadius: 8,
     borderWidth: 2,
     borderColor: '#d1d5db',
     marginRight: 12,
   },
   levelProgressCompleted: {
     backgroundColor: '#22c55e',
     borderColor: '#22c55e',
   },
   levelItemTasks: {
     fontSize: 14,
     color: '#666',
     flex: 1,
   },
   levelItemChevron: {
     fontSize: 12,
     color: '#666',
   },
   achievementContent: {
     alignItems: 'center',
     paddingVertical: 20,
   },
   achievementIllustration: {
     width: 120,
     height: 120,
     backgroundColor: '#f3f4f6',
     borderRadius: 60,
     justifyContent: 'center',
     alignItems: 'center',
     marginBottom: 16,
   },
   illustrationText: {
     fontSize: 48,
   },
   achievementMessage: {
     fontSize: 16,
     color: '#666',
     textAlign: 'center',
     lineHeight: 24,
   },
 });

export default ProfileScreen;
