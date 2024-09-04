import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import UserDashboard from './UserDashboard'
import AgentDashboard from './AgentDashboard'
import Authcontext from '../../context/Authcontext'

const Dashboard = () => {
  const {myRole, activeType} = useContext(Authcontext);
  return (
    <View style={{ flex: 1 }}>
      {activeType === 'Patriot' ?
        <UserDashboard /> : <AgentDashboard />}
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})