import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

type SkillsData = {
  Technologies: string[];
  "Architectures / Patterns": string[];
  "Soft Skills": string[];
};

export default function Skills() {
  const skillsData: SkillsData = {
    Technologies: ["Java", "Spring", "Golang", "Typescript", "Javascript", "Express"],
    "Architectures / Patterns": ["MVC", "REST", "Microservices", "Clean Architecture", "SOLID"],
    "Soft Skills": ["Communication", "Teamwork", "Problem Solving", "Critical Thinking"],
  };

  // Cria uma array tipada das chaves
  const categories = Object.keys(skillsData) as Array<keyof SkillsData>;

  return (
    <ScrollView contentContainerStyle={styles.containerContent}>
      <Text style={styles.title}>My Skills</Text>
      {categories.map((category) => (
        <View key={category} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{category}</Text>
          <View style={styles.skillsContainer}>
            {skillsData[category].map((skill, index) => (
              <View key={index} style={styles.skillCard}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerContent: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  categoryContainer: {
    marginBottom: 25,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillCard: {
    backgroundColor: '#4B9CD3',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    margin: 5,
  },
  skillText: {
    color: 'white',
    fontWeight: '600',
  },
});
