import { Colors } from '@/constants/Colors';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SessionLogs = () => {
  const [data, setData] = useState([
    {
      id: 39,
      start_time: "09/07/2024 - 12:46:15",
      collisions: [{ count: 2 }],
      tracks: [{ count: 0 }],
    },
    {
      id: 40,
      start_time: "09/07/2024 - 12:48:12",
      collisions: [{ count: 8 }],
      tracks: [{ count: 16 }],
    }
  ]);
  const [sortBy, setSortBy] = useState('date');

  const sortByDate = (a, b) => new Date(a.start_time) - new Date(b.start_time);
  const sortByCollisions = (a, b) => b.collisions[0]?.count - a.collisions[0]?.count;
  const sortByLineLosses = (a, b) => b.tracks[0]?.count - a.tracks[0]?.count;

  useEffect(() => {
    let sortedData = [...data];
    switch (sortBy) {
      case 'date':
        sortedData.sort(sortByDate);
        break;
      case 'collisions':
        sortedData.sort(sortByCollisions);
        break;
      case 'lineLosses':
        sortedData.sort(sortByLineLosses);
        break;
      default:
        sortedData = [...data];
    }
    setData(sortedData);
  }, [sortBy]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Session Logs</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.sortButton, sortBy === 'date' && styles.activeSortButton]}
          onPress={() => setSortBy('date')}
        >
          <Text style={styles.sortButtonText}>Sort by Date</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sortButton, sortBy === 'collisions' && styles.activeSortButton]}
          onPress={() => setSortBy('collisions')}
        >
          <Text style={styles.sortButtonText}>Sort by Collisions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sortButton, sortBy === 'lineLosses' && styles.activeSortButton]}
          onPress={() => setSortBy('lineLosses')}
        >
          <Text style={styles.sortButtonText}>Sort by Line Losses</Text>
        </TouchableOpacity>
      </View>

      {data.map(item => (
        <View key={item.id} style={styles.logItem}>
          <Text style={styles.logText}>Start Time: {item.start_time}</Text>
          <View style={styles.chartContainer}>
            <Text style={styles.chartLabel}>Collisions</Text>
            <BarChart
              data={{
                labels: [''],
                datasets: [{
                  data: [item.collisions[0]?.count || 0],
                }],
              }}
              width={wp('90%')}
              height={hp('10%')}
              chartConfig={{
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              }}
              style={styles.chart}
            />
          </View>
          <View style={styles.chartContainer}>
            <Text style={styles.chartLabel}>Line Losses</Text>
            <BarChart
              data={{
                labels: [''],
                datasets: [{
                  data: [item.tracks[0]?.count || 0],
                }],
              }}
              width={wp('90%')}
              height={hp('10%')}
              chartConfig={{
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              }}
              style={styles.chart}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: hp('3%'),
    paddingHorizontal: wp('5%'),
  },
  header: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    color: Colors.light.text,
    marginBottom: hp('3%'),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: hp('2%'),
  },
  sortButton: {
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('4%'),
    borderRadius: 8,
    backgroundColor: Colors.light.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeSortButton: {
    backgroundColor: Colors.light.primary,
  },
  sortButtonText: {
    fontSize: wp('4%'),
    color: 'white',
  },
  logItem: {
    marginBottom: hp('3%'),
    padding: wp('4%'),
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: wp('90%'),
    alignItems: 'center',
  },
  logText: {
    fontSize: wp('4.5%'),
    marginBottom: hp('1%'),
  },
  chartContainer: {
    width: wp('90%'),
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  chartLabel: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    marginBottom: hp('1%'),
  },
  chart: {
    borderRadius: 16,
  },
});

export default SessionLogs;
