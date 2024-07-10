import { Colors } from '@/constants/Colors';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SessionLogs: React.FC = () => {
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
          <Text style={styles.logText}>Collisions: {item.collisions[0]?.count}</Text>
          <Text style={styles.logText}>Line Losses: {item.tracks[0]?.count}</Text>
          
          {item.tracks[0]?.timestamps && item.tracks[0]?.line_tracking_values ? (
            <LineChart
              data={{
                labels: item.tracks[0].timestamps,
                datasets: [
                  {
                    data: item.tracks[0].line_tracking_values,
                  },
                ],
              }}
              width={wp('90%')}
              height={200}
              chartConfig={{
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              bezier
            />
          ) : (
            <Text>No data available for line tracking</Text>
          )}
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
});

export default SessionLogs;
