import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  TextInput,
  Image,
} from "react-native";
import * as React from "react";
import bookCover from "../assets/bookCover.jpg";
import Ionicons from "react-native-vector-icons/Ionicons";

const Books = () => {
  const [books, setBooks] = React.useState([]);
  const [bookTitle, setBookTitle] = React.useState("");
  const [bookPages, setBookPages] = React.useState("");
  const [bookRating, setBookRating] = React.useState("");
  const color = "000000";

  const generateRating = (number: number) => {
    if (number == 0) {
      return (
        <>
          <Ionicons name={"star-outline"} style={styles.star} />
          <Ionicons name={"star-outline"} style={styles.star} />
          <Ionicons name={"star-outline"} style={styles.star} />
          <Ionicons name={"star-outline"} style={styles.star} />
          <Ionicons name={"star-outline"} style={styles.star} />
        </>
      );
    }
    let toReturn = Array<any>();
    let stars: number = number;
    let starsEmpty: number = 5.0;
    for (let i = stars; i > 0.5; i -= 1.0) {
      toReturn.push(<Ionicons name={"star"} style={styles.star} />);
      starsEmpty -= 1.0;
      stars -= 1.0;
    }
    if (stars > 0) {
      toReturn.push(<Ionicons name={"star-half"} style={styles.star} />);
    }
    for (let i = starsEmpty; i > 1; i -= 1.0) {
      toReturn.push(<Ionicons name={"star-outline"} style={styles.star} />);
    }
    return toReturn;
  };

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
          pages: "540",
          rating: 5,
        },
      ];
    });
  };

  const addBookHandler = () => {
    if (bookTitle.length > 1 && !isNaN(Number(bookPages))) {
      setBooks((prev) => {
        return [
          ...prev,
          { title: bookTitle, pages: bookPages, rating: bookRating },
        ];
      });
      setBookPages("");
      setBookTitle("");
      setBookRating("0");
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
      <TextInput
        style={styles.input}
        onChangeText={(newText) => setBookRating(newText)}
        value={bookRating.toString()}
      ></TextInput>

      <FlatList
        data={books}
        renderItem={({ item }) => (
          <View style={styles.bookContent}>
            <Text style={styles.books}>
              {`title: ${item.title} \npages: ${item.pages}`}
            </Text>

            <Image style={styles.bookCover} source={bookCover} />
            {generateRating(item.rating)}
          </View>
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
    flex: 1,
    fontStyle: "italic",
  },
  bookCover: {
    maxHeight: 100,
    maxWidth: 100,
    margin: 10,
  },
  bookContent: {
    marginTop: 10,
    borderColor: "#09ad35",
    borderWidth: 5,
    paddingBottom: 5,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  star: { marginTop: 10 },
  starEnd: {
    marginRight: 10,
    marginTop: 10,
  },
});

export default Books;
