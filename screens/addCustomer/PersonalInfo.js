import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import stylesForAdd from './addCustomerStyles';
// import Fas from 'react-native-vector-icons/FontAwesome';
import {SelectList} from 'react-native-dropdown-select-list';
import DocumentPicker from 'react-native-document-picker';

const PersonalInfo = () => {
  const [selected, setSelected] = React.useState('');
  const [selected2, setSelected2] = React.useState('');
  const [selected3, setSelected3] = React.useState('');
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
  const cityData = [
    {key: '1', value: 'Yangon'},
    {key: '2', value: 'Mandalay'},
  ];

  // for township
  const township = [
    {key: '1', value: 'South Dagon'},
    {key: '2', value: 'North Dagon'},
    {key: '3', value: 'South Okkalapa'},
    {key: '4', value: 'Hlaing'},
    {key: '5', value: 'Thanlyin'},
  ];

  // for about us
  const aboutUs = [
    {key: '1', value: 'Social Media'},
    {key: '2', value: 'Email'},
    {key: '3', value: 'Friend'},
    {key: '4', value: 'Phone Number'},
    {key: '5', value: 'Other'},
  ];

  // console.log(faceImgName);

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
          placeholder="12/PAZATA(N)000000"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for first name */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>First Name * :</Text>
        <TextInput
          placeholder="Enter your first name"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for last name */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Last Name * :</Text>
        <TextInput
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
          placeholder="Enter your phone number"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for email */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>E-mail * :</Text>
        <TextInput
          placeholder="Enter your email"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for password */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Password * :</Text>
        <TextInput placeholder="Password" style={stylesForAdd.forInput} />
      </View>

      {/* for address */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Address * :</Text>
        <TextInput
          placeholder="Enter your address"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for street address */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Street Address :</Text>
        <TextInput
          placeholder="Enter your street address"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for street address line 2 */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Street Address Line 2 :</Text>
        <TextInput
          placeholder="Enter your street address line 2"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for city */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>City * :</Text>
        <SelectList
          setSelected={val => setSelected(val)}
          data={cityData}
          save="value"
          // search={false}
          dropdownStyles={{backgroundColor: '#eeeeee'}}
          boxStyles={{backgroundColor: '#eeeeee', marginTop: 10}}
          defaultOption={{key: '1', value: 'Yangon'}}
        />
      </View>

      {/* for township */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Township * :</Text>
        <SelectList
          setSelected={val => setSelected2(val)}
          data={township}
          save="value"
          // search={false}
          dropdownStyles={{backgroundColor: '#eeeeee'}}
          boxStyles={{backgroundColor: '#eeeeee', marginTop: 10}}
          defaultOption={{key: '1', value: 'South Dagon'}}
        />
      </View>

      {/* for postal code */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>Postal code :</Text>
        <TextInput
          placeholder="Enter your postal code"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for best day of week to be reached  */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>
          Best Day of Week to be Reached :
        </Text>
        <TextInput
          placeholder="Best Day of Week to be Reached "
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for best time of day to be reached */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>
          Best Time of Day to be Reached :
        </Text>
        <TextInput
          placeholder="Best Time of Day to be Reached"
          style={stylesForAdd.forInput}
        />
      </View>

      {/* for about us */}
      <View style={stylesForAdd.forP}>
        <Text style={stylesForAdd.forText}>What do you hear about us? :</Text>
        <SelectList
          setSelected={val => setSelected3(val)}
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
        <TextInput placeholder="Sale Rep Name" style={stylesForAdd.forInput} />
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
