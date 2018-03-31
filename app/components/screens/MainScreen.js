import React, { Component } from 'react'
import { Container, Header, Body, Title } from 'native-base'
import { MainList } from '../lists/MainList'
import testjson from '../../../testdata/items'

const getJsonData = () => {
  if (false) {
    return [
      {
        title: '多層ニューラルネットワークの立体表示',
        body: '多層ニューラルネットワークを解釈しようとするとき、主に次の4つの方法があると考えています。',
        url: 'https://qiita.com/sudamasahiko/items/d7ea616fa2a16565ca3b'
      },
    ]
  } else {
    return testjson
  }
}

export default class MainScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: getJsonData()
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>qiita items</Title>
          </Body>
        </Header>
        <MainList
          data={this.state.data}
        />
      </Container>
    )
  }

}
