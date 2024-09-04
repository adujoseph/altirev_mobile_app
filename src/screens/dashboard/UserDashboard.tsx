import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import HeaderSection from './_components/HeaderSection'
import CustomText from '../../components/CustomText'
import Authcontext from '../../context/Authcontext'
import CustomSelectInput from '../../components/CustomSelectInput'
import PieChartExample from './_components/PieChart'


const elections = [
  { id: "1", name: 'Past Election' },
  { id: "2", name: 'Live Feed' },
  { id: "3", name: 'Upcoming Event' },
]

const activeElections = [
  { id: "1", name: 'Edo State', label: 'Edo State', value: 'Edo State' },
]
const UserDashboard = () => {
  const { myUser } = useContext(Authcontext)
  const [selectedElection, setSelectedElection] = useState(elections[1]);
  const [activeElection, setActiveElection] = useState()

  const electionView = (elect: any) => {

  }
  return (
    <>
      <View style={styles.container}>
        <HeaderSection name={myUser.firstName} type={myUser.role} />
        <View style={{ flexDirection: 'row' }}>
          {elections.map((election) => (
            <Pressable key={election.id} onPress={() => electionView(election)} style={selectedElection.id === election.id ? styles.active : styles.inactive}>
              <CustomText>{election.name}</CustomText>
            </Pressable>
          ))}
        </View>
        <View style={{ width: '60%', alignSelf: 'flex-end', paddingTop: 20 }}>
          <CustomSelectInput value={activeElection} label='' options={activeElections} onValueChange={(value) => setActiveElection(value)} placeholder='Select Election' />
          <Pressable><CustomText style={{ textAlign: 'right' }}>View All</CustomText></Pressable>
        </View>
        <View>
          <PieChartExample />
        </View>
        <View>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View>
              <CustomText>Accredited Voters</CustomText>
              <CustomText>0</CustomText>
            </View>
            <View>
              <CustomText>Voters Casted</CustomText>
              <CustomText>0</CustomText>
            </View>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View>
              <CustomText>Valid Votes</CustomText>
              <CustomText>0</CustomText>
            </View>
            <View>
              <CustomText>Invalid Votes</CustomText>
              <CustomText>0</CustomText>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

export default UserDashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  },
  inactive: {
    paddingHorizontal: 10,
    borderBottomWidth: 3,
    borderBottomColor: 'lightgray',
  },
  active: {
    borderBottomWidth: 3,
    borderBottomColor: '#000',
    paddingHorizontal: 10,
    paddingBottom: 5
  }
})