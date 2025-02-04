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
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const signUpSchema = Yup.object().shape({
  firstname: Yup.string()
  .min(6, 'Too short')
  .max(50, 'Too long')
  .required('Required'),
  lastname: Yup.string()
  .min(6, 'Too short')
  .max(50, 'Too long')
  .required('Required'),
  email: Yup.string()
  .email('Invalid email')
  .required('please enter your email address'),
  password: Yup.string()
  .min(8)
  .required('please enter your password.')
  .matches(/^(?=.*?^[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^*+-]).{8,}$/, 
    "must contain minimum 8 characters, at least one uppercase letter"
  )
})

export default function SignUp() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.triangle}>
          <Text style={styles.TriangleText}>Community App</Text>
        </View>

        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
          }}
          validationSchema={signUpSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            setFieldTouched,
            isValid,
            handleSubmit,
          }) => { 
            return (
            <View style={styles.parentForm}>
              <Text style={styles.signup}>Sign Up</Text>
            
            {/* <View> */}
                <TextInput
                  style={styles.Input}
                  placeholder="First Name"
                  value={values.firstname}
                  onChangeText={handleChange('firstname')}
                  onBlur={ () => setFieldTouched("firstname")}
                  />
                { touched.firstname && errors.firstname && 
                   ( <Text style={styles.errorText}>{errors.firstname}</Text>)
                }
                {/* </View> */}
           

              {/* <View> */}
                <TextInput
                  style={styles.Input}
                  placeholder="Last Name"
                  value={values.lastname}
                  onChangeText={handleChange("lastname")}
                  onBlur={ () => setFieldTouched("lastname")}
                />
                { touched.lastname && errors.lastname && 
                   ( <Text style={styles.errorText}>{errors.lastname}</Text>)
                }
              {/* </View> */}

              {/* <View> */}
                <TextInput
                  style={styles.Input}
                  placeholder="Email Address"
                  autoCapitalize={false}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={ () => setFieldTouched("email")}
                />
                { touched.email && errors.email && 
                   ( <Text style={styles.errorText}>{errors.email}</Text>)
                }
              {/* </View> */}

              {/* <View> */}
                <TextInput
                  style={styles.Input}
                  placeholder="Paaword"
                  secureTextEntry={true}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={ () => setFieldTouched("password")}
                />
                { touched.password && errors.password && 
                   ( <Text style={styles.errorText}>{errors.password}</Text>)
                }
              {/* </View> */}
              {/* <TouchableOpacity 
              onPress={() => {}}
              disabled={!isValid}
              style={[styles.Buttom, { backgroundColor: isValid ? '#395864' : '#A5C9CA' }]}
              > */}
              <Pressable
                onPress={() => navigation.navigate("Login")}
                style={styles.Buttom}
                >
                <Text style={styles.signUpButtom}>Sign up</Text>
              </Pressable>
                  {/* </TouchableOpacity> */}
            </View>
          )}}
        </Formik>
        <View></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  triangle: {
    backgroundColor: "#5d1ab2",
    width: "100%",
    height: "40%",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  TriangleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  signup: {
    fontSize: 24,
    marginBottom: 10,
  },
  Input: {
    height: 55,
    backgroundColor: "#ddd",
    paddingHorizontal: 10,
  },
  Buttom: {
    backgroundColor: "#5d1ab2",
    justifyContent: "center",
    height: 55,
  },
  signUpButtom: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  parentForm: {
    paddingHorizontal: 10,
    gap: 10,
  },
  errorText: {
    fontSize: 6,
    color: "red"
  }
});
