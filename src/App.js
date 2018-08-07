import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 0;//사용자화면에 보여줄게 아니기 때문에 state에 넣지 않아도 좋다

  state = {
    information :[],
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information : information.concat(Object.assign({}, data, {//Object.assign를 이용해 배열에 데이터 넣기
        //...data,
        // name: data.name,
        // phone: data.phone, 데이터를 넣는 여러가지 방법들
        id : this.id++
      })) //concat내장함수를 사용하여 새로운 배열에 데이터를 넣어준다
    });
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information : information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) =>{
    const {information} = this.state;
    this.setState = {
      information : information.map(
        info => {
          if(info.id === id){
            return{
              id,
              ...data,
            };
          }
          return info;
        }
      )
    };
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate = {this.handleCreate} />
        <PhoneInfoList
          data = {this.state.information}
          onRemove = {this.handleRemove}
          onUpdate = {this.handleUpdate}
          />
      </div>
    );
  }
}

export default App;
