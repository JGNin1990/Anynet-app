import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import NavForAdd from './NavForAdd';
import PersonalInfo from './PersonalInfo';
import SubPlan from './SubPlan';

const AddCustomer = ({navigation}) => {
  const [actNav, setActNav] = useState({
    information: true,
    subscription: false,
  });
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <View>
          <NavForAdd actNav={actNav} setActNav={setActNav} />
        </View>
        <ScrollView>
          {/* for nav bar */}

          {/* two forms */}
          <View>
            {/* for personal information */}
            {actNav.information && <PersonalInfo />}
            {actNav.subscription && <SubPlan />}
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddCustomer;
