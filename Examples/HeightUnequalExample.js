/*
 *
 * Created by Stone
 * https://github.com/bolan9999
 * Email: shanshang130@gmail.com
 * Date: 2018/7/18
 *
 */

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LargeList, NativeLargeList } from "../src";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

class HeightUnequalExampleStatic extends React.Component {
  _sectionCount = 10;
  _rowCount = 20;

  constructor(props) {
    super(props);
    this.state = { select: 0 };
  }

  render() {
    const data = [];
    for (let section = 0; section < this._sectionCount; ++section) {
      const sContent = { items: [] };
      for (let row = 0; row < this._rowCount; ++row) {
        sContent.items.push(row);
      }
      data.push(sContent);
    }
    const List = this.props.native ? NativeLargeList : LargeList;
    return (
      <LargeList
        style={styles.container}
        data={data}
        heightForSection={() => 50}
        renderSection={this._renderSection}
        heightForIndexPath={({ section: section, row: row }) =>
          row % 2 ? 50 : 100}
        renderIndexPath={this._renderIndexPath}
      />
    );
  }

  _renderSection = (section: number) => {
    return (
      <View style={styles.section}>
        <Text>
          Section {section}
        </Text>
      </View>
    );
  };

  _renderIndexPath = ({ section: section, row: row }) => {
    return (
      <View style={styles.row}>
        <Text>
          Section {section} Row {row}
        </Text>
        <View style={styles.line} />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  section: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center"
  },
  row: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  line: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 1,
    backgroundColor: "#EEE"
  }
});

export const HeightUnequalExample = gestureHandlerRootHOC(
  HeightUnequalExampleStatic
);
