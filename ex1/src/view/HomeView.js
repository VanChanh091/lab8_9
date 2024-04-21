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
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Categories from "../api/ApiCategories";
import Courses from "../api/ApiCourses";
import Recommend from "../api/ApiRecommend";
import CoursesInspires from "../api/Api5";
import topTeacher from "../api/ApiTeacher";

const Index = () => {
  const navigation = useNavigation();

  const listCategories = ({ item }) => (
    <TouchableOpacity
      style={{
        width: "50%",
        height: 65,
        borderBottomWidth: 1,
        borderColor: "gray",
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 15,
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
          style={{
            width: "90%",
            height: "90%",
            resizeMode: "contain",
          }}
        />
      </View>
      <View
        style={{
          flex: 6.5,
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

  const listCourseInspires = ({item}) => (
    <View></View>
  )

  const listTeacher = ({item}) => (
    <View></View>
  )

  return (
    <SafeAreaView style={styles.container}>
      {/* <TopScreen/> */}
      <ScrollView>
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
            borderBottomWidth: 1,
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
            height: 500,
            borderBottomWidth: 1,
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
          <View style={{ width: "90%", height: 450 }}>
            <FlatList
              data={CoursesInspires}
              keyExtractor={(item) => item.id}
              renderItem={listCourseInspires}
            />
          </View>
        </View>

        <View
          style={{ width: "100%", height: 250, borderBottomWidth: 1 }}
        ></View>

        <View style={{ width: "100%", height: 30 }}></View>
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
