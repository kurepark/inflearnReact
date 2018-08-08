import React, { Component } from 'react';

class PhoneForm extends Component {

    input = React.createRef();
    state = {
        name:'',
        phone: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value //[e.target.name]의 name은 input의 name 속성
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone:'',
        });
        this.input.current.focus();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                name="name" 
                placeholder="이름" 
                onChange={this.handleChange} 
                value={this.state.name} 
                ref={this.input} //ref : dom에 직접 접근, 포커스, 스크롤, 돔의 크기, 외부라이브러리 등 dom에 직접적인 접근을 할 때 사용
                />
                <input 
                name="phone" 
                placeholder="전화번호" 
                onChange={this.handleChange}
                value={this.state.phone} 
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;