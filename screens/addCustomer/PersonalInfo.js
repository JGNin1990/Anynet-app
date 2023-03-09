import React, {useRef, useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import stylesForAdd from './addCustomerStyles';
import {SelectList} from 'react-native-dropdown-select-list';
import DocumentPicker from 'react-native-document-picker';
import {useDispatch, useSelector} from 'react-redux';
import {
  useCitiesQuery,
  useSaleRepQuery,
  useTownshipQuery,
} from '../../store/services/Endpoints/editEndpoints';
import gStyles from '../../globalStyle';
import FAS from 'react-native-vector-icons/FontAwesome';
import {addCustomerDatas} from '../../store/slicers/customerDataSlicer';

const PersonalInfo = ({actNav, setActNav}) => {
  const [selectedCity, setSelectedCity] = React.useState('');
  const [selectedTownship, setSelectedTwonship] = React.useState('');
  const [selectedAbout, setSelectedAbout] = React.useState('');
  const [selectedSaleRep, setSelectedSaleRap] = React.useState('');
  const [selectedBestTime, setSelectedbestTime] = React.useState('');
  const [selectedBestDay, setSelectedbestDay] = React.useState('');

  const [nrcNo, setNrcNo] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [streetAddress, setStreetAddress] = useState();
  const [streetAddress2, setStreetAddress2] = useState();
  const [postalCode, setPostalCode] = useState();

  const dispatch = useDispatch();
  const saleRep = useSaleRepQuery();
  const formRef = useRef();

  const [faceImg, setFaceImg] = useState({
    url: null,
    name: null,
  });
  const [nrc, setNrc] = useState({
    frontUrl: null,
    frontName: null,
    backUrl: null,
    backName: null,
  });

  const citiesData = useSelector(state => state.cities);
  const townshipsData = useTownshipQuery(
    `${citiesData[selectedCity - 1]?.code}`,
  );

  // console.log(citiesData[selectedCity]);
  // for photo upload
  const pickFaceImg = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      result.map(e => setFaceImg(pre => ({url: e.uri, name: e.name})));
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        // User cancelled the picker
        console.log('Cancelled');
      } else {
        // Error occurred
        console.log('Error', error);
      }
    }
  };

  // for nrc upload
  const pickNrc = async view => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      if (view === 'front') {
        result.map(e =>
          setNrc(pre => ({...pre, frontUrl: e.uri, frontName: e.name})),
        );
      } else {
        result.map(e =>
          setNrc(pre => ({...pre, backUrl: e.uri, backName: e.name})),
        );
      }
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        // User cancelled the picker
        console.log('Cancelled');
      } else {
        // Error occurred
        console.log('Error', error);
      }
    }
  };

  // for city
  // const cityData = [
  //   {key: '1', value: 'Yangon'},
  //   {key: '2', value: 'Mandalay'},
  // ];
  const cities = citiesData?.map(p => {
    return {key: p.id, value: p.eng_name};
  });

  // for township

  const townships = townshipsData?.currentData?.data?.map(e => {
    return {key: e.code, value: e.eng_name};
  });
  // console.log(townshipsData.isSuccess, townshipsData.currentData.data);

  // for best time
  const bestDay = [
    {key: '1', value: 'Sunday'},
    {key: '2', value: 'Monday'},
    {key: '3', value: 'Tuesday'},
    {key: '4', value: 'Wednesday'},
    {key: '5', value: 'Thursday'},
    {key: '6', value: 'Friday'},
    {key: '7', value: 'Saturaday'},
  ];

  // for best time
  const bestTime = [
    {key: '1', value: '01:00 AM'},
    {key: '2', value: '02:00 AM'},
    {key: '3', value: '03:00 AM'},
    {key: '4', value: '04:00 AM'},
    {key: '5', value: '05:00 AM'},
    {key: '6', value: '06:00 AM'},
    {key: '7', value: '07:00 AM'},
    {key: '8', value: '08:00 AM'},
    {key: '9', value: '09:00 AM'},
    {key: '10', value: '10:00 AM'},
    {key: '11', value: '11:00 AM'},
    {key: '12', value: '12:00 AM'},
    {key: '13', value: '01:00 PM'},
    {key: '14', value: '02:00 PM'},
    {key: '15', value: '03:00 PM'},
    {key: '16', value: '04:00 PM'},
    {key: '17', value: '05:00 PM'},
    {key: '18', value: '06:00 PM'},
    {key: '19', value: '07:00 PM'},
    {key: '20', value: '08:00 PM'},
    {key: '21', value: '09:00 PM'},
    {key: '22', value: '10:00 PM'},
    {key: '23', value: '11:00 PM'},
    {key: '24', value: '12:00 PM'},
  ];

  // for about us
  const aboutUs = [
    {key: '1', value: 'Social Media'},
    {key: '2', value: 'Email'},
    {key: '3', value: 'Friend'},
    {key: '4', value: 'Phone Number'},
    {key: '5', value: 'Other'},
  ];

  const saleRepDatas = saleRep?.currentData?.data?.map(e => {
    return {key: e.id, value: e.name};
  });

  const handleNextBtn = () => {
    const personalInfoDatas = {
      mainImage: faceImg.name,
      nrcNo,
      firstName,
      lastName,
      nrcFront: nrc.frontName,
      nrcBack: nrc.backName,
      phone,
      email,
      password,
      address,
      streetAddress,
      streetAddress2,
      cityName: citiesData[selectedCity - 1]?.code,
      townshipName: selectedTownship,
      postalCode,
      selectedBestTime,
      selectedBestDay,
      selectedAbout,
      selectedSaleRep,
    };
    // console.log(personalInfoDatas);
    dispatch(addCustomerDatas(personalInfoDatas));
    setActNav(pre => ({...pre, information: false, subscription: true}));
  };

  // console.log(faceImg.url);
  // console.log(faceImgName);
  // console.log(citiesData[selectedCity - 1]);
  // console.log(selectedCity);
  // console.log(nrcNo);
  // console.log(selectedCity);

  return (
    <View style={stylesForAdd.formContainer}>
      {/* upload photo */}
      <View>
        <Text style={[stylesForAdd.forText, {marginVertical: 10}]}>
          Upload Your Photo :
        </Text>
        <TouchableOpacity onPress={pickFaceImg}>
          <View style={{marginVertical: 20, alignItems: 'center'}}>
            {faceImg.url ? (
              <Image
                source={{uri: faceImg.url}}
                style={{width: 120, height: 120}}
              />
            ) : (
              <Image
                source={require('../../asset/images/user/user.png')}
                style={{width: 120, height: 120}}
              />
            )}
          </View>
          {faceImg.name && (
            <Text style={{fontSize: 14, fontWeight: 500}}>
              Selected Image : {faceImg.name}
            </Text>
          )}
        </TouchableOpacity>
      </View>

      {/* for nrc */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>NRC * :</Text>
        <TextInput
          onChangeText={e => setNrcNo(e)}
          value={nrcNo}
          placeholder="12/PAZATA(N)000000"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for first name */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>First Name * :</Text>
        <TextInput
          onChangeText={e => setFirstName(e)}
          value={firstName}
          placeholder="Enter your first name"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for last name */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Last Name * :</Text>
        <TextInput
          onChangeText={e => setLastName(e)}
          value={lastName}
          placeholder="Enter your last name"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* upload front nrc */}
      <View style={stylesForAdd.forP}>
        <Text style={[stylesForAdd.forText, {marginVertical: 10}]}>
          NRC Front Photo * :
        </Text>
        <TouchableOpacity onPress={() => pickNrc('front')}>
          <View style={{marginVertical: 20, alignItems: 'center'}}>
            {nrc.frontUrl ? (
              <Image
                source={{uri: nrc.frontUrl}}
                style={{width: 120, height: 120}}
              />
            ) : (
              <Image
                source={require('../../asset/images/nrc.png')}
                style={{width: 120, height: 120}}
              />
            )}
          </View>
          {nrc.frontName && (
            <Text style={{fontSize: 14, fontWeight: 500}}>
              Selected Image : {nrc.frontName}
            </Text>
          )}
        </TouchableOpacity>
      </View>

      {/* upload back nrc */}
      <View style={stylesForAdd.forP}>
        <Text style={[stylesForAdd.forText, {marginVertical: 10}]}>
          NRC Front Photo * :
        </Text>
        <TouchableOpacity onPress={() => pickNrc('back')}>
          <View style={{marginVertical: 20, alignItems: 'center'}}>
            {nrc.backUrl ? (
              <Image
                source={{uri: nrc.backUrl}}
                style={{width: 120, height: 120}}
              />
            ) : (
              <Image
                source={require('../../asset/images/nrc.png')}
                style={{width: 120, height: 120}}
              />
            )}
          </View>
          {nrc.backName && (
            <Text style={{fontSize: 14, fontWeight: 500}}>
              Selected Image : {nrc.backName}
            </Text>
          )}
        </TouchableOpacity>
      </View>

      {/* for phone number */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Phone Number * :</Text>
        <TextInput
          onChangeText={e => setPhone(e)}
          value={phone}
          placeholder="Enter your phone number"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for email */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>E-mail * :</Text>
        <TextInput
          onChangeText={e => setEmail(e)}
          value={email}
          placeholder="Enter your email"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for password */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Password * :</Text>
        <TextInput
          onChangeText={e => setPassword(e)}
          value={password}
          placeholder="Password"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for address */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Address * :</Text>
        <TextInput
          onChangeText={e => setAddress(e)}
          value={address}
          placeholder="Enter your address"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for street address */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Street Address :</Text>
        <TextInput
          onChangeText={e => setStreetAddress(e)}
          value={streetAddress}
          placeholder="Enter your street address"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for street address line 2 */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Street Address Line 2 :</Text>
        <TextInput
          onChangeText={e => setStreetAddress2(e)}
          value={streetAddress2}
          placeholder="Enter your street address line 2"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for city */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>City * :</Text>
        <SelectList
          setSelected={val => setSelectedCity(val)}
          data={cities}
          save="key"
          search={false}
          dropdownStyles={{backgroundColor: '#eeeeee'}}
          boxStyles={{backgroundColor: '#eeeeee', marginTop: 10}}
          // defaultOption={{key: '2', value: 'Yangon'}}
        />
      </View>

      {/* for township */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Township * :</Text>
        <SelectList
          setSelected={val => setSelectedTwonship(val)}
          data={townships}
          save="key"
          search={false}
          dropdownStyles={{backgroundColor: '#eeeeee'}}
          boxStyles={{backgroundColor: '#eeeeee', marginTop: 10}}
          defaultOption={{value: 'Select township'}}
        />
      </View>

      {/* for postal code */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Postal code :</Text>
        <TextInput
          onChangeText={e => setPostalCode(e)}
          value={postalCode}
          placeholder="Enter your postal code"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for best day of week to be reached  */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>
          Best Day of Week to be Reached :
        </Text>
        <SelectList
          setSelected={val => setSelectedbestDay(val)}
          data={bestDay}
          save="value"
          search={true}
          dropdownStyles={{backgroundColor: '#eeeeee'}}
          boxStyles={{backgroundColor: '#eeeeee', marginTop: 10}}
          defaultOption={{value: 'Best Time of Day to be Reached'}}
        />
      </View>

      {/* for best time of day to be reached */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>
          Best Time of Day to be Reached :
        </Text>
        <SelectList
          setSelected={val => setSelectedbestTime(val)}
          data={bestTime}
          save="value"
          search={true}
          dropdownStyles={{backgroundColor: '#eeeeee'}}
          boxStyles={{backgroundColor: '#eeeeee', marginTop: 10}}
          defaultOption={{value: 'Best Time of Day to be Reached'}}
        />
      </View>

      {/* for about us */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>What do you hear about us? :</Text>
        <SelectList
          setSelected={val => setSelectedAbout(val)}
          data={aboutUs}
          save="value"
          search={false}
          dropdownStyles={{backgroundColor: '#eeeeee'}}
          boxStyles={{backgroundColor: '#eeeeee', marginTop: 10}}
          defaultOption={{key: '1', value: 'Social Media'}}
        />
      </View>

      {/* for sale rep name */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Sale Rep Name * :</Text>
        <SelectList
          setSelected={val => setSelectedSaleRap(val)}
          data={saleRepDatas}
          save="key"
          search={false}
          dropdownStyles={{backgroundColor: '#eeeeee'}}
          boxStyles={{backgroundColor: '#eeeeee', marginTop: 10}}
          // defaultOption={{key: '1', value: 'Social Media'}}
        />
      </View>

      {/* next btn */}
      <View style={stylesForAdd.forP}>
        <TouchableOpacity onPress={handleNextBtn}>
          <View
            style={[
              gStyles.smallBtn,
              {
                backgroundColor: '#2B3467',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}>
            <Text style={{fontSize: 17, fontWeight: 500, color: 'white'}}>
              Next{' '}
            </Text>

            <View style={{marginLeft: 10}}>
              <FAS name="arrow-right" color="white" size={20} />
            </View>
          </View>
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

export default PersonalInfo;
