import React from 'react';
import { View, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const data = [
  {
    name: 'APC',
    percentage: 28,
    color: '#70B9FF',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'PDP',
    percentage: 32,
    color: '#FF4B4B',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'LP',
    percentage: 20,
    color: '#4CAF50',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Others',
    percentage: 20,
    color: '#333333',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

const chartConfig = {
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
};

const PieChartExample = () => {
  return (
    <View>
      <PieChart
        data={data.map((item) => ({
          name: item.name,
          population: item.percentage,
          color: item.color,
          legendFontColor: item.legendFontColor,
          legendFontSize: item.legendFontSize,
        }))}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  );
};

export default PieChartExample;