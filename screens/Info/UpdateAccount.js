import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import infoStyle from './infoStyle';

const UpdateAccount = () => {
  return (
    <View style={infoStyle.forcon}>
      <View style={{marginHorizontal: 15, justifyContent: 'center', flex: 1}}>
        {/* for image */}
        <View style={{alignItems: 'center'}}>
          <Image
            style={{width: 150, height: 150, borderRadius: 120}}
            source={require('../../asset/images/user/pp.jpg')}
          />
        </View>

        {/* for  name */}
        <View style={infoStyle.forP}>
          <Text style={infoStyle.forText}>Name :</Text>
          <TextInput
            placeholder="Enter your new name"
            style={infoStyle.forInput}
          />
        </View>

        {/* for  phonenumber */}
        <View style={infoStyle.forP}>
          <Text style={infoStyle.forText}>Phone Number :</Text>
          <TextInput
            placeholder="Enter your new phone number"
            style={infoStyle.forInput}
          />
        </View>

        {/* for  email */}
        <View style={infoStyle.forP}>
          <Text style={infoStyle.forText}>Email :</Text>
          <TextInput
            placeholder="Enter your new email"
            style={infoStyle.forInput}
          />
        </View>

        {/* for btn */}
        <TouchableOpacity>
          <View style={[infoStyle.forP, infoStyle.forbtn]}>
            <Text style={{textAlign: 'center', fontSize: 16, color: 'white'}}>
              Update
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateAccount;
