import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import stylesForAdd from './addCustomerStyles';
import {SelectList} from 'react-native-dropdown-select-list';
import gStyles from '../../globalStyle';
import {useSelector} from 'react-redux';
import {
  useInternetPlanQuery,
  usePaymentMethodQuery,
  useSeverFeeQuery,
} from '../../store/services/Endpoints/editEndpoints';

const SubPlan = () => {
  const [selectedPlan, setSelectedPlan] = React.useState('');
  const [selectedMonth, setSelectedMonth] = React.useState('');
  const [selectedServiceFee, setSelectedServiceFee] = React.useState('');
  const [selectedMethod, setSelectedMethod] = React.useState('');

  const [currentDate, setCurrentDate] = React.useState('');

  // const tt = useSelector(state => state.customerDatas);
  // console.log(tt);
  const internetPlan = useInternetPlanQuery();
  const severFee = useSeverFeeQuery();
  const paymentMethod = usePaymentMethodQuery();

  // for plan
  const planDatas = internetPlan?.currentData?.data?.map(p => {
    return {key: p.id, value: `${p.name} ( ${p.speed}Mbps )`};
  });

  // for months
  const monthData = [
    {key: '1', value: '1 month'},
    {key: '3', value: '3 months'},
    {key: '6', value: '6 months'},
    {key: '12', value: '12 months'},
  ];

  // for feeData
  // const feeData = [{key: '1', value: 'Installation Charges (30000Ks)'}];
  const feeData = severFee?.currentData?.data?.map(e => {
    return {key: e.id, value: `${e.name} (${e.fee}Ks)`};
  });

  // for payment method
  const paymentMethodData = paymentMethod?.currentData?.data?.map(e => {
    return {key: e.id, value: e.name};
  });

  const handleSubmit = () => {
    const subplanData = {
      dataPlanNo: selectedPlan,
      duration: selectedMonth,
      serviceFee: selectedServiceFee,
      paymentDate: currentDate,
      payMethod: selectedMethod,
    };
  };

  // console.log(internetPlan);
  // console.log(selectedPlan);
  // console.log(severFee?.currentData?.data);
  // console.log(selectedMonth);

  return (
    <View style={stylesForAdd.formContainer}>
      {/* for internet plan */}
      <View>
        <Text style={stylesForAdd.forText}>Plan Name * :</Text>
        <SelectList
          setSelected={val => setSelectedPlan(val)}
          data={planDatas}
          save="key"
          search={false}
          dropdownStyles={{backgroundColor: '#eeeeee'}}
          boxStyles={{backgroundColor: '#eeeeee', marginTop: 10}}
          defaultOption={{key: 0, value: 'Choose Internet Plan'}}
        />
      </View>

      {/* for speed */}
      {/* <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Speed:</Text>
        <TextInput
          editable={false}
          value={`${
            internetPlan?.currentData?.data[selectedPlan - 1].speed
          }Mbps`}
          placeholder="Total Ammount is here"
          style={stylesForAdd.forInput}
        />
      </View> */}

      {/* for ammount */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Ammount * :</Text>
        <TextInput
          editable={false}
          value={`${
            internetPlan?.currentData?.data[selectedPlan - 1]?.price
              ? internetPlan?.currentData?.data[selectedPlan - 1]?.price
              : '0'
          } Ks`}
          placeholder="Total Ammount is here"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for duration choose */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Duration * :</Text>
        <SelectList
          setSelected={val => setSelectedMonth(val)}
          data={monthData}
          save="key"
          search={false}
          dropdownStyles={{backgroundColor: '#eeeeee'}}
          boxStyles={{backgroundColor: '#eeeeee', marginTop: 10}}
          defaultOption={{key: 0, value: 'Choose your contract duration'}}
        />
      </View>

      {/* for Tax */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Tax * : % </Text>
        <TextInput
          editable={false}
          value=" 15"
          placeholder="Text Percent"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for serverFee */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Service Fee * :</Text>
        <SelectList
          setSelected={val => setSelectedServiceFee(val)}
          data={feeData}
          save="key"
          search={false}
          dropdownStyles={{backgroundColor: '#eeeeee'}}
          boxStyles={{backgroundColor: '#eeeeee', marginTop: 10}}
          defaultOption={{key: 0, value: 'Choose Service Fee'}}
        />
      </View>

      {/* for total */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Total * :</Text>
        <TextInput
          editable={false}
          value="82000 Ks"
          placeholder="Total Ammount is here"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for date choose */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Payment Date * :</Text>
        <TextInput
          onChangeText={e => setCurrentDate(e)}
          // editable={false}
          value={currentDate}
          placeholder="Choose Date"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for payment method */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Payment Method * :</Text>
        <SelectList
          setSelected={val => setSelectedMethod(val)}
          data={paymentMethodData}
          save="key"
          search={false}
          dropdownStyles={{backgroundColor: '#eeeeee'}}
          boxStyles={{backgroundColor: '#eeeeee', marginTop: 10}}
          defaultOption={{key: 0, value: 'Choose Your Payment Mehtod'}}
        />
      </View>

      {/* for two btn */}
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 35}}>
        {/* save */}
        <TouchableOpacity onPress={handleSubmit}>
          <Text
            style={[
              gStyles.smallBtn,
              {backgroundColor: '#2B3467', color: 'white'},
            ]}>
            Save
          </Text>
        </TouchableOpacity>

        {/* cancle */}
        <TouchableOpacity style={{marginLeft: 15}}>
          <Text
            style={[
              gStyles.smallBtn,
              {backgroundColor: '#EB455F30', color: '#EB455F'},
            ]}>
            Cancle
          </Text>
        </TouchableOpacity>
      </View>

      {/* for copyright */}
      <View style={stylesForAdd.forP}>
        <Text style={{textAlign: 'center', marginTop: 20}}>
          Design & Develop by AGGA.IO
        </Text>
      </View>
    </View>
  );
};

export default SubPlan;
