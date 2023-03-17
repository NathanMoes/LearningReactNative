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
  const color = "000000";

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
    if (bookTitle.length > 1) {
      setBooks((prev) => {
        return [...prev, { title: bookTitle, pages: bookPages }];
      });
      setBookPages("");
      setBookTitle("");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Books!</Text>
      <Button
        title="button"
        onPress={booksButtonHandler}
        color={`#${color}`}
      ></Button>
      <Button
        title="reset"
        onPress={resetButtonHandler}
        color={`#${color}`}
      ></Button>
      <Button
        title="add book"
        onPress={addBookHandler}
        color={`#${color}`}
      ></Button>
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
          <Text
            style={styles.books}
          >{`title: ${item.title} \n pages: ${item.pages}`}</Text>
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
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    minWidth: 300,
  },
  books: {
    minHeight: 30,
    minWidth: 30,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#09ad35",
  },
});

export default Books;
