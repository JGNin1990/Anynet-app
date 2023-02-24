import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import stylesForAdd from './addCustomerStyles';
import {SelectList} from 'react-native-dropdown-select-list';
import gStyles from '../../globalStyle';

const SubPlan = () => {
  const [selected, setSelected] = React.useState('');
  const [selected1, setSelected1] = React.useState('');
  const [selected2, setSelected2] = React.useState('');
  const [selected3, setSelected3] = React.useState('');

  // const currentDate = new Date();

  // for plan
  const planData = [
    {key: '1', value: 'Basic - 18Mbps'},
    {key: '2', value: 'Standard - 28Mbps'},
    {key: '3', value: 'Professional - 38Mbps'},
    {key: '4', value: 'Entertainment - 50Mbps'},
  ];

  // for months
  const monthData = [
    {key: '1', value: '1 month'},
    {key: '2', value: '3 months'},
    {key: '3', value: '6 months'},
    {key: '4', value: '12 months'},
  ];

  // for feeData
  const feeData = [{key: '1', value: 'Installation Charges (30000Ks)'}];

  // for payment method
  const paymentMethod = [
    {key: '1', value: 'Kbz pay'},
    {key: '2', value: 'Aya pay'},
    {key: '3', value: 'Wave Money'},
    {key: '4', value: 'Uab pay'},
  ];

  return (
    <View style={stylesForAdd.formContainer}>
      {/* for internet plan */}
      <View>
        <Text style={stylesForAdd.forText}>Plan Name * :</Text>
        <SelectList
          setSelected={val => setSelected(val)}
          data={planData}
          save="value"
          search={false}
          dropdownStyles={{backgroundColor: '#eeeeee'}}
          boxStyles={{backgroundColor: '#eeeeee', marginTop: 10}}
          defaultOption={{key: 0, value: 'Choose Internet Plan'}}
        />
      </View>

      {/* for ammount */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Ammount * :</Text>
        <TextInput
          editable={false}
          value="22000 Ks"
          placeholder="Total Ammount is here"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for month choose */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Duratio * :</Text>
        <SelectList
          setSelected={val => setSelected1(val)}
          data={monthData}
          save="value"
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

      {/* for month choose */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Service Fee * :</Text>
        <SelectList
          setSelected={val => setSelected2(val)}
          data={feeData}
          save="value"
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

      {/* for total */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Payment Date * :</Text>
        <TextInput
          // editable={false}
          value="24/2/2023"
          placeholder="Choose Date"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for payment method */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Payment Method * :</Text>
        <SelectList
          setSelected={val => setSelected3(val)}
          data={paymentMethod}
          save="value"
          search={false}
          dropdownStyles={{backgroundColor: '#eeeeee'}}
          boxStyles={{backgroundColor: '#eeeeee', marginTop: 10}}
          defaultOption={{key: 0, value: 'Choose Your Payment Mehtod'}}
        />
      </View>

      {/* for two btn */}
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 35}}>
        {/* save */}
        <TouchableOpacity>
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
