import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import infoStyle from './infoStyle';

const ChangePassword = () => {
  return (
    <View style={infoStyle.forcon}>
      <View style={{marginHorizontal: 15, marginTop: 40}}>
        <TextInput
          placeholder="Enter Old Password"
          style={infoStyle.forInput}
        />
        <TextInput
          placeholder="Enter New Password"
          style={infoStyle.forInput}
        />
        <TextInput
          placeholder="Enter Re-type New Password"
          style={infoStyle.forInput}
        />

        {/* for btn */}
        <TouchableOpacity>
          <View style={[infoStyle.forP, infoStyle.forbtn]}>
            <Text style={{textAlign: 'center', fontSize: 16, color: 'white'}}>
              Update Password
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePassword;
