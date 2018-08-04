import React, { Component } from 'react';

class PhoneForm extends Component {
    state ={
        name: '',
        phone : '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();//submit 새로고침 방지
        // this.props.onCreate({
        //     name : this.state.name,
        //     phone : this.state.phone
        // })
        this.props.onCreate(this.state); //위 코드를 간단하게 사용할 수 있다
        this.setState({
            name: '',
            phone :'', //값 입력후 state 초기화
        })
    }
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <input 
                name="name"
                placeholder="이름" 
                onChange ={this.handleChange} 
                value = {this.state.name}
                 />
                <input 
                name="phone"
                placeholder="전화번호" 
                onChange={this.handleChange}
                value ={this.state.phone}
                    />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;