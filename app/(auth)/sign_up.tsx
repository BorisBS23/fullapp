import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>sign_up</Text>
      <Link href="/(auth)/sign_in">Sign in</Link>
    </View>
  );
};

export default SignIn;
