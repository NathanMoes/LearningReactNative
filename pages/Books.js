import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  TextInput,
} from "react-native";
import * as React from "react";

const Books = () => {
  const [books, setBooks] = React.useState([]);
  const [bookTitle, setBookTitle] = React.useState("");
  const [bookPages, setBookPages] = React.useState("");

  const resetButtonHandler = () => {
    setBooks([]);
  };

  const booksButtonHandler = () => {
    setBooks((prev) => {
      return [
        ...prev,
        {
          title:
            "The chronicles of Narnia, the lion the witch and the wardrobe",
          pages: "a lot",
        },
      ];
    });
  };

  const addBookHandler = () => {
    setBooks((prev) => {
      return [...prev, { title: bookTitle, pages: bookPages }];
    });
  };

  return (
    <View style={styles.container}>
      <Text>Books!</Text>
      <Button title="button" onPress={booksButtonHandler}></Button>
      <Button title="reset" onPress={resetButtonHandler}></Button>
      <Button title="add book" onPress={addBookHandler}></Button>
      <TextInput
        style={styles.input}
        onChangeText={(newText) => setBookTitle(newText)}
        value={bookTitle}
      ></TextInput>
      <TextInput
        style={styles.input}
        onChangeText={(newText) => setBookPages(newText)}
        value={bookPages}
      ></TextInput>

      <FlatList
        data={books}
        renderItem={({ item }) => (
          <Text style={styles.books}>{item.title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  books: {
    minHeight: 30,
    minWidth: 30,
    margin: 10,
    padding: 10,
  },
});

export default Books;
