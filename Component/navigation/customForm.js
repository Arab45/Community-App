import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Pressable,
} from "react-native";

const logInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("please provide a valid email."),
  password: Yup.string()
    .min(8)
    .required("please enter your password.")
    .matches(
      /^(?=.*?^[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^*+-]).{8,}$/,
      "must contain minimum 8 characters, at least one uppercase letter"
    ),
});

export default function Form({ name }) {
  return (
    <View style={styles.header}>
      <View style={styles.triangle}>
        <Text style={styles.TriangleText}>Community App</Text>
      </View>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={logInSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          setFieldTouched,
          isValid,
          handleSubmit,
        }) => { return(
          <View style={styles.General}>
            <Text style={styles.community}>{name}</Text>
            <View style={styles.mainTextInput}>
              {/* <View> */}
                <TextInput
                  style={styles.textBox}
                  placeholder="Email Address"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched("email")}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              {/* </View> */}

              {/* <View> */}
                <TextInput
                  style={styles.textBox}
                  placeholder="Password"
                  secureTextEntry={true}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched("password")}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              {/* </View> */}
              <Pressable style={styles.Button}>
                <Text style={styles.login}>Login</Text>
              </Pressable>
            </View>
            <Text style={styles.footerText}>Forget Password?</Text>
          </View>
        )
        }}
      </Formik>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#fff",
    // marginTop: StatusBar.currentHeight,
    // gap: 50,
    // alignItems: 'center',
    justifyContent: "space-between",
  },
  triangle: {
    backgroundColor: "#5d1ab2",
    width: "100%",
    height: "40%",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  community: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  TriangleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    // marginHorizontal: 10
  },
  textBox: {
    // borderWidth: 1,
    height: 55,
    borderColor: "#000",
    paddingHorizontal: 10,
    backgroundColor: "#ddd",
  },
  mainTextInput: {
    gap: 20,
    // paddingHorizontal: 10,
  },
  footerText: {
    color: "#ddd",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  Button: {
    backgroundColor: "#5d1ab2",
    height: 55,
    justifyContent: "center",
  },
  login: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  General: {
    paddingHorizontal: 10,
    gap: 10,
  },
  errorText: {
    fontSize: 6,
    color: "red",
  },
});
