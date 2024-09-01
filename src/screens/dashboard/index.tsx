import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserDashboard from './UserDashboard'
import AgentDashboard from './AgentDashboard'

const Dashboard = () => {
  const userRole = 'user'
  return (
    <View style={{ flex: 1 }}>
      {userRole !== 'user' ?
        <UserDashboard /> : <AgentDashboard />}
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})