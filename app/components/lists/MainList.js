import React, { Component } from 'react'
import { View } from 'react-native'
import { List, ListItem, Text } from 'native-base'

export const MainList = (props) => {
  return (
    <List
      dataArray={props.data}
      renderRow={(item) => {
        return (
          <ListItem
            onPress={() => {
            }}
          >
            <View
            style={{
              flexDirection: 'column',
              flex: 1,
            }}
            >
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                alignSelf: 'flex-start',
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                fontSize: 12,
                paddingTop: 4,
                alignSelf: 'flex-start',
              }}
              numberOfLines={2}
            >
              {item.body}
            </Text>
            </View>
          </ListItem>
        )
      }}>
    </List>
  )
}
