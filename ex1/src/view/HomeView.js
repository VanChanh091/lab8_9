import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Categories from "../api/ApiCategories";
import Courses from "../api/ApiCourses";
import Recommend from "../api/ApiRecommend";
import axios from "axios";

const Index = () => {
  //getApi
  const [teacher, setTeacher] = useState([]);
  const [coursesInspires, setCoursesInspires] = useState([]);

  //Teacher
  const [imageTeacher, setImageTeacher] = useState("");
  const [nameTeacher, setNameTeacher] = useState("");
  const [school, setSchool] = useState("");
  const [rate, setRate] = useState("");
  const [review, setReview] = useState("");

  //Course Inspires
  const [imageCourse, setImageCourse] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [rateCourse, setRateCourse] = useState("");
  const [reviewCourse, setReviewCourse] = useState("");
  const [lesson, setLesson] = useState("");

  const listCategories = ({ item }) => (
    <TouchableOpacity
      style={{
        width: "48%",
        height: 65,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: "gray",
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 15,
      }}
    >
      <View
        style={{
          flex: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={item.image}
          style={{
            width: "85%",
            height: "85%",
            resizeMode: "contain",
          }}
        />
      </View>
      <View
        style={{
          flex: 6,
          justifyContent: "center",
          paddingLeft: 10,
        }}
      >
        <Text style={{ fontWeight: 400, fontSize: 18 }}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  const listCourse = ({ item }) => (
    <TouchableOpacity
      style={{
        width: 250,
        height: 230,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "gray",
        marginLeft: 15,
        marginTop: 7,
        marginRight: 7,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={item.image} style={{ width: 220, height: 100 }} />
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 8 }}>
          <View style={{ flex: 2, paddingLeft: 15 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 3 }}>
              {item.title}
            </Text>
            <Text style={{ color: "gray", fontSize: 14, marginTop: 3 }}>
              {item.author}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "blue",
                fontSize: 18,
                marginTop: 3,
              }}
            >
              ${item.price}
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{
                flex: 1.5,
                justifyContent: "center",
                // alignItems: "center",
                paddingLeft: 10,
              }}
            >
              <Ionicons name="star-outline" size={22} color="black" />
            </View>
            <View
              style={{ flex: 8.5, flexDirection: "row", alignItems: "center" }}
            >
              <Text style={{ fontSize: 15 }}>{item.rate} </Text>
              <Text style={{ fontSize: 15, color: "gray" }}>
                ({item.review})
              </Text>
              <Text style={{ fontSize: 15 }}> - {item.lesson}</Text>
              <Text style={{ fontSize: 15, color: "gray" }}> lessons</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 2,
            alignItems: "center",
            marginTop: 3,
          }}
        >
          <TouchableOpacity>
            <Ionicons name="bookmark-outline" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  const listRecommend = ({ item }) => (
    <TouchableOpacity
      style={{
        width: 250,
        height: 230,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "gray",
        marginLeft: 15,
        marginTop: 7,
        marginRight: 7,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={item.image} style={{ width: 220, height: 100 }} />
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 8 }}>
          <View style={{ flex: 2, paddingLeft: 15 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 3 }}>
              {item.title}
            </Text>
            <Text style={{ color: "gray", fontSize: 14, marginTop: 3 }}>
              {item.author}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "blue",
                fontSize: 18,
                marginTop: 3,
              }}
            >
              ${item.price}
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{
                flex: 1.5,
                justifyContent: "center",
                // alignItems: "center",
                paddingLeft: 10,
              }}
            >
              <Ionicons name="star-outline" size={22} color="black" />
            </View>
            <View
              style={{ flex: 8.5, flexDirection: "row", alignItems: "center" }}
            >
              <Text style={{ fontSize: 15 }}>{item.rate} </Text>
              <Text style={{ fontSize: 15, color: "gray" }}>
                ({item.review})
              </Text>
              <Text style={{ fontSize: 15 }}> - {item.lesson}</Text>
              <Text style={{ fontSize: 15, color: "gray" }}> lessons</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 2,
            alignItems: "center",
            marginTop: 3,
          }}
        >
          <TouchableOpacity>
            <Ionicons name="bookmark-outline" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  const listCourseInspires = ({ item }) => (
    <TouchableOpacity
      style={{
        width: "100%",
        height: 150,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "gray",
        marginTop: 15,
        flexDirection: "row",
        borderColor: "gray",
      }}
    >
      <View
        style={{
          flex: 3.5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={item.image}
          style={{ width: "80%", height: "80%", resizeMode: "contain" }}
        />
      </View>
      <View style={{ flex: 5 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            marginLeft: 5,
            marginTop: 10,
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            color: "gray",
            fontSize: 14,
            marginTop: 3,
            marginLeft: 5,
            marginTop: 5,
          }}
        >
          {item.author}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "blue",
            fontSize: 18,
            marginLeft: 5,
            marginTop: 5,
          }}
        >
          ${item.price}
        </Text>
        <View style={{ flexDirection: "row", marginTop: 5, marginLeft: 5 }}>
          <View
            style={{
              flex: 1.5,
              justifyContent: "center",
            }}
          >
            <Ionicons name="star-outline" size={22} color="black" />
          </View>
          <View
            style={{ flex: 8.5, flexDirection: "row", alignItems: "center" }}
          >
            <Text style={{ fontSize: 15 }}>{item.rate} </Text>
            <Text style={{ fontSize: 15, color: "gray" }}>({item.review})</Text>
            <Text style={{ fontSize: 15 }}> - {item.lesson}</Text>
            <Text style={{ fontSize: 15, color: "gray" }}> lessons</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 1, alignItems: "center", marginTop: 15 }}>
        <TouchableOpacity>
          <Ionicons name="bookmark-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const listTeacher = ({ item }) => (
    <TouchableOpacity
      style={{
        width: 200,
        height: 220,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "gray",
        marginLeft: 15,
        marginTop: 7,
        marginRight: 7,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={item.image} style={{ width: 170, height: 100 }} />
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginLeft: 12,
            marginTop: 5,
          }}
        >
          {item.name}
        </Text>
        <Text style={{ marginLeft: 12, marginTop: 5, fontSize: 15 }}>
          {item.school}
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 12,
            marginTop: 5,
            alignItems: "center",
          }}
        >
          <Ionicons name="star-outline" size={22} color="black" />
          <Text style={{ fontSize: 14, paddingLeft: 5 }}>
            {item.rate} ({item.review})
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    axios
      .get(`https://6627001fb625bf088c071863.mockapi.io/topTeacher`)
      .then((response) => {
        setTeacher(response.data);
        console.log("Data teacher: ", teacher);
      })
      .catch((error) => {
        console.log("error retrieving Teacher: ", error);
      });

    axios
      .get(`https://6627001fb625bf088c071863.mockapi.io/courseInspire`)
      .then((response) => {
        setCoursesInspires(response.data);
        console.log("Data Course: ", coursesInspires);
      })
      .catch((error) => {
        console.log("error retrieving Course: ", error);
      });
  }, []);

  // const handleAddTeacher = () => {
  //   const teacher = {
  //     image: imageTeacher,
  //     name: nameTeacher,
  //     school: school,
  //     rate: rate,
  //     review: review,
  //   }
  //   axios.post(`https://6627001fb625bf088c071863.mockapi.io/topTeacher`, teacher)
  //   .then((response) => {
  //     console.log(response);
  //     Alert.alert("Add Teacher successful",);
  //     setImageTeacher("");
  //     setNameTeacher("");
  //     setSchool("");
  //     setRate("");
  //     setReview("");
  //   })
  //   .catch((error) => {
  //     Alert.alert(
  //       "Add Teacher Error",
  //     );
  //     console.log("Add Teacher failed", error);
  //   });
  // };

  // const handleAddCourse = () => {
  //   const course = {
  //     image: imageCourse,
  //     title: title,
  //     author: author,
  //     price: price,
  //     rate: rateCourse,
  //     review: reviewCourse,
  //     lesson: lesson,
  //   }
  //   axios.post(`https://6627001fb625bf088c071863.mockapi.io/courseInspire`, course)
  //   .then((response) => {
  //     console.log(response);
  //     Alert.alert("Add Teacher successful");
  //     setImageCourse("");
  //     setTitle("");
  //     setAuthor("");
  //     setPrice("");
  //     setRate("");
  //     setReview("");
  //     setLesson("");
  //   })
  //   .catch((error) => {
  //     Alert.alert(
  //       "Add Course Error",
  //     );
  //     console.log("Add Course failed", error);
  //   });
  // };

  return (
    <SafeAreaView style={styles.container}>
      {/* <TopScreen/> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
      >
        <View style={{ width: "100%", height: 330 }}>
          <View
            style={{
              width: "100%",
              height: 100,
              backgroundColor: "#535ce9",
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ justifyContent: "center" }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 26,
                    color: "white",
                    paddingLeft: 20,
                    marginTop: 10,
                  }}
                >
                  Hello, Rosie!
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <TouchableOpacity>
                  <Ionicons name="cart-outline" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingLeft: 15, paddingRight: 20 }}>
                  <Ionicons
                    name="notifications-outline"
                    size={30}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 16,
                  color: "white",
                  paddingLeft: 20,
                }}
              >
                What do you want to learn today?
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              height: 230,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "90%",
                height: "85%",
                backgroundColor: "#f1c933",
                borderRadius: 5,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 6,
                  justifyContent: "center",
                }}
              >
                <View style={{ width: "100%", height: "70%" }}>
                  <View
                    style={{
                      flex: 1,
                      paddingLeft: 20,
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: 16, fontWeight: 400 }}>
                      PROJECT MANAGEMENT
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      paddingLeft: 20,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 24,
                        marginTop: -10,
                      }}
                    >
                      20% OFF
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      paddingLeft: 20,
                      justifyContent: "center",
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        height: "95%",
                        width: "50%",
                        backgroundColor: "#535ce9",
                        borderRadius: 5,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "600",
                          fontSize: 18,
                          color: "white",
                        }}
                      >
                        JOIN NOW
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={{ flex: 4, justifyContent: "flex-end" }}>
                <Image
                  source={require("../img/man1.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                />
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            height: 300,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              height: 50,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View style={{ justifyContent: "center", paddingLeft: 5 }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                Categories
              </Text>
            </View>
            <TouchableOpacity
              style={{ paddingRight: 5, justifyContent: "center" }}
            >
              <Text style={{ color: "blue", fontWeight: 300, fontSize: 16 }}>
                View more
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "90%", height: 250 }}>
            <FlatList
              scrollEnabled={false}
              columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
              data={Categories}
              keyExtractor={(item) => item.id}
              numColumns={2}
              horizontal={false}
              renderItem={listCategories}
            />
          </View>
        </View>

        <View
          style={{
            width: "100%",
            height: 300,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              height: 50,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View style={{ justifyContent: "center", paddingLeft: 5 }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                Popular Courses
              </Text>
            </View>
            <TouchableOpacity
              style={{ paddingRight: 5, justifyContent: "center" }}
            >
              <Text style={{ color: "blue", fontWeight: 300, fontSize: 16 }}>
                View more
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", height: 250 }}>
            <FlatList
              // scrollEnabled={false}
              data={Courses}
              keyExtractor={(item) => item.id}
              horizontal={true}
              renderItem={listCourse}
            />
          </View>
        </View>

        <View
          style={{
            width: "100%",
            height: 300,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              height: 50,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View style={{ justifyContent: "center", paddingLeft: 5 }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                Recommend
              </Text>
            </View>
            <TouchableOpacity
              style={{ paddingRight: 5, justifyContent: "center" }}
            >
              <Text style={{ color: "blue", fontWeight: 300, fontSize: 16 }}>
                View more
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", height: 250 }}>
            <FlatList
              scrollEnabled={false}
              data={Recommend}
              keyExtractor={(item) => item.id}
              horizontal={true}
              renderItem={listRecommend}
            />
          </View>
        </View>

        <View
          style={{
            width: "100%",
            height: 570,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              height: 50,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View style={{ justifyContent: "center", paddingLeft: 5 }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                Courses that inspires
              </Text>
            </View>
            <TouchableOpacity
              style={{ paddingRight: 5, justifyContent: "center" }}
            >
              <Text style={{ color: "blue", fontWeight: 300, fontSize: 16 }}>
                View more
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "90%", height: 520 }}>
            <FlatList
              scrollEnabled={false}
              data={coursesInspires}
              keyExtractor={(item) => item.id}
              renderItem={listCourseInspires}
            />
          </View>
        </View>

        <View
          style={{
            width: "100%",
            height: 300,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              height: 50,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View style={{ justifyContent: "center", paddingLeft: 5 }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                Top Teachers
              </Text>
            </View>
            <TouchableOpacity
              style={{ paddingRight: 5, justifyContent: "center" }}
            >
              <Text style={{ color: "blue", fontWeight: 300, fontSize: 16 }}>
                Add Teacher
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", height: 250 }}>
            <FlatList
              scrollEnabled={false}
              data={teacher}
              keyExtractor={(item) => item.id}
              horizontal={true}
              renderItem={listTeacher}
            />
          </View>
        </View>

        <View style={{ width: "100%", height: 15 }}></View>
      </ScrollView>
      <StatusBar />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
    borderBottomWidth: 1,
  },
});
