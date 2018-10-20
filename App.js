import React from 'react';
import { FlatList } from 'react-native';
import { getNews } from './src/components/news';
import Article from './src/components/articles';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      refreshing: true
    };
    this.fetchNews = this.fetchNews.bind(this);
  }


  fetchNews() {
    getNews().then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState({refreshing: true}, () => this.fetchNews());
  }

  componentDidMount() {
    this.fetchNews();
   }

  render() {
    return (
      <FlatList
        data={this.state.articles} //array.
        renderItem={({ item }) => <Article article={item} />} //Takes an item from data and renders it into the list.


        keyExtractor={item => item.url} //like the key in map but not. 'The default extractor checks item.key, then falls back to using the index, like React does.'
        refreshing={this.state.refreshing} // 'Set this true while waiting for new data from a refresh.'
        onRefresh={this.handleRefresh.bind(this)} //If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
      />
  );
  }
}

//
//
// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
