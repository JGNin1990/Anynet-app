import React, {useEffect, useState} from 'react';
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
import {useCitiesQuery} from '../../store/services/Endpoints/editEndpoints';
import {useDispatch} from 'react-redux';
import {getPlan} from '../../store/slicers/internetPlanSlicer';
import {getCities} from '../../store/slicers/citiesSlicer';

const AddCustomer = ({navigation}) => {
  const cities = useCitiesQuery();
  const dispatch = useDispatch();
  const [actNav, setActNav] = useState({
    information: true,
    subscription: false,
  });

  useEffect(() => {
    if (cities.isSuccess) {
      dispatch(getCities(cities?.currentData?.data));
    }
  }, [cities]);

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
